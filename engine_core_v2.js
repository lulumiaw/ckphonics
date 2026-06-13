// ═══════════════════════════════════════════
//  ENGINE CORE v2
//  新增功能：
//  - 分段發音（b→i→t→bit 自動序列）
//  - 音素按鈕顯示
//  - 對比練習（short vs long）
//  - 外部連結支援
//  - 可設定 localStorage key（多網站共用引擎）
// ═══════════════════════════════════════════

// ─── Storage Key（各網站可覆寫）───
if (typeof STORAGE_KEY === 'undefined') var STORAGE_KEY = 'phonics';

// ─── STATE ───
let stars = parseInt(localStorage.getItem(STORAGE_KEY+'_stars') || '0');
let completed = JSON.parse(localStorage.getItem(STORAGE_KEY+'_done') || '[]');
let currentLesson = null;
let currentTopic = 0;
let quizIndex = 0;
let quizScore = 0;
const imgCache = {};

// ─── INIT ───
function init() {
  renderProgressBar();
  renderLessonMap();
}

function renderProgressBar() {
  const el = document.getElementById('star-num');
  if (el) el.textContent = stars;
  const container = document.getElementById('progress-stars');
  if (!container) return;
  container.innerHTML = '';
  for (let i = 0; i < Math.min(stars, 20); i++) {
    const s = document.createElement('span');
    s.className = 'star earned';
    s.textContent = '⭐';
    container.appendChild(s);
  }
}

function renderLessonMap() {
  const grid = document.getElementById('lesson-grid');
  if (!grid) return;
  grid.innerHTML = '';
  LESSONS.forEach(lesson => {
    const done = completed.includes(lesson.id);
    const card = document.createElement('div');
    card.className = `lesson-card${done ? ' done' : ''}`;
    card.dataset.color = lesson.color;
    card.innerHTML = `
      ${done ? '<span class="done-badge">✅</span>' : ''}
      <span class="lesson-emoji">${lesson.emoji}</span>
      <div class="lesson-num">Chapter ${lesson.id}</div>
      <div class="lesson-title">${lesson.title}</div>
    `;
    card.addEventListener('click', () => openLesson(lesson.id));
    grid.appendChild(card);
  });
}

// ─── SCREENS ───
function showMap() {
  document.getElementById('screen-map').classList.add('active');
  document.getElementById('screen-lesson').classList.remove('active');
  renderLessonMap();
}

function openLesson(id) {
  currentLesson = LESSONS.find(l => l.id === id);
  currentTopic = 0;
  document.getElementById('screen-map').classList.remove('active');
  document.getElementById('screen-lesson').classList.add('active');
  renderLesson();
}

// ═══════════════════════════════════════════
//  PHONEME SPLITTING — b-i-t → bit
// ═══════════════════════════════════════════

// Split a word into phonemes for sequential speaking
// e.g. "bit" → ["b","i","t"] or use custom phonemes array
function getPhonemes(word, customPhonemes) {
  if (customPhonemes && customPhonemes.length) return customPhonemes;
  // Simple split: each character
  return word.split('');
}

// Speak word letter by letter then whole word
async function speakWordSegmented(word, cardIdx, phonemes) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();

  const card = document.getElementById(`wc-${cardIdx}`);
  const segs = getPhonemes(word, phonemes);

  // Show segmented display animation
  if (card) {
    const segDisplay = card.querySelector('.seg-display');
    if (segDisplay) {
      segDisplay.innerHTML = segs.map((s,i) =>
        `<span id="seg-${cardIdx}-${i}" class="seg-letter">${s}</span>`
      ).join('<span class="seg-dash">-</span>');
      segDisplay.style.display = 'flex';
    }
  }

  const delay = ms => new Promise(r => setTimeout(r, ms));

  // Speak each phoneme
  for (let i = 0; i < segs.length; i++) {
    const seg = segs[i];
    // Highlight current segment
    const segEl = document.getElementById(`seg-${cardIdx}-${i}`);
    if (segEl) segEl.classList.add('seg-active');

    await new Promise(resolve => {
      const u = new SpeechSynthesisUtterance(seg);
      u.lang = 'en-US';
      u.rate = 0.7;
      u.onend = resolve;
      window.speechSynthesis.speak(u);
    });

    if (segEl) segEl.classList.remove('seg-active');
    await delay(200);
  }

  // Pause then say full word
  await delay(300);
  if (card) card.classList.add('playing');

  await new Promise(resolve => {
    const u = new SpeechSynthesisUtterance(word);
    u.lang = 'en-US';
    u.rate = 0.75;
    u.onend = resolve;
    window.speechSynthesis.speak(u);
  });

  if (card) {
    card.classList.remove('playing');
    const segDisplay = card.querySelector('.seg-display');
    if (segDisplay) setTimeout(() => { segDisplay.style.display = 'none'; }, 1000);
  }
}

// Simple full-word speak (for quiz, story etc.)
function speakWord(word, cardIdx) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(word);
  u.lang = 'en-US'; u.rate = 0.8;
  const card = document.getElementById(`wc-${cardIdx}`);
  if (card) {
    card.classList.add('playing');
    setTimeout(() => card.classList.remove('playing'), 700);
  }
  window.speechSynthesis.speak(u);
}

function speakText(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-US'; u.rate = 0.75;
  window.speechSynthesis.speak(u);
}

// Speak a single phoneme sound
function speakPhoneme(ph) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(ph);
  u.lang = 'en-US'; u.rate = 0.6;
  window.speechSynthesis.speak(u);
}

// ═══════════════════════════════════════════
//  WORD CARD BUILDER
// ═══════════════════════════════════════════
function makeWordCard(w, globalIdx) {
  const syllableDisplay = w.syllable && w.syllable !== w.word
    ? `<span class="word-syllable">${w.syllable}</span>` : '';
  const noteHtml = w.note
    ? `<div class="word-exception-note">${w.note}</div>` : '';

  // Phoneme buttons (if word has phonemes defined)
  const phonemes = w.phonemes || null;
  const phonemeDisplay = phonemes
    ? `<div class="phoneme-row">${phonemes.map(p =>
        `<button class="ph-btn" onclick="event.stopPropagation();speakPhoneme('${p.replace(/'/g,"\\'")}')">
          <span class="ph-letter">${p}</span>
        </button>`
      ).join('<span class="ph-arrow">→</span>')}
      <span class="ph-arrow">→</span>
      <button class="ph-btn ph-full" onclick="event.stopPropagation();speakText('${w.word.replace(/'/g,"\\'")}')">
        <span class="ph-letter">${w.word}</span>
      </button>
      </div>` : '';

  // Segmented display area (populated during playback)
  const segDisplay = `<div class="seg-display" style="display:none"></div>`;

  // Main click: segmented if phonemes defined, else full word
  const clickFn = phonemes
    ? `speakWordSegmented('${w.word.replace(/'/g,"\\'")}', ${globalIdx}, ${JSON.stringify(phonemes)})`
    : `speakWord('${w.word.replace(/'/g,"\\'")}', ${globalIdx})`;

  return `
    <div class="word-card${w.note ? ' has-note' : ''}" id="wc-${globalIdx}"
         onclick="${clickFn}" tabindex="0">
      <button class="sound-btn" onclick="event.stopPropagation();${clickFn}">🔊</button>
      <div class="word-img-placeholder" id="wimg-${globalIdx}">${w.emoji}</div>
      <span class="word-text">${highlightLetters(w.word, w.highlight)}</span>
      ${syllableDisplay}
      ${segDisplay}
      ${phonemeDisplay}
      <span class="word-zh">${w.zh}</span>
      ${noteHtml}
    </div>`;
}

// ═══════════════════════════════════════════
//  CONTRAST PAIRS (short vs long)
// ═══════════════════════════════════════════
function buildContrastSection(pairs) {
  if (!pairs || !pairs.length) return '';
  const rows = pairs.map(p => `
    <div class="contrast-row">
      <div class="contrast-card" onclick="speakText('${p.short}')">
        <span class="contrast-word short-word">${p.short}</span>
        <span class="contrast-label">短音</span>
        <span class="contrast-zh">${p.shortZh}</span>
      </div>
      <div class="contrast-arrow">→</div>
      <div class="contrast-card" onclick="speakText('${p.long}')">
        <span class="contrast-word long-word">${p.long}</span>
        <span class="contrast-label">長音（+e）</span>
        <span class="contrast-zh">${p.longZh}</span>
      </div>
    </div>
  `).join('');
  return `
    <div class="contrast-section">
      <h3>🔄 對比練習 Short vs Long（點擊聽發音）</h3>
      <p style="font-size:0.85rem;color:#888;margin-bottom:12px">左邊是短母音，右邊加上 e 後變成長母音！</p>
      <div class="contrast-grid">${rows}</div>
    </div>`;
}

// ═══════════════════════════════════════════
//  EXTERNAL LINK BOX
// ═══════════════════════════════════════════
function buildLinkBox(links) {
  if (!links || !links.length) return '';
  const items = links.map(l => `
    <a href="${l.url}" target="_blank" class="ext-link-card">
      <span class="ext-link-icon">${l.icon || '🔗'}</span>
      <div>
        <div class="ext-link-title">${l.title}</div>
        <div class="ext-link-desc">${l.desc || ''}</div>
      </div>
    </a>
  `).join('');
  return `
    <div class="ext-links-section">
      <h3>🌐 延伸練習資源</h3>
      ${items}
    </div>`;
}

// ═══════════════════════════════════════════
//  LESSON RENDERER
// ═══════════════════════════════════════════
function highlightLetters(word, pattern) {
  if (!pattern) return word;
  const escaped = pattern.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  return word.replace(new RegExp(`(${escaped})`, 'i'),
    `<span class="word-highlight">$1</span>`);
}

function switchTopic(idx) {
  currentTopic = idx;
  quizIndex = 0; quizScore = 0;
  _quizIdx = 0; _quizScore = 0; _quizData = [];
  renderLesson();
  window.scrollTo({ top: 120, behavior: 'smooth' });
}

function renderLesson() {
  const lesson = currentLesson;
  const topic = lesson.topics[currentTopic];
  const container = document.getElementById('lesson-content');

  // Tabs
  const tabsHtml = lesson.topics.map((t, i) =>
    `<button class="topic-tab${i === currentTopic ? ' active' : ''}" onclick="switchTopic(${i})">${t.name}</button>`
  ).join('');

  // Rules
  const rulesHtml = topic.rules.map(r => `<li>${r}</li>`).join('');

  // Phoneme header (if topic has a sound badge)
  const phonemeHeader = topic.soundBadge
    ? `<div class="sound-badge-row">
        <button class="sound-badge-big" onclick="speakPhoneme('${topic.soundBadge.replace(/'/g,"\\'")}')">
          ${topic.soundBadge} 🔊
        </button>
        ${topic.soundLabel ? `<span class="sound-badge-label">${topic.soundLabel}</span>` : ''}
       </div>` : '';

  // External links
  const linksHtml = buildLinkBox(topic.links || lesson.links);

  // Words section
  let wordsSectionHtml = '';
  let allWords = [];

  if (topic.wordGroups) {
    let globalIdx = 0;
    wordsSectionHtml = '<div class="words-section"><h3>🎯 單字練習（點擊聽分段發音！）</h3>';
    topic.wordGroups.forEach(group => {
      const cardsHtml = group.words.map(w => {
        const card = makeWordCard(w, globalIdx);
        allWords.push({ w, idx: globalIdx });
        globalIdx++;
        return card;
      }).join('');
      wordsSectionHtml += `
        <div class="word-group-box" style="border-color:${group.groupBorder};background:${group.groupColor}">
          <div class="word-group-label">${group.groupLabel}</div>
          <div class="word-group-note">${group.groupNote}</div>
          <div class="words-grid">${cardsHtml}</div>
        </div>`;
    });
    wordsSectionHtml += '</div>';
  } else if (topic.words && topic.words.length) {
    const cardsHtml = topic.words.map((w, wi) => {
      allWords.push({ w, idx: wi });
      return makeWordCard(w, wi);
    }).join('');
    wordsSectionHtml = `
      <div class="words-section">
        <h3>🎯 單字練習（點擊聽分段發音！）</h3>
        <div class="words-grid">${cardsHtml}</div>
      </div>`;
  }

  // Contrast pairs
  const contrastHtml = buildContrastSection(topic.contrastPairs);

  // Quiz
  const quizHtml = buildQuiz(topic.quiz);

  // Story (last topic only)
  const isLastTopic = currentTopic === lesson.topics.length - 1;
  const storyHtml = isLastTopic && lesson.story ? buildStory(lesson.story) : '';

  container.innerHTML = `
    <div class="lesson-header">
      <div class="big-emoji">${lesson.emoji}</div>
      <h2>Chapter ${lesson.id}：${lesson.title}</h2>
      <p>${lesson.topics.length} 個主題 · 點擊單字可以聽分段發音</p>
    </div>

    <div class="topic-tabs">${tabsHtml}</div>

    ${linksHtml}

    ${phonemeHeader}

    <div class="rule-box">
      <h3>📌 規則說明 Rules</h3>
      <ul>${rulesHtml}</ul>
    </div>

    ${wordsSectionHtml}
    ${contrastHtml}
    ${quizHtml}

    <div id="congrats-box" class="congrats-box">
      <div class="big-star">🌟</div>
      <h3>太棒了！You did it!</h3>
      <p>你完成了這個主題！繼續下一個吧！</p>
      <br>
      <button class="btn-primary" onclick="nextTopic()">下一個主題 →</button>
    </div>

    ${storyHtml}
  `;

  allWords.forEach(({ w, idx }) => loadWordImage(w, idx));
  if (topic.quiz && topic.quiz.length > 0) {
    setTimeout(() => loadQuizImage(topic.quiz[0], `quiz-img-0`), 50);
  }
}

// ═══════════════════════════════════════════
//  IMAGES
// ═══════════════════════════════════════════
async function loadWordImage(word, wi) {
  const placeholderEl = document.getElementById(`wimg-${wi}`);
  if (!placeholderEl) return;
  const query = encodeURIComponent(word.search || word.word);
  const url = `https://source.unsplash.com/80x80/?${query}`;
  if (imgCache[word.word]) {
    placeholderEl.outerHTML = `<img class="word-img" src="${imgCache[word.word]}" alt="${word.word}" width="80" height="80" onerror="this.style.display='none'">`;
    return;
  }
  try {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      imgCache[word.word] = url;
      const el = document.getElementById(`wimg-${wi}`);
      if (el) el.outerHTML = `<img class="word-img" src="${url}" alt="${word.word}" width="80" height="80" style="border-radius:10px;margin-bottom:8px;">`;
    };
  } catch(e) {}
}

// ═══════════════════════════════════════════
//  QUIZ
// ═══════════════════════════════════════════
let _quizData = [], _quizIdx = 0, _quizScore = 0;

function buildQuiz(quizData) {
  if (!quizData || quizData.length === 0) return '';
  _quizIdx = 0; _quizScore = 0; _quizData = quizData;
  return `
    <div class="practice-section">
      <h3>✏️ 小測驗 Quiz Time!</h3>
      <div id="quiz-container">${renderQuizQuestion(quizData[0], 0, quizData.length)}</div>
    </div>`;
}

function renderQuizQuestion(q, idx, total) {
  const imgId = `quiz-img-${idx}`;
  const choicesHtml = q.choices.map(c => {
    const safeC = c.replace(/'/g, "\\'");
    const safeA = q.answer.replace(/'/g, "\\'");
    return `<button class="quiz-choice" onclick="checkAnswer('${safeC}','${safeA}',this)">${c}</button>`;
  }).join('');
  return `
    <div style="font-size:0.8rem;color:#aaa;text-align:right;margin-bottom:8px">第 ${idx+1} / ${total} 題</div>
    <div class="quiz-img-area">
      <div class="quiz-img-placeholder" id="${imgId}">${q.emoji || '❓'}</div>
      <div class="quiz-word-block">
        <div class="quiz-word-display" onclick="speakText('${(q.speak||q.word).replace(/'/g,"\\'")}')">${q.displayWord || q.word} 🔊</div>
        <div class="quiz-hint">${q.hint || ''}</div>
      </div>
    </div>
    <div class="quiz-choices" id="quiz-choices">${choicesHtml}</div>
    <div class="quiz-feedback" id="quiz-feedback"></div>
    <div class="quiz-nav">
      <button class="btn-secondary" id="quiz-next" onclick="nextQuiz()" style="display:none">下一題 →</button>
      <button class="btn-primary" id="quiz-finish" onclick="finishQuiz()" style="display:none">完成！🎉</button>
    </div>`;
}

function loadQuizImage(q, imgId) {
  if (!q.search) return;
  const url = `https://source.unsplash.com/90x90/?${encodeURIComponent(q.search)}`;
  const img = new Image();
  img.src = url;
  img.onload = () => {
    const el = document.getElementById(imgId);
    if (el) el.innerHTML = `<img src="${url}" width="90" height="90" style="border-radius:12px;object-fit:cover;">`;
  };
}

function checkAnswer(selected, correct, btn) {
  document.querySelectorAll('.quiz-choice').forEach(b => b.disabled = true);
  const feedback = document.getElementById('quiz-feedback');
  if (selected === correct) {
    btn.classList.add('correct');
    feedback.textContent = '🎉 正確！Correct!';
    feedback.className = 'quiz-feedback correct';
    _quizScore++;
  } else {
    btn.classList.add('wrong');
    document.querySelectorAll('.quiz-choice').forEach(b => { if (b.textContent.trim() === correct) b.classList.add('correct'); });
    feedback.textContent = `💪 答案是「${correct}」，再加油！`;
    feedback.className = 'quiz-feedback wrong';
  }
  _quizIdx++;
  const next = document.getElementById('quiz-next');
  const fin  = document.getElementById('quiz-finish');
  if (_quizIdx < _quizData.length) { if (next) next.style.display = 'inline-block'; }
  else { if (fin) fin.style.display = 'inline-block'; }
}

function nextQuiz() {
  const q = _quizData[_quizIdx];
  document.getElementById('quiz-container').innerHTML = renderQuizQuestion(q, _quizIdx, _quizData.length);
  loadQuizImage(q, `quiz-img-${_quizIdx}`);
}

function finishQuiz() {
  _quizIdx = 0;
  stars++;
  localStorage.setItem(STORAGE_KEY+'_stars', stars);
  renderProgressBar();
  const c = document.getElementById('congrats-box');
  if (c) { c.classList.add('show'); c.scrollIntoView({ behavior: 'smooth' }); }
}

function nextTopic() {
  if (currentTopic < currentLesson.topics.length - 1) {
    switchTopic(currentTopic + 1);
  } else {
    if (!completed.includes(currentLesson.id)) {
      completed.push(currentLesson.id);
      stars += 3;
      localStorage.setItem(STORAGE_KEY+'_stars', stars);
      localStorage.setItem(STORAGE_KEY+'_done', JSON.stringify(completed));
      renderProgressBar();
    }
    const s = document.getElementById('story-section');
    if (s) { s.scrollIntoView({ behavior: 'smooth' }); s.style.border = '4px solid gold'; }
  }
}

// ═══════════════════════════════════════════
//  STORY
// ═══════════════════════════════════════════
function buildStory(story) {
  const pagesHtml = story.pages.map(p => {
    let line = p.en;
    p.highlights.forEach(h => {
      line = line.replace(new RegExp(`\\b(${h})\\b`, 'g'),
        `<span class="highlight-word" onclick="speakText('$1')">$1</span>`);
    });
    return `
      <div class="story-page" onclick="speakText('${p.en.replace(/'/g,"\\'")}')">
        <div class="story-line">${line}</div>
        <div class="story-zh">${p.zh}</div>
      </div>`;
  }).join('');
  return `
    <div class="storybook" id="story-section">
      <h3>📖 ${story.title}</h3>
      <p class="story-subtitle">點擊每句話可以聽發音，粉紅色單字也可以單獨點！</p>
      <div style="margin-bottom:14px">
        <button class="story-read-btn" onclick="readFullStory()">🔊 朗讀整個故事</button>
        <button class="story-read-btn" style="background:var(--green)" onclick="stopStory()">⏹ 停止</button>
      </div>
      ${pagesHtml}
    </div>`;
}

function readFullStory() {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  speakText(currentLesson.story.pages.map(p => p.en).join(' '));
}
function stopStory() { window.speechSynthesis && window.speechSynthesis.cancel(); }

// ─── START ───
init();

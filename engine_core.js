// ═══════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════
let stars = parseInt(localStorage.getItem('xue_phonics_stars') || '0');
let completed = JSON.parse(localStorage.getItem('xue_phonics_done') || '[]');
let currentLesson = null;
let currentTopic = 0;
let quizIndex = 0;
let quizScore = 0;

// Unsplash image cache
const imgCache = {};

// ═══════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════
function init() {
  renderProgressBar();
  renderLessonMap();
}

function renderProgressBar() {
  document.getElementById('star-num').textContent = stars;
  const container = document.getElementById('progress-stars');
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
  grid.innerHTML = '';
  LESSONS.forEach((lesson, idx) => {
    const done = completed.includes(lesson.id);
    const card = document.createElement('div');
    card.className = `lesson-card${done ? ' done' : ''}`;
    card.dataset.color = lesson.color;
    card.innerHTML = `
      ${done ? '<span class="done-badge">✅</span>' : ''}
      <span class="lesson-emoji">${lesson.emoji}</span>
      <div class="lesson-num">Lesson ${lesson.id}</div>
      <div class="lesson-title">${lesson.title}</div>
    `;
    card.addEventListener('click', () => openLesson(lesson.id));
    grid.appendChild(card);
  });
}

// ═══════════════════════════════════════════
//  SCREENS
// ═══════════════════════════════════════════
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
//  LESSON RENDERER
// ═══════════════════════════════════════════
function makeWordCard(w, globalIdx) {
  const syllableDisplay = w.syllable && w.syllable !== w.word
    ? `<span class="word-syllable">${w.syllable}</span>` : '';
  const noteHtml = w.note
    ? `<div class="word-exception-note">${w.note}</div>` : '';
  return `
    <div class="word-card${w.note ? ' has-note' : ''}" id="wc-${globalIdx}"
         onclick="speakWord('${w.word.replace(/'/g,"\\'")}', ${globalIdx})" tabindex="0">
      <button class="sound-btn" onclick="event.stopPropagation(); speakWord('${w.word.replace(/'/g,"\\'")}', ${globalIdx})">🔊</button>
      <div class="word-img-placeholder" id="wimg-${globalIdx}">${w.emoji}</div>
      <span class="word-text">${highlightLetters(w.word, w.highlight)}</span>
      ${syllableDisplay}
      <span class="word-zh">${w.zh}</span>
      ${noteHtml}
    </div>`;
}

function renderLesson() {
  const lesson = currentLesson;
  const topic = lesson.topics[currentTopic];
  const container = document.getElementById('lesson-content');

  // Tab HTML
  const tabsHtml = lesson.topics.map((t, i) =>
    `<button class="topic-tab${i === currentTopic ? ' active' : ''}" onclick="switchTopic(${i})">${t.name}</button>`
  ).join('');

  // Rules
  const rulesHtml = topic.rules.map(r => `<li>${r}</li>`).join('');

  // Words section — support optional wordGroups
  let wordsSectionHtml = '';
  let allWords = [];   // flat list for image loading

  if (topic.wordGroups) {
    // Two-group layout
    let globalIdx = 0;
    wordsSectionHtml = '<div class="words-section"><h3>🎯 單字練習（點擊發音！）</h3>';
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
  } else {
    // Standard flat layout
    const cardsHtml = topic.words.map((w, wi) => {
      allWords.push({ w, idx: wi });
      return makeWordCard(w, wi);
    }).join('');
    wordsSectionHtml = `
      <div class="words-section">
        <h3>🎯 單字練習（點擊發音！）</h3>
        <div class="words-grid">${cardsHtml}</div>
      </div>`;
  }

  // Quiz
  const quizHtml = buildQuiz(topic.quiz);

  // Story (only on last topic)
  const isLastTopic = currentTopic === lesson.topics.length - 1;
  const storyHtml = buildStory(lesson.story);

  container.innerHTML = `
    <div class="lesson-header">
      <div class="big-emoji">${lesson.emoji}</div>
      <h2>Lesson ${lesson.id}：${lesson.title}</h2>
      <p>${lesson.topics.length} 個主題 · 每個主題都有單字練習和小測驗</p>
    </div>

    <div class="topic-tabs">${tabsHtml}</div>

    <div class="rule-box">
      <h3>📌 規則說明 Rules</h3>
      <ul>${rulesHtml}</ul>
    </div>

    ${wordsSectionHtml}

    ${quizHtml}

    <div id="congrats-box" class="congrats-box">
      <div class="big-star">🌟</div>
      <h3>太棒了！You did it!</h3>
      <p>你完成了這個主題！繼續下一個吧！</p>
      <br>
      <button class="btn-primary" onclick="nextTopic()">下一個主題 →</button>
    </div>

    ${isLastTopic ? storyHtml : ''}
  `;

  // Load word images
  allWords.forEach(({ w, idx }) => loadWordImage(w, idx));

  // Load quiz image for first question
  if (topic.quiz && topic.quiz.length > 0) {
    setTimeout(() => loadQuizImage(topic.quiz[0], `quiz-img-0`), 50);
  }
}

function highlightLetters(word, pattern) {
  // Highlight specified letters
  const escaped = pattern.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  return word.replace(new RegExp(`(${escaped})`, 'i'),
    `<span class="word-highlight">$1</span>`);
}

function switchTopic(idx) {
  currentTopic = idx;
  quizIndex = 0;
  quizScore = 0;
  _quizIdx = 0;
  _quizScore = 0;
  _quizData = [];
  renderLesson();
  window.scrollTo({ top: 120, behavior: 'smooth' });
}

function nextTopic() {
  if (currentTopic < currentLesson.topics.length - 1) {
    switchTopic(currentTopic + 1);
  } else {
    // Lesson complete
    if (!completed.includes(currentLesson.id)) {
      completed.push(currentLesson.id);
      stars += 3;
      localStorage.setItem('xue_phonics_stars', stars);
      localStorage.setItem('xue_phonics_done', JSON.stringify(completed));
      renderProgressBar();
    }
    const storySection = document.getElementById('story-section');
    if (storySection) {
      storySection.scrollIntoView({ behavior: 'smooth' });
      storySection.style.border = '4px solid gold';
    }
  }
}

// ═══════════════════════════════════════════
//  IMAGES (Unsplash)
// ═══════════════════════════════════════════
async function loadWordImage(word, wi) {
  const placeholderEl = document.getElementById(`wimg-${wi}`);
  if (!placeholderEl) return;

  // Use Unsplash Source API (free, no key needed)
  const query = encodeURIComponent(word.search || word.word);
  const url = `https://source.unsplash.com/80x80/?${query}`;

  // Check cache
  if (imgCache[word.word]) {
    placeholderEl.outerHTML = `<img class="word-img" src="${imgCache[word.word]}" alt="${word.word}" width="80" height="80" onerror="this.style.display='none'">`;
    return;
  }

  try {
    const img = new Image();
    img.src = url;
    img.className = 'word-img';
    img.alt = word.word;
    img.width = 80; img.height = 80;
    img.onload = () => {
      imgCache[word.word] = url;
      const el = document.getElementById(`wimg-${wi}`);
      if (el) el.outerHTML = `<img class="word-img" src="${url}" alt="${word.word}" width="80" height="80" style="border-radius:10px;margin-bottom:8px;">`;
    };
    img.onerror = () => {}; // keep emoji fallback
  } catch(e) {}
}

// ═══════════════════════════════════════════
//  SPEECH
// ═══════════════════════════════════════════
function speakWord(word, cardIdx) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();

  const utter = new SpeechSynthesisUtterance(word);
  utter.lang = 'en-US';
  utter.rate = 0.8;

  // Visual feedback
  const card = document.getElementById(`wc-${cardIdx}`);
  if (card) {
    card.classList.add('playing');
    setTimeout(() => card.classList.remove('playing'), 700);
  }
  window.speechSynthesis.speak(utter);
}

function speakText(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'en-US';
  utter.rate = 0.75;
  window.speechSynthesis.speak(utter);
}

// ═══════════════════════════════════════════
//  QUIZ
// ═══════════════════════════════════════════
let _quizData = [];
let _quizIdx = 0;
let _quizScore = 0;

function buildQuiz(quizData) {
  if (!quizData || quizData.length === 0) return '';
  _quizIdx = 0;
  _quizScore = 0;
  _quizData = quizData;
  return `
    <div class="practice-section">
      <h3>✏️ 小測驗 Quiz Time!</h3>
      <div id="quiz-container">${renderQuizQuestion(quizData[0], 0, quizData.length)}</div>
    </div>
  `;
}

function renderQuizQuestion(q, idx, total) {
  const imgId = `quiz-img-${idx}`;
  const imgHtml = `<div class="quiz-img-placeholder" id="${imgId}">${q.emoji || '❓'}</div>`;

  const choicesHtml = q.choices.map(c => {
    const safeC = c.replace(/'/g, "\\'");
    const safeA = q.answer.replace(/'/g, "\\'");
    return `<button class="quiz-choice" onclick="checkAnswer('${safeC}','${safeA}',this)">${c}</button>`;
  }).join('');

  const progressHtml = `<div style="font-size:0.8rem;color:#aaa;text-align:right;margin-bottom:8px">第 ${idx+1} / ${total} 題</div>`;

  return `
    ${progressHtml}
    <div class="quiz-img-area">
      ${imgHtml}
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
    </div>
  `;
}

// Load quiz image after render
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
  const choices = document.querySelectorAll('.quiz-choice');
  choices.forEach(b => b.disabled = true);
  const feedback = document.getElementById('quiz-feedback');

  if (selected === correct) {
    btn.classList.add('correct');
    feedback.textContent = '🎉 正確！Correct!';
    feedback.className = 'quiz-feedback correct';
    _quizScore++;
  } else {
    btn.classList.add('wrong');
    choices.forEach(b => { if (b.textContent.trim() === correct) b.classList.add('correct'); });
    feedback.textContent = `💪 答案是「${correct}」，再加油！`;
    feedback.className = 'quiz-feedback wrong';
  }

  _quizIdx++;
  const nextBtn = document.getElementById('quiz-next');
  const finishBtn = document.getElementById('quiz-finish');
  if (_quizIdx < _quizData.length) {
    if (nextBtn) nextBtn.style.display = 'inline-block';
  } else {
    if (finishBtn) finishBtn.style.display = 'inline-block';
  }
}

function nextQuiz() {
  const q = _quizData[_quizIdx];
  const container = document.getElementById('quiz-container');
  container.innerHTML = renderQuizQuestion(q, _quizIdx, _quizData.length);
  loadQuizImage(q, `quiz-img-${_quizIdx}`);
}

function finishQuiz() {
  _quizIdx = 0;
  stars += 1;
  localStorage.setItem('xue_phonics_stars', stars);
  renderProgressBar();

  const congrats = document.getElementById('congrats-box');
  if (congrats) {
    congrats.classList.add('show');
    congrats.scrollIntoView({ behavior: 'smooth' });
  }
}

// ═══════════════════════════════════════════
//  STORY
// ═══════════════════════════════════════════
function buildStory(story) {
  const pagesHtml = story.pages.map((p, pi) => {
    // Highlight specific words
    let line = p.en;
    p.highlights.forEach(h => {
      const re = new RegExp(`\\b(${h})\\b`, 'g');
      line = line.replace(re, `<span class="highlight-word" onclick="speakText('$1')">$1</span>`);
    });
    return `
      <div class="story-page" onclick="speakText('${p.en.replace(/'/g,"\\'")}')">
        <div class="story-line">${line}</div>
        <div class="story-zh">${p.zh}</div>
      </div>
    `;
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
    </div>
  `;
}

function readFullStory() {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const story = currentLesson.story;
  const fullText = story.pages.map(p => p.en).join(' ');
  speakText(fullText);
}
function stopStory() {
  window.speechSynthesis && window.speechSynthesis.cancel();
}

// ═══════════════════════════════════════════
//  START
// ═══════════════════════════════════════════
init();

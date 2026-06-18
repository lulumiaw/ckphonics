// Oxford Phonics World Level 5 — 進階音組
const LESSONS = [
  {
    id: 401, title: "R-controlled：ar/ir/ur/er/or", emoji: "🌀", color: 0,
    links: [{ url: "https://elt.oup.com/student/oxfordphonicsworld/level05/watch?cc=tw&selLanguage=zh", icon: "🎬", title: "Oxford Phonics World Level 5", desc: "點此觀看 Level 5 影片練習" }],
    topics: [
      {
        name: "ar / ir / ur / er / or",
        soundBadge: "r控制音", soundLabel: "ar or ir er ur",
        rules: [
          "<b>ar /ɑːr/</b>：car、star、farm、bark、large",
          "<b>ir /ɜːr/</b>：bird、girl、first、shirt、circus",
          "<b>ur /ɜːr/</b>：burn、nurse、turtle、purple、hurt",
          "<b>er /ɜːr/</b>（重音節）：her、term、fern",
          "<b>or /ɔːr/</b>：corn、horse、sport、forest、born"
        ],
        words: [
          { word: "car",    highlight: "ar", zh: "汽車", emoji: "🚗", search: "car", phonemes: ["c","ar"] },
          { word: "farm",   highlight: "ar", zh: "農場", emoji: "🌾", search: "farm", phonemes: ["f","ar","m"] },
          { word: "shark",  highlight: "ar", zh: "鯊魚", emoji: "🦈", search: "shark", phonemes: ["sh","ar","k"] },
          { word: "star",   highlight: "ar", zh: "星星", emoji: "⭐", search: "star", phonemes: ["st","ar"] },
          { word: "bird",   highlight: "ir", zh: "鳥", emoji: "🐦", search: "bird", phonemes: ["b","ir","d"] },
          { word: "first",  highlight: "ir", zh: "第一", emoji: "🥇", search: "first medal", phonemes: ["f","ir","st"] },
          { word: "girl",   highlight: "ir", zh: "女孩", emoji: "👧", search: "girl", phonemes: ["g","ir","l"] },
          { word: "shirt",  highlight: "ir", zh: "襯衫", emoji: "👕", search: "shirt", phonemes: ["sh","ir","t"] },
          { word: "hurt",   highlight: "ur", zh: "受傷", emoji: "🤕", search: "hurt injury", phonemes: ["h","ur","t"] },
          { word: "nurse",  highlight: "ur", zh: "護士", emoji: "👩‍⚕️", search: "nurse", phonemes: ["n","ur","se"] },
          { word: "turtle", highlight: "ur", zh: "烏龜", emoji: "🐢", search: "turtle", phonemes: ["t","ur","t","le"] },
          { word: "fern",   highlight: "er", zh: "蕨類", emoji: "🌿", search: "fern plant", phonemes: ["f","er","n"] },
          { word: "corn",   highlight: "or", zh: "玉米", emoji: "🌽", search: "corn", phonemes: ["c","or","n"] },
          { word: "horse",  highlight: "or", zh: "馬", emoji: "🐎", search: "horse", phonemes: ["h","or","se"] },
          { word: "sport",  highlight: "or", zh: "運動", emoji: "⚽", search: "sport soccer", phonemes: ["sp","or","t"] }
        ],
        quiz: [
          { word: "star", speak: "star", displayWord: "st_r", answer: "ar → /ɑːr/",
            choices: ["ar → /ɑːr/","er → /ɜːr/","ir → /ɜːr/","or → /ɔːr/"],
            hint: "⭐ star，ar → /ɑːr/！", emoji: "⭐", search: "star" },
          { word: "girl", speak: "girl", displayWord: "g_rl", answer: "ir → /ɜːr/",
            choices: ["ar → /ɑːr/","er → /ɜːr/","ir → /ɜːr/","or → /ɔːr/"],
            hint: "👧 girl，ir → /ɜːr/！", emoji: "👧", search: "girl" },
          { word: "corn", speak: "corn", displayWord: "c_rn", answer: "or → /ɔːr/",
            choices: ["ar → /ɑːr/","er → /ɜːr/","ir → /ɜːr/","or → /ɔːr/"],
            hint: "🌽 corn，or → /ɔːr/！", emoji: "🌽", search: "corn" }
        ]
      }
    ],
    story: {
      title: "🐎 The Horse on the Farm",
      pages: [
        { en: "A horse on a farm saw a star in the dark.", zh: "農場上的馬在黑暗中看見了星星。", highlights: ["horse","farm","star","dark"] },
        { en: "A girl in a shirt hurt her arm.", zh: "一個穿襯衫的女孩弄傷了手臂。", highlights: ["girl","shirt","hurt"] },
        { en: "The nurse came first with a turtle and a fern.", zh: "護士第一個來，帶著烏龜和蕨類。", highlights: ["nurse","first","turtle","fern"] },
        { en: "They played sport by the corn — what a great farm!", zh: "他們在玉米旁邊玩運動——多麼棒的農場！", highlights: ["sport","corn","farm"] }
      ]
    }
  },
  {
    id: 402, title: "ou/ow · oi/oy · oo/u · au/aw · all/wa · oar", emoji: "🔀", color: 1,
    topics: [
      {
        name: "ou /aʊ/ · ow /aʊ/ · oi /ɔɪ/ · oy /ɔɪ/",
        soundBadge: "ou ow oi oy", soundLabel: "雙母音組合",
        rules: [
          "<b>ou /aʊ/</b>：out、loud、cloud、mouse、shout",
          "<b>ow /aʊ/</b>（另一個音）：cow、down、town、how、now",
          "<b>oi /ɔɪ/</b>（字中）：coin、boil、soil、point、voice",
          "<b>oy /ɔɪ/</b>（字尾）：boy、toy、joy、enjoy"
        ],
        words: [
          { word: "cloud",  highlight: "ou", zh: "雲（ou=/aʊ/）", emoji: "☁️", search: "cloud", phonemes: ["cl","ou","d"] },
          { word: "found",  highlight: "ou", zh: "找到（ou=/aʊ/）", emoji: "🔍", search: "found", phonemes: ["f","ou","nd"] },
          { word: "loud",   highlight: "ou", zh: "大聲（ou=/aʊ/）", emoji: "🔊", search: "loud speaker", phonemes: ["l","ou","d"] },
          { word: "mouse",  highlight: "ou", zh: "老鼠（ou=/aʊ/）", emoji: "🐭", search: "mouse", phonemes: ["m","ou","se"] },
          { word: "shout",  highlight: "ou", zh: "大叫（ou=/aʊ/）", emoji: "📢", search: "shout", phonemes: ["sh","ou","t"] },
          { word: "cow",    highlight: "ow", zh: "牛（ow=/aʊ/）", emoji: "🐄", search: "cow", phonemes: ["c","ow"] },
          { word: "down",   highlight: "ow", zh: "向下（ow=/aʊ/）", emoji: "⬇️", search: "down arrow", phonemes: ["d","ow","n"] },
          { word: "town",   highlight: "ow", zh: "小鎮（ow=/aʊ/）", emoji: "🏘️", search: "town village", phonemes: ["t","ow","n"] },
          { word: "coin",   highlight: "oi", zh: "硬幣（oi字中）", emoji: "🪙", search: "coin money", phonemes: ["c","oi","n"] },
          { word: "point",  highlight: "oi", zh: "重點（oi字中）", emoji: "👆", search: "point finger", phonemes: ["p","oi","nt"] },
          { word: "soil",   highlight: "oi", zh: "土壤（oi字中）", emoji: "🌱", search: "soil dirt", phonemes: ["s","oi","l"] },
          { word: "boy",    highlight: "oy", zh: "男孩（oy字尾）", emoji: "👦", search: "boy kid", phonemes: ["b","oy"] },
          { word: "enjoy",  highlight: "oy", zh: "享受（oy字尾）", emoji: "🎉", search: "enjoy", phonemes: ["en","j","oy"] },
          { word: "toy",    highlight: "oy", zh: "玩具（oy字尾）", emoji: "🧸", search: "toy teddy", phonemes: ["t","oy"] },
          { word: "joy",    highlight: "oy", zh: "快樂（oy字尾）", emoji: "😊", search: "joy happy", phonemes: ["j","oy"] }
        ],
        quiz: [
          { word: "cloud", speak: "cloud", displayWord: "cloud", answer: "ou → /aʊ/",
            choices: ["ou → /aʊ/","ou → /oʊ/","ou → /uː/","ou → /ʌ/"],
            hint: "☁️ cloud，ou 唸 /aʊ/！", emoji: "☁️", search: "cloud" },
          { word: "coin", speak: "coin", displayWord: "c__n", answer: "oi（字中用）",
            choices: ["oi（字中用）","oy（字尾用）","ou","ow"],
            hint: "🪙 coin，字中間用 oi！", emoji: "🪙", search: "coin money" }
        ]
      },
      {
        name: "oo/u · au/aw · all/wa · oar/or",
        soundBadge: "oo au aw all", soundLabel: "更多母音組合",
        rules: [
          "<b>oo /uː/</b>（長音）：moon、food、school、boot",
          "<b>oo /ʊ/</b>（短音）：book、cook、look、foot",
          "<b>u /uː/</b>（字尾開音節）：flu、menu、tofu",
          "<b>au /ɔː/</b>：sauce、fault、August、cause",
          "<b>aw /ɔː/</b>：saw、claw、draw、lawn、yawn",
          "<b>all /ɔl/</b>：ball、call、fall、tall、wall",
          "<b>wa /wɑ/</b>（w後 a 唸/ɑ/）：want、wash、watch、wasp",
          "<b>oar /ɔːr/</b>：oar、board、roar、soar"
        ],
        words: [
          { word: "moon",   highlight: "oo", zh: "月亮（長oo）", emoji: "🌙", search: "moon", phonemes: ["m","oo","n"] },
          { word: "book",   highlight: "oo", zh: "書（短oo）", emoji: "📚", search: "book", phonemes: ["b","oo","k"] },
          { word: "sauce",  highlight: "au", zh: "醬汁（au=/ɔː/）", emoji: "🫙", search: "sauce", phonemes: ["s","au","ce"] },
          { word: "fault",  highlight: "au", zh: "錯誤（au=/ɔː/）", emoji: "❌", search: "fault error", phonemes: ["f","au","lt"] },
          { word: "claw",   highlight: "aw", zh: "爪子（aw=/ɔː/）", emoji: "🦞", search: "claw lobster", phonemes: ["cl","aw"] },
          { word: "draw",   highlight: "aw", zh: "畫（aw=/ɔː/）", emoji: "✏️", search: "draw art", phonemes: ["dr","aw"] },
          { word: "yawn",   highlight: "aw", zh: "打哈欠（aw=/ɔː/）", emoji: "😪", search: "yawn tired", phonemes: ["y","aw","n"] },
          { word: "ball",   highlight: "all", zh: "球（all=/ɔl/）", emoji: "⚽", search: "ball soccer", phonemes: ["b","all"] },
          { word: "tall",   highlight: "all", zh: "高的（all=/ɔl/）", emoji: "🦒", search: "tall giraffe", phonemes: ["t","all"] },
          { word: "want",   highlight: "wa", zh: "想要（wa）", emoji: "💭", search: "want wish", phonemes: ["w","a","nt"] },
          { word: "wash",   highlight: "wa", zh: "洗（wa）", emoji: "🧼", search: "wash hands", phonemes: ["w","a","sh"] },
          { word: "watch",  highlight: "wa", zh: "手錶/看（wa）", emoji: "⌚", search: "watch clock", phonemes: ["w","a","tch"] },
          { word: "board",  highlight: "oar", zh: "板子（oar=/ɔːr/）", emoji: "📋", search: "board", phonemes: ["b","oar","d"] },
          { word: "roar",   highlight: "oar", zh: "吼叫（oar=/ɔːr/）", emoji: "🦁", search: "roar lion", phonemes: ["r","oar"] },
          { word: "soar",   highlight: "oar", zh: "翱翔（oar=/ɔːr/）", emoji: "🦅", search: "soar eagle", phonemes: ["s","oar"] }
        ],
        quiz: [
          { word: "sauce", speak: "sauce", displayWord: "sauce", answer: "au → /ɔː/",
            choices: ["au → /aʊ/","au → /ɔː/","au → /oʊ/","au → /æ/"],
            hint: "🫙 sauce，au → /ɔː/！", emoji: "🫙", search: "sauce" },
          { word: "want", speak: "want", displayWord: "want", answer: "wa → a唸/ɑ/",
            choices: ["wa → a唸/æ/","wa → a唸/ɑ/","wa → a唸/eɪ/","wa → a不發音"],
            hint: "💭 want，w 後面的 a 唸 /ɑ/，不是 /æ/！", emoji: "💭", search: "want wish" }
        ]
      }
    ],
    story: {
      title: "🦅 The Eagle That Could Soar",
      pages: [
        { en: "An eagle could soar and roar above the tall wall.", zh: "一隻老鷹可以在高牆上翱翔和吼叫。", highlights: ["soar","roar","tall","wall"] },
        { en: "A boy found a coin in the soil — he shouted with joy!", zh: "一個男孩在土壤裡找到了硬幣——他高興地大叫！", highlights: ["boy","coin","soil","joy"] },
        { en: "The cow watched the moon and began to yawn.", zh: "牛看著月亮開始打哈欠。", highlights: ["cow","moon","yawn"] },
        { en: "They wanted to draw the claw of the loud shark.", zh: "他們想要畫那隻大聲鯊魚的爪子。", highlights: ["wanted","draw","claw","loud","shark"] }
      ]
    }
  },
  {
    id: 403, title: "air/are · ea · ear · eer · 長短母音複習", emoji: "🎯", color: 2,
    topics: [
      {
        name: "air /ɛər/ · are /ɛər/ · ea /ɛ/ · ear三個音 · eer /ɪər/",
        soundBadge: "air are ear eer", soundLabel: "進階R音組",
        rules: [
          "<b>air /ɛər/</b>：air、chair、fair、hair、pair、stair",
          "<b>are /ɛər/</b>：bare、care、dare、fare、hare、share、spare",
          "<b>ea /ɛ/</b>（短音特例）：bread、head、dead、spread、feather、weather",
          "<b>ear /ɪər/</b>（最常見）：ear、fear、hear、near、year、dear",
          "<b>ear /ɛər/</b>（像 air）：bear、pear、wear、swear",
          "<b>ear /ɜːr/</b>（像 er/ir/ur）：earth、early、earn、learn、search",
          "<b>eer /ɪər/</b>：beer、deer、peer、steer、cheer"
        ],
        words: [
          { word: "chair",   highlight: "air", zh: "椅子（air=/ɛər/）", emoji: "🪑", search: "chair", phonemes: ["ch","air"] },
          { word: "fair",    highlight: "air", zh: "公平（air=/ɛər/）", emoji: "⚖️", search: "fair", phonemes: ["f","air"] },
          { word: "hair",    highlight: "air", zh: "頭髮（air=/ɛər/）", emoji: "💇", search: "hair", phonemes: ["h","air"] },
          { word: "pair",    highlight: "air", zh: "一對（air=/ɛər/）", emoji: "👟", search: "pair shoes", phonemes: ["p","air"] },
          { word: "care",    highlight: "are", zh: "關心（are=/ɛər/）", emoji: "❤️", search: "care love", phonemes: ["c","are"] },
          { word: "share",   highlight: "are", zh: "分享（are=/ɛər/）", emoji: "🤝", search: "share", phonemes: ["sh","are"] },
          { word: "bread",   highlight: "ea",  zh: "麵包（ea=/ɛ/ 特例）", emoji: "🍞", search: "bread", phonemes: ["br","ea","d"] },
          { word: "feather", highlight: "ea",  zh: "羽毛（ea=/ɛ/ 特例）", emoji: "🪶", search: "feather", phonemes: ["f","ea","th","er"] },
          { word: "weather", highlight: "ea",  zh: "天氣（ea=/ɛ/ 特例）", emoji: "🌤️", search: "weather", phonemes: ["w","ea","th","er"] },
          { word: "ear",     highlight: "ear", zh: "耳朵（ear=/ɪər/）", emoji: "👂", search: "ear", phonemes: ["ear"] },
          { word: "fear",    highlight: "ear", zh: "恐懼（ear=/ɪər/）", emoji: "😱", search: "fear scared", phonemes: ["f","ear"] },
          { word: "bear",    highlight: "ear", zh: "熊（ear=/ɛər/ 特例）", emoji: "🐻", search: "bear", phonemes: ["b","ear"] },
          { word: "earth",   highlight: "ear", zh: "地球（ear=/ɜːr/）", emoji: "🌍", search: "earth", phonemes: ["ear","th"] },
          { word: "learn",   highlight: "ear", zh: "學習（ear=/ɜːr/）", emoji: "📚", search: "learn study", phonemes: ["l","ear","n"] },
          { word: "cheer",   highlight: "eer", zh: "歡呼（eer=/ɪər/）", emoji: "🎉", search: "cheer celebrate", phonemes: ["ch","eer"] }
        ],
        quiz: [
          { word: "bear", speak: "bear", displayWord: "bear", answer: "/ɛər/（像air）",
            choices: ["/ɪər/（最常見）","/ɛər/（像air）","/ɜːr/（像er）","/eər/"],
            hint: "🐻 bear，ear 唸 /ɛər/，像 air！", emoji: "🐻", search: "bear" },
          { word: "earth", speak: "earth", displayWord: "earth", answer: "/ɜːr/（像er/ir/ur）",
            choices: ["/ɪər/（最常見）","/ɛər/（像air）","/ɜːr/（像er/ir/ur）","/eər/"],
            hint: "🌍 earth，ear 唸 /ɜːr/！", emoji: "🌍", search: "earth" },
          { word: "fear", speak: "fear", displayWord: "fear", answer: "/ɪər/（最常見）",
            choices: ["/ɪər/（最常見）","/ɛər/（像air）","/ɜːr/（像er）","/eɪr/"],
            hint: "😱 fear，ear 唸 /ɪər/（最常見）！", emoji: "😱", search: "fear scared" }
        ]
      }
    ],
    story: {
      title: "🐻 The Bear and the Fair",
      pages: [
        { en: "A bear with fair hair sat on a chair.", zh: "一隻有著漂亮毛髮的熊坐在椅子上。", highlights: ["bear","fair","hair","chair"] },
        { en: "It feared the weather — bread and feathers everywhere!", zh: "牠害怕天氣——到處都是麵包和羽毛！", highlights: ["feared","weather","bread","feathers"] },
        { en: "The crowd gave a cheer: 'We care and share!'", zh: "人群歡呼：「我們關心和分享！」", highlights: ["cheer","care","share"] },
        { en: "The bear learned early — earth is worth it!", zh: "熊早早學到了——地球是值得的！", highlights: ["bear","learned","early","earth"] }
      ]
    }
  },
  {
    id: 404, title: "長短母音a·e·i·o·u複習 + 無聲字 + 字尾音", emoji: "🏆", color: 3,
    topics: [
      {
        name: "長短母音 a/e/i/o/u 對比複習",
        soundBadge: "長短母音", soundLabel: "完整複習！",
        rules: [
          "短母音（閉音節，子音夾住）：cat/bet/bit/hot/cup",
          "長母音（Magic e / 母音組合）：cake/Pete/bite/note/cute",
          "<b>a</b>：短/æ/ cat vs 長/eɪ/ cake",
          "<b>e</b>：短/ɛ/ bet vs 長/iː/ bee/ea",
          "<b>i</b>：短/ɪ/ bit vs 長/aɪ/ bike/igh",
          "<b>o</b>：短/ɑ/ hot vs 長/oʊ/ note/oa",
          "<b>u</b>：短/ʌ/ cup vs 長/juː/ cute/ue"
        ],
        contrastPairs: [
          { short: "cat",  shortZh: "貓（短a）",  long: "cake",  longZh: "蛋糕（長a）" },
          { short: "bet",  shortZh: "打賭（短e）", long: "beet",  longZh: "甜菜（長e）" },
          { short: "bit",  shortZh: "一點（短i）", long: "bite",  longZh: "咬（長i）" },
          { short: "hot",  shortZh: "熱（短o）",   long: "hope",  longZh: "希望（長o）" },
          { short: "cut",  shortZh: "剪（短u）",   long: "cute",  longZh: "可愛（長u）" }
        ],
        words: [
          { word: "cat",   highlight: "a",   zh: "貓（短a）", emoji: "🐱", search: "cat", phonemes: ["c","a","t"] },
          { word: "cake",  highlight: "a_e", zh: "蛋糕（長a）", emoji: "🎂", search: "cake", phonemes: ["c","a","k","e"] },
          { word: "bed",   highlight: "e",   zh: "床（短e）", emoji: "🛏️", search: "bed", phonemes: ["b","e","d"] },
          { word: "tree",  highlight: "ee",  zh: "樹（長e）", emoji: "🌳", search: "tree", phonemes: ["tr","ee"] },
          { word: "sit",   highlight: "i",   zh: "坐（短i）", emoji: "🪑", search: "sit chair", phonemes: ["s","i","t"] },
          { word: "kite",  highlight: "i_e", zh: "風箏（長i）", emoji: "🪁", search: "kite flying", phonemes: ["k","i","t","e"] },
          { word: "hot",   highlight: "o",   zh: "熱（短o）", emoji: "🔥", search: "hot fire", phonemes: ["h","o","t"] },
          { word: "boat",  highlight: "oa",  zh: "船（長o）", emoji: "⛵", search: "boat", phonemes: ["b","oa","t"] },
          { word: "cup",   highlight: "u",   zh: "杯子（短u）", emoji: "☕", search: "cup mug", phonemes: ["c","u","p"] },
          { word: "blue",  highlight: "ue",  zh: "藍色（長u）", emoji: "💙", search: "blue color", phonemes: ["bl","ue"] }
        ],
        quiz: [
          { word: "cake", speak: "cake", displayWord: "cake", answer: "長音 /eɪ/",
            choices: ["短音 /æ/","長音 /eɪ/","長音 /iː/","短音 /ɑ/"],
            hint: "🎂 cake，a_e → 長音 /eɪ/！", emoji: "🎂", search: "cake" },
          { word: "sit", speak: "sit", displayWord: "sit", answer: "短音 /ɪ/",
            choices: ["短音 /ɪ/","長音 /aɪ/","長音 /iː/","短音 /ɛ/"],
            hint: "🪑 sit，閉音節 → 短音 /ɪ/！", emoji: "🪑", search: "sit chair" }
        ]
      },
      {
        name: "無聲字 + 字尾音：kn/wr/mb/ve/rh/st + sure/ture/sion/tion + ful/ous",
        soundBadge: "無聲字 + 字尾", soundLabel: "綜合進階",
        rules: [
          "<b>kn</b>（k不發音）：know、knife、knee、knock",
          "<b>wr</b>（w不發音）：write、wrap、wrong、wrist",
          "<b>mb</b>（b不發音）：lamb、comb、bomb、climb",
          "<b>ve</b>（讓字不以v結尾）：give、have、love、live",
          "<b>rh</b>（h不發音）：rhythm、rhino、rhyme",
          "<b>st</b>（t不發音特定位置）：castle、listen、whistle",
          "<b>sure /ʒɔr/</b>：treasure、measure、pleasure",
          "<b>ture /tʃər/</b>：picture、nature、future、creature",
          "<b>sion /ʒən/</b>：vision、television、decision",
          "<b>tion /ʃən/</b>：nation、station、action",
          "<b>-ful</b>：helpful、beautiful、wonderful、careful",
          "<b>-ous</b>：famous、nervous、dangerous、enormous"
        ],
        words: [
          { word: "know",     highlight: "kn",   zh: "知道（k不發音）", emoji: "💡", search: "know idea", phonemes: ["kn","ow"] },
          { word: "write",    highlight: "wr",   zh: "寫（w不發音）", emoji: "✍️", search: "write pen", phonemes: ["wr","i","te"] },
          { word: "lamb",     highlight: "mb",   zh: "小羊（b不發音）", emoji: "🐑", search: "lamb sheep", phonemes: ["l","a","mb"] },
          { word: "give",     highlight: "ve",   zh: "給（e讓字不以v結尾）", emoji: "🎁", search: "give gift", phonemes: ["g","i","ve"] },
          { word: "rhino",    highlight: "rh",   zh: "犀牛（h不發音）", emoji: "🦏", search: "rhino", phonemes: ["rh","i","n","o"] },
          { word: "castle",   highlight: "st",   zh: "城堡（t不發音）", emoji: "🏰", search: "castle", phonemes: ["ca","st","le"] },
          { word: "treasure", highlight: "sure", zh: "寶藏（sure=/ʒɔr/）", emoji: "💰", search: "treasure gold", phonemes: ["trea","sure"] },
          { word: "picture",  highlight: "ture", zh: "圖片（ture=/tʃər/）", emoji: "🖼️", search: "picture", phonemes: ["pic","ture"] },
          { word: "vision",   highlight: "sion", zh: "視力（sion=/ʒən/）", emoji: "👁️", search: "vision eye", phonemes: ["vi","sion"] },
          { word: "nation",   highlight: "tion", zh: "國家（tion=/ʃən/）", emoji: "🌍", search: "nation country", phonemes: ["na","tion"] },
          { word: "helpful",  highlight: "ful",  zh: "有幫助的（-ful）", emoji: "🤝", search: "helpful", phonemes: ["help","ful"] },
          { word: "beautiful",highlight: "ful",  zh: "美麗的（-ful）", emoji: "🌸", search: "beautiful flower", phonemes: ["beau","ti","ful"] },
          { word: "famous",   highlight: "ous",  zh: "著名的（-ous）", emoji: "⭐", search: "famous star", phonemes: ["fa","m","ous"] },
          { word: "dangerous",highlight: "ous",  zh: "危險的（-ous）", emoji: "⚠️", search: "dangerous warning", phonemes: ["dan","ger","ous"] },
          { word: "enormous", highlight: "ous",  zh: "巨大的（-ous）", emoji: "🐋", search: "enormous whale", phonemes: ["e","nor","m","ous"] }
        ],
        quiz: [
          { word: "write", speak: "write", displayWord: "write", answer: "w 不發音",
            choices: ["w=/w/","w 不發音","w=/v/","w=/r/"],
            hint: "✍️ write，wr 中 w 不發音！", emoji: "✍️", search: "write pen" },
          { word: "picture", speak: "picture", displayWord: "pic-ture", answer: "ture → /tʃər/",
            choices: ["ture → /tjʊər/","ture → /tʃər/","ture → /tɪuːr/","ture → /tʌr/"],
            hint: "🖼️ picture，ture 唸 /tʃər/！", emoji: "🖼️", search: "picture" },
          { word: "famous", speak: "famous", displayWord: "fa-mous", answer: "ous → /əs/",
            choices: ["ous → /ɔːs/","ous → /uːs/","ous → /əs/","ous → /ɪs/"],
            hint: "⭐ famous，-ous 唸輕音 /əs/！", emoji: "⭐", search: "famous star" }
        ]
      }
    ],
    story: {
      title: "🏆 The Grand Phonics Champion",
      pages: [
        { en: "The famous rhino knew how to write and give beautiful pictures.", zh: "那隻著名的犀牛知道如何寫字並給出美麗的圖畫。", highlights: ["famous","rhino","knew","write","give","beautiful","pictures"] },
        { en: "It climbed the castle and shared a treasure with the lamb.", zh: "牠爬上城堡，和小羊分享了寶藏。", highlights: ["climbed","castle","treasure","lamb"] },
        { en: "The enormous nation had a vision — helpful and dangerous too!", zh: "那個巨大的國家有遠見——既有幫助又危險！", highlights: ["enormous","nation","vision","helpful","dangerous"] },
        { en: "You know the rules — write them and be famous!", zh: "你知道規則了——把它們寫下來，成為名人！", highlights: ["know","write","famous"] }
      ]
    }
  }
];

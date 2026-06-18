// Oxford Phonics World Level 3 — 長母音字族
const LESSONS = [
  {
    id: 201, title: "a_e / ake / ame / ave", emoji: "🌟", color: 0,
    links: [{ url: "https://elt.oup.com/student/oxfordphonicsworld/level03/watch?cc=tw&selLanguage=zh", icon: "🎬", title: "Oxford Phonics World Level 3", desc: "點此觀看 Level 3 影片練習" }],
    topics: [
      {
        name: "a_e 長音 /eɪ/ — ake / ame / ave",
        soundBadge: "a_e", soundLabel: "長音 /eɪ/\nMagic e！",
        rules: ["字尾有 e → a 唸長音 /eɪ/", "字族：-ake、-ame、-ave、-ate、-ane"],
        contrastPairs: [
          { short: "cap", shortZh: "帽子", long: "cape", longZh: "斗篷" },
          { short: "man", shortZh: "男人", long: "mane", longZh: "鬃毛" },
          { short: "mad", shortZh: "生氣", long: "made", longZh: "製作了" }
        ],
        words: [
          { word: "bake",  highlight: "ake", zh: "烤", emoji: "🍞", search: "bake bread", phonemes: ["b","a","k","e"] },
          { word: "cake",  highlight: "ake", zh: "蛋糕", emoji: "🎂", search: "cake", phonemes: ["c","a","k","e"] },
          { word: "fake",  highlight: "ake", zh: "假的", emoji: "🎭", search: "fake", phonemes: ["f","a","k","e"] },
          { word: "lake",  highlight: "ake", zh: "湖", emoji: "🏞️", search: "lake", phonemes: ["l","a","k","e"] },
          { word: "make",  highlight: "ake", zh: "製作", emoji: "🔨", search: "make craft", phonemes: ["m","a","k","e"] },
          { word: "rake",  highlight: "ake", zh: "耙子", emoji: "🌾", search: "rake garden", phonemes: ["r","a","k","e"] },
          { word: "take",  highlight: "ake", zh: "拿", emoji: "🤲", search: "take hand", phonemes: ["t","a","k","e"] },
          { word: "wake",  highlight: "ake", zh: "醒來", emoji: "⏰", search: "wake up", phonemes: ["w","a","k","e"] },
          { word: "came",  highlight: "ame", zh: "來了", emoji: "👋", search: "came arrived", phonemes: ["c","a","m","e"] },
          { word: "fame",  highlight: "ame", zh: "名聲", emoji: "⭐", search: "fame star", phonemes: ["f","a","m","e"] },
          { word: "game",  highlight: "ame", zh: "遊戲", emoji: "🎮", search: "game", phonemes: ["g","a","m","e"] },
          { word: "name",  highlight: "ame", zh: "名字", emoji: "🪪", search: "name tag", phonemes: ["n","a","m","e"] },
          { word: "same",  highlight: "ame", zh: "相同的", emoji: "🔁", search: "same equal", phonemes: ["s","a","m","e"] },
          { word: "cave",  highlight: "ave", zh: "洞穴", emoji: "🕳️", search: "cave", phonemes: ["c","a","v","e"] },
          { word: "wave",  highlight: "ave", zh: "海浪/揮手", emoji: "🌊", search: "wave ocean", phonemes: ["w","a","v","e"] }
        ],
        quiz: [
          { word: "cake", speak: "cake", displayWord: "c-a-k-e", answer: "長音 /eɪ/（a_e）",
            choices: ["短音 /æ/","長音 /eɪ/（a_e）","長音 /iː/","長音 /oʊ/"],
            hint: "🎂 cake，a_e → a 唸長音 /eɪ/！", emoji: "🎂", search: "cake" },
          { word: "game", speak: "game", displayWord: "g-a-m-e", answer: "ame → /eɪm/",
            choices: ["am → /æm/","ame → /eɪm/","aim → /eɪm/","aim → /æm/"],
            hint: "🎮 game，-ame 字族，a 唸長音！", emoji: "🎮", search: "game" }
        ]
      }
    ],
    story: {
      title: "🎮 The Game by the Lake",
      pages: [
        { en: "Jake came to the lake to bake a cake.", zh: "傑克來到湖邊烤蛋糕。", highlights: ["came","lake","bake","cake"] },
        { en: "The game had the same name — Wake and Make!", zh: "遊戲有個相同的名字——醒來和製作！", highlights: ["game","same","name"] },
        { en: "A wave came and hit the cake.", zh: "一個海浪打來打到了蛋糕。", highlights: ["wave","came","cake"] },
        { en: "Jake said: 'I will make a new one — take your time!'", zh: "傑克說：「我會再做一個——慢慢來！」", highlights: ["make","take"] }
      ]
    }
  },
  {
    id: 202, title: "i_e / ime / ine / ive", emoji: "💫", color: 1,
    topics: [
      {
        name: "i_e 長音 /aɪ/ — ime / ine / ive / ike / ite",
        soundBadge: "i_e", soundLabel: "長音 /aɪ/\nMagic e！",
        rules: ["字尾有 e → i 唸長音 /aɪ/", "字族：-ime、-ine、-ive、-ike、-ite"],
        contrastPairs: [
          { short: "bit",  shortZh: "一點", long: "bite",  longZh: "咬" },
          { short: "din",  shortZh: "喧嚣", long: "dine",  longZh: "用餐" },
          { short: "pin",  shortZh: "別針", long: "pine",  longZh: "松樹" }
        ],
        words: [
          { word: "dime",  highlight: "ime", zh: "一角錢", emoji: "🪙", search: "dime coin", phonemes: ["d","i","m","e"] },
          { word: "lime",  highlight: "ime", zh: "萊姆", emoji: "🍋", search: "lime fruit", phonemes: ["l","i","m","e"] },
          { word: "mime",  highlight: "ime", zh: "默劇", emoji: "🎭", search: "mime performance", phonemes: ["m","i","m","e"] },
          { word: "time",  highlight: "ime", zh: "時間", emoji: "⏰", search: "time clock", phonemes: ["t","i","m","e"] },
          { word: "dine",  highlight: "ine", zh: "用餐", emoji: "🍽️", search: "dine restaurant", phonemes: ["d","i","n","e"] },
          { word: "fine",  highlight: "ine", zh: "好的", emoji: "👍", search: "fine good", phonemes: ["f","i","n","e"] },
          { word: "line",  highlight: "ine", zh: "線", emoji: "📏", search: "line", phonemes: ["l","i","n","e"] },
          { word: "mine",  highlight: "ine", zh: "我的", emoji: "👆", search: "mine possession", phonemes: ["m","i","n","e"] },
          { word: "nine",  highlight: "ine", zh: "九", emoji: "9️⃣", search: "number nine", phonemes: ["n","i","n","e"] },
          { word: "vine",  highlight: "ine", zh: "藤", emoji: "🌿", search: "vine plant", phonemes: ["v","i","n","e"] },
          { word: "wine",  highlight: "ine", zh: "葡萄酒", emoji: "🍷", search: "wine", phonemes: ["w","i","n","e"] },
          { word: "bike",  highlight: "ike", zh: "腳踏車", emoji: "🚲", search: "bicycle bike", phonemes: ["b","i","k","e"] },
          { word: "hike",  highlight: "ike", zh: "健行", emoji: "🥾", search: "hike trail", phonemes: ["h","i","k","e"] },
          { word: "kite",  highlight: "ite", zh: "風箏", emoji: "🪁", search: "kite flying", phonemes: ["k","i","t","e"] },
          { word: "site",  highlight: "ite", zh: "地點/網站", emoji: "🌐", search: "site location", phonemes: ["s","i","t","e"] }
        ],
        quiz: [
          { word: "time", speak: "time", displayWord: "t-i-m-e", answer: "長音 /aɪ/（i_e）",
            choices: ["短音 /ɪ/","長音 /aɪ/（i_e）","長音 /eɪ/","長音 /oʊ/"],
            hint: "⏰ time，i_e → i 唸長音 /aɪ/！", emoji: "⏰", search: "time clock" },
          { word: "mine", speak: "mine", displayWord: "m-ine", answer: "ine → /aɪn/",
            choices: ["in → /ɪn/","ine → /aɪn/","ain → /eɪn/","een → /iːn/"],
            hint: "👆 mine，-ine 字族，i 唸長音！", emoji: "👆", search: "mine possession" }
        ]
      }
    ],
    story: {
      title: "🪁 Kite Time",
      pages: [
        { en: "It is time to fly a kite on the fine vine.", zh: "是時候在美麗的藤蔓上放風箏了。", highlights: ["time","kite","fine","vine"] },
        { en: "Nine kids hiked up the line.", zh: "九個孩子沿著線條健行上去。", highlights: ["Nine","hiked","line"] },
        { en: "Mine is a lime bike — a dime for a ride!", zh: "我的是一輛萊姆色腳踏車——只要一角！", highlights: ["Mine","lime","bike","dime"] },
        { en: "We dined by the site — what a fine time!", zh: "我們在那個地點旁用餐——多麼美好的時光！", highlights: ["dined","site","fine","time"] }
      ]
    }
  },
  {
    id: 203, title: "o_e / u_e / ube / ute", emoji: "🔮", color: 2,
    topics: [
      {
        name: "o_e 長音 /oʊ/ 和 u_e 長音 /juː/",
        soundBadge: "o_e / u_e", soundLabel: "o長音/oʊ/ u長音/juː/",
        rules: ["o_e → o 唸長音 /oʊ/：hope、note、rope、home、rose", "u_e → u 唸長音 /juː/：cube、cute、tune、mule"],
        contrastPairs: [
          { short: "hop", shortZh: "跳", long: "hope", longZh: "希望" },
          { short: "not", shortZh: "不是", long: "note", longZh: "筆記" },
          { short: "cub", shortZh: "幼崽", long: "cube", longZh: "正方體" }
        ],
        words: [
          { word: "bone",  highlight: "o_e", zh: "骨頭（o長音）", emoji: "🦴", search: "bone dog", phonemes: ["b","o","n","e"] },
          { word: "cone",  highlight: "o_e", zh: "圓錐（o長音）", emoji: "🍦", search: "cone ice cream", phonemes: ["c","o","n","e"] },
          { word: "home",  highlight: "o_e", zh: "家（o長音）", emoji: "🏠", search: "home house", phonemes: ["h","o","m","e"] },
          { word: "hope",  highlight: "o_e", zh: "希望（o長音）", emoji: "🌟", search: "hope star", phonemes: ["h","o","p","e"] },
          { word: "mole",  highlight: "o_e", zh: "鼹鼠（o長音）", emoji: "🦔", search: "mole animal", phonemes: ["m","o","l","e"] },
          { word: "note",  highlight: "o_e", zh: "筆記（o長音）", emoji: "📝", search: "note paper", phonemes: ["n","o","t","e"] },
          { word: "pole",  highlight: "o_e", zh: "柱子（o長音）", emoji: "🎿", search: "pole", phonemes: ["p","o","l","e"] },
          { word: "rose",  highlight: "o_e", zh: "玫瑰（o長音）", emoji: "🌹", search: "rose flower", phonemes: ["r","o","s","e"] },
          { word: "rope",  highlight: "o_e", zh: "繩子（o長音）", emoji: "🪢", search: "rope", phonemes: ["r","o","p","e"] },
          { word: "vote",  highlight: "o_e", zh: "投票（o長音）", emoji: "🗳️", search: "vote ballot", phonemes: ["v","o","t","e"] },
          { word: "cube",  highlight: "u_e", zh: "正方體（u長音）", emoji: "🧊", search: "cube ice", phonemes: ["c","u","b","e"] },
          { word: "cute",  highlight: "u_e", zh: "可愛（u長音）", emoji: "🐣", search: "cute animal", phonemes: ["c","u","t","e"] },
          { word: "dune",  highlight: "u_e", zh: "沙丘（u長音）", emoji: "🏜️", search: "sand dune", phonemes: ["d","u","n","e"] },
          { word: "mule",  highlight: "u_e", zh: "騾子（u長音）", emoji: "🐴", search: "mule donkey", phonemes: ["m","u","l","e"] },
          { word: "tune",  highlight: "u_e", zh: "曲調（u長音）", emoji: "🎵", search: "music tune", phonemes: ["t","u","n","e"] }
        ],
        quiz: [
          { word: "hope", speak: "hope", displayWord: "h-o-p-e", answer: "長音 /oʊ/（o_e）",
            choices: ["短音 /ɑ/","長音 /oʊ/（o_e）","長音 /uː/","長音 /eɪ/"],
            hint: "🌟 hope，o_e → o 唸長音 /oʊ/！", emoji: "🌟", search: "hope star" },
          { word: "cube", speak: "cube", displayWord: "c-u-b-e", answer: "長音 /juː/（u_e）",
            choices: ["短音 /ʌ/","長音 /uː/","長音 /juː/（u_e）","長音 /oʊ/"],
            hint: "🧊 cube，u_e → u 唸長音 /juː/！", emoji: "🧊", search: "cube ice" }
        ]
      }
    ],
    story: {
      title: "🌹 A Rose Note",
      pages: [
        { en: "A mole found a rose by a pole near home.", zh: "一隻鼹鼠在家附近的柱子旁找到一朵玫瑰。", highlights: ["mole","rose","pole","home"] },
        { en: "It left a cute note: 'Hope this cone makes you smile!'", zh: "牠留下一張可愛的便條：「希望這個圓錐讓你微笑！」", highlights: ["cute","note","Hope","cone"] },
        { en: "A mule hummed a tune on a rope.", zh: "一頭騾子在繩子上哼著曲調。", highlights: ["mule","tune","rope"] },
        { en: "The vote was clear: cube, dune, or rose?", zh: "投票很清楚：正方體、沙丘還是玫瑰？", highlights: ["vote","cube","dune","rose"] }
      ]
    }
  },
  {
    id: 204, title: "ai / ee / ay / ea / ey / y / igh / ie", emoji: "🌈", color: 3,
    topics: [
      {
        name: "ai / ay / ea / ee 長音複習",
        soundBadge: "ai ay ea ee", soundLabel: "全都唸長音！",
        rules: [
          "<b>ai</b> 字中 = /eɪ/：rain、mail、tail",
          "<b>ay</b> 字尾 = /eɪ/：day、play、say",
          "<b>ea</b> = /iː/：eat、sea、leaf",
          "<b>ee</b> = /iː/：bee、tree、seed"
        ],
        words: [
          { word: "rain",  highlight: "ai", zh: "雨（ai）", emoji: "🌧️", search: "rain", phonemes: ["r","ai","n"] },
          { word: "sail",  highlight: "ai", zh: "帆（ai）", emoji: "⛵", search: "sailboat", phonemes: ["s","ai","l"] },
          { word: "train", highlight: "ai", zh: "火車（ai）", emoji: "🚂", search: "train", phonemes: ["tr","ai","n"] },
          { word: "wait",  highlight: "ai", zh: "等待（ai）", emoji: "⏳", search: "wait", phonemes: ["w","ai","t"] },
          { word: "day",   highlight: "ay", zh: "白天（ay）", emoji: "☀️", search: "sunny day", phonemes: ["d","ay"] },
          { word: "play",  highlight: "ay", zh: "玩耍（ay）", emoji: "🎮", search: "play", phonemes: ["pl","ay"] },
          { word: "stay",  highlight: "ay", zh: "留下（ay）", emoji: "🏠", search: "stay home", phonemes: ["st","ay"] },
          { word: "beach", highlight: "ea", zh: "海灘（ea）", emoji: "🏖️", search: "beach", phonemes: ["b","ea","ch"] },
          { word: "leaf",  highlight: "ea", zh: "葉子（ea）", emoji: "🍃", search: "leaf", phonemes: ["l","ea","f"] },
          { word: "meal",  highlight: "ea", zh: "一餐（ea）", emoji: "🍽️", search: "meal food", phonemes: ["m","ea","l"] },
          { word: "bee",   highlight: "ee", zh: "蜜蜂（ee）", emoji: "🐝", search: "bee", phonemes: ["b","ee"] },
          { word: "feet",  highlight: "ee", zh: "腳（ee）", emoji: "🦶", search: "feet", phonemes: ["f","ee","t"] },
          { word: "green", highlight: "ee", zh: "綠色（ee）", emoji: "💚", search: "green color", phonemes: ["gr","ee","n"] },
          { word: "tree",  highlight: "ee", zh: "樹（ee）", emoji: "🌳", search: "tree", phonemes: ["tr","ee"] },
          { word: "seed",  highlight: "ee", zh: "種子（ee）", emoji: "🌱", search: "seed plant", phonemes: ["s","ee","d"] }
        ],
        quiz: [
          { word: "rain", speak: "rain", displayWord: "r__n", answer: "ai（字中用）",
            choices: ["ai（字中用）","ay（字尾用）","ea","ee"],
            hint: "🌧️ rain，字中間用 ai！", emoji: "🌧️", search: "rain" },
          { word: "tree", speak: "tree", displayWord: "tr__", answer: "ee",
            choices: ["ai","ay","ea","ee"],
            hint: "🌳 tree，用 ee！", emoji: "🌳", search: "tree" }
        ]
      },
      {
        name: "ey / y / igh / ie / oa / ow / ue / ew / ui / oo",
        soundBadge: "ey igh ie oa ow", soundLabel: "更多長母音組合！",
        rules: [
          "<b>ey</b> 字尾 = /eɪ/：they、grey、obey",
          "<b>y</b> 單音節字尾 = /aɪ/：fly、sky、try",
          "<b>igh</b> = /aɪ/：night、light、right",
          "<b>ie</b> 字尾 = /aɪ/：pie、tie、die",
          "<b>oa</b> = /oʊ/：boat、coat、road",
          "<b>ow</b> 字尾 = /oʊ/：snow、blow、low",
          "<b>ue</b> = /uː/：blue、clue、glue",
          "<b>ew</b> = /uː/ 或 /juː/：new、blew、grew",
          "<b>ui</b> = /uː/：fruit、juice、suit",
          "<b>oo</b> 長音 = /uː/：moon、food、school"
        ],
        words: [
          { word: "they",  highlight: "ey", zh: "他們（ey=/eɪ/）", emoji: "👥", search: "they people", phonemes: ["th","ey"] },
          { word: "grey",  highlight: "ey", zh: "灰色（ey=/eɪ/）", emoji: "🩶", search: "grey color", phonemes: ["gr","ey"] },
          { word: "fly",   highlight: "y",  zh: "飛（y=/aɪ/）", emoji: "🦅", search: "fly eagle", phonemes: ["fl","y"] },
          { word: "night", highlight: "igh",zh: "夜晚（igh=/aɪ/）", emoji: "🌙", search: "night moon", phonemes: ["n","igh","t"] },
          { word: "pie",   highlight: "ie", zh: "派（ie=/aɪ/）", emoji: "🥧", search: "pie", phonemes: ["p","ie"] },
          { word: "boat",  highlight: "oa", zh: "船（oa=/oʊ/）", emoji: "⛵", search: "boat sailing", phonemes: ["b","oa","t"] },
          { word: "snow",  highlight: "ow", zh: "雪（ow=/oʊ/）", emoji: "❄️", search: "snow", phonemes: ["sn","ow"] },
          { word: "blue",  highlight: "ue", zh: "藍色（ue=/uː/）", emoji: "💙", search: "blue color", phonemes: ["bl","ue"] },
          { word: "new",   highlight: "ew", zh: "新的（ew=/juː/）", emoji: "🆕", search: "new", phonemes: ["n","ew"] },
          { word: "fruit", highlight: "ui", zh: "水果（ui=/uː/）", emoji: "🍎", search: "fruit", phonemes: ["fr","ui","t"] },
          { word: "moon",  highlight: "oo", zh: "月亮（oo=/uː/）", emoji: "🌙", search: "moon", phonemes: ["m","oo","n"] },
          { word: "obey",  highlight: "ey", zh: "遵從（ey=/eɪ/）", emoji: "🙏", search: "obey follow", phonemes: ["o","b","ey"] },
          { word: "light", highlight: "igh",zh: "光（igh=/aɪ/）", emoji: "💡", search: "light bulb", phonemes: ["l","igh","t"] },
          { word: "coat",  highlight: "oa", zh: "外套（oa=/oʊ/）", emoji: "🧥", search: "coat jacket", phonemes: ["c","oa","t"] },
          { word: "juice", highlight: "ui", zh: "果汁（ui=/uː/）", emoji: "🥤", search: "juice drink", phonemes: ["j","ui","ce"] }
        ],
        quiz: [
          { word: "night", speak: "night", displayWord: "n_ght", answer: "igh（gh不發音）",
            choices: ["igh（gh不發音）","ie","i_e","ight"],
            hint: "🌙 night，igh 唸 /aɪ/，gh 不發音！", emoji: "🌙", search: "night moon" },
          { word: "snow", speak: "snow", displayWord: "sn__", answer: "ow → /oʊ/長o",
            choices: ["ow → /aʊ/（cow音）","ow → /oʊ/長o","oa → /oʊ/","o_e → /oʊ/"],
            hint: "❄️ snow，ow 在字尾唸長o /oʊ/！", emoji: "❄️", search: "snow" }
        ]
      }
    ],
    story: {
      title: "🌙 Night Flight",
      pages: [
        { en: "On a grey night, they flew their kite by the light.", zh: "在一個灰色的夜晚，他們在燈光下放風箏。", highlights: ["grey","night","flew","light"] },
        { en: "The boat sailed past snow and blue sea.", zh: "船駛過雪地和藍海。", highlights: ["boat","snow","blue","sea"] },
        { en: "A pie with fruit and new juice — obey your hunger!", zh: "一個有水果的派和新鮮果汁——順從你的飢餓！", highlights: ["pie","fruit","new","juice","obey"] },
        { en: "The moon lit the road — they stayed to play.", zh: "月光照亮了道路——他們留下來玩耍。", highlights: ["moon","road","stayed","play"] }
      ]
    }
  }
];

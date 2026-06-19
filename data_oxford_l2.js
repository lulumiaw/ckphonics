// Oxford Phonics World Level 2 — 短母音字族
const LESSONS = [
  {
    id: 101, title: "短母音 a — 字族練習", emoji: "🅰️", color: 0,
    links: [{ url: "https://elt.oup.com/student/oxfordphonicsworld/level02/watch?cc=tw&selLanguage=zh", icon: "🎬", title: "Oxford Phonics World Level 2", desc: "點此觀看 Level 2 影片練習" }],
    topics: [
      {
        name: "a / ad / ag / am / an",
        soundBadge: "a", soundLabel: "短音 /æ/",
        rules: ["<b>a /æ/</b>：嘴巴張大，字族：-ad、-ag、-am、-an"],
        words: [
          { word: "bad",  highlight: "ad", zh: "壞的", emoji: "😈", search: "bad", phonemes: ["b","ad"], phonemesSpeak: [null, "add"] },
          { word: "dad",  highlight: "ad", zh: "爸爸", emoji: "👨", search: "dad father", phonemes: ["d","ad"], phonemesSpeak: [null, "add"] },
          { word: "had",  highlight: "ad", zh: "有了", emoji: "✅", search: "had", phonemes: ["h","ad"], phonemesSpeak: [null, "add"] },
          { word: "mad",  highlight: "ad", zh: "生氣", emoji: "😠", search: "mad angry", phonemes: ["m","ad"], phonemesSpeak: [null, "add"] },
          { word: "sad",  highlight: "ad", zh: "傷心", emoji: "😢", search: "sad cry", phonemes: ["s","ad"], phonemesSpeak: [null, "add"] },
          { word: "bag",  highlight: "ag", zh: "袋子", emoji: "👜", search: "bag", phonemes: ["b","ag"], phonemesSpeak: [null, "agg"] },
          { word: "rag",  highlight: "ag", zh: "破布", emoji: "🧹", search: "rag cloth", phonemes: ["r","ag"], phonemesSpeak: [null, "agg"] },
          { word: "tag",  highlight: "ag", zh: "標籤", emoji: "🏷️", search: "tag label", phonemes: ["t","ag"], phonemesSpeak: [null, "agg"] },
          { word: "wag",  highlight: "ag", zh: "搖擺", emoji: "🐕", search: "wag tail", phonemes: ["w","ag"], phonemesSpeak: [null, "agg"] },
          { word: "ham",  highlight: "am", zh: "火腿", emoji: "🍖", search: "ham meat", phonemes: ["h","am"], phonemesSpeak: [null, "am"] },
          { word: "jam",  highlight: "am", zh: "果醬", emoji: "🍓", search: "jam jar", phonemes: ["j","am"], phonemesSpeak: [null, "am"] },
          { word: "ram",  highlight: "am", zh: "公羊", emoji: "🐏", search: "ram sheep", phonemes: ["r","am"], phonemesSpeak: [null, "am"] },
          { word: "can",  highlight: "an", zh: "罐子/能夠", emoji: "🥫", search: "can tin", phonemes: ["c","an"], phonemesSpeak: [null, "an"] },
          { word: "fan",  highlight: "an", zh: "風扇", emoji: "🌀", search: "fan", phonemes: ["f","an"], phonemesSpeak: [null, "an"] },
          { word: "man",  highlight: "an", zh: "男人", emoji: "👨", search: "man person", phonemes: ["m","an"], phonemesSpeak: [null, "an"] }
        ],
        quiz: [
          { word: "bad", speak: "bad", displayWord: "b-ad", answer: "ad",
            choices: ["ad","ag","am","an"], hint: "😈 bad，字族 -ad！", emoji: "😈", search: "bad" },
          { word: "bag", speak: "bag", displayWord: "b-ag", answer: "ag",
            choices: ["ad","ag","am","an"], hint: "👜 bag，字族 -ag！", emoji: "👜", search: "bag" }
        ]
      },
      {
        name: "ap / at",
        soundBadge: "a", soundLabel: "短音 /æ/",
        rules: ["字族：-ap、-at"],
        words: [
          { word: "cap",  highlight: "ap", zh: "帽子", emoji: "🧢", search: "cap hat", phonemes: ["c","ap"], phonemesSpeak: [null, "app"] },
          { word: "map",  highlight: "ap", zh: "地圖", emoji: "🗺️", search: "map", phonemes: ["m","ap"], phonemesSpeak: [null, "app"] },
          { word: "nap",  highlight: "ap", zh: "小睡", emoji: "😴", search: "nap sleep", phonemes: ["n","ap"], phonemesSpeak: [null, "app"] },
          { word: "rap",  highlight: "ap", zh: "敲打/rap", emoji: "🎤", search: "rap music", phonemes: ["r","ap"], phonemesSpeak: [null, "app"] },
          { word: "tap",  highlight: "ap", zh: "輕敲", emoji: "🚿", search: "tap faucet", phonemes: ["t","ap"], phonemesSpeak: [null, "app"] },
          { word: "bat",  highlight: "at", zh: "球棒", emoji: "🦇", search: "bat", phonemes: ["b","at"], phonemesSpeak: [null, "at"] },
          { word: "cat",  highlight: "at", zh: "貓", emoji: "🐱", search: "cat", phonemes: ["c","at"], phonemesSpeak: [null, "at"] },
          { word: "fat",  highlight: "at", zh: "胖的", emoji: "🐷", search: "fat pig", phonemes: ["f","at"], phonemesSpeak: [null, "at"] },
          { word: "hat",  highlight: "at", zh: "帽子", emoji: "🎩", search: "hat", phonemes: ["h","at"], phonemesSpeak: [null, "at"] },
          { word: "mat",  highlight: "at", zh: "墊子", emoji: "🟫", search: "mat floor", phonemes: ["m","at"], phonemesSpeak: [null, "at"] },
          { word: "pat",  highlight: "at", zh: "輕拍", emoji: "👋", search: "pat hand", phonemes: ["p","at"], phonemesSpeak: [null, "at"] },
          { word: "rat",  highlight: "at", zh: "老鼠", emoji: "🐀", search: "rat mouse", phonemes: ["r","at"], phonemesSpeak: [null, "at"] },
          { word: "sat",  highlight: "at", zh: "坐了", emoji: "🪑", search: "sat chair", phonemes: ["s","at"], phonemesSpeak: [null, "at"] },
          { word: "van",  highlight: "an", zh: "廂型車", emoji: "🚐", search: "van vehicle", phonemes: ["v","an"], phonemesSpeak: [null, "an"] },
          { word: "pan",  highlight: "ap", zh: "平底鍋", emoji: "🍳", search: "pan cooking", phonemes: ["p","an"], phonemesSpeak: [null, "an"] }
        ],
        quiz: [
          { word: "cat", speak: "cat", displayWord: "c-at", answer: "at",
            choices: ["ap","at","ag","am"], hint: "🐱 cat，字族 -at！", emoji: "🐱", search: "cat" },
          { word: "map", speak: "map", displayWord: "m-ap", answer: "ap",
            choices: ["ap","at","ag","am"], hint: "🗺️ map，字族 -ap！", emoji: "🗺️", search: "map" }
        ]
      }
    ],
    story: {
      title: "🐱 The Cat and the Rat",
      pages: [
        { en: "A fat cat sat on a mat.", zh: "一隻胖貓坐在墊子上。", highlights: ["fat","cat","sat","mat"] },
        { en: "A rat had a bag and a map.", zh: "一隻老鼠有一個袋子和一張地圖。", highlights: ["rat","bag","map"] },
        { en: "The sad man had a bad day.", zh: "那個傷心的男人度過了糟糕的一天。", highlights: ["sad","man","bad"] },
        { en: "The cat gave a tap — and the rat ran!", zh: "貓輕敲了一下——老鼠就跑了！", highlights: ["cat","tap","rat"] }
      ]
    }
  },
  {
    id: 102, title: "短母音 e — 字族練習", emoji: "🅴", color: 1,
    topics: [
      {
        name: "e / ed / en / et",
        soundBadge: "e", soundLabel: "短音 /ɛ/",
        rules: ["<b>e /ɛ/</b>：嘴角向兩側，字族：-ed、-en、-et"],
        words: [
          { word: "bed",  highlight: "ed", zh: "床", emoji: "🛏️", search: "bed", phonemes: ["b","ed"], phonemesSpeak: [null, "Ed"] },
          { word: "fed",  highlight: "ed", zh: "喂了", emoji: "🍽️", search: "fed food", phonemes: ["f","ed"], phonemesSpeak: [null, "Ed"] },
          { word: "led",  highlight: "ed", zh: "帶領", emoji: "➡️", search: "led guide", phonemes: ["l","ed"], phonemesSpeak: [null, "Ed"] },
          { word: "red",  highlight: "ed", zh: "紅色", emoji: "🔴", search: "red color", phonemes: ["r","ed"], phonemesSpeak: [null, "Ed"] },
          { word: "wed",  highlight: "ed", zh: "結婚", emoji: "💍", search: "wed marry", phonemes: ["w","ed"], phonemesSpeak: [null, "Ed"] },
          { word: "den",  highlight: "en", zh: "獸穴", emoji: "🕳️", search: "den cave", phonemes: ["d","en"], phonemesSpeak: [null, "en"] },
          { word: "hen",  highlight: "en", zh: "母雞", emoji: "🐔", search: "hen chicken", phonemes: ["h","en"], phonemesSpeak: [null, "en"] },
          { word: "men",  highlight: "en", zh: "男人們", emoji: "👥", search: "men people", phonemes: ["m","en"], phonemesSpeak: [null, "en"] },
          { word: "pen",  highlight: "en", zh: "筆", emoji: "✏️", search: "pen pencil", phonemes: ["p","en"], phonemesSpeak: [null, "en"] },
          { word: "ten",  highlight: "en", zh: "十", emoji: "🔟", search: "number ten", phonemes: ["t","en"], phonemesSpeak: [null, "en"] },
          { word: "get",  highlight: "et", zh: "得到", emoji: "🎁", search: "get gift", phonemes: ["g","et"], phonemesSpeak: [null, "et"] },
          { word: "jet",  highlight: "et", zh: "噴射機", emoji: "✈️", search: "jet airplane", phonemes: ["j","et"], phonemesSpeak: [null, "et"] },
          { word: "let",  highlight: "et", zh: "讓", emoji: "🙌", search: "let allow", phonemes: ["l","et"], phonemesSpeak: [null, "et"] },
          { word: "met",  highlight: "et", zh: "遇見了", emoji: "🤝", search: "met meeting", phonemes: ["m","et"], phonemesSpeak: [null, "et"] },
          { word: "net",  highlight: "et", zh: "網子", emoji: "🥅", search: "net goal", phonemes: ["n","et"], phonemesSpeak: [null, "et"] }
        ],
        quiz: [
          { word: "bed", speak: "bed", displayWord: "b-ed", answer: "ed",
            choices: ["ed","en","et","eg"], hint: "🛏️ bed，字族 -ed！", emoji: "🛏️", search: "bed" },
          { word: "pen", speak: "pen", displayWord: "p-en", answer: "en",
            choices: ["ed","en","et","eg"], hint: "✏️ pen，字族 -en！", emoji: "✏️", search: "pen pencil" }
        ]
      }
    ],
    story: {
      title: "🐔 The Hen and the Net",
      pages: [
        { en: "A red hen sat on a bed in a den.", zh: "一隻紅色母雞坐在巢穴的床上。", highlights: ["red","hen","bed","den"] },
        { en: "Ten men came with a net.", zh: "十個男人帶著一張網子來了。", highlights: ["Ten","men","net"] },
        { en: "The hen got away — it met a jet!", zh: "母雞逃走了——牠遇上了一架噴射機！", highlights: ["hen","met","jet"] },
        { en: "Let the hen be free — she is fed and well!", zh: "讓母雞自由——她吃飽了，很好！", highlights: ["Let","hen","fed"] }
      ]
    }
  },
  {
    id: 103, title: "短母音 i — 字族練習", emoji: "🅸", color: 2,
    topics: [
      {
        name: "i / ib / id / ig / in / ip / it / ix",
        soundBadge: "i", soundLabel: "短音 /ɪ/",
        rules: ["<b>i /ɪ/</b>：嘴角微向兩側，字族：-id、-ig、-in、-ip、-it"],
        words: [
          { word: "bid",  highlight: "id", zh: "出價", emoji: "💰", search: "bid auction", phonemes: ["b","id"], phonemesSpeak: [null, "id"] },
          { word: "did",  highlight: "id", zh: "做了", emoji: "✅", search: "did action", phonemes: ["d","id"], phonemesSpeak: [null, "id"] },
          { word: "hid",  highlight: "id", zh: "藏了", emoji: "🙈", search: "hid hidden", phonemes: ["h","id"], phonemesSpeak: [null, "id"] },
          { word: "kid",  highlight: "id", zh: "孩子", emoji: "👦", search: "kid child", phonemes: ["k","id"], phonemesSpeak: [null, "id"] },
          { word: "big",  highlight: "ig", zh: "大的", emoji: "🏔️", search: "big mountain", phonemes: ["b","ig"], phonemesSpeak: [null, "ig"] },
          { word: "dig",  highlight: "ig", zh: "挖", emoji: "⛏️", search: "dig shovel", phonemes: ["d","ig"], phonemesSpeak: [null, "ig"] },
          { word: "fig",  highlight: "ig", zh: "無花果", emoji: "🍈", search: "fig fruit", phonemes: ["f","ig"], phonemesSpeak: [null, "ig"] },
          { word: "pig",  highlight: "ig", zh: "豬", emoji: "🐷", search: "pig", phonemes: ["p","ig"], phonemesSpeak: [null, "ig"] },
          { word: "wig",  highlight: "ig", zh: "假髮", emoji: "💇", search: "wig hair", phonemes: ["w","ig"], phonemesSpeak: [null, "ig"] },
          { word: "bin",  highlight: "in", zh: "垃圾桶", emoji: "🗑️", search: "bin trash", phonemes: ["b","in"], phonemesSpeak: [null, "in"] },
          { word: "fin",  highlight: "in", zh: "魚鰭", emoji: "🐟", search: "fish fin", phonemes: ["f","in"], phonemesSpeak: [null, "in"] },
          { word: "pin",  highlight: "in", zh: "別針", emoji: "📌", search: "pin needle", phonemes: ["p","in"], phonemesSpeak: [null, "in"] },
          { word: "win",  highlight: "in", zh: "贏", emoji: "🏆", search: "win trophy", phonemes: ["w","in"], phonemesSpeak: [null, "in"] },
          { word: "dip",  highlight: "ip", zh: "沾", emoji: "🫙", search: "dip sauce", phonemes: ["d","ip"], phonemesSpeak: [null, "ip"] },
          { word: "hip",  highlight: "ip", zh: "臀部", emoji: "🧍", search: "hip body", phonemes: ["h","ip"], phonemesSpeak: [null, "ip"] }
        ],
        quiz: [
          { word: "pig", speak: "pig", displayWord: "p-ig", answer: "ig",
            choices: ["id","ig","in","ip"], hint: "🐷 pig，字族 -ig！", emoji: "🐷", search: "pig" },
          { word: "win", speak: "win", displayWord: "w-in", answer: "in",
            choices: ["id","ig","in","ip"], hint: "🏆 win，字族 -in！", emoji: "🏆", search: "win trophy" }
        ]
      }
    ],
    story: {
      title: "🐷 The Big Pig",
      pages: [
        { en: "A big pig hid in a bin.", zh: "一隻大豬藏在垃圾桶裡。", highlights: ["big","pig","hid","bin"] },
        { en: "A kid did a dig and found a fig.", zh: "一個孩子挖了挖，找到了一顆無花果。", highlights: ["kid","dig","fig"] },
        { en: "The pin in the wig did not fit.", zh: "假髮上的別針不合適。", highlights: ["pin","wig","fit"] },
        { en: "Did the big pig win? Yes! It did!", zh: "那隻大豬贏了嗎？是的！牠贏了！", highlights: ["big","pig","win","did"] }
      ]
    }
  },
  {
    id: 104, title: "短母音 o — 字族練習", emoji: "🅾️", color: 3,
    topics: [
      {
        name: "o / op / ot",
        soundBadge: "o", soundLabel: "短音 /ɑ/",
        rules: ["<b>o /ɑ/</b>：嘴巴圓圓打開，字族：-op、-ot"],
        words: [
          { word: "cop",  highlight: "op", zh: "警察", emoji: "👮", search: "police cop", phonemes: ["c","op"], phonemesSpeak: [null, "op"] },
          { word: "hop",  highlight: "op", zh: "跳", emoji: "🐸", search: "hop frog", phonemes: ["h","op"], phonemesSpeak: [null, "op"] },
          { word: "mop",  highlight: "op", zh: "拖把", emoji: "🧹", search: "mop cleaning", phonemes: ["m","op"], phonemesSpeak: [null, "op"] },
          { word: "pop",  highlight: "op", zh: "爆破聲", emoji: "💥", search: "pop balloon", phonemes: ["p","op"], phonemesSpeak: [null, "op"] },
          { word: "top",  highlight: "op", zh: "頂部", emoji: "🔝", search: "top above", phonemes: ["t","op"], phonemesSpeak: [null, "op"] },
          { word: "cot",  highlight: "ot", zh: "小床", emoji: "🛏️", search: "cot bed", phonemes: ["c","ot"], phonemesSpeak: [null, "ott"] },
          { word: "dot",  highlight: "ot", zh: "點", emoji: "🔵", search: "dot circle", phonemes: ["d","ot"], phonemesSpeak: [null, "ott"] },
          { word: "got",  highlight: "ot", zh: "得到了", emoji: "🎁", search: "got gift", phonemes: ["g","ot"], phonemesSpeak: [null, "ott"] },
          { word: "hot",  highlight: "ot", zh: "熱的", emoji: "🔥", search: "hot fire", phonemes: ["h","ot"], phonemesSpeak: [null, "ott"] },
          { word: "jot",  highlight: "ot", zh: "記下", emoji: "✏️", search: "jot note", phonemes: ["j","ot"], phonemesSpeak: [null, "ott"] },
          { word: "lot",  highlight: "ot", zh: "很多", emoji: "📦", search: "lot many", phonemes: ["l","ot"], phonemesSpeak: [null, "ott"] },
          { word: "not",  highlight: "ot", zh: "不是", emoji: "🚫", search: "not no", phonemes: ["n","ot"], phonemesSpeak: [null, "ott"] },
          { word: "pot",  highlight: "ot", zh: "鍋子", emoji: "🍲", search: "pot cooking", phonemes: ["p","ot"], phonemesSpeak: [null, "ott"] },
          { word: "rot",  highlight: "ot", zh: "腐爛", emoji: "🍂", search: "rot decay", phonemes: ["r","ot"], phonemesSpeak: [null, "ott"] },
          { word: "fox",  highlight: "ox", zh: "狐狸", emoji: "🦊", search: "fox", phonemes: ["f","ox"], phonemesSpeak: [null, "ox"] }
        ],
        quiz: [
          { word: "hop", speak: "hop", displayWord: "h-op", answer: "op",
            choices: ["op","ot","ox","og"], hint: "🐸 hop，字族 -op！", emoji: "🐸", search: "hop frog" },
          { word: "hot", speak: "hot", displayWord: "h-ot", answer: "ot",
            choices: ["op","ot","ox","og"], hint: "🔥 hot，字族 -ot！", emoji: "🔥", search: "hot fire" }
        ]
      }
    ],
    story: {
      title: "🐸 The Frog and the Hot Pot",
      pages: [
        { en: "A frog did a hop to the top of a pot.", zh: "一隻青蛙跳到鍋子的頂部。", highlights: ["hop","top","pot"] },
        { en: "The pot was hot — a lot!", zh: "那個鍋子非常非常熱！", highlights: ["pot","hot","lot"] },
        { en: "A cop got a mop and a dot of soap.", zh: "一位警察拿了一把拖把和一點肥皂。", highlights: ["cop","mop","dot"] },
        { en: "Not the fox — the frog got the top spot!", zh: "不是狐狸——青蛙得到了頭籌！", highlights: ["Not","fox","frog","top"] }
      ]
    }
  },
  {
    id: 105, title: "短母音 u — 字族練習", emoji: "🆄", color: 4,
    topics: [
      {
        name: "u / ub / ud / ug / um / un / up / ut",
        soundBadge: "u", soundLabel: "短音 /ʌ/",
        rules: ["<b>u /ʌ/</b>：嘴巴放鬆，字族：-ub、-ug、-un、-up、-ut"],
        words: [
          { word: "cub",  highlight: "ub", zh: "幼崽", emoji: "🐻", search: "bear cub", phonemes: ["c","ub"], phonemesSpeak: [null, "ubb"] },
          { word: "hub",  highlight: "ub", zh: "中心", emoji: "⚙️", search: "hub center", phonemes: ["h","ub"], phonemesSpeak: [null, "ubb"] },
          { word: "rub",  highlight: "ub", zh: "摩擦", emoji: "🤲", search: "rub hands", phonemes: ["r","ub"], phonemesSpeak: [null, "ubb"] },
          { word: "sub",  highlight: "ub", zh: "潛艇", emoji: "🚢", search: "submarine sub", phonemes: ["s","ub"], phonemesSpeak: [null, "ubb"] },
          { word: "tub",  highlight: "ub", zh: "浴缸", emoji: "🛁", search: "tub bath", phonemes: ["t","ub"], phonemesSpeak: [null, "ubb"] },
          { word: "bug",  highlight: "ug", zh: "蟲子", emoji: "🐛", search: "bug insect", phonemes: ["b","ug"], phonemesSpeak: [null, "ug"] },
          { word: "hug",  highlight: "ug", zh: "擁抱", emoji: "🤗", search: "hug embrace", phonemes: ["h","ug"], phonemesSpeak: [null, "ug"] },
          { word: "jug",  highlight: "ug", zh: "壺", emoji: "🫙", search: "jug pitcher", phonemes: ["j","ug"], phonemesSpeak: [null, "ug"] },
          { word: "mug",  highlight: "ug", zh: "馬克杯", emoji: "☕", search: "mug cup", phonemes: ["m","ug"], phonemesSpeak: [null, "ug"] },
          { word: "rug",  highlight: "ug", zh: "地毯", emoji: "🟫", search: "rug carpet", phonemes: ["r","ug"], phonemesSpeak: [null, "ug"] },
          { word: "bun",  highlight: "un", zh: "小麵包", emoji: "🍞", search: "bun bread", phonemes: ["b","un"], phonemesSpeak: [null, "un"] },
          { word: "fun",  highlight: "un", zh: "有趣", emoji: "🎉", search: "fun happy", phonemes: ["f","un"], phonemesSpeak: [null, "un"] },
          { word: "run",  highlight: "un", zh: "跑", emoji: "🏃", search: "running", phonemes: ["r","un"], phonemesSpeak: [null, "un"] },
          { word: "sun",  highlight: "un", zh: "太陽", emoji: "☀️", search: "sun sunshine", phonemes: ["s","un"], phonemesSpeak: [null, "un"] },
          { word: "cup",  highlight: "up", zh: "杯子", emoji: "☕", search: "cup mug", phonemes: ["c","up"], phonemesSpeak: [null, "up"] }
        ],
        quiz: [
          { word: "bug", speak: "bug", displayWord: "b-ug", answer: "ug",
            choices: ["ub","ug","un","up"], hint: "🐛 bug，字族 -ug！", emoji: "🐛", search: "bug insect" },
          { word: "run", speak: "run", displayWord: "r-un", answer: "un",
            choices: ["ub","ug","un","up"], hint: "🏃 run，字族 -un！", emoji: "🏃", search: "running" }
        ]
      }
    ],
    story: {
      title: "☀️ Fun in the Sun",
      pages: [
        { en: "A bug and a cub had fun in the sun.", zh: "一隻蟲子和一隻小熊在太陽下玩耍。", highlights: ["bug","cub","fun","sun"] },
        { en: "They ran to the tub — a big jug of water!", zh: "他們跑向浴缸——一大壺水！", highlights: ["ran","tub","jug"] },
        { en: "The bug gave the cub a hug on the rug.", zh: "蟲子在地毯上給小熊一個擁抱。", highlights: ["bug","hug","rug"] },
        { en: "They had a bun and a cup — what a fun run!", zh: "他們有一個麵包和一杯——多麼有趣的奔跑！", highlights: ["bun","cup","fun","run"] }
      ]
    }
  }
];

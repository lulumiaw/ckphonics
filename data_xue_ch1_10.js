// 薛珍華老師自然發音法 Ch1-10

const LESSONS = [
  {
    id: 1,
    title: "字母的唸法：子音與母音",
    emoji: "🔤",
    color: 0,
    topics: [
      {
        name: "母音與子音",
        rules: [
          "英文 26 個字母分兩類：<b>母音</b>和<b>子音</b>",
          "🌟 <b>母音（Vowels）</b>：A、E、I、O、U，加上字尾的 Y，共 6 個",
          "🔤 <b>子音（Consonants）</b>：其餘 20 個字母",
          "口訣：英語字母二十六，元音字母他最 6，就是 A E I O U，元音長短要分清，後有輔音發短音，沒有輔音發長音，元音單獨站字尾",
          "每個母音都有兩種發音：<b>短音</b>（被子音夾住）和<b>長音</b>（自己的字母名稱）"
        ],
        words: [
          { word: "ant",    highlight: "a", zh: "螞蟻（a短音）", emoji: "🐜", search: "ant insect" },
          { word: "egg",    highlight: "e", zh: "蛋（e短音）", emoji: "🥚", search: "egg" },
          { word: "igloo",  highlight: "i", zh: "冰屋（i短音）", emoji: "🏠", search: "igloo snow" },
          { word: "ox",     highlight: "o", zh: "公牛（o短音）", emoji: "🐂", search: "ox bull" },
          { word: "umbrella",highlight: "u", zh: "雨傘（u短音）", emoji: "☂️", search: "umbrella" },
          { word: "ape",    highlight: "a", zh: "猿猴（a長音）", emoji: "🦧", search: "ape monkey" },
          { word: "eat",    highlight: "e", zh: "吃（e長音）", emoji: "🍽️", search: "eating food" },
          { word: "ice",    highlight: "i", zh: "冰（i長音）", emoji: "🧊", search: "ice cube" },
          { word: "open",   highlight: "o", zh: "開（o長音）", emoji: "🚪", search: "open door" },
          { word: "use",    highlight: "u", zh: "使用（u長音）", emoji: "🔧", search: "use tool" }
        ],
        quiz: [
          { word: "ant", speak: "ant", displayWord: "ant", answer: "短音（被子音夾住）",
            choices: ["短音（被子音夾住）","長音（字母名稱）","不發音","懶音"],
            hint: "🐜 ant，a 被 n 和 t 夾住，唸短音！", emoji: "🐜", search: "ant insect" },
          { word: "ape", speak: "ape", displayWord: "ape", answer: "長音（字母名稱）",
            choices: ["短音（被子音夾住）","長音（字母名稱）","不發音","懶音"],
            hint: "🦧 ape，a 後面有 e，唸長音 /eɪ/！", emoji: "🦧", search: "ape monkey" }
        ]
      },
      {
        name: "音節的判斷",
        rules: [
          "音節判斷步驟（以 computer 為例）：",
          "① 找出單字的母音：c<u>o</u>mp<u>u</u>t<u>e</u>r",
          "② 子音帶母音成為一個音節：<u>co</u>m<u>pu</u><u>te</u>r",
          "③ 落單的子音跟前面的音節：com / pu / ter",
          "④ 依自然發音法規則唸出：com-pu-ter，共 3 個音節",
          "口訣：音節劃分是關鍵，長難單詞變簡單，先把元音找出來，再把輔音一歸後二分開，字母組合在一塊"
        ],
        words: [
          { word: "cat",       syllable: "cat",         zh: "貓（1音節）", emoji: "🐱", search: "cat", highlight: "a" },
          { word: "robot",     syllable: "ro-bot",      zh: "機器人（2音節）", emoji: "🤖", search: "robot", highlight: "o" },
          { word: "tiger",     syllable: "ti-ger",      zh: "老虎（2音節）", emoji: "🐯", search: "tiger", highlight: "i" },
          { word: "basket",    syllable: "bas-ket",     zh: "籃子（2音節）", emoji: "🧺", search: "basket", highlight: "a" },
          { word: "garden",    syllable: "gar-den",     zh: "花園（2音節）", emoji: "🌷", search: "garden", highlight: "a" },
          { word: "student",   syllable: "stu-dent",    zh: "學生（2音節）", emoji: "🎒", search: "student", highlight: "u" },
          { word: "remember",  syllable: "re-mem-ber",  zh: "記得（3音節）", emoji: "🧠", search: "remember memory", highlight: "e" },
          { word: "breakfast", syllable: "break-fast",  zh: "早餐（2音節）", emoji: "🍳", search: "breakfast", highlight: "ea" },
          { word: "Sunday",    syllable: "Sun-day",     zh: "星期日（2音節）", emoji: "☀️", search: "sunday calendar", highlight: "u" },
          { word: "August",    syllable: "Au-gust",     zh: "八月（2音節）", emoji: "📅", search: "august calendar", highlight: "Au" }
        ],
        quiz: [
          { word: "robot", speak: "robot", displayWord: "ro-bot", answer: "2個",
            choices: ["1個","2個","3個","4個"],
            hint: "🤖 robot = ro + bot，下巴動兩次！", emoji: "🤖", search: "robot" },
          { word: "remember", speak: "remember", displayWord: "re-mem-ber", answer: "3個",
            choices: ["1個","2個","3個","4個"],
            hint: "🧠 remember = re + mem + ber，下巴動三次！", emoji: "🧠", search: "remember memory" }
        ]
      }
    ],
    story: {
      title: "🐱 Cat and Ant",
      pages: [
        { en: "A cat sat on an egg.", zh: "一隻貓坐在蛋上。", highlights: ["cat","egg"] },
        { en: "An ant ran up to the cat.", zh: "一隻螞蟻跑向那隻貓。", highlights: ["ant","cat"] },
        { en: "The cat ran to open the door.", zh: "貓跑去開門。", highlights: ["cat","open"] },
        { en: "The ant ate the egg. Oh no!", zh: "螞蟻吃了那顆蛋。喔不！", highlights: ["ant","ate","egg"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  CHAPTER 2：短母音 a e i o u
  // ─────────────────────────────────────────
  {
    id: 2,
    title: "短母音：a, e, i, o, u",
    emoji: "🔊",
    color: 1,
    topics: [
      {
        name: "短母音 a /æ/ 和 e /ɛ/",
        rules: [
          "母音在兩個子音中間時 → 唸<b>短母音</b>",
          "<b>短音 a /æ/</b>：嘴巴張大，像被嚇到，例：bad、cat、hat",
          "<b>短音 e /ɛ/</b>：嘴角稍微向兩側，例：bet、leg、pen",
          "口訣：後有輔音發短音！子音夾住母音，母音就唸短音"
        ],
        words: [
          { word: "bad",  highlight: "a", zh: "壞的", emoji: "😈", search: "bad evil" },
          { word: "bat",  highlight: "a", zh: "球棒/蝙蝠", emoji: "🦇", search: "bat" },
          { word: "cat",  highlight: "a", zh: "貓", emoji: "🐱", search: "cat" },
          { word: "cap",  highlight: "a", zh: "帽子", emoji: "🧢", search: "cap hat" },
          { word: "fat",  highlight: "a", zh: "胖的", emoji: "🐷", search: "fat pig" },
          { word: "hand", highlight: "a", zh: "手", emoji: "✋", search: "hand" },
          { word: "hat",  highlight: "a", zh: "帽子", emoji: "🎩", search: "hat" },
          { word: "tank", highlight: "a", zh: "坦克/水缸", emoji: "🚗", search: "tank" },
          { word: "that", highlight: "a", zh: "那個", emoji: "👉", search: "pointing that" },
          { word: "thank",highlight: "a", zh: "感謝", emoji: "🙏", search: "thank gratitude" },
          { word: "bet",  highlight: "e", zh: "打賭", emoji: "🎲", search: "bet dice" },
          { word: "jet",  highlight: "e", zh: "噴射機", emoji: "✈️", search: "jet airplane" },
          { word: "egg",  highlight: "e", zh: "蛋", emoji: "🥚", search: "egg" },
          { word: "leg",  highlight: "e", zh: "腿", emoji: "🦵", search: "leg" },
          { word: "let",  highlight: "e", zh: "讓", emoji: "🙌", search: "let allow" }
        ],
        quiz: [
          { word: "cat", speak: "cat", displayWord: "c _ t", answer: "a",
            choices: ["a","e","i","o"],
            hint: "🐱 cat（貓），中間填短音 a！", emoji: "🐱", search: "cat" },
          { word: "jet", speak: "jet", displayWord: "j _ t", answer: "e",
            choices: ["a","e","i","o"],
            hint: "✈️ jet（噴射機），中間填短音 e！", emoji: "✈️", search: "jet airplane" }
        ]
      },
      {
        name: "短母音 i /ɪ/、o /ɑ/、u /ʌ/",
        rules: [
          "<b>短音 i /ɪ/</b>：嘴角微微向兩側，發短促的「一」，例：big、sit、lip",
          "<b>短音 o /ɑ/</b>：嘴巴圓圓打開，例：box、hot、mop",
          "<b>短音 u /ʌ/</b>：嘴巴放鬆，發短促的「ㄚ」，例：bus、cup、sun",
          "口訣：子音+a+子音=a→[æ]，子音+e+子音=e→[ɛ]，子音+i+子音=i→[ɪ]，子音+o+子音=o→[ɑ]，子音+u+子音=u→[ʌ]"
        ],
        words: [
          { word: "big",  highlight: "i", zh: "大的", emoji: "🏔️", search: "big mountain" },
          { word: "bit",  highlight: "i", zh: "一點", emoji: "🤏", search: "bit small" },
          { word: "dig",  highlight: "i", zh: "挖", emoji: "⛏️", search: "dig shovel" },
          { word: "fin",  highlight: "i", zh: "魚鰭", emoji: "🐟", search: "fish fin" },
          { word: "fit",  highlight: "i", zh: "合身的", emoji: "👔", search: "fit clothes" },
          { word: "box",  highlight: "o", zh: "箱子", emoji: "📦", search: "box cardboard" },
          { word: "cop",  highlight: "o", zh: "警察", emoji: "👮", search: "police cop" },
          { word: "fog",  highlight: "o", zh: "霧", emoji: "🌫️", search: "fog mist" },
          { word: "hot",  highlight: "o", zh: "熱的", emoji: "🔥", search: "hot fire" },
          { word: "mop",  highlight: "o", zh: "拖把", emoji: "🧹", search: "mop cleaning" },
          { word: "bun",  highlight: "u", zh: "小圓麵包", emoji: "🍞", search: "bun bread" },
          { word: "bus",  highlight: "u", zh: "公車", emoji: "🚌", search: "bus" },
          { word: "but",  highlight: "u", zh: "但是", emoji: "🤷", search: "but however" },
          { word: "cup",  highlight: "u", zh: "杯子", emoji: "☕", search: "cup mug" },
          { word: "sun",  highlight: "u", zh: "太陽", emoji: "☀️", search: "sun sunshine" }
        ],
        quiz: [
          { word: "box", speak: "box", displayWord: "b _ x", answer: "o",
            choices: ["a","e","o","u"],
            hint: "📦 box（箱子），中間填短音 o！", emoji: "📦", search: "box cardboard" },
          { word: "cup", speak: "cup", displayWord: "c _ p", answer: "u",
            choices: ["a","i","o","u"],
            hint: "☕ cup（杯子），中間填短音 u！", emoji: "☕", search: "cup mug" },
          { word: "big", speak: "big", displayWord: "b _ g", answer: "i",
            choices: ["a","e","i","o"],
            hint: "🏔️ big（大的），中間填短音 i！", emoji: "🏔️", search: "big mountain" }
        ]
      }
    ],
    story: {
      title: "🐶 The Big Hot Dog",
      pages: [
        { en: "A big dog sat on a hot box.", zh: "一隻大狗坐在熱箱子上。", highlights: ["big","hot","box"] },
        { en: "The dog had a cup and a bun.", zh: "那隻狗有一個杯子和一個小麵包。", highlights: ["cup","bun"] },
        { en: "A fat cat ran to get the bun.", zh: "一隻胖貓跑來搶麵包。", highlights: ["fat","cat","bun"] },
        { en: "The dog said: 'But that is my bun!'", zh: "狗說：「但那是我的麵包！」", highlights: ["But","bun"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  CHAPTER 3：Magic e — a,e,i,o,u 的變化
  // ─────────────────────────────────────────
  {
    id: 3,
    title: "Magic e：長母音",
    emoji: "✨",
    color: 2,
    topics: [
      {
        name: "Magic e 規則",
        rules: [
          "規則：母音在子音中間、字尾是 e → <b>e 不發音，母音唸長音（字母本身的名字）</b>",
          "口訣：單詞結尾有小 e，前面元音發長音",
          "對比練習：mad → m<u>a</u>de（e讓a唸長音）、pet → p<u>e</u>te、pin → p<u>i</u>ne、cop → c<u>o</u>pe、cub → c<u>u</u>be",
          "<b>長音 a /eɪ/</b>：bake, cake, fate, gate, hate, jade, lake, make, tape",
          "<b>長音 e /iː/</b>：pete, mete（字少，較特殊）",
          "<b>長音 i /aɪ/</b>：bike, bite, cite, dice, hire, kite, lice, mice, rice, tide",
          "<b>長音 o /oʊ/</b>：code, dote, lope, note, pope, robe, vote",
          "<b>長音 u /juː/</b>：cube, cute, duke, fuse, huge, mute"
        ],
        words: [
          { word: "bake",  highlight: "a_e", zh: "烤（長音a）", emoji: "🍞", search: "bake bread" },
          { word: "cake",  highlight: "a_e", zh: "蛋糕（長音a）", emoji: "🎂", search: "cake" },
          { word: "lake",  highlight: "a_e", zh: "湖（長音a）", emoji: "🏞️", search: "lake" },
          { word: "make",  highlight: "a_e", zh: "製作（長音a）", emoji: "🔨", search: "make craft" },
          { word: "name",  highlight: "a_e", zh: "名字（長音a）", emoji: "🪪", search: "name tag" },
          { word: "bike",  highlight: "i_e", zh: "腳踏車（長音i）", emoji: "🚲", search: "bicycle bike" },
          { word: "kite",  highlight: "i_e", zh: "風箏（長音i）", emoji: "🪁", search: "kite flying" },
          { word: "rice",  highlight: "i_e", zh: "米飯（長音i）", emoji: "🍚", search: "rice bowl" },
          { word: "note",  highlight: "o_e", zh: "筆記（長音o）", emoji: "📝", search: "note paper" },
          { word: "rose",  highlight: "o_e", zh: "玫瑰（長音o）", emoji: "🌹", search: "rose flower" },
          { word: "home",  highlight: "o_e", zh: "家（長音o）", emoji: "🏠", search: "home house" },
          { word: "cute",  highlight: "u_e", zh: "可愛（長音u）", emoji: "🐣", search: "cute animal" },
          { word: "cube",  highlight: "u_e", zh: "正方體（長音u）", emoji: "🧊", search: "cube ice" },
          { word: "huge",  highlight: "u_e", zh: "巨大（長音u）", emoji: "🏔️", search: "huge mountain" },
          { word: "mute",  highlight: "u_e", zh: "靜音（長音u）", emoji: "🔇", search: "mute silent" }
        ],
        quiz: [
          { word: "cake", speak: "cake", displayWord: "cake", answer: "長音 /eɪ/",
            choices: ["短音 /æ/","長音 /eɪ/","不發音","懶音"],
            hint: "🎂 cake，字尾有 e，a 唸長音 /eɪ/！", emoji: "🎂", search: "cake" },
          { word: "kite", speak: "kite", displayWord: "kite", answer: "長音 /aɪ/",
            choices: ["短音 /ɪ/","長音 /aɪ/","不發音","懶音"],
            hint: "🪁 kite，字尾有 e，i 唸長音 /aɪ/！", emoji: "🪁", search: "kite flying" },
          { word: "note", speak: "note", displayWord: "note", answer: "長音 /oʊ/",
            choices: ["短音 /ɑ/","長音 /oʊ/","不發音","懶音"],
            hint: "📝 note，字尾有 e，o 唸長音 /oʊ/！", emoji: "📝", search: "note paper" },
          { word: "cube", speak: "cube", displayWord: "cube", answer: "長音 /juː/",
            choices: ["短音 /ʌ/","長音 /juː/","不發音","懶音"],
            hint: "🧊 cube，字尾有 e，u 唸長音 /juː/！", emoji: "🧊", search: "cube ice" }
        ]
      }
    ],
    story: {
      title: "🚲 Mike and the Kite",
      pages: [
        { en: "Mike rode his bike to the lake.", zh: "麥克騎腳踏車去湖邊。", highlights: ["Mike","bike","lake"] },
        { en: "He made a cute kite from rice paper.", zh: "他用米紙做了一個可愛的風箏。", highlights: ["made","cute","kite","rice"] },
        { en: "The kite was huge — like a giant rose!", zh: "那個風箏很巨大——像一朵大玫瑰！", highlights: ["kite","huge","rose"] },
        { en: "Mike rode home and put a note on it.", zh: "麥克騎車回家，在上面貼了一張便條。", highlights: ["Mike","home","note"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  CHAPTER 4：母音 a 的變化組合 — ai / ay
  // ─────────────────────────────────────────
  {
    id: 4,
    title: "母音 a 的變化：ai 和 ay",
    emoji: "🌈",
    color: 3,
    topics: [
      {
        name: "ai 和 ay 都唸長音 /eɪ/",
        rules: [
          "ai 和 ay 的發音和 Chapter 3 中「a 在兩個子音中間、字尾是 e」的發音一樣：長音 /eɪ/",
          "口訣：兩個元音排排站，誰站前面誰說了算（前面的 a 說自己的名字）",
          "<b>ai</b>：用在單字<b>中間</b>，例：rain、mail、nail",
          "<b>ay</b>：用在單字<b>結尾</b>，例：day、say、way",
          "為什麼 ay 用在字尾？因為英文規則：單字不能以 i 結尾，所以改用 y 代替 i！"
        ],
        words: [
          { word: "laid",  highlight: "ai", zh: "放置了（ai字中）", emoji: "📦", search: "laid placed" },
          { word: "mail",  highlight: "ai", zh: "信件（ai字中）", emoji: "📬", search: "mailbox" },
          { word: "nail",  highlight: "ai", zh: "釘子/指甲（ai字中）", emoji: "💅", search: "nail" },
          { word: "paid",  highlight: "ai", zh: "付款了（ai字中）", emoji: "💳", search: "paid payment" },
          { word: "rail",  highlight: "ai", zh: "欄杆/鐵軌（ai字中）", emoji: "🛤️", search: "rail train" },
          { word: "said",  highlight: "ai", zh: "說了（ai字中）", emoji: "💬", search: "said speech" },
          { word: "tail",  highlight: "ai", zh: "尾巴（ai字中）", emoji: "🐕", search: "dog tail" },
          { word: "wait",  highlight: "ai", zh: "等待（ai字中）", emoji: "⏳", search: "wait hourglass" },
          { word: "day",   highlight: "ay", zh: "白天（ay字尾）", emoji: "☀️", search: "sunny day" },
          { word: "gay",   highlight: "ay", zh: "快樂的（ay字尾）", emoji: "😄", search: "happy gay" },
          { word: "hay",   highlight: "ay", zh: "乾草（ay字尾）", emoji: "🌾", search: "hay field" },
          { word: "lay",   highlight: "ay", zh: "放置（ay字尾）", emoji: "🛏️", search: "lay down" },
          { word: "may",   highlight: "ay", zh: "可以/五月（ay字尾）", emoji: "🌸", search: "may flower" },
          { word: "pay",   highlight: "ay", zh: "付款（ay字尾）", emoji: "💰", search: "pay money" },
          { word: "say",   highlight: "ay", zh: "說（ay字尾）", emoji: "💬", search: "say speak" }
        ],
        quiz: [
          { word: "mail", speak: "mail", displayWord: "m__l", answer: "ai（字中用）",
            choices: ["ai（字中用）","ay（字尾用）","a_e","ea"],
            hint: "📬 mail（信件），在字中間用 ai！", emoji: "📬", search: "mailbox" },
          { word: "day", speak: "day", displayWord: "d__", answer: "ay（字尾用）",
            choices: ["ai（字中用）","ay（字尾用）","a_e","ea"],
            hint: "☀️ day（白天），在字尾用 ay！", emoji: "☀️", search: "sunny day" },
          { word: "wait", speak: "wait", displayWord: "w__t", answer: "ai（字中用）",
            choices: ["ai（字中用）","ay（字尾用）","a_e","oa"],
            hint: "⏳ wait（等待），在字中間用 ai！", emoji: "⏳", search: "wait hourglass" }
        ]
      }
    ],
    story: {
      title: "🌧️ A Rainy Day",
      pages: [
        { en: "It was a rainy day in May.", zh: "五月的一個下雨天。", highlights: ["rainy","day","May"] },
        { en: "I said: 'Let's wait and play!'", zh: "我說：「我們等一下再玩！」", highlights: ["said","wait","play"] },
        { en: "We got mail — a tail of a dog toy!", zh: "我們收到信件——一個狗玩具的尾巴！", highlights: ["mail","tail"] },
        { en: "We paid and got it the next day.", zh: "我們付款，隔天就收到了。", highlights: ["paid","day"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  CHAPTER 5：母音 e 的變化 — ea / ee / y
  // ─────────────────────────────────────────
  {
    id: 5,
    title: "母音 e 的變化：ea、ee、y",
    emoji: "🌿",
    color: 4,
    topics: [
      {
        name: "ea 和 ee 都唸長音 /iː/",
        rules: [
          "ea 和 ee 的發音和 Chapter 3 中「e 在子音中間、字尾是 e」的發音一樣：長音 /iː/",
          "口訣：兩個元音排排站，誰站前面誰說了算（ea 前面的 e 說自己名字）",
          "<b>ea /iː/</b>：beach、each、feat、heal、meal、teach、sea、tea",
          "<b>ee /iː/</b>：bee、deed、feel、heel、keep、leek、meet、need"
        ],
        words: [
          { word: "beach", highlight: "ea", zh: "海灘（ea=/iː/）", emoji: "🏖️", search: "beach" },
          { word: "each",  highlight: "ea", zh: "每個（ea=/iː/）", emoji: "👐", search: "each person" },
          { word: "heal",  highlight: "ea", zh: "治癒（ea=/iː/）", emoji: "💊", search: "heal medicine" },
          { word: "meal",  highlight: "ea", zh: "一餐（ea=/iː/）", emoji: "🍽️", search: "meal food" },
          { word: "teach", highlight: "ea", zh: "教（ea=/iː/）", emoji: "👩‍🏫", search: "teach teacher" },
          { word: "sea",   highlight: "ea", zh: "海洋（ea=/iː/）", emoji: "🌊", search: "sea ocean" },
          { word: "tea",   highlight: "ea", zh: "茶（ea=/iː/）", emoji: "🍵", search: "tea cup" },
          { word: "bee",   highlight: "ee", zh: "蜜蜂（ee=/iː/）", emoji: "🐝", search: "bee" },
          { word: "feel",  highlight: "ee", zh: "感覺（ee=/iː/）", emoji: "❤️", search: "feel emotion" },
          { word: "heel",  highlight: "ee", zh: "腳跟（ee=/iː/）", emoji: "👠", search: "heel shoe" },
          { word: "keep",  highlight: "ee", zh: "保持（ee=/iː/）", emoji: "🔐", search: "keep safe" },
          { word: "meet",  highlight: "ee", zh: "見面（ee=/iː/）", emoji: "🤝", search: "meet handshake" },
          { word: "need",  highlight: "ee", zh: "需要（ee=/iː/）", emoji: "📋", search: "need list" },
          { word: "tree",  highlight: "ee", zh: "樹（ee=/iː/）", emoji: "🌳", search: "tree" },
          { word: "seed",  highlight: "ee", zh: "種子（ee=/iː/）", emoji: "🌱", search: "seed plant" }
        ],
        quiz: [
          { word: "beach", speak: "beach", displayWord: "b__ch", answer: "ea",
            choices: ["ea","ee","e_e","ie"],
            hint: "🏖️ beach（海灘），用 ea！", emoji: "🏖️", search: "beach" },
          { word: "tree", speak: "tree", displayWord: "tr__", answer: "ee",
            choices: ["ea","ee","e_e","ie"],
            hint: "🌳 tree（樹），用 ee！", emoji: "🌳", search: "tree" }
        ]
      },
      {
        name: "y 在字尾的兩個音",
        rules: [
          "y 在字尾時視其為一個音節，有兩種唸法：",
          "① <b>y /aɪ/</b>：單音節字尾 → 唸長音 i，例：cry、dry、fly、fry、try、sly、spy",
          "② <b>y /iː/</b>：多音節字尾 → 唸長音 e，例：candy、happy、mommy、pity、handy",
          "口訣：字母 Y 真奇怪，它是一個三面派。在開頭要讀 [j]，多音節詞尾要讀 [i]，單音節詞尾要讀 [aɪ]"
        ],
        words: [
          { word: "cry",   highlight: "y", zh: "哭（單音節y=/aɪ/）", emoji: "😢", search: "cry sad" },
          { word: "dry",   highlight: "y", zh: "乾的（單音節y=/aɪ/）", emoji: "🏜️", search: "dry desert" },
          { word: "fly",   highlight: "y", zh: "飛（單音節y=/aɪ/）", emoji: "🦅", search: "fly eagle" },
          { word: "fry",   highlight: "y", zh: "炒/炸（單音節y=/aɪ/）", emoji: "🍳", search: "fry cooking" },
          { word: "try",   highlight: "y", zh: "嘗試（單音節y=/aɪ/）", emoji: "💪", search: "try effort" },
          { word: "sly",   highlight: "y", zh: "狡猾（單音節y=/aɪ/）", emoji: "🦊", search: "sly fox" },
          { word: "spy",   highlight: "y", zh: "間諜（單音節y=/aɪ/）", emoji: "🕵️", search: "spy detective" },
          { word: "boy",   highlight: "y", zh: "男孩（注：oy=/ɔɪ/）", emoji: "👦", search: "boy kid" },
          { word: "candy", highlight: "y", zh: "糖果（多音節y=/iː/）", emoji: "🍬", search: "candy sweet" },
          { word: "happy", highlight: "y", zh: "快樂（多音節y=/iː/）", emoji: "😊", search: "happy smile" },
          { word: "mommy", highlight: "y", zh: "媽媽（多音節y=/iː/）", emoji: "👩", search: "mommy mother" },
          { word: "pity",  highlight: "y", zh: "可惜（多音節y=/iː/）", emoji: "😔", search: "pity sad" },
          { word: "handy", highlight: "y", zh: "方便的（多音節y=/iː/）", emoji: "🔧", search: "handy tool" },
          { word: "funny", highlight: "y", zh: "有趣（多音節y=/iː/）", emoji: "😄", search: "funny laugh" },
          { word: "family",highlight: "y", zh: "家庭（多音節y=/iː/）", emoji: "👪", search: "family" }
        ],
        quiz: [
          { word: "fly", speak: "fly", displayWord: "fly", answer: "/aɪ/（單音節）",
            choices: ["/aɪ/（單音節）","/iː/（多音節）","/j/（字首）","/ɪ/（短音）"],
            hint: "🦅 fly，單音節字尾 y 唸長 i /aɪ/！", emoji: "🦅", search: "fly eagle" },
          { word: "happy", speak: "happy", displayWord: "happy", answer: "/iː/（多音節）",
            choices: ["/aɪ/（單音節）","/iː/（多音節）","/j/（字首）","/ɪ/（短音）"],
            hint: "😊 happy，多音節字尾 y 唸長 e /iː/！", emoji: "😊", search: "happy smile" }
        ]
      }
    ],
    story: {
      title: "🐝 The Bee and the Tea",
      pages: [
        { en: "A bee sat by the sea and had tea.", zh: "一隻蜜蜂坐在海邊喝茶。", highlights: ["bee","sea","tea"] },
        { en: "A happy family came to the beach.", zh: "一個快樂的家庭來到海灘。", highlights: ["happy","family","beach"] },
        { en: "The kids tried to fly a kite — they had to try!", zh: "孩子們試著放風箏——他們努力嘗試！", highlights: ["fly","try"] },
        { en: "They met the bee. It was funny — the bee drank tea!", zh: "他們遇見了那隻蜜蜂。真有趣——蜜蜂在喝茶！", highlights: ["met","funny","bee","tea"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  CHAPTER 6：母音 i 的變化 — i / ie / igh
  // ─────────────────────────────────────────
  {
    id: 6,
    title: "母音 i 的變化：i、ie、igh",
    emoji: "💡",
    color: 0,
    topics: [
      {
        name: "i、ie、igh 都唸長音 /aɪ/",
        rules: [
          "以下情況的 i 都唸長音 /aɪ/（i 的字母名稱）：",
          "① <b>i 在字中、後面無 e</b>：bind、blind、climb、hi、kind、mind（i 後面接 nd、mb 等）",
          "② <b>ie 在字尾</b>：die、lie、pie、tie（字尾 ie=/aɪ/）",
          "③ <b>igh</b>：gh 不發音，igh=/aɪ/，例：fight、high、knight、light、might、night、sight、tight",
          "記憶：igh 裡的 gh 像「隱形人」，完全不發音！"
        ],
        words: [
          { word: "bind",   highlight: "i",   zh: "綁（i+nd）", emoji: "🪢", search: "bind rope" },
          { word: "blind",  highlight: "i",   zh: "盲的（i+nd）", emoji: "🙈", search: "blind eye" },
          { word: "climb",  highlight: "i",   zh: "爬（i+mb）", emoji: "🧗", search: "climb mountain" },
          { word: "kind",   highlight: "i",   zh: "親切的（i+nd）", emoji: "🤗", search: "kind person" },
          { word: "mind",   highlight: "i",   zh: "心智（i+nd）", emoji: "🧠", search: "mind brain" },
          { word: "die",    highlight: "ie",  zh: "死（ie字尾）", emoji: "💀", search: "die skull" },
          { word: "lie",    highlight: "ie",  zh: "說謊（ie字尾）", emoji: "🤥", search: "lie pinocchio" },
          { word: "pie",    highlight: "ie",  zh: "派（ie字尾）", emoji: "🥧", search: "pie" },
          { word: "tie",    highlight: "ie",  zh: "領帶/綁（ie字尾）", emoji: "👔", search: "tie necktie" },
          { word: "fight",  highlight: "igh", zh: "打架（igh=/aɪ/）", emoji: "🥊", search: "fight boxing" },
          { word: "high",   highlight: "igh", zh: "高的（igh=/aɪ/）", emoji: "🏔️", search: "high mountain" },
          { word: "knight", highlight: "igh", zh: "騎士（igh=/aɪ/）", emoji: "⚔️", search: "knight sword" },
          { word: "light",  highlight: "igh", zh: "光（igh=/aɪ/）", emoji: "💡", search: "light bulb" },
          { word: "night",  highlight: "igh", zh: "夜晚（igh=/aɪ/）", emoji: "🌙", search: "night moon" },
          { word: "sight",  highlight: "igh", zh: "視力/景色（igh=/aɪ/）", emoji: "👁️", search: "sight eye" }
        ],
        quiz: [
          { word: "light", speak: "light", displayWord: "l_ght", answer: "igh（gh不發音）",
            choices: ["ig","igh（gh不發音）","igh（g不發音）","i_e"],
            hint: "💡 light，igh 唸 /aɪ/，gh 完全不發音！", emoji: "💡", search: "light bulb" },
          { word: "pie", speak: "pie", displayWord: "pie", answer: "/aɪ/（字尾ie）",
            choices: ["/iː/（長e）","/aɪ/（字尾ie）","/ɪ/（短i）","/ɛ/（短e）"],
            hint: "🥧 pie，字尾 ie 唸長 i /aɪ/！", emoji: "🥧", search: "pie" },
          { word: "kind", speak: "kind", displayWord: "kind", answer: "長音 /aɪ/（i+nd）",
            choices: ["短音 /ɪ/","長音 /aɪ/（i+nd）","不發音","懶音"],
            hint: "🤗 kind，i 後面接 nd，唸長音 /aɪ/！", emoji: "🤗", search: "kind person" }
        ]
      }
    ],
    story: {
      title: "🌙 A Night Fight",
      pages: [
        { en: "A kind knight saw a light at night.", zh: "一位善良的騎士在夜晚看見一道光。", highlights: ["kind","knight","light","night"] },
        { en: "He climbed high to get a better sight.", zh: "他爬得很高，以便看得更清楚。", highlights: ["climbed","high","sight"] },
        { en: "He found a pie on a tie — what a lie!", zh: "他發現一個領帶上有一個派——真是奇怪！", highlights: ["pie","tie","lie"] },
        { en: "He did not fight. He said: 'Keep in mind — be kind!'", zh: "他沒有打架。他說：「記住——要善良！」", highlights: ["fight","mind","kind"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  CHAPTER 7：all / ell / ill 的變化組合
  // ─────────────────────────────────────────
  {
    id: 7,
    title: "all、ell、ill 字串",
    emoji: "📚",
    color: 1,
    topics: [
      {
        name: "all /ɔl/、ell /ɛl/、ill /ɪl/",
        rules: [
          "看到這些組合時，視其為一個<b>字串</b>整體發音，不再分開唸！",
          "<b>all /ɔl/</b>：all（所有）、ball、call、fall、hall、mall、small、tall、wall",
          "<b>ell /ɛl/</b>：bell、cell、fell、hell、sell、smell、spell、tell、well、yell",
          "<b>ill /ɪl/</b>：fill、hill、ill、kill、mill、pill、till、skill、still、will",
          "記憶：看到 all/ell/ill，就整串一起唸，不要拆開！"
        ],
        words: [
          { word: "all",   highlight: "all", zh: "所有", emoji: "🌍", search: "all everything" },
          { word: "ball",  highlight: "all", zh: "球", emoji: "⚽", search: "ball soccer" },
          { word: "call",  highlight: "all", zh: "打電話/叫", emoji: "📞", search: "call phone" },
          { word: "fall",  highlight: "all", zh: "秋天/落下", emoji: "🍂", search: "fall autumn" },
          { word: "hall",  highlight: "all", zh: "大廳", emoji: "🏛️", search: "hall corridor" },
          { word: "mall",  highlight: "all", zh: "購物中心", emoji: "🏬", search: "mall shopping" },
          { word: "tall",  highlight: "all", zh: "高的", emoji: "🦒", search: "tall giraffe" },
          { word: "wall",  highlight: "all", zh: "牆", emoji: "🧱", search: "wall brick" },
          { word: "bell",  highlight: "ell", zh: "鈴", emoji: "🔔", search: "bell" },
          { word: "cell",  highlight: "ell", zh: "細胞/牢房", emoji: "🔬", search: "cell biology" },
          { word: "fell",  highlight: "ell", zh: "落下了", emoji: "⬇️", search: "fell down" },
          { word: "sell",  highlight: "ell", zh: "賣", emoji: "🏷️", search: "sell price tag" },
          { word: "spell", highlight: "ell", zh: "拼字/魔法", emoji: "✨", search: "spell magic" },
          { word: "tell",  highlight: "ell", zh: "告訴", emoji: "💬", search: "tell speak" },
          { word: "well",  highlight: "ell", zh: "井/好", emoji: "🪣", search: "well water" }
        ],
        quiz: [
          { word: "ball", speak: "ball", displayWord: "b_ll", answer: "all → /ɔl/",
            choices: ["all → /ɔl/","ell → /ɛl/","ill → /ɪl/","al → /æl/"],
            hint: "⚽ ball，b+all，整串唸 /bɔl/！", emoji: "⚽", search: "ball soccer" },
          { word: "spell", speak: "spell", displayWord: "sp_ll", answer: "ell → /ɛl/",
            choices: ["all → /ɔl/","ell → /ɛl/","ill → /ɪl/","el → /ɛl/"],
            hint: "✨ spell，sp+ell，整串唸 /spɛl/！", emoji: "✨", search: "spell magic" },
          { word: "hill", speak: "hill", displayWord: "h_ll", answer: "ill → /ɪl/",
            choices: ["all → /ɔl/","ell → /ɛl/","ill → /ɪl/","il → /ɪl/"],
            hint: "⛰️ hill，h+ill，整串唸 /hɪl/！", emoji: "⛰️", search: "hill mountain" }
        ]
      }
    ],
    story: {
      title: "⛰️ The Small Hill",
      pages: [
        { en: "A tall wall fell on a small hill.", zh: "一面高牆倒在一座小山丘上。", highlights: ["tall","wall","fell","small","hill"] },
        { en: "The ball rolled down and hit the bell.", zh: "球滾下來打到了鈴。", highlights: ["ball","bell"] },
        { en: "A still mill stood well by the hall.", zh: "一座靜止的磨坊好好地立在大廳旁。", highlights: ["still","mill","well","hall"] },
        { en: "We all called out: 'Spell it! Tell it!'", zh: "我們全都叫出來：「拼出來！說出來！」", highlights: ["all","called","Spell","Tell"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  CHAPTER 8：母音 o 的變化 — oo / oa / ow
  // ─────────────────────────────────────────
  {
    id: 8,
    title: "母音 o 的變化：oo、oa、ow",
    emoji: "🌊",
    color: 2,
    topics: [
      {
        name: "oo 的兩個音",
        rules: [
          "<b>oo 長音 /uː/</b>（嘴巴最圓）：food、fool、moon、noodle、pool、room、school、shoot、spoon、tooth、tool、zoo",
          "<b>oo 短音 /ʊ/</b>（嘴巴放鬆）：book、cook、foot、good、hook、look、took、wood、wool",
          "口訣：oo 組合胖哪哪，長音讀 [uː] 短音 [ʊ]",
          "規則：兩個字母 oo 後面跟著 k 或 r 時，唸短音 /ʊ/（book, cook, look）",
          "其他大多數情況唸長音 /uː/"
        ],
        words: [
          { word: "fool",   highlight: "oo", zh: "傻瓜（長音uː）", emoji: "🤪", search: "fool silly" },
          { word: "food",   highlight: "oo", zh: "食物（長音uː）", emoji: "🍔", search: "food" },
          { word: "moon",   highlight: "oo", zh: "月亮（長音uː）", emoji: "🌙", search: "moon" },
          { word: "pool",   highlight: "oo", zh: "游泳池（長音uː）", emoji: "🏊", search: "swimming pool" },
          { word: "school", highlight: "oo", zh: "學校（長音uː）", emoji: "🏫", search: "school" },
          { word: "spoon",  highlight: "oo", zh: "湯匙（長音uː）", emoji: "🥄", search: "spoon" },
          { word: "tooth",  highlight: "oo", zh: "牙齒（長音uː）", emoji: "🦷", search: "tooth" },
          { word: "zoo",    highlight: "oo", zh: "動物園（長音uː）", emoji: "🦁", search: "zoo" },
          { word: "book",   highlight: "oo", zh: "書（短音ʊ）", emoji: "📚", search: "book" },
          { word: "cook",   highlight: "oo", zh: "廚師/烹飪（短音ʊ）", emoji: "👨‍🍳", search: "cook chef" },
          { word: "foot",   highlight: "oo", zh: "腳（短音ʊ）", emoji: "🦶", search: "foot" },
          { word: "good",   highlight: "oo", zh: "好（短音ʊ）", emoji: "👍", search: "good thumbs" },
          { word: "look",   highlight: "oo", zh: "看（短音ʊ）", emoji: "👀", search: "look eyes" },
          { word: "wood",   highlight: "oo", zh: "木頭（短音ʊ）", emoji: "🪵", search: "wood log" },
          { word: "wool",   highlight: "oo", zh: "羊毛（短音ʊ）", emoji: "🐑", search: "wool sheep" }
        ],
        quiz: [
          { word: "food", speak: "food", displayWord: "food", answer: "長音 /uː/",
            choices: ["長音 /uː/","短音 /ʊ/"],
            hint: "🍔 food，oo 唸長音 /uː/！", emoji: "🍔", search: "food" },
          { word: "book", speak: "book", displayWord: "book", answer: "短音 /ʊ/",
            choices: ["長音 /uː/","短音 /ʊ/"],
            hint: "📚 book，oo 後面有 k，唸短音 /ʊ/！", emoji: "📚", search: "book" },
          { word: "moon", speak: "moon", displayWord: "moon", answer: "長音 /uː/",
            choices: ["長音 /uː/","短音 /ʊ/"],
            hint: "🌙 moon，oo 唸長音 /uː/！", emoji: "🌙", search: "moon" }
        ]
      },
      {
        name: "oa 和 ow 唸長音 /oʊ/",
        rules: [
          "<b>oa /oʊ/</b>：唸法如同 Chapter 3「o 在子音中間、字尾是 e」的長音，例：boat、coat、goat、loaf、soap",
          "<b>ow /oʊ/</b>（長o，通常在字尾）：blow、bowl、flow、low、slow、snow、window、yellow",
          "⚠️ ow 也可以唸 /aʊ/（另一個音）：cow、down、flower、power、town → Chapter 9 會學",
          "口訣：兩個元音排排站，誰站前面誰說了算（oa 前面的 o 說自己名字）"
        ],
        words: [
          { word: "boat",  highlight: "oa", zh: "船（oa=/oʊ/）", emoji: "⛵", search: "boat sailing" },
          { word: "coat",  highlight: "oa", zh: "外套（oa=/oʊ/）", emoji: "🧥", search: "coat jacket" },
          { word: "goat",  highlight: "oa", zh: "山羊（oa=/oʊ/）", emoji: "🐐", search: "goat" },
          { word: "loaf",  highlight: "oa", zh: "一條麵包（oa=/oʊ/）", emoji: "🍞", search: "loaf bread" },
          { word: "soap",  highlight: "oa", zh: "肥皂（oa=/oʊ/）", emoji: "🧼", search: "soap" },
          { word: "road",  highlight: "oa", zh: "道路（oa=/oʊ/）", emoji: "🛤️", search: "road" },
          { word: "blow",  highlight: "ow", zh: "吹（ow=/oʊ/）", emoji: "💨", search: "blow wind" },
          { word: "bowl",  highlight: "ow", zh: "碗（ow=/oʊ/）", emoji: "🥣", search: "bowl" },
          { word: "flow",  highlight: "ow", zh: "流動（ow=/oʊ/）", emoji: "🌊", search: "flow water" },
          { word: "low",   highlight: "ow", zh: "低（ow=/oʊ/）", emoji: "⬇️", search: "low arrow" },
          { word: "slow",  highlight: "ow", zh: "慢（ow=/oʊ/）", emoji: "🐢", search: "slow turtle" },
          { word: "snow",  highlight: "ow", zh: "雪（ow=/oʊ/）", emoji: "❄️", search: "snow" },
          { word: "window",highlight: "ow", zh: "窗戶（ow=/oʊ/）", emoji: "🪟", search: "window" },
          { word: "yellow",highlight: "ow", zh: "黃色（ow=/oʊ/）", emoji: "💛", search: "yellow color" },
          { word: "follow",highlight: "ow", zh: "跟隨（ow=/oʊ/）", emoji: "👣", search: "follow footsteps" }
        ],
        quiz: [
          { word: "coat", speak: "coat", displayWord: "c__t", answer: "oa",
            choices: ["oa","ow","o_e","oe"],
            hint: "🧥 coat（外套），字中間用 oa！", emoji: "🧥", search: "coat jacket" },
          { word: "snow", speak: "snow", displayWord: "sn__", answer: "ow",
            choices: ["oa","ow","o_e","oe"],
            hint: "❄️ snow（雪），字尾用 ow！", emoji: "❄️", search: "snow" }
        ]
      }
    ],
    story: {
      title: "⛵ The Boat in the Snow",
      pages: [
        { en: "A goat on a boat looked at the moon.", zh: "一隻山羊在船上看月亮。", highlights: ["goat","boat","moon"] },
        { en: "It was slow and low — the boat flowed.", zh: "慢慢地、低低地——船流動著。", highlights: ["slow","low","boat","flowed"] },
        { en: "Snow fell on the window. The goat got a book and some food.", zh: "雪落在窗上。山羊拿了一本書和一些食物。", highlights: ["Snow","window","goat","book","food"] },
        { en: "Good — the school was closed! No cook, no school!", zh: "太好了——學校關閉了！不用做飯，不用上學！", highlights: ["Good","school","cook"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  CHAPTER 9：ou / ow / oi / oy
  // ─────────────────────────────────────────
  {
    id: 9,
    title: "ou、ow、oi、oy 的變化",
    emoji: "🔀",
    color: 3,
    topics: [
      {
        name: "ou /aʊ/ 和 ow /aʊ/",
        rules: [
          "這些是「o 的其他例外唸法」，不用記規則，直接記單字！",
          "<b>ou /aʊ/</b>（類似注音「ㄠ」）：cloud、count、house、mouse、proud、shout、sour、about、loud、mouth",
          "<b>ow /aʊ/</b>（ow 的另一個音）：cow、down、how、now、towel、flower、power、town、owl",
          "口訣：ou 總是不開心，啊嗚啊嗚啊嗚，這個聲音要記住"
        ],
        words: [
          { word: "cloud",  highlight: "ou", zh: "雲（ou=/aʊ/）", emoji: "☁️", search: "cloud" },
          { word: "count",  highlight: "ou", zh: "數數（ou=/aʊ/）", emoji: "🔢", search: "count number" },
          { word: "house",  highlight: "ou", zh: "房子（ou=/aʊ/）", emoji: "🏠", search: "house home" },
          { word: "mouse",  highlight: "ou", zh: "老鼠（ou=/aʊ/）", emoji: "🐭", search: "mouse" },
          { word: "proud",  highlight: "ou", zh: "驕傲（ou=/aʊ/）", emoji: "😤", search: "proud person" },
          { word: "shout",  highlight: "ou", zh: "大叫（ou=/aʊ/）", emoji: "📢", search: "shout loud" },
          { word: "loud",   highlight: "ou", zh: "大聲（ou=/aʊ/）", emoji: "🔊", search: "loud speaker" },
          { word: "mouth",  highlight: "ou", zh: "嘴巴（ou=/aʊ/）", emoji: "👄", search: "mouth" },
          { word: "cow",    highlight: "ow", zh: "牛（ow=/aʊ/）", emoji: "🐄", search: "cow" },
          { word: "down",   highlight: "ow", zh: "向下（ow=/aʊ/）", emoji: "⬇️", search: "down arrow" },
          { word: "how",    highlight: "ow", zh: "怎麼（ow=/aʊ/）", emoji: "❓", search: "how question" },
          { word: "now",    highlight: "ow", zh: "現在（ow=/aʊ/）", emoji: "⏰", search: "now time" },
          { word: "town",   highlight: "ow", zh: "小鎮（ow=/aʊ/）", emoji: "🏘️", search: "town village" },
          { word: "owl",    highlight: "ow", zh: "貓頭鷹（ow=/aʊ/）", emoji: "🦉", search: "owl" },
          { word: "flower", highlight: "ow", zh: "花（ow=/aʊ/）", emoji: "🌸", search: "flower" }
        ],
        quiz: [
          { word: "cloud", speak: "cloud", displayWord: "cloud", answer: "/aʊ/",
            choices: ["/oʊ/（長o）","/aʊ/","/uː/（長u）","/ɑ/（短o）"],
            hint: "☁️ cloud，ou 唸 /aʊ/！", emoji: "☁️", search: "cloud" },
          { word: "cow", speak: "cow", displayWord: "cow", answer: "/aʊ/",
            choices: ["/oʊ/（長o）","/aʊ/","/uː/（長u）","/ɑ/（短o）"],
            hint: "🐄 cow，ow 唸 /aʊ/！", emoji: "🐄", search: "cow" }
        ]
      },
      {
        name: "oi /ɔɪ/ 和 oy /ɔɪ/",
        rules: [
          "<b>oi /ɔɪ/</b>（類似注音「ㄟ」加嘴圓）：boil、coin、foil、point、soil、toilet、voice、choice",
          "<b>oy /ɔɪ/</b>（字尾用）：boy、enjoy、joy、toy、soy、annoy",
          "口訣：oi 發音不奇怪，先發 o，再發 i，[ɔɪ][ɔɪ]一起來",
          "位置規則：oi 在字中間，oy 在字尾（跟 ai/ay 的邏輯一樣！）"
        ],
        words: [
          { word: "boil",   highlight: "oi", zh: "煮沸（oi字中）", emoji: "♨️", search: "boil water" },
          { word: "coin",   highlight: "oi", zh: "硬幣（oi字中）", emoji: "🪙", search: "coin money" },
          { word: "foil",   highlight: "oi", zh: "鋁箔（oi字中）", emoji: "🥘", search: "foil wrap" },
          { word: "point",  highlight: "oi", zh: "重點/指（oi字中）", emoji: "👆", search: "point finger" },
          { word: "soil",   highlight: "oi", zh: "土壤（oi字中）", emoji: "🌱", search: "soil dirt" },
          { word: "toilet", highlight: "oi", zh: "馬桶（oi字中）", emoji: "🚽", search: "toilet" },
          { word: "voice",  highlight: "oi", zh: "聲音（oi字中）", emoji: "🎤", search: "voice microphone" },
          { word: "choice", highlight: "oi", zh: "選擇（oi字中）", emoji: "✅", search: "choice decision" },
          { word: "boy",    highlight: "oy", zh: "男孩（oy字尾）", emoji: "👦", search: "boy kid" },
          { word: "enjoy",  highlight: "oy", zh: "享受（oy字尾）", emoji: "🎉", search: "enjoy celebrate" },
          { word: "joy",    highlight: "oy", zh: "快樂（oy字尾）", emoji: "😊", search: "joy happy" },
          { word: "toy",    highlight: "oy", zh: "玩具（oy字尾）", emoji: "🧸", search: "toy teddy" },
          { word: "soy",    highlight: "oy", zh: "大豆（oy字尾）", emoji: "🫘", search: "soy beans" },
          { word: "annoy",  highlight: "oy", zh: "惹人惱（oy字尾）", emoji: "😠", search: "annoy angry" },
          { word: "royal",  highlight: "oy", zh: "皇家的（oy字中）", emoji: "👑", search: "royal crown" }
        ],
        quiz: [
          { word: "coin", speak: "coin", displayWord: "c__n", answer: "oi（字中）",
            choices: ["oi（字中）","oy（字尾）","ou","oe"],
            hint: "🪙 coin（硬幣），字中間用 oi！", emoji: "🪙", search: "coin money" },
          { word: "toy", speak: "toy", displayWord: "t__", answer: "oy（字尾）",
            choices: ["oi（字中）","oy（字尾）","ou","ow"],
            hint: "🧸 toy（玩具），字尾用 oy！", emoji: "🧸", search: "toy teddy" }
        ]
      }
    ],
    story: {
      title: "🐄 The Cow and the Toy",
      pages: [
        { en: "A cow in a town found a toy in the soil.", zh: "一頭小鎮上的牛在土裡找到一個玩具。", highlights: ["cow","town","toy","soil"] },
        { en: "A boy shouted with joy: 'That is my coin!'", zh: "一個男孩開心地大叫：「那是我的硬幣！」", highlights: ["boy","joy","coin"] },
        { en: "The cow said with a loud voice: 'It is my choice!'", zh: "牛大聲說：「這是我的選擇！」", highlights: ["loud","voice","choice"] },
        { en: "They both enjoyed it — how proud they were!", zh: "他們都很享受——多麼驕傲啊！", highlights: ["enjoyed","proud"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  CHAPTER 10：母音 u 的變化 — u-e / ue / ui
  // ─────────────────────────────────────────
  {
    id: 10,
    title: "母音 u 的變化：u-e、ue、ui",
    emoji: "💙",
    color: 4,
    topics: [
      {
        name: "u-e、ue、ui 都唸長音 /uː/ 或 /juː/",
        rules: [
          "這些都是「u 的其他例外唸法」，直接記單字！",
          "<b>u-e /juː/ 或 /uː/</b>：flute（長笛）、rule（規則）",
          "<b>ue /uː/</b>（字尾）：blue、clue、glue、sue、Tuesday",
          "<b>ui /uː/</b>（字中）：fruit、juice、suit",
          "口訣：單詞結尾有小 e，前面元音發長音（u 說自己的名字 /juː/ 或 /uː/）"
        ],
        words: [
          { word: "flute",   highlight: "u_e", zh: "長笛（u長音）", emoji: "🎷", search: "flute instrument" },
          { word: "rule",    highlight: "u_e", zh: "規則（u長音）", emoji: "📏", search: "rule ruler" },
          { word: "blue",    highlight: "ue",  zh: "藍色（ue=/uː/）", emoji: "💙", search: "blue color" },
          { word: "clue",    highlight: "ue",  zh: "線索（ue=/uː/）", emoji: "🔍", search: "clue detective" },
          { word: "glue",    highlight: "ue",  zh: "膠水（ue=/uː/）", emoji: "🔑", search: "glue stick" },
          { word: "sue",     highlight: "ue",  zh: "告訴（ue=/uː/）", emoji: "⚖️", search: "sue court" },
          { word: "Tuesday", highlight: "ue",  zh: "星期二（ue=/uː/）", emoji: "📅", search: "tuesday calendar" },
          { word: "fruit",   highlight: "ui",  zh: "水果（ui=/uː/）", emoji: "🍎", search: "fruit" },
          { word: "juice",   highlight: "ui",  zh: "果汁（ui=/uː/）", emoji: "🥤", search: "juice drink" },
          { word: "suit",    highlight: "ui",  zh: "西裝（ui=/uː/）", emoji: "👔", search: "suit jacket" },
          { word: "cute",    highlight: "u_e", zh: "可愛（u長音）", emoji: "🐣", search: "cute animal" },
          { word: "cube",    highlight: "u_e", zh: "正方體（u長音）", emoji: "🧊", search: "cube" },
          { word: "tune",    highlight: "u_e", zh: "曲調（u長音）", emoji: "🎵", search: "music tune" },
          { word: "use",     highlight: "u_e", zh: "使用（u長音）", emoji: "🔧", search: "use tool" },
          { word: "dune",    highlight: "u_e", zh: "沙丘（u長音）", emoji: "🏜️", search: "sand dune" }
        ],
        quiz: [
          { word: "blue", speak: "blue", displayWord: "bl__", answer: "ue",
            choices: ["ue","ui","u_e","oo"],
            hint: "💙 blue（藍色），字尾用 ue！", emoji: "💙", search: "blue color" },
          { word: "juice", speak: "juice", displayWord: "j__ce", answer: "ui",
            choices: ["ue","ui","u_e","oo"],
            hint: "🥤 juice（果汁），字中間用 ui！", emoji: "🥤", search: "juice drink" },
          { word: "flute", speak: "flute", displayWord: "fl_te", answer: "u_e",
            choices: ["ue","ui","u_e","oo"],
            hint: "🎷 flute（長笛），magic e，u 唸長音！", emoji: "🎷", search: "flute instrument" }
        ]
      }
    ],
    story: {
      title: "💙 Blue Fruit Juice",
      pages: [
        { en: "On Tuesday, I had fruit juice in a blue suit.", zh: "星期二，我穿著藍色西裝喝果汁。", highlights: ["Tuesday","fruit","juice","blue","suit"] },
        { en: "I found a clue — a note with a rule: 'Use glue!'", zh: "我找到一條線索——一張寫著規則的便條：「用膠水！」", highlights: ["clue","rule","Use","glue"] },
        { en: "I played a cute tune on the flute.", zh: "我用長笛吹了一段可愛的曲調。", highlights: ["cute","tune","flute"] },
        { en: "The juice was so blue — what a cute cube of ice!", zh: "果汁如此蔚藍——多麼可愛的冰塊！", highlights: ["juice","blue","cute","cube"] }
      ]
    }
  },


]; // end LESSONS

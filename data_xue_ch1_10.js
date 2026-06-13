// 薛珍華老師自然發音法 Ch1-10（升級版 v2）
// 新增：分段發音 phonemes、對比練習 contrastPairs、外部連結 links、音組按鈕 soundBadge

const LESSONS = [

  // ─────────────────────────────────────────
  //  CH1：字母的唸法 — 子音與母音
  // ─────────────────────────────────────────
  {
    id: 1,
    title: "字母的唸法：子音與母音",
    emoji: "🔤",
    color: 0,
    links: [
      {
        url: "https://elt.oup.com/student/oxfordphonicsworld/level01/watch?cc=tw&selLanguage=zh",
        icon: "🎬",
        title: "Oxford Phonics World Level 1",
        desc: "點此觀看字母發音動畫練習（需網路）"
      }
    ],
    topics: [
      {
        name: "母音 vs 子音",
        rules: [
          "英文 26 個字母分兩類：<b>母音</b>和<b>子音</b>",
          "🌟 <b>母音（Vowels）</b>：A、E、I、O、U，加上字尾的 Y，共 6 個",
          "🔤 <b>子音（Consonants）</b>：其餘 20 個字母",
          "口訣：英語字母二十六，元音字母他最 6，就是 A E I O U，後有輔音發短音，沒有輔音發長音，元音單獨站字尾"
        ],
        words: [
          { word: "ant",     highlight: "a", zh: "螞蟻（短音a）", emoji: "🐜", search: "ant insect",
            phonemes: ["a","n","t"] },
          { word: "egg",     highlight: "e", zh: "蛋（短音e）",  emoji: "🥚", search: "egg",
            phonemes: ["e","g"] },
          { word: "igloo",   highlight: "i", zh: "冰屋（短音i）", emoji: "🏠", search: "igloo snow",
            phonemes: ["i","g","l","oo"] },
          { word: "ox",      highlight: "o", zh: "公牛（短音o）", emoji: "🐂", search: "ox bull",
            phonemes: ["o","x"] },
          { word: "umbrella",highlight: "u", zh: "雨傘（短音u）", emoji: "☂️", search: "umbrella",
            phonemes: ["u","m","br","e","ll","a"] },
          { word: "ape",     highlight: "a", zh: "猿猴（長音a）", emoji: "🦧", search: "ape monkey",
            phonemes: ["a","p","e"] },
          { word: "eat",     highlight: "e", zh: "吃（長音e）",   emoji: "🍽️", search: "eating food",
            phonemes: ["ea","t"] },
          { word: "ice",     highlight: "i", zh: "冰（長音i）",   emoji: "🧊", search: "ice cube",
            phonemes: ["i","ce"] },
          { word: "open",    highlight: "o", zh: "開（長音o）",   emoji: "🚪", search: "open door",
            phonemes: ["o","p","e","n"] },
          { word: "use",     highlight: "u", zh: "使用（長音u）", emoji: "🔧", search: "use tool",
            phonemes: ["u","se"] }
        ],
        quiz: [
          { word: "ant", speak: "ant", displayWord: "ant", answer: "短音（子音結尾）",
            choices: ["短音（子音結尾）","長音（母音結尾）","不發音","懶音"],
            hint: "🐜 ant，a 被 n 和 t 夾住，唸短音！", emoji: "🐜", search: "ant insect" },
          { word: "ape", speak: "ape", displayWord: "ape", answer: "長音（字母名稱）",
            choices: ["短音（子音結尾）","長音（字母名稱）","不發音","懶音"],
            hint: "🦧 ape，a 後面有 magic e，唸長音 /eɪ/！", emoji: "🦧", search: "ape monkey" }
        ]
      },
      {
        name: "音節的判斷",
        rules: [
          "音節判斷 4 步驟（以 computer 為例）：",
          "① 找出單字的母音：c<u>o</u>mp<u>u</u>t<u>e</u>r",
          "② 子音帶母音成一個音節：com / pu / ter",
          "③ 落單的子音跟前面的音節",
          "④ 依規則唸出：com-pu-ter，共 3 個音節",
          "口訣：音節劃分是關鍵，先把元音找出來，再把輔音一歸後二分開"
        ],
        words: [
          { word: "cat",      syllable: "cat",        highlight: "a", zh: "貓（1音節）", emoji: "🐱", search: "cat",
            phonemes: ["c","a","t"] },
          { word: "robot",    syllable: "ro-bot",     highlight: "o", zh: "機器人（2音節）", emoji: "🤖", search: "robot",
            phonemes: ["r","o","b","o","t"] },
          { word: "tiger",    syllable: "ti-ger",     highlight: "i", zh: "老虎（2音節）", emoji: "🐯", search: "tiger",
            phonemes: ["t","i","g","er"] },
          { word: "basket",   syllable: "bas-ket",    highlight: "a", zh: "籃子（2音節）", emoji: "🧺", search: "basket",
            phonemes: ["b","a","s","k","e","t"] },
          { word: "garden",   syllable: "gar-den",    highlight: "a", zh: "花園（2音節）", emoji: "🌷", search: "garden",
            phonemes: ["g","ar","d","e","n"] },
          { word: "student",  syllable: "stu-dent",   highlight: "u", zh: "學生（2音節）", emoji: "🎒", search: "student",
            phonemes: ["st","u","d","e","nt"] },
          { word: "remember", syllable: "re-mem-ber", highlight: "e", zh: "記得（3音節）", emoji: "🧠", search: "remember memory",
            phonemes: ["r","e","m","e","m","b","er"] },
          { word: "breakfast",syllable: "break-fast", highlight: "ea",zh: "早餐（2音節）", emoji: "🍳", search: "breakfast",
            phonemes: ["br","ea","k","f","a","st"] },
          { word: "Sunday",   syllable: "Sun-day",    highlight: "u", zh: "星期日（2音節）", emoji: "☀️", search: "sunday calendar",
            phonemes: ["S","u","n","d","ay"] },
          { word: "August",   syllable: "Au-gust",    highlight: "Au",zh: "八月（2音節）", emoji: "📅", search: "august calendar",
            phonemes: ["Au","g","u","st"] }
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
  //  CH2：短母音 — 拆成 5 個子單元
  // ─────────────────────────────────────────
  {
    id: 2,
    title: "短母音：a, e, i, o, u",
    emoji: "🔊",
    color: 1,
    topics: [
      {
        name: "短母音 a /æ/",
        soundBadge: "a",
        soundLabel: "短音 /æ/\n嘴巴張大，像被嚇到",
        rules: [
          "短音 <b>a /æ/</b>：嘴巴張大，像被嚇到的樣子",
          "出現在閉音節（子音夾住母音）：c<u>a</u>t、b<u>a</u>d、h<u>a</u>t",
          "口訣：後有輔音發短音！"
        ],
        words: [
          { word: "bad",  highlight: "a", zh: "壞的", emoji: "😈", search: "bad evil", phonemes: ["b","a","d"] },
          { word: "bat",  highlight: "a", zh: "球棒/蝙蝠", emoji: "🦇", search: "bat", phonemes: ["b","a","t"] },
          { word: "cat",  highlight: "a", zh: "貓", emoji: "🐱", search: "cat", phonemes: ["c","a","t"] },
          { word: "cap",  highlight: "a", zh: "帽子", emoji: "🧢", search: "cap hat", phonemes: ["c","a","p"] },
          { word: "fat",  highlight: "a", zh: "胖的", emoji: "🐷", search: "fat pig", phonemes: ["f","a","t"] },
          { word: "hand", highlight: "a", zh: "手", emoji: "✋", search: "hand", phonemes: ["h","a","nd"] },
          { word: "hat",  highlight: "a", zh: "帽子", emoji: "🎩", search: "hat", phonemes: ["h","a","t"] },
          { word: "map",  highlight: "a", zh: "地圖", emoji: "🗺️", search: "map", phonemes: ["m","a","p"] },
          { word: "pan",  highlight: "a", zh: "平底鍋", emoji: "🍳", search: "pan frying", phonemes: ["p","a","n"] },
          { word: "rat",  highlight: "a", zh: "老鼠", emoji: "🐀", search: "rat mouse", phonemes: ["r","a","t"] }
        ],
        quiz: [
          { word: "cat", speak: "cat", displayWord: "c _ t", answer: "a",
            choices: ["a","e","i","o"], hint: "🐱 cat（貓），中間填短音 a！", emoji: "🐱", search: "cat" },
          { word: "hat", speak: "hat", displayWord: "h _ t", answer: "a",
            choices: ["a","e","i","u"], hint: "🎩 hat（帽子），中間填短音 a！", emoji: "🎩", search: "hat" }
        ]
      },
      {
        name: "短母音 e /ɛ/",
        soundBadge: "e",
        soundLabel: "短音 /ɛ/\n嘴角向兩側",
        rules: [
          "短音 <b>e /ɛ/</b>：嘴角稍微向兩側，像說「誒」",
          "出現在閉音節：b<u>e</u>t、l<u>e</u>g、p<u>e</u>n"
        ],
        words: [
          { word: "bet",  highlight: "e", zh: "打賭", emoji: "🎲", search: "bet dice", phonemes: ["b","e","t"] },
          { word: "jet",  highlight: "e", zh: "噴射機", emoji: "✈️", search: "jet airplane", phonemes: ["j","e","t"] },
          { word: "egg",  highlight: "e", zh: "蛋", emoji: "🥚", search: "egg", phonemes: ["e","gg"] },
          { word: "leg",  highlight: "e", zh: "腿", emoji: "🦵", search: "leg", phonemes: ["l","e","g"] },
          { word: "let",  highlight: "e", zh: "讓", emoji: "🙌", search: "let allow", phonemes: ["l","e","t"] },
          { word: "net",  highlight: "e", zh: "網子", emoji: "🥅", search: "net goal", phonemes: ["n","e","t"] },
          { word: "pen",  highlight: "e", zh: "筆", emoji: "✏️", search: "pen pencil", phonemes: ["p","e","n"] },
          { word: "pet",  highlight: "e", zh: "寵物", emoji: "🐶", search: "pet dog", phonemes: ["p","e","t"] },
          { word: "red",  highlight: "e", zh: "紅色", emoji: "🔴", search: "red color", phonemes: ["r","e","d"] },
          { word: "ten",  highlight: "e", zh: "十", emoji: "🔟", search: "number ten", phonemes: ["t","e","n"] }
        ],
        quiz: [
          { word: "jet", speak: "jet", displayWord: "j _ t", answer: "e",
            choices: ["a","e","i","o"], hint: "✈️ jet（噴射機），中間填短音 e！", emoji: "✈️", search: "jet airplane" },
          { word: "pen", speak: "pen", displayWord: "p _ n", answer: "e",
            choices: ["a","e","i","u"], hint: "✏️ pen（筆），中間填短音 e！", emoji: "✏️", search: "pen pencil" }
        ]
      },
      {
        name: "短母音 i /ɪ/",
        soundBadge: "i",
        soundLabel: "短音 /ɪ/\n嘴角微微向兩側",
        rules: [
          "短音 <b>i /ɪ/</b>：嘴角微微向兩側，發短促的「一」",
          "出現在閉音節：b<u>i</u>g、s<u>i</u>t、l<u>i</u>p"
        ],
        words: [
          { word: "big",  highlight: "i", zh: "大的", emoji: "🏔️", search: "big mountain", phonemes: ["b","i","g"] },
          { word: "bit",  highlight: "i", zh: "一點", emoji: "🤏", search: "bit small", phonemes: ["b","i","t"] },
          { word: "dig",  highlight: "i", zh: "挖", emoji: "⛏️", search: "dig shovel", phonemes: ["d","i","g"] },
          { word: "fin",  highlight: "i", zh: "魚鰭", emoji: "🐟", search: "fish fin", phonemes: ["f","i","n"] },
          { word: "fit",  highlight: "i", zh: "合身的", emoji: "👔", search: "fit clothes", phonemes: ["f","i","t"] },
          { word: "kid",  highlight: "i", zh: "孩子", emoji: "👦", search: "kid child", phonemes: ["k","i","d"] },
          { word: "lip",  highlight: "i", zh: "嘴唇", emoji: "💋", search: "lip mouth", phonemes: ["l","i","p"] },
          { word: "sit",  highlight: "i", zh: "坐", emoji: "🪑", search: "chair sit", phonemes: ["s","i","t"] },
          { word: "six",  highlight: "i", zh: "六", emoji: "6️⃣", search: "number six", phonemes: ["s","i","x"] },
          { word: "win",  highlight: "i", zh: "贏", emoji: "🏆", search: "win trophy", phonemes: ["w","i","n"] }
        ],
        quiz: [
          { word: "big", speak: "big", displayWord: "b _ g", answer: "i",
            choices: ["a","e","i","o"], hint: "🏔️ big（大的），中間填短音 i！", emoji: "🏔️", search: "big mountain" },
          { word: "sit", speak: "sit", displayWord: "s _ t", answer: "i",
            choices: ["a","e","i","u"], hint: "🪑 sit（坐），中間填短音 i！", emoji: "🪑", search: "chair sit" }
        ]
      },
      {
        name: "短母音 o /ɑ/",
        soundBadge: "o",
        soundLabel: "短音 /ɑ/\n嘴巴圓圓打開",
        rules: [
          "短音 <b>o /ɑ/</b>：嘴巴圓圓打開，像說「ㄚ」",
          "出現在閉音節：b<u>o</u>x、h<u>o</u>t、m<u>o</u>p"
        ],
        words: [
          { word: "box",  highlight: "o", zh: "箱子", emoji: "📦", search: "box cardboard", phonemes: ["b","o","x"] },
          { word: "cop",  highlight: "o", zh: "警察", emoji: "👮", search: "police cop", phonemes: ["c","o","p"] },
          { word: "fog",  highlight: "o", zh: "霧", emoji: "🌫️", search: "fog mist", phonemes: ["f","o","g"] },
          { word: "hot",  highlight: "o", zh: "熱的", emoji: "🔥", search: "hot fire", phonemes: ["h","o","t"] },
          { word: "mop",  highlight: "o", zh: "拖把", emoji: "🧹", search: "mop cleaning", phonemes: ["m","o","p"] },
          { word: "nod",  highlight: "o", zh: "點頭", emoji: "😊", search: "nod yes", phonemes: ["n","o","d"] },
          { word: "not",  highlight: "o", zh: "不是", emoji: "🚫", search: "not no", phonemes: ["n","o","t"] },
          { word: "fox",  highlight: "o", zh: "狐狸", emoji: "🦊", search: "fox", phonemes: ["f","o","x"] },
          { word: "rod",  highlight: "o", zh: "棒子", emoji: "🎣", search: "rod fishing", phonemes: ["r","o","d"] },
          { word: "top",  highlight: "o", zh: "頂部", emoji: "🔝", search: "top above", phonemes: ["t","o","p"] }
        ],
        quiz: [
          { word: "box", speak: "box", displayWord: "b _ x", answer: "o",
            choices: ["a","e","o","u"], hint: "📦 box（箱子），中間填短音 o！", emoji: "📦", search: "box cardboard" },
          { word: "hot", speak: "hot", displayWord: "h _ t", answer: "o",
            choices: ["a","o","u","i"], hint: "🔥 hot（熱的），中間填短音 o！", emoji: "🔥", search: "hot fire" }
        ]
      },
      {
        name: "短母音 u /ʌ/",
        soundBadge: "u",
        soundLabel: "短音 /ʌ/\n嘴巴放鬆發「ㄚ」",
        rules: [
          "短音 <b>u /ʌ/</b>：嘴巴放鬆，發短促的「ㄚ」",
          "出現在閉音節：b<u>u</u>s、c<u>u</u>p、s<u>u</u>n"
        ],
        words: [
          { word: "bun",  highlight: "u", zh: "小圓麵包", emoji: "🍞", search: "bun bread", phonemes: ["b","u","n"] },
          { word: "bus",  highlight: "u", zh: "公車", emoji: "🚌", search: "bus", phonemes: ["b","u","s"] },
          { word: "but",  highlight: "u", zh: "但是", emoji: "🤷", search: "but however", phonemes: ["b","u","t"] },
          { word: "cup",  highlight: "u", zh: "杯子", emoji: "☕", search: "cup mug", phonemes: ["c","u","p"] },
          { word: "cut",  highlight: "u", zh: "剪切", emoji: "✂️", search: "cut scissors", phonemes: ["c","u","t"] },
          { word: "hug",  highlight: "u", zh: "擁抱", emoji: "🤗", search: "hug embrace", phonemes: ["h","u","g"] },
          { word: "gun",  highlight: "u", zh: "槍", emoji: "🔫", search: "gun toy", phonemes: ["g","u","n"] },
          { word: "gum",  highlight: "u", zh: "口香糖", emoji: "🫧", search: "gum bubble", phonemes: ["g","u","m"] },
          { word: "sun",  highlight: "u", zh: "太陽", emoji: "☀️", search: "sun sunshine", phonemes: ["s","u","n"] },
          { word: "tub",  highlight: "u", zh: "浴缸", emoji: "🛁", search: "tub bath", phonemes: ["t","u","b"] }
        ],
        quiz: [
          { word: "cup", speak: "cup", displayWord: "c _ p", answer: "u",
            choices: ["a","i","o","u"], hint: "☕ cup（杯子），中間填短音 u！", emoji: "☕", search: "cup mug" },
          { word: "sun", speak: "sun", displayWord: "s _ n", answer: "u",
            choices: ["a","e","o","u"], hint: "☀️ sun（太陽），中間填短音 u！", emoji: "☀️", search: "sun sunshine" }
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
  //  CH3：Magic e — 新增對比練習
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
          "規則：母音在子音中間、字尾是 e → <b>e 不發音，母音唸長音（字母名稱）</b>",
          "口訣：單詞結尾有小 e，前面元音發長音",
          "<b>長音 a /eɪ/</b>：bake, cake, make, name, lake, gate, tape",
          "<b>長音 i /aɪ/</b>：bike, kite, rice, bite, hide, mine, pine",
          "<b>長音 o /oʊ/</b>：code, note, rope, home, rose, vote",
          "<b>長音 u /juː/</b>：cube, cute, duke, fuse, huge, mute, tune"
        ],
        words: [
          { word: "bake",  highlight: "a_e", zh: "烤（長a）", emoji: "🍞", search: "bake bread", phonemes: ["b","a","k","e"] },
          { word: "cake",  highlight: "a_e", zh: "蛋糕（長a）", emoji: "🎂", search: "cake", phonemes: ["c","a","k","e"] },
          { word: "lake",  highlight: "a_e", zh: "湖（長a）", emoji: "🏞️", search: "lake", phonemes: ["l","a","k","e"] },
          { word: "name",  highlight: "a_e", zh: "名字（長a）", emoji: "🪪", search: "name tag", phonemes: ["n","a","m","e"] },
          { word: "bike",  highlight: "i_e", zh: "腳踏車（長i）", emoji: "🚲", search: "bicycle bike", phonemes: ["b","i","k","e"] },
          { word: "kite",  highlight: "i_e", zh: "風箏（長i）", emoji: "🪁", search: "kite flying", phonemes: ["k","i","t","e"] },
          { word: "rice",  highlight: "i_e", zh: "米飯（長i）", emoji: "🍚", search: "rice bowl", phonemes: ["r","i","c","e"] },
          { word: "note",  highlight: "o_e", zh: "筆記（長o）", emoji: "📝", search: "note paper", phonemes: ["n","o","t","e"] },
          { word: "home",  highlight: "o_e", zh: "家（長o）", emoji: "🏠", search: "home house", phonemes: ["h","o","m","e"] },
          { word: "cute",  highlight: "u_e", zh: "可愛（長u）", emoji: "🐣", search: "cute animal", phonemes: ["c","u","t","e"] },
          { word: "cube",  highlight: "u_e", zh: "正方體（長u）", emoji: "🧊", search: "cube ice", phonemes: ["c","u","b","e"] },
          { word: "huge",  highlight: "u_e", zh: "巨大（長u）", emoji: "🏔️", search: "huge mountain", phonemes: ["h","u","g","e"] }
        ],
        contrastPairs: [
          { short: "mad",  shortZh: "生氣的", long: "made", longZh: "製作了" },
          { short: "hat",  shortZh: "帽子",   long: "hate", longZh: "討厭" },
          { short: "pet",  shortZh: "寵物",   long: "pete", longZh: "（人名）" },
          { short: "pin",  shortZh: "別針",   long: "pine", longZh: "松樹" },
          { short: "win",  shortZh: "贏",     long: "wine", longZh: "葡萄酒" },
          { short: "cop",  shortZh: "警察",   long: "cope", longZh: "應付" },
          { short: "bon",  shortZh: "好（法）",long: "bone", longZh: "骨頭" },
          { short: "cub",  shortZh: "幼崽",   long: "cube", longZh: "正方體" }
        ],
        quiz: [
          { word: "cake", speak: "cake", displayWord: "cake", answer: "長音 /eɪ/",
            choices: ["短音 /æ/","長音 /eɪ/","不發音","懶音"],
            hint: "🎂 cake，字尾有 e，a 唸長音 /eɪ/！", emoji: "🎂", search: "cake" },
          { word: "kite", speak: "kite", displayWord: "kite", answer: "長音 /aɪ/",
            choices: ["短音 /ɪ/","長音 /aɪ/","不發音","懶音"],
            hint: "🪁 kite，字尾有 e，i 唸長音 /aɪ/！", emoji: "🪁", search: "kite flying" },
          { word: "home", speak: "home", displayWord: "home", answer: "長音 /oʊ/",
            choices: ["短音 /ɑ/","長音 /oʊ/","不發音","懶音"],
            hint: "🏠 home，字尾有 e，o 唸長音 /oʊ/！", emoji: "🏠", search: "home house" },
          { word: "cute", speak: "cute", displayWord: "cute", answer: "長音 /juː/",
            choices: ["短音 /ʌ/","長音 /juː/","不發音","懶音"],
            hint: "🐣 cute，字尾有 e，u 唸長音 /juː/！", emoji: "🐣", search: "cute animal" }
        ]
      }
    ],
    story: {
      title: "🚲 Mike and the Kite",
      pages: [
        { en: "Mike rode his bike to the lake.", zh: "麥克騎腳踏車去湖邊。", highlights: ["bike","lake"] },
        { en: "He made a cute kite from rice paper.", zh: "他用米紙做了一個可愛的風箏。", highlights: ["made","cute","kite","rice"] },
        { en: "The kite was huge — like a giant rose!", zh: "那個風箏很巨大——像一朵大玫瑰！", highlights: ["kite","huge","rose"] },
        { en: "He rode home and put a note on it.", zh: "麥克騎車回家，在上面貼了一張便條。", highlights: ["home","note"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  CH4：ai / ay
  // ─────────────────────────────────────────
  {
    id: 4,
    title: "母音 a 的變化：ai 和 ay",
    emoji: "🌈",
    color: 3,
    topics: [
      {
        name: "ai /eɪ/ 字中",
        soundBadge: "ai",
        soundLabel: "ai = /eɪ/（長a）\n用在字的中間",
        rules: [
          "<b>ai /eɪ/</b>：用在單字<b>中間</b>，a 說自己的名字，i 不發音",
          "例：r<u>ai</u>n、m<u>ai</u>l、n<u>ai</u>l、p<u>ai</u>d、t<u>ai</u>l、w<u>ai</u>t",
          "口訣：兩個元音排排站，誰站前面誰說了算"
        ],
        words: [
          { word: "laid",  highlight: "ai", zh: "放置了", emoji: "📦", search: "laid placed", phonemes: ["l","ai","d"] },
          { word: "mail",  highlight: "ai", zh: "信件", emoji: "📬", search: "mailbox", phonemes: ["m","ai","l"] },
          { word: "nail",  highlight: "ai", zh: "釘子/指甲", emoji: "💅", search: "nail", phonemes: ["n","ai","l"] },
          { word: "paid",  highlight: "ai", zh: "付款了", emoji: "💳", search: "paid payment", phonemes: ["p","ai","d"] },
          { word: "rail",  highlight: "ai", zh: "欄杆", emoji: "🛤️", search: "rail train", phonemes: ["r","ai","l"] },
          { word: "rain",  highlight: "ai", zh: "雨", emoji: "🌧️", search: "rain", phonemes: ["r","ai","n"] },
          { word: "sail",  highlight: "ai", zh: "帆", emoji: "⛵", search: "sailboat", phonemes: ["s","ai","l"] },
          { word: "tail",  highlight: "ai", zh: "尾巴", emoji: "🐕", search: "dog tail", phonemes: ["t","ai","l"] },
          { word: "train", highlight: "ai", zh: "火車", emoji: "🚂", search: "train", phonemes: ["tr","ai","n"] },
          { word: "wait",  highlight: "ai", zh: "等待", emoji: "⏳", search: "wait hourglass", phonemes: ["w","ai","t"] }
        ],
        quiz: [
          { word: "mail", speak: "mail", displayWord: "m__l", answer: "ai（字中）",
            choices: ["ai（字中）","ay（字尾）","a_e","ea"],
            hint: "📬 mail（信件），字中間用 ai！", emoji: "📬", search: "mailbox" },
          { word: "rain", speak: "rain", displayWord: "r__n", answer: "ai（字中）",
            choices: ["ai（字中）","ay（字尾）","a_e","oa"],
            hint: "🌧️ rain（雨），字中間用 ai！", emoji: "🌧️", search: "rain" }
        ]
      },
      {
        name: "ay /eɪ/ 字尾",
        soundBadge: "ay",
        soundLabel: "ay = /eɪ/（長a）\n用在字的結尾",
        rules: [
          "<b>ay /eɪ/</b>：用在單字<b>結尾</b>，發音和 ai 一樣",
          "為什麼用 ay 不用 ai？因為英文單字不能以 i 結尾，改用 y！",
          "例：d<u>ay</u>、s<u>ay</u>、m<u>ay</u>、p<u>ay</u>、w<u>ay</u>、l<u>ay</u>"
        ],
        words: [
          { word: "day",   highlight: "ay", zh: "白天", emoji: "☀️", search: "sunny day", phonemes: ["d","ay"] },
          { word: "gay",   highlight: "ay", zh: "快樂的", emoji: "😄", search: "happy gay", phonemes: ["g","ay"] },
          { word: "hay",   highlight: "ay", zh: "乾草", emoji: "🌾", search: "hay field", phonemes: ["h","ay"] },
          { word: "lay",   highlight: "ay", zh: "放置", emoji: "🛏️", search: "lay down", phonemes: ["l","ay"] },
          { word: "may",   highlight: "ay", zh: "可以/五月", emoji: "🌸", search: "may flower", phonemes: ["m","ay"] },
          { word: "pay",   highlight: "ay", zh: "付款", emoji: "💰", search: "pay money", phonemes: ["p","ay"] },
          { word: "play",  highlight: "ay", zh: "玩耍", emoji: "🎮", search: "play toys", phonemes: ["pl","ay"] },
          { word: "say",   highlight: "ay", zh: "說", emoji: "💬", search: "say speak", phonemes: ["s","ay"] },
          { word: "stay",  highlight: "ay", zh: "留下", emoji: "🏠", search: "stay home", phonemes: ["st","ay"] },
          { word: "way",   highlight: "ay", zh: "方式/路", emoji: "🛤️", search: "road way", phonemes: ["w","ay"] }
        ],
        quiz: [
          { word: "day", speak: "day", displayWord: "d__", answer: "ay（字尾）",
            choices: ["ai（字中）","ay（字尾）","a_e","ea"],
            hint: "☀️ day（白天），字尾用 ay！", emoji: "☀️", search: "sunny day" },
          { word: "play", speak: "play", displayWord: "pl__", answer: "ay（字尾）",
            choices: ["ai（字中）","ay（字尾）","a_e","oa"],
            hint: "🎮 play（玩耍），字尾用 ay！", emoji: "🎮", search: "play toys" }
        ]
      }
    ],
    story: {
      title: "🌧️ A Rainy Day",
      pages: [
        { en: "It was a rainy day in May.", zh: "五月的一個下雨天。", highlights: ["rainy","day","May"] },
        { en: "I said: 'Let's wait and play!'", zh: "我說：「我們等一下再玩！」", highlights: ["said","wait","play"] },
        { en: "We got mail — a toy with a tail!", zh: "我們收到信件——一個帶尾巴的玩具！", highlights: ["mail","tail"] },
        { en: "We paid and got it the next day.", zh: "我們付款，隔天就收到了。", highlights: ["paid","day"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  CH5：ea / ee / y
  // ─────────────────────────────────────────
  {
    id: 5,
    title: "母音 e 的變化：ea、ee、y",
    emoji: "🌿",
    color: 4,
    topics: [
      {
        name: "ea /iː/ 字中",
        soundBadge: "ea",
        soundLabel: "ea = /iː/（長e）",
        rules: [
          "<b>ea /iː/</b>：a 幫 e 說出長音，例：b<u>ea</u>ch、t<u>ea</u>、s<u>ea</u>",
          "口訣：兩個元音排排站，誰站前面誰說了算（e 說自己名字）"
        ],
        words: [
          { word: "beach", highlight: "ea", zh: "海灘", emoji: "🏖️", search: "beach", phonemes: ["b","ea","ch"] },
          { word: "each",  highlight: "ea", zh: "每個", emoji: "👐", search: "each person", phonemes: ["ea","ch"] },
          { word: "heal",  highlight: "ea", zh: "治癒", emoji: "💊", search: "heal medicine", phonemes: ["h","ea","l"] },
          { word: "leaf",  highlight: "ea", zh: "葉子", emoji: "🍃", search: "leaf", phonemes: ["l","ea","f"] },
          { word: "meal",  highlight: "ea", zh: "一餐", emoji: "🍽️", search: "meal food", phonemes: ["m","ea","l"] },
          { word: "meat",  highlight: "ea", zh: "肉", emoji: "🥩", search: "meat", phonemes: ["m","ea","t"] },
          { word: "sea",   highlight: "ea", zh: "海洋", emoji: "🌊", search: "sea ocean", phonemes: ["s","ea"] },
          { word: "teach", highlight: "ea", zh: "教", emoji: "👩‍🏫", search: "teach teacher", phonemes: ["t","ea","ch"] },
          { word: "tea",   highlight: "ea", zh: "茶", emoji: "🍵", search: "tea cup", phonemes: ["t","ea"] },
          { word: "read",  highlight: "ea", zh: "讀", emoji: "📖", search: "read book", phonemes: ["r","ea","d"] }
        ],
        quiz: [
          { word: "beach", speak: "beach", displayWord: "b__ch", answer: "ea",
            choices: ["ea","ee","e_e","ie"], hint: "🏖️ beach（海灘），用 ea！", emoji: "🏖️", search: "beach" },
          { word: "tea", speak: "tea", displayWord: "t__", answer: "ea",
            choices: ["ea","ee","e_e","ie"], hint: "🍵 tea（茶），用 ea！", emoji: "🍵", search: "tea cup" }
        ]
      },
      {
        name: "ee /iː/ 字中或字尾",
        soundBadge: "ee",
        soundLabel: "ee = /iː/（長e）",
        rules: [
          "<b>ee /iː/</b>：兩個 e 在一起，唸長音 /iː/",
          "例：b<u>ee</u>、tr<u>ee</u>、s<u>ee</u>、f<u>ee</u>t、sl<u>ee</u>p"
        ],
        words: [
          { word: "bee",   highlight: "ee", zh: "蜜蜂", emoji: "🐝", search: "bee", phonemes: ["b","ee"] },
          { word: "deed",  highlight: "ee", zh: "行為", emoji: "✅", search: "deed action", phonemes: ["d","ee","d"] },
          { word: "feel",  highlight: "ee", zh: "感覺", emoji: "❤️", search: "feel emotion", phonemes: ["f","ee","l"] },
          { word: "heel",  highlight: "ee", zh: "腳跟", emoji: "👠", search: "heel shoe", phonemes: ["h","ee","l"] },
          { word: "keep",  highlight: "ee", zh: "保持", emoji: "🔐", search: "keep safe", phonemes: ["k","ee","p"] },
          { word: "meet",  highlight: "ee", zh: "見面", emoji: "🤝", search: "meet handshake", phonemes: ["m","ee","t"] },
          { word: "need",  highlight: "ee", zh: "需要", emoji: "📋", search: "need list", phonemes: ["n","ee","d"] },
          { word: "seed",  highlight: "ee", zh: "種子", emoji: "🌱", search: "seed plant", phonemes: ["s","ee","d"] },
          { word: "sleep", highlight: "ee", zh: "睡覺", emoji: "😴", search: "sleep", phonemes: ["sl","ee","p"] },
          { word: "tree",  highlight: "ee", zh: "樹", emoji: "🌳", search: "tree", phonemes: ["tr","ee"] }
        ],
        quiz: [
          { word: "tree", speak: "tree", displayWord: "tr__", answer: "ee",
            choices: ["ea","ee","e_e","ie"], hint: "🌳 tree（樹），用 ee！", emoji: "🌳", search: "tree" },
          { word: "sleep", speak: "sleep", displayWord: "sl__p", answer: "ee",
            choices: ["ea","ee","e_e","ie"], hint: "😴 sleep（睡覺），用 ee！", emoji: "😴", search: "sleep" }
        ]
      },
      {
        name: "y 在字尾的兩個音",
        soundBadge: "y",
        soundLabel: "y 字尾：單音節=/aɪ/\n多音節=/iː/",
        rules: [
          "y 在字尾：① <b>單音節</b> → 唸長 i /aɪ/：cry、dry、fly",
          "② <b>多音節</b> → 唸長 e /iː/：happy、candy、funny",
          "口訣：字母 Y 真奇怪，三面派。在開頭讀 [j]，多音節詞尾讀 [i]，單音節詞尾讀 [aɪ]"
        ],
        words: [
          { word: "cry",   highlight: "y", zh: "哭（單音節/aɪ/）", emoji: "😢", search: "cry sad", phonemes: ["cr","y"] },
          { word: "dry",   highlight: "y", zh: "乾（單音節/aɪ/）", emoji: "🏜️", search: "dry desert", phonemes: ["dr","y"] },
          { word: "fly",   highlight: "y", zh: "飛（單音節/aɪ/）", emoji: "🦅", search: "fly eagle", phonemes: ["fl","y"] },
          { word: "sky",   highlight: "y", zh: "天空（單音節/aɪ/）", emoji: "🌤️", search: "sky", phonemes: ["sk","y"] },
          { word: "try",   highlight: "y", zh: "嘗試（單音節/aɪ/）", emoji: "💪", search: "try effort", phonemes: ["tr","y"] },
          { word: "spy",   highlight: "y", zh: "間諜（單音節/aɪ/）", emoji: "🕵️", search: "spy detective", phonemes: ["sp","y"] },
          { word: "candy", highlight: "y", zh: "糖果（多音節/iː/）", emoji: "🍬", search: "candy sweet", phonemes: ["c","a","n","d","y"] },
          { word: "family",highlight: "y", zh: "家庭（多音節/iː/）", emoji: "👪", search: "family", phonemes: ["f","a","m","i","l","y"] },
          { word: "funny", highlight: "y", zh: "有趣（多音節/iː/）", emoji: "😄", search: "funny laugh", phonemes: ["f","u","nn","y"] },
          { word: "happy", highlight: "y", zh: "快樂（多音節/iː/）", emoji: "😊", search: "happy smile", phonemes: ["h","a","pp","y"] }
        ],
        quiz: [
          { word: "fly", speak: "fly", displayWord: "fly", answer: "/aɪ/（單音節）",
            choices: ["/aɪ/（單音節）","/iː/（多音節）","/j/（字首）","/ɪ/"],
            hint: "🦅 fly，單音節字尾 y 唸 /aɪ/！", emoji: "🦅", search: "fly eagle" },
          { word: "happy", speak: "happy", displayWord: "happy", answer: "/iː/（多音節）",
            choices: ["/aɪ/（單音節）","/iː/（多音節）","/j/（字首）","/ɪ/"],
            hint: "😊 happy，多音節字尾 y 唸 /iː/！", emoji: "😊", search: "happy smile" }
        ]
      }
    ],
    story: {
      title: "🐝 The Bee and the Tea",
      pages: [
        { en: "A bee sat by the sea and had tea.", zh: "一隻蜜蜂坐在海邊喝茶。", highlights: ["bee","sea","tea"] },
        { en: "A happy family came to the beach.", zh: "一個快樂的家庭來到海灘。", highlights: ["happy","family","beach"] },
        { en: "The kids tried to fly a kite.", zh: "孩子們試著放風箏。", highlights: ["fly","kite"] },
        { en: "They met the bee — it was so funny!", zh: "他們遇見了那隻蜜蜂——真是太有趣了！", highlights: ["bee","funny"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  CH6：i / ie / igh
  // ─────────────────────────────────────────
  {
    id: 6,
    title: "母音 i 的變化：i、ie、igh",
    emoji: "💡",
    color: 0,
    topics: [
      {
        name: "i（特殊位置）、ie 字尾、igh",
        soundBadge: "i / ie / igh",
        soundLabel: "全都唸長音 /aɪ/",
        rules: [
          "以下三種情況 i 都唸長音 /aɪ/：",
          "① <b>i + nd/mb</b>：bind、blind、climb、kind、mind（i 後接 nd 或 mb）",
          "② <b>ie 字尾</b>：die、lie、pie、tie",
          "③ <b>igh</b>：gh 不發音，igh = /aɪ/，例：night、light、right、high",
          "記憶：igh 裡的 gh 像「隱形人」，完全不發音！"
        ],
        words: [
          { word: "bind",   highlight: "i",   zh: "綁（i+nd）", emoji: "🪢", search: "bind rope", phonemes: ["b","i","nd"] },
          { word: "blind",  highlight: "i",   zh: "盲的（i+nd）", emoji: "🙈", search: "blind", phonemes: ["bl","i","nd"] },
          { word: "climb",  highlight: "i",   zh: "爬（i+mb）", emoji: "🧗", search: "climb mountain", phonemes: ["cl","i","mb"] },
          { word: "kind",   highlight: "i",   zh: "親切的", emoji: "🤗", search: "kind person", phonemes: ["k","i","nd"] },
          { word: "mind",   highlight: "i",   zh: "心智", emoji: "🧠", search: "mind brain", phonemes: ["m","i","nd"] },
          { word: "die",    highlight: "ie",  zh: "死（ie字尾）", emoji: "💀", search: "die skull", phonemes: ["d","ie"] },
          { word: "lie",    highlight: "ie",  zh: "說謊（ie字尾）", emoji: "🤥", search: "lie pinocchio", phonemes: ["l","ie"] },
          { word: "pie",    highlight: "ie",  zh: "派（ie字尾）", emoji: "🥧", search: "pie", phonemes: ["p","ie"] },
          { word: "tie",    highlight: "ie",  zh: "領帶（ie字尾）", emoji: "👔", search: "tie necktie", phonemes: ["t","ie"] },
          { word: "fight",  highlight: "igh", zh: "打架（igh）", emoji: "🥊", search: "fight boxing", phonemes: ["f","igh","t"] },
          { word: "high",   highlight: "igh", zh: "高的（igh）", emoji: "🏔️", search: "high mountain", phonemes: ["h","igh"] },
          { word: "light",  highlight: "igh", zh: "光（igh）", emoji: "💡", search: "light bulb", phonemes: ["l","igh","t"] },
          { word: "night",  highlight: "igh", zh: "夜晚（igh）", emoji: "🌙", search: "night moon", phonemes: ["n","igh","t"] },
          { word: "right",  highlight: "igh", zh: "右/正確（igh）", emoji: "✅", search: "right correct", phonemes: ["r","igh","t"] },
          { word: "tight",  highlight: "igh", zh: "緊的（igh）", emoji: "🤜", search: "tight squeeze", phonemes: ["t","igh","t"] }
        ],
        quiz: [
          { word: "light", speak: "light", displayWord: "l_ght", answer: "igh（gh不發音）",
            choices: ["ig","igh（gh不發音）","i_e","ie"],
            hint: "💡 light，igh 唸 /aɪ/，gh 完全不發音！", emoji: "💡", search: "light bulb" },
          { word: "pie", speak: "pie", displayWord: "pie", answer: "/aɪ/（字尾ie）",
            choices: ["/iː/（長e）","/aɪ/（字尾ie）","/ɪ/（短i）","/eɪ/"],
            hint: "🥧 pie，字尾 ie 唸長 i /aɪ/！", emoji: "🥧", search: "pie" }
        ]
      }
    ],
    story: {
      title: "🌙 A Night Fight",
      pages: [
        { en: "A kind knight saw a light at night.", zh: "一位善良的騎士在夜晚看見一道光。", highlights: ["kind","light","night"] },
        { en: "He climbed high to get a better sight.", zh: "他爬得很高，以便看得更清楚。", highlights: ["climbed","high"] },
        { en: "He found a pie — what a lie!", zh: "他發現了一個派——真是奇怪！", highlights: ["pie","lie"] },
        { en: "Keep in mind — be kind!", zh: "記住——要善良！", highlights: ["mind","kind"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  CH7：all / ell / ill — 拆成 3 個子單元
  // ─────────────────────────────────────────
  {
    id: 7,
    title: "all、ell、ill 字串",
    emoji: "📚",
    color: 1,
    topics: [
      {
        name: "all /ɔl/",
        soundBadge: "all",
        soundLabel: "all = /ɔl/\n整串一起唸！",
        rules: [
          "看到 <b>all</b> 時，視其為一個字串整體發音：/ɔl/",
          "不要拆開唸 a-l-l，直接整串唸 /ɔl/",
          "例：all、ball、call、fall、hall、mall、small、tall、wall"
        ],
        words: [
          { word: "all",   highlight: "all", zh: "所有", emoji: "🌍", search: "all everything", phonemes: ["all"] },
          { word: "ball",  highlight: "all", zh: "球", emoji: "⚽", search: "ball soccer", phonemes: ["b","all"] },
          { word: "call",  highlight: "all", zh: "打電話/叫", emoji: "📞", search: "call phone", phonemes: ["c","all"] },
          { word: "fall",  highlight: "all", zh: "秋天/落下", emoji: "🍂", search: "fall autumn", phonemes: ["f","all"] },
          { word: "hall",  highlight: "all", zh: "大廳", emoji: "🏛️", search: "hall corridor", phonemes: ["h","all"] },
          { word: "mall",  highlight: "all", zh: "購物中心", emoji: "🏬", search: "mall shopping", phonemes: ["m","all"] },
          { word: "small", highlight: "all", zh: "小的", emoji: "🐜", search: "small tiny", phonemes: ["sm","all"] },
          { word: "tall",  highlight: "all", zh: "高的", emoji: "🦒", search: "tall giraffe", phonemes: ["t","all"] },
          { word: "wall",  highlight: "all", zh: "牆", emoji: "🧱", search: "wall brick", phonemes: ["w","all"] },
          { word: "stall", highlight: "all", zh: "攤位/停頓", emoji: "🏪", search: "stall market", phonemes: ["st","all"] }
        ],
        quiz: [
          { word: "ball", speak: "ball", displayWord: "b_ll", answer: "all → /ɔl/",
            choices: ["all → /ɔl/","ell → /ɛl/","ill → /ɪl/","al → /æl/"],
            hint: "⚽ ball，b+all，整串唸 /bɔl/！", emoji: "⚽", search: "ball soccer" },
          { word: "tall", speak: "tall", displayWord: "t_ll", answer: "all → /ɔl/",
            choices: ["all → /ɔl/","ell → /ɛl/","ill → /ɪl/","al → /æl/"],
            hint: "🦒 tall，t+all，整串唸 /tɔl/！", emoji: "🦒", search: "tall giraffe" }
        ]
      },
      {
        name: "ell /ɛl/",
        soundBadge: "ell",
        soundLabel: "ell = /ɛl/\n整串一起唸！",
        rules: [
          "看到 <b>ell</b> 時，視其為一個字串整體發音：/ɛl/",
          "例：bell、cell、fell、hell、sell、smell、spell、tell、well、yell"
        ],
        words: [
          { word: "bell",  highlight: "ell", zh: "鈴", emoji: "🔔", search: "bell", phonemes: ["b","ell"] },
          { word: "cell",  highlight: "ell", zh: "細胞/牢房", emoji: "🔬", search: "cell biology", phonemes: ["c","ell"] },
          { word: "fell",  highlight: "ell", zh: "落下了", emoji: "⬇️", search: "fell down", phonemes: ["f","ell"] },
          { word: "hell",  highlight: "ell", zh: "地獄", emoji: "🔥", search: "hell fire", phonemes: ["h","ell"] },
          { word: "sell",  highlight: "ell", zh: "賣", emoji: "🏷️", search: "sell price tag", phonemes: ["s","ell"] },
          { word: "smell", highlight: "ell", zh: "聞/氣味", emoji: "👃", search: "smell nose", phonemes: ["sm","ell"] },
          { word: "spell", highlight: "ell", zh: "拼字/魔法", emoji: "✨", search: "spell magic", phonemes: ["sp","ell"] },
          { word: "tell",  highlight: "ell", zh: "告訴", emoji: "💬", search: "tell speak", phonemes: ["t","ell"] },
          { word: "well",  highlight: "ell", zh: "井/好", emoji: "🪣", search: "well water", phonemes: ["w","ell"] },
          { word: "yell",  highlight: "ell", zh: "大叫", emoji: "📣", search: "yell shout", phonemes: ["y","ell"] }
        ],
        quiz: [
          { word: "spell", speak: "spell", displayWord: "sp_ll", answer: "ell → /ɛl/",
            choices: ["all → /ɔl/","ell → /ɛl/","ill → /ɪl/","el → /ɛl/"],
            hint: "✨ spell，sp+ell，整串唸 /spɛl/！", emoji: "✨", search: "spell magic" },
          { word: "bell", speak: "bell", displayWord: "b_ll", answer: "ell → /ɛl/",
            choices: ["all → /ɔl/","ell → /ɛl/","ill → /ɪl/","el → /ɛl/"],
            hint: "🔔 bell，b+ell，整串唸 /bɛl/！", emoji: "🔔", search: "bell" }
        ]
      },
      {
        name: "ill /ɪl/",
        soundBadge: "ill",
        soundLabel: "ill = /ɪl/\n整串一起唸！",
        rules: [
          "看到 <b>ill</b> 時，視其為一個字串整體發音：/ɪl/",
          "例：fill、hill、ill、kill、mill、pill、till、skill、still、will"
        ],
        words: [
          { word: "fill",  highlight: "ill", zh: "填充", emoji: "🫙", search: "fill container", phonemes: ["f","ill"] },
          { word: "hill",  highlight: "ill", zh: "山丘", emoji: "⛰️", search: "hill mountain", phonemes: ["h","ill"] },
          { word: "ill",   highlight: "ill", zh: "生病的", emoji: "🤒", search: "ill sick", phonemes: ["ill"] },
          { word: "kill",  highlight: "ill", zh: "殺", emoji: "⚔️", search: "kill sword", phonemes: ["k","ill"] },
          { word: "mill",  highlight: "ill", zh: "磨坊", emoji: "🏭", search: "mill factory", phonemes: ["m","ill"] },
          { word: "pill",  highlight: "ill", zh: "藥丸", emoji: "💊", search: "pill medicine", phonemes: ["p","ill"] },
          { word: "skill", highlight: "ill", zh: "技能", emoji: "⭐", search: "skill talent", phonemes: ["sk","ill"] },
          { word: "still", highlight: "ill", zh: "仍然/靜止", emoji: "🧘", search: "still calm", phonemes: ["st","ill"] },
          { word: "till",  highlight: "ill", zh: "直到", emoji: "⏰", search: "till until", phonemes: ["t","ill"] },
          { word: "will",  highlight: "ill", zh: "將會/意志", emoji: "💪", search: "will strong", phonemes: ["w","ill"] }
        ],
        quiz: [
          { word: "hill", speak: "hill", displayWord: "h_ll", answer: "ill → /ɪl/",
            choices: ["all → /ɔl/","ell → /ɛl/","ill → /ɪl/","il → /ɪl/"],
            hint: "⛰️ hill，h+ill，整串唸 /hɪl/！", emoji: "⛰️", search: "hill mountain" },
          { word: "skill", speak: "skill", displayWord: "sk_ll", answer: "ill → /ɪl/",
            choices: ["all → /ɔl/","ell → /ɛl/","ill → /ɪl/","il → /ɪl/"],
            hint: "⭐ skill，sk+ill，整串唸 /skɪl/！", emoji: "⭐", search: "skill talent" }
        ]
      }
    ],
    story: {
      title: "⛰️ The Small Hill",
      pages: [
        { en: "A tall wall fell on a small hill.", zh: "一面高牆倒在一座小山丘上。", highlights: ["tall","wall","fell","small","hill"] },
        { en: "The ball rolled down and hit the bell.", zh: "球滾下來打到了鈴。", highlights: ["ball","bell"] },
        { en: "A still mill stood well by the hall.", zh: "一座靜止的磨坊立在大廳旁。", highlights: ["still","mill","well","hall"] },
        { en: "We all called out: 'Spell it! Tell it!'", zh: "我們全叫出來：「拼出來！說出來！」", highlights: ["all","Spell","Tell"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  CH8：oo / oa / ow (長o)
  // ─────────────────────────────────────────
  {
    id: 8,
    title: "母音 o 的變化：oo、oa、ow",
    emoji: "🌊",
    color: 2,
    topics: [
      {
        name: "oo 長音/短音",
        rules: [
          "<b>oo 長音 /uː/</b>：food、moon、school、pool、spoon、tooth、zoo、cool、boot",
          "<b>oo 短音 /ʊ/</b>：book、cook、foot、good、hook、look、took、wood、wool",
          "口訣：oo 組合胖哪哪，長音讀 [uː] 短音 [ʊ]",
          "規則：oo 後面跟 k → 通常唸短音（book, cook, look, took）"
        ],
        words: [
          { word: "food",   highlight: "oo", zh: "食物（長/uː/）", emoji: "🍔", search: "food", phonemes: ["f","oo","d"] },
          { word: "moon",   highlight: "oo", zh: "月亮（長/uː/）", emoji: "🌙", search: "moon", phonemes: ["m","oo","n"] },
          { word: "pool",   highlight: "oo", zh: "游泳池（長/uː/）", emoji: "🏊", search: "swimming pool", phonemes: ["p","oo","l"] },
          { word: "school", highlight: "oo", zh: "學校（長/uː/）", emoji: "🏫", search: "school", phonemes: ["sch","oo","l"] },
          { word: "spoon",  highlight: "oo", zh: "湯匙（長/uː/）", emoji: "🥄", search: "spoon", phonemes: ["sp","oo","n"] },
          { word: "zoo",    highlight: "oo", zh: "動物園（長/uː/）", emoji: "🦁", search: "zoo", phonemes: ["z","oo"] },
          { word: "book",   highlight: "oo", zh: "書（短/ʊ/）", emoji: "📚", search: "book", phonemes: ["b","oo","k"] },
          { word: "cook",   highlight: "oo", zh: "廚師（短/ʊ/）", emoji: "👨‍🍳", search: "cook chef", phonemes: ["c","oo","k"] },
          { word: "good",   highlight: "oo", zh: "好（短/ʊ/）", emoji: "👍", search: "good thumbs", phonemes: ["g","oo","d"] },
          { word: "look",   highlight: "oo", zh: "看（短/ʊ/）", emoji: "👀", search: "look eyes", phonemes: ["l","oo","k"] }
        ],
        quiz: [
          { word: "food", speak: "food", displayWord: "food", answer: "長音 /uː/",
            choices: ["長音 /uː/","短音 /ʊ/"], hint: "🍔 food，oo 唸長音 /uː/！", emoji: "🍔", search: "food" },
          { word: "book", speak: "book", displayWord: "book", answer: "短音 /ʊ/",
            choices: ["長音 /uː/","短音 /ʊ/"], hint: "📚 book，oo 後有 k，唸短音 /ʊ/！", emoji: "📚", search: "book" }
        ]
      },
      {
        name: "oa /oʊ/ 和 ow /oʊ/",
        rules: [
          "<b>oa /oʊ/</b>：字中間用，例：boat、coat、goat、soap、road",
          "<b>ow /oʊ/</b>（長o）：字尾用，例：blow、bowl、low、slow、snow、window、yellow",
          "⚠️ ow 也可以唸 /aʊ/（cow、down）→ Chapter 9 學習"
        ],
        words: [
          { word: "boat",  highlight: "oa", zh: "船（oa）", emoji: "⛵", search: "boat sailing", phonemes: ["b","oa","t"] },
          { word: "coat",  highlight: "oa", zh: "外套（oa）", emoji: "🧥", search: "coat jacket", phonemes: ["c","oa","t"] },
          { word: "goat",  highlight: "oa", zh: "山羊（oa）", emoji: "🐐", search: "goat", phonemes: ["g","oa","t"] },
          { word: "road",  highlight: "oa", zh: "道路（oa）", emoji: "🛤️", search: "road", phonemes: ["r","oa","d"] },
          { word: "soap",  highlight: "oa", zh: "肥皂（oa）", emoji: "🧼", search: "soap", phonemes: ["s","oa","p"] },
          { word: "blow",  highlight: "ow", zh: "吹（ow長o）", emoji: "💨", search: "blow wind", phonemes: ["bl","ow"] },
          { word: "bowl",  highlight: "ow", zh: "碗（ow長o）", emoji: "🥣", search: "bowl", phonemes: ["b","ow","l"] },
          { word: "low",   highlight: "ow", zh: "低（ow長o）", emoji: "⬇️", search: "low arrow", phonemes: ["l","ow"] },
          { word: "slow",  highlight: "ow", zh: "慢（ow長o）", emoji: "🐢", search: "slow turtle", phonemes: ["sl","ow"] },
          { word: "snow",  highlight: "ow", zh: "雪（ow長o）", emoji: "❄️", search: "snow", phonemes: ["sn","ow"] }
        ],
        quiz: [
          { word: "coat", speak: "coat", displayWord: "c__t", answer: "oa（字中）",
            choices: ["oa（字中）","ow（字尾）","o_e","oe"],
            hint: "🧥 coat，字中間用 oa！", emoji: "🧥", search: "coat jacket" },
          { word: "snow", speak: "snow", displayWord: "sn__", answer: "ow（字尾長o）",
            choices: ["oa（字中）","ow（字尾長o）","o_e","oe"],
            hint: "❄️ snow，字尾用 ow（唸長o）！", emoji: "❄️", search: "snow" }
        ]
      }
    ],
    story: {
      title: "⛵ The Boat in the Snow",
      pages: [
        { en: "A goat on a boat looked at the moon.", zh: "一隻山羊在船上看月亮。", highlights: ["goat","boat","moon"] },
        { en: "Snow fell slow and low.", zh: "雪緩緩地、低低地落下。", highlights: ["Snow","slow","low"] },
        { en: "The goat got a good book and some food.", zh: "山羊拿了一本好書和一些食物。", highlights: ["good","book","food"] },
        { en: "Good — no school today!", zh: "太好了——今天不用上學！", highlights: ["Good","school"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  CH9：ou / ow / oi / oy
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
          "<b>ou /aʊ/</b>（類似「ㄠ」）：cloud、count、house、mouse、shout、loud、mouth",
          "<b>ow /aʊ/</b>（ow 的另一個音）：cow、down、how、now、town、owl、flower",
          "口訣：ou 總是不開心，啊嗚啊嗚啊嗚，這個聲音要記住"
        ],
        words: [
          { word: "cloud",  highlight: "ou", zh: "雲（ou=/aʊ/）", emoji: "☁️", search: "cloud", phonemes: ["cl","ou","d"] },
          { word: "count",  highlight: "ou", zh: "數數（ou=/aʊ/）", emoji: "🔢", search: "count number", phonemes: ["c","ou","nt"] },
          { word: "house",  highlight: "ou", zh: "房子（ou=/aʊ/）", emoji: "🏠", search: "house home", phonemes: ["h","ou","se"] },
          { word: "loud",   highlight: "ou", zh: "大聲（ou=/aʊ/）", emoji: "🔊", search: "loud speaker", phonemes: ["l","ou","d"] },
          { word: "mouth",  highlight: "ou", zh: "嘴巴（ou=/aʊ/）", emoji: "👄", search: "mouth", phonemes: ["m","ou","th"] },
          { word: "mouse",  highlight: "ou", zh: "老鼠（ou=/aʊ/）", emoji: "🐭", search: "mouse", phonemes: ["m","ou","se"] },
          { word: "shout",  highlight: "ou", zh: "大叫（ou=/aʊ/）", emoji: "📢", search: "shout loud", phonemes: ["sh","ou","t"] },
          { word: "cow",    highlight: "ow", zh: "牛（ow=/aʊ/）", emoji: "🐄", search: "cow", phonemes: ["c","ow"] },
          { word: "down",   highlight: "ow", zh: "向下（ow=/aʊ/）", emoji: "⬇️", search: "down arrow", phonemes: ["d","ow","n"] },
          { word: "town",   highlight: "ow", zh: "小鎮（ow=/aʊ/）", emoji: "🏘️", search: "town village", phonemes: ["t","ow","n"] }
        ],
        quiz: [
          { word: "cloud", speak: "cloud", displayWord: "cloud", answer: "/aʊ/",
            choices: ["/oʊ/（長o）","/aʊ/","/uː/","/ɑ/"],
            hint: "☁️ cloud，ou 唸 /aʊ/！", emoji: "☁️", search: "cloud" },
          { word: "cow", speak: "cow", displayWord: "cow", answer: "/aʊ/",
            choices: ["/oʊ/（長o）","/aʊ/","/uː/","/ɑ/"],
            hint: "🐄 cow，ow 唸 /aʊ/（不是長o）！", emoji: "🐄", search: "cow" }
        ]
      },
      {
        name: "oi /ɔɪ/ 和 oy /ɔɪ/",
        rules: [
          "<b>oi /ɔɪ/</b>：用在字<b>中間</b>，例：boil、coin、foil、point、soil、voice",
          "<b>oy /ɔɪ/</b>：用在字<b>結尾</b>，例：boy、joy、toy、enjoy",
          "口訣：oi 發音不奇怪，先發 o 再發 i，[ɔɪ][ɔɪ]一起來",
          "位置規則：oi 字中，oy 字尾（跟 ai/ay 的邏輯一樣！）"
        ],
        words: [
          { word: "boil",   highlight: "oi", zh: "煮沸（oi字中）", emoji: "♨️", search: "boil water", phonemes: ["b","oi","l"] },
          { word: "coin",   highlight: "oi", zh: "硬幣（oi字中）", emoji: "🪙", search: "coin money", phonemes: ["c","oi","n"] },
          { word: "foil",   highlight: "oi", zh: "鋁箔（oi字中）", emoji: "🥘", search: "foil wrap", phonemes: ["f","oi","l"] },
          { word: "point",  highlight: "oi", zh: "重點（oi字中）", emoji: "👆", search: "point finger", phonemes: ["p","oi","nt"] },
          { word: "soil",   highlight: "oi", zh: "土壤（oi字中）", emoji: "🌱", search: "soil dirt", phonemes: ["s","oi","l"] },
          { word: "voice",  highlight: "oi", zh: "聲音（oi字中）", emoji: "🎤", search: "voice microphone", phonemes: ["v","oi","ce"] },
          { word: "boy",    highlight: "oy", zh: "男孩（oy字尾）", emoji: "👦", search: "boy kid", phonemes: ["b","oy"] },
          { word: "enjoy",  highlight: "oy", zh: "享受（oy字尾）", emoji: "🎉", search: "enjoy celebrate", phonemes: ["en","j","oy"] },
          { word: "joy",    highlight: "oy", zh: "快樂（oy字尾）", emoji: "😊", search: "joy happy", phonemes: ["j","oy"] },
          { word: "toy",    highlight: "oy", zh: "玩具（oy字尾）", emoji: "🧸", search: "toy teddy", phonemes: ["t","oy"] }
        ],
        quiz: [
          { word: "coin", speak: "coin", displayWord: "c__n", answer: "oi（字中）",
            choices: ["oi（字中）","oy（字尾）","ou","ow"],
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
        { en: "The cow said with a loud voice: 'It is my choice!'", zh: "牛大聲說：「這是我的選擇！」", highlights: ["loud","voice"] },
        { en: "They both enjoyed it — how proud!", zh: "他們都很享受！", highlights: ["enjoyed"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  CH10：u-e / ue / ui
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
          "<b>u-e /juː/ 或 /uː/</b>：flute（長笛）、rule（規則）、cute、cube、tune",
          "<b>ue /uː/</b>（字尾）：blue、clue、glue、sue、Tuesday",
          "<b>ui /uː/</b>（字中）：fruit、juice、suit",
          "口訣：單詞結尾有小 e，前面元音發長音（u 說自己的名字）"
        ],
        words: [
          { word: "flute",   highlight: "u_e", zh: "長笛", emoji: "🎷", search: "flute instrument", phonemes: ["fl","u","t","e"] },
          { word: "rule",    highlight: "u_e", zh: "規則", emoji: "📏", search: "rule ruler", phonemes: ["r","u","l","e"] },
          { word: "cute",    highlight: "u_e", zh: "可愛", emoji: "🐣", search: "cute animal", phonemes: ["c","u","t","e"] },
          { word: "cube",    highlight: "u_e", zh: "正方體", emoji: "🧊", search: "cube ice", phonemes: ["c","u","b","e"] },
          { word: "tune",    highlight: "u_e", zh: "曲調", emoji: "🎵", search: "music tune", phonemes: ["t","u","n","e"] },
          { word: "blue",    highlight: "ue",  zh: "藍色（ue=/uː/）", emoji: "💙", search: "blue color", phonemes: ["bl","ue"] },
          { word: "clue",    highlight: "ue",  zh: "線索（ue=/uː/）", emoji: "🔍", search: "clue detective", phonemes: ["cl","ue"] },
          { word: "glue",    highlight: "ue",  zh: "膠水（ue=/uː/）", emoji: "🔑", search: "glue stick", phonemes: ["gl","ue"] },
          { word: "fruit",   highlight: "ui",  zh: "水果（ui=/uː/）", emoji: "🍎", search: "fruit", phonemes: ["fr","ui","t"] },
          { word: "juice",   highlight: "ui",  zh: "果汁（ui=/uː/）", emoji: "🥤", search: "juice drink", phonemes: ["j","ui","ce"] },
          { word: "suit",    highlight: "ui",  zh: "西裝（ui=/uː/）", emoji: "👔", search: "suit jacket", phonemes: ["s","ui","t"] }
        ],
        quiz: [
          { word: "blue", speak: "blue", displayWord: "bl__", answer: "ue",
            choices: ["ue","ui","u_e","oo"], hint: "💙 blue（藍色），字尾用 ue！", emoji: "💙", search: "blue color" },
          { word: "juice", speak: "juice", displayWord: "j__ce", answer: "ui",
            choices: ["ue","ui","u_e","oo"], hint: "🥤 juice（果汁），字中間用 ui！", emoji: "🥤", search: "juice drink" },
          { word: "flute", speak: "flute", displayWord: "fl_te", answer: "u_e",
            choices: ["ue","ui","u_e","oo"], hint: "🎷 flute（長笛），magic e！", emoji: "🎷", search: "flute instrument" }
        ]
      }
    ],
    story: {
      title: "💙 Blue Fruit Juice",
      pages: [
        { en: "On Tuesday, I had fruit juice in a blue suit.", zh: "星期二，我穿著藍色西裝喝果汁。", highlights: ["fruit","juice","blue","suit"] },
        { en: "I found a clue — a note with a rule: 'Use glue!'", zh: "我找到一條線索：「用膠水！」", highlights: ["clue","rule","glue"] },
        { en: "I played a cute tune on the flute.", zh: "我用長笛吹了一段可愛的曲調。", highlights: ["cute","tune","flute"] },
        { en: "The juice was so blue — what a cute cube of ice!", zh: "果汁如此蔚藍——多麼可愛的冰塊！", highlights: ["juice","blue","cute","cube"] }
      ]
    }
  }

]; // end LESSONS

// 薛珍華老師自然發音法 Ch11-20（升級版 v2）

const LESSONS = [

  // ─────────────────────────────────────────
  //  CH11：ar / or / ir / er / ur
  // ─────────────────────────────────────────
  {
    id: 11,
    title: "R-controlled：ar、or、ir、er、ur",
    emoji: "🌀",
    color: 0,
    topics: [
      {
        name: "ar /ɑːr/ 和 or /ɔːr/",
        soundBadge: "ar / or",
        soundLabel: "ar=/ɑːr/  or=/ɔːr/",
        rules: [
          "遇到英文字裡有 r 在音節中或音節尾，都要唸捲舌的音",
          "口訣：大哥 a 遇霸道 r，根本不怕喊聲啊；二哥 o 遇霸道 r，嘴巴變圓哦哦哦",
          "<b>ar /ɑːr/</b>：bar、card、dark、far、hard、jar、large、march、park",
          "<b>or /ɔːr/</b>：fork、lord、more、pork、sort、sport、torch、work",
          "⚠️ <b>w+ar → /wɔːr/</b>：war、warm、ward（不是 /wɑːr/！）",
          "⚠️ <b>w+or → /wɜːr/</b>：work、word、world（不是 /wɔːr/！）"
        ],
        words: [
          { word: "bar",   highlight: "ar", zh: "棒/酒吧", emoji: "🍺", search: "bar pub", phonemes: ["b","ar"] },
          { word: "card",  highlight: "ar", zh: "卡片", emoji: "🃏", search: "card", phonemes: ["c","ar","d"] },
          { word: "dark",  highlight: "ar", zh: "黑暗", emoji: "🌑", search: "dark night", phonemes: ["d","ar","k"] },
          { word: "far",   highlight: "ar", zh: "遠", emoji: "🌌", search: "far away", phonemes: ["f","ar"] },
          { word: "hard",  highlight: "ar", zh: "困難/硬", emoji: "💪", search: "hard strong", phonemes: ["h","ar","d"] },
          { word: "large", highlight: "ar", zh: "大的", emoji: "🐘", search: "large elephant", phonemes: ["l","ar","ge"] },
          { word: "park",  highlight: "ar", zh: "公園", emoji: "🌳", search: "park", phonemes: ["p","ar","k"] },
          { word: "fork",  highlight: "or", zh: "叉子", emoji: "🍴", search: "fork utensil", phonemes: ["f","or","k"] },
          { word: "more",  highlight: "or", zh: "更多", emoji: "➕", search: "more plus", phonemes: ["m","or","e"] },
          { word: "pork",  highlight: "or", zh: "豬肉", emoji: "🥩", search: "pork meat", phonemes: ["p","or","k"] },
          { word: "sport", highlight: "or", zh: "運動", emoji: "⚽", search: "sport soccer", phonemes: ["sp","or","t"] },
          { word: "torch", highlight: "or", zh: "火炬", emoji: "🔦", search: "torch flashlight", phonemes: ["t","or","ch"] },
          { word: "war",   highlight: "ar", zh: "戰爭（w+ar=/wɔːr/）", emoji: "⚔️", search: "war battle", phonemes: ["w","ar"] },
          { word: "warm",  highlight: "ar", zh: "溫暖（w+ar=/wɔːr/）", emoji: "🧣", search: "warm cozy", phonemes: ["w","ar","m"] },
          { word: "work",  highlight: "or", zh: "工作（w+or=/wɜːr/）", emoji: "💼", search: "work office", phonemes: ["w","or","k"] }
        ],
        quiz: [
          { word: "car", speak: "car", displayWord: "car", answer: "/ɑːr/",
            choices: ["/æ/（短a）","/eɪ/（長a）","/ɑːr/","/ər/"],
            hint: "🚗 car，ar → /ɑːr/！", emoji: "🚗", search: "car" },
          { word: "fork", speak: "fork", displayWord: "fork", answer: "/ɔːr/",
            choices: ["/ɑ/（短o）","/oʊ/（長o）","/ɔːr/","/ər/"],
            hint: "🍴 fork，or → /ɔːr/！", emoji: "🍴", search: "fork utensil" }
        ]
      },
      {
        name: "er /ɜːr/、ir /ɜːr/、ur /ɜːr/",
        soundBadge: "er / ir / ur",
        soundLabel: "三個發音完全一樣\n都唸 /ɜːr/",
        rules: [
          "口訣：e i u 遇霸道 r，三天兩粒米肚子餓（三個發音一樣！）",
          "<b>er /ɜːr/</b>（字中重音）：her、herd、term、serve",
          "<b>er /ər/</b>（字尾輕音）：cooker、dancer、teacher、mother",
          "<b>ir /ɜːr/</b>：bird、birthday、circle、dirt、girl、skirt",
          "<b>ur /ɜːr/</b>：burn、fur、nurse、turn、purple、turtle"
        ],
        words: [
          { word: "her",      highlight: "er", zh: "她的（er重音）", emoji: "👩", search: "her woman", phonemes: ["h","er"] },
          { word: "term",     highlight: "er", zh: "學期（er重音）", emoji: "📚", search: "term school", phonemes: ["t","er","m"] },
          { word: "teacher",  highlight: "er", zh: "老師（er輕音）", emoji: "👩‍🏫", search: "teacher", phonemes: ["t","ea","ch","er"] },
          { word: "mother",   highlight: "er", zh: "媽媽（er輕音）", emoji: "👩", search: "mother", phonemes: ["m","o","th","er"] },
          { word: "bird",     highlight: "ir", zh: "鳥（ir=/ɜːr/）", emoji: "🐦", search: "bird", phonemes: ["b","ir","d"] },
          { word: "birthday", highlight: "ir", zh: "生日（ir=/ɜːr/）", emoji: "🎂", search: "birthday cake", phonemes: ["b","ir","th","d","ay"] },
          { word: "circle",   highlight: "ir", zh: "圓圈（ir=/ɜːr/）", emoji: "⭕", search: "circle", phonemes: ["c","ir","c","le"] },
          { word: "girl",     highlight: "ir", zh: "女孩（ir=/ɜːr/）", emoji: "👧", search: "girl", phonemes: ["g","ir","l"] },
          { word: "skirt",    highlight: "ir", zh: "裙子（ir=/ɜːr/）", emoji: "👗", search: "skirt", phonemes: ["sk","ir","t"] },
          { word: "burn",     highlight: "ur", zh: "燃燒（ur=/ɜːr/）", emoji: "🔥", search: "burn fire", phonemes: ["b","ur","n"] },
          { word: "fur",      highlight: "ur", zh: "毛皮（ur=/ɜːr/）", emoji: "🐾", search: "fur animal", phonemes: ["f","ur"] },
          { word: "nurse",    highlight: "ur", zh: "護士（ur=/ɜːr/）", emoji: "👩‍⚕️", search: "nurse", phonemes: ["n","ur","se"] },
          { word: "purple",   highlight: "ur", zh: "紫色（ur=/ɜːr/）", emoji: "💜", search: "purple color", phonemes: ["p","ur","p","le"] },
          { word: "turn",     highlight: "ur", zh: "轉（ur=/ɜːr/）", emoji: "🔄", search: "turn rotate", phonemes: ["t","ur","n"] },
          { word: "turtle",   highlight: "ur", zh: "烏龜（ur=/ɜːr/）", emoji: "🐢", search: "turtle", phonemes: ["t","ur","t","le"] }
        ],
        quiz: [
          { word: "girl", speak: "girl", displayWord: "g_rl", answer: "ir → /ɜːr/",
            choices: ["ir → /ɜːr/","er → /ɜːr/","ur → /ɜːr/","ar → /ɑːr/"],
            hint: "👧 girl，ir → /ɜːr/！", emoji: "👧", search: "girl" },
          { word: "nurse", speak: "nurse", displayWord: "n_rse", answer: "ur → /ɜːr/",
            choices: ["ir → /ɜːr/","er → /ɜːr/","ur → /ɜːr/","or → /ɔːr/"],
            hint: "👩‍⚕️ nurse，ur → /ɜːr/！", emoji: "👩‍⚕️", search: "nurse" },
          { word: "her", speak: "her", displayWord: "her", answer: "er → /ɜːr/",
            choices: ["ir → /ɜːr/","er → /ɜːr/","ur → /ɜːr/","ar → /ɑːr/"],
            hint: "👩 her，er → /ɜːr/！", emoji: "👩", search: "her woman" }
        ]
      }
    ],
    story: {
      title: "🐦 The Girl and the Bird",
      pages: [
        { en: "A girl in a skirt saw a bird on a jar.", zh: "一個穿裙子的女孩看見一隻鳥站在罐子上。", highlights: ["girl","skirt","bird"] },
        { en: "The bird had fur and liked the warm dark.", zh: "那隻鳥有毛皮，喜歡溫暖的黑暗。", highlights: ["bird","fur","warm","dark"] },
        { en: "The nurse worked hard far from home.", zh: "護士在遠離家鄉的地方努力工作。", highlights: ["nurse","hard","far"] },
        { en: "On her birthday, the teacher turned and said: 'Well done!'", zh: "在她生日那天，老師轉身說：「做得好！」", highlights: ["birthday","teacher","turned"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  CH12：bl / cl / fl / sl (+gl/pl)
  // ─────────────────────────────────────────
  {
    id: 12,
    title: "L 家族拼音：bl、cl、fl、sl",
    emoji: "🔗",
    color: 1,
    topics: [
      {
        name: "bl / cl / fl / sl / gl / pl",
        rules: [
          "口訣：L 家族很團結，兩個發音拼一拼，B C F G P S 愛和 L 在一起",
          "<b>bl</b>：black、blind、block、blue、blink、blood",
          "<b>cl</b>：class、clean、close、cloud、clock、cluster",
          "<b>fl</b>：flag、flame、flat、flow、fly、flu",
          "<b>sl</b>：slam、sleep、slim、sly、slap、slide、slow、slipper",
          "<b>gl</b>：glad、glass、glove（補充）",
          "<b>pl</b>：place、plane、play（補充）"
        ],
        words: [
          { word: "black",  highlight: "bl", zh: "黑色", emoji: "🖤", search: "black color", phonemes: ["bl","a","ck"] },
          { word: "blind",  highlight: "bl", zh: "盲的", emoji: "🙈", search: "blind", phonemes: ["bl","i","nd"] },
          { word: "blood",  highlight: "bl", zh: "血液", emoji: "🩸", search: "blood", phonemes: ["bl","oo","d"] },
          { word: "blue",   highlight: "bl", zh: "藍色", emoji: "💙", search: "blue color", phonemes: ["bl","ue"] },
          { word: "class",  highlight: "cl", zh: "班級", emoji: "🏫", search: "class school", phonemes: ["cl","a","ss"] },
          { word: "clean",  highlight: "cl", zh: "乾淨", emoji: "🧹", search: "clean", phonemes: ["cl","ea","n"] },
          { word: "close",  highlight: "cl", zh: "關閉", emoji: "🚪", search: "close door", phonemes: ["cl","o","se"] },
          { word: "cloud",  highlight: "cl", zh: "雲", emoji: "☁️", search: "cloud", phonemes: ["cl","ou","d"] },
          { word: "flag",   highlight: "fl", zh: "旗幟", emoji: "🚩", search: "flag", phonemes: ["fl","a","g"] },
          { word: "fly",    highlight: "fl", zh: "飛", emoji: "🦅", search: "fly bird", phonemes: ["fl","y"] },
          { word: "sleep",  highlight: "sl", zh: "睡覺", emoji: "😴", search: "sleep", phonemes: ["sl","ee","p"] },
          { word: "slow",   highlight: "sl", zh: "慢的", emoji: "🐢", search: "slow turtle", phonemes: ["sl","ow"] },
          { word: "glass",  highlight: "gl", zh: "玻璃/杯子", emoji: "🥃", search: "glass cup", phonemes: ["gl","a","ss"] },
          { word: "glad",   highlight: "gl", zh: "高興的", emoji: "😊", search: "glad happy", phonemes: ["gl","a","d"] },
          { word: "plane",  highlight: "pl", zh: "飛機", emoji: "✈️", search: "airplane plane", phonemes: ["pl","a","ne"] }
        ],
        quiz: [
          { word: "black", speak: "black", displayWord: "black", answer: "/bl/",
            choices: ["/b/+/l/","/bl/","/kl/","/fl/"],
            hint: "🖤 black，bl 快速連唸 /bl/！", emoji: "🖤", search: "black color" },
          { word: "sleep", speak: "sleep", displayWord: "sleep", answer: "/sl/",
            choices: ["/bl/","/kl/","/fl/","/sl/"],
            hint: "😴 sleep，sl 快速連唸 /sl/！", emoji: "😴", search: "sleep" }
        ]
      }
    ],
    story: {
      title: "✈️ The Black Plane",
      pages: [
        { en: "A black plane flew slow in a cloud.", zh: "一架黑色飛機在雲中緩慢飛行。", highlights: ["black","plane","slow","cloud"] },
        { en: "The class was clean — they slept.", zh: "課堂乾淨——他們睡著了。", highlights: ["class","clean","slept"] },
        { en: "A flag flew close to the glass.", zh: "一面旗幟飄在玻璃旁邊。", highlights: ["flag","close","glass"] },
        { en: "They were glad to fly in the blue sky!", zh: "他們很開心在藍天飛翔！", highlights: ["glad","fly","blue"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  CH13：br / cr / dr / tr (+fr/gr/pr)
  // ─────────────────────────────────────────
  {
    id: 13,
    title: "R 家族拼音：br、cr、dr、tr",
    emoji: "🔴",
    color: 2,
    topics: [
      {
        name: "br / cr / dr / tr / fr / gr / pr",
        rules: [
          "口訣：輔音加 r 很容易，dr tr 重點記，其餘組合直接拼讀就可以",
          "<b>br</b>：bread、break、brick、bridge、brother",
          "<b>cr</b>：crab、crack、cream、crown、cry",
          "<b>dr</b>：draw、dream、drink、drive、drug",
          "<b>tr</b>：track、tree、trick、trip、trouble",
          "<b>fr</b>：friend、frog、frown（補充）",
          "<b>gr</b>：great、grape、grey（補充）",
          "<b>pr</b>：prince、prize、present（補充）"
        ],
        words: [
          { word: "bread",   highlight: "br", zh: "麵包", emoji: "🍞", search: "bread", phonemes: ["br","ea","d"] },
          { word: "break",   highlight: "br", zh: "打破/休息", emoji: "💔", search: "break", phonemes: ["br","ea","k"] },
          { word: "bridge",  highlight: "br", zh: "橋", emoji: "🌉", search: "bridge", phonemes: ["br","i","dge"] },
          { word: "brother", highlight: "br", zh: "兄弟", emoji: "👦", search: "brother siblings", phonemes: ["br","o","th","er"] },
          { word: "crab",    highlight: "cr", zh: "螃蟹", emoji: "🦀", search: "crab", phonemes: ["cr","a","b"] },
          { word: "cream",   highlight: "cr", zh: "奶油", emoji: "🥛", search: "cream milk", phonemes: ["cr","ea","m"] },
          { word: "crown",   highlight: "cr", zh: "皇冠", emoji: "👑", search: "crown", phonemes: ["cr","ow","n"] },
          { word: "dream",   highlight: "dr", zh: "夢", emoji: "💭", search: "dream", phonemes: ["dr","ea","m"] },
          { word: "drink",   highlight: "dr", zh: "喝", emoji: "🥤", search: "drink", phonemes: ["dr","i","nk"] },
          { word: "drive",   highlight: "dr", zh: "開車", emoji: "🚗", search: "drive car", phonemes: ["dr","i","ve"] },
          { word: "tree",    highlight: "tr", zh: "樹", emoji: "🌳", search: "tree", phonemes: ["tr","ee"] },
          { word: "trick",   highlight: "tr", zh: "惡作劇", emoji: "🎭", search: "trick prank", phonemes: ["tr","i","ck"] },
          { word: "trip",    highlight: "tr", zh: "旅行", emoji: "✈️", search: "trip travel", phonemes: ["tr","i","p"] },
          { word: "friend",  highlight: "fr", zh: "朋友", emoji: "🤝", search: "friend", phonemes: ["fr","ie","nd"] },
          { word: "grape",   highlight: "gr", zh: "葡萄", emoji: "🍇", search: "grapes", phonemes: ["gr","a","pe"] }
        ],
        quiz: [
          { word: "dream", speak: "dream", displayWord: "dream", answer: "/dr/",
            choices: ["/br/","/cr/","/dr/","/tr/"],
            hint: "💭 dream，dr 快速連唸 /dr/！", emoji: "💭", search: "dream" },
          { word: "tree", speak: "tree", displayWord: "tree", answer: "/tr/",
            choices: ["/br/","/cr/","/dr/","/tr/"],
            hint: "🌳 tree，tr 快速連唸 /tr/！", emoji: "🌳", search: "tree" }
        ]
      }
    ],
    story: {
      title: "🌉 The Bridge Trip",
      pages: [
        { en: "A brother and a friend drove to a bridge.", zh: "一個兄弟和朋友開車去橋邊。", highlights: ["brother","friend","bridge"] },
        { en: "They dreamed of a tree with cream and bread.", zh: "他們夢見一棵有奶油和麵包的樹。", highlights: ["dreamed","tree","cream","bread"] },
        { en: "A crab did a trick — it cracked a crown!", zh: "一隻螃蟹耍了個把戲——把皇冠弄裂了！", highlights: ["crab","trick","crown"] },
        { en: "The trip was great — a dream come true!", zh: "旅途很棒——夢想成真！", highlights: ["trip","dream"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  CH14：sh / ch / th / ph
  // ─────────────────────────────────────────
  {
    id: 14,
    title: "sh、ch、th、ph 的比較",
    emoji: "🔠",
    color: 3,
    topics: [
      {
        name: "sh /ʃ/ 和 ch 的兩個音",
        rules: [
          "口訣：H 家族成員怪，連在一起全變換。ch 饞嘴就愛吃，sh 愛靜一直噓",
          "<b>sh /ʃ/</b>（噓聲）：ash、cash、dish、shirt、short、show、fish",
          "<b>ch /tʃ/</b>（最常見，英語）：chair、cheer、choose、coach、touch",
          "<b>ch /k/</b>（希臘語）：echo、school、technology、Christmas"
        ],
        words: [
          { word: "ash",      highlight: "sh", zh: "灰燼", emoji: "💨", search: "ash smoke", phonemes: ["a","sh"] },
          { word: "cash",     highlight: "sh", zh: "現金", emoji: "💵", search: "cash money", phonemes: ["c","a","sh"] },
          { word: "dish",     highlight: "sh", zh: "碟子", emoji: "🍽️", search: "dish plate", phonemes: ["d","i","sh"] },
          { word: "fish",     highlight: "sh", zh: "魚", emoji: "🐟", search: "fish", phonemes: ["f","i","sh"] },
          { word: "shirt",    highlight: "sh", zh: "襯衫", emoji: "👕", search: "shirt", phonemes: ["sh","ir","t"] },
          { word: "show",     highlight: "sh", zh: "展示", emoji: "🎪", search: "show performance", phonemes: ["sh","ow"] },
          { word: "chair",    highlight: "ch", zh: "椅子（ch=/tʃ/）", emoji: "🪑", search: "chair", phonemes: ["ch","air"] },
          { word: "choose",   highlight: "ch", zh: "選擇（ch=/tʃ/）", emoji: "✅", search: "choose select", phonemes: ["ch","oo","se"] },
          { word: "coach",    highlight: "ch", zh: "教練（ch=/tʃ/）", emoji: "🏆", search: "coach sports", phonemes: ["c","oa","ch"] },
          { word: "touch",    highlight: "ch", zh: "觸摸（ch=/tʃ/）", emoji: "🤏", search: "touch hand", phonemes: ["t","ou","ch"] },
          { word: "echo",     highlight: "ch", zh: "回聲（ch=/k/）", emoji: "🔊", search: "echo sound", phonemes: ["e","ch","o"] },
          { word: "school",   highlight: "ch", zh: "學校（ch=/k/）", emoji: "🏫", search: "school", phonemes: ["sch","oo","l"] },
          { word: "Christmas",highlight: "ch", zh: "聖誕節（ch=/k/）", emoji: "🎄", search: "christmas", phonemes: ["Chr","i","st","m","a","s"] }
        ],
        quiz: [
          { word: "fish", speak: "fish", displayWord: "fish", answer: "/ʃ/（sh）",
            choices: ["/ʃ/（sh）","/tʃ/（ch）","/k/（ch希臘）","/f/"],
            hint: "🐟 fish，sh → /ʃ/！", emoji: "🐟", search: "fish" },
          { word: "chair", speak: "chair", displayWord: "chair", answer: "/tʃ/（ch最常見）",
            choices: ["/ʃ/（sh）","/tʃ/（ch最常見）","/k/（ch希臘）","/h/"],
            hint: "🪑 chair，ch → /tʃ/！", emoji: "🪑", search: "chair" },
          { word: "school", speak: "school", displayWord: "school", answer: "/k/（ch希臘）",
            choices: ["/ʃ/（sh）","/tʃ/（ch最常見）","/k/（ch希臘）","/sk/"],
            hint: "🏫 school，ch → /k/，來自希臘文！", emoji: "🏫", search: "school" }
        ]
      },
      {
        name: "th 兩個音 和 ph /f/",
        rules: [
          "口訣：th 的發音要注意，兩頭輕，中間濁，代介連副冠大多濁",
          "<b>th /θ/</b>（無聲，字首字尾）：three、think、teeth、both、thank、thin",
          "<b>th /ð/</b>（有聲，字中或代詞）：father、mother、weather、this、the、with",
          "<b>ph /f/</b>（來自希臘文）：phone、photo、elephant、telephone",
          "口訣：ph 走路要人扶（ph=/f/，來自希臘文）"
        ],
        words: [
          { word: "three",   highlight: "th", zh: "三（th清音）", emoji: "3️⃣", search: "number three", phonemes: ["th","r","ee"] },
          { word: "think",   highlight: "th", zh: "想（th清音）", emoji: "🤔", search: "think", phonemes: ["th","i","nk"] },
          { word: "teeth",   highlight: "th", zh: "牙齒（th清音）", emoji: "🦷", search: "teeth", phonemes: ["t","ee","th"] },
          { word: "both",    highlight: "th", zh: "兩者（th清音）", emoji: "2️⃣", search: "both two", phonemes: ["b","o","th"] },
          { word: "thin",    highlight: "th", zh: "薄的（th清音）", emoji: "📄", search: "thin paper", phonemes: ["th","i","n"] },
          { word: "father",  highlight: "th", zh: "父親（th濁音）", emoji: "👨", search: "father", phonemes: ["f","a","th","er"] },
          { word: "mother",  highlight: "th", zh: "母親（th濁音）", emoji: "👩", search: "mother", phonemes: ["m","o","th","er"] },
          { word: "weather", highlight: "th", zh: "天氣（th濁音）", emoji: "🌤️", search: "weather", phonemes: ["w","ea","th","er"] },
          { word: "this",    highlight: "th", zh: "這個（th濁音）", emoji: "☝️", search: "this here", phonemes: ["th","i","s"] },
          { word: "the",     highlight: "th", zh: "這/那（th濁音）", emoji: "📖", search: "the article", phonemes: ["th","e"] },
          { word: "phone",   highlight: "ph", zh: "電話（ph=/f/）", emoji: "📱", search: "phone", phonemes: ["ph","o","ne"] },
          { word: "photo",   highlight: "ph", zh: "照片（ph=/f/）", emoji: "📷", search: "photo", phonemes: ["ph","o","t","o"] },
          { word: "elephant",highlight: "ph", zh: "大象（ph=/f/）", emoji: "🐘", search: "elephant", phonemes: ["e","l","e","ph","a","nt"] }
        ],
        quiz: [
          { word: "three", speak: "three", displayWord: "three", answer: "/θ/（清音）",
            choices: ["/θ/（清音）","/ð/（濁音）","/t/","/d/"],
            hint: "3️⃣ three，th 在字首，唸清音 /θ/！", emoji: "3️⃣", search: "number three" },
          { word: "father", speak: "father", displayWord: "father", answer: "/ð/（濁音）",
            choices: ["/θ/（清音）","/ð/（濁音）","/t/","/d/"],
            hint: "👨 father，th 在字中，唸濁音 /ð/！", emoji: "👨", search: "father" },
          { word: "phone", speak: "phone", displayWord: "phone", answer: "/f/",
            choices: ["/p/","/f/","/ph/","/h/"],
            hint: "📱 phone，ph → /f/！", emoji: "📱", search: "phone" }
        ]
      }
    ],
    story: {
      title: "📱 Three Fish on a Dish",
      pages: [
        { en: "This photo shows three fish on a dish.", zh: "這張照片顯示碟子上的三條魚。", highlights: ["This","photo","three","fish","dish"] },
        { en: "Father and mother both think it is a good show.", zh: "父親和母親都認為這是個好展覽。", highlights: ["Father","mother","both","think","show"] },
        { en: "The coach chose to use the phone to teach.", zh: "教練選擇用電話來教學。", highlights: ["coach","phone"] },
        { en: "The weather was thin and cold — then Christmas came!", zh: "天氣又薄又冷——然後聖誕節來了！", highlights: ["weather","thin","Christmas"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  CH15：sion / sure / ture
  // ─────────────────────────────────────────
  {
    id: 15,
    title: "sion、sure、ture 的比較",
    emoji: "🎯",
    color: 4,
    topics: [
      {
        name: "sion /ʒən/、sure /ʒɔr/、ture /tʃər/",
        rules: [
          "若英文字裡有下列的字串，則視其為一個子音，直接唸出，不必再另外切分音節",
          "<b>sion /ʒən/</b>（濁音）：decision、vision、television、session",
          "<b>sure /ʒɔr/</b>：measure、leisure、pleasure、treasure",
          "<b>ture /tʃər/</b>：future、nature、picture、creature、mixture",
          "記憶：看到這些字尾，整串當一個音唸！"
        ],
        words: [
          { word: "decision",   highlight: "sion", zh: "決定", emoji: "✅", search: "decision", phonemes: ["de","c","i","sion"] },
          { word: "vision",     highlight: "sion", zh: "視力/遠見", emoji: "👁️", search: "vision eye", phonemes: ["vi","sion"] },
          { word: "television", highlight: "sion", zh: "電視", emoji: "📺", search: "television tv", phonemes: ["tel","e","vi","sion"] },
          { word: "session",    highlight: "sion", zh: "課程/會議", emoji: "💼", search: "session meeting", phonemes: ["ses","sion"] },
          { word: "measure",    highlight: "sure", zh: "量", emoji: "📏", search: "measure ruler", phonemes: ["mea","sure"] },
          { word: "leisure",    highlight: "sure", zh: "閒暇", emoji: "🌴", search: "leisure relax", phonemes: ["lei","sure"] },
          { word: "pleasure",   highlight: "sure", zh: "樂趣", emoji: "😊", search: "pleasure happy", phonemes: ["plea","sure"] },
          { word: "treasure",   highlight: "sure", zh: "寶藏", emoji: "💰", search: "treasure gold", phonemes: ["trea","sure"] },
          { word: "future",     highlight: "ture", zh: "未來", emoji: "🔮", search: "future", phonemes: ["fu","ture"] },
          { word: "nature",     highlight: "ture", zh: "自然", emoji: "🌿", search: "nature", phonemes: ["na","ture"] },
          { word: "picture",    highlight: "ture", zh: "圖片", emoji: "🖼️", search: "picture", phonemes: ["pic","ture"] },
          { word: "creature",   highlight: "ture", zh: "生物", emoji: "🦕", search: "creature", phonemes: ["crea","ture"] },
          { word: "mixture",    highlight: "ture", zh: "混合物", emoji: "🫙", search: "mixture", phonemes: ["mix","ture"] }
        ],
        quiz: [
          { word: "vision", speak: "vision", displayWord: "vi-sion", answer: "/ʒən/",
            choices: ["/ʒən/","/ʃən/","/sɪon/","/tʃən/"],
            hint: "👁️ vision，sion → /ʒən/（有聲！）", emoji: "👁️", search: "vision eye" },
          { word: "picture", speak: "picture", displayWord: "pic-ture", answer: "/tʃər/",
            choices: ["/tʃər/","/tjʊər/","/tɪuːr/","/tʌr/"],
            hint: "🖼️ picture，ture → /tʃər/！", emoji: "🖼️", search: "picture" },
          { word: "treasure", speak: "treasure", displayWord: "trea-sure", answer: "/ʒɔr/",
            choices: ["/ʒɔr/","/ʃɔr/","/suːr/","/tʃər/"],
            hint: "💰 treasure，sure → /ʒɔr/！", emoji: "💰", search: "treasure gold" }
        ]
      }
    ],
    story: {
      title: "🔮 The Future Treasure",
      pages: [
        { en: "The creature had a vision of a treasure in nature.", zh: "那個生物在自然中看見了寶藏的遠見。", highlights: ["creature","vision","treasure","nature"] },
        { en: "It was a pleasure to measure the picture.", zh: "量那幅圖片是件愉快的事。", highlights: ["pleasure","measure","picture"] },
        { en: "The decision was clear after the session.", zh: "會議後決定很清楚。", highlights: ["decision","session"] },
        { en: "In the future, leisure and television will mix!", zh: "在未來，休閒和電視將會混合！", highlights: ["future","leisure","television"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  CH16：tion / ssion / cian
  // ─────────────────────────────────────────
  {
    id: 16,
    title: "tion、ssion、cian 的比較",
    emoji: "🎓",
    color: 0,
    topics: [
      {
        name: "tion /ʃən/、ssion /ʃən/、cian /ʃən/",
        rules: [
          "三個字尾發音完全一樣，都是 /ʃən/（無聲）！",
          "<b>tion /ʃən/</b>：action、nation、station、tradition、vacation、position",
          "<b>ssion /ʃən/</b>：admission、discussion、permission、profession",
          "<b>cian /ʃən/</b>：musician、technician、magician",
          "記憶：看到 -tion、-ssion、-cian，整串唸 /ʃən/！"
        ],
        words: [
          { word: "action",     highlight: "tion", zh: "行動", emoji: "💥", search: "action", phonemes: ["ac","tion"] },
          { word: "nation",     highlight: "tion", zh: "國家", emoji: "🌍", search: "nation country", phonemes: ["na","tion"] },
          { word: "station",    highlight: "tion", zh: "車站", emoji: "🚉", search: "station", phonemes: ["sta","tion"] },
          { word: "tradition",  highlight: "tion", zh: "傳統", emoji: "🏮", search: "tradition culture", phonemes: ["tra","di","tion"] },
          { word: "vacation",   highlight: "tion", zh: "假期", emoji: "🏖️", search: "vacation beach", phonemes: ["va","ca","tion"] },
          { word: "position",   highlight: "tion", zh: "位置", emoji: "📍", search: "position location", phonemes: ["po","si","tion"] },
          { word: "admission",  highlight: "ssion", zh: "入場", emoji: "🎟️", search: "admission ticket", phonemes: ["ad","mis","sion"] },
          { word: "discussion", highlight: "ssion", zh: "討論", emoji: "💬", search: "discussion talk", phonemes: ["dis","cus","sion"] },
          { word: "permission", highlight: "ssion", zh: "許可", emoji: "✅", search: "permission allow", phonemes: ["per","mis","sion"] },
          { word: "profession", highlight: "ssion", zh: "職業", emoji: "💼", search: "profession job", phonemes: ["pro","fes","sion"] },
          { word: "musician",   highlight: "cian", zh: "音樂家", emoji: "🎵", search: "musician music", phonemes: ["mu","si","cian"] },
          { word: "technician", highlight: "cian", zh: "技術員", emoji: "🔧", search: "technician", phonemes: ["tech","ni","cian"] },
          { word: "magician",   highlight: "cian", zh: "魔術師", emoji: "🪄", search: "magician", phonemes: ["ma","gi","cian"] }
        ],
        quiz: [
          { word: "nation", speak: "nation", displayWord: "na-tion", answer: "/ʃən/",
            choices: ["/tɪon/","/ʃən/","/sɪon/","/tʃon/"],
            hint: "🌍 nation，-tion → /ʃən/！", emoji: "🌍", search: "nation country" },
          { word: "musician", speak: "musician", displayWord: "mu-si-cian", answer: "/ʃən/",
            choices: ["/sɪən/","/ʃən/","/kɪən/","/tʃən/"],
            hint: "🎵 musician，-cian → /ʃən/！", emoji: "🎵", search: "musician music" }
        ]
      }
    ],
    story: {
      title: "🪄 The Magician's Vacation",
      pages: [
        { en: "A magician went on vacation to a station.", zh: "一位魔術師到車站度假。", highlights: ["magician","vacation","station"] },
        { en: "The discussion at the nation was a tradition.", zh: "那個國家的討論是一種傳統。", highlights: ["discussion","nation","tradition"] },
        { en: "The musician asked for permission to take action.", zh: "音樂家請求許可採取行動。", highlights: ["musician","permission","action"] },
        { en: "The technician's profession was full of action!", zh: "技術員的職業充滿了行動！", highlights: ["technician","profession","action"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  CH17：kn / st / wr
  // ─────────────────────────────────────────
  {
    id: 17,
    title: "無聲子音：kn、st、wr",
    emoji: "🤫",
    color: 1,
    topics: [
      {
        name: "kn（k不發音）、st（t不發音）、wr（w不發音）",
        rules: [
          "口訣：有些組合看形象，高矮胖瘦不一樣，誰高誰胖誰不發音",
          "<b>kn：k 不發音</b>，只唸 /n/：knee、know、knife、knock、knowledge",
          "<b>st：t 不發音</b>（特定位置）：castle、listen、whistle、Christmas",
          "<b>wr：w 不發音</b>，只唸 /r/：wrap、write、wrist、wrong"
        ],
        words: [
          { word: "knee",      highlight: "kn", zh: "膝蓋（k不發音）", emoji: "🦵", search: "knee", phonemes: ["kn","ee"] },
          { word: "know",      highlight: "kn", zh: "知道（k不發音）", emoji: "💡", search: "know idea", phonemes: ["kn","ow"] },
          { word: "knife",     highlight: "kn", zh: "刀（k不發音）", emoji: "🔪", search: "knife", phonemes: ["kn","i","fe"] },
          { word: "knock",     highlight: "kn", zh: "敲（k不發音）", emoji: "🚪", search: "knock door", phonemes: ["kn","o","ck"] },
          { word: "knowledge", highlight: "kn", zh: "知識（k不發音）", emoji: "📚", search: "knowledge book", phonemes: ["kn","o","wl","edge"] },
          { word: "castle",    highlight: "st", zh: "城堡（t不發音）", emoji: "🏰", search: "castle", phonemes: ["ca","s","t","le"] },
          { word: "listen",    highlight: "st", zh: "聽（t不發音）", emoji: "👂", search: "listen", phonemes: ["li","s","t","en"] },
          { word: "whistle",   highlight: "st", zh: "哨子（t不發音）", emoji: "🎵", search: "whistle", phonemes: ["whi","s","t","le"] },
          { word: "Christmas", highlight: "st", zh: "聖誕節（t不發音）", emoji: "🎄", search: "christmas", phonemes: ["Chr","i","st","m","a","s"] },
          { word: "wrap",      highlight: "wr", zh: "包裝（w不發音）", emoji: "🎁", search: "wrap gift", phonemes: ["wr","a","p"] },
          { word: "write",     highlight: "wr", zh: "寫（w不發音）", emoji: "✍️", search: "write pen", phonemes: ["wr","i","te"] },
          { word: "wrist",     highlight: "wr", zh: "手腕（w不發音）", emoji: "⌚", search: "wrist watch", phonemes: ["wr","i","st"] },
          { word: "wrong",     highlight: "wr", zh: "錯誤（w不發音）", emoji: "❌", search: "wrong error", phonemes: ["wr","o","ng"] }
        ],
        quiz: [
          { word: "knife", speak: "knife", displayWord: "knife", answer: "k 不發音，唸 /n/",
            choices: ["k=/k/","k 不發音，唸 /n/","k=/tʃ/","k=/g/"],
            hint: "🔪 knife，kn 中 k 不發音！", emoji: "🔪", search: "knife" },
          { word: "write", speak: "write", displayWord: "write", answer: "w 不發音，唸 /r/",
            choices: ["w=/w/","w 不發音，唸 /r/","w=/v/","w=/b/"],
            hint: "✍️ write，wr 中 w 不發音！", emoji: "✍️", search: "write pen" },
          { word: "listen", speak: "listen", displayWord: "listen", answer: "t 不發音",
            choices: ["t 完全唸出","t 不發音","t=/d/","t=/s/"],
            hint: "👂 listen，st 中 t 不發音！", emoji: "👂", search: "listen" }
        ]
      }
    ],
    story: {
      title: "🏰 The Knight Who Knew Wrong",
      pages: [
        { en: "A knight with a knife knocked on the castle.", zh: "一位手持刀的騎士敲打著城堡。", highlights: ["knight","knife","knocked","castle"] },
        { en: "He knew it was wrong to wrap the wrist.", zh: "他知道包住手腕是錯的。", highlights: ["knew","wrong","wrap","wrist"] },
        { en: "He listened and heard a whistle.", zh: "他聆聽著，聽到一聲哨音。", highlights: ["listened","whistle"] },
        { en: "With knowledge, he wrote: 'Write, not wrong!'", zh: "憑著知識，他寫道：「要對，不要錯！」", highlights: ["knowledge","wrote","wrong"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  CH18：c / g 的例外
  // ─────────────────────────────────────────
  {
    id: 18,
    title: "c 和 g 的例外組合",
    emoji: "🔄",
    color: 2,
    topics: [
      {
        name: "c /s/ 和 ge/dge、g /dʒ/",
        rules: [
          "口訣：c 和 g 很奇怪，遇 i e y 要變換。c 發 [k] 是常識，遇 i e y 要變 [s]。g 發 [g] 不用記，遇 i e y 要變 [dʒ]",
          "<b>c /s/</b>（c 後面接 i、e、y）：city、circle、cinema、cycle、recycle",
          "<b>ge/dge /dʒ/</b>：age、bridge、cage、edge、large、judge",
          "<b>g /dʒ/</b>（g 後面接 i、e、y）：energy、giant、ginger、gym、giraffe"
        ],
        words: [
          { word: "city",    highlight: "c",   zh: "城市（c+i→/s/）", emoji: "🏙️", search: "city", phonemes: ["c","i","t","y"] },
          { word: "circle",  highlight: "c",   zh: "圓圈（c+i→/s/）", emoji: "⭕", search: "circle", phonemes: ["c","ir","c","le"] },
          { word: "cinema",  highlight: "c",   zh: "電影院（c+i→/s/）", emoji: "🎬", search: "cinema", phonemes: ["c","i","ne","ma"] },
          { word: "cycle",   highlight: "c",   zh: "循環（c+y→/s/）", emoji: "🔄", search: "cycle", phonemes: ["c","y","c","le"] },
          { word: "face",    highlight: "ce",  zh: "臉（c+e→/s/）", emoji: "😊", search: "face smile", phonemes: ["f","a","ce"] },
          { word: "age",     highlight: "ge",  zh: "年齡（ge=/dʒ/）", emoji: "🎂", search: "age birthday", phonemes: ["a","ge"] },
          { word: "bridge",  highlight: "dge", zh: "橋（dge=/dʒ/）", emoji: "🌉", search: "bridge", phonemes: ["br","i","dge"] },
          { word: "cage",    highlight: "ge",  zh: "籠子（ge=/dʒ/）", emoji: "🐦", search: "cage bird", phonemes: ["c","a","ge"] },
          { word: "edge",    highlight: "dge", zh: "邊緣（dge=/dʒ/）", emoji: "🔪", search: "edge knife", phonemes: ["e","dge"] },
          { word: "large",   highlight: "ge",  zh: "大的（ge=/dʒ/）", emoji: "🐘", search: "large elephant", phonemes: ["l","ar","ge"] },
          { word: "energy",  highlight: "g",   zh: "能量（g+y→/dʒ/）", emoji: "⚡", search: "energy lightning", phonemes: ["e","n","er","g","y"] },
          { word: "giant",   highlight: "g",   zh: "巨人（g+i→/dʒ/）", emoji: "🧌", search: "giant", phonemes: ["g","i","a","nt"] },
          { word: "gym",     highlight: "g",   zh: "健身房（g+y→/dʒ/）", emoji: "🏋️", search: "gym", phonemes: ["g","y","m"] },
          { word: "giraffe", highlight: "g",   zh: "長頸鹿（g+i→/dʒ/）", emoji: "🦒", search: "giraffe", phonemes: ["g","i","r","a","ffe"] }
        ],
        quiz: [
          { word: "city", speak: "city", displayWord: "city", answer: "c+i → /s/",
            choices: ["c=/k/（硬音）","c+i → /s/","c=/tʃ/","c=/sh/"],
            hint: "🏙️ city，c 後面是 i，唸 /s/！", emoji: "🏙️", search: "city" },
          { word: "gym", speak: "gym", displayWord: "gym", answer: "g+y → /dʒ/",
            choices: ["g=/g/（硬音）","g+y → /dʒ/","g=/zh/","g=/k/"],
            hint: "🏋️ gym，g 後面是 y，唸 /dʒ/！", emoji: "🏋️", search: "gym" }
        ]
      }
    ],
    story: {
      title: "🦒 The Giant Giraffe",
      pages: [
        { en: "A giant giraffe in the city went to the gym.", zh: "城市裡一隻巨大的長頸鹿去了健身房。", highlights: ["giant","giraffe","city","gym"] },
        { en: "It had energy to cycle across the bridge.", zh: "牠有能量騎車穿越橋。", highlights: ["energy","cycle","bridge"] },
        { en: "At the edge of a large cage, it found a cinema.", zh: "在大籠子的邊緣，牠發現了電影院。", highlights: ["edge","large","cage","cinema"] },
        { en: "Its face showed joy — what an age!", zh: "牠的臉顯露出喜悅——多好的年代！", highlights: ["face","age"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  CH19：無聲字
  // ─────────────────────────────────────────
  {
    id: 19,
    title: "無聲字（Silent Letters）",
    emoji: "🤐",
    color: 3,
    topics: [
      {
        name: "b / h / l / t 不發音",
        rules: [
          "以下這些子音是無聲的，沒有規律，直接記單字！",
          "<b>b 不發音</b>（mb 組合）：bomb、comb、dumb、lamb、climb",
          "<b>h 不發音</b>（特定字）：oh、hour、honor、honest",
          "<b>l 不發音</b>（特定字）：calm、half、talk、walk",
          "<b>t 不發音</b>（特定字）：ballet、often"
        ],
        words: [
          { word: "bomb",   highlight: "b",  zh: "炸彈（b不發音）", emoji: "💣", search: "bomb", phonemes: ["b","o","mb"] },
          { word: "comb",   highlight: "b",  zh: "梳子（b不發音）", emoji: "🪮", search: "comb hair", phonemes: ["c","o","mb"] },
          { word: "dumb",   highlight: "b",  zh: "啞的（b不發音）", emoji: "🤐", search: "dumb silent", phonemes: ["d","u","mb"] },
          { word: "lamb",   highlight: "b",  zh: "小羊（b不發音）", emoji: "🐑", search: "lamb sheep", phonemes: ["l","a","mb"] },
          { word: "climb",  highlight: "b",  zh: "爬（b不發音）", emoji: "🧗", search: "climb mountain", phonemes: ["cl","i","mb"] },
          { word: "oh",     highlight: "h",  zh: "喔（h不發音）", emoji: "😮", search: "oh surprised", phonemes: ["oh"] },
          { word: "hour",   highlight: "h",  zh: "小時（h不發音）", emoji: "⏰", search: "hour clock", phonemes: ["h","our"] },
          { word: "honest", highlight: "h",  zh: "誠實（h不發音）", emoji: "💯", search: "honest truth", phonemes: ["h","on","est"] },
          { word: "calm",   highlight: "l",  zh: "平靜（l不發音）", emoji: "😌", search: "calm peaceful", phonemes: ["c","a","lm"] },
          { word: "half",   highlight: "l",  zh: "一半（l不發音）", emoji: "½", search: "half fraction", phonemes: ["h","a","lf"] },
          { word: "talk",   highlight: "l",  zh: "說話（l不發音）", emoji: "💬", search: "talk speak", phonemes: ["t","a","lk"] },
          { word: "walk",   highlight: "l",  zh: "走路（l不發音）", emoji: "🚶", search: "walk", phonemes: ["w","a","lk"] },
          { word: "ballet", highlight: "t",  zh: "芭蕾（t不發音）", emoji: "🩰", search: "ballet dance", phonemes: ["bal","let"] },
          { word: "often",  highlight: "t",  zh: "常常（t不發音）", emoji: "🔁", search: "often repeat", phonemes: ["of","ten"] }
        ],
        quiz: [
          { word: "lamb", speak: "lamb", displayWord: "lamb", answer: "b 不發音",
            choices: ["b=/b/","b 不發音","b=/m/","b=/p/"],
            hint: "🐑 lamb，mb 中 b 不發音！唸 /læm/！", emoji: "🐑", search: "lamb sheep" },
          { word: "walk", speak: "walk", displayWord: "walk", answer: "l 不發音",
            choices: ["l=/l/","l 不發音","l=/w/","l=/r/"],
            hint: "🚶 walk，al 中 l 不發音！唸 /wɔːk/！", emoji: "🚶", search: "walk" },
          { word: "hour", speak: "hour", displayWord: "hour", answer: "h 不發音",
            choices: ["h=/h/","h 不發音","h=/aʊ/","h=/w/"],
            hint: "⏰ hour，h 不發音！唸 /aʊər/！", emoji: "⏰", search: "hour clock" }
        ]
      }
    ],
    story: {
      title: "🐑 The Honest Lamb",
      pages: [
        { en: "An honest lamb could talk and walk.", zh: "一隻誠實的小羊會說話和走路。", highlights: ["honest","lamb","talk","walk"] },
        { en: "Often it would climb and stay calm for an hour.", zh: "牠常常攀爬，平靜地待上一小時。", highlights: ["Often","climb","calm","hour"] },
        { en: "Half of its honor was being dumb when needed.", zh: "牠一半的榮耀是在需要時保持沉默。", highlights: ["Half","dumb"] },
        { en: "Oh! The bomb was just a comb!", zh: "喔！那個炸彈只是一把梳子！", highlights: ["Oh","bomb","comb"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  CH20：變音
  // ─────────────────────────────────────────
  {
    id: 20,
    title: "變音：s 後子音弱化",
    emoji: "🔀",
    color: 4,
    topics: [
      {
        name: "s+k→g、s+p→b、s+t→d",
        rules: [
          "在字母中發 /k/、/p/、/t/ 的音之前的字母是 s，則其發音變為有聲",
          "理由：比較容易發音（自然連音現象）",
          "口訣：S 家族有魔法，詞尾輕輕讀，詞首就淡化",
          "<b>s[k] → s[g]</b>：ski、sky、skin、skill、skate、school",
          "<b>s[p] → s[b]</b>：spa、spy、space、spell、speak、spoon、sport",
          "<b>s[t] → s[d]</b>：star、stay、stair、stock、store、study、stand、still"
        ],
        words: [
          { word: "ski",   highlight: "sk", zh: "滑雪", emoji: "⛷️", search: "ski skiing", phonemes: ["sk","i"] },
          { word: "sky",   highlight: "sk", zh: "天空", emoji: "🌤️", search: "sky", phonemes: ["sk","y"] },
          { word: "skin",  highlight: "sk", zh: "皮膚", emoji: "🧴", search: "skin care", phonemes: ["sk","i","n"] },
          { word: "skill", highlight: "sk", zh: "技能", emoji: "⭐", search: "skill talent", phonemes: ["sk","ill"] },
          { word: "skate", highlight: "sk", zh: "溜冰", emoji: "⛸️", search: "skate ice", phonemes: ["sk","a","te"] },
          { word: "school",highlight: "sk", zh: "學校", emoji: "🏫", search: "school", phonemes: ["sch","oo","l"] },
          { word: "space", highlight: "sp", zh: "太空", emoji: "🚀", search: "space", phonemes: ["sp","a","ce"] },
          { word: "spell", highlight: "sp", zh: "拼字", emoji: "✨", search: "spell magic", phonemes: ["sp","ell"] },
          { word: "speak", highlight: "sp", zh: "說話", emoji: "💬", search: "speak", phonemes: ["sp","ea","k"] },
          { word: "spoon", highlight: "sp", zh: "湯匙", emoji: "🥄", search: "spoon", phonemes: ["sp","oo","n"] },
          { word: "sport", highlight: "sp", zh: "運動", emoji: "⚽", search: "sport", phonemes: ["sp","or","t"] },
          { word: "star",  highlight: "st", zh: "星星", emoji: "⭐", search: "star", phonemes: ["st","ar"] },
          { word: "stay",  highlight: "st", zh: "留下", emoji: "🏠", search: "stay home", phonemes: ["st","ay"] },
          { word: "study", highlight: "st", zh: "讀書", emoji: "📚", search: "study books", phonemes: ["st","u","d","y"] },
          { word: "still", highlight: "st", zh: "仍然/靜止", emoji: "🧘", search: "still calm", phonemes: ["st","ill"] }
        ],
        quiz: [
          { word: "sky", speak: "sky", displayWord: "sky", answer: "sk → 聽起來像 /sg/",
            choices: ["sk → 聽起來像 /sk/","sk → 聽起來像 /sg/","sk → 聽起來像 /sh/","sk → 不變"],
            hint: "🌤️ sky，s 後的 k 弱化，聽起來像 /sg/！", emoji: "🌤️", search: "sky" },
          { word: "sport", speak: "sport", displayWord: "sport", answer: "sp → 聽起來像 /sb/",
            choices: ["sp → 聽起來像 /sp/","sp → 聽起來像 /sb/","sp → 聽起來像 /sf/","sp → 不變"],
            hint: "⚽ sport，s 後的 p 弱化，聽起來像 /sb/！", emoji: "⚽", search: "sport" },
          { word: "study", speak: "study", displayWord: "study", answer: "st → 聽起來像 /sd/",
            choices: ["st → 聽起來像 /st/","st → 聽起來像 /sd/","st → 聽起來像 /sh/","st → 不變"],
            hint: "📚 study，s 後的 t 弱化，聽起來像 /sd/！", emoji: "📚", search: "study books" }
        ]
      }
    ],
    story: {
      title: "⭐ The Star Student",
      pages: [
        { en: "A star student with skill went to ski in the sky.", zh: "一個有技能的明星學生去天空滑雪。", highlights: ["star","skill","ski","sky"] },
        { en: "She could speak, spell, and play sport.", zh: "她會說話、拼字和運動。", highlights: ["speak","spell","sport"] },
        { en: "She stayed at school to study — still and calm.", zh: "她留在學校讀書——靜止而平靜。", highlights: ["stayed","school","study","still"] },
        { en: "In space, a star said: 'Stay and keep your skill!'", zh: "在太空中，一顆星說：「留下來，保持你的技能！」", highlights: ["space","star","Stay","skill"] }
      ]
    }
  }

]; // end LESSONS

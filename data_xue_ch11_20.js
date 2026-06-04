// 薛珍華老師自然發音法 Ch11-20

const LESSONS = [
  // ─────────────────────────────────────────
  //  CHAPTER 11：ar / or / ir / er / ur
  // ─────────────────────────────────────────
  {
    id: 11,
    title: "R-controlled：ar、or、ir、er、ur",
    emoji: "🌀",
    color: 0,
    topics: [
      {
        name: "ar /ɑːr/ 和 or /ɔːr/",
        rules: [
          "若遇到英文字裡有 r 在音節中或音節尾，都要唸捲舌的音",
          "口訣：大哥 a 遇霸道 r，根本不怕喊聲啊；二哥 o 遇霸道 r，嘴巴變圓哦哦哦",
          "<b>ar /ɑːr/</b>：bar、card、dark、far、hard、jar、large、march、park（car）",
          "<b>or /ɔːr/</b>：fork、lord、more、pork、sort、sport、torch、work（短）",
          "⚠️ 特別注意：w+or → 唸 /wɜr/！例：work、word、world、warm（work=/wɜrk/，不是 /wɔrk/）"
        ],
        words: [
          { word: "bar",   highlight: "ar", zh: "酒吧/棒", emoji: "🍺", search: "bar pub" },
          { word: "card",  highlight: "ar", zh: "卡片", emoji: "🃏", search: "card" },
          { word: "dark",  highlight: "ar", zh: "黑暗", emoji: "🌑", search: "dark night" },
          { word: "far",   highlight: "ar", zh: "遠", emoji: "🌌", search: "far away" },
          { word: "hard",  highlight: "ar", zh: "困難/硬", emoji: "💪", search: "hard strong" },
          { word: "jar",   highlight: "ar", zh: "罐子", emoji: "🫙", search: "jar glass" },
          { word: "large", highlight: "ar", zh: "大的", emoji: "🐘", search: "large elephant" },
          { word: "march", highlight: "ar", zh: "行進/三月", emoji: "🥁", search: "march parade" },
          { word: "fork",  highlight: "or", zh: "叉子", emoji: "🍴", search: "fork utensil" },
          { word: "lord",  highlight: "or", zh: "主/貴族", emoji: "👑", search: "lord noble" },
          { word: "more",  highlight: "or", zh: "更多", emoji: "➕", search: "more plus" },
          { word: "pork",  highlight: "or", zh: "豬肉", emoji: "🥩", search: "pork meat" },
          { word: "sport", highlight: "or", zh: "運動", emoji: "⚽", search: "sport soccer" },
          { word: "torch", highlight: "or", zh: "火炬", emoji: "🔦", search: "torch flashlight" },
          { word: "work",  highlight: "or", zh: "工作（w+or=/wɜr/）", emoji: "💼", search: "work office" }
        ],
        quiz: [
          { word: "car", speak: "car", displayWord: "car", answer: "/ɑːr/",
            choices: ["/æ/（短a）","/eɪ/（長a）","/ɑːr/","/ər/"],
            hint: "🚗 car，ar → /ɑːr/，r 改變了 a！", emoji: "🚗", search: "car" },
          { word: "fork", speak: "fork", displayWord: "fork", answer: "/ɔːr/",
            choices: ["/ɑ/（短o）","/oʊ/（長o）","/ɔːr/","/ər/"],
            hint: "🍴 fork，or → /ɔːr/，r 改變了 o！", emoji: "🍴", search: "fork utensil" }
        ]
      },
      {
        name: "er /ɜːr/、ir /ɜːr/、ur /ɜːr/",
        rules: [
          "口訣：e i u 遇霸道 r，三天兩粒米肚子餓（三個發音一樣，都唸 /ɜːr/）",
          "<b>er /ɜːr/</b>（字中重音）：her、herd、term、serve；字尾輕音：cooker、dancer、teacher",
          "<b>ir /ɜːr/</b>：bird、birthday、circle、dirt、girl、sir、skirt（不是 short！）",
          "<b>ur /ɜːr/</b>：burn、curse、fur、further、nurse、survive、turn",
          "⚠️ w+ar → 唸 /wɔːr/！例：war、warm、ward（war=/wɔːr/，不是 /wɑːr/）"
        ],
        words: [
          { word: "her",      highlight: "er", zh: "她的（er重音）", emoji: "👩", search: "her woman" },
          { word: "herd",     highlight: "er", zh: "獸群（er重音）", emoji: "🐮", search: "herd cattle" },
          { word: "term",     highlight: "er", zh: "學期（er重音）", emoji: "📚", search: "term school" },
          { word: "teacher",  highlight: "er", zh: "老師（er字尾輕音）", emoji: "👩‍🏫", search: "teacher" },
          { word: "bird",     highlight: "ir", zh: "鳥（ir=/ɜːr/）", emoji: "🐦", search: "bird" },
          { word: "birthday", highlight: "ir", zh: "生日（ir=/ɜːr/）", emoji: "🎂", search: "birthday cake" },
          { word: "circle",   highlight: "ir", zh: "圓圈（ir=/ɜːr/）", emoji: "⭕", search: "circle" },
          { word: "girl",     highlight: "ir", zh: "女孩（ir=/ɜːr/）", emoji: "👧", search: "girl" },
          { word: "skirt",    highlight: "ir", zh: "裙子（ir=/ɜːr/）", emoji: "👗", search: "skirt" },
          { word: "burn",     highlight: "ur", zh: "燃燒（ur=/ɜːr/）", emoji: "🔥", search: "burn fire" },
          { word: "fur",      highlight: "ur", zh: "毛皮（ur=/ɜːr/）", emoji: "🐾", search: "fur animal" },
          { word: "nurse",    highlight: "ur", zh: "護士（ur=/ɜːr/）", emoji: "👩‍⚕️", search: "nurse" },
          { word: "turn",     highlight: "ur", zh: "轉（ur=/ɜːr/）", emoji: "🔄", search: "turn rotate" },
          { word: "war",      highlight: "ar", zh: "戰爭（w+ar=/wɔːr/）", emoji: "⚔️", search: "war battle" },
          { word: "warm",     highlight: "ar", zh: "溫暖（w+ar=/wɔːr/）", emoji: "🧣", search: "warm cozy" }
        ],
        quiz: [
          { word: "girl", speak: "girl", displayWord: "g_rl", answer: "ir → /ɜːr/",
            choices: ["ir → /ɜːr/","er → /ɜːr/","ur → /ɜːr/","ar → /ɑːr/"],
            hint: "👧 girl，ir 唸 /ɜːr/！", emoji: "👧", search: "girl" },
          { word: "nurse", speak: "nurse", displayWord: "n_rse", answer: "ur → /ɜːr/",
            choices: ["ir → /ɜːr/","er → /ɜːr/","ur → /ɜːr/","or → /ɔːr/"],
            hint: "👩‍⚕️ nurse，ur 唸 /ɜːr/！", emoji: "👩‍⚕️", search: "nurse" },
          { word: "her", speak: "her", displayWord: "her", answer: "er → /ɜːr/",
            choices: ["ir → /ɜːr/","er → /ɜːr/","ur → /ɜːr/","ar → /ɑːr/"],
            hint: "👩 her，er 唸 /ɜːr/！", emoji: "👩", search: "her woman" }
        ]
      }
    ],
    story: {
      title: "🐦 The Girl and the Bird",
      pages: [
        { en: "A girl in a skirt saw a bird on a jar.", zh: "一個穿裙子的女孩看見一隻鳥站在罐子上。", highlights: ["girl","skirt","bird","jar"] },
        { en: "The bird had fur and liked the warm dark.", zh: "那隻鳥有毛皮，喜歡溫暖的黑暗。", highlights: ["bird","fur","warm","dark"] },
        { en: "The nurse worked hard far from home.", zh: "護士在遠離家鄉的地方努力工作。", highlights: ["nurse","worked","hard","far","home"] },
        { en: "On her birthday, she turned and said: 'I am more than a teacher!'", zh: "在她生日那天，她轉身說：「我不只是老師！」", highlights: ["birthday","turned","more","teacher"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  CHAPTER 12：bl / cl / fl / sl 的比較
  // ─────────────────────────────────────────
  {
    id: 12,
    title: "L 家族拼音：bl、cl、fl、sl（+gl、pl）",
    emoji: "🔗",
    color: 1,
    topics: [
      {
        name: "L 家族：bl、cl、fl、sl、gl、pl",
        rules: [
          "若英文字裡有 l 與下列字母的組合（一般在字首），則視其為一個子音",
          "口訣：L 家族很團結，兩個發音拼一拼，B C F G P S 愛和 L 在一起",
          "<b>bl /bl/</b>：black、blind、block、blue、blink、blood",
          "<b>cl /kl/</b>：class、clean、close、cloud、clock、cluster",
          "<b>fl /fl/</b>：flag、flame、flat、flow、fly、flu",
          "<b>sl /sl/</b>：slam、sleep、slim、sly、slap、slide、slow、slipper",
          "<b>gl /gl/</b>：glad、glass、glove（補充）",
          "<b>pl /pl/</b>：place、plane、play（補充）"
        ],
        words: [
          { word: "black",  highlight: "bl", zh: "黑色", emoji: "🖤", search: "black color" },
          { word: "blind",  highlight: "bl", zh: "盲的", emoji: "🙈", search: "blind" },
          { word: "block",  highlight: "bl", zh: "積木/街區", emoji: "🧱", search: "block" },
          { word: "blood",  highlight: "bl", zh: "血液", emoji: "🩸", search: "blood" },
          { word: "class",  highlight: "cl", zh: "班級", emoji: "🏫", search: "class school" },
          { word: "clean",  highlight: "cl", zh: "乾淨", emoji: "🧹", search: "clean" },
          { word: "close",  highlight: "cl", zh: "關閉", emoji: "🚪", search: "close door" },
          { word: "cloud",  highlight: "cl", zh: "雲", emoji: "☁️", search: "cloud" },
          { word: "flag",   highlight: "fl", zh: "旗幟", emoji: "🚩", search: "flag" },
          { word: "flat",   highlight: "fl", zh: "平的", emoji: "📐", search: "flat surface" },
          { word: "fly",    highlight: "fl", zh: "飛", emoji: "🦅", search: "fly bird" },
          { word: "sleep",  highlight: "sl", zh: "睡覺", emoji: "😴", search: "sleep" },
          { word: "slow",   highlight: "sl", zh: "慢的", emoji: "🐢", search: "slow turtle" },
          { word: "glass",  highlight: "gl", zh: "玻璃/杯子", emoji: "🥃", search: "glass cup" },
          { word: "plane",  highlight: "pl", zh: "飛機", emoji: "✈️", search: "airplane plane" }
        ],
        quiz: [
          { word: "black", speak: "black", displayWord: "black", answer: "/bl/",
            choices: ["/b/+停頓+/l/","/bl/","/kl/","/fl/"],
            hint: "🖤 black，bl 快速連唸 /bl/！", emoji: "🖤", search: "black color" },
          { word: "class", speak: "class", displayWord: "class", answer: "/kl/",
            choices: ["/bl/","/kl/","/fl/","/sl/"],
            hint: "🏫 class，cl 快速連唸 /kl/！", emoji: "🏫", search: "class school" },
          { word: "sleep", speak: "sleep", displayWord: "sleep", answer: "/sl/",
            choices: ["/bl/","/kl/","/fl/","/sl/"],
            hint: "😴 sleep，sl 快速連唸 /sl/！", emoji: "😴", search: "sleep" }
        ]
      }
    ],
    story: {
      title: "✈️ The Black Plane",
      pages: [
        { en: "A black plane flew slow in a cloud.", zh: "一架黑色飛機在雲中緩慢地飛行。", highlights: ["black","plane","slow","cloud"] },
        { en: "The class was flat and clean — they slept.", zh: "課堂又平靜又乾淨——他們睡著了。", highlights: ["class","flat","clean","slept"] },
        { en: "A flag flew close to the glass.", zh: "一面旗幟飄在玻璃旁邊。", highlights: ["flag","close","glass"] },
        { en: "They all had blood, blocked in a blue blind box!", zh: "他們都被困在一個藍色的盲箱裡！", highlights: ["blood","blocked","blue","blind","box"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  CHAPTER 13：br / cr / dr / tr 的比較
  // ─────────────────────────────────────────
  {
    id: 13,
    title: "R 家族拼音：br、cr、dr、tr（+fr、gr、pr）",
    emoji: "🔴",
    color: 2,
    topics: [
      {
        name: "R 家族：br、cr、dr、tr、fr、gr、pr",
        rules: [
          "若英文字裡有 r 與下列字母的組合（一般在字首），則視其為一個子音",
          "口訣：輔音加 r 很容易，dr tr 重點記，其餘組合不用記，直接拼讀就可以",
          "<b>br /br/</b>：bread、break、brick、bride、bridge、broken、brother",
          "<b>cr /kr/</b>：crab、crack、craft、cream、crib、crowded、crush",
          "<b>dr /dr/</b>：draw、dream、draft、drift、drink、drive、drug",
          "<b>tr /tr/</b>：track、trade、treat、trick、trip、trouble、trouser",
          "<b>fr /fr/</b>：friend、frog、frown（補充）",
          "<b>gr /gr/</b>：great、grape、grey（補充）",
          "<b>pr /pr/</b>：prince、prize、present（補充）"
        ],
        words: [
          { word: "bread",   highlight: "br", zh: "麵包", emoji: "🍞", search: "bread" },
          { word: "break",   highlight: "br", zh: "打破/休息", emoji: "💔", search: "break" },
          { word: "bridge",  highlight: "br", zh: "橋", emoji: "🌉", search: "bridge" },
          { word: "brother", highlight: "br", zh: "兄弟", emoji: "👦", search: "brother siblings" },
          { word: "crab",    highlight: "cr", zh: "螃蟹", emoji: "🦀", search: "crab" },
          { word: "crack",   highlight: "cr", zh: "裂縫", emoji: "🪨", search: "crack stone" },
          { word: "cream",   highlight: "cr", zh: "奶油", emoji: "🥛", search: "cream milk" },
          { word: "crown",   highlight: "cr", zh: "皇冠", emoji: "👑", search: "crown" },
          { word: "dream",   highlight: "dr", zh: "夢", emoji: "💭", search: "dream" },
          { word: "drink",   highlight: "dr", zh: "喝", emoji: "🥤", search: "drink" },
          { word: "drive",   highlight: "dr", zh: "開車", emoji: "🚗", search: "drive car" },
          { word: "tree",    highlight: "tr", zh: "樹", emoji: "🌳", search: "tree" },
          { word: "trick",   highlight: "tr", zh: "惡作劇", emoji: "🎭", search: "trick prank" },
          { word: "trip",    highlight: "tr", zh: "旅行", emoji: "✈️", search: "trip travel" },
          { word: "friend",  highlight: "fr", zh: "朋友", emoji: "🤝", search: "friend" }
        ],
        quiz: [
          { word: "bread", speak: "bread", displayWord: "bread", answer: "/br/",
            choices: ["/b/+停頓+/r/","/br/","/kr/","/dr/"],
            hint: "🍞 bread，br 快速連唸 /br/！", emoji: "🍞", search: "bread" },
          { word: "dream", speak: "dream", displayWord: "dream", answer: "/dr/",
            choices: ["/br/","/kr/","/dr/","/tr/"],
            hint: "💭 dream，dr 快速連唸 /dr/！", emoji: "💭", search: "dream" },
          { word: "trick", speak: "trick", displayWord: "trick", answer: "/tr/",
            choices: ["/br/","/kr/","/dr/","/tr/"],
            hint: "🎭 trick，tr 快速連唸 /tr/！", emoji: "🎭", search: "trick prank" }
        ]
      }
    ],
    story: {
      title: "🌉 The Bridge Trip",
      pages: [
        { en: "A brother and a friend drove to a bridge.", zh: "一個兄弟和一個朋友開車去橋邊。", highlights: ["brother","friend","drove","bridge"] },
        { en: "They dreamed of a tree with cream and bread.", zh: "他們夢見一棵有奶油和麵包的樹。", highlights: ["dreamed","tree","cream","bread"] },
        { en: "A crab did a trick — it cracked a crown!", zh: "一隻螃蟹耍了個把戲——它把皇冠弄裂了！", highlights: ["crab","trick","cracked","crown"] },
        { en: "The trip was broken — but the dream was not!", zh: "旅途被打斷了——但夢想沒有！", highlights: ["trip","broken","dream"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  CHAPTER 14：sh / ch / th / ph 的比較
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
          "若英文字裡有下列字母的組合，則視其為一個子音，直接唸出",
          "口訣：H 家族成員怪，連在一起全變換。ch 饞嘴就愛吃，sh 愛靜一直噓，gh 常常不吭聲，ph 走路要人扶，wh 心中只有我",
          "<b>sh /ʃ/</b>（噓聲）：ash、cash、dish、shirt、short、show、shower、shoot、fish",
          "<b>ch /tʃ/</b>（最常見）：chair、cheer、cherish、chopstick、chore、choose、coach、touch",
          "<b>ch /k/</b>（希臘語來源）：echo、headache、Michael、school、scholar、technology、mechanic、Christmas"
        ],
        words: [
          { word: "ash",       highlight: "sh", zh: "灰燼（sh=/ʃ/）", emoji: "💨", search: "ash smoke" },
          { word: "cash",      highlight: "sh", zh: "現金（sh=/ʃ/）", emoji: "💵", search: "cash money" },
          { word: "dish",      highlight: "sh", zh: "碟子（sh=/ʃ/）", emoji: "🍽️", search: "dish plate" },
          { word: "shirt",     highlight: "sh", zh: "襯衫（sh=/ʃ/）", emoji: "👕", search: "shirt" },
          { word: "fish",      highlight: "sh", zh: "魚（sh=/ʃ/）", emoji: "🐟", search: "fish" },
          { word: "show",      highlight: "sh", zh: "展示（sh=/ʃ/）", emoji: "🎪", search: "show performance" },
          { word: "chair",     highlight: "ch", zh: "椅子（ch=/tʃ/）", emoji: "🪑", search: "chair" },
          { word: "choose",    highlight: "ch", zh: "選擇（ch=/tʃ/）", emoji: "✅", search: "choose select" },
          { word: "coach",     highlight: "ch", zh: "教練（ch=/tʃ/）", emoji: "🏆", search: "coach sports" },
          { word: "touch",     highlight: "ch", zh: "觸摸（ch=/tʃ/）", emoji: "🤏", search: "touch hand" },
          { word: "echo",      highlight: "ch", zh: "回聲（ch=/k/）", emoji: "🔊", search: "echo sound" },
          { word: "school",    highlight: "ch", zh: "學校（ch=/k/）", emoji: "🏫", search: "school" },
          { word: "technology",highlight: "ch", zh: "科技（ch=/k/）", emoji: "💻", search: "technology" },
          { word: "Christmas", highlight: "ch", zh: "聖誕節（ch=/k/）", emoji: "🎄", search: "christmas" },
          { word: "mechanic",  highlight: "ch", zh: "機械師（ch=/k/）", emoji: "🔧", search: "mechanic" }
        ],
        quiz: [
          { word: "fish", speak: "fish", displayWord: "fish", answer: "/ʃ/（sh）",
            choices: ["/ʃ/（sh）","/tʃ/（ch）","/k/（ch希臘）","/f/"],
            hint: "🐟 fish，sh 唸 /ʃ/（噓聲）！", emoji: "🐟", search: "fish" },
          { word: "chair", speak: "chair", displayWord: "chair", answer: "/tʃ/（ch）",
            choices: ["/ʃ/（sh）","/tʃ/（ch）","/k/（ch希臘）","/h/"],
            hint: "🪑 chair，ch 唸 /tʃ/（最常見）！", emoji: "🪑", search: "chair" },
          { word: "school", speak: "school", displayWord: "school", answer: "/k/（ch希臘）",
            choices: ["/ʃ/（sh）","/tʃ/（ch）","/k/（ch希臘）","/sk/"],
            hint: "🏫 school，ch 唸 /k/，來自希臘文！", emoji: "🏫", search: "school" }
        ]
      },
      {
        name: "th 兩個音 和 ph /f/",
        rules: [
          "<b>th /θ/</b>（無聲，舌頭在齒間不振動）：在單字的開頭和結尾一般發清輔音",
          "例：three、think、teeth、both、thank、thin、thing",
          "<b>th /ð/</b>（有聲，舌頭在齒間振動）：在單字中間時一般發濁輔音；代詞、介詞、連詞、副詞、冠詞裡面一般發濁",
          "例（字中）：father、mother、weather；例（代詞等）：this、with、thus、there、the",
          "<b>ph /f/</b>（來自希臘文）：phone、photo、telephone、elephant",
          "口訣：th 的發音要注意，兩頭輕，中間濁，代介連副冠大多濁"
        ],
        words: [
          { word: "three",    highlight: "th", zh: "三（th清音/θ/）", emoji: "3️⃣", search: "number three" },
          { word: "think",    highlight: "th", zh: "想（th清音/θ/）", emoji: "🤔", search: "think" },
          { word: "teeth",    highlight: "th", zh: "牙齒（th清音/θ/）", emoji: "🦷", search: "teeth" },
          { word: "both",     highlight: "th", zh: "兩者（th清音/θ/）", emoji: "2️⃣", search: "both two" },
          { word: "thin",     highlight: "th", zh: "薄的（th清音/θ/）", emoji: "📄", search: "thin paper" },
          { word: "father",   highlight: "th", zh: "父親（th濁音/ð/ 字中）", emoji: "👨", search: "father" },
          { word: "mother",   highlight: "th", zh: "母親（th濁音/ð/ 字中）", emoji: "👩", search: "mother" },
          { word: "weather",  highlight: "th", zh: "天氣（th濁音/ð/ 字中）", emoji: "🌤️", search: "weather" },
          { word: "this",     highlight: "th", zh: "這個（th濁音/ð/ 代詞）", emoji: "☝️", search: "this here" },
          { word: "the",      highlight: "th", zh: "這/那（th濁音/ð/ 冠詞）", emoji: "📖", search: "the article" },
          { word: "phone",    highlight: "ph", zh: "電話（ph=/f/）", emoji: "📱", search: "phone" },
          { word: "photo",    highlight: "ph", zh: "照片（ph=/f/）", emoji: "📷", search: "photo" },
          { word: "telephone",highlight: "ph", zh: "電話（ph=/f/）", emoji: "☎️", search: "telephone" },
          { word: "elephant", highlight: "ph", zh: "大象（ph=/f/）", emoji: "🐘", search: "elephant" },
          { word: "Philips",  highlight: "ph", zh: "飛利浦（ph=/f/）", emoji: "💡", search: "philips light" }
        ],
        quiz: [
          { word: "three", speak: "three", displayWord: "three", answer: "/θ/（清音）",
            choices: ["/θ/（清音）","/ð/（濁音）","/t/","/d/"],
            hint: "3️⃣ three，th 在字首，唸清音 /θ/！", emoji: "3️⃣", search: "number three" },
          { word: "father", speak: "father", displayWord: "father", answer: "/ð/（濁音）",
            choices: ["/θ/（清音）","/ð/（濁音）","/t/","/d/"],
            hint: "👨 father，th 在字中間，唸濁音 /ð/！", emoji: "👨", search: "father" },
          { word: "phone", speak: "phone", displayWord: "phone", answer: "/f/",
            choices: ["/p/","/f/","/ph/","/h/"],
            hint: "📱 phone，ph 唸 /f/，來自希臘文！", emoji: "📱", search: "phone" }
        ]
      }
    ],
    story: {
      title: "📱 The Photo of Three Fish",
      pages: [
        { en: "This photo shows three fish on a dish.", zh: "這張照片顯示了碟子上的三條魚。", highlights: ["This","photo","three","fish","dish"] },
        { en: "Father and mother both think it is a good show.", zh: "父親和母親都認為這是個好展覽。", highlights: ["Father","mother","both","think","show"] },
        { en: "The teacher chose to teach the coach to use the phone.", zh: "老師選擇教教練使用電話。", highlights: ["teacher","chose","coach","phone"] },
        { en: "The weather was thin and cold — then Christmas came!", zh: "天氣又薄又冷——然後聖誕節來了！", highlights: ["weather","thin","Christmas"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  CHAPTER 15：sion / sure / ture
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
          "<b>sion /ʒən/</b>（濁音）：decision、division、envision、vision、session、television",
          "<b>sure /ʒɔr/</b>：measure、leisure、pleasure、treasure",
          "<b>ture /tʃər/</b>：creature、future、lecture、manufacture、mature、mixture、nature、picture",
          "記憶：看到這些字尾，整串當一個音唸！不要再拆開！"
        ],
        words: [
          { word: "decision",     highlight: "sion", zh: "決定（sion=/ʒən/）", emoji: "✅", search: "decision" },
          { word: "division",     highlight: "sion", zh: "除法/分割（sion=/ʒən/）", emoji: "➗", search: "division math" },
          { word: "vision",       highlight: "sion", zh: "視力/遠見（sion=/ʒən/）", emoji: "👁️", search: "vision eye" },
          { word: "television",   highlight: "sion", zh: "電視（sion=/ʒən/）", emoji: "📺", search: "television tv" },
          { word: "session",      highlight: "sion", zh: "課程/會議（sion=/ʒən/）", emoji: "💼", search: "session meeting" },
          { word: "measure",      highlight: "sure", zh: "量（sure=/ʒɔr/）", emoji: "📏", search: "measure ruler" },
          { word: "leisure",      highlight: "sure", zh: "閒暇（sure=/ʒɔr/）", emoji: "🌴", search: "leisure relax" },
          { word: "pleasure",     highlight: "sure", zh: "樂趣（sure=/ʒɔr/）", emoji: "😊", search: "pleasure happy" },
          { word: "treasure",     highlight: "sure", zh: "寶藏（sure=/ʒɔr/）", emoji: "💰", search: "treasure gold" },
          { word: "future",       highlight: "ture", zh: "未來（ture=/tʃər/）", emoji: "🔮", search: "future" },
          { word: "nature",       highlight: "ture", zh: "自然（ture=/tʃər/）", emoji: "🌿", search: "nature" },
          { word: "picture",      highlight: "ture", zh: "圖片（ture=/tʃər/）", emoji: "🖼️", search: "picture" },
          { word: "creature",     highlight: "ture", zh: "生物（ture=/tʃər/）", emoji: "🦕", search: "creature" },
          { word: "mixture",      highlight: "ture", zh: "混合物（ture=/tʃər/）", emoji: "🫙", search: "mixture" },
          { word: "lecture",      highlight: "ture", zh: "演講（ture=/tʃər/）", emoji: "🎤", search: "lecture talk" }
        ],
        quiz: [
          { word: "vision", speak: "vision", displayWord: "vi-sion", answer: "/ʒən/",
            choices: ["/ʒən/","/ʃən/","/sɪɒn/","/tʃən/"],
            hint: "👁️ vision，sion 唸 /ʒən/（有聲！）", emoji: "👁️", search: "vision eye" },
          { word: "picture", speak: "picture", displayWord: "pic-ture", answer: "/tʃər/",
            choices: ["/tʃər/","/tjʊər/","/tɪuːr/","/tʌr/"],
            hint: "🖼️ picture，ture 唸 /tʃər/！", emoji: "🖼️", search: "picture" },
          { word: "treasure", speak: "treasure", displayWord: "trea-sure", answer: "/ʒɔr/",
            choices: ["/ʒɔr/","/ʃɔr/","/suːr/","/tʃər/"],
            hint: "💰 treasure，sure 唸 /ʒɔr/！", emoji: "💰", search: "treasure gold" }
        ]
      }
    ],
    story: {
      title: "🔮 The Future Treasure",
      pages: [
        { en: "The creature had a vision of a treasure in nature.", zh: "那個生物在自然中看見了寶藏的遠見。", highlights: ["creature","vision","treasure","nature"] },
        { en: "It was a pleasure to measure the picture.", zh: "量那幅圖片是件愉快的事。", highlights: ["pleasure","measure","picture"] },
        { en: "After the lecture, the division was clear.", zh: "演講結束後，分界很清楚了。", highlights: ["lecture","division"] },
        { en: "In the future, leisure and television will mix!", zh: "在未來，休閒和電視將會混合！", highlights: ["future","leisure","television","mix"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  CHAPTER 16：tion / ssion / cian
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
          "若英文字裡有下列的字串，則視其為一個子音，直接唸出，不必再另外切分音節",
          "<b>tion /ʃən/</b>（無聲）：action、condition、international、motion、nation、position、station、tradition、vacation",
          "<b>ssion /ʃən/</b>：admission、discussion、profession、permission、session",
          "<b>cian /ʃən/</b>：musician、technician、magician",
          "三個字尾發音完全一樣！都是 /ʃən/",
          "記憶：看到 -tion、-ssion、-cian，整串唸 /ʃən/！"
        ],
        words: [
          { word: "action",        highlight: "tion", zh: "行動（tion=/ʃən/）", emoji: "💥", search: "action" },
          { word: "condition",     highlight: "tion", zh: "條件（tion=/ʃən/）", emoji: "📋", search: "condition" },
          { word: "motion",        highlight: "tion", zh: "動作（tion=/ʃən/）", emoji: "🎬", search: "motion movie" },
          { word: "nation",        highlight: "tion", zh: "國家（tion=/ʃən/）", emoji: "🌍", search: "nation country" },
          { word: "position",      highlight: "tion", zh: "位置（tion=/ʃən/）", emoji: "📍", search: "position location" },
          { word: "station",       highlight: "tion", zh: "車站（tion=/ʃən/）", emoji: "🚉", search: "station" },
          { word: "tradition",     highlight: "tion", zh: "傳統（tion=/ʃən/）", emoji: "🏮", search: "tradition culture" },
          { word: "vacation",      highlight: "tion", zh: "假期（tion=/ʃən/）", emoji: "🏖️", search: "vacation beach" },
          { word: "admission",     highlight: "ssion", zh: "入場/承認（ssion=/ʃən/）", emoji: "🎟️", search: "admission ticket" },
          { word: "discussion",    highlight: "ssion", zh: "討論（ssion=/ʃən/）", emoji: "💬", search: "discussion talk" },
          { word: "permission",    highlight: "ssion", zh: "許可（ssion=/ʃən/）", emoji: "✅", search: "permission allow" },
          { word: "profession",    highlight: "ssion", zh: "職業（ssion=/ʃən/）", emoji: "💼", search: "profession job" },
          { word: "musician",      highlight: "cian", zh: "音樂家（cian=/ʃən/）", emoji: "🎵", search: "musician music" },
          { word: "technician",    highlight: "cian", zh: "技術員（cian=/ʃən/）", emoji: "🔧", search: "technician" },
          { word: "magician",      highlight: "cian", zh: "魔術師（cian=/ʃən/）", emoji: "🪄", search: "magician" }
        ],
        quiz: [
          { word: "nation", speak: "nation", displayWord: "na-tion", answer: "/ʃən/",
            choices: ["/tɪon/","/ʃən/","/sɪon/","/tʃon/"],
            hint: "🌍 nation，-tion 唸 /ʃən/！", emoji: "🌍", search: "nation country" },
          { word: "musician", speak: "musician", displayWord: "mu-si-cian", answer: "/ʃən/",
            choices: ["/sɪən/","/ʃən/","/kɪən/","/tʃən/"],
            hint: "🎵 musician，-cian 唸 /ʃən/！", emoji: "🎵", search: "musician music" },
          { word: "discussion", speak: "discussion", displayWord: "dis-cus-sion", answer: "/ʃən/",
            choices: ["/sɪon/","/ʃən/","/ʒən/","/tʃən/"],
            hint: "💬 discussion，-ssion 唸 /ʃən/！", emoji: "💬", search: "discussion talk" }
        ]
      }
    ],
    story: {
      title: "🪄 The Magician's Vacation",
      pages: [
        { en: "A magician went on vacation to a station.", zh: "一位魔術師到車站度假。", highlights: ["magician","vacation","station"] },
        { en: "The discussion at the nation was a tradition.", zh: "那個國家的討論是一種傳統。", highlights: ["discussion","nation","tradition"] },
        { en: "The musician asked for permission to take action.", zh: "音樂家請求許可採取行動。", highlights: ["musician","permission","action"] },
        { en: "The technician's profession was full of motion!", zh: "技術員的職業充滿了動作！", highlights: ["technician","profession","motion"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  CHAPTER 17：kn / st / wr 的發音
  // ─────────────────────────────────────────
  {
    id: 17,
    title: "無聲子音：kn、st、wr",
    emoji: "🤫",
    color: 1,
    topics: [
      {
        name: "kn（n不發音）、st（t不發音）、wr（w不發音）",
        rules: [
          "在下列這些字串裡，其中一個子音是無聲的",
          "口訣：有些組合看形象，高矮胖瘦不一樣，誰高誰胖誰不發音",
          "<b>kn：k 不發音</b>，只唸 n：knee、know、knife、knock、knowledge",
          "<b>st：t 不發音</b>（特定位置）：castle、listen、whistle、Christmas",
          "<b>wr：w 不發音</b>，只唸 r：wrap、write、wrist、wrong",
          "記憶：kn 像「跪下」（knee），k 低頭不出聲；wr 像「扭曲」，w 被扭掉了聲音"
        ],
        words: [
          { word: "knee",      highlight: "kn", zh: "膝蓋（k不發音）", emoji: "🦵", search: "knee" },
          { word: "know",      highlight: "kn", zh: "知道（k不發音）", emoji: "💡", search: "know idea" },
          { word: "knife",     highlight: "kn", zh: "刀（k不發音）", emoji: "🔪", search: "knife" },
          { word: "knock",     highlight: "kn", zh: "敲（k不發音）", emoji: "🚪", search: "knock door" },
          { word: "knowledge", highlight: "kn", zh: "知識（k不發音）", emoji: "📚", search: "knowledge book" },
          { word: "castle",    highlight: "st", zh: "城堡（t不發音）", emoji: "🏰", search: "castle" },
          { word: "listen",    highlight: "st", zh: "聽（t不發音）", emoji: "👂", search: "listen" },
          { word: "whistle",   highlight: "st", zh: "哨子（t不發音）", emoji: "🎵", search: "whistle" },
          { word: "Christmas", highlight: "st", zh: "聖誕節（t不發音）", emoji: "🎄", search: "christmas" },
          { word: "wrap",      highlight: "wr", zh: "包裝（w不發音）", emoji: "🎁", search: "wrap gift" },
          { word: "write",     highlight: "wr", zh: "寫（w不發音）", emoji: "✍️", search: "write pen" },
          { word: "wrist",     highlight: "wr", zh: "手腕（w不發音）", emoji: "⌚", search: "wrist watch" },
          { word: "wrong",     highlight: "wr", zh: "錯誤（w不發音）", emoji: "❌", search: "wrong error" }
        ],
        quiz: [
          { word: "knife", speak: "knife", displayWord: "knife", answer: "k 不發音，唸 /n/",
            choices: ["k=/k/，唸/kn/","k 不發音，唸 /n/","k=/tʃ/","k=/g/"],
            hint: "🔪 knife，kn 中 k 不發音！只唸 /naɪf/！", emoji: "🔪", search: "knife" },
          { word: "write", speak: "write", displayWord: "write", answer: "w 不發音，唸 /r/",
            choices: ["w=/w/，唸/wr/","w 不發音，唸 /r/","w=/v/","w=/b/"],
            hint: "✍️ write，wr 中 w 不發音！只唸 /raɪt/！", emoji: "✍️", search: "write pen" },
          { word: "listen", speak: "listen", displayWord: "listen", answer: "t 不發音",
            choices: ["t 完全唸出","t 不發音","t=/d/","t=/s/"],
            hint: "👂 listen，st 中 t 不發音！唸 /lɪsən/！", emoji: "👂", search: "listen" }
        ]
      }
    ],
    story: {
      title: "🏰 The Knight Who Knew Wrong",
      pages: [
        { en: "A knight with a knife knocked on the castle.", zh: "一位手持刀劍的騎士敲打著城堡。", highlights: ["knight","knife","knocked","castle"] },
        { en: "He knew it was wrong to wrap the wrist.", zh: "他知道包住手腕是錯的。", highlights: ["knew","wrong","wrap","wrist"] },
        { en: "He listened and heard a whistle from the wall.", zh: "他聆聽著，聽到牆上傳來一聲哨音。", highlights: ["listened","whistle","wall"] },
        { en: "With knowledge, he wrote: 'Write, not wrong!'", zh: "憑著知識，他寫道：「要對，不要錯！」", highlights: ["knowledge","wrote","Write","wrong"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  CHAPTER 18：c / g 的例外組合
  // ─────────────────────────────────────────
  {
    id: 18,
    title: "c 和 g 的例外組合",
    emoji: "🔄",
    color: 2,
    topics: [
      {
        name: "c /s/ 和 ge/dge /dʒ/ 和 g /dʒ/",
        rules: [
          "字母 c 除了 /k/、字母 g 除了 /g/ 之外都另有不同的發音！",
          "口訣：c 和 g 很奇怪，遇 i e y 要變換。c 發 [k] 是常識，遇 i e y 要變 [s]。g 發 [g] 不用記，遇 i e y 要變 [dʒ]",
          "<b>c /s/</b>（c 後面接 i、e、y）：city、cider、circle、cinema、cinnamon、cycle、recycle、motorcycle",
          "<b>ge/dge /dʒ/</b>：age、bridge、cage、edge、gentle、judge、large、merge、surge",
          "<b>g /dʒ/</b>（g 後面接 i、e、y）：energy、engine、giant、ginger、gym、giraffe、gypsy"
        ],
        words: [
          { word: "city",       highlight: "c",   zh: "城市（c+i→/s/）", emoji: "🏙️", search: "city" },
          { word: "circle",     highlight: "c",   zh: "圓圈（c+i→/s/）", emoji: "⭕", search: "circle" },
          { word: "cinema",     highlight: "c",   zh: "電影院（c+i→/s/）", emoji: "🎬", search: "cinema" },
          { word: "cycle",      highlight: "c",   zh: "循環（c+y→/s/）", emoji: "🔄", search: "cycle" },
          { word: "recycle",    highlight: "c",   zh: "回收（c+y→/s/）", emoji: "♻️", search: "recycle" },
          { word: "age",        highlight: "ge",  zh: "年齡（ge=/dʒ/）", emoji: "🎂", search: "age birthday" },
          { word: "bridge",     highlight: "dge", zh: "橋（dge=/dʒ/）", emoji: "🌉", search: "bridge" },
          { word: "cage",       highlight: "ge",  zh: "籠子（ge=/dʒ/）", emoji: "🐦", search: "cage bird" },
          { word: "edge",       highlight: "dge", zh: "邊緣（dge=/dʒ/）", emoji: "🔪", search: "edge knife" },
          { word: "large",      highlight: "ge",  zh: "大的（ge=/dʒ/）", emoji: "🐘", search: "large elephant" },
          { word: "energy",     highlight: "g",   zh: "能量（g+y→/dʒ/）", emoji: "⚡", search: "energy lightning" },
          { word: "engine",     highlight: "g",   zh: "引擎（g+i→/dʒ/）", emoji: "🚂", search: "engine train" },
          { word: "giant",      highlight: "g",   zh: "巨人（g+i→/dʒ/）", emoji: "🧌", search: "giant" },
          { word: "gym",        highlight: "g",   zh: "健身房（g+y→/dʒ/）", emoji: "🏋️", search: "gym" },
          { word: "giraffe",    highlight: "g",   zh: "長頸鹿（g+i→/dʒ/）", emoji: "🦒", search: "giraffe" }
        ],
        quiz: [
          { word: "city", speak: "city", displayWord: "city", answer: "c+i → /s/",
            choices: ["c=/k/ 硬音","c+i → /s/","c=/tʃ/","c=/sh/"],
            hint: "🏙️ city，c 後面是 i，唸軟音 /s/！", emoji: "🏙️", search: "city" },
          { word: "gym", speak: "gym", displayWord: "gym", answer: "g+y → /dʒ/",
            choices: ["g=/g/ 硬音","g+y → /dʒ/","g=/zh/","g=/k/"],
            hint: "🏋️ gym，g 後面是 y，唸軟音 /dʒ/！", emoji: "🏋️", search: "gym" },
          { word: "bridge", speak: "bridge", displayWord: "bridge", answer: "dge → /dʒ/",
            choices: ["dge=/dg/","dge → /dʒ/","dge=/j/","dge=/g/"],
            hint: "🌉 bridge，dge 整串唸 /dʒ/！", emoji: "🌉", search: "bridge" }
        ]
      }
    ],
    story: {
      title: "🦒 The Giant Giraffe",
      pages: [
        { en: "A giant giraffe in the city went to the gym.", zh: "城市裡一隻巨大的長頸鹿去了健身房。", highlights: ["giant","giraffe","city","gym"] },
        { en: "It had the energy to cycle across the bridge.", zh: "牠有能量騎車穿越那座橋。", highlights: ["energy","cycle","bridge"] },
        { en: "At the edge of a large cage, it found a cinema.", zh: "在一個大籠子的邊緣，牠發現了一家電影院。", highlights: ["edge","large","cage","cinema"] },
        { en: "The engine of the circle was full of age!", zh: "那個圓圈的引擎充滿了歲月！", highlights: ["engine","circle","age"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  CHAPTER 19：無聲字
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
          "以下這些子音是無聲的，這些並沒有規律，所以建議也是直接記單字！",
          "<b>b 不發音</b>（通常在 mb 組合）：bomb、comb、dumb、lamb、climb",
          "<b>h 不發音</b>（特定字）：oh、hour、honor、honest",
          "<b>l 不發音</b>（特定字）：calm、half、talk、walk",
          "<b>t 不發音</b>（特定字）：ballet、often、mortgage",
          "記憶：沒有規律，直接背！遇到不認識的字，先試著唸，不對就查字典"
        ],
        words: [
          { word: "bomb",     highlight: "b",  zh: "炸彈（b不發音）", emoji: "💣", search: "bomb" },
          { word: "comb",     highlight: "b",  zh: "梳子（b不發音）", emoji: "🪮", search: "comb hair" },
          { word: "dumb",     highlight: "b",  zh: "啞的（b不發音）", emoji: "🤐", search: "dumb silent" },
          { word: "lamb",     highlight: "b",  zh: "小羊（b不發音）", emoji: "🐑", search: "lamb sheep" },
          { word: "climb",    highlight: "b",  zh: "爬（b不發音）", emoji: "🧗", search: "climb mountain" },
          { word: "oh",       highlight: "h",  zh: "喔（h不發音）", emoji: "😮", search: "oh surprised" },
          { word: "hour",     highlight: "h",  zh: "小時（h不發音）", emoji: "⏰", search: "hour clock" },
          { word: "honor",    highlight: "h",  zh: "榮耀（h不發音）", emoji: "🏅", search: "honor medal" },
          { word: "honest",   highlight: "h",  zh: "誠實（h不發音）", emoji: "💯", search: "honest truth" },
          { word: "calm",     highlight: "l",  zh: "平靜（l不發音）", emoji: "😌", search: "calm peaceful" },
          { word: "half",     highlight: "l",  zh: "一半（l不發音）", emoji: "½", search: "half fraction" },
          { word: "talk",     highlight: "l",  zh: "說話（l不發音）", emoji: "💬", search: "talk speak" },
          { word: "walk",     highlight: "l",  zh: "走路（l不發音）", emoji: "🚶", search: "walk" },
          { word: "ballet",   highlight: "t",  zh: "芭蕾（t不發音）", emoji: "🩰", search: "ballet dance" },
          { word: "often",    highlight: "t",  zh: "常常（t不發音）", emoji: "🔁", search: "often repeat" }
        ],
        quiz: [
          { word: "lamb", speak: "lamb", displayWord: "lamb", answer: "b 不發音",
            choices: ["b=/b/","b 不發音","b=/m/","b=/p/"],
            hint: "🐑 lamb（小羊），mb 中 b 不發音！唸 /læm/！", emoji: "🐑", search: "lamb sheep" },
          { word: "walk", speak: "walk", displayWord: "walk", answer: "l 不發音",
            choices: ["l=/l/","l 不發音","l=/w/","l=/r/"],
            hint: "🚶 walk（走路），al 中 l 不發音！唸 /wɔːk/！", emoji: "🚶", search: "walk" },
          { word: "hour", speak: "hour", displayWord: "hour", answer: "h 不發音",
            choices: ["h=/h/","h 不發音","h=/aʊ/","h=/w/"],
            hint: "⏰ hour（小時），h 不發音！唸 /aʊər/！", emoji: "⏰", search: "hour clock" }
        ]
      }
    ],
    story: {
      title: "🐑 The Honest Lamb",
      pages: [
        { en: "An honest lamb could talk and walk.", zh: "一隻誠實的小羊會說話和走路。", highlights: ["honest","lamb","talk","walk"] },
        { en: "Often it would climb and stay calm for an hour.", zh: "牠常常攀爬，並平靜地待上一個小時。", highlights: ["Often","climb","calm","hour"] },
        { en: "Half of the lamb's honor was being dumb when needed.", zh: "小羊一半的榮耀是在需要時保持沉默。", highlights: ["Half","honor","dumb"] },
        { en: "Oh! The bomb was just a comb!", zh: "喔！那個炸彈只是一把梳子！", highlights: ["Oh","bomb","comb"] }
      ]
    }
  },

  // ─────────────────────────────────────────
  //  CHAPTER 20：變音
  // ─────────────────────────────────────────
  {
    id: 20,
    title: "變音（s 後的子音弱化）",
    emoji: "🔀",
    color: 4,
    topics: [
      {
        name: "s+k→g、s+p→b、s+t→d",
        rules: [
          "在字母中發 /k/、/p/、/t/ 的音之前的字母是 s，則其發音變為有聲",
          "理由是比較容易發音（自然連音現象）",
          "<b>s[k] → s[g]</b>：ski、sky、skin、skill、skate、sketch、scare、school",
          "<b>s[p] → s[b]</b>：spa、spy、space、spell、speak、spicy、spoon、sport",
          "<b>s[t] → s[d]</b>：star、stay、stair、stock、store、study、stand、still、style",
          "口訣：S 家族有魔法，詞尾輕輕讀，詞首就淡化"
        ],
        words: [
          { word: "ski",    highlight: "sk", zh: "滑雪（sk→sg音）", emoji: "⛷️", search: "ski skiing" },
          { word: "sky",    highlight: "sk", zh: "天空（sk→sg音）", emoji: "🌤️", search: "sky" },
          { word: "skin",   highlight: "sk", zh: "皮膚（sk→sg音）", emoji: "🧴", search: "skin care" },
          { word: "skill",  highlight: "sk", zh: "技能（sk→sg音）", emoji: "⭐", search: "skill talent" },
          { word: "skate",  highlight: "sk", zh: "溜冰（sk→sg音）", emoji: "⛸️", search: "skate ice" },
          { word: "school", highlight: "sk", zh: "學校（sk→sg音）", emoji: "🏫", search: "school" },
          { word: "spa",    highlight: "sp", zh: "溫泉（sp→sb音）", emoji: "♨️", search: "spa" },
          { word: "space",  highlight: "sp", zh: "太空（sp→sb音）", emoji: "🚀", search: "space" },
          { word: "spell",  highlight: "sp", zh: "拼字（sp→sb音）", emoji: "✨", search: "spell magic" },
          { word: "speak",  highlight: "sp", zh: "說話（sp→sb音）", emoji: "💬", search: "speak" },
          { word: "spoon",  highlight: "sp", zh: "湯匙（sp→sb音）", emoji: "🥄", search: "spoon" },
          { word: "sport",  highlight: "sp", zh: "運動（sp→sb音）", emoji: "⚽", search: "sport" },
          { word: "star",   highlight: "st", zh: "星星（st→sd音）", emoji: "⭐", search: "star" },
          { word: "stay",   highlight: "st", zh: "留下（st→sd音）", emoji: "🏠", search: "stay home" },
          { word: "study",  highlight: "st", zh: "讀書（st→sd音）", emoji: "📚", search: "study books" }
        ],
        quiz: [
          { word: "sky", speak: "sky", displayWord: "sky", answer: "sk → 聽起來像 sg",
            choices: ["sk → 聽起來像 sk","sk → 聽起來像 sg","sk → 聽起來像 sh","sk → 聽起來像 str"],
            hint: "🌤️ sky，s 後面的 k 弱化，聽起來像 /sg/！", emoji: "🌤️", search: "sky" },
          { word: "sport", speak: "sport", displayWord: "sport", answer: "sp → 聽起來像 sb",
            choices: ["sp → 聽起來像 sp","sp → 聽起來像 sb","sp → 聽起來像 sf","sp → 聽起來像 sw"],
            hint: "⚽ sport，s 後面的 p 弱化，聽起來像 /sb/！", emoji: "⚽", search: "sport" },
          { word: "study", speak: "study", displayWord: "study", answer: "st → 聽起來像 sd",
            choices: ["st → 聽起來像 st","st → 聽起來像 sd","st → 聽起來像 sh","st → 聽起來像 sn"],
            hint: "📚 study，s 後面的 t 弱化，聽起來像 /sd/！", emoji: "📚", search: "study books" }
        ]
      }
    ],
    story: {
      title: "⭐ The Star Student",
      pages: [
        { en: "A star student with skill went to ski in the sky.", zh: "一個有技能的明星學生去天空滑雪。", highlights: ["star","student","skill","ski","sky"] },
        { en: "She could speak, spell, and play sport.", zh: "她會說話、拼字和運動。", highlights: ["speak","spell","sport"] },
        { en: "She stayed at school to study with a spoon of spa water.", zh: "她留在學校讀書，手邊有一匙溫泉水。", highlights: ["stayed","school","study","spoon","spa"] },
        { en: "In space, a star said: 'Stay still and keep your skill!'", zh: "在太空中，一顆星說：「保持靜止，維持你的技能！」", highlights: ["space","star","Stay","still","skill"] }
      ]
    }
  }

]; // end LESSONS

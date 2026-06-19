// Oxford Phonics World Level 4 — 子音叢 + 特殊音組
const LESSONS = [
  {
    id: 301, title: "L家族 + R家族拼音", emoji: "🔗", color: 0,
    links: [{ url: "https://elt.oup.com/student/oxfordphonicsworld/level04/watch?cc=tw&selLanguage=zh", icon: "🎬", title: "Oxford Phonics World Level 4", desc: "點此觀看 Level 4 影片練習" }],
    topics: [
      {
        name: "bl / cl / fl / gl / pl / sl",
        soundBadge: "L家族", soundLabel: "B C F G P S + L",
        rules: ["L 家族：兩個音快速連唸", "<b>bl</b>、<b>cl</b>、<b>fl</b>、<b>gl</b>、<b>pl</b>、<b>sl</b>"],
        words: [
          { word: "black",  highlight: "bl", zh: "黑色", emoji: "🖤", search: "black", phonemes: ["bl","a","ck"], phonemesSpeak: [null, "at", null] },
          { word: "blade",  highlight: "bl", zh: "刀刃", emoji: "🔪", search: "blade knife", phonemes: ["bl","a","de"], phonemesSpeak: [null, null, null, ""] },
          { word: "blend",  highlight: "bl", zh: "混合", emoji: "🫙", search: "blend mix", phonemes: ["bl","e","nd"], phonemesSpeak: [null, "Ed", null] },
          { word: "clap",   highlight: "cl", zh: "拍手", emoji: "👏", search: "clap hands", phonemes: ["cl","a","p"], phonemesSpeak: [null, "at", null] },
          { word: "clay",   highlight: "cl", zh: "黏土", emoji: "🏺", search: "clay pottery", phonemes: ["cl","ay"] },
          { word: "clock",  highlight: "cl", zh: "時鐘", emoji: "🕐", search: "clock", phonemes: ["cl","o","ck"], phonemesSpeak: [null, "on", null] },
          { word: "flame",  highlight: "fl", zh: "火焰", emoji: "🔥", search: "flame fire", phonemes: ["fl","a","me"], phonemesSpeak: [null, null, null, ""] },
          { word: "flat",   highlight: "fl", zh: "平的", emoji: "📐", search: "flat surface", phonemes: ["fl","a","t"], phonemesSpeak: [null, "at", null] },
          { word: "flock",  highlight: "fl", zh: "群", emoji: "🐑", search: "flock sheep", phonemes: ["fl","o","ck"], phonemesSpeak: [null, "on", null] },
          { word: "glad",   highlight: "gl", zh: "高興", emoji: "😊", search: "glad happy", phonemes: ["gl","a","d"], phonemesSpeak: [null, "at", null] },
          { word: "glue",   highlight: "gl", zh: "膠水", emoji: "🔑", search: "glue stick", phonemes: ["gl","ue"] },
          { word: "place",  highlight: "pl", zh: "地方", emoji: "📍", search: "place location", phonemes: ["pl","a","ce"], phonemesSpeak: [null, null, null, ""] },
          { word: "plane",  highlight: "pl", zh: "飛機", emoji: "✈️", search: "airplane", phonemes: ["pl","a","ne"], phonemesSpeak: [null, null, null, ""] },
          { word: "slam",   highlight: "sl", zh: "猛關", emoji: "🚪", search: "slam door", phonemes: ["sl","a","m"], phonemesSpeak: [null, "at", null] },
          { word: "slide",  highlight: "sl", zh: "滑梯", emoji: "🛝", search: "slide playground", phonemes: ["sl","i","de"], phonemesSpeak: [null, null, null, ""] }
        ],
        quiz: [
          { word: "black", speak: "black", displayWord: "black", answer: "/bl/",
            choices: ["/b/+/l/","/bl/","/kl/","/fl/"],
            hint: "🖤 black，bl 快速連唸 /bl/！", emoji: "🖤", search: "black" },
          { word: "clap", speak: "clap", displayWord: "clap", answer: "/kl/",
            choices: ["/bl/","/kl/","/fl/","/sl/"],
            hint: "👏 clap，cl 快速連唸 /kl/！", emoji: "👏", search: "clap hands" }
        ]
      },
      {
        name: "br / cr / dr / fr / gr / pr / tr",
        soundBadge: "R家族", soundLabel: "B C D F G P T + R",
        rules: ["R 家族：兩個音快速連唸", "<b>br</b>、<b>cr</b>、<b>dr</b>、<b>fr</b>、<b>gr</b>、<b>pr</b>、<b>tr</b>"],
        words: [
          { word: "braid",  highlight: "br", zh: "辮子", emoji: "💇", search: "braid hair", phonemes: ["br","ai","d"] },
          { word: "brave",  highlight: "br", zh: "勇敢", emoji: "🦁", search: "brave lion", phonemes: ["br","a","ve"], phonemesSpeak: [null, "at", null, ""] },
          { word: "crab",   highlight: "cr", zh: "螃蟹", emoji: "🦀", search: "crab", phonemes: ["cr","a","b"], phonemesSpeak: [null, "at", null] },
          { word: "crane",  highlight: "cr", zh: "鶴/起重機", emoji: "🦢", search: "crane bird", phonemes: ["cr","a","ne"], phonemesSpeak: [null, null, null, ""] },
          { word: "drag",   highlight: "dr", zh: "拖", emoji: "🏋️", search: "drag pull", phonemes: ["dr","a","g"], phonemesSpeak: [null, "at", null] },
          { word: "drip",   highlight: "dr", zh: "滴水", emoji: "💧", search: "drip water", phonemes: ["dr","i","p"], phonemesSpeak: [null, "it", null] },
          { word: "frog",   highlight: "fr", zh: "青蛙", emoji: "🐸", search: "frog", phonemes: ["fr","o","g"], phonemesSpeak: [null, "on", null] },
          { word: "frost",  highlight: "fr", zh: "霜", emoji: "❄️", search: "frost cold", phonemes: ["fr","o","st"], phonemesSpeak: [null, "on", null] },
          { word: "grape",  highlight: "gr", zh: "葡萄", emoji: "🍇", search: "grapes", phonemes: ["gr","a","pe"], phonemesSpeak: [null, null, null, ""] },
          { word: "grass",  highlight: "gr", zh: "草", emoji: "🌿", search: "grass", phonemes: ["gr","a","ss"], phonemesSpeak: [null, "at", null] },
          { word: "pray",   highlight: "pr", zh: "祈禱", emoji: "🙏", search: "pray hands", phonemes: ["pr","ay"] },
          { word: "press",  highlight: "pr", zh: "按壓", emoji: "🖱️", search: "press button", phonemes: ["pr","e","ss"], phonemesSpeak: [null, "Ed", null] },
          { word: "track",  highlight: "tr", zh: "軌道", emoji: "🛤️", search: "train track", phonemes: ["tr","a","ck"], phonemesSpeak: [null, "at", null] },
          { word: "trade",  highlight: "tr", zh: "貿易", emoji: "📦", search: "trade", phonemes: ["tr","a","de"], phonemesSpeak: [null, null, null, ""] },
          { word: "truck",  highlight: "tr", zh: "卡車", emoji: "🚛", search: "truck", phonemes: ["tr","u","ck"], phonemesSpeak: [null, "up", null] }
        ],
        quiz: [
          { word: "frog", speak: "frog", displayWord: "frog", answer: "/fr/",
            choices: ["/br/","/cr/","/dr/","/fr/"],
            hint: "🐸 frog，fr 快速連唸 /fr/！", emoji: "🐸", search: "frog" },
          { word: "truck", speak: "truck", displayWord: "truck", answer: "/tr/",
            choices: ["/br/","/gr/","/pr/","/tr/"],
            hint: "🚛 truck，tr 快速連唸 /tr/！", emoji: "🚛", search: "truck" }
        ]
      }
    ],
    story: {
      title: "🐸 The Brave Frog",
      pages: [
        { en: "A brave frog grabbed a grape and a flat blade.", zh: "一隻勇敢的青蛙抓了一顆葡萄和一片平刀。", highlights: ["brave","frog","grape","flat","blade"] },
        { en: "It slid down the slide and clapped with glee.", zh: "牠滑下滑梯，高興地鼓掌。", highlights: ["slid","slide","clapped"] },
        { en: "The crane placed the clay on the truck track.", zh: "起重機把黏土放在卡車軌道上。", highlights: ["crane","placed","clay","truck","track"] },
        { en: "They prayed for frost — and got a black blade of grass!", zh: "他們祈求霜凍——卻得到了一片黑草！", highlights: ["prayed","frost","black","grass"] }
      ]
    }
  },
  {
    id: 302, title: "sm/sn/sp/sw/st + sh/ch/tch/ph/wh", emoji: "🔠", color: 1,
    topics: [
      {
        name: "sm / sn / sp / sw / st",
        soundBadge: "S家族", soundLabel: "S + M N P W T",
        rules: [
          "<b>sm</b>：smell、smile、smoke、small",
          "<b>sn</b>：snap、snow、snake、sneeze",
          "<b>sp</b>：spin、spot、speak、spoon",
          "<b>sw</b>：swim、swing、sweet、swan",
          "<b>st</b>：stop、star、step、stone"
        ],
        words: [
          { word: "smell",  highlight: "sm", zh: "聞/氣味", emoji: "👃", search: "smell nose", phonemes: ["sm","e","ll"], phonemesSpeak: [null, "Ed", null] },
          { word: "smile",  highlight: "sm", zh: "微笑", emoji: "😊", search: "smile", phonemes: ["sm","i","le"], phonemesSpeak: [null, null, null, ""] },
          { word: "smoke",  highlight: "sm", zh: "煙", emoji: "💨", search: "smoke", phonemes: ["sm","o","ke"], phonemesSpeak: [null, null, null, ""] },
          { word: "snap",   highlight: "sn", zh: "啪聲", emoji: "🫰", search: "snap fingers", phonemes: ["sn","a","p"], phonemesSpeak: [null, "at", null] },
          { word: "snake",  highlight: "sn", zh: "蛇", emoji: "🐍", search: "snake", phonemes: ["sn","a","ke"], phonemesSpeak: [null, null, null, ""] },
          { word: "snow",   highlight: "sn", zh: "雪", emoji: "❄️", search: "snow", phonemes: ["sn","ow"] },
          { word: "spin",   highlight: "sp", zh: "旋轉", emoji: "🌀", search: "spin rotate", phonemes: ["sp","i","n"], phonemesSpeak: [null, "it", null] },
          { word: "spot",   highlight: "sp", zh: "斑點/地點", emoji: "📍", search: "spot location", phonemes: ["sp","o","t"], phonemesSpeak: [null, "on", null] },
          { word: "swim",   highlight: "sw", zh: "游泳", emoji: "🏊", search: "swim", phonemes: ["sw","i","m"], phonemesSpeak: [null, "it", null] },
          { word: "swing",  highlight: "sw", zh: "盪鞦韆", emoji: "🛝", search: "swing playground", phonemes: ["sw","i","ng"], phonemesSpeak: [null, "it", null] },
          { word: "sweet",  highlight: "sw", zh: "甜的", emoji: "🍬", search: "sweet candy", phonemes: ["sw","ee","t"] },
          { word: "star",   highlight: "st", zh: "星星", emoji: "⭐", search: "star", phonemes: ["st","ar"] },
          { word: "step",   highlight: "st", zh: "步驟/步伐", emoji: "👣", search: "step footstep", phonemes: ["st","e","p"], phonemesSpeak: [null, "Ed", null] },
          { word: "stone",  highlight: "st", zh: "石頭", emoji: "🪨", search: "stone rock", phonemes: ["st","o","ne"], phonemesSpeak: [null, null, null, ""] },
          { word: "stop",   highlight: "st", zh: "停止", emoji: "🛑", search: "stop sign", phonemes: ["st","o","p"], phonemesSpeak: [null, "on", null] }
        ],
        quiz: [
          { word: "smile", speak: "smile", displayWord: "smile", answer: "/sm/",
            choices: ["/sm/","/sn/","/sp/","/st/"],
            hint: "😊 smile，sm 快速連唸 /sm/！", emoji: "😊", search: "smile" },
          { word: "swim", speak: "swim", displayWord: "swim", answer: "/sw/",
            choices: ["/sm/","/sn/","/sw/","/st/"],
            hint: "🏊 swim，sw 快速連唸 /sw/！", emoji: "🏊", search: "swim" }
        ]
      },
      {
        name: "sh / ch / tch / ph / wh + th",
        soundBadge: "sh ch tch ph wh", soundLabel: "二合字音組合",
        rules: [
          "<b>sh /ʃ/</b>：ship、shop、fish、brush",
          "<b>ch /tʃ/</b>：chair、cheese、lunch、bench",
          "<b>tch /tʃ/</b>：短母音後：catch、match、fetch、witch",
          "<b>ph /f/</b>：phone、photo、graph",
          "<b>wh /w/</b>：when、what、where、which、whale",
          "<b>th /θ/ 或 /ð/</b>：think、this、they、bath"
        ],
        words: [
          { word: "ship",   highlight: "sh", zh: "船（sh=/ʃ/）", emoji: "🚢", search: "ship", phonemes: ["sh","i","p"], phonemesSpeak: [null, "it", null] },
          { word: "shop",   highlight: "sh", zh: "商店（sh=/ʃ/）", emoji: "🏪", search: "shop store", phonemes: ["sh","o","p"], phonemesSpeak: [null, "on", null] },
          { word: "brush",  highlight: "sh", zh: "刷子（sh=/ʃ/）", emoji: "🖌️", search: "brush paint", phonemes: ["br","u","sh"], phonemesSpeak: [null, "up", null] },
          { word: "bench",  highlight: "ch", zh: "長凳（ch=/tʃ/）", emoji: "🪑", search: "bench seat", phonemes: ["b","e","nch"], phonemesSpeak: [null, "Ed", null] },
          { word: "lunch",  highlight: "ch", zh: "午餐（ch=/tʃ/）", emoji: "🥗", search: "lunch meal", phonemes: ["l","u","nch"], phonemesSpeak: [null, "up", null] },
          { word: "catch",  highlight: "tch", zh: "抓（tch=/tʃ/）", emoji: "🫳", search: "catch ball", phonemes: ["c","a","tch"], phonemesSpeak: [null, "at", null] },
          { word: "fetch",  highlight: "tch", zh: "去拿（tch=/tʃ/）", emoji: "🐕", search: "fetch dog", phonemes: ["f","e","tch"], phonemesSpeak: [null, "Ed", null] },
          { word: "match",  highlight: "tch", zh: "配對（tch=/tʃ/）", emoji: "🎯", search: "match game", phonemes: ["m","a","tch"], phonemesSpeak: [null, "at", null] },
          { word: "witch",  highlight: "tch", zh: "女巫（tch=/tʃ/）", emoji: "🧙‍♀️", search: "witch", phonemes: ["w","i","tch"], phonemesSpeak: [null, "it", null] },
          { word: "graph",  highlight: "ph", zh: "圖表（ph=/f/）", emoji: "📊", search: "graph chart", phonemes: ["gr","a","ph"], phonemesSpeak: [null, "at", null] },
          { word: "whale",  highlight: "wh", zh: "鯨魚（wh=/w/）", emoji: "🐋", search: "whale", phonemes: ["wh","a","le"], phonemesSpeak: [null, null, null, ""] },
          { word: "wheel",  highlight: "wh", zh: "輪子（wh=/w/）", emoji: "🎡", search: "wheel", phonemes: ["wh","ee","l"] },
          { word: "think",  highlight: "th", zh: "想（th清音/θ/）", emoji: "🤔", search: "think", phonemes: ["th","i","nk"], phonemesSpeak: [null, "it", null] },
          { word: "this",   highlight: "th", zh: "這個（th濁音/ð/）", emoji: "☝️", search: "this here", phonemes: ["th","i","s"], phonemesSpeak: [null, "it", null] },
          { word: "bath",   highlight: "th", zh: "洗澡（th清音/θ/）", emoji: "🛁", search: "bath", phonemes: ["b","a","th"], phonemesSpeak: [null, "at", null] }
        ],
        quiz: [
          { word: "catch", speak: "catch", displayWord: "ca__", answer: "tch（短母音後）",
            choices: ["ch","tch（短母音後）","c","k"],
            hint: "🫳 catch，短母音 a 後面用 tch！", emoji: "🫳", search: "catch ball" },
          { word: "whale", speak: "whale", displayWord: "whale", answer: "/w/（wh）",
            choices: ["/w/（wh）","/h/（特例）","/hw/","/v/"],
            hint: "🐋 whale，wh 唸 /w/！", emoji: "🐋", search: "whale" }
        ]
      }
    ],
    story: {
      title: "🐋 The Whale and the Ship",
      pages: [
        { en: "A whale swam to a ship and gave a smile.", zh: "一條鯨魚游向一艘船並微笑。", highlights: ["whale","swam","ship","smile"] },
        { en: "The crew stopped to catch a spot of sunshine.", zh: "船員停下來抓住一縷陽光。", highlights: ["stopped","catch","spot"] },
        { en: "They had lunch on the bench — sweet and smooth.", zh: "他們在長凳上吃午餐——甜蜜而順滑。", highlights: ["lunch","bench","sweet"] },
        { en: "This whale can fetch, match, and think!", zh: "這條鯨魚會去拿、配對和思考！", highlights: ["whale","fetch","match","think"] }
      ]
    }
  },
  {
    id: 303, title: "ck/qu/ng/nk + nd/nt/lt/mp/sk/sc", emoji: "🔤", color: 2,
    topics: [
      {
        name: "ck / qu / ng / nk",
        soundBadge: "ck qu ng nk", soundLabel: "特殊音組",
        rules: [
          "<b>ck /k/</b>：短母音後用，例：back、duck、sock、kick、neck",
          "<b>qu /kw/</b>：q 永遠跟 u，唸 /kw/，例：queen、quick、quit",
          "<b>ng /ŋ/</b>：鼻音，氣從鼻子出，例：sing、ring、king、long",
          "<b>nk /ŋk/</b>：ng + k，例：bank、think、drink、pink"
        ],
        words: [
          { word: "back",  highlight: "ck", zh: "背/後面", emoji: "🎒", search: "backpack", phonemes: ["b","a","ck"], phonemesSpeak: [null, "at", null] },
          { word: "clock", highlight: "ck", zh: "時鐘", emoji: "🕐", search: "clock", phonemes: ["cl","o","ck"], phonemesSpeak: [null, "on", null] },
          { word: "duck",  highlight: "ck", zh: "鴨子", emoji: "🦆", search: "duck", phonemes: ["d","u","ck"], phonemesSpeak: [null, "up", null] },
          { word: "quick", highlight: "qu", zh: "快速", emoji: "⚡", search: "quick fast", phonemes: ["qu","i","ck"], phonemesSpeak: [null, "it", null] },
          { word: "queen", highlight: "qu", zh: "女王", emoji: "👸", search: "queen crown", phonemes: ["qu","ee","n"] },
          { word: "quiet", highlight: "qu", zh: "安靜", emoji: "🤫", search: "quiet shush", phonemes: ["qu","i","et"], phonemesSpeak: [null, null, null, null] },
          { word: "bring", highlight: "ng", zh: "帶來", emoji: "🎁", search: "bring gift", phonemes: ["br","i","ng"], phonemesSpeak: [null, "it", null] },
          { word: "king",  highlight: "ng", zh: "國王", emoji: "👑", search: "king", phonemes: ["k","i","ng"], phonemesSpeak: [null, "it", null] },
          { word: "long",  highlight: "ng", zh: "長的", emoji: "📏", search: "long ruler", phonemes: ["l","o","ng"], phonemesSpeak: [null, "on", null] },
          { word: "ring",  highlight: "ng", zh: "戒指/鈴", emoji: "💍", search: "ring", phonemes: ["r","i","ng"], phonemesSpeak: [null, "it", null] },
          { word: "song",  highlight: "ng", zh: "歌曲", emoji: "🎵", search: "song music", phonemes: ["s","o","ng"], phonemesSpeak: [null, "on", null] },
          { word: "bank",  highlight: "nk", zh: "銀行", emoji: "🏦", search: "bank", phonemes: ["b","a","nk"], phonemesSpeak: [null, "at", null] },
          { word: "drink", highlight: "nk", zh: "喝", emoji: "🥤", search: "drink", phonemes: ["dr","i","nk"], phonemesSpeak: [null, "it", null] },
          { word: "pink",  highlight: "nk", zh: "粉紅色", emoji: "🩷", search: "pink color", phonemes: ["p","i","nk"], phonemesSpeak: [null, "it", null] },
          { word: "think", highlight: "nk", zh: "想（th+ink）", emoji: "🤔", search: "think", phonemes: ["th","i","nk"], phonemesSpeak: [null, "it", null] }
        ],
        quiz: [
          { word: "duck", speak: "duck", displayWord: "du__", answer: "ck（短母音後）",
            choices: ["k","ck（短母音後）","c","ch"],
            hint: "🦆 duck，短母音 u 後面用 ck！", emoji: "🦆", search: "duck" },
          { word: "queen", speak: "queen", displayWord: "queen", answer: "qu → /kw/",
            choices: ["qu → /k/","qu → /kw/","qu → /w/","qu → /kj/"],
            hint: "👸 queen，qu 唸 /kw/！", emoji: "👸", search: "queen crown" },
          { word: "ring", speak: "ring", displayWord: "ring", answer: "ng → /ŋ/（鼻音）",
            choices: ["ng → /ng/兩個音","ng → /ŋ/（鼻音）","ng → /nk/","ng → /n/"],
            hint: "💍 ring，ng 唸鼻音 /ŋ/！", emoji: "💍", search: "ring" }
        ]
      },
      {
        name: "nd / nt / lt / mp / sk / sc / spr / str / spl / squ + c / g / s",
        soundBadge: "字尾叢集 + 三字母拼音", soundLabel: "進階組合",
        rules: [
          "<b>字尾叢集</b>：nd（hand）、nt（ant）、lt（melt）、mp（camp）、sk（desk）",
          "<b>三字母拼音</b>：spr（spring）、str（street）、spl（splash）、squ（square）",
          "<b>c /s/</b>（c + e/i/y）：city、face、ice",
          "<b>g /dʒ/</b>（g + e/i/y）：gem、giant、gym",
          "<b>s /z/</b>（兩母音之間）：music、easy、busy"
        ],
        words: [
          { word: "hand",   highlight: "nd", zh: "手", emoji: "✋", search: "hand", phonemes: ["h","a","nd"], phonemesSpeak: [null, "at", null] },
          { word: "land",   highlight: "nd", zh: "陸地", emoji: "🌍", search: "land", phonemes: ["l","a","nd"], phonemesSpeak: [null, "at", null] },
          { word: "ant",    highlight: "nt", zh: "螞蟻", emoji: "🐜", search: "ant insect", phonemes: ["a","nt"], phonemesSpeak: ["at", null] },
          { word: "mint",   highlight: "nt", zh: "薄荷", emoji: "🌿", search: "mint herb", phonemes: ["m","i","nt"], phonemesSpeak: [null, "it", null] },
          { word: "melt",   highlight: "lt", zh: "融化", emoji: "🧊", search: "melt ice", phonemes: ["m","e","lt"], phonemesSpeak: [null, "Ed", null] },
          { word: "camp",   highlight: "mp", zh: "露營", emoji: "⛺", search: "camp", phonemes: ["c","a","mp"], phonemesSpeak: [null, "at", null] },
          { word: "lamp",   highlight: "mp", zh: "燈", emoji: "💡", search: "lamp light", phonemes: ["l","a","mp"], phonemesSpeak: [null, "at", null] },
          { word: "desk",   highlight: "sk", zh: "書桌", emoji: "🪑", search: "desk", phonemes: ["d","e","sk"], phonemesSpeak: [null, "Ed", null] },
          { word: "spring", highlight: "spr", zh: "春天/彈簧", emoji: "🌸", search: "spring flower", phonemes: ["spr","i","ng"], phonemesSpeak: [null, "it", null] },
          { word: "street", highlight: "str", zh: "街道", emoji: "🏙️", search: "street", phonemes: ["str","ee","t"] },
          { word: "splash", highlight: "spl", zh: "濺水", emoji: "💦", search: "splash water", phonemes: ["spl","a","sh"], phonemesSpeak: [null, "at", null] },
          { word: "square", highlight: "squ", zh: "正方形", emoji: "⬛", search: "square shape", phonemes: ["squ","a","re"], phonemesSpeak: [null, null, null, ""] },
          { word: "ice",    highlight: "ce", zh: "冰（c+e→/s/）", emoji: "🧊", search: "ice cube", phonemes: ["i","ce"], phonemesSpeak: [null, null] },
          { word: "giant",  highlight: "g",  zh: "巨人（g+i→/dʒ/）", emoji: "🧌", search: "giant", phonemes: ["g","i","a","nt"], phonemesSpeak: [null, null, null, null] },
          { word: "music",  highlight: "s",  zh: "音樂（s→/z/）", emoji: "🎵", search: "music", phonemes: ["m","u","s","ic"], phonemesSpeak: [null, null, null, null] }
        ],
        quiz: [
          { word: "spring", speak: "spring", displayWord: "spring", answer: "/spr/",
            choices: ["/sp/+/r/","/spr/","/str/","/spl/"],
            hint: "🌸 spring，spr 三個音快速連唸！", emoji: "🌸", search: "spring flower" },
          { word: "ice", speak: "ice", displayWord: "ice", answer: "c+e → /s/（軟音）",
            choices: ["c → /k/（硬音）","c+e → /s/（軟音）","c → /tʃ/","c → /sh/"],
            hint: "🧊 ice，c 後面是 e，唸軟音 /s/！", emoji: "🧊", search: "ice cube" }
        ]
      }
    ],
    story: {
      title: "👑 The Quick Queen",
      pages: [
        { en: "A quick queen sang a long song in the spring street.", zh: "一位快速的女王在春天的街道上唱著悠長的歌。", highlights: ["quick","queen","long","song","spring","street"] },
        { en: "She had a pink ring and a square lamp on her desk.", zh: "她有一個粉紅色戒指和一盞方形燈在書桌上。", highlights: ["pink","ring","square","lamp","desk"] },
        { en: "A giant ant splashed in the camp.", zh: "一隻巨大的螞蟻在露營地濺水。", highlights: ["giant","ant","splashed","camp"] },
        { en: "The ice began to melt — bring the duck a drink!", zh: "冰開始融化——給鴨子拿一杯飲料！", highlights: ["ice","melt","bring","duck","drink"] }
      ]
    }
  }
];

new Vue({
  // 將哪個 HTML 元素轉成 Vue 元件
  el: '#app',
  // 元件資料
  data () {
    return {
      aboutInfos: [
        { parta: '前端擅長專業為 Sass 規劃響應式網頁版型、GSAP 製作動畫、JavaScript 撰寫互動、Vue 前端框架使用、MongoDB 資料應用...等各種程式語言，將前端技術發揮應用，如下方專題製作的旅遊論壇進行規劃與執行！' },
        { partb: '從視覺設計轉而投入前端網頁，跳脫自己的舒適圈，原因是我想呈現每個被用心設計的網頁，想挑戰各種響應比例、動態、互動等不同的技術開發，更期待 idea 的發想創造更多的火花。' }
      ],
      jobBoxs: [
        { year: '2017.7 - 2020.11', company: '全球華人股份有限公司 (1111人力銀行)', name: '平面設計', task: '平面設計、專案網站視覺，與各部門協作，時程安排管理。' },
        { year: '2016.3 - 2017.3', company: '網奕資訊科技股份有限公司', name: '美術設計', task: '形象設計、專案活動視覺規劃、影片剪輯建議、網站視覺設計。' },
        { year: '2015.8 - 2016.1', company: '台灣知識庫股份有限公司', name: '多媒體動畫設計師', task: '製作教學動畫短片，把靜態的畫面打造活潑動畫內容。' }
      ],
      websites: [
        { link: 'https://yunndian27.github.io/backpacking-front/#/', imgUrl: './images/website001.jpg', info: '背包客棧旅遊論壇 前台', explain: '使用 Vue 搭配 U I框架 Quasar，並搭配 SASS 編譯撰寫樣式，搭配各種 NPM 套件使用。' },
        { link: 'https://yunndian27.github.io/backpacking-front/#/admin/', imgUrl: './images/website002.jpg', info: '背包客棧旅遊論壇 後台', explain: '後臺部屬在 Heroku，資料庫則以 mongoDB 搭配撰寫，並使用 Vue 官方推薦的 AJAX 套件 axios 做資料交換。' },
        { link: 'https://yunndian27.github.io/vue_hw-pomodoro/#/', imgUrl: './images/website003.jpg', info: 'Vue 番茄鐘', explain: '使用 Vue 元件概念搭配 BootstrapVue 切版，並使用 Vue CLI 開發工具，可做時間倒數，新增刪除等功能。' },
        { link: 'https://yunndian27.github.io/css_layout_youtube/', imgUrl: './images/website004.jpg', info: 'Youtube 切版', explain: '以寬1920的版面作為絕對定位切版練習。' },
        { link: 'https://yunndian27.github.io/summerKeydown/', imgUrl: './images/website005.jpg', info: '夏日練打蟲子', explain: '用 JavaScript 設計一個練習靜下心打敲鍵盤對應字母的遊戲，並以夏日打蚊蟲作為遊戲發想。' },
        { link: 'https://yunndian27.github.io/englishFlipCard/', imgUrl: './images/website006.jpg', info: '英文對對碰', explain: '用 jQuery 以及 CSS 3D 製作英文對對碰遊戲，翻左邊動物圖須以右邊英文字相同，每場遊戲都會對亂數出現' },
        { link: 'https://yunndian27.github.io/sendHerHome/', imgUrl: './images/website007.jpg', info: '專注力遊戲 | 送阿布回家', explain: '延伸《怪獸電力公司》故事劇情送小女孩阿布回家，並以 jQuery 的 DOM 操作和動畫設計的專注力遊戲！' },
        { link: 'https://github.com/yunndian27/trailfitnesstw0503', imgUrl: './images/website008.jpg', info: 'line機器人 | 健身步道', explain: '串接政府公開資料，使用 Node.js 製作查詢步道資料的 LINE 機器人，並部署到 Heroku。' }
      ],
      dailyUis: [
        { imgUrl: './images/DailyUI_001.jpg', title: '寵物監視 註冊頁', text: '使用寵物監視器前需先註冊。' },
        { imgUrl: './images/DailyUI_002.jpg', title: '商品購物頁', text: '購買商品流程，確認後提供選擇付費方式。' },
        { imgUrl: './images/DailyUI_003.jpg', title: '旅行論壇 註冊頁', text: '電腦版註冊選擇畫面，提供多元註冊方式。' },
        { imgUrl: './images/DailyUI_004.jpg', title: '旅行論壇 手機版 註冊頁', text: '註冊選擇畫面，提供多元註冊方式。' },
        { imgUrl: './images/DailyUI_005.jpg', title: '購買旅行套組商品', text: '步驟式購物流程，一步步帶入填寫商品。' },
        { imgUrl: './images/DailyUI_006.jpg', title: '購買旅行套組商品', text: '使用寵物監視器前需先註冊。' }
      ],
      graphics: [
        { imgUrl: './images/graphic001.jpg', title: '年曆設計', tool: 'Photoshop', text: '以2021年牛年為發想主軸，用扭轉乾坤帶出牛年好運。' },
        { imgUrl: './images/graphic002.jpg', title: '年曆設計', tool: 'Photoshop', text: '以2021年牛年為發想主軸，用扭轉乾坤帶出牛年好運。' },
        { imgUrl: './images/graphic003.jpg', title: '年曆設計', tool: 'Photoshop', text: '以2021年牛年為發想主軸，用扭轉乾坤帶出牛年好運。' },
        { imgUrl: './images/graphic004.jpg', title: '年曆設計', tool: 'Photoshop', text: '以2021年牛年為發想主軸，用扭轉乾坤帶出牛年好運。' },
        { imgUrl: './images/graphic005.jpg', title: '年曆設計', tool: 'Photoshop', text: '以2021年牛年為發想主軸，用扭轉乾坤帶出牛年好運。' },
        { imgUrl: './images/graphic006.jpg', title: '年曆設計', tool: 'Photoshop', text: '以2021年牛年為發想主軸，用扭轉乾坤帶出牛年好運。' },
        { imgUrl: './images/graphic007.jpg', title: '年曆設計', tool: 'Photoshop', text: '以2021年牛年為發想主軸，用扭轉乾坤帶出牛年好運。' },
        { imgUrl: './images/graphic008.jpg', title: '年曆設計', tool: 'Photoshop', text: '以2021年牛年為發想主軸，用扭轉乾坤帶出牛年好運。' },
        { imgUrl: './images/graphic009.jpg', title: '年曆設計', tool: 'Photoshop', text: '以2021年牛年為發想主軸，用扭轉乾坤帶出牛年好運。' }
      ],
      illustras: [
        { imgUrl: './images/illustration001.jpg', tool: 'illustrater' },
        { imgUrl: './images/illustration002.jpg', tool: 'illustrater' },
        { imgUrl: './images/illustration003.jpg', tool: 'illustrater' },
        { imgUrl: './images/illustration004.jpg', tool: 'illustrater' },
        { imgUrl: './images/illustration005.jpg', tool: 'illustrater' },
        { imgUrl: './images/illustration006.jpg', tool: 'illustrater' },
        { imgUrl: './images/illustration007.jpg', tool: 'illustrater' },
        { imgUrl: './images/illustration008.jpg', tool: 'illustrater' },
        { imgUrl: './images/illustration009.jpg', tool: 'illustrater' },
        { imgUrl: './images/illustration010.jpg', tool: 'illustrater' },
        { imgUrl: './images/illustration011.jpg', tool: 'illustrater' }
      ]
    }
  },
  // 元件使用到的 function
  methods: {
  },
  // 計算屬性
  computed:{
  }
  // ...其他
})

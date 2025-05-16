
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/iyuda-portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/iyuda-portfolio"
  },
  {
    "renderMode": 2,
    "route": "/iyuda-portfolio/skills"
  },
  {
    "renderMode": 2,
    "route": "/iyuda-portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/iyuda-portfolio/featured-projects"
  },
  {
    "renderMode": 2,
    "route": "/iyuda-portfolio/resume"
  },
  {
    "renderMode": 2,
    "route": "/iyuda-portfolio/contact"
  },
  {
    "renderMode": 2,
    "route": "/iyuda-portfolio/finance-dashboard"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7ER65W7Z.js",
      "chunk-QNAF5OXN.js",
      "chunk-TQTN3ZQO.js"
    ],
    "route": "/iyuda-portfolio/finance-dashboard/stocks"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZTF4WG2G.js",
      "chunk-QNAF5OXN.js",
      "chunk-TQTN3ZQO.js"
    ],
    "route": "/iyuda-portfolio/finance-dashboard/stock-data"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QN3AEG3W.js",
      "chunk-QNAF5OXN.js",
      "chunk-TQTN3ZQO.js"
    ],
    "route": "/iyuda-portfolio/finance-dashboard/gainers-losers"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ENRXE7Q4.js",
      "chunk-TQTN3ZQO.js"
    ],
    "route": "/iyuda-portfolio/finance-dashboard/markets"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NGCAJ5PA.js",
      "chunk-QNAF5OXN.js",
      "chunk-TQTN3ZQO.js"
    ],
    "route": "/iyuda-portfolio/finance-dashboard/news"
  },
  {
    "renderMode": 2,
    "route": "/iyuda-portfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16028, hash: 'b64e8a8bcd89d57f279b19c3d2ca55a24a413840cdcc118adc80bb61d7d8778d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1588, hash: 'bc6cea9eaace567692e5bf1a50417adcd1546abae07b63ffbbbb0e18ec5068ef', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 29360, hash: '067f0c80739b12b29cfa588113b2b9f6c113e886a5e89d3e22c02a68d1fddbb8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'featured-projects/index.html': {size: 25233, hash: 'd206210fd50c1a47361e2f841e337ad048278c6a14de40ce45a9cc6f4e2db5cc', text: () => import('./assets-chunks/featured-projects_index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 21611, hash: '3820d1bf50dab4b39d862b9782d2c17032184761e1f5728222218fbd0f93e0f2', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 22225, hash: '5ee0799fff03c357639e56a251f97868f67e7749db6aeb495e3b9c31c85c3e3e', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 21559, hash: '82ddd787e2b6317141c8d88258e51aecfd87bde6dad35b9fef08948fb7eaeadf', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'finance-dashboard/index.html': {size: 21748, hash: 'd86b53a7b1c1277efc88e85223fe1adc9a4735b92d23c30542775e0a43e68367', text: () => import('./assets-chunks/finance-dashboard_index_html.mjs').then(m => m.default)},
    'finance-dashboard/stock-data/index.html': {size: 23627, hash: '1c3ede2907fc88c4d7f676d690f2a413a1e0b98da513e334f53182a86c5b2f7c', text: () => import('./assets-chunks/finance-dashboard_stock-data_index_html.mjs').then(m => m.default)},
    'finance-dashboard/stocks/index.html': {size: 23268, hash: 'f0ec69f5eeab540d26195e8c60a9effdb87ae29c4c1413b51b27a8998640bad8', text: () => import('./assets-chunks/finance-dashboard_stocks_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 21667, hash: 'fe587cbe4b6095a658d4c66feeac615abb763ef009890bb70c5b4a64b9820085', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'finance-dashboard/markets/index.html': {size: 21934, hash: '0ba43ee7d4cbbb7f2954c13bfb71713ff57d3357de73dbabc3339e8d61949d49', text: () => import('./assets-chunks/finance-dashboard_markets_index_html.mjs').then(m => m.default)},
    'finance-dashboard/gainers-losers/index.html': {size: 141981, hash: 'd031a42c88a8a04b0a38104c06ccc1eb497f50dd54becbfc4ad783be2b9b3d1f', text: () => import('./assets-chunks/finance-dashboard_gainers-losers_index_html.mjs').then(m => m.default)},
    'finance-dashboard/news/index.html': {size: 56410, hash: 'eac1ed96642688f9a9f282e0e286d2f384dc433cab60613cebd05ff88e99fdb4', text: () => import('./assets-chunks/finance-dashboard_news_index_html.mjs').then(m => m.default)},
    'styles-566YWFES.css': {size: 15510, hash: 'Wg7GXb2DHDY', text: () => import('./assets-chunks/styles-566YWFES_css.mjs').then(m => m.default)}
  },
};

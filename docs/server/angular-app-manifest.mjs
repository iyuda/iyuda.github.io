
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
    'index.csr.html': {size: 16028, hash: 'f14332d435100aebd70f32e73c81448cdedafc0638e5d8407ad6969009f2b7db', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1588, hash: '1022ec7e0801d66ce515ce438b50de0be4910e078711c2ee8c9be6f8bb4da268', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 21669, hash: '8d42a0cb38b949e1399bff5f517e1d7c30e2b664a7d6a3cad397329a0189b787', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 21721, hash: '878c8067d57ab1eef105f6f98bd977ba0e08c0f86b927b2f6de83ee1290eaf08', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 22335, hash: '8d15428b6c50d8964b09bff85713a604494558fbb089bf2d5615dd9f1afab83d', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'finance-dashboard/index.html': {size: 21858, hash: 'eca20009f8d603d9da1ffbc5e235b4ee7dcbe839edf4ea64cd27e3bcbd5a81cc', text: () => import('./assets-chunks/finance-dashboard_index_html.mjs').then(m => m.default)},
    'finance-dashboard/stocks/index.html': {size: 23378, hash: 'ee53e221872c525255a286884f9a685e605671907806b90504dbf944c673b6e4', text: () => import('./assets-chunks/finance-dashboard_stocks_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 21777, hash: '8faf309a7e534193e692b3fe57dc5499b45de4d1cf2b960af29fa459ac0b69f0', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'finance-dashboard/stock-data/index.html': {size: 23737, hash: '131c7ad829e1b14738f69ba0f09d9733114c89f8d32a659e3e68607fafdc94a6', text: () => import('./assets-chunks/finance-dashboard_stock-data_index_html.mjs').then(m => m.default)},
    'index.html': {size: 29470, hash: 'a70959cbc3f5c561a72e8f8d9780ad9f92a540b97910156ebdd7b4da0aae212d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'featured-projects/index.html': {size: 25343, hash: 'cbbb07762e6265ec4636088faab1451604f0c6414f46cdda48227d60e8a2333f', text: () => import('./assets-chunks/featured-projects_index_html.mjs').then(m => m.default)},
    'finance-dashboard/markets/index.html': {size: 22044, hash: 'd879f2363f58ec5c4d93c31a727de6c1045607c97308023ddeed55f7e25d6072', text: () => import('./assets-chunks/finance-dashboard_markets_index_html.mjs').then(m => m.default)},
    'finance-dashboard/news/index.html': {size: 50259, hash: '7dde9c09716509748d0e8656cbbedb1087d4c1dd6eb3fbd2af3fa1b433308f65', text: () => import('./assets-chunks/finance-dashboard_news_index_html.mjs').then(m => m.default)},
    'finance-dashboard/gainers-losers/index.html': {size: 148202, hash: '57c6b129d5eb03542dca71b6861e5c05bf79f402e12a9d7f4dd6c319d8dddcf0', text: () => import('./assets-chunks/finance-dashboard_gainers-losers_index_html.mjs').then(m => m.default)},
    'styles-566YWFES.css': {size: 15510, hash: 'Wg7GXb2DHDY', text: () => import('./assets-chunks/styles-566YWFES_css.mjs').then(m => m.default)}
  },
};

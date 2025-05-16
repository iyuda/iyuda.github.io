
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: './',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/skills"
  },
  {
    "renderMode": 2,
    "route": "/projects"
  },
  {
    "renderMode": 2,
    "route": "/featured-projects"
  },
  {
    "renderMode": 2,
    "route": "/resume"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/finance-dashboard"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7ER65W7Z.js",
      "chunk-QNAF5OXN.js",
      "chunk-TQTN3ZQO.js"
    ],
    "route": "/finance-dashboard/stocks"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZTF4WG2G.js",
      "chunk-QNAF5OXN.js",
      "chunk-TQTN3ZQO.js"
    ],
    "route": "/finance-dashboard/stock-data"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QN3AEG3W.js",
      "chunk-QNAF5OXN.js",
      "chunk-TQTN3ZQO.js"
    ],
    "route": "/finance-dashboard/gainers-losers"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ENRXE7Q4.js",
      "chunk-TQTN3ZQO.js"
    ],
    "route": "/finance-dashboard/markets"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NGCAJ5PA.js",
      "chunk-QNAF5OXN.js",
      "chunk-TQTN3ZQO.js"
    ],
    "route": "/finance-dashboard/news"
  },
  {
    "renderMode": 2,
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16013, hash: 'edcb7eee7f4a19bfdec34567067f7dccac4fa651f92b99be65379ffe29ffac5e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1573, hash: '4cbfeebdd096486ed54563e97c19077773c264957b98379f87a474bebe356737', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 21544, hash: '505e9bf344255d2012fc183fcae45cbc052bd99d77f6677218cf64743d30f0e1', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'featured-projects/index.html': {size: 25218, hash: '839a30915fdfd2b3f6e8ff67fc6f64164aa5ee3cc95305f34140b9c2d1edf1aa', text: () => import('./assets-chunks/featured-projects_index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 21596, hash: 'fbf4a03522e867ec70c437b6afcb3080fe9b2e58670e89da2dfeb03a6cbc5997', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 22210, hash: '535626b206ff84cd670db9b9a77b01942eb89f0a1b5e44a89f193498ef844bc1', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'finance-dashboard/stocks/index.html': {size: 23253, hash: '4f2ca4a18659c232022824b73ac6017ad1348fb37e30d7fabc1050df5483a0ee', text: () => import('./assets-chunks/finance-dashboard_stocks_index_html.mjs').then(m => m.default)},
    'finance-dashboard/stock-data/index.html': {size: 23612, hash: '2ab7740a37d860e0baf6ea75a7ce629f6ccc4329d35817823ef7b8e7eba991fd', text: () => import('./assets-chunks/finance-dashboard_stock-data_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 21652, hash: 'a092f66a8159954e6856e1377b43596b09be50ba4059aa5e54036bac3cf71871', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'finance-dashboard/index.html': {size: 21733, hash: '56539f6f2693a7994f654dc740b97c286dc370ad515476aa9173fc5eb1527b5a', text: () => import('./assets-chunks/finance-dashboard_index_html.mjs').then(m => m.default)},
    'index.html': {size: 29345, hash: 'e9d60cd8ad82fab5303016ebfbbd150587921113f0bccacff7fdbc541d042383', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'finance-dashboard/markets/index.html': {size: 21919, hash: 'cf2ae9a211f7bf3d22daf60471704af95ee04bfddbff67c01a47bc7cac2a311f', text: () => import('./assets-chunks/finance-dashboard_markets_index_html.mjs').then(m => m.default)},
    'finance-dashboard/news/index.html': {size: 55740, hash: '7dda21fcf3f81b36bb0572642870a35666c6dacfafd4096d104d5b0cffac8b42', text: () => import('./assets-chunks/finance-dashboard_news_index_html.mjs').then(m => m.default)},
    'finance-dashboard/gainers-losers/index.html': {size: 140455, hash: 'b07c53d45c26193276ac866b275955573e75cefe12adf8fd2b4c06f9bdae1851', text: () => import('./assets-chunks/finance-dashboard_gainers-losers_index_html.mjs').then(m => m.default)},
    'styles-566YWFES.css': {size: 15510, hash: 'Wg7GXb2DHDY', text: () => import('./assets-chunks/styles-566YWFES_css.mjs').then(m => m.default)}
  },
};

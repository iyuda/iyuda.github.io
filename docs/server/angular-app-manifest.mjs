
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
    'index.csr.html': {size: 16013, hash: '4b9f9468cda56e6855f5684b37fc1520ec9ff8b652e5ea0f402fb443b5c2e259', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1573, hash: 'fc2a56ba7ce7e14584577ae7c24a3e628c154ab43d79030d402ba8773de597c3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 21541, hash: '5e20e3590d0b8383c71cb47c4a093a3ef9b7452495b4210b0d13b951f6547974', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 21593, hash: 'e4f13c603be999a8ef71ea0650d23c2a58c6171b6d27b9f8df12ecd2940a724f', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 22207, hash: '6fe223233f92000de37524beb01fb38d0ee90a20503af72e42f324384566a1bb', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'finance-dashboard/index.html': {size: 21730, hash: 'd0a6f7b9731439a8beef8c697ae1a43fa664a51c04ca2852c1bf1b5cb5ca8b61', text: () => import('./assets-chunks/finance-dashboard_index_html.mjs').then(m => m.default)},
    'index.html': {size: 29342, hash: 'abce5e9f163a464e39693614bb59018087415f1063555246dd8abd35fc4046cf', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 21649, hash: '250503f5d7ee52bd1723c835c2f17e414d09dc699efb2ee9ca2b5d3c4dc56be2', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'finance-dashboard/stocks/index.html': {size: 23250, hash: '3f18fe55772b586bb4d9c403af5730b5c384b2f6652f61eb3c91932476934760', text: () => import('./assets-chunks/finance-dashboard_stocks_index_html.mjs').then(m => m.default)},
    'featured-projects/index.html': {size: 25215, hash: '88c9959f9120b8c53339fdf6f4672efed9ffd994ba9bf2eba289877e84230fee', text: () => import('./assets-chunks/featured-projects_index_html.mjs').then(m => m.default)},
    'finance-dashboard/stock-data/index.html': {size: 23609, hash: '71700199c80860dd69d9d1beca6c51970fbc993380b161c7ecb0b90ddb0f2567', text: () => import('./assets-chunks/finance-dashboard_stock-data_index_html.mjs').then(m => m.default)},
    'finance-dashboard/markets/index.html': {size: 21916, hash: 'c0f740980b5fe3388ffda59ac56687b0fd8d98afe848fcadfcba22b88ea6ebc6', text: () => import('./assets-chunks/finance-dashboard_markets_index_html.mjs').then(m => m.default)},
    'finance-dashboard/gainers-losers/index.html': {size: 140642, hash: '8366abfcef7ea6faf0ed29b56230eba7a17f964cc30d1d3a5b1d6de992c8f237', text: () => import('./assets-chunks/finance-dashboard_gainers-losers_index_html.mjs').then(m => m.default)},
    'finance-dashboard/news/index.html': {size: 55931, hash: '641964b58fa32cc458193188fcede4b4c8287d6e89ecd9817fd983ce1b9739da', text: () => import('./assets-chunks/finance-dashboard_news_index_html.mjs').then(m => m.default)},
    'styles-566YWFES.css': {size: 15510, hash: 'Wg7GXb2DHDY', text: () => import('./assets-chunks/styles-566YWFES_css.mjs').then(m => m.default)}
  },
};

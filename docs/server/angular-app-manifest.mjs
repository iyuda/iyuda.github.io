
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
    'index.csr.html': {size: 16013, hash: 'c99d3d987750b9e331a0070ba85850e2971c8fb2c91127340f44c956d3ebe740', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1573, hash: '6c21610b4782ac06b39c152978bf74bd9a0ecae754a2c7324e20ee3bce417e83', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 21458, hash: '16881b602126862759c92f9a8622c6185e688e2c8c69a1df56904749254a57e0', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'index.html': {size: 29259, hash: 'd0227dcff9abdc2bc05dffd51d93cc30bdbd98e012b84c7d8b737052551f36fe', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 21510, hash: 'c9d32475bad32d13d82d93847a7d46bdc44148084e47256f064708276048c991', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 22124, hash: 'cac8537c3d1773b90e971bdfcf65e7b3dd66645ec7c0fab622f1f9aac5e62eb4', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'finance-dashboard/index.html': {size: 21647, hash: '85f2d160067cc28bf78fd0449fe9148feab65848fdefe87da1e8e48420ef5bf9', text: () => import('./assets-chunks/finance-dashboard_index_html.mjs').then(m => m.default)},
    'finance-dashboard/stocks/index.html': {size: 23167, hash: 'cc6f07ac0cd9602ff3de93dd37b9ab814d9e112f71580563d4241fde11597d98', text: () => import('./assets-chunks/finance-dashboard_stocks_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 21566, hash: '5541d710bfd0e6e953509fcf40f811c1f24ff37ff99bb72a8df2b458d692174c', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'finance-dashboard/stock-data/index.html': {size: 23526, hash: 'd799a1d848cf2353cc4a36c2cd0d658daf91950c771595007313c643da14752b', text: () => import('./assets-chunks/finance-dashboard_stock-data_index_html.mjs').then(m => m.default)},
    'featured-projects/index.html': {size: 25132, hash: '34b9279598ca6e53be420a31978b10d6b5ade34fad44c3f059dbf3d636444338', text: () => import('./assets-chunks/featured-projects_index_html.mjs').then(m => m.default)},
    'finance-dashboard/markets/index.html': {size: 21833, hash: 'ffafad7232785aa330070854b6ca48dc4d12ace0cd09e8577502c71f806e3f2b', text: () => import('./assets-chunks/finance-dashboard_markets_index_html.mjs').then(m => m.default)},
    'finance-dashboard/gainers-losers/index.html': {size: 140634, hash: 'db42a10a224a0616b297e94142606baf27e1a07bdbbbc40396bc6b61554fe756', text: () => import('./assets-chunks/finance-dashboard_gainers-losers_index_html.mjs').then(m => m.default)},
    'finance-dashboard/news/index.html': {size: 54993, hash: 'c87ee9f3dbdc706f634eb02cd8132662facdd7580ca95ee0d8c82aaa2703cf9c', text: () => import('./assets-chunks/finance-dashboard_news_index_html.mjs').then(m => m.default)},
    'styles-566YWFES.css': {size: 15510, hash: 'Wg7GXb2DHDY', text: () => import('./assets-chunks/styles-566YWFES_css.mjs').then(m => m.default)}
  },
};

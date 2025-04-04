
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
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
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 610, hash: 'c39359b22fc2557768baefeb9640cbc1b86377934d2568b8203809c198c7991e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '327773712da66f59ad856a1b5c377c737fe3b305c9dc6c4fd5da01601d8bf58a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 3731, hash: '2b04bf69940e54b9e1705f0b62a6c7d36b65538a3eef747ad4e6bc12d2f1dd3a', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 3893, hash: '84369db2c4e26b9ddb501da2aaefa47cceb40a48078440ce5a698127b53f11d2', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 3837, hash: 'ad95ed0a57254f822a2bb9ffd02cd0f80692e437119d2e1947dcb43139561a2f', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 3887, hash: '81b58c108f784e6c4eda5a4ecf5977b5e2c23298481817fcc690ee5b9fa9aed9', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 4805, hash: '7b65bbf0354b3c7c555f2085a04eaa908a9b3712550b134a3adc47a48780b2e3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'featured-projects/index.html': {size: 4764, hash: 'd39e1712742cec9d841e0f9c2609fccf7d71c1c7880c2dcfc5ba0f712d9bf31e', text: () => import('./assets-chunks/featured-projects_index_html.mjs').then(m => m.default)},
    'styles-LM6VLD64.css': {size: 198, hash: 'lkAMa/EWJzM', text: () => import('./assets-chunks/styles-LM6VLD64_css.mjs').then(m => m.default)}
  },
};

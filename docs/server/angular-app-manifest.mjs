
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/iyuda',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/iyuda"
  },
  {
    "renderMode": 2,
    "route": "/iyuda/skills"
  },
  {
    "renderMode": 2,
    "route": "/iyuda/projects"
  },
  {
    "renderMode": 2,
    "route": "/iyuda/featured-projects"
  },
  {
    "renderMode": 2,
    "route": "/iyuda/resume"
  },
  {
    "renderMode": 2,
    "route": "/iyuda/contact"
  },
  {
    "renderMode": 2,
    "route": "/iyuda/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 614, hash: '55479939125adf00d590b01ecd087e368a7350a71bc36a6899c3bba1e359b352', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1016, hash: '9f0e0bd3339e301cf866cdadcc286975332b53cbbadcea84830fc09c942736d9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 3771, hash: '9d3f1584e5c62a9af8b56ac5f37595c9248a015bd808d6199b5e01c7c6ff5843', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'index.html': {size: 4845, hash: '579ca257f3e0949255098b0b4730658e574a22d74d9a8214215ad876e669b8c1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 3933, hash: '1e31b104a33e72c6e34211e0e51d897788194fc1c42eb53f6350caba55332048', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'featured-projects/index.html': {size: 4804, hash: 'b2405f081c0181c3a8481501be61123e72286b9b92549fffc4c30ce47abef0bb', text: () => import('./assets-chunks/featured-projects_index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 3877, hash: 'cd7599fa85f37613f0cb14ad80901f93e2dae3dddbcd78bbd629427585e1cd0b', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 3927, hash: '9e8b5f11e6121ed4568955b00e3da86c121250d53b6bc93871a7cc8a2eea674a', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-LM6VLD64.css': {size: 198, hash: 'lkAMa/EWJzM', text: () => import('./assets-chunks/styles-LM6VLD64_css.mjs').then(m => m.default)}
  },
};

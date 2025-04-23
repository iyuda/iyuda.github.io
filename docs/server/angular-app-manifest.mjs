
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
  },
  {
    "renderMode": 2,
    "route": "/finance-dashboard"
  },
  {
    "renderMode": 2,
    "route": "/finance-dashboard2"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 15452, hash: '70d1ace9da04eee690f1c6ff259578e2d1e92db80bb6416f6816dabf75bb3f59', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '49e37f91cea90afbd56f428f7810cb60c4862c1d12b634913b5d7c23b84d2ebf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 18005, hash: '43d07add87a41727740d893ab3caacdb89879360763e0e2e175df5abc127ea7e', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 18113, hash: '44611df4869483b5839fa0dfa1f9b7befd29245d6da9957284416f0029847a19', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 18057, hash: 'df736841e57fbc42a3652eabd5dfd39d820d64f6264a622a14078b862397b5ad', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 18671, hash: '6fdc9448eda5756581f8c0266220e3174808e4adfdda12df14b13fa3649d4a15', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'finance-dashboard/index.html': {size: 17980, hash: 'be5c49b05c628e9c7c162548591548bbfd039508d9689e173a46a74455edc6b7', text: () => import('./assets-chunks/finance-dashboard_index_html.mjs').then(m => m.default)},
    'finance-dashboard2/index.html': {size: 17980, hash: 'be5c49b05c628e9c7c162548591548bbfd039508d9689e173a46a74455edc6b7', text: () => import('./assets-chunks/finance-dashboard2_index_html.mjs').then(m => m.default)},
    'featured-projects/index.html': {size: 21679, hash: '56f6fa72751952742af4354fb2b33f3f8be0aac8709625d8b27f41990375d5b8', text: () => import('./assets-chunks/featured-projects_index_html.mjs').then(m => m.default)},
    'index.html': {size: 25806, hash: '188b5672c1b945df5dfbd460e6213022d8b047ace96e549ae38b051c976d4b00', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-GVWYVLXM.css': {size: 15167, hash: '6g3t65OIsLo', text: () => import('./assets-chunks/styles-GVWYVLXM_css.mjs').then(m => m.default)}
  },
};

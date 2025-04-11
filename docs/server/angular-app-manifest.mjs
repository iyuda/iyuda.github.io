
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
    'index.csr.html': {size: 15424, hash: 'f5faebc5cfebe42c0e2056c6a143fe56dc0e261e9c3b982cf1219f4267f1ea39', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '80bb1c4b4f66c31420b2227f3238344595f4abe712308349f66e9868c5385b78', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 17977, hash: '2bf62ef35b2b8d7ccab7bda10796ef30d23508500db6966f1e592a15a2ff800d', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'index.html': {size: 23359, hash: '637bfb192acd60257d38e06fe9866451281dbe0e6e168f16f34f81cc88dd1d00', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'featured-projects/index.html': {size: 19959, hash: 'a65d790537476ede2f2cbc080b08a4a90d6594a67159e48a629efbd777085c01', text: () => import('./assets-chunks/featured-projects_index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 18029, hash: '1085b1fc4a66618bd3e622fb03da755865dfa832745acb9e4c7204228885baf6', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 18079, hash: 'e4154d2cb56d29a3e2909d8b0a60fc8fd4cd039fe74c1e9559b383a53cd8980a', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 18085, hash: '6c62f0dcfac2df7ace865641f7ff0ebdacae91532f691136ee43a7e73097b0b9', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-URK7RPKX.css': {size: 15139, hash: 'ff8cTNWmYIU', text: () => import('./assets-chunks/styles-URK7RPKX_css.mjs').then(m => m.default)}
  },
};

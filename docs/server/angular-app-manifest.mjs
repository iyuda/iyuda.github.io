
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/iyuda/',
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
    'index.csr.html': {size: 615, hash: '3cd45079764f1023d5ecf946365d30abdd110491e64bc0fc4496562d70947204', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1017, hash: 'fe42e5fd5b645f0d11c346878aae881828452394d6b473da9ea6e6e2e67b8999', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4846, hash: 'ff55380addb8a3659f4dcfc96a067e5177640e0d4864634dbcaeb96248f24b96', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 3772, hash: '6687e4c1422e56c6e80682638f2790d295e5545310bec2b8aad80c624a8f40cc', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 3928, hash: '11b7c63d09496fc1f3f43a72843f2d496e307e3c3ffbddf3743c22cc7a1f5231', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 3878, hash: '4e69a6f890d62fd61080cfeba945589ef49aaf3991a6b130bd10bd85c8975dcc', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 3934, hash: 'be20bea3343644571335701a8da6a586c5cc7c9bc7191286451a78f2a5a5817a', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'featured-projects/index.html': {size: 4805, hash: 'e020be467f90999c8668b0f4a90947050a26be77caa9799cbd011b6b40e0162f', text: () => import('./assets-chunks/featured-projects_index_html.mjs').then(m => m.default)},
    'styles-LM6VLD64.css': {size: 198, hash: 'lkAMa/EWJzM', text: () => import('./assets-chunks/styles-LM6VLD64_css.mjs').then(m => m.default)}
  },
};

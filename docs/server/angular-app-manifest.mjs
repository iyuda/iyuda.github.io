
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
    "route": "/iyuda-portfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 626, hash: '6f62192637603014a8dbfa1fc19cbf072d96eb7aca0035fcce64bf375d7875ba', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1028, hash: 'ba16a79048ceb292f510bd64d98be91a213ad43dd43bf2332a5d87b13be21ef5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 3843, hash: 'ec5c10c3e45266ac7e4709b879bc375ddfe89d1c84139bd8cc5674d2c7126604', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 4005, hash: '2c322fce74d1c37ab7a8dd20015fae8158e653a15505aef65370af50f47b3e26', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 3999, hash: '21f4c4ef92008331a0636352155588510cdf3e09b682105e9036017d63cc2d52', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 3949, hash: 'c800603def02aa0897f86d7f052eedfc90126f1dc3045cfde09532a09e758fec', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'index.html': {size: 4917, hash: 'd93ff43f24f881f5a669319f6ade96385cae6662716b9afb4882401168dfdb35', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'featured-projects/index.html': {size: 4876, hash: 'b5e98a37683cbf02359265b04a6ab02921500e0397cf5b379f522a01e3528d30', text: () => import('./assets-chunks/featured-projects_index_html.mjs').then(m => m.default)},
    'styles-LM6VLD64.css': {size: 198, hash: 'lkAMa/EWJzM', text: () => import('./assets-chunks/styles-LM6VLD64_css.mjs').then(m => m.default)}
  },
};

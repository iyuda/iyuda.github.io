
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
    'index.csr.html': {size: 15440, hash: '7a612fc198631fb19107e2cef1a70e43327e77f78cf352f4882d9187d9ed3831', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1028, hash: '5f607a710ad964998c95ec00963639d85792c2f89b3c92d863b473cd487d0727', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 25279, hash: '2e4595d9204f08d1fea4f93adf929461fe365c85ccaae77ea32fb4c41282f7c5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'featured-projects/index.html': {size: 21667, hash: 'ce5c8d588e2d217866362ee2c0f7f0a25bd9290591268eff60607d9c60dd53ca', text: () => import('./assets-chunks/featured-projects_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 17993, hash: '564c0a708ece0f69b5f8026a529dccee5c6f969f977a6124a19b807e60dc0aac', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 18095, hash: 'f1b2edee7af5bd24a1c5333b508b44e840b70effaf926aeccdf87759e851e99a', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 18101, hash: '756d08e6acdec675f564e612cd9b6f78dc69d79715567fcda8ee5fe568187e12', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 18045, hash: 'c9958e21de6dd6a71860bdf3c9c7adbac6620b33831ea1c728b33937e763b7a3', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'styles-URK7RPKX.css': {size: 15139, hash: 'ff8cTNWmYIU', text: () => import('./assets-chunks/styles-URK7RPKX_css.mjs').then(m => m.default)}
  },
};


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
  },
  {
    "renderMode": 2,
    "route": "/iyuda-portfolio/finance-dashboard"
  },
  {
    "renderMode": 2,
    "route": "/iyuda-portfolio/finance-dashboard2"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 15468, hash: '21a2d6d5dccafa8d0569156086d1cc4e1b5074ecfd9f7307b70dea50b1f2dd4e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1028, hash: 'a5eda1f28a893cad0282d92a104a3abc8a9b0b5556d9619ba1d9b834d73a4498', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 25822, hash: 'f32ca95aad3a63013ad1169d0c5783c42291923aa9ef02594196ba51072b577b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 18073, hash: '3984dc1beec7b2a85f8b92c7c8a110682ee6c3738160596b05304b408a6c03b6', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 18021, hash: 'b0b04b36597af36814d5f85ab0b32e1ad78ed4af045e409d4626b2a0a3c9bb40', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 18687, hash: '812d18bd41e40c906b5bca59ea87b483060c29e82555228e8a635d0d49bf0854', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 18129, hash: 'bfe88e154447edf2c72b74d658d99aa2d755fbdc5bad7870bed08b831e1ed894', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'finance-dashboard/index.html': {size: 17996, hash: 'a69afc36d6c5a6b2ccb02cb99f2ffaea1c7c11a37da9496dbd45167bcbd23cfb', text: () => import('./assets-chunks/finance-dashboard_index_html.mjs').then(m => m.default)},
    'featured-projects/index.html': {size: 21695, hash: '9529cf61396a6a88a650d18e752699346718ee3c39e6ff9666c4ae5d81c20b60', text: () => import('./assets-chunks/featured-projects_index_html.mjs').then(m => m.default)},
    'finance-dashboard2/index.html': {size: 17996, hash: 'a69afc36d6c5a6b2ccb02cb99f2ffaea1c7c11a37da9496dbd45167bcbd23cfb', text: () => import('./assets-chunks/finance-dashboard2_index_html.mjs').then(m => m.default)},
    'styles-GVWYVLXM.css': {size: 15167, hash: '6g3t65OIsLo', text: () => import('./assets-chunks/styles-GVWYVLXM_css.mjs').then(m => m.default)}
  },
};

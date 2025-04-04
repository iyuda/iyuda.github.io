
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
    'index.csr.html': {size: 616, hash: '7258118431da596ce5a9b97f1c13b25a78784118d0203c334aa57e690e3ffd50', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1018, hash: '82285013d5090c9aa63fa868e7b2caf8f3ac51fc452d45ffd555afe3383cab13', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4847, hash: '1cce41100f1da948f747adc54bdeabaf53db96959954998846c3d91e9cad9075', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 3773, hash: '839ccb90b62f46241986193a17607a18fe66cc353d6649f6739aa8d8f2c5aa4c', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 3879, hash: '85702ec94bf6a3d2791ff4cf4aef944afd43b58b57b929b68a202f50941c5b25', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 3929, hash: '5f369bea1146f95cf2567024d9429782cd04b1a654a7215828aa235c872cdc41', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 3935, hash: 'fa61ebd556b3ecfe79564d2ec6bf76fe35b036da83422e48eb2df98038673be4', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'featured-projects/index.html': {size: 4806, hash: '5c6aa376fd4ae8b94da5722d5604f06ba5f79c730af172e95da2d64b95c6ce20', text: () => import('./assets-chunks/featured-projects_index_html.mjs').then(m => m.default)},
    'styles-LM6VLD64.css': {size: 198, hash: 'lkAMa/EWJzM', text: () => import('./assets-chunks/styles-LM6VLD64_css.mjs').then(m => m.default)}
  },
};


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
    'index.csr.html': {size: 15424, hash: '6a46366bb57da482fe41dd3ca62824886ad434d52336b3d4c7c41775f6c46bd1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '9d08f6ae9b45f4382868405d45bede697d21f9f7b3eca41506ab216cd7f7f81b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 17977, hash: '92688112be2f8f3185cd7a17e4d712a2284db5a8120236a26b6bb9ab6145399b', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'featured-projects/index.html': {size: 21651, hash: '8cdb8ec17adc7ec8a717e22c3d2a11e222c1c588a62aa3d592c7311c29e0c570', text: () => import('./assets-chunks/featured-projects_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 18085, hash: 'b466f0841e5c3df70af56700199677c4960a65721e78aea46ec84f60f5cd72f5', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 18079, hash: 'e80caa4f48ef5827c10a9151f7575cab68b15f47b105c55f67e6808eb51fb5cb', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 25051, hash: 'e5b0a8f22fb21dc1f73c37f2b9ce07c9bc1bb272350ae3fe8c9b62240eb09790', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 18029, hash: '977020cc1270294de1d347f63971f92bcf2b01925d0071c9060f6cf29d99e61a', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'styles-URK7RPKX.css': {size: 15139, hash: 'ff8cTNWmYIU', text: () => import('./assets-chunks/styles-URK7RPKX_css.mjs').then(m => m.default)}
  },
};

const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-post-js": hot(preferDefault(require("/Users/wwwhatley/Developer/creative114/creativemarketing/src/templates/post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/wwwhatley/Developer/creative114/creativemarketing/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/wwwhatley/Developer/creative114/creativemarketing/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/wwwhatley/Developer/creative114/creativemarketing/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/wwwhatley/Developer/creative114/creativemarketing/src/pages/page-2.js")))
}


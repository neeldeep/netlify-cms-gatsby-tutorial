// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {

}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/roy/Desktop/build/sample1/.cache/dev-404-page.js")),
  "component---src-templates-blog-template-js": preferDefault(require("/Users/roy/Desktop/build/sample1/src/templates/blogTemplate.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/roy/Desktop/build/sample1/src/pages/index.js"))
}

exports.json = {
  "dev-404-page.json": require("/Users/roy/Desktop/build/sample1/.cache/json/dev-404-page.json"),
  "test-me.json": require("/Users/roy/Desktop/build/sample1/.cache/json/test-me.json"),
  "index.json": require("/Users/roy/Desktop/build/sample1/.cache/json/index.json")
}
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://whizzo-backend/",
      pathRewrite: { "^/api": "" }
      //changeOrigin: true
    })
  );
};

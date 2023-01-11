const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://mareena-backend/",
      pathRewrite: { "^/api": "" }
    })
  );

  app.use(
    "/worker",
    createProxyMiddleware({
      target: "http://whizzo-worker:8080/",
      pathRewrite: { "^/worker": "" }
    })
  );

  
};

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {

  // When we target the api we get routed to the backend (without the /api root)
  //
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://mareena-backend/",
      pathRewrite: { "^/api": "" }
    })
  );

  // When we target the worker, rerouted to whizzo-worker
  //
  app.use(
    "/worker",
    createProxyMiddleware({
      target: "http://whizzo-worker:8080/",
      pathRewrite: { "^/worker": "" }
    })
  );

};

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/bakery', createProxyMiddleware({
      target: 'http://localhost:3001/',
      changeOrigin: true
    })
  );
  app.use(
    '/breads', createProxyMiddleware({
      target: 'http://localhost:3001/',
      changeOrigin: true
    })
  );
  app.use(
    '/newBread', createProxyMiddleware({
      target: 'http://localhost:3001/',
      changeOrigin: true
    })
  );
};
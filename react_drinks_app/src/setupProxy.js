const { createProxyMiddleware } = require('http-proxy-middleware');
const { REACT_APP_SERVER } = process.env;

module.exports = (app) => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: REACT_APP_SERVER,
      changeOrigin: true,
    }),
  );
};

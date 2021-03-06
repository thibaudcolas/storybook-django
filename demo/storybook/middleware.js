const { createProxyMiddleware } = require('http-proxy-middleware');
const { createDjangoAPIMiddleware } = require('../../src/middleware');

module.exports = createDjangoAPIMiddleware({
    proxy: createProxyMiddleware,
    apiPath: '/storybook/api/v1/pattern-library/',
    djangoDomain: 'http://localhost:8000',
});

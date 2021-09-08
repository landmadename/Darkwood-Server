const { createProxyMiddleware } = require('http-proxy-middleware');  //注意写法，这是1.0以后的版本，最好按抄

module.exports = function (app) {
    app.use(createProxyMiddleware('/api',
        {
            target: 'http://192.168.1.217:8080/',
            pathRewrite: {
                '^/api': '',
            },
            changeOrigin: true,
            secure: false,
            ws: true,
        }
    ));
};
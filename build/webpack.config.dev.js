const baseConfig = require('./webpack.config.base');

module.exports = {
    ...baseConfig,
    mode: 'development',
    devServer: {
        open: true,
    },
};

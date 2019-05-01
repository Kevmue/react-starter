const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = function override(config, env) {
    // do stuff with the webpack config...
    return config;
};
module.exports = override(
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@layout-header-background': '#003050' },
    }),
);

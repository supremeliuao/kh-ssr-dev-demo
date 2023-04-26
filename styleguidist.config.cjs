module.exports = {
    exampleMode: 'expand',
    usageMode: 'expand',
    codeSplit: true,
    copyCodeButton: true,
    components: 'client/components/**/*.vue',
    webpackConfig: require('./build/webpack.client.dev.cjs'),
    styleguideDir: './docs', // 设置打包目录
};
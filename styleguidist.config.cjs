const IS_DEVLOPMENT = (function(){
  if(process.env.NODE_ENV === 'development') return true;
  return false;
}());

module.exports = {
  exampleMode: 'expand',
  usageMode: 'expand',
  codeSplit: true,
  copyCodeButton: true,
  components: 'client/components/**/*.vue',
  webpackConfig: IS_DEVLOPMENT ? require('./build/webpack.client.dev.cjs') : require('./build/webpack.client.prod.cjs'),
  styleguideDir: './docs', // 设置打包目录
};

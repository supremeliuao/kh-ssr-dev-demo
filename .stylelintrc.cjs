const sortOrderSmacss = require('stylelint-config-property-sort-order-smacss/generate');

module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-vue'],
  plugins: ['stylelint-order', 'stylelint-selector-bem-pattern'],
  rules: {
    'order/properties-order': [sortOrderSmacss()], // 添加sort-order
    'plugin/selector-bem-pattern': {
      componentName: 'kh',// 定义组件名字规则
      componentSelectors: {
        initial: '^\\.{componentName}',// 定义BEM类名匹配方式 参考网站https://github.com/potherca-blog/BEM-Regex
        // combined: '^\\.combined-{componentName}-[a-z]+$',
      },
      utilitySelectors: '^\\.util-[a-z]+$'
    },
    'font-family-name-quotes': 'always-unless-keyword', // 给 font family names添加引号
    'rule-empty-line-before': [
      'always',
      {
        except: ['after-single-line-comment'],
      },
    ], // 在规则之前必须空行
    'block-no-empty': [
      true,
      {
        ignore: ['comments'],
      },
    ], // 不允许空块并且不考虑注释
    'alpha-value-notation': 'number', // alpha值必须是数字
    'color-function-notation': 'legacy', // color函数使用legacy规范
    'color-hex-alpha': 'never', // 不允许使用alpha通道对于hex colors
    'number-leading-zero': 'never', // 不允许小于1时以0开头
    'number-max-precision': 3, // 不允许数点后超3位
    'declaration-block-semicolon-newline-after': 'always', // 不允许一行写声明块
    'block-opening-brace-newline-after': 'always', // 不允许在花括号开始处和选择器一行
    'selector-attribute-operator-space-after': 'always', // 不允许属性选择器后面没有空格
    'selector-list-comma-newline-after': 'always', // 允许选择器列表逗号后面分行
    'no-empty-source': null, // 允许空资源
    'selector-class-pattern': null, // 关闭小驼峰，使用BEM验证
    'selector-pseudo-class-no-unknown': [ true,{ ignorePseudoClasses: [ 'deep' ] } ], // 忽略:deep
  },
  overrides: [
    {
      files: ['./*.vue', './**/*.vue'],
    },
    {
      files: ['./*.less', './**/*.less'],
      customSyntax: 'postcss-less',
    },
  ],
};

module.exports = {
  root: true,
  env: {
    // 定义环境(可多定义)
    es6: true,
    node: true,
  },
  parser: 'vue-eslint-parser', // vue-eslint-parser模块作为解析器解析.vue文件 参考网站https://eslint.vuejs.org/user-guide/#usage
  // plugins: ['@typescript-eslint'], //设置第三方插件(插件名称可以省略 eslint-plugin- 前缀) 参考网站https://typescript-eslint.io/
  parserOptions: {
    // 解析器选项(设置解析器选项能帮助 ESLint 确定什么是解析错误)
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'plugin:vue/vue3-recommended', // 官方vue3.x插件
    'plugin:vue/vue3-strongly-recommended', // 提升vue代码可读性和开发体验
    // 'plugin:@typescript-eslint/recommended', // 提供对Typescript的检查
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 正式禁用 console(正式)
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 正式禁用 debugger(正式)
    quotes: [ 'error', 'single' ], // 强制使用一致的反勾号、单引号。
    'no-var': 'error', // 禁用 var
    'no-eval': 'error', // 禁用 eval
    'getter-return': [ 'error', { allowImplicit: true  } ], //强制 getter 函数中出现 return 语句
    "indent": "off",
    "@typescript-eslint/indent": [ 'error', 2 ], // 强制使用space的缩进
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi':[ 'error' ], // 禁用不必要的分号 如 ;;
    'arrow-spacing': 2, // 强制要求箭头函数的箭头之前或之后有空格
    'block-spacing': 'error', // 强制在代码块中开括号前和闭括号后有空格
    'brace-style': 'off',
    '@typescript-eslint/brace-style': 'error', // 强制在代码块中使用一致的大括号风格
    'vue/array-bracket-spacing': [ 'error', 'always' ], // 强制数组方括号在template中使用一致的空格
    'array-bracket-spacing': [ 'error', 'always' ], // 强制数组方括号在代码中使用一致的空格
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': [ 'error', 'never' ], // 禁止在函数标识符和其调用之间有空格
    'vue/html-self-closing': 'off',
    'vue/no-v-html': 'off', // 允许使用v-html
    'vue/html-indent': [
      'error',
      2,
      {
        // 强制使用一致的缩进(两个)
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    eqeqeq: [
      // 禁止使用==比较,null除外
      'error',
      'always',
      {
        null: 'ignore',
      },
    ],
    'no-self-assign': 'error', // 禁止自我赋值
    'vue/max-attributes-per-line': [
      // 属性一行最多3个
      'error',
      {
        singleline: {
          max: 3,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    'prefer-const': 'off',
    'lines-around-comment': [ 'error', { beforeLineComment: true, beforeBlockComment: true  } ], // 强制行级和块级注释之前有一空行
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': [ 'error', { int32Hint: false } ], // 强制中缀操作符周围有空格
    'space-before-blocks': 'error', // 强制语句块之前的空格
    'vue/object-curly-spacing': [ 'error', 'always'],// 强制vue template 花括号中使用一致的空格
    'object-curly-spacing': [ 'error', 'always'],
    '@typescript-eslint/object-curly-spacing': [
      'error',
      'always',
    ],// 强制在花括号中使用一致的空格
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing':[ 'error', { after:true } ], // 强制逗号后面有空格
    'vue/html-comment-content-spacing': [ 'error', 'always' ], // 强制html注释中前后各一个空格
    'key-spacing': [ 'error', { "afterColon": true } ], // 强制对象字面量的冒号和值之间存在至少有一个空格
    'keyword-spacing': [ 'error', { after:true } ], // 强制关键字后添加空格
    'no-alert': 'error', // 禁止使用alert，confirm，prompt语句
    'no-caller': 'error', // 禁止使用arguments.callee和arguments.caller属性
    'guard-for-in': 'error', // 监视for in循环，防止出现不可预料的情况
    'no-cond-assign': [ 'error', 'always' ], // 禁止条件语句的条件中出现赋值运算符
    'vue/no-template-target-blank': [ 'error', { // 禁止target="_blank" 属性没有 rel="noopener noreferrer"
      'allowReferrer': false,
      'enforceDynamicLinks': 'always'
    }],
    'vue/no-multiple-objects-in-class': 'error', // 禁止向数组class中传入多个对象
    'vue/no-unused-refs': 'error', // 禁止没有用到的ref
    'no-nested-ternary': 'error', // 禁止三元表达式嵌套
    'no-use-before-define': 'error', // 禁止在变量定义之前使用它们
    'newline-per-chained-call': 'error', // 强制方法链中每个调用都有一个换行符
    'vue/max-len': ['error', {
      'code': 120,
      'template': 200, // template中最大长度
      'tabWidth': 2,
      'comments': 100, // 注释最大长度
      'ignorePattern': '',
      'ignoreComments': false,
      'ignoreTrailingComments': false,
      'ignoreUrls': true,
      'ignoreStrings': false,
      'ignoreTemplateLiterals': false,
      'ignoreRegExpLiterals': false,
      'ignoreHTMLAttributeValues': true,
      'ignoreHTMLTextContents': true,
    }], // 强制每行代码数量
    'vue/template-curly-spacing': [ 'error', 'always' ],
    'template-curly-spacing': [ 'error', 'always'  ]
  },
};

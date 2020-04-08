module.exports = {
  root: true,
  env: {
    node: true, // 支持node语法
    es6: true // 支持es6语法
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "spaced-comment": [ // 注释后预留空格
      "error",
      "always"
    ],
    "space-before-function-paren": [ // 括号与函数名加空格
      "error", "always"
    ],
    "no-multiple-empty-lines": [ // 最大空行数
      "error", {
        "max": 2
      }
    ],
    "comma-dangle": [2, 'never'], // 对象最后一个key不允许带，
  }
}

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  ignorePatterns: ['**/src/tictactoe.js'],
  rules: {
    'linebreak-style':
    [
      'error',
      process.platform === 'win32' ? 'windows' : 'unix',
    ],
  },
};

module.exports = {
  parser: 'babel-eslint',
  env: { browser: true, es6: true },
  extends: ['fbjs'],
  rules: {
    'import/prefer-default-export': 0,
  },
};

const { config } = require('@swc/core/spack');
const { resolve } = require('path');

module.exports = config({
  entry: {
    'iwara.tv.main': resolve(__dirname, 'scripts/main.ts'),
  },
  output: {
    path: resolve(__dirname, 'scripts/'),
  }
});

const {
  override,
  useBabelRc,
  addLessLoader,
  fixBabelImports
} = require('customize-cra');

const modifyVars = require('./src/app/styles/theme');

module.exports = override(
  useBabelRc(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars
  })
);

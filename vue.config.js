module.exports = {
  assetsDir: 'static',
  outputDir: '../../deploys/new-start',
  css: {
    extract: false,
    sourceMap: false,
  },
  runtimeCompiler: true,
  productionSourceMap: false,
  devServer: {
    port: 80,
    host: 'local.bin.com',
    open: true,
  },
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
};

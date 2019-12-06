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
    port: 8080,
    host: '127.0.0.1',
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

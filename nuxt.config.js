import webpack from 'webpack'
module.exports = {

  plugins: ['~/plugins/vue_cropperjs.js'],
  build: {
    extractCSS: true,
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          test: /cropperjs\/dist\/cropper\.css$/,
          loader: ['style-loader', 'css-loader'],
        });
      }
    }
  }
}
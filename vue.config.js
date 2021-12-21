module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/stratego-vue-app/'
      : '/',
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    https: true
  }
}

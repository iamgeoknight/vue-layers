module.exports = {
    publicPath: '/vue-layes/dist/',

    pluginOptions: {
      quasar: {
        importStrategy: 'kebab',
        rtlSupport: false
      }
    },

    transpileDependencies: [
      'quasar'
    ]
}

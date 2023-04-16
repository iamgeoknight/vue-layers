const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/vue-layers/dist/',
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  transpileDependencies: [
    'quasar'
  ]
})

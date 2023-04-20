const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/carusel/" : "/",
  transpileDependencies: true
})

module.exports = {
  publicPath: '/carusel/'
}
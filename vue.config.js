const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/carusel/" : "/",
// <<<<<<< HEAD
  transpileDependencies: true
})

module.exports = {
  publicPath: '/carusel/'
}
// =======
  //transpileDependencies: true
// })
module.exports = {
publicPath: '/carusel/'
}
// >>>>>>> efd7118c17478436cbff183e508b116e12256e2e

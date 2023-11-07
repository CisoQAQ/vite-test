import microApp from '@micro-zoe/micro-app'
// 微前端-microApp-注入
console.log(process.env.NODE_ENV,'sss')
microApp.start({
  plugins: {
    modules: {
      // appName即应用的name值
      'child-app': [
        {
          loader(code) {
            if (process.env.NODE_ENV === 'development') {
              // 这里 basename 需要和子应用vite.config.js中base的配置保持一致
              // eslint-disable-next-line no-param-reassign
              code = code.replace(/(from|import)(\s*['"])(\/child-app\/)/g, all => {
                return all.replace('/child-app/', 'http://localhost:4001/child-app/')
              })
            }
            return code
          }
        }
      ]
    }
  }
})
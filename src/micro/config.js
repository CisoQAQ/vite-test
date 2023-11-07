const config = {
    'child-app': 'http://localhost:4001'
  }
  // 线上环境地址
  if (process.env.NODE_ENV === 'production') {
     
    Object.keys(config).forEach(key => {
      config[key] = window.location.origin
    })
  }
  export default config
  
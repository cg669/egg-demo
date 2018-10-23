'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1534905901164_3796';

  // 添加 view 配置
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  }
  config.security = {
    ignore: "/api/",
    domainWhiteList: [
      "http://127.0.0.1:7002",
      // "http://10.180.144.212:8080",
      "http://localhost:7002"
    ],
    methodnoallow: { enable: false },
    csrf: {
      enable: false,
      // ignoreJSON: true // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
    }
  }
  config.onerror = {
    // 线上页面发生异常时，重定向到这个页面上
    // errorPageUrl: '/error',
    // all(err, ctx) {
    //   // 在此处定义针对所有响应类型的错误处理方法
    //   // 注意，定义了 config.all 之后，其他错误处理方法不会再生效
    //   ctx.body = 'error';
    //   ctx.status = 500;
    // },
    // html(err, ctx) {
    //   // html hander
    //   ctx.body = '<h3>error</h3>';
    //   ctx.status = 500;
    // },
    // json(err, ctx) {
    //   // json hander
    //   ctx.body = { message: 'error' };
    //   ctx.status = 500;
    // },
    // jsonp(err, ctx) {
    //   // 一般来说，不需要特殊针对 jsonp 进行错误定义，jsonp 的错误处理会自动调用 json 错误处理，并包装成 jsonp 的响应格式
    // },
  }
  // add your config here
  config.middleware = [
    'robot',
    'notFoundHandler',
    'errorHandler',
    // 'apiWrapper'
  ]
  config.errorHandler = {
    match:'/api'
  }
  config.robot = {
    ua:[
      /Baiduspider/i
    ]
  }
  return config;
}


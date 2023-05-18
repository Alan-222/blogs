(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{475:function(e,s,a){"use strict";a.r(s);var r=a(2),t=Object(r.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),s("p",[e._v("本文将继续上文来实现登录接口。前端的图形验证码图片是由后端返回，并可进行刷新等操作。由于存在多用户操作且频率较高，所以我们将验证码存在数据库的话压力就太大，所以应该将验证码缓存定时删除，作者使用的是 redis 数据库。")]),e._v(" "),s("h2",{attrs:{id:"图形验证码的实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图形验证码的实现"}},[e._v("#")]),e._v(" 图形验证码的实现")]),e._v(" "),s("h3",{attrs:{id:"安装依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖"}},[e._v("#")]),e._v(" 安装依赖")]),e._v(" "),s("p",[e._v("图形验证码所用到的库是"),s("code",[e._v("svg-captcha")]),e._v("，它能够轻松地生成我们所需的图形验证码不需要额外的库，且可灵活地配置。"),s("a",{attrs:{href:"https://npmmirror.com/package/svg-captcha",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方文档"),s("OutboundLink")],1)]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm install svg-captcha@1.4.0\n")])])]),s("p",[e._v("缓存所用数据库 redis 也需安装对应的模块（且系统需要安装好 redis 数据库！！！）")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm install redis@3.1.2\n")])])]),s("h3",{attrs:{id:"redis-模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis-模块"}},[e._v("#")]),e._v(" redis 模块")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("在 utils 文件夹下新建文件 redis.js")])]),e._v(" "),s("li",[s("p",[e._v("在 config 的 index.js 文件中添加连接 redis 数据库的配置信息")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("post: 6379,\nurl: '127.0.0.1',\npassword: 123456\n")])])])]),e._v(" "),s("li",[s("p",[e._v("编写 redis 模块")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("导入 ridis")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("const redis = require('redis');\n")])])])]),e._v(" "),s("li",[s("p",[e._v("导入配置")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("const config = require('../config/index');\n")])])])]),e._v(" "),s("li",[s("p",[e._v("创建连接")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("const client = redis.createClient(config.post, config.url);\nconst client = redis.createClient(config.post, config.url);\n​\nclient.on('error', function (err) {\n  console.log('Error ' + err);\n});\n​\nclient.on('connect', () => {\n  console.log('redis connect success');\n});\n​\nclient.auth(config.password);\n")])])])]),e._v(" "),s("li",[s("p",[e._v("编写 get、set 函数（从数据库读写数据）")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// 要导出的对象\nconst redisConnect = {};\n/**\n * 写入数据库函数\n * @param {*} key 设置属性key\n * @param {*} value 设置属性值\n * @param {*} expire 过期时间\n * @returns\n */\nredisConnect.setKey = (key, value, expire) => {\n  return new Promise((resolve, reject) => {\n    client.set(key, value, (err, replay) => {\n      if (err) {\n        reject(err);\n      }\n      if (!isNaN(expire) && expire > 0) {\n        client.expire(key, parseInt(expire));\n      }\n      resolve(replay);\n    });\n  });\n};\n​\n/**\n * 读取数据库函数\n * @param {*} key 读取的属性key\n * @returns\n */\nredisConnect.getKey = (key) => {\n  return new Promise((resolve, reject) => {\n    client.get(key, (err, replay) => {\n      if (err) {\n        reject(err);\n      } else {\n        resolve(replay);\n      }\n    });\n  });\n};\n// 导出\nmodule.exports = redisConnect;\n")])])])])]),e._v(" "),s("p",[e._v("这样 redis 模块就完成了")])])]),e._v(" "),s("h2",{attrs:{id:"密码加密"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#密码加密"}},[e._v("#")]),e._v(" 密码加密")]),e._v(" "),s("p",[e._v("由于存在数据库中的密码肯定要是密文，所以需要对密码进行加密。我们用到的是"),s("a",{attrs:{href:"https://npmmirror.com/package/bcryptjs",target:"_blank",rel:"noopener noreferrer"}},[e._v("bcryptjs 库"),s("OutboundLink")],1)]),e._v(" "),s("h3",{attrs:{id:"安装模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装模块"}},[e._v("#")]),e._v(" 安装模块")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm install bcryptjs@2.4.3\n")])])]),s("h2",{attrs:{id:"添加用户接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加用户接口"}},[e._v("#")]),e._v(" 添加用户接口")]),e._v(" "),s("p",[e._v("需要实现登录接口的准备都已经实现了。但我们数据库中还没有存储用户。所以我们先实现添加用户接口再进行登录。")]),e._v(" "),s("h3",{attrs:{id:"校验添加用户接口入参"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#校验添加用户接口入参"}},[e._v("#")]),e._v(" 校验添加用户接口入参")]),e._v(" "),s("p",[s("strong",[e._v("schema/user.js")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("exports.add_user_schema =joi.object().keys ({\n    username,\n    password,\n    status\n});\n")])])]),s("h3",{attrs:{id:"添加路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加路由"}},[e._v("#")]),e._v(" 添加路由")]),e._v(" "),s("p",[s("strong",[e._v("router/user.js")])]),e._v(" "),s("ol",[s("li",[s("p",[e._v("添加添加用户路由（接口）")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// 添加用户接口\nrouter.post('/addUser', userHandler.addUser);\n")])])])])]),e._v(" "),s("p",[s("strong",[e._v("router_handler/user.js")])]),e._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("p",[e._v("导入验证规则及其对象")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// 1. 导入需要的验证规则对象\nconst {\n  user_login_schema,\n  add_user_schema,\n} = require('../schema/user');\n")])])])]),e._v(" "),s("li",[s("p",[e._v("编写路由处理函数")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("导入"),s("code",[e._v("bcryptjs")]),e._v("加密模块（添加用户时为密码加密）")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("const bcrypt = require('bcryptjs');\n")])])])]),e._v(" "),s("li",[s("p",[e._v("用户名判断是否重复否则对密码进行加密加入数据库")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// 添加用户的处理函数\nexports.addUser = (req, res) => {\n  // 验证入参，错误时抛出以捕获\n  const { error, value } = add_user_schema.validate(req.body);\n  if (error) {\n    throw error;\n  }\n  // 查询是否存在相同用户名\n  UsersModel.findAll({\n    where: {\n      username: value.username\n    }\n  }).then((result) => {\n    if (result && result.length)\n      return res.send({\n        code: 1,\n        message: '用户名被占用，请更换后重试！',\n        data: null\n      });\n    else {\n      const password = value.password;\n      // 加密\n      value.password = bcrypt.hashSync(password, 10);\n      const result = UsersModel.create(value);\n      result.then(function (ret) {\n        if (ret) {\n          return res.send({\n            code: 0,\n            message: '新增成功',\n            data: ret\n          });\n        } else {\n          return res.send({\n            code: 1,\n            message: ret,\n            data: null\n          });\n        }\n      });\n    }\n  });\n};\n")])])])])])])]),e._v(" "),s("h2",{attrs:{id:"node-dev"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-dev"}},[e._v("#")]),e._v(" node-dev")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://npmmirror.com/package/node-dev",target:"_blank",rel:"noopener noreferrer"}},[e._v("node-dev"),s("OutboundLink")],1),e._v("是一个 node.js 开发工具，当文件被修改时，它会自动重新启动 node 进程。")]),e._v(" "),s("p",[e._v("类似于 nodemon，我们通过它来调试修改程序。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm install node-dev@7.4.3\n")])])]),s("p",[e._v("然后将其添加到启动脚本里")]),e._v(" "),s("p",[s("strong",[e._v("package.json")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('"scripts": {\n    "start":"node-dev app.js",\n    "test": "echo "Error: no test specified" && exit 1"\n}\n')])])]),s("p",[e._v("这样当在终端输入命令"),s("code",[e._v("npm run start")]),e._v("服务器就通过 node-dev 启动，之后再进行修改会自动进行重启")]),e._v(" "),s("h2",{attrs:{id:"测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[e._v("#")]),e._v(" 测试")]),e._v(" "),s("p",[e._v("1.若传参不全")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/17c2eab57987471d84724e52413c866e~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),e._v(" "),s("p",[e._v("2.成功")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ca2c881e74004a48b363d2be6f9e031a~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})])])}),[],!1,null,null,null);s.default=t.exports}}]);
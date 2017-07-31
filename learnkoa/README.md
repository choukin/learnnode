koa-bodyparser：请求体解析中间件，相当于 express 中的 body-parser
koa-flash：相当于 connect-flash
koa-generic-session：通用的 session 中间件，可结合 mongodb、redis等使用
koa-generic-session-mongo：结合 koa-generic-session，将 session 存储到 mongodb 的中间件
koa-static-cache：静态文件缓存中间件
merge-descriptors：合并两个对象的工具模块
mongoose：mongodb 驱动模块
validator：参数验证工具模块


路由设计
GET /signup //注册页
POST /signup //注册

GET /signin //登录页
POST /signin //登录

GET /logout //登出

GET /create //发帖页
POST /create //发帖

GET / //主页

GET /user/:name //用户页

GET /topic/:id //话题页
POST /topic/:id //评论
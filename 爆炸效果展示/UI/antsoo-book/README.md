# antsoo-book

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

├── build                    // 项目构建(webpack)相关代码
├── config                   // 配置目录，包括端口号等。
├── dist                     // 运行build后生成目录(存放需要的发布代码)
├── src                      // 这里是我们要开发的目录，基本上要做的事情都在这个目录里。里面包含了几个目录及文件：
│   ├── assets               // 静态资源(css,font,img,js)
│   ├── components           // vue组件
│   ├── config               // 接口统一管理文件
│   ├── router               // 路由配置文件
│   ├── store                // 利用vuex的状态管理工具
│   ├── main.js              // 项目核心文件
│   └── App.vue            	 // 项目入口文件
├── static                 	 // 静态资源目录，如图片、字体等，尽量不用。
├── test                     // 初始测试目录，可删除
├── index.html               // 首页入口文件，可以添加meta信息或者统计代码啥的。
├── package.json             // 项目配置文件
└── README.md                // 项目说明文档
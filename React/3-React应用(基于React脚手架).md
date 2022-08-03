# React应用(基于React脚手架）

# 一、react脚手架概述

1. xxx脚手架：用来帮助程序员快速创建一个基于 xxx 库的模板项目：
   - 包含了所有需要的配置（语法检查、jsx 编译、devServer…）
   - 下载好了所有相关的依赖 
   - 可以直接运行一个简单效果
2. react 提供了一个用于创建 react 项目的脚手架库: create-react-app
3. 项目的整体技术架构为: react + webpack + es6 + eslint
4. 使用脚手架开发的项目的特点: 模块化, 组件化, 工程化

# 二、项目结构说明

## 2.1 项目结构图

![](https://raw.githubusercontent.com/luckilypop/WebFront/main/react/202208032055586.png)

## 2.2 项目文件说明

### 2.2.1 git初始化文件

### 2.2.2 node_modules:组件文件

### 2.2.3 public:静态资源文件夹

| 文件                       | 文件说明           |
| -------------------------- | ------------------ |
| favicon.ico                | 网站页签图标       |
| <mark>index.html</mark>    | 主页面             |
| logo192.png 和 logo512.png | logo图             |
| manifest.json              | 应用夹克的配置文件 |
| robots.txt                 | 爬虫协议文件       |

![image-20220803205640634](https://raw.githubusercontent.com/luckilypop/WebFront/main/react/202208032056688.png)

### 2.2.4 src:源码文件夹

| 文件                  | 文件说明                          |
| --------------------- | --------------------------------- |
| App.css               | App组件的样式                     |
| <mark>App.js</mark>   | App组件                           |
| App.test.js           | 用于给App做测试                   |
| index.css             | 样式                              |
| <mark>index.js</mark> | 入口文件                          |
| logo.svg              | logo图                            |
| reportWebVitals.js    | 页面性能分析文件-web-vitals库支持 |
| setupTests.js         | 组件单元测试文件-jest-dom库支持   |

### 2.2.5 补充

| 文件              | 说明 |
| ----------------- | ---- |
| package.json      |      |
| package-lock.json |      |

# 三、Todolist案例

# 四、配置代理

## 4.1 方法一

> 在package.json中追加如下配置

```json
"proxy":"http://localhost:5000"
```

说明：

1. 优点：配置简单，前端请求资源时可以不加任何前缀。
2. 缺点：不能配置多个代理。
3. 工作方式：上述方式配置代理，当请求了3000不存在的资源时，那么该请求会转发给5000 （优先匹配前端资源）



## 4.2 方法二

1. 第一步：创建代理配置文件

   ```
   在src下创建配置文件：src/setupProxy.js
   ```

2. 编写setupProxy.js配置具体代理规则：

   ```js
   // 以前方法
   const proxy = require('http-proxy-middleware')
   
   module.exports = function(app) {
     app.use(
       proxy('/api1', {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
         target: 'http://localhost:5000', //配置转发目标地址(能返回数据的服务器地址)
         changeOrigin: true, //控制服务器接收到的请求头中host字段的值
         /*
         	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
         	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
         	changeOrigin默认值为false，但我们一般将changeOrigin值设为true
         */
         pathRewrite: {'^/api1': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
       }),
       proxy('/api2', { 
         target: 'http://localhost:5001',
         changeOrigin: true,
         pathRewrite: {'^/api2': ''}
       })
     )
   }
   ```

说明：

1. 优点：可以配置多个代理，可以灵活的控制请求是否走代理。
2. 缺点：配置繁琐，前端请求资源时必须加前缀。

## 4.3 配置代理新版与旧版bug

```
// 新版配置代理问题
const { createProxyMiddleware  } = require('http-proxy-middleware');

module.exports = function(app){
	app.use(
		createProxyMiddleware('/api1',{ //遇见/api1前缀的请求，就会触发该代理配置
			target:'http://localhost:5000', //请求转发给谁
			changeOrigin:true,//控制服务器收到的请求头中Host的值
			pathRewrite:{'^/api1':''} //重写请求路径(必须)
		}),
		createProxyMiddleware('/api2',{
			target:'http://localhost:5001',
			changeOrigin:true,
			pathRewrite:{'^/api2':''}
		}),
	)
}
```

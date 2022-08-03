# React 路由

# 一、相关概述

## 1.1 SPA理解 

1. 单页 Web 应用（single page web application，SPA）。 
2.  整个应用只有一个完整的页面。 
3.  点击页面中的链接**不会刷新页面**，只会做页面的**局部更新**。 
4.  数据都需要通过 **ajax 请求**获取, 并在前端异步展现。

## 1.2 路由的理解

### 1.2.1 什么是路由

1. 一个路由就是一个映射关系(key:value)
2. key 为路径, value 可能是 function 或 component

### 1.2.2 路由分类

#### 1. 后端路由 

1. 理解： value 是 function, 用来处理客户端提交的请求。 

2. 注册路由： router.get(path, function(req, res)) 

3. 工作过程：当 node 接收到一个请求时, 根据请求路径找到匹配的路由, 调用路由中的函数来处理请求, 返回响应数据

#### 2. 前端路由

1. 浏览器端路由，value 是 component，用于展示页面内容。 
2. 注册路由: \<Route path="/test" component={Test}> 
3. 工作过程：当浏览器的 path 变为/test 时, 当前路由组件就会变为 Test 组件

### 1.2.3 路由和路由器

1. 路由器管理路由，上面的插口或者天线可以认为路由；

## 二、react-router-dom相关的API

## 2.1 react-router-dom理解

1. react 的一个插件库。 
2. 专门用来实现一个 SPA 应用。 
3. 基于 react 的项目基本都会用到此库。

## 2.2 内置组件

> 1.\<BrowserRouter> 
>
> 2.\<HashRouter> 
>
> 3.\<Route> 
>
> 4.\<Redirect> 
>
> 5.\<Link> 
>
> 6.\<NavLink> 
>
> 7.\<Switch>

## 2.3 路由的基本使用

## 2.3.1 导入包

​	1. react-router-dom

## 2.3.2 使用到的模块

	1. Link=>NavLink=>MyNavLink(自己封装)；
	1. Route、Route、BrowserRouter

### 2.3.3 路由链接实现切换组件

#### 1. Link

```js
{/* 原生html中，靠<a>跳转不同的页面 */}
{/* <a className="list-group-item" href="./about.html">About</a>
<a className="list-group-item active" href="./home.html">Home</a> */}
{/* 在React中靠路由链接实现切换组件--编写路由链接 */}

<Link className="list-group-item" to="/about">About</Link>
<Link className="list-group-item" to="/home">Home</Link>
```

#### 2. NavLink：高亮

```js
// 点击某一个，会执行atguigu的style属性：以前的方式，现在使用下面的方式
<NavLink activeClassName="atguigu" className="list-group-item" to="/about">About</NavLink>
<NavLink activeClassName="atguigu" className="list-group-item" to="/home">Home</NavLink>

// 点击某一个，会执行atguigu的style属性：现在使用方式isActive；
// 注意stguigu之前有空格，不然返回list-group-itematguigu
<NavLink className={({ isActive }) =>  "list-group-item" + (isActive ? " atguigu" : "")} to="/about">About</NavLink>
<NavLink className={({ isActive }) =>  "list-group-item" + (isActive ? " atguigu" : "")} to="/home">Home</NavLink>


// style是放在public下面index.html文件上；！important是提升重要性，因为引用的bootstrap级别较高
<style>
    .atguigu {
      background-color: orange !important; 
    }
  </style>
```

#### 3. 自己封装一个NavLink

1. 定义一个MyNavLink组件

   ```js
   // MyNavLink组件中index.js文件
   import React, { Component } from 'react';
   import {NavLink} from 'react-router-dom'
   
   export default class MyNavLink extends Component {
     render() {
       return (   
         <NavLink className={({ isActive }) =>  "list-group-item" + (isActive ? " atguigu" : "")} {...this.props}/>
       )
     }
   }
   
   // this.props中children属性表面其传入的Home值
   ```

2. 原先位置更换

   ```js
   <MyNavLink to="/home">Home</MyNavLink>
   <MyNavLink to="/about">About</MyNavLink>
   ```

### 2.3.4 注册路由

1. 以前的方式

   ```js
   {/* 注册路由 */}
   <Route path="/about" component={About}/>
   <Route path="/home" component={Home}/>
   ```

2. 现在的方式

   ```js
   // Routers包裹，element里面为组件
   <Routes>
     {/* 设置默认路由  */}
     <Route path="" element={<Homepage/>} /> 
     {/* 区分路由 */}
     <Route path="/home" element={<Homepage/>} /> 
     <Route path="/about" element={<About/>} />
   </Routes>           
   ```

   


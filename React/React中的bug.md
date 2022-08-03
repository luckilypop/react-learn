# 一、渲染组件

1. 入口文件：index.js 

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
```

## 二、路由

## 2.1 NavLink

1. 以前方式

   ```js
   // 点击某一个，会执行atguigu的style属性：以前的方式，现在使用下面的方式
   <NavLink activeClassName="atguigu" className="list-group-item" to="/about">About</NavLink>
   <NavLink activeClassName="atguigu" className="list-group-item" to="/home">Home</NavLink>
   ```

2. 现在方式

   ```js
   // 点击某一个，会执行atguigu的style属性：现在使用方式isActive；
   // 注意stguigu之前有空格，不然返回list-group-itematguigu
   <NavLink className={({ isActive }) =>  "list-group-item" + (isActive ? " atguigu" : "")} to="/about">About</NavLink>
   <NavLink className={({ isActive }) =>  "list-group-item" + (isActive ? " atguigu" : "")} to="/home">Home</NavLink>
   ```

## 2.2 注册路由

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

   
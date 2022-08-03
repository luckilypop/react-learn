# React

# 一、React概述

1. React 是一个声明式，高效且灵活的用于构建用户界面的 JavaScript 库。
2. 使用 React 可以将一些简短、独立的代码片段组合成复杂的 UI 界面，这些代码片段被称作“组件”。

## 1.1 React特点

1. 采用**组件化模式**、**声明式编码**，提高开发小路以及组件复用率；

   > 模块化模式：
   >
   > 命令式编码：注重一步一步执行；

2. 在React Native 中可以使用React语法进行移动端开发；

3. 使用**虚拟DOM**技术+优秀的**Diffing算法**，尽量减少与真实DOM的交互； 


## 1.2 react高效的原因

1. 虚拟DOM技术；
2. Diffing算法，最小化页面重绘；

# 二、虚拟DOM

1. 本质是Object类型的对象（一般对象）
2. 虚拟DOM比较“轻”，真实DOM比较“重”[属性多]，因为虚拟DOM是React内部在用，无需真实DOM上那么多的属性。
3. 虚拟DOM最终会被React转化为真实DOM，呈现在页面上。

## 2.1 创建虚拟 DOM 

### 2.1.1 纯 JS 方式(一般不用)

```javascript
const VDOM = React.createElement('h1',{id:'title'},React.createElement('span',{},'Hello,React'))
```

### 2.2.2 JSX 方式

```javascript
const VDOM = (  /* 此处一定不要写引号，因为不是字符串 */
			<h1 id="title">
				<span>Hello,React</span>
			</h1>
		)
```

## 2.2 **渲染虚拟** DOM

1. 语法: ReactDOM.render(virtualDOM, containerDOM)

2. 作用: 将虚拟 DOM 元素渲染到页面中的真实容器 DOM 中显示

3. 参数说明：

   ​	(1).参数一: 纯 js 或 jsx 创建的虚拟 dom 对象

   ​	(2).参数二: 用来包含虚拟 DOM 元素的真实 dom 元素对象(一般是一个 div) 

   ```javascript
   ReactDOM.render(VDOM,document.getElementById('test'))
   ```

# 三、JSX

1. 全程：JavaScriptXML

2. react 定义的一种类似于 XML 的 JS 扩展语法: JS + XML 本质是

   ```
   React.createElement(component[标签名], props[属性], ...children[内容])方法的语法糖
   ```

3. XML：早期用来存储、传输数据；后来JSON里面包括Parse和Stringfy方法；

4. 作用：用来简化创建虚拟 DOM

5. 格式：

   ```javascript
   var ele=<h1>Hello JSX!</h1>
   //注意 1：它不是字符串, 也不是 HTML/XML 标签
   //注意 2：它最终产生的就是一个 JS 对象
   ```

## 3.1 语法规则

1. 定义虚拟DOM时，不要写引号。

2. 标签中混入**JS表达式**时要用{}。

3. 样式的类名指定不要用class，要用className。

4. 内联样式，要用style={{key:value}}的形式去写。

5. 只有一个根标签

6. 标签必须闭合

7. 标签首字母

   > (1).若小写字母开头，则将该标签转为html中同名元素，若html中无该标签对应的同名元素，则报错。
   >
   > (2).若大写字母开头，react就去渲染对应的组件，若组件没有定义，则报错。

## 3.2 区分js表达式和js语句

1. 表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方，函数是表达式，

2. js语句(代码)：if/for/while

## 3.3 babel.js 的作用

1. 浏览器不能直接解析 JSX 代码, 需要 babel 转译为纯 JS 的代码才能运行；
2. 只要用了 JSX，都要加上 type="text/babel", 声明需要 babel 来处理；

## 3.4 小练习

```javascript
<body>
    <!-- 1.创建容器 -->
    <div id="test"></div>

    <!-- 2.引入react库，具有依赖顺序 -->
    <!-- 引入react核心库 -->
	<script type="text/javascript" src="../js/react.development.js"></script>
	<!-- 引入react-dom，用于支持react操作DOM -->
	<script type="text/javascript" src="../js/react-dom.development.js"></script>
	<!-- 引入babel，用于将jsx转为js -->
	<script type="text/javascript" src="../js/babel.min.js"></script>

    <script type="text/babel">
        const myDate = ['小明', '小红', '小白'];

        // 1. 创建虚拟DOM：
        // 注意：();ul里面是js表达式内容，所以需要{};ul里面不能写js语句，例如写for循环报错；报错key的值
        const VDOM = (
            <div>
                <h1 className="name">班级学生名字</h1>
                <ul>
                    {
                        myDate.map((value, index)=>{
                            return <li key={index} style={{color:'green', fontsize:'32px'}} >{value}</li>
                        })
                    }
                    
                </ul>    
            </div>
        );
        // 2.渲染虚拟DOM到页面
        ReactDOM.render(VDOM, document.getElementById('test'));

    </script>
</body>
```

![image-20220730135423140](https://raw.githubusercontent.com/luckilypop/WebFront/main/react/202208032051028.png)

# 四、模块化和组件化

## 4.1 模块

1. 理解：向外提供特定功能的 js 程序, 一般就是一个 js 文件 
2. 为什么要拆成模块：随着业务逻辑增加，代码越来越多且复杂。
3. 作用：复用 js, 简化 js 的编写, 提高 js 运行效率 

## 4.2 模块化

1. 当应用的 js 都以模块来编写的, 这个应用就是一个模块化的应用

## 4.3 组件

1. 理解：用来实现局部功能效果的代码和资源的集合(html/css/js/image 等等) 
2. 为什么要用组件： 一个界面的功能更复杂 
3. 作用：复用编码, 简化项目编码, 提高运行效率

## 4.4 组件化

当应用是以多组件的方式实现, 这个应用就是一个组件化的应用


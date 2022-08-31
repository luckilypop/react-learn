# jQuery

# 一、jQuery概述

1. jQuery 是一个 JavaScript 函数库
2. jQuery宗旨：write less， do more，写的更少，做的更多；
3. jQuery 的核心特性可以总结为：
   （1）具有独特的链式语法和短小清晰的多功能接口；
   （2）具有高效灵活的 css 选择器，并且可对 CSS 选择器进行扩展；
   （3）拥有便捷的插件扩展机制和丰富的插件。

## 1.1 jQuery的下载

## 1.2  jQuery的使用

1. 在html文档中创建一个script标签，将src属性的值设置为jQuery文档的路径；
2. 再创建一个script，在给script中写js代码；

## 1.3 jQuery的入口函数

1. 为什么写入口函数：当js写在div前面，拿不到div中的内容，所以要写入口函数；

```javascript
//jQuery入口函数-方式1：
$(function() {
    console.log($('div').text()); // 打印div中的内容
});

//jQuery入口函数-方式2：
$(document).ready(function() {
    console.log($('div').text());
});
```

## load事件 和 ready事件

1. load事件：原生JS的事件
2. ready事件：jQuery中的事件
3. ready事件的触发时间要早于load事件，ready事件是在DOM树渲染完毕后触发，
4. 而load事件是在页面中的节点加载完毕后触发，如页面中的图片都加载完毕了才会触发该事件
5. 页面中可以有多个ready事件同时存在，它们不会产生覆盖现象，而load只能有一个，后面加的会覆盖前面加的

## $ 符号

1. 指向了一个函数，就是jQuery的构造函数，在引入jQ之后，在window中绑定了$
2. 它可以用来选取页面中的元素，也可以将DOM对象转换为jQuery对象，还可以用来写入口函数。
3. 注意：jQuery中除了用$代表jQuery的构造函数，还可以用jQuery关键字来代表，即$ === jQuery。
4. 如果项目中有其它的框架里面也有$符号，那么为了避免冲突，我们这时就不要使$符号，而改用jQuery关键字

## DOM对象 jQuery对象

1. DOM对象：用原生JS的方式选取到的页面元素被称为DOM对象
2. jQuery对象：用jQuery的方式获取到的页面元素被称为jQuery对象
3. jQuery对象和DOM对象的相互转换
4. jQuery对象转换为DOM对象：jQuery对象[下标]

5. DOM 对象转换为jQuery对象：$(DOM对象)

```javascript
<script>
    var div = document.querySelector('#box'); // 原生DOM对象
	var $div = $('#box'); // jQ对象，其包含DOM对象
	console.log("div:", div);
	console.log("$div:", $div);
	console.log("DOM 对象转换为jQuery对象",$(div).text());
	console.log("jQuery对象转换为DOM对象", $div[0].innerHTML);
</script>
```

![image-20220728145203613](https://raw.githubusercontent.com/luckilypop/WebFront/main/js/images/202207281452729.png)

# jQ选择器

## 基本选择器

### 1. id

### class

单选择器

多选择器

### 元素选择器

### 组合选择器

#### 特殊选择器

this选择

\*选择器：全局选择器

## 层次选择器

### 后代选择器父元素  子元素 

### 子代选择器**父元素 > 子元素** 

### 相邻元素选择器 ：我**+**邻居（**后面一个元素**应用样式）

兄弟元素选择器：我**~**的兄弟元素（**后面所有的 p 标签**应用样 

式）

## 过滤选择器（重点

:first 匹配找到的**第一个**元素

:last 匹配找到的**最后一个**元素

:even 匹配索引是**偶数**的所有元素,**索引从 0 开始**

:odd 匹配索引是**奇数**的所有元素，**索引从 0 开始**

:eq(index)匹配索引**等于 index** 的所有元素，**index 索引从0 开始**，可以是负数

:gt(index) :匹配所有**大于**索引值的元素 **greaterthan**

:lt(index)匹配所有**小于**索引值的元素 **lessthan**

## 子元素选择器（重点）

nth-child **不限制类型（不同标签）**第几个元素。

nth-of-type **限制类型(同类型（标签）)下**的第几个元素

匹配父元素下，索引值是**偶数**的子元素：nth-child(**evev**)

选取父元素下,索引值是**奇数**的子元素：nth-child(**odd**)

匹配每个父元素下,索引值为 index 的子元素：nth-child(index) :nth-child(n) 选择器选取属于其父元素的不限类型的第 n 个子元素 的所有元素。 :nth-child(3n) 倍数

：first 和：first-child 的区别 

**：first:总体第一个元素**

 **：first-child:每个子类中的第一个元素** 



nth-last-child 倒着找

## **表单过滤选择器（重点）** 

（1）:input：过滤所有的输入框 （2）:text：过滤所有的文本框 （3）:password：过滤所有的密码框 （4）:radio：过滤所有的单选框 （5）:checkbox：过滤所有的复选框框 （6）:submit：过滤所有的提交按钮 （7）:reset：过滤所有的重置按钮 （8）:button：过滤所有的点击按钮

## 表单对象属性选择器

# 方法

text

html

val


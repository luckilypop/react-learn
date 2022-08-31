# JSON

# 一、JSON概述

1. JSON是JavaScript Object Notation的缩写，它是一种数据格式。

2. JSON的本质是一个字符串。

3. JSON 是一门独立的语言，用于存储和传输数据的格式，通常用于 服务端向网页传递数据 。

4. JSON 语言采用了 JavaScript 的语法，这意味着在 JavaScript 中处 理 JSON 数据不须要任何特殊的 API 或工具包，

5. 但是还是需要说明 的一点就是： JSON 和 Javascript 是两门不同的语言。

6. JSON 的格式仅仅是一个文本，而文本是可以被任何编程 语言读取及作为数据格式传递的。

7. JSON数据的书写位置：

   1. 可以写在独立的json文件中，文件的扩展名为.json;

   2. 将JSON写在JS文档中：' ' 包裹起来；

      ```javascript
      var data = '{"name": "Tom", "age": 10, "gender": "男"}';
      ```

# 二、JSON的构成

1. SON中的构成元素为：简单值、对象、数组；
2. 简单值：数值型、字符型、布尔型、Null，注意没有undefined
3. 对象：用来存储无序的属性，注意对象不可以有名称，也不可以以分号作为结尾,没有函数
4. 数组：用来存储有序的数据，注意数组也不可以有名称,也不需要用分号作为结尾
5. 注意:
   1. JSON中对象的键值对，键必须用双引号包起来
   2. JSON中的字符串必须用双引号包起来

# 三、JSON的语法

1. 数据在名称/值对中 
2. 数据由逗号分隔 
3. 大括号保存对象 
4.  中括号保存数组
5. JSON 数据的书写格式是：名称/值对。 名称/值对包括字段名称（在双引号中），后面写一个冒号，然后是 值

# 四、JSON与JS对象的区别和对比

[JSON与JS对象的区别和对比]: https://www.cnblogs.com/mflr/p/7774279.html

| 区别       | 含义               | 传输                       | 表现                                                         |
| ---------- | ------------------ | -------------------------- | ------------------------------------------------------------ |
| JSON       | 仅仅是一种数据格式 | 可以跨平台数据传输，速度快 | 1.键值对方式，键名必须加双引号 <br>2.值不能是方法函数，不能是undefined/NaN |
| Javascript | 表示类的实例       | 不能传输                   | 1.键值对方式，键名不加引号 <br>2.值可以是函数、对象、字符串、数字、 boolean等 |

# 五、JSON提供的方法

## 5.1 parse方法

1. 作用：将JSON字符串转换为JS对象
2. 格式：window.JSON.parse('JSON字符串');
3. 反序列化：JSON 解析就是通过某种手段，将【后台回传的字符串数据】转换成 【可以直接被使用的数据】的过程。

## 5.2 stringfy方法

1. 作用：将JS对象转换为JSON字符串
2. 格式：JSON.stringify(JS对象);
3. 序列化（有时候也被称作 JSON 数据封装或数据加密）

```javascript
var data = '{"name": "Tom", "age": 10,
"gender": "男"}';

// 将data数据转换为JS对象
var obj = JSON.parse(data);
console.log(obj); //Object { name: "Tom", age: 10, gender: "男" }

// 将obj对象再转换回JSON字符串
var data2 = JSON.stringify(obj);
console.log(data2); //{"name":"Tom","age":10,"gender":"男"} string
```


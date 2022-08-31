# DOM

# 一. DOM概述

1. DOM:**Document  Object  Model**，文档对象模型，DOM 可以以一 种独立于平台和语言的方式**访问和修改 html 文档的内容和结构**；

2. 它规定了操作文档和文档中内容的API；

3. DOM它**不是一个对象**。它主要使用**document对象**来操作文档和文档中的内容。

4. 它认为页面中的所有元素都可以被看做是一个<mark>节点</mark>，整个文档就是有这些节点构成的树形结构

   ![img](https://raw.githubusercontent.com/luckilypop/WebFront/main/js/images/202207252004052.jpg)

# 二. document 对象

1. **document 对象是 HTML 文档的根节点**；

2. document 对象是Window 对 象 的 一部分，可通过window.document 属性对其进行访问；

3. document 对象使我们可以从脚本中对HTML页面中的所有元素进行访问；

   **:smiley: 原因：**DOM 的所有操作都是以 `document` 对象开始。它是 DOM 的主“入口点”。从它我们可以访问任何节点

   ![image-20220725210023544](https://raw.githubusercontent.com/luckilypop/WebFront/main/js/images/202207252100617.png)

# 三、节点分类

1. 元素节点：指的就是HTML文档中的标签，eg：div

2. 属性节点：指的是标签中的**属性名称和属性值** ，eg：title="hello"；title="hello"

3. 文本节点：标签中的文本内容，eg：1，5，6

4. 注释节点：HTML注释

5. 文档节点：整个HTML文档被称为文档节点

   ```javascript
   <div title="hello" title="hello">1</div>
   
   <div>
       <!-- 下面是一个列表 -->
       <ul>
           <li>5</li>
           <li>6</li>
       </ul>
   </div>
   ```

## 3.1 节点的基本属性

1. 所有节点都是**对象类型**，所有节点都包含如下属性：

   > **nodeType：**表示节点类型
   > **nodeName：**表示节点名称
   > **nodeValue：**表示节点值

## 3.2 元素节点

1. nodeType属性：1

2. nodeName属性：元素名称

3. nodeValue属性：null

   ```javascript
   <div id="box" title="hello">我是一个div节点</div>
   <!-- 下面是一个div -->
   <script>        
           // 元素节点
           var obj = document.querySelector('#box');
   		console.log(obj)； //<div id="box" title="hello">
   		console.log(obj.nodeType); //1
           console.log(obj.nodeName); // DIV
           console.log(obj.nodeValue); //null
   	      
   </script>
   ```

## 3.3 属性节点

1. nodeType属性：2

2. nodeName属性：属性名称

3. nodeValue属性：属性值

   ```javascript
   <div id="box" title="hello">我是一个div节点</div><!-- 下面是一个div -->
   <script>        
           // 属性节点
           var obj = document.querySelector('#box'); // obj=<div id="box" title="hello">
           var attr = obj.getAttributeNode('id');
           console.log(attr); //id="box"
           console.log(attr.nodeType); // 2
           console.log(attr.nodeName); // id
           console.log(attr.nodeValue); // box
          
   </script>
   ```

## 3.4 文本节点

1. nodeType属性：3

2. nodeName属性：#text

3. nodeValue属性：文本内容

   ```javascript
   <div id="box" title="hello">我是一个div节点</div><!-- 下面是一个div -->
   <script>        
           // 文本节点
           var obj = document.querySelector('#box');// obj=<div id="box" title="hello">
   		var txt = obj.firstChild;	
   		console.log(txt); // #text "我是一个div节点"
           console.log(txt.nodeType); // 3
           console.log(txt.nodeName); // #text
           console.log(txt.nodeValue); // 我是一个div节点
          
   </script>
   ```

## 3.5 注释节点

1. nodeType属性：8

2. nodeName属性：#comment

3. nodeValue属性：注释内容

   ```javascript
   <div id="box" title="hello">我是一个div节点</div><!-- 下面是一个div -->
   <script>        
           // 注释节点
           var obj = document.querySelector('#box');// obj=<div id="box" title="hello">
           var comment = obj.nextSibling;
   		console.log(comment); // <!--  下面是一个div  -->
           console.log(comment.nodeType); // 8
           console.log(comment.nodeName); // # comment
           console.log(comment.nodeValue); // 下面是一个div
          
   </script>
   ```

## 3.6 文档节点

1. nodeType属性：9

2. nodeName属性：#document

3. nodeValue属性：null

   ```javascript
   <div id="box" title="hello">我是一个div节点</div><!-- 下面是一个div -->
   <script>        
           // 文档节点
           console.log(Document); // function ()
           console.log(document.nodeType); // 9
           console.log(document.nodeType); // #document
           console.log(document.nodeValue); // null
          
   </script>
   ```

# 四、document获取特殊节点属性

1. 格式：document.属性名；
2. 有nodeType；nodeType；nodeValue；

## 4.1 文档内部的某个节点

1. doctype：文档的类型-<!DOCTYPE html>
2. documentElement：整个html文档结构-<html>...</html>
3. body：返回html文档的body部分-<body>...</body>
4. head：返回html文档的head部分-<head>...</head>
5. title：返回html文档的title部分，也可以设置；
6. 文档节点：document，使用元素节点的ownerDocument属性获取文档节点

## 4.2 文档的对象属性

1. documentURI：返回当前网址URL；

2. URL：返回当前URL；

3. domain：返回当前的域名；

4. lastModified：返回当前的最新修改的实际；

5. location：返回**Location对象**，该对象用来操作url地址，包含如下属性和方法：

   > 1.href属性：获取或设置当前地址，能够利用它实现页面跳转；location.href = '传递一个 url';
   >
   > 2.assign方法：设置url地址，格式：document.location.assign('地址');
   >
   > 3.使用window对象的location属性来进行跳转，window.location = '新的地址';
   >
   > 4.注意：href属性和assign方法在实现页面跳转时都会产生浏览记录

6. readyState：返回当前文档的状态：

   > loading：加载 HTML 代码阶段（尚未完成解析）， 
   >
   > interactive：加载外部资源阶段， 
   >
   > complete：全部加载完成

## 4.3 文档内部特点节点的集合

1. anchors：获取页面中所有的具有name属性的超链接；
2. forms：获取页面中的所有的form节点；
3. images：取页面中的所有的img节点；
4. links：获取页面中带有href属性的超链接；
5. scripts：获取页面中的所有的script节点；

# 五、document获取元素节点:smiley:

1. 格式：docuemnt.getElementById(参数)

2. 返回的结果都是：object 

   ```javascript
   <div id="box">1</div>
   <div id="box">2</div>
   <p>3</p>
   <p>4</p>
   <input type="checkbox" name="hobby">爬山
   <input type="checkbox" name="hobby">游泳
   <input type="checkbox" name="hobby">唱歌
   <ul>
       <li>我是第1个li</li>
       <li class="sty">我是第2个li</li>
       <li>我是第3个li</li>
       <li class="sty">我是第4个li</li>
       <li>我是第5个li</li>
   </ul>
   
   
   <span>1</span>
   <span>2</span>
   <span>3</span>
   
   <div id="boxbox">
       <span>4</span>
   	<span>5</span>
   </div>
   ```

## 5.1 getElement*

### 5.1.1 getElementById()

1. 通过标签的**id属性**获取元素;

2. 参数不需要加#;

3. id值相同时只能获取第一个;

4. 参数区分大小写;

   ```javascript
   // 通过id获取
   var div1 = document.getElementById('box');
   console.log(div1); // <div id="box">
   ```

### 5.1.2 getElementsByTagName()

1. 通过标签名来获取元素，（类似数组）

2. 参数不区分大小写；

3. 返回值为“伪数组”，可以通过下标获取其中某个元素；

   ```javascript
   // 通过标签名获取
   var divs = document.getElementsByTagName('DIV');
   console.log(divs);
   ```

4. 结果：![image-20220725130153717](https://raw.githubusercontent.com/luckilypop/WebFront/main/js/images/getElementsByTagName%E7%BB%93%E6%9E%9C.png)

### 5.1.3 getElementsByName()

1. 通过标签的name属性获取元素。（类似数组）

2. 适用于表单元素

   ```javascript
   // 通过name属性获取，适用于表单元素
   var inputs = document.getElementsByName('hobby');
   console.log("getElementsByTagName结果:", inputs)
   ```

3. 结果：![image-20220725131513642](https://raw.githubusercontent.com/luckilypop/WebFront/main/js/images/getElementsByName%E7%BB%93%E6%9E%9C.png)

### 5.1.4 getElementsByClassName()

1. 通过标签的class属性来获取元素。（类似数组）

   ```javascript
   // 通过类获取元素
   var lis = document.getElementsByClassName('sty');
   console.log("getElementsByClassName:", lis);
   ```

2. 结果：![image-20220725131553738](https://raw.githubusercontent.com/luckilypop/WebFront/main/js/images/getElementsByClassName.png)

## 5.2 CSS选择器 

### 5.2.1 querySelector(css)

1. 通过css选择器来获取元素，只能返回符合选择器的**第一个元素**;

   ```javascript
   // 通过CSS选择器获取页面元素
   var objs = document.querySelector('div, p');
   console.log("querySelector:", objs);// <div id="box">
   ```

### 5.2.2 querySelectorAll(css)

1. 通过css选择器来获取元素，返回符合选择器的所有元素

   ```javascript
   // 通过CSS选择器获取页面元素
   var objs = document.querySelectorAll('div, p');
   console.log("querySelectorAll:", objs);
   ```

2. 结果：![image-20220725131629161](https://raw.githubusercontent.com/luckilypop/WebFront/main/js/images/querySelectorAll.png)

3. 某个局部找结果：

   ```javascript
   var span = document.querySelectorAll('#boxbox span');
   console.log(span);
   ```

   ![image-20220725132844551](https://raw.githubusercontent.com/luckilypop/WebFront/main/js/images/span.png)

### 5.2.3 match(css)

1. [elem.matches(css)](https://dom.spec.whatwg.org/#dom-element-matches) 检查 `elem` 是否与给定的 CSS 选择器匹配;

2. 返回 `true` 或 `false`;

   ```javascript
   <a href="http://example.com/file.zip">...</a>
   <a href="http://ya.ru">...</a>
   
   <script>
     // 不一定是 document.body.children，还可以是任何集合
     for (let elem of document.body.children) {
       if (elem.matches('a[href$="zip"]')) {
         alert("The archive reference: " + elem.href );
       }
     }
   </script>
   ```

### 5.2.4 closest(css)

1. 查找与 CSS 选择器匹配的最近的祖先;

2. 方法 `closest` 在元素中得到了提升，并检查每个父级;

3. 它与选择器匹配，则停止搜索并返回该祖

   ```javascript
   <h1>Contents</h1>
   
   <div class="contents">
     <ul class="book">
       <li class="chapter">Chapter 1</li>
       <li class="chapter">Chapter 2</li>
     </ul>
   </div>
   
   <script>
     let chapter = document.querySelector('.chapter'); // LI
   
     alert(chapter.closest('.book')); // UL
     alert(chapter.closest('.contents')); // DIV
   
     alert(chapter.closest('h1')); // null（因为 h1 不是祖先）
   </script>
   ```

## 5.3 getElement与querySelector的区别

1. **query** 选 择 符 选 出 来 的 元 素 及 元 素 数 组 是 **静态的** ， 而**getElement** 这种方法选出的元素是**动态的**;

2. 静态的就是说选出的所有元素的数组，不会随着文档操作而改变;

3. 使用的时候getElement 这种方法性能比较好，query选择符则比较方便;

   ```javascript
   <div>我是第1个</div>
   <div>我是第2个</div>
   <div>我是第3个</div>
   <div>我是第4个</div>
   <div>我是第5个</div>
   
       <script>
           var divs = document.getElementsByTagName('div'); //动态
           var divs2 = document.querySelectorAll('div'); //静态
           console.log("最初的getElement结果:", divs);
           console.log("最初的querySelector结果:",divs2);
   
   		// 创建新的div
           var newDiv = document.createElement('div');
           newDiv.innerHTML = '我是新的div';
           document.body.append(newDiv);
   
           console.log("之后的getElement结果:", divs);
           console.log("之后的querySelector结果:", divs2);
       </script>
   ```

4. 结果：![image-20220725132353368](https://raw.githubusercontent.com/luckilypop/WebFront/main/js/images/getElement%E4%B8%8EquerySelector%E7%9A%84%E5%8C%BA%E5%88%AB.png)



# 六、创建页面元素节点

## 6.1 createElement()

1. document.createElement('标签名称')：创建元素节点，返回值为创建好的空白的元素节点；
2. 要添加内容可以使用innerHTML属性

## 6.2 createTextNode()

1. document.createTextNode('文本内容')：创建文本节点，返回文本节点；

## 6.3 createAttribute()

1. 创建属性节点

# 七、元素节点中的内容操作

## 7.1 innerHTML

1. 能够获取和设置；
2. 获取结果的类型是string；
3. 设置时候能够解析标签；

## 7.2 innerText

1. 能够获取和设置；
2. 获取结果的类型是string；
3. 设置时候不能解析标签；

## 7.3 innerHTML和innerText不同之处

1. 获取结果不同之处：

   ```javascript
   <div id="box">
   	<p>hello</p>   
   	world
   </div>
   <script>
   	var div = document.querySelector('#box');
   	// 获取div中的内容
   	var str = div.innerHTML;
   	console.log("innerHTML获取结果:", str);//能够将div下面的所有的后代标签和内容一并获取
   	var str2 = div.innerText;
   	console.log("innerText获取结果:", str2);//只能获取div下面的文本内容
   </script>
   ```

   结果展示：

   ![image-20220725134930910](https://raw.githubusercontent.com/luckilypop/WebFront/main/js/images/%E8%8E%B7%E5%8F%96%E7%BB%93%E6%9E%9C%E4%B8%8D%E5%90%8C.png)

2. 设置结果不同之处

   ```javascript
   var div2 = document.querySelector('#box2');
   div2.innerHTML = 'ok'; //显示ok
   div2.innerText = 'ok'; //显示ok，和innerHTML无差别；
   div2.innerHTML = '<i>ok</i>'; //显示ok
   // div2.innerText = '<i>ok</i>'; //显示<i>ok</i>，不能解析标签
   ```

## 7.4 textContent

1. innerText

## 7.4 value：适用于表单元素

1. 能够获取和设置；
2. 获取结果的类型是string；

# 八、document操作属性节点:smiley:

## 8.1 属性节点的操作

### 8.1.1 属性节点的获取

#### 1. attributes属性

1. 利用元素节点的attributes属性来获取到所有的属性节点；

2. 可以使用下标获取某个属性节点；attrs[0]

3. 拥有nodeType,nodeName,nodeValue

   ```javascript
   <div id="box" title="helloworld"></div>
   <script>
       var div = document.querySelector('#box');
       var attrs = div.attributes;
       console.log(attrs);
   </script>
   ```

   结果：

   ![image-20220725141148711](https://raw.githubusercontent.com/luckilypop/WebFront/main/js/images/image-20220725141148711.png)

   在获取的节点中查找其attributes属性：

   ![image-20220725141100835](https://raw.githubusercontent.com/luckilypop/WebFront/main/js/images/image-20220725141100835.png)

#### 2. getAttributeNode() 

1. 获取元素身上的**某个属性节点**，可以使用元素节点.getAttributeNode('属性名')方法;

   ```javascript
   var attr = div.getAttributeNode('id');
   console.log(attr); // id="box"
   var attr2 = div.getAttributeNode('title');
   console.log(attr2); // title="helloworld"
   ```

### 8.1.2 属性节点的创建

#### 1. createAttribute()

1. 作用：创建属性节点对象,返回值为创建好的属性节点对象；

2. 格式：document.createAttribute('属性名称');

3. 注意：属性节点创建好后，它没有对应属性值，需要调用value属性，为该属性节点添加值，格式：属性节点.value = 值；

4. 当属性节点对象处理完毕后，可以利用**setAttributeNode方法**，将这个属性节点添加到HTML元素上，格式：元素节点.setAttributeNode(属性节点对象);

   ```javascript
   <div id="box"></div>
   <script>
   	var div = document.querySelector('#box');
   
       // 创建属性节点title
       var res = document.createAttribute('title');
       // 利用value属性为上面的属性节点添加值
       res.value = 'hello';
       // 利用setAttributeNode方法将创建好的属性节点添加到div中
       div.setAttributeNode(res);
   </script>
   ```

   

### 8.1.3 属性节点的删除

#### 1. removeAttribute()

1. 格式：元素节点.removeAttribute('属性名称');

## 8.2 属性值的操作

### 8.2.1 属性值的获取

#### 1. getAttribute()

1. 格式：元素节点.getAttribute('属性名称');

   ```javascript
   <div id="box" title="hello" a="100"></div>
   <script>
       var div = document.querySelector('#box');
       var res = div.getAttribute('title');
       console.log(res); // hello
   </script>
   ```

#### 2. 属性节点的nodeValue

1. 格式：节点.nodeValue

   ```javascript
   <div id="box" title="hello" a="100"></div>
   <script>
       // 2.利用属性节点的nodeValue获取属性值
       var div = document.querySelector('#box');
       var arr = div.getAttributeNode('title');//获取属性节点
   	console.log(arr.nodeValue); // hello
   </script>
   ```

#### 3. 点语法

1. 元素节点.属性名称;（常用）

   ```javascript
   <div id="box" title="hello" a="100"></div>
   <script>
       var div = document.querySelector('#box');
       console.log(div.title); // hello
       console.log(div.id); // box
   </script>
   ```

#### 4. 中括号

1. 元素节点['属性名称'];（常用）

   ```javascript
   <div id="box" title="hello" a="100"></div>
   <script>
       var div = document.querySelector('#box');
       console.log(div['title']); // hello
       console.log(div['id']); // box
   </script>
   ```

#### 5. 区别

1. 中括号后面可以加变量，点语法后面不能加变量[学过的知识点:smiley:]

2. getAttribute可以操作自定义属性，点语法和中括号不能；

   ```javascript
   <div id="box" title="hello" a="100"></div>
   <script>
       console.log(div.getAttribute('a')); // 100
       console.log(div.getAttributeNode('a').nodeValue); // 100
       console.log(div.a); // undefined
       console.log(div['a']); // undefined
   </script>
   ```

### 8.2.2 属性值的设置

####  1. setAttribute() 

1. 格式：元素节点.setAttribute('属性名称', '属性值');
2. 可以修改和添加；

#### 2. 属性节点的nodeValue

#### 3. 点语法

#### 4. 中括号

```javascript
<div id="box" title="hello" a="100"></div>
<script>
    var div = document.querySelector('#box');
	
	// 1.可以使用setAttribute方法设置属性值
    div.setAttribute('title', 'world'); // 修改
    div.setAttribute('b', 200);// 新的添加，支持自定义属性


    // 2.利用属性节点的nodeValue
    div.getAttributeNode('title').nodeValue = 'ok';

    // 3.点语法
    div.title = 123;

    // 4.中括号
    div['title'] = '456';
</script>
```

## 8.3 class属性的操作

1. 获取class值的不同
2. 如果要使用点语法操作类，那么不可以直接写class，需要使用className

```javascript
<div id="box" class="sty1"></div>

<script>
    // 获取class的值
    var div = document.querySelector('#box');

    console.log(div.class);//出错，undifined
	// 如果要使用点语法操作类，那么不可以直接写class，需要使用className
    console.log(div.className);
    div.className = 'sty2';

    console.log(div['className']);
	// 如果要使用中括号的方式来操作类，那么也不可以直接写class，要写className

    console.log(div.getAttribute('class'));//可以直接使用class
    div.setAttribute('class', 'sty3');//可以直接使用classss
</script>
```

## 8.4 checked属性和selected属性

1. 使用JavaScript操作表单元素中的checked属性和selected属性，属性值需要设置为true、false；
2. 不要用JS写checked="checked"或selected="selected"；

## 8.5 table属性--自行查找

[table属性--自行查找]: https://zh.javascript.info/dom-navigation#dom-navigation-tables

## 8.6 setAttribute 和 createAttribute 的区别

# 九、DOM操作样式

## 9.1 行内样式

1. 用DOM操作行内样式，可以使用元素节点的style属性来操作

### 9.1.1 元素节点.style.CSS

1. 获取行内样式：元素节点.style.CSS属性名称，返回的是CSS样式声明对象；

2. 设置行内样式：元素节点.style.CSS属性名称 = 值;

3. div.style结果：

   ![image-20220725161626636](https://raw.githubusercontent.com/luckilypop/WebFront/main/js/images/202207251616683.png)

4. div.style.cssText：返回值为由所有行内样式形成的字符串

### 9.1.2 getPropertyValue()

1. 元素节点.style.getPropertyValue(propertyName)：读取某个CSS属性的值。

### 9.1.3 setProperty()

1. 元素节点.style.setProperty(propertyName,value)：设置某个CSS属性

### 9.1.4 removeProperty()

1. 元素节点.style.removeProperty(propertyName)：删除某个CSS属性。

## 9.2 内部样式和外部样式

### 9.2.1 getComputedStyle方法

1. 作用：可以在谷歌浏览器（包含火狐等其它浏览器，但是不包含低版本IE）获取或者设置外部样式表或内部样式表
2. 格式：window.getComputedStyle(元素节点, null); 返回css样式；
3. 返回值：返回经过计算的元素身上的样式

### 9.2.2 currentStyle属性

1. 要在低版本的IE浏览器下面获取内部或外部样式表，可以使用currentStyle属性

2. 格式:元素节点.currentStyle

3. 返回值:返回样式表对象

   ```javascript
   //  获取内部样式或外部样式的兼容写法
   function getStyle(ele, cssName) {
       if (window.getComputedStyle == undefined) {//如果等于undefined，说明是IE
           return ele.currentStyle[cssName]; //注意，此处不可以用点语法，因为点语法不支持变量
       } else {//谷歌浏览器
           return window.getComputedStyle(ele, null)[cssName];
       }
   }
   
   var div = document.getElementById('box');
   
   var res = getStyle(div, 'width');
   
   console.log(res);
   ```

# 十、页面节点

## 10.1 常见的节点

| 含义                   | 包含空白节点                                         | 不包含空白节点        |
| ---------------------- | ---------------------------------------------------- | --------------------- |
| 父元素的所有子节点     | childNodes                                           | children              |
| 父元素的第一个子节点   | firstChild === childNodes[0]                         | firstElementChild     |
| 父元素的最后一个子节点 | lastChild === childNodes[elem.childNodes.length - 1] | lastElementChild      |
| 父节点                 | parentNode                                           | parentElement         |
| 下一个兄弟节点         | nextSibling                                          | nextElementSibling    |
| 前一个兄弟节点         | previousSibling                                      | previousElementSiblng |

### 10.1.1 childNodes

:smiley:**注意事项：childNodes**看起来就像一个数组。但实际上它并不是一个数组，而是一个 <mark>集合</mark> — 一个类数组的可迭代对象。

1. 可以使用 `for..of` 来迭代；

   ```javascript
   for (let node of document.body.childNodes) {
     alert(node); // 显示集合中的所有节点
   }
   ```

2. 无法使用数组的方法，因为它不是一个数组：

   ```javascript
   alert(document.body.childNodes.filter); // undefined（这里没有 filter 方法！）
   ```

3. 如果我们想要使用数组的方法的话，我们可以使用 `Array.from` 方法来从集合创建一个“真”数组：

   ```javascript
   alert( Array.from(document.body.childNodes).filter ); // function
   ```

4. DOM 集合是只读的，不能通过类似 `childNodes[i] = ...` 的操作来替换一个子节点；

5. DOM 集合是实时的，反映了 DOM 的当前状态；

6. 不要使用 `for..in` 来遍历集合，`for..in` 循环遍历的是所有可枚举的（enumerable）属性。集合还有一些“额外的”很少被用到的属性，通常这些属性也是我们不期望得到的：

   ```javascript
   <body>
   <script>
     // 显示 0，1，length，item，values 及其他。
     for (let prop in document.body.childNodes) alert(prop);
   </script>
   </body>
   ```

### 10.1.2 parentElement 和 parentNode

1. `parentElement` 属性返回的是“**元素类型**”的父节点，而 `parentNode` 返回的是“任何类型”的父节点。这些属性通常来说是一样的：它们都是用于获取父节点。

2. 唯一的例外就是 `document.documentElement`：

   ```javascript
   alert( document.documentElement.parentNode ); // document
   alert( document.documentElement.parentElement ); // null
   ```

   :smiley:**原因：**根节点 `document.documentElement`（`<html>`）的父节点是 `document`。但 `document` 不是一个元素节点，是一个**文档节点**。所以 `parentNode` 返回了 `document`，但 `parentElement` 返回的是 `null`

3. 从任意节点 `elem` 到 `<html>` 而不是到 `document` 时，这个细节可能很有用:

   ```javascript
   while(elem = elem.parentElement) { // 向上，直到 <html>
     alert( elem );
   }
   ```

## 10.2 节点的增删查改

### 10.2.1 appenpChild方法

1. 作用：将某个节点以尾部追加的方式添加到容器中；
2. 格式：父节点.appendChild(要被添加的节点);
3. 返回值：被添加的元素节点

### 10.2.2 cloneNode方法

1. 作用：克隆节点
2. 格式：要被克隆的节点.cloneNode(参数);
3. 参数说明：true（克隆该节点下面的所有的后代节点）、false（默认，只克隆当前节点）
4. 返回值：克隆出来的节点
5. 注意：如果元素身上有事件，那么事件不会被克隆

### 10.2.3 insertBefore方法

1. 将某个节点插入到目标节点的前面
2. 父节点.insertBefore(要插入的新节点, 目标节点)

### 10.2.4 removeChild方法

1. 作用：删除节点
2. 格式：父节点.removeChild(要被删除的节点);
3. 返回值：被删除的元素，注意，被删除的元素被保存在内存中

### 10.2.5 replaceChild方法

1. 作用：替换某个节点
2. 格式：父节点.replaceChild(新的节点，旧的节点);
3. 返回值为被替换掉的节点

## 10.3 节点的判断

### 10.3.1 isEqualNode()方法

1. 作用：判断两个节点是否相等
2. 格式：节点1.isEqualNode(节点2);
3. 返回值：true、false

### 10.3.2 contains方法

1. 作用：判断某个节点是否包含另外的某个指定的节点
2. 格式：节点1.contains(可能包含的节点);
3. 返回值：true（包含）、false（不包含）

### 10.3.4 hasChildNodes方法

1. 作用：判断是否有子节点（true,false）
2. 格式：节点.hasChildNodes();
3. true（表示该元素不是一个空元素）、false（表示该元素是一个空元素）

# 十一、HTML元素操作方法

## 11.1 元素位置相关属性

### 11.1.1 offsetParent

1. 返回的是样式偏移时的参照物；
2. 如果元素没有祖先元素，那么返回的是body
3. 如果元素有祖先元素，但是祖先元素没有定位，那么返回的是body
4. 如果元素有祖先元素，且祖先元素**有定位**<mark>(CSS中的定位)</mark>，那么返回的是具有定位的且离该元素最近的祖先元素

### 11.1.2 offsetTop

1. 距离偏移对象顶部的距离
2.  格式：元素节点.offsetTop

### 11.1.3 offsetLeft

1. 距离偏移对象左侧的距离
2. 格式：元素节点.offsetLeft

## 11.2 元素的高度和宽度

### 11.2.1 offsetWidth       

1. 返回元素的宽度（包括元素宽度、内边距和边框，不包括外边距，不受滚动条影响）

### 11.2.2 offsetHeight     

1. 返回元素的高度（包括元素高度、内边距和边框，不包括外边距，不受滚动条影响）

### 11.2.3 clientHeight      

1. 返回元素的高度（包括元素高度、内边距，不包括边框和外边距,受滚动条影响）

### 11.2.4 clientWidth        

1. 返回元素的宽度（包括元素宽度、内边距，不包括边框和外边距,受滚动条影响）

### 11.2.5 注意

1. 如果要获取页面视口的宽度和高度，那么推荐用clientWidth与clientHeight，如果要获取元素的宽度和高度推荐offsetWidth和offsetHeight
2.  如果要获取视口的宽度和高度，需要采用如下方式
3. 视口宽度：var  变量名称 = document.documentElement.clientWidth || document.body.clientWidth;
4. 视口高度：var  变量名称 = document.documentElement.clientHeight || document.body.clientHeight;

# 十二、总结

## 12.1 获取元素节点

1. getElement
2. querySelector
3. body.children
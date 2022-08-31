# BOM

# 一、BOM概述

## 1.1 BOM的定义

1. Browser Object Model 是浏览器对象模型，
2. BOM由多个对象构成，是一个**对象的集合**；
3. 浏览器窗口的 window 对象是 BOM 的 顶层对象也是核心对象，其他对象都是该对象的子对象。

## 1.2 BOM构成图

1. window是顶级对象；
2. document 对象，文档对象；
3. location 对象，浏览器当前 URL 信息；
4. navigator 对象，浏览器本身信息；
5. screen 对象，客户端屏幕信息；
6. history 对象，浏览器访问历史信息；

![](E:/BaiduNetdiskDownload/%E7%AC%AC%E4%BA%8C%E9%98%B6%E6%AE%B5/015window%E5%AF%B9%E8%B1%A1/BOM%E7%BB%84%E7%BB%87%E7%BB%93%E6%9E%84%E5%9B%BE.png)

## 1.3 BOM 和 DOM 的关系

1. DOM 通过 document 对象来访问、控制、修改 html 和 xhtml 等文档中的内容；

2. BOM 通过 window 对象来访问、控制、修改浏览器中的内容联系：BOM 包含 DOM；

3. DOM 描述了处理网页内容的方法和接口，即操作页面内部；

4. BOM 描述了与浏览器进行交互的方法和接口，即操作页面之间；

   ![img](file:///C:\Users\yuke_\AppData\Local\Temp\ksohtml1068\wps2.jpg)

   ![img](file:///C:\Users\yuke_\AppData\Local\Temp\ksohtml1068\wps3.jpg)

# 二、window对象

## 2.1 window对象概述

1. window是顶级对象；
2. 其他节点为window的属性，只是这些属性也是对象；
3. 在浏览器中，window 对象有双重角色，它既是通过 javascript 访问浏览器窗口的一个接口，又是 ECMAScript 规定的 Global 对象。 
4. window对象也是一个全局对象，因为在全局作用域下面定义的所有的变量、方法都相等于给window对象绑定的属性或方法，可以使用window.的形式来使用这些属性和方法。在平时使用时可以将window.省略。 
5. 全局变量是 window 对象的属性。 全局函数是 window 对象的方法；
6. window对象不需要手动创建，当浏览器窗口被打开时，后台会自动创建一个用来管理当前窗口的window对象。当浏览器窗口被改变时该对象会被自动销毁；
7. 注意，如果是全局的变量或方法，还可以使用this.的形式来调用，因为在全局环境下window == this;

## 2.2 window对象常用属性

### 2.2.1 location

1. 可以使用window.location的形式获取到该属性。

2. 该对象的作用是帮助我们获取或操作url地址信息。

3. location对象包含的属性如下：

   | 属性名称     | 说明                                                         |
   | ------------ | ------------------------------------------------------------ |
   | href属性     | 获取或者设置url地址内容，<br>获取格式：window.location.href，<br>设置格式：window.location.href = 值； |
   | protocol属性 | 返回所使用的 web 协议（http: 或 https:）                     |
   | hostname     | 返回 web 主机的域名                                          |
   | port属性     | 返回的是端口号（如果地址中的端口号被省略，那么返回的结果为空串，默认为80） |
   | pathname     | 返回当前页面的路径和文件名                                   |
   | search属性   | 获取或者设置地址中的查询字符串                               |

4. location对象常用方法

   | 方法名称    | 说明                                                         |
   | ----------- | ------------------------------------------------------------ |
   | reload方法  | 重新加载页面，即实现页面的刷新，格式：location.reload();     |
   | assign方法  | 重新设置url地址，格式：location.assign('新的地址');会产生浏览记录 |
   | replace方法 | 替换当前地址，格式：location.replace('新的地址');不会产生浏览记录 |

### 2.2.2 history

1. 表示整个浏览器的页面栈对象；

2. 在对象中提供了一些属性和方法来帮助更好的控制整个浏览器中页面的访问。

3. history对象包含的属性如下：window.history.back()

   | 属性名称  | 说明                   |
   | --------- | ---------------------- |
   | back()    | 跳转到栈中的上一个页面 |
   | forward() | 跳转到栈中的下一个页面 |
   | go(num)   | 跳转到栈中的指定的页面 |

### 2.2.3  navigator

1. 使用window.navigator的形式获取该对象。

2. 利用该对象可以获取一些和使用的浏览器相关的信息

3. 对象包含的属性如下:

   | 属性名称      | 说明                                                         |
   | ------------- | ------------------------------------------------------------ |
   | appCodeName   | 浏览器代码名的字符串表示                                     |
   | appName       | 官方浏览器名的字符串表示                                     |
   | appVersion    | 浏览器版本信息的字符串表示                                   |
   | userAgent     | 返回和浏览器内核相关的信息，<br>如果用户是使用移动端设备打开的网页，那么该属性的返回值中会有mobile字符 |
   | cookieEnabled | 如果启用cookie返回true，否则返回false                        |
   | javaEnabled() | 如果启用java返回true，否则返回false                          |
   | platform      | 浏览器所在计算机平台的字符串表示                             |
   | plugins       | 安装在浏览器中的插件数组                                     |

### 2.2.4 screen

### 2.2.5 document

### 2.2.6 存储对象

1. Web 存储 API 提供了 sessionStorage （会话存储） 和 localStorage （本地存储；
2. 两个存储对象来对网页的数据进行添加、删除、修改、 查询操作

### 2.2.7 name属性

1. 该属性时window对象的一个属性，默认值为空字符串；

2. 该属性可以用来在不同窗口间进行数据的传递

   ```javascript
   // 窗口1中，加入超链接，窗口2中写入数据，进入窗口2后退回来，窗口1得到数据
   <body>
       <a href="newWindow.html">点击一下，跳转到窗口2</a>
       <script>
           console.log(window.name);
       </script>
   </body>
   
   // newWindow.html数据
   <body>
       <script>
           // 定义数据
           var str = 'hello';
   
           // 设置name属性的值
           window.name = str;
   
           console.log(window.name);
       </script>
   </body>
   ```

### 2.2.8 浏览器距离屏幕属性

| 属性名称 | 说明                             |
| -------- | -------------------------------- |
| screenX  | 获取浏览器窗口距离屏幕左侧的距离 |
| screenY  | 获取浏览器窗口距离屏幕顶端的距离 |

### 2.2.9 window尺寸属性

| 属性名称    | 说明                                                         |
| ----------- | ------------------------------------------------------------ |
| outerHeight | 设置或返回一个窗口的外部高度，包括所有界 面元素（如工具栏/滚动条） |
| outerWidth  | 设置或返回窗口的外部宽度，包括所有的界面 元素（如工具栏/滚动条） |
| innerheight | 返回窗口的文档显示区的高度                                   |
| innerwidth  | 返回窗口的文档显示区的宽度                                   |

## 2.3 window对象方法

![image-20220727105505002](C:/Users/yuke_/AppData/Roaming/Typora/typora-user-images/image-20220727105505002.png)

### 2.3.1 常用方法

#### 1. alert

1. 弹出警告框
2. 不解析标签
3. 支持转义字符

#### 2. confirm

1. 弹出确认框，window.confirm('提示文字');
2. 返回值为布尔值

#### 3. prompt

1. 弹出输入框，
2. 返回值为字符串类型

#### 4. isNaN

1. 判断参数是否为NaN，
2. 如果是NaN，返回true、否则返回fal

#### 5. isFinite

1. 判断参数是否为有限数值

#### 6. open

1. 作用：打开新窗口
2. 格式：window.open('地址', '窗口名称', '窗口特性')，三个参数都可以省略，如果省略表示打开一个空白窗口
3. 参数说明
     a. 窗口名称可以不写，如果不写，那么会多次打开新窗口，如果写，那么会打开一次新窗口，后面在执行open方法时会在上一次打开的窗口里面重新加载页面
     b. 窗口特性"width=XXXX height=XXXX top=XXXX left=XXXX"
4. 返回值：返回值是代表新窗口的window对象

#### 7. close 

1. 作用：关闭当前窗口
2. 格式：window.close();

### 2.3.2 定时器方法

参考：事件9.3.3

#### 1. setInterval方法

1. 作用：该方法被称为"间歇调用"函数，能够在指定的时间间隔下重复执行某些操作。它是一个**异步**的方法
2. 格式：window.setInterval(要重复执行的操作, 时间间隔);
3. 参数说明：
     a. 要重复执行的操作：可以是匿名函数，也可以是函数名称
     b. 时间间隔：以毫秒为单位，1秒 = 1000毫秒
4. 返回值：一个数值，该数值为定时器的编号，该编号可以用来清除页面中的定时器

#### 2. clearInterval方法

1. 作用：清除有setInterval设置的定时器
2. 格式：window.clearInterval(定时器编号);

### 2.3.3 延时器方法 

#### 1. setTimeout方法

1. 作用：该方法也被称为"超时调用函数"，作用是可以在延迟一定时间后执行某个操作
2. 格式：window.setTimeout(要执行的操作，延迟时间);
3. 参数说明：
     a. 要执行的操作：匿名函数、函数名称
     b. 延迟时间：以毫秒为单位
4. 返回值：返回值为一个数值，为该定时器的编号

#### 2. clearTimeout方法

1. 作用：清除有setTimeout生成的定时器
2. 格式：window.clearTimeout(定时器编号);

### 2.4.3 与窗口相关的方法

#### 1. moveTo方法

1. 作用：将窗口移动到指定的位置
2. 格式：代表窗口的window对象.moveTo(x, y);
3. 参数说明
     x：表示移动到的水平位置
     y；表示移动到的垂直位置

#### 2. moveBy方法

1. 作用：将窗口按照指定的距离进行移动，"相对位置"
2. 格式：代表窗口的window对象.moveBy(x, y);
3. 参数说明
     x：表示水平移动的距离
     y；表示垂直移动的距离

#### 3. resizeTo方法 

1. 作用：将窗口尺寸更改到指定的宽度和高度
2. 格式：代表要更改的窗口的window对象.resizeTo(宽度，高度);

#### 4. resizeBy方法

1. 作用：将窗口尺寸按照指定的数据进行扩展，"相对位置"
2. 格式：代表要更改的窗口的window对象.resizeBy(每次更改的宽度，每次更改的高度);

#### 5. scrollTo方法

1. 作用：移动窗口中滚动条到指定的位置
2. 格式：window.scrollTo(x, y)

#### 6. scrollBy方法

1. 作用：移动窗口中滚动条的位置
2. 格式：window.scrollBy(x, y)

# 三、数据解析

1. 数据解析：将【不能被直接使用的数据】通过某种方法转变为【能够 被直接使用的数据】的过程称为数据解析。 

2. 对于开发者来说最常见的数据解析就是将【字符串数据】解析 为【对象数据】；

   ```javascript
   // 得到一个字符串
   var data ="?name=frank&age=18&sex=male";
   
   // 字符串变为对象
   var infoArr = window.location.search.slice(1).split("&"); 
   var obj = {}; 
   
   for(var i=0;i<infoArr.length;i++){ 
   	var temp = infoArr[i].split("="); 
   	if(temp[0]){
   		obj[temp[0]] = temp[1];
   	} 
   }
   ```

# 四、页面加载和 js 文件解析顺序

## 4.1 一个页面加载过程

1. 用户输入网址（假设是个 html 页面，并且是第一次访问），浏览器向服务器发出请求，服务器返回 **html 文件**;
2. 浏览器开始载入 html 代码，发现＜head＞标签内有一个＜link＞标 签引用外部 CSS 文件;
3. 浏览器又发出 CSS 文件的请求，服务器返回这个 CSS 文件;
4. 浏览器继续载入 html 中**＜body＞**部分的代码，并且 CSS 文件已经拿到手了，可以开始渲染页面了;
5. 浏览器在代码中发现一个**＜img＞标签**引用了一张图片，向服务器发出请求。此时浏览器不会等到图片下载完，而是继续渲染后面的代码；
6. 服务器返回图片文件，由于图片占用了一定面积，影响了后面段落的排布，因此浏览器需要**回过头来重新渲染**这部分代码;
7. .浏览器发现了一个包含一行 Javascript 代码的**＜script＞标签**，赶快运行它；
8. Javascript 脚本执行了这条语句，它命令浏览器隐藏掉代码中的某个 ＜div＞ （style.display=”none”）。杯具啊，突然就少了这么一个元素，浏览器不得不重新渲染这部分代码；
9. 终于等到了＜/html＞的到来，浏览器泪流满面……
10. 还没完，用户点了一下界面中的“换肤”按钮，Javascript 让浏 览器换了一下＜link＞标签的 CSS 路径；
11. 浏览器召集了在座的各位＜div＞＜span＞＜ul＞＜li＞们，“大伙儿 收拾收拾行李，咱得重新来过……”，浏览器向服务器请求了新的 CSS 文件，重新渲染页面

## 4.2 外部js 加载顺序

1. 正常按照加载顺序执行；
2. 依赖关系的，将被依赖文件写前面，先执行；

### 4.2.1 defer

1. 属性值和属性名相同，作用是等待DOM加载完成后才去加载JS脚本

### 4.2.2 async

1. DOM 加载和 js 脚本加载异步执行，同时进行；
2. 优势：避免了因 DOM 文件过大导致的【文件加载阻塞】 ；
3. 缺陷：无法确定 js 脚本到底何时执行，并仅对外部 js 脚本 生效

![img](file:///C:\Users\yuke_\AppData\Local\Temp\ksohtml1068\wps4.jpg)

![img](file:///C:\Users\yuke_\AppData\Local\Temp\ksohtml1068\wps5.jpg)

# 五、浏览器性能优化

## 5.1 回流(重排)

1. 当 render tree 中的一部分(或全部)因为元素的规模尺寸，布局，隐藏等改变而需要重新构建。这就称为回流。
2. 每个页面至少需要一次回 流，就是在页面第一次加载的时候

## 5.2 重绘

1. 当 render tree 中的一些元素需要更新属性，而这些属性只是影响元素的外观，风格，而不会影响布局的，比如 background-color。则就叫称为重绘。 
2. 注：回流必将引起重绘，而重绘不一定会引起回流。

## 5.3 引起重绘和回流的原因

1. 页面初始渲染 
2. 改变字体，改变元素尺寸（宽、高、内外边距、边框，改变元素位 置等） （注意：如果修改属性不影响布局则不会发生重排） 
3. 改变元素内容（文本或图片等或比如用户在 input 框中输入文字） 
4. 添加/删除可见 DOM 元素（注意：如果是删除本身就 display:none 的元素不会发生重排；visibility:hidden 的元素显示或隐藏不影响重排） 
5. fixed 定位的元素,在拖动滚动条的时候会一直回流 
6. 调整窗口大小（Resizing the window） 
7. 计算 offsetWidth 和 offsetHeight 属性

## 5.4 如何从重绘和回流方面提高浏览器性能

1. 不要一项一项的去改变样式，尽可能一口气写完。(可以写在一起， 不要被打断就行)最好使用.style.cssText 
2. 读写 DOM 也尽量也放在一起 
3. 3.使用文档碎片 var linshi = document.createDocumentFragment(); 
4. 使用 fixed 或者 absolute 可以减少回流和重绘

## 5.5 DocumentFragment

1. documentFragment 是 nodeType 值 为 11，nodeName 的值为 #document-fragment.

2. documentFragment 是一个文档片段，一种‘轻量级节点

3. 通常作为仓库来使用，不存在 DOM 树上，是一种游离态

4. **用途**：当我们用 JS 的 DOM 创建很多节点时，在加入节点到 DOM 树上时， 节点需要一个个渲染，这样节点数较多时就会影响浏览器的渲染效率 ， 这个时候我们将创建的节点都放在 DocumentFragment 这样的节点上 ， 然后把DocumentFragment 加入至 DOM，只需要完成一次渲染就可以达到之 前很多次渲染的效果！！！

   ```javascript
   <script>
   	var ul = document.createElement('ul');
   
   	var flag = document.createDocumentFragment();//创建文档碎片
   
   	for(var i=1; i<=100; i++){
   		var li = document.createElement('li')
   		var liText = document.createTextNode(i);
   		li.appendChild(liText);
   		flag.appendChild(li);
   	}
   
   	ul.appendChild(flag);
   	document.body.appendChild(ul);
   </script>
   ```


# 六、call 和 apply

1. 每个函数都包含两个非继承而来的方法：call()方法和 apply() 方法。 
2. call()、apply()都是用来重定义 this 这个对象的 
3. 相同点：这两个方法的作用是一样的。 都是在特定的作用域中调用函数，等于设置函数体内 this 对象的值，以**扩充函数赖以运行的作用域。**
4. 注意：这两个方法来扩展函数的作用域时，借用过来的函数不再需要手动调用。在借用过来的那一刻该方法已经被执行了

## 6.1 call

1. 格式：函数.call(借用者，参数1，参数2，参数3...);

## 6.2 apply

1. 格式：函数.apply(借用者，[参数1，参数2，参数3...]);
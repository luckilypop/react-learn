# React_Basic
## DAY1:2022-7-11
### 1. jsx创建虚拟DOM步骤
>
    1. 创建容器。
    2. 引入react库:react核心库、react-dom（用于支持react操作DOM）、引入babel（用于jsx转为js）。
    3. 创建虚拟DOM。
    4. 渲染虚拟DOM到页面。
   
### 2. jsx语法规则
>
    1. 定义虚拟DOM时，不要写引号。
    2. 标签中混入JS表达式时要用{}。
    3. 样式的类名指定不要用class，要用className。
    4. 内联样式，要用style={{key:value}}的形式去写。
    5. 只有一个根标签
    6. 标签必须闭合
    7. 标签首字母
        (1). 若小写字母开头，则将该标签转为html中同名元素，若html中无该标签对应的同名元素，则报错。
        (2). 若大写字母开头，react就去渲染对应的组件，若组件没有定义，则报错。

**一定注意区分：【js语句(代码)】与【js表达式】**
1. 表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方
>
    下面这些都是表达式：
        (1). a
        (2). a+b
        (3). demo(1)
        (4). arr.map() 
        (5). function test () {}
2. 语句(代码)：
>
    下面这些都是语句(代码)：
        (1).if(){}
        (2).for(){}
        (3).switch(){case:xxxx}

### 3. 函数式组件执行
> 
    执行了ReactDOM.render(<MyConponent/>.....之后，发生了什么？
        1.React解析组件标签，找到MyConponent组件；
        2.发现组件是使用函数定义的，随后调用该函数；
        3.返回的虚拟DOM转为真实的DOM，随后呈现在页面中。
### 4. 类式组件执行
> 
    执行了ReactDOM.render(<MyConponent/>.....之后，发生了什么？
        1.React解析组件标签，找到MyConponent组件；
        2.发现组件是使用类定义的，随后new出来该类的实例，并通过实例调用到原型上的render方法；
        3.返回的虚拟DOM转为真实的DOM，随后呈现在页面中。
## DAY1:2022-7-12
### 1.组件核心属性：state

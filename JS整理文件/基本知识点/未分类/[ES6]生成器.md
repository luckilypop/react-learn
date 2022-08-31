# :smiley:[ES6]生成器

# 一、生成器概述

<div style=" font-size: 20px;color: #7CFC00 ;background-color: #F08080;font-weight: bold;border-radius: 8px;border-width: 5px;text-align: center">ES6新增</div>

1. 生成器其实就是一个特殊的函数；
2. 生成器函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同；
3. \* 的位置没有限制
4. 函数被调用时，它不会运行其代码。而是返回一个被称为 “generator object” 的特殊对象，返回的结果是**迭代器对象**；
5. 调用迭代器对象的 next 方法可以得到yield 语句后的值；

## 12.1 生成器函数的声明

1. 语法结构

   ```
   function* generateSequence() {
     yield 1;
     yield 2;
     return 3;
   }
   ```

```javascript
function * gen() {
    console.log("hello,world!");
}

let iterator = gen();
console.log(iterator) // 没有返回，需要调用next方法，才会返回
let res = iterator.next() // 打印hello，world！
console.log(res) // 迭代器返回，一个包含[value,done]的对象
```

![image-20220728205028812](https://raw.githubusercontent.com/luckilypop/WebFront/main/js/images/202207291111439.png)

## 12.2 yield

1. yield 是一条双向路（two-way street）：它不仅可以向外返回结果，而且还可以将外部的值传递到 generator 

2. next()的结果始终是一个具有两个属性的对象：

   > 1.value: 产出的（yielded）的值。
   > 2.done: 如果 generator 函数已执行完成则为 true，否则为 false。

3. yield 相当于函数的暂停标记，也可以认为是函数的分隔符，每调用一次 next方法，执行一段代码

4. eg：三个yield将函数分为4段；

```javascript
function * gen(){
    // 代码块：第一段
    console.log(111);
    yield '一只没有耳朵'; // yield 函数代码的分隔符，将函数代码分为几段，三个yield将函数分为4段
    
    // 代码块：第二段
    console.log(222);
    yield '一只没有尾部';
    // 代码块：第三段
    console.log(333);
    yield '真奇怪';
    // 代码块：第四段
    console.log(444);
}

let iterator = gen();
console.log(iterator.next()); //执行代码块：第一段
console.log(iterator.next()); //执行代码块：第二段
console.log(iterator.next()); //执行代码块：第三段
console.log(iterator.next()); //执行代码块：第四段

//可以直接遍历
for(let v of gen()){
    console.log(v); // 打印yield中的值
  }
```

![image-20220728205635205](https://raw.githubusercontent.com/luckilypop/WebFront/main/js/images/202207291111693.png)

## 12.3 生成器函数的参数

1. next 方法可以传递实参，作为 上一个yield 语句的返回值；

```javascript
<script>
    function * gen(arg){
        console.log(arg);
        let one = yield 111;
        console.log(one);
        let two = yield 222;
        console.log(two);
        let three = yield 333;
        console.log(three);
    }
    //执行获取迭代器对象
    let iterator = gen('AAA');
    console.log(iterator.next());
    //next方法可以传入实参，作为上一个yield返回的结果，如果没有参数，则yield返回undifined
    console.log(iterator.next('BBB')); // 第二个next传入的参数，作为第一个yield返回的结果，即one的值
    console.log(iterator.next('CCC'));
    console.log(iterator.next('DDD'));
    
</script>
```

![image-20220728210440335](https://raw.githubusercontent.com/luckilypop/WebFront/main/js/images/202207291111307.png)

## 12.4 generator是可迭代的

1. 以使用 for..of 循环遍历它所有的值

   ```javascript
   function* generateSequence() {
     yield 1;
     yield 2;
     return 3;
   }
   
   let generator = generateSequence();
   
   for(let value of generator) {
     alert(value); // 1，然后是 2
   }
   // 这个例子会先显示 1，然后是 2，然后就没了。它不会显示 3！
   
   //这是因为当 done: true 时，for..of 循环会忽略最后一个 value。
   //因此，如果我们想要通过 for..of 循环显示所有的结果，我们必须使用 yield 返回它们
   ```

   ```javascript
   function* generateSequence() {
     yield 1;
     yield 2;
     yield 3;
   }
   
   let generator = generateSequence();
   
   for(let value of generator) {
     alert(value); // 1，然后是 2，然后是 3
   }
   ```

## 12.5 generator.throw

## 12.6 generator.return

## 12.7 生成器函数在异步编程中的表现

1. 异步编程  文件操作 网络操作(ajax, request) 数据库操作;

2. 回调地狱

   ```javascript
   // 回调地狱
   setTimeout(() => {
       console.log(111);
       setTimeout(() => {
           console.log(222);
           setTimeout(() => {
               console.log(333);
           }, 3000);
       }, 2000);
   }, 1000);
   ```

3. 例子1

   ```javascript
   <script>
       // 异步编程  文件操作 网络操作(a
       // 1s 后控制台输出 111  2s后输出
       function one(){
           setTimeout(()=>{
               console.log(111);
               iterator.next();
           },1000)
       }
       function two(){
           setTimeout(()=>{
               console.log(222);
               iterator.next();
           },2000)
       }
       function three(){
           setTimeout(()=>{
               console.log(333);
               iterator.next();
           },3000)
       }
       function * gen(){
           yield one();
           yield two();
           yield three();
       }
       //调用生成器函数
       let iterator = gen();
       iterator.next();
   </script>
   ```

4. 例子2：

   ```javascript
   <script>
       //模拟获取  用户数据  订单数据  商品数据 
       function getUsers(){
           setTimeout(()=>{
               let data = '用户数据';
               //调用 next 方法, 并且将数据传入
               iterator.next(data);
           }, 1000);
       }
       function getOrders(){
           setTimeout(()=>{
               let data = '订单数据';
               iterator.next(data);
           }, 1000)
       }
       function getGoods(){
           setTimeout(()=>{
               let data = '商品数据';
               iterator.next(data);
           }, 1000)
       }
       function * gen(){
           let users = yield getUsers();
           let orders = yield getOrders();
           let goods = yield getGoods();
       }
       //调用生成器函数
       let iterator = gen();
       iterator.next();
   </script>
   ```


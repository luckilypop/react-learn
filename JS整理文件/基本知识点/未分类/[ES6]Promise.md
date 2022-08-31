# Promise

# 十三、:smiley:[ES6]Promise

1. Promise 是 ES6 引入的异步编程的新解决方案。
2. 语法上 Promise 是一个构造函数，用来封装异步操作并可以获取其成功或失败的结果

## 13.1 实例化promise

```javascript
<script>
    //实例化 Promise 对象
    const p = new Promise(function(resolve, reject){
        setTimeout(function(){
            // 如果调用成功，则调用resolve函数
            // let data = '数据库中的用户数据';
            // resolve
            // resolve(data);
            // 如果调用失败，则调用reject函数
            let err = '数据读取失败';
            reject(err);
        }, 1000);
    });
    //调用 promise 对象的 then 方法，接受两个参数，其都是函数
    // 如果p调用成功，then调用第一个回调函数，如果失败调用第二个回调参数
    p.then(function(value){
        console.log(value);
    }, function(reason){
        console.error(reason);
    })
</script>
```

## 13.2 promise 读取文件

1. 写入js文件中
2. 执行用node xxx.js

```javascript
//1. 引入 fs 模块
const fs = require('fs');

//2. 调用方法读取文件
// fs.readFile('./resources/为学.md', (err, data)=>{
//     //如果失败, 则抛出错误
//     if(err) throw err;
//     //如果没有出错, 则输出内容
//     console.log(data.toString());
// });

//3. 使用 Promise 封装
const p = new Promise(function(resolve, reject){
    fs.readFile("./resources/为学.md", (err, data)=>{
        //判断如果失败
        if(err) reject(err);
        //如果成功
        resolve(data);
    });
});

p.then(function(value){
    console.log(value.toString());
}, function(reason){
    console.log("读取失败!!");
});
```

## 13.3 promise 读取多个文件

```javascript
//引入 fs 模块
const fs = require("fs");

// fs.readFile('./resources/为学.md', (err, data1)=>{
//     fs.readFile('./resources/插秧诗.md', (err, data2)=>{
//         fs.readFile('./resources/观书有感.md', (err, data3)=>{
//             let result = data1 + '\r\n' +data2  +'\r\n'+ data3;
//             console.log(result);
//         });
//     });
// });

//使用 promise 实现
const p = new Promise((resolve, reject) => {
    fs.readFile("./resources/为学.md", (err, data) => {
        resolve(data);
    });
});

p.then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile("./resources/插秧诗.md", (err, data) => {
            resolve([value, data]);
        });
    });
}).then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile("./resources/观书有感.md", (err, data) => {
            //压入
            value.push(data);
            resolve(value);
        });
    })
}).then(value => {
    console.log(value.join('\r\n'));
});
```

## 13.4 :smiley:promise封装AJAX

```javascript
<script>
    // 接口地址: https://api.apiopen.top/getJoke
    const p = new Promise((resolve, reject) => {
        //1. 创建对象
        const xhr = new XMLHttpRequest();
        //2. 初始化
        xhr.open("GET", "https://api.apiopen.top/getJ");
        //3. 发送
        xhr.send();
        //4. 绑定事件, 处理响应结果
        xhr.onreadystatechange = function () {
            //判断
            if (xhr.readyState === 4) {
                //判断响应状态码 200-299
                if (xhr.status >= 200 && xhr.status < 300) {
                    //表示成功
                    resolve(xhr.response);
                } else {
                    //如果失败
                    reject(xhr.status);
                }
            }
        }
    })
    
    //指定回调
    p.then(function(value){
        console.log(value);
    }, function(reason){
        console.error(reason);
    });
</script>
```

## 13.5 promise.then 方法

1. then方法的返回结果是 Promise 对象, 对象状态由回调函数的执行结果决定；

2. 如果回调函数中返回的结果是 非 promise 类型的属性, 状态为成功, 返回值为对象的成功的值；

3. 链式调用 --改变回调地狱

   ```javascript
   <script>
       //创建 promise 对象
       const p = new Promise((resolve, reject)=>{
           setTimeout(()=>{
               resolve('用户数据');
               // reject('出错啦');
           }, 1000)
       });
       //调用 then 方法  then方法的返回结果是 Promise 对象, 对象状态由回调函数的执行结果决定
       //1. 如果回调函数中返回的结果是 非 promise 类型的属性, 状态为成功, 返回值为对象的成功的值
       const result = p.then(value => {
           console.log(value);
           //1. 非 promise 类型的属性
           // return 'iloveyou';
           //2. 是 promise 对象
           // return new Promise((resolve, reject)=>{
           //     // resolve('ok');
           //     reject('error');
           // });
           //3. 抛出错误
           // throw new Error('出错啦!');
           throw '出错啦!';
       }, reason=>{
           console.warn(reason);
       });
       //链式调用 --改变回调地狱
       // p.then(value=>{
       // }).then(value=>{
       // });
   </script>
   ```

## 13.6 promise.catch方法

```javascript
<script>
    const p = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            //设置 p 对象的状态为失败, 并设置失败的值
            reject("出错啦!");
        }, 1000)
    });
    // p.then(function(value){}, function(reason){
    //     console.error(reason);
    // });
    p.catch(function(reason){
        console.warn(reason);
    });
</script>
```

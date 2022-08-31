# Data对象

- **Date 对象是 JavaScript 提供的日期和时间的操作接口。**

# 一、创建日期和时间对象

1. 格式1：var  日期时间对象名称 = new Date();表示创建系统当前的日期时间对象
2. 格式2：var  日期时间对象名称 = new Date('日期时间字符串'); 将指定的日期时间字符串转换为日期时间对象
3. 格式3：var  日期时间对象名称 = new Date(毫秒值);返回的是距离1970年1月1日0时0分0秒的时间点

# 二、Date的方法

# 2.1 访问Date的方法

| 方法                                           | 说明                                                         |
| ---------------------------------------------- | ------------------------------------------------------------ |
| getYear()，getTime()                           | 获取年份（距离 1900 的年数），获取距离 1970 年 1 月 1 日的毫秒数 |
| getFullYear()，getMonth()，getDate()，getDay() | 获取全年（4 位数） ，月份（0-11），日期，星期几（0-6）,0：星期日，6：星期六 |
| getHours()，getMinutes()，getSeconds()         | 获取小时（0-23），分钟（0-59），秒数（0-59）                 |
| toLocaleString()                               | 获取当地的日期和时间                                         |
| toLocaleDateString()                           | 获取当地的日期                                               |
| toLocaleTimeString()                           | 获取当地的时间                                               |

# 2.2 设置Date的方法

| 方法                                                        | 说明                                                         |
| ----------------------------------------------------------- | ------------------------------------------------------------ |
| setYear()，setTime()                                        | 设置年份（距离 1900 的年数），设置距离 1970 年 1 月 1 日的毫秒数 |
| setFullYear()，setMonth()，setDate()，setDay()              | 设置全年（4 位数） ，月份（0-11），日期，星期几（0-6）,0：星期日，6：星期六 |
| setHours()，setMinutes()，setSeconds()，setMilliseconds(ms) | 设置小时（0-23），分钟（0-59），秒数（0-59）                 |

# 2.3 Date.parse

1. Date.parse(str) 方法可以从一个字符串中读取日期；

   ```javascript
   let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
   
   alert(ms); // 1327611110417  (时间戳)
   ```

# 2.4 Date.now()

- 返回当前的时间戳

# 三、自动校准？？

# 四、基准测试？？

# 五、日期转化为数字，日期差值

1. 当 Date 对象被转化为数字时，得到的是对应的时间戳，与使用 date.getTime() 的结果相同

   ```javascript
   let date = new Date();
   alert(+date); // 以毫秒为单位的数值，与使用 date.getTime() 的结果相同
   ```

2. 副作用：日期可以相减，相减的结果是以毫秒为单位时间差

   ```javascript
   // 可以用于时间测量
   let start = new Date(); // 开始测量时间
   
   // do the job
   for (let i = 0; i < 100000; i++) {
     let doSomething = i * i * i;
   }
   
   let end = new Date(); // 结束测量时间
   
   alert( `The loop took ${end - start} ms` );
   ```


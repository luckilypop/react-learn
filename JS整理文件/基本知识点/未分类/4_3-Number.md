# 一、Number型概述

1. 正数、负数、整数、小数、0、NaN、Infinity、-Infinity；
2. 二进制：0b开头，后面加0和1代码；
3. 八进制：以0开头，构成要素为0-7；
4. 十六进制：以0x开头，构成要素为0-9a-f；

| 内容                                 | 说明                                                         |
| ------------------------------------ | ------------------------------------------------------------ |
| NaN                                  | 1. Not a Number：以表示运算结果不是一个数值； <br>2. NaN和其它任何数据做运算时结果都是NaN； <br/>3. NaN也不等于NaN本身； <br/>4. 格式：isNaN(数据);如果返回值为true，则表示数据是NaN，否则不是； |
| Infinity 和 -Infinity                | 正无穷和负无穷                                               |
| Number.MAX_VALUE 和 Number.MIN_VALUE | JS中能够处理的最大值和最小值                                 |
| 小数                                 | 1. 小数，小数位数最多为17位<br/>2. JS中，不要和浮点型数据做大小的比较:0.1 + 0.2不等于0.3 |
| [ES6]:smiley:Number.EPSILON          | JavaScript 表示的最小精度<br>EPSILON 属性的值接近于 2.2204460492503130808472633361816E-16 |
| 二进制、八进制、十六进制             |                                                              |

# 二、[ES6]:smiley:数值扩展

### 2.1 对比0 和 Number.EPSILON

1. 用0.1+0.2==0.3 做对比

2. **不相等原因**：一个数字以其二进制的形式存储在内存中，一个 1 和 0 的序列。但是在十进制数字系统中看起来很简单的 0.1，0.2 这样的小数，实际上在二进制形式中是无限循环小数。

   ```javascript
   function equal(a, b){
       if(Math.abs(a-b) < Number.EPSILON){
           return true;
       }else{
           return false;
       }
   }
   console.log(0.1 + 0.2 === 0.3); // false
   console.log(equal(0.1 + 0.2, 0.3)) // true
   ```


# 三、方法

| 方法                                    | 说明                                                         |
| --------------------------------------- | ------------------------------------------------------------ |
| toString(base)                          | 给定 `base` 进制数字系统中 `num` 的字符串表示形式，num.toString(16)<br />base` 的范围可以从 `2` 到 `36`。默认情况下是 `10 |
| Number.isFinite()                       | 检查一个数值是否为有限的；<br />将其参数转换为数字，如果是常规数字而不是 `NaN/Infinity/-Infinity`，则返回 `true`<br />在所有数字函数中，包括 `isFinite`，**空字符串或仅有空格的字符串**均被视为 `0` |
| Number.isNaN()                          | 检查一个值是否为 NaN；<br />==Object.is(NaN，NaN) \=\=\= true== |
| Number.isInteger                        | 判断一个数值是否为整数                                       |
| Number.parseInt() 和Number.parseFloat() | 将全局方法 parseInt 和 parseFloat，移植到 Number 对象上面，使用不变 |
| Math.trunc                              | 用于去除一个数的小数部分，返回整数部分                       |
| Math.sign                               | 正数(1) 负数(-1) 零(0)                                       |
| Math.floor；Math.ceil；Math.round       |                                                              |
| toFixed(n)                              | 数字舍入到小数点后 `n` 位，并以字符串形式返回结果<br />注意 `toFixed` 的结果是一个字符串。如果小数部分比所需要的短，则在结尾添加零： |

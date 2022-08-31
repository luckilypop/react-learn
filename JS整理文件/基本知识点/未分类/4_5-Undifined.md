# Undifined

1. 只包含一个值，就是undefined；

2. 表示变量没有被初始化或赋值，或根本就没有定义该变量；

3. undefined和任何数据做运算，结果都是NaN;

4. undefined**不可以当做0来处理**；

   ```javascript
   var num;
   
   console.log(num); //变量没有赋值 undifined
   
   console.log(typeof num2); //变量没有被定义  undifined
   
   // undefined和任何数据做运算，结果都是NaN
   console.log(undefined + 100); // NaN
   
   // undefined不可以当做0来处理
   console.log(undefined == 0); // false
   ```


## 
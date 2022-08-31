## Null型

1. Null：只包含一个值，就是null，表示变量中还没有被存储引用类型的数据；

2. 作法：定义一个空对象，清除对象中数据；

3. **null可以和其它的数据进行运算，运算时当0时**；

4. 如果用关系运算符和0比较，结果为false；

5. undefined == null；

   ```javascript
   // 定义一个变量，要用这个变量存储对象，通常做法
   var obj = null;
   
   // 如果已经存储了一个对象，但是要把这个对象清空
   var obj2 = {
       a: 1,
       b: 2
   };
   obj2 = null;//表示清空obj2中的对象
   
   
   console.log(null + 100);//自动会转换为0 100
   console.log(null == 0) //但是如果用关系运算符和0比较，结果为false
   console.log(undefined == null) //true
   console.log(undefined === null) //false
   ```

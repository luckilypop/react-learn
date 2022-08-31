# [ES6]:smiley:Symbol

<div style=" font-size: 25px;color: #7CFC00 ;background-color: #F08080;font-weight: bold;border-radius: 8px;border-width: 5px;text-align: center">ES6新增</div>

1. Symbol，表示独一无二的值;
2. 一种类似于字符串的数据类型;  
3. symbol 不会被自动转换为字符串

# 一、Symbol 特点

1. Symbol 的值是唯一的，用来解决命名冲突的问题;
2. Symbol 值不能与其他数据进行运算;
3. Symbol 定义对象属性不能使用 for…in 循环遍历 ,但是可以使用Reflect.ownKeys 来获取对象的所有键名

# 二、“隐藏”属性

## 2.1 使用 Symbol("id") 作为键

1. symbol 允许我们创建对象的“隐藏”属性，代码的任何其他部分都不能意外访问或重写这些属性。

```
let user = { // 属于另一个代码
  name: "John"，
  [id]: 123 // 而不是 "id"：123
};

let id = Symbol("id");

user[id] = 1;

alert( user[id] ); // 我们可以使用 symbol 作为键来访问数据
```

==注意：==使用 Symbol("id") 作为键，比起用字符串 "id" 来有什么好处呢？

由于 user 对象属于另一个代码库，所以向它们添加字段是不安全的，因为我们可能会影响代码库中的其他预定义行为。但 symbol 属性不会被意外访问到。第三方代码不会知道新定义的 symbol，因此将 symbol 添加到 user 对象是安全的。

## 2.2 symbol 在 for…in 中会被跳过

```
let id = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id]: 123
};

for (let key in user) alert(key); // name, age（没有 symbol）

// 使用 symbol 任务直接访问
alert("Direct: " + user[id]); // Direct: 123
```

## 2.3 Object.keys(user)  和 Object.assign 忽略

```
let id = Symbol("id");
let user = {
  [id]: 123
};

let clone = Object.assign({}, user);

alert( clone[id] ); // 123
```

1.7.2 Symbol 创建

```javascript
// 方式1：创建Symbol
let s = Symbol();
console.log(s, typeof s); // Symbol() symbol

let s2 = Symbol('尚硅谷');
let s3 = Symbol('尚硅谷');
console.log(s2===s3) //flase,虽然内容一样，但是值唯一的，不一样

//方式2：Symbol.for 创建
let s4 = Symbol.for('尚硅谷');
let s5 = Symbol.for('尚硅谷');
console.log(s4===s5) //true

//不能与其他数据进行运算
//    let result = s + 100;
//    let result = s > 100;
//    let result = s + s;
```

# 三、 全局Symbol

## 3.1 Symbol.for(key)

1. 有一个全局 symbol 注册表，可以在其中创建 symbol 并在稍后访问它们，它可以确保每次访问相同名字的 symbol 时，返回的都是相同的 symbol。

```
// 从全局注册表中读取
let id = Symbol.for("id"); // 如果该 symbol 不存在，则创建它

// 再次读取（可能是在代码中的另一个位置）
let idAgain = Symbol.for("id"); // Symbol.for(key) 按名字返回一个 symbol

// 相同的 symbol
alert( id === idAgain ); // true
```

## 3.2 Symbol.keyFor

1. 通过全局 symbol 返回一个名字；
2. Symbol.keyFor 内部使用全局 symbol 注册表来查找 symbol 的键。所以它不适用于非全局 symbol。
3. 如果 symbol 不是全局的，它将无法找到它并返回 undefined。

```
// 通过 name 获取 symbol
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// 通过 symbol 获取 name
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id
```

```
let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert( Symbol.keyFor(globalSymbol) ); // name，全局 symbol
alert( Symbol.keyFor(localSymbol) ); // undefined，非全局

alert( localSymbol.description ); // name
```



# 四、Symbol 创建对象属性

```javascript
<script>
    //方法1：向对象中添加方法 up down
    let game = {
        name:'俄罗斯方块',
        up: function(){},
        down: function(){}
    };
    
    //声明一个对象
    let methods = {
        up: Symbol(),
        down: Symbol()
    };
    game[methods.up] = function(){
        console.log("我可以改变形状");
    }
    game[methods.down] = function(){
        console.log("我可以快速下降!!");
    }
    console.log(game);

    //方法2：
    let youxi = {
        name:"狼人杀",
        [Symbol('say')]: function(){ //里面要[字符串]
            console.log("我可以发言")
        },
        [Symbol('zibao')]: function(){
            console.log('我可以自爆');
        }
    }
    console.log(youxi)
    
</script>
```

![image-20220728194402799](https://raw.githubusercontent.com/luckilypop/WebFront/main/js/images/202207281944889.png)

# 五、系统Symbol 内置值

1. Symbol 内置值是Symbol 的属性；

2. 内置的 Symbol 值，指向语言内部使用的方法。可以称这些方法为魔术方法，因为它们会在特定的场景下自动执行。

   | 内置值                    | 说明                                                         |
   | ------------------------- | ------------------------------------------------------------ |
   | Symbol.hasInstance        | 当其他对象使用 instanceof 运算符，判断是否为该对象的实例时，会调用这个方法 |
   | Symbol.isConcatSpreadable | 对象的 Symbol.isConcatSpreadable 属性等于的是一个布尔值，表示该对象用于 Array.prototype.concat()时，是否可以展开。 |
   | Symbol.species            | 创建衍生对象时，会使用该属性                                 |
   | Symbol.match              | 当执行 str.match(myObject) 时，如果该属性存在，会调用它，返回该方法的返回值。 |
   | Symbol.replace            | 当该对象被 str.replace(myObject)方法调用时，会返回该方法的返回值 |
   | Symbol.search             | 当该对象被 str.search (myObject)方法调用时，会返回该方法的返回值。 |
   | Symbol.split              | 当该对象被 str.split(myObject)方法调用时，会返回该方法的返回值。 |
   | Symbol.iterator           | 对象进行 for...of 循环时，会调用 Symbol.iterator 方法，返回该对象的默认遍历器 |
   | Symbol.toPrimitive        | 该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值 |
   | Symbol.toStringTag        | 在该对象上面调用 toString 方法时，返回该方法的返返回值。     |
   | Symbol.unscopables        | 该对象指定了使用 with 关键字时，哪些属性会被 with环境排除。  |
   | symbol.description        | let id = Symbol("id");<br/>alert(id.description); // id      |

3. 举例说明：

   ```
   <script>
       class Person{
           static [Symbol.hasInstance](param){
               console.log(param);
               console.log("我被用来检测类型了");
               return false;
           }
       }
       let o = {};
       console.log(o instanceof Person);
       const arr = [1,2,3];
       const arr2 = [4,5,6];
       arr2[Symbol.isConcatSpreadable] = false;
       console.log(arr.concat(arr2));
   </script>
   ```

   ![image-20220728195758691](https://raw.githubusercontent.com/luckilypop/WebFront/main/react/202208041942929.png)


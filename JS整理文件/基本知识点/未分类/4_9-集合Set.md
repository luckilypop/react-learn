# [ES6]:smiley:Set

<div style=" font-size: 20px;color: #7CFC00 ;background-color: #F08080;font-weight: bold;border-radius: 8px;border-width: 5px;text-align: center">ES6新增</div>

# 一、Set概述

1. ES6 提供了新的数据结构 Set（集合）。
2. 它类似于数组，但成员的值都是唯一的；
3. 集合实现了 iterator 接口，所以可以使用『扩展运算符』和『for…of…』进行遍历

# 二、属性和方法

| 属性或者方法      | 说明                                                         |
| ----------------- | ------------------------------------------------------------ |
| new Set(iterable) | 创建一个 `set`，如果提供了一个 `iterable` 对象（通常是数组），将会从数组里面复制值到 `set` 中。 |
| size              | 返回集合的元素个数                                           |
| add(value)        | 增加一个新元素，返回当前集合                                 |
| delete(value)     | 删除元素，返回 boolean 值，如果 `value` 在这个方法调用的时候存在则返回 `true` ，否则返回 `false`。 |
| has(value)        | 检测集合中是否包含某个元素，返回 boolean 值                  |
| clear             | 清空集合，返回 undefined                                     |

```javascript
<script>
    //声明一个 set
    let s = new Set();
    let s2 = new Set(['大事儿','小事儿','好事儿','坏事儿','小事儿']);
    for(let v of s2){
        console.log(v);
    }
    console.log(s2); // Set(4) [ "大事儿", "小事儿", "好事儿", "坏事儿" ]

    //元素个数
    console.log(s2.size);
    //添加新的元素
    s2.add('喜事儿');
    //删除元素
    s2.delete('坏事儿');
    //检测
    console.log(s2.has('糟心事'));
    //清空
    s2.clear();
    console.log(s2);  
</script>
```

![image-20220729124033275](https://raw.githubusercontent.com/luckilypop/WebFront/main/js/images/202207291240352.png)

# 三、实例

```javascript
<script>
    let arr = [1,2,3,4,5,4,3,2,1];
    //1. 数组去重
    let res = new Set(arr) // res为集合，集合里面没有重复值
    let result1 = [...new Set(arr)]; // 集合变成数组

    console.log(res); // Set(5) [ 1, 2, 3, 4, 5 ]
    console.log(result1); // Array(5) [ 1, 2, 3, 4, 5 ]

    //2. 交集
    let arr2 = [4,5,6,5,6];
    let result2 = [...new Set(arr)].filter(item => new Set(arr2).has(item));
    console.log(result2); // Array [ 4, 5 ]

    //3. 并集
    let union = [...new Set([...arr, ...arr2])];
    console.log(union); // Array(6) [ 1, 2, 3, 4, 5, 6 ]

    //4. 差集
    let diff = [...new Set(arr)].filter(item => !(new Set(arr2).has(item)));
    console.log(diff); // Array(3) [ 1, 2, 3 ]
</script>
```

# 四、Set 迭代（iteration）

## 4.1 迭代方法

1. `set.keys()` —— 遍历并返回一个包含所有值的可迭代对象；
2. set.values() —— 与 set.keys() 作用相同，这是为了兼容 Map；
3. set.entries() —— 遍历并返回一个包含所有的实体 [value, value] 的可迭代对象，它的存在也是为了兼容 Map；

## 4.2 or..of 或 forEach 来遍历 Set；

```javascript
let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) alert(value);

// 与 forEach 相同：
set.forEach((value, valueAgain, set) => {
  alert(value);
});
```


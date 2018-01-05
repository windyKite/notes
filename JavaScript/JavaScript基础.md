## JavaScript数据类型
JavaScript有7种数据类型：
- number
- string
- symbol
- boolean
- null
- undefined
- object
1. number
- 整数和小数：`1`、`1.1`
- 科学计数法：`12e2` === `1200`
- 二进制：`0b11` === `3`
- 八进制：`011` === `9`
- 十六进制：`0x11` === 17
2. string
- 空字符串：`""`
- 多行字符串：
    ```
        var str = '第一行' + 
                    '第二行'  // 不含回车符号，length不需要加上回车长度
    ```
    或
    ```
        var str = `第一行
                    第二行` // 含有回车符号，length需要加上回车长度
    ```
    ES6 新语法：可以使用 `` 符号包裹多行字符串，构建多行字符串。
3. boolean
- boolean取值：true 和 false
- a && b : a 和 b 都为 true，则 true ，否则 false
- a || b : a 和 b 都为 false，则 false，否则 true
4. undefined 和 null
    两个都表示没有值。
<ol type="i">
    <li>如果一个对象没有赋值，那么就是undefined</li>
    <li>表示一个还没有赋值的对象，就用null。如`var obj = null`</li>
</ol>
5. symbol
    Symbol可以生成一个全局唯一的值。  

```
var a1 = Symbol('a')
var a2 = Symbol('b')
a1 !=== a2   // true
```
6. object
- object 就是上面几种对象无序地组合在一起。
- object 里面可以再含有 object
- object 的 key 一定是字符串，无论表现形式怎么样 typeof xxx === 'string' 为true
- object['']
- object['key'] === object.key
- object 的 key 可以是变量，此时 key 的值是变量的值。
- 删除 object 属性：`delete object['key']`
- 遍历 object key：`Object.keys()`
- 遍历 object 属性：`for(var xxx in object)`
    - 用来遍历对象
    - 跳过不可遍历key
    - 不仅遍历对象自身属性，还遍历继承属性

7. typeof xxx 返回值  
![image.png](http://upload-images.jianshu.io/upload_images/7574134-ac92025cc5040758.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
'function'并不是一个类型。
## 类型转换
#### 任意类型转字符串
1. String()  
![](http://upload-images.jianshu.io/upload_images/7574134-47b469d721d4b965.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
2. x.toString()  
![](http://upload-images.jianshu.io/upload_images/7574134-a12ff38742e9b9b9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
3. 骚操作 `x + ''`  
![](http://upload-images.jianshu.io/upload_images/7574134-ac15050ab01d7e8d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### 任意类型转数值
1. Number(x)
2. parseInt(x,10)  [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
    - 第二个参数表示第一个参数的进制
    - 从左往右，遇到不是数字的值就停止并返回已经转换的值
    - 总是返回十进制数
3. parseFloat()   [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)
    - 总是返回浮点数
    - 从左往右，遇到不是数字的值就停止并返回已经转换的值
4 `x - 0`
5 `+x`

#### 任意类型转布尔
1. Boolean(x)
2. !!x

## JavaScript 中的对象
JavaScript 全局对象 window：
- ECMAScript叫做 global，浏览器叫做 window
- window 是一个哈希表，有许多属性
- window 的属性就是全局变量`var a = 1  ===  var window.a = 1`

window 全局对象分为两种：
- 一种是ECMAScript 规定的，所有 JS 都会有：
    - global.parseInt()
    - global.parseFloat()
    - global.Number()
    - global.String()
    - global.Boolean()
    - global.Object()
- 一种是浏览器自己加的,不同的浏览器可能就没有了
    - window.alert()
    - window.prompt()
    - window.confirm()
    - window.console.log()
    - window.console.dir()
    - window.document()
    - window.document.creatElement()
    - window.document.getElementById()

## global 中的全局对象（未完）
1. Number
`var n = new Number(1)`创建一个 Number 对象
1 与 new Number(1) 的区别：
- 1 是简单类型，new Number(1) 是复杂类型
- 1 直接存放在Stack内存中，new Number(1)存放在Heap内存中  
2. String
`var str = new String('Hello')`创建一个 String 对象
'Hello' 与 new String('Hello') 的区别：
- 'Hello' 是简单类型，new String('Hello')是复杂类型
3. Boolean
`var boolean = new Boolean(true)`创建一个 Boolean 对象
true 与 new Boolean(true) 的区别：
- true 是简单类型，new Boolean(true) 是复杂类型。
4. Object
`var obj = new Object()` 创建一个 Object 对象  
`var boj1 = {}` 同样创建一个 Object 对象  
两者之间并没有任何差异。

## 在字符串中插变量值
1. 使用 `+` 号 插入
2. 使用`${变量名}`插入，注意这种方法的字符串符号为 ``
## JS中的数组
1. 数组是什么？
人类理解：数组是一组次序排列的数据。  
JS理解： 用 Array 构造出来的对象（原型链中有`Array.prototype`的对象）  
#### JS中数组的本质
在JS中，数组的本质还是对象，而与正常的对象不一样的是， 数组 是一个特殊的对象。 
数组原型指向Array.prototype，具有其他对象不具有的数组原型。（Function 也是一样。）
2. 创建数组
- `var arr = Array(arrayLength)`
- `var arr = new Array(arrayLength)`
- `var arr = []`创建一个空数组
3. 数组的重要 API
- `Array.prototype.forEach`
    - 用法： `arr.forEach(function(value, key){})`
    - 描述：数组 arr 调用 forEach 方法，接受一个函数作为参数，该函数的参数为 arr 对应的 value 和 key，以value 和 key 为参数执行 callback 函数。
- `Array.prototype.sort`
    - 用法： `arr.sort()`
    - 描述： 对数组进行排序。默认按照 Unicode 编码进行排序。可以通过传入一个 callback 函数来指定排序顺序
- `Array.prototype.map`
    - 用法：`arr.map(function(value, key, arr){})`
    - 描述：映射。为数组的每一个值执行一次 callback， 并返回新的数组。
- `Array.prototype.filter`
    - 用法：`arr.filter(function(value. key, arr){})`
    - 描述： 过滤。为数组的每一个值执行一次 callback ，返回符合 callback 的新的数组值。
- `Array.prototype.reduce`
    - 用法： `arr.reduce(function(initValue, value, key, arr){})`
    - 描述：遍历数组，对数组的每一个值执行callback，返回值作为下一次执行 callback 的 initValue，直到最后返回一个最终结果。
4. 伪数组
伪数组指具有与数组相似形态，原型链上没有 Array.prototype 的对象。  
常见伪数组： arguments、querSelectorAll得到的对象

伪数组转换为真正的数组：
- `Array.prototype.slice.call(fakeArray)`

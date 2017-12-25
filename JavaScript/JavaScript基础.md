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
2. String
3. Boolean
4. Object


## 在字符串中插变量值
1. 使用 `+` 号 插入
2. 使用`${变量名}`插入，注意这种方法的字符串符号为 ``
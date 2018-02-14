## call
函数的调用方式：
1. 直接调用`functionName()`
2. 使用 call 调用。`functionName.call()`

每一个人都会更喜欢第一种这种更简单的方式，然而，第2种才是 JavaScript 中函数的真正调用方式。  
`call`是函数的原型`Function.prototype`上的方法，每一个函数都拥有。  
在JS引擎中，调用一个函数的真正方式是调用函数的`call`方法。  

函数的call方法：
语法：
> fun.call(thisArg, arg1, arg2, ...)

call 调用一个函数，给该函数一个指定的 this 值 thisArg 和指定的参数 arg1， arg2， ...  
call、apply 指定的参数会在 arguments 中顺序排列在原函数的参数后面。

使用 call 调用一个函数：
```javascript
var obj = {
    name: 'Sam',
    age: 22,
}

function fn(){
    console.log(this)
}

fn.call(obj)    // 对象 obj {name: 'Sam',age: 22}
fn()            // 对象 window
```
使用 call 调用函数与直接调用函数的区别：
- 直接调用函数是JS的一个语法糖，引擎依然会调用`call`方法。只是，在调用`call`方法时，由于没有手动指定 this 值，JS引擎会自动隐式传入一个 this 值。
- 使用`call`调用函数，必须手动指定 this 的值。手动传入的 this 必须是个对象，若传入的不是对象，JS引擎会自动转换成相应类型对象。这时，函数之中的 this 就是这个手动指定的对象。
- 需要注意的是，在非严格模式下，当使用`call`调用函数时，若传入的 this 是 null 或 undefined，会默认指向 window 对象。   
#### call()的应用
1. 将伪数组转为真正的数组
```javascript
var arr = Array.prototype.slice.call(fakeArray)

Array.prototype.slice.call({0: 'a',1: 'b',length: 2})
Array.prototype.slice.call(document.querySelectorAll('div'))  // querySelectorAll 通过遍历获得元素，静态对象。添加新的元素，length不会增加
Array.prototype.slice.call(arguments)
```
2. 实现对象继承
```JavaScript
var constructor = function(name,age){
    this.name = name
    this.age = age
}
var obj = {}
constructor.call(obj,'sam',18)
console.log(obj)        // {name: sam, age: 18}
```
## apply
`apply()`的用法与`call()`基本一致，`apply()`使用时接受的参数是一个数组，而不是像`call()`那样的参数列表。其他方面，两者并无不同。
#### apply()的应用
1. 将伪数组转为真正的数组
使用方法与`call()`一样。  
__需要注意的是,无论`call()`还是`apply()`，被转化的伪数组都必须具有length属性和对应的数字键__
2. 找出数组中的最大值
```javascript
var array = [1,2,3,4,5,6,7,8,9]
Math.max.apply(undefined, array)
```
3. 将数组中的空元素转换为 undefined
```javascript
Array.apply(null,[1,,2])  // [1,undefined,2]
```

## bind
`bind()`给函数的 this 绑定一个指定的对象，返回一个一样的新函数。`bind()` 不仅能绑定 this 的指向，还能绑定原函数的参数。就是说，`bind()`的第二个参数之后的参数是会覆盖原函数的参数。  
> bind比call方法和apply方法更进一步的是，除了绑定this以外，还可以绑定原函数的参数。– JavaScript标准参考教程
```javascript
var obj = {
    count: 1,
    add: function(){
        this.count += 1
    }
}

var count = 20

// 对象调用方法,this指向对象
obj.count     // 1
obj.add()     
obj.count    // 2

// 函数表达式调用方法，this 指向 window
var f = obj.add
f()
count        // 21

// bind 手动指定 bind
var fn = obj.add.bind(obj)
fn()      
obj.count     // 3
count         // 21
```

## 简写原生方法
```javascript
var log = console.log.call(console)
// var log = console.log.bind(console)
```
```javascript
// Fuction.prototype.call绑定 this 为 Array.prototype.slice
var slice = Function.prototype.call.bind(Array.prototype.slice);
// slice() === Array.prototype.slice.call()
```
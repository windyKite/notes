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

使用 call 调用一个函数：
```
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
## 什么是Class 类？
MDN上说:类定义对象的特征。它是对象的属性和方法的模板定义。  
简单说，“类”是生产对象的模板，通过类这个模板，可以毫不费劲地生产出无数个一样的对象，而不用通过一次次的定义去声明对象。而这些对象，因为具有一样的属性、一样的方法，所以将这些对象归为一个“类”，就像将人类归入人这一类一样。  

## JavaScript 的类
在es 6 出现之前，ECMAScript 标准中都是没有类的官方规范的，JavaScript 的类都是通过其他的方法来模拟定义。直到ES 6 标准的到来，JavaScript 才拥有官方的定义类的方法。
## 定义类的方法
1. 构造函数法
构造函数法使用构造函数来模拟“类”，使用 this 在构造函数内部指代实例对象。
```javascript
function Person(){
    this.species = 'human'
}
``` 
定义一个构造函数之后，使用 new 关键字来生成实例对象
```javascript
let xxx = new Person
console.log(xxx)     // {species: 'human'}
```
像上面定义的构造函数 Person，可以使用 new 关键字来生成无数个 拥有属性 species = 'human' 的对象。  
然而，使用这种方法构造对象，当构造对象的数量太多时，会极大地消耗内存，所以JavaScript提供了函数的`prototype`属性来节约内存。
```javascript
function Person(){

}

Person.prototype.species = 'human'

let xxx = new Person()
console.log(xxx)   // {}
```
可以看到，使用 Person 的`prototype`属性定义对象的公共属性 `species`，依然可以生成一个对象。然而生成的却是一个空对象。那么`species`属性去哪了？  
`species`属性跑到了实例对象 `xxx` 的原型上了:
```JavaScript
console.log(xxx.species)      // human
console.log(xxx.__proto__)    // {species:human,constructor:function}
```
__通过构造函数的`prototype`属性，可以将实例对象的公共属性集成到一个原型对象上面，节约内存__

构造函数法同时还可以实现对象的私有属性和私有方法
```javascript
function Person(){

}

Person.prototype.species = 'human'

let xxx = new Person()
xxx.abc = "abc"
console.log(xxx)   // {abc:abc}
```

构造函数通过将值以参数的形式传入函数内部，使构造出的实例对象具有不同的属性值。
```javascript
function Person(name,age){
    this.name = name
    this.age = age
}

Person.prototype.species = 'human'

let xxx = new Person(‘xiao’,18)
console.log(xxx)   // {name:xiao,age:18}
```

那么，使用构造函数法模拟类的流程是：
```javascript
function 构造函数名(私有属性值1,私有属性值2,...){
    this.私有属性1 = 私有属性值1
    this.私有属性2 = 私有属性值2
}

构造函数名.prototype.xxx = xxx  // 设置构造函数的原型属性
// 还可以直接往实例对象上添加自己的属性
```

2. Object.create() 实现类
Object.create()语法
> Object.create(proto[, propertiesObject])
参数：
- proto：新创建对象的原型对象
- propertiesObject：新创建对象的属性配置。（如：是否可枚举、是否只写等）
返回值：
- 返回新创建的对象。

使用Object.create()模拟类，是将一个对象直接作为新创建对象的原型，直接将原型植入新对象。  
在这种方法中，“类”就是一个对象，而不是函数。
```javascript
let Person = {
    species: 'human',
    walk: function(){},
    speak: function(){},
}

let xxx = Object.create(Person)
console.log(xxx)
```
上面这段代码，以 Person 这个对象作为原型，生成一个新的空对象 xxx，xxx 的原型指向 Person。换言之，对象 Person 被当做了一个类，创建新的对象。  

Object.create()模拟类的缺陷：
- 实例对象的属性全部在同一个”类“对象上面，只能`实例对象名.属性名 = 属性值`手动添加私有属性和私有方法
- 由于Object.create() 只是将创建的实例对象的原型绑定到一个”类“对象上面。一旦”类“对象发生改变，所有的实例对象的值都会改变。
- 实例对象的共享数据全部绑定在”类“对象上面。

3. 极简主义法
极简主义法同样使用一个对象作为”类“，在对象里面，定义一个`createNew`方法来生成实例
```javascript
let Person = {
    createNew: function(){},
}
```
在`createNew`方法里面，定义一个实例对象作为返回值
```javascript
let Person = {
    createNew: function(){
        let person = {}
        person.species = "human"
        person.walk = function(){}
        person.speak = function(){}
        return person
    },
}
```
调用`createNew`方法，就可以得到一个新的对象
```javascript
let xxx = Person.createNew()
console.log(xxx)  // {species: "human", walk: function, speak: function}
```

极简主义法的原理：__使用一个对象作为原本，去复制完成另一个对象__  
事实上，极简主义法的原理概念与`Object.create()`极为类似，两个的唯一区别是：极简主义法不会修改实例对象的原型，而`Object.create()`涉及到原型。两者之间的公共属性共享全部是通过操作“原本”来实现。  

4. ES 6 的 class 声明
ES 6 的 class 不是一个全新的类继承模型，而是一个原有模型的语法糖。  
ECMAScript2015 将 第一种：构造函数法 给官方化，定义一个 api 直接使用“类”。本质上， class 定义的“类”还是一个函数
```javascript
class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    walk(){}
    speak(){}
}

let xxx = new Person('xiao',18)
typeof Person     // "function",Person 本质上还是一个函数
console.log(xxx)   // {name: "xiao", age: 18}
```


# 用函数模拟一个类的过程（举例）
假设现在在设计一款游戏，需要生成许多小兵，就需要一个生成小兵的类。  
使用函数来生成小兵
```javascript
function createBing(id,hp){
    let bing = {}    //  创建一个空对象存储小兵的属性
    bing.id = id
    bing.hp = hp
    bing.attack = 5
    bing.walk= function(){console.log('walk')}
    return bing
}
```
此时，调用函数 createBing 就能生成一个具有4个属性的小兵对象。  
此时，生成数量多的小兵时，会重复创建 hp 和 walk 这两个属性，浪费内存。JS 中有原型，可以将公共属性绑定到原型上面。
```JavaScript
// 首先需要一个原型对象，将公共属性放到原型对象上面
bingPrototype = {
    attack: 5,
    walk: function(){console.log('walk')}
}

function creareBing(id, hp){
    let bing = {}

    bing.__proto__ = bingPrototype // 将原型属性绑定到生成的对象上面

    bing.id = id
    bing.hp = hp

    return bing
}
```
此时，调用 createBing 函数可以生成一个具有 id 和 hp 两个属性的小兵对象，attack 和 walk 被绑定到原型上面，所有小兵对象共享。

由于`__proto__`不是标准规范，所以使用另一个符合规范的方法，使用函数的 `prototype` 属性和`new`关键字。  
将实例对象的全部共有属性绑定到生成实例对象的函数的`prototype`属性上面，再用`new`关键字生成实例，可以直接将原型绑定到实例对象上。
```javascript
function createBing(id, hp){
    this.id = id 
    this.hp = hp
}

createBing.prototype = {
    construcotr: createBing, // constrctor 是 prototype 的默认属性，此写法会覆盖，所以要重新赋值
    attack: 5,
    walk: function(){console.log('walk')}
}
```
至此，利用函数的`prototype`和`new`关键字，实现了用函数模拟类的目的。


```JavaScript
function fn(){
    return new Promise(function(resolve, reject){
        console.log(x)
    })
}
```
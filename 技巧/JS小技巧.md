1. 解构赋值
```javascript
let obj = {
    a: 1,
    b: 2,
    c: 3
}

let {a,b,c} = obj  // 同时声明 a,b,c 3个变量并将赋值 obj 中相应属性值
console.log(a, b, c) // 1,2,3
```
解构赋值可以直接将对象内的属性解析为变量，不用一遍遍使用类似`let a = obj.a`这样的赋值语句赋值。  

2. 模式匹配
```javascript
let obj = {
    a: {
        name: 'xx',
        age: 18
    },
    b: {
        name: 'aa',
        age: 11
    },
    c: {
        name: 'vv',
        age: 23
    },
}
let {a: {name, age}} = obj   // 同时声明变量 name， age，并赋值 obj.a 的相应属性值
console.log(name, age)  // 'xx'  18
```
模式匹配是一个很实用的东西，能够大量节约赋值时间，语法和解构赋值差不多。

3. html 替换
`element.html = newHtml` 会替换 element 的所有元素，导致绑定在原元素上面的事件失效。
解决方法： 使用__事件委托__将事件绑定到 element 元素上。

4. Object.assign()
```javascript
var obj = {
    name: '萧',
    age: 18,
}

Object.assign(obj, {name:'赵'}, {age: 20}, {jobs: 'teacher'})
console.log(obj) // Object {name: "赵", age: 20, jobs: "teacher"}
```
Object.assign() 方法第一个参数为主对象，其后的参数也必须为对象，将后面的参数对象添加到第一个参数对象上，若属性相同则进行覆盖。

5. Promise 链式操作
Promise 的链式操作中每一个 then 都最好有一个返回（可以返回传入的参数），这样可以保证接下来依然可以进行链式操作。

6. 
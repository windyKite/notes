## 1. Promise 
promise,中文翻译为“承诺”。  
> 一个 Promise 就是一个代表了异步操作最终完成或者失败的对象  ————MDN

简单来说，Promise是一个代理对象，该对象代理一个未知的值。当异步操作成功的时候，代理值会变成成功特定的状态；异步操作失败，代理值会变成失败特定的状态。我们可以通过为 “成功状态” 或 “失败状态” 指定回调函数来对异步操作的结果进行操作。

Promise 对象的特点：
- 对象状态。Promise 有3个状态：`pending待完成`，`fulfilled完成`，`rejected拒绝`。
Promise 对象的状态可以通过使用 `resolve()` 或 `reject()`来改变，一般是通过判断异步操作的结果取执行相应的状态函数。
- Promise 的状态只会改变一次，一旦发生改变。后面的操作就不能再改变 `Promise`对象的状态

Promise的缺点：
- 无法取消，只要新建，就一定会执行
- 回调函数的错误不会抛出，必须手动指定回调函数抛出错误。（`then`方法的第二个函数）
- `pending`状态时，无法得知异步操作的进度。

## 2. Promise 构造对象
ES6 中，Promise 是一个构造对象，用来构造一个 Promise 对象。
```JavaScript
let promise = new Promise(function(resolve,reject){
  // 一些构造promise对象时，立即执行的代码（发起异步操作等）

  if(/* 异步操作成功 */){
    resolve(value)  // pedding => fulfilled
  }else{
    reject(error)   // pedding => rejected
  }
})
```
> Promise 构造函数接受一个函数作为参数，作为参数的函数又必须接受两个参数（`reslove`,`reject`）。
> `reslove`会将 Promise 对象的状态从 `pending`（待处理）变成`fulfilled`（完成）
> `reject`会将 Promise 对象的状态从`pending`（待处理）变成`rejected`
> `reslove`,`reject` 是两个浏览器自己部署的函数，作用只有一个：__转变 Promise 对象的状态，同时将参数传递下去作为`then`方法回调函数的参数__

resolve在异步成功之后改变`Promise`的状态：
```javascript
console.log(1)
function fn(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log('10秒钟之后打出这行字,之后promise对象的状态会被下面的代码改为 fulfilled')
      resolve('xx')
    },10000)  
    
  })
}
console.log(2)

let promise = fn()
console.log(promise)

promise.then((promiseValue)=>{
  console.log(promiseValue)
})

console.log(promise)
```

生成`Promise`实例之后，可以使用`then`方法为`Promise`实例对象的不同状态指定回调函数
```JavaScript
promise.then(()=>{
  console.log('Promise对象的状态是 fulfilled')   // 若 promise 的状态是 fulfilled，则会打出这行字
},()=>{
  console.log('Promise对象的状态是 rejected')    // 若 promise 的状态是 rejected，则会打出这行字
})
```

## 3. `Promise`的`then`方法
`Promise` 对象提供一个 `then`方法，用来为 `Promise`添加状态改变后的回调函数，`then`方法同样返回一个`Promise`对象，这就意味着，`Promise`可以使用链式操作。
`then`方法的第一个参数指定`fulfilled`的回调函数，第二个参数指定`rejected`的回调函数。
```javascript
let promise = new Promise(function(resolve,reject){
  if(/* 异步成功 */){
    resolve()
  }else{
    reject()
  }
})

promise.then(()=>{
  return '异步操作成功之后，状态变为fulfilled之后执行的函数'
}，()=>{
  return '异步操作之后，状态变为rejected之后执行的函数'
}).then().then()
```
只要每一次使用`then`方法都`return`，就能一直使用`then`链式操作下去。  
常用来对一个异步操作执行多个回调函数。

## 4. `Promise`的`catch`方法
上面说过 `Promise`对象如果不指定回调函数的话，错误会无法抛出，而`catch`方法就用来指定抛出错误的回调函数。  
`catch`方法接受一个函数，函数的参数就是抛出的错误。
```javascript
promise().then(()=>{}).catch((error)=>{
  console.log(error)
})
```

## 5. `Promise`的`finally`方法
`Promise`的`finally`方法指定`Promise`对象的最后异步执行的函数，无论`Promise`对象的状态是什么，该回调函数都会执行（与状态无关，不依赖`Promise`结果）。一般会在链式操作的最后出现。
```javascript
promise().then().finally(()=>{
  console.log('无论Promise对象怎么样，最后都会打出这句话')
})
```

## 6. Promise.all()
`Promise.add`用于将多个 `Promise`实例包装成一个新的`Promise`实例
```javascript
let newPromise = Promise.all([promise1,promise2,promise3])
```
上面代码将数组中的 3 个`Promise`实例包装成一个实例 newPromise。若数组中有某一项不是`Promise`实例，会调用`Promise.resolve`方法转化成实例。  
newPromise 的状态有两种结果：
1. 数组中所有实例的状态都是 `fulfilled`，newPromise 的状态是 `fulfilled`，newPromise 的 `resolve`方法参数是数组中实例的返回值组成的数组。
2. 数组中有一个实例的状态是`rejected`， newPromise 的状态是 `rejected`，newPromise 的 `reject`方法参数是第一个`rejected`状态的实例的返回值。


未完待续。。。





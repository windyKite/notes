## 原生AJAX
AJAX 使用 XMLHttpRequest 对象进行请求发送和响应，局部刷新页面的技术。  
流程：
1. 生成 XMLHttpRequest 对象
`let request = new XMLHttpRequest()`
2. 配置 XMLHttpRequest 对象
`request.open('method','path')`
3. 发送请求
`request.send()`
4. 监听 XMLHttpRequest 对象
`request.onreadystatchange()`
## AJAX 实现的功能
- 客户端：JS 发起请求
- 服务端： JS 响应请求

发送请求的要素：
1. 第一部分，请求行（请求方法、请求路径、协议）
`request.open('method','/path')`
2. 第二部分，请求头
`request.setHeader('header','value')`
3. 第四部分，请求体（请求数据）
`request.send('date')`

响应请求的要素：
1. 第一部分，状态行（协议版本、响应码、响应文本）
`request.status` 
`request.statusText`
2. 第二部分，响应文本
`request.getResponseHeader()`
`request.getAllResponseHeaders()`
3. 第四部分，响应正文（返回的数据）
`request.responseText`

只要实现以上这些东西，就可以封装一个 AJAX 函数。

## 封装AJAX
```javascript
// 超级简易随便能用就行版本
function ajax(path, method, data, success, fail){
    let request = new XMLHttpRequest()
    request.open(method, path)
    request.send(data)
    request.onreadystatechange = () => {
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300 ){
                success.call(undefined,request.responseText)
            } else if(request >= 400){
                fail.call(undefined,request)
            }
        }
    }
}
```
简陋版本存在的问题：
- 参数太多，不易使用，需要记住顺序
- 参数为空时，需要使用undefined 或者 null 占位，否则参数会错误

```javascript
// 稍微改进一点依然简陋版
// 使用对象传参
function ajax(options){
    let request = new XMLHttpRequest()
    request.open(options.method, options.path)
    request.send(options.data)
    request.onreadystatechange = () => {
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                options.success.call(undefined, request.responseText)
            } else if(request.status >= 400){
                options.fail.call(undefined, request)
            }
        }
    }
}
// ajax 函数的参数 options 是一个形如 
//    {
//        method: xxx, 
//        path: xxx, 
//        data: xxx, 
//        success: function(){}, 
//        fail: function(){} 
//    } 
//    的对象
```
对象作为参数传参的优点：
- 直接使用对象，不用记参数顺序
- 参数干净

上面稍微改进版的缺点：
- 每次都使用 options.xxx 太麻烦，这不是浪费时间嘛？
- 那就再改进一下咯，还能怎么办？

```javascript
// 再改进一下
function ajax(options){
    let path = options.path
    let method = options.method
    let data = options.data
    let success = options.success
    let fail = options.fail
    // 写这么多 let，还不是一样很麻烦？还不如直接用options.xxx
    // 那干嘛不试一下 ES 6 的解构赋值？
    // let {path,method,data,success,fail} = options
    // 这不就 5 行代码变一行啦？

    let request = new XMLHttpRequest()
    request.open(method, path)
    request.send(data)
    request.onreadystatechange = () => {
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                success.call(undefined, request.responseText)
            } else if(request.status >= 400){
                fail.call(undefined, request)
            }
        }
    }
}
```
上面3个版本全部是使用回调函数来进行操作。  
使用回调函数的问题： 不看文档，你根本不知道回调函数名是什么。

```javascript
// promise 版本
function ajax(options){
    let {path,method,data} = options
    return new Promise(function(resolve, reject){
        let request = new XMLHttpRequest()
        request.open(method, path)
        request.send(data)
        request.onreadystatechange = () => {
            if(request.readyState === 4){
                if(request.status >= 200 && request.status < 300){
                    resolve.call(undefined, request.responseText)
                } else if(request.status >= 400){
                    reject.call(undefined, request)
                }
            }
        }
    })
}
```

```javascript
jQuery.ajax = function(options){
    let {url, method, body} = options
    return new Promise(function(resolve, reject){
        let request = new XMLHttpRequest()
        request.open(method, url)
        request.send(body)
        request.onreadystatechange = () =>{
            if(request.readyState ===4){
                if(request.status >= 200 && request.status < 300){
                    resolve.call(undefined, request.responseText)
                } else if(request.status >= 400){
                    reject.call(undefined, request)
                }
            }
        }
    })
}
```

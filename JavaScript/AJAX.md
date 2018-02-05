## 前端请求
前端发请求的方式：
- `<form>` 使用 form 表单的`action`向指定 url 发请求，会刷新页面或新开页面。
- `<a>` 使用`<a>`标签的 `href` 属性发__GET__请求，会刷新页面或新开页面。
- `<img>` 使用`<img>`标签的`src`属性发__GET__请求，只能以图片形式展示。
- `<link>` 使用`<link>`标签的`href`属性发__GET__请求，只能以CSS、favicon 的形式展示
- `<script>` 使用`<script>`标签的`src`属性发__GET__请求，只能以脚本形式运行，如[JSONP](https://github.com/windyKite/notes/blob/master/JavaScript/JSONP.md)  

| 发请求方式 | 请求方法 | 缺陷 |
|-- | -- | -- |
| form表单  | GET、POST | 刷新页面或新开页面 |
| a标签 | GET | 刷新页面或新开页面 |
| img | GET | 以图片展示，需要加载一张图片 |
| link标签 | GET | 以CSS、favicon形式展示 |
| script | GET | 只能以JS脚本运行，JSONP原理 |

以上5种发请求的方式，都存在了一定的弊端。要么是会刷新页面，要么是只能发 GET请求，要么是展示形式固定。大约在1999年，一个新的发请求的方法————AJAX诞生了。

## AJAX
IE 5 率先在 js 中引入 ActiveX 对象，使 JS 可以直接发请求。  
之后，Mozilla、Safari、Opera迅速跟进，取名 XMLHttpRequest，并被 W3C 纳入规范。
2005年，Jesse James Garrett 将使用 XMLHttpRequest 对象发请求的技术成为 __AJAX__。

## XMLHttpRequest 对象
重点：__XMLHttpRequest 对象用来在浏览器和服务器之间进行数据传输__
#### XMLHttpRequest对象实例解析
使用 XMLHttpRequest 对象，首先需要生成一个实例。
`let　request = new XMLHttpRequest()`  
接下来，讲解一下 XMLHttpRequest实例的方法
###### 1. request.open(method,url,async)
request.open(method,url,async) 用来开启数据传输通路。  
三个参数分别对应：
- method：请求的方法，可以是GET、PPST、PUT、DELETE等
- url：请求的路径
- async：是否异步，默认为true，就是异步。false 为同步，可能造成浏览器阻塞。
###### 2. request.send()
request.send()用来向请求路径发送数据。当请求有数据发送时，参数为所发送的数据。  
同步请求会等全部响应完毕再返回，异步请求直接返回该方法。
###### 3. readyState属性
readyState属性返回一个 XMLHttpRequest 代理当前所处的状态。
| 值 | 状态 | 描述 |
| -- | -- | -- |
| 0	| UNSENT | 代理被创建，但尚未调用 open() 方法。 |
| 1	| OPENED | open() 方法已经被调用。 |
| 2	| HEADERS_RECEIVED | send() 方法已经被调用，并且头部和状态已经可获得。 |
| 3	| LOADING | 下载中； responseText 属性已经包含部分数据。 |
| 4 | DONE | 下载操作已完成。 |
###### 4. onreadystatechange属性
onreadystatechange属性监听 readyState 的值（监听 XMLHttpRequest代理的状态），当值发生变化（状态变化），对不同的状态执行相应的回调函数。

__以上4个方法/属性就可以完成一个AJAX的请求__
###### 5. request.setRequestHeader()方法
request.setRequestHeader()方法：在发送请求之前设置请求头，对应http请求的第二部分。
`request.setRequestHeader('Content-Type','x-www-form-urlencoded')`
###### 6. request.responseText 属性
 request.responseText 属性就是 AJAX 中后端返回的数据，一般是 JSON 格式的字符串。

#### AJAX: Asycn JavaScript And XML 异步的JavaScript和XML
原始的 AJAX：
1. 使用 XMLHttpRequest 发请求
2. 服务器返回 XML 格式的字符串
3. JS 解析 XML（可扩展标记语言） 并更新局部页面

随着技术的发展，现代的 AJAX 大多使用 JSON返回数据：
1. 使用 XMLHttpRequest 发请求
2. 服务器返回 JSON 格式的__字符串__(类型：string，看起来像 JSON，实际上是 string)
3. JS 解析 JSON，并更新局部页面

## AJAX 使用方法
1. 生成 XMLHttpRequest 实例对象
2. 配置 XMLHttpRequest 实例对象
3. 发送请求
4. 监听 XMLHttpRequest 代理状态
 
## AJAX 使用实例
```javascript
let request = new XMLHttpRequest()
request.open('get','/path') 
request.send()
request.onreadystatechange = function(){
    if(request.readyState === 4){  // 请求响应完毕
        if(request.status >= 200 && request.status < 300){ // 请求响应成功
            console.log('请求成功')
            console.log('请求获取的响应数据是：' + resquest.responseText)
            console.log(typeof resquest.responseText)     // string
            let string = resquest.responseText
            let object = window.JSON.parse(string)  // 将符合JSON语法的字符串转换成js对应的值
            console.log(typeof object)         // "object" 
        } else if(quest.status >= 400){
            console.log('请求失败。')
        }
    }
}
```
## AJAX的弊端
由于浏览器同源策略，AJAX 不能访问不同源的资源。这时候，就需要跨域。
关于同源策略，请点击传送门：[同源策略](https://github.com/windyKite/notes/blob/master/JavaScript/JSONP.md)
现阶段一般用两种方法跨域：
- [JSONP](https://github.com/windyKite/notes/blob/master/JavaScript/JSONP.md)
- CORS(Cross-origin resource sharing)跨域资源共享
#### CORS 的使用
CORS 跨域的使用方式是在后端代码中设置响应头，将响应资源的响应头设置成请求页面的源（间接使要响应的资源与请求同源）
`response.setHeader('Access-Control-Allow-Origin', '发送请求的源地址')`

CORS 跨域：
1. 简单请求
2. 预检请求

对于简单请求，服务器会直接返回一个正常的HTTP响应，由浏览器判断返回的HTTP响应是否同源，是否要接受。若响应头信息里没有包含`Access-Control-Allow-Origin`，就会抛出错误。  
对于预检请求，浏览器会先发送一次“预检”请求，若预检通过，浏览器才发送正式的 XMLHttpRequest 请求，之后，服务器依然返回HTTP响应，浏览器同样要判断`Access-Control-Allow-Origin`字段。
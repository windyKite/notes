# 1. cookie
## 1.1 什么是 cookie？
> HTTP Cookie（也叫Web Cookie或浏览器Cookie）是服务器发送到用户浏览器并保存在本地的一小块数据，它会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器上。

cookie，指网站为了辨别用户身份而储存在用户本地终端上的数据。cookie 本质上是 HTTP 的一个内容（请求头）。  
在前端工作中，可以这么理解 cookie：
- cookie 是浏览器访问服务器后，服务器传给客户端的一段数据。
- 浏览器将 cookie 保存下来，一般情况下不会删除。
- 浏览器每次访问返回 cookie 的服务器时，都会在请求头（请求的第二部分）中带入这段 cookie
## 1.2 cookie 的作用
cookie 一般有两个作用：
1. 识别用户身份
当浏览器 A 首次访问了 服务器 a.com 之后,a.com 服务器会立刻返回一段数据「uid=1」（cookie）给浏览器 A，浏览器 A 获得 cookie 之后，将 cookie 保存下来。每一个cookie都是不一样的。
当浏览器 A 再次访问服务器 a.com 时，会带上「uid=1」 （cookie）， 服务器 a.com 会识别 A 的请求头中的 cookie，从而区别出浏览器 A 的身份。  

可以这么理解：浏览器访问过服务器之后，服务器就会发送一个特殊的身份信息给浏览器。当浏览器再次访问服务器时，会强制要求带上身份信息，而服务器也可以通过自己颁发出去的身份信息来识别浏览器，而这个身份信息就是cookie。
活生生的例子：
> 学校的门卡：第一次去学校，没有门卡。然后，学校给发了一个门卡，门卡里面有你的姓名、班级等信息。学校规定，有门卡的必须带门卡上学，你带上门卡到学校门口刷卡，学校就能知道你是谁，你来上课了。

2. 记录历史
cookie 本质上是一段数据，既然是数据，那么就能记录东西。在前端领域中，js 可以修改存储在本地中的 cookie，往 cookie 中添加或删除数据，从而记录下用户的操作，如：加入购物车、浏览历史等等。  
由于浏览器不会随便删除 cookie，所以下次打开网站的时候，cookie 依然还保存着上次的cookie，就能知道历史操作。  

## 1.3 cookie 在浏览器与服务器之间的交流过程
接下来，以client指代客户端，server指代服务端，说明一个 cookie 的整个作用机制：
1. 产生 cookie：client 第一次访问 server，server 在响应头中设置一个 cookie 返回给 client，cookie 的内容为要保存的数据
2. 保存 cookie：client 在接收到 server 返回的 cookie 后，将 cookie 保存下来,并给cookie一个有效期，过了有效期，cookie 就会失效。
3. 传递 cookie：client 再次访问 server 将会在请求头中带上保存的 cookie，将 cookie 传递到 server
4. 解析 cookie：server 得到 client 传递的 cookie 之后，会解析 cookie，然后将相应的信息返回给 client  
在 cookie 没有失效之前，cookie 的使用都是围绕2,3,4三部分来进行的，第1步一般只需要进行一次。

## 1.4 cookid 存在的问题：
1. cookie 基于浏览器本地存储数据，因此，只有在保存了 cookie 的那个浏览器上能够使用该 cookie。同一设备不同浏览器之间，cookie 不通用。
2. cookie 的存储大小有限制： 4KB 左右。
3. cookie 存在C盘的一个文件中，不同浏览器存储路劲不一样。
4. cookie 是可以被用户手动修改的。
5. cookie 的有效期：默认有效期20分钟左右。可以通过后端强制设置有效期，如自动登录时间。
6. cookie 的同源策略：cookie 同样也有同源策略，不过与 ajax 略微不用。ajax 需要完全同源，而 cookie 只需要同一父级域名即可。
比如： 
请求 qq.com 下的资源时，会带上 qq.com 对应的 cookie，不会带上 baidu.com 的 cookie；
请求 v.qq.com 下的资源时，浏览器不仅会带上 v.qq.com 的 cookie，还会带上 qq.com 的cookie。在这里，qq.com 就是 v.qq.com 的父级域名。  
需要特别注意的一点是：__在浏览器的认知中，www.qq.com和qq.com是两个不同的域名。因此，www.qq.com 不是 v.qq.com 的父域名，qq.com才是。__

由于 cookie 是__明文__保存在客户端的数据，可能会被客户端修改，存在信息泄露的风险，所以，需要一种比 cookie 更加安全的存储方式来存储数据。session 就是解决安全问题的方法。

# 2. session
## 2.1 什么是 session？  
来自[维基百科](https://zh.wikipedia.org/wiki/%E4%BC%9A%E8%AF%9D_(%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6))的解释：
> 在计算机科学领域来说，尤其是在网络领域，会话（session）是一种持久网络协议，在用户（或用户代理）端和服务器端之间创建关联，从而起到交换数据包的作用机制，session在网络协议（例如telnet或FTP）中是非常重要的部分。

个人理解：
session 是一种在服务器端保存数据的机制。服务器通过读取浏览器发送的 cookie 和 服务器端的 session 来交换数据。  
不同于 cookie，session保存在服务器端，不同的语言保存方式不一样：
- java，保存于服务器内存中，重启服务器，session 消失
- php，保存于服务器文件中，重启服务器，session 依然存在
- nodejs，保存于服务器内存中，重启服务器，sessino 消失

## 2.2 session 的作用
session 的作用和 cookie 的作用大致相同。最大的不同点在于两者的安全性和实现方式。文章下面会介绍。

## 2.3 session 的实现
依然将客户端称为 client，服务端成为 server，一起了解一下 session 的工作流程：
1. 产生 sessionID：session 是基于 cookie 的一种方案，所以，首先要产生 cookie。client 第一次访问 server，server 生成一个随机数，命名为 sessionID，并将其放在响应头里，以 cookie 的形式返回给 client，client 以处理其他 cookie 的方式处理这段 cookie。大概是这样：`cookie：sessionID=135165432165`
2. 保存 sessionID： server 将要保存的数据保存在相对应的 sessionID 之下，再将 sessionID 保存到服务器端的特定的保存 session 的内存中（如 一个叫 session 的哈希表）
3. 使用 session： client 再次访问 server，会带上首次访问时获得的 值为 sessionID 的cookie，server 读取 cookie 中的 sessionID，根据 sessionID 到保存 session 的内存寻找与 sessionID 匹配的数据，若寻找成功就将数据返回给 client。

## session 与 cookie 的区别
1. session 在服务器端，cookie 在客户端。
2. session 用户无法查看和修改，cookie 用户可以查看修改。
3. session 和 cookie 的存储容量不同。
4. session 的实现依赖于 sessionID，而 sessionID 又存储在 cookie 上，所以，可以这么说：session 是基于 cookie 实现的一种数据存储方式。

# 3. localStorage
## 3.1 localStorage 是什么？
localStorage 是 HTML5 提供的一个 API。  
localStorage 的实质是一个hash（哈希表），是一个存在于浏览器上的 hash（哈希表）。
localStorage 提供了几个 API 来添加、读取、删除 localStorage：
- localStorage.setItem(key,value) 往 hash 中添加 key: value 的数据
```javascript
localStorage.setItem('姓名','萧XX')
console.log(localStorage) // Storage {姓名： "萧XX", length: 1}
```
- localStorage.getItem(key)  读取 hash 中 key 的值
```javascript
localStorage.getItem('姓名')  // "萧XX"
```
- localStorage.removeItem(key)  删除 hash 中的 key
```javascript
localStorage.removeItem('姓名')
console.log(localStorage)  // Storage {length: 0}
```
- localStorage.clear()        删除整个 localStorage 
```javascript
localStorage.clear()
console.log(localStorage)  // Storage {length: 0}
```

## 3.2 localStorage 的作用
localStorage 是一个保存于客户端的哈希表，可以用来本地保存一些数据。
1. 变量持久化存储
js 中的变量都是存在内存中的，一旦刷新页面，内存释放之后，所有变量的值全部会被重新初始化。  
而 localStorage 保存在本地，不会因为刷新而释放，所以，可以使用 localStorage 来实现变量的持久化存储
```JavaScript
let a = localStorage.getItem('a')

if(!a){
    a = 0
}else{
    a = (+a) + 1
}
console.log(a)   // 0

localStorage.setItem('a', a)

console.log(localStorage.getItem('a'))  // 0 , 变量 a 被保存到 localStorage 中了

// 刷新页面，这时候会打印出 两行 1 ，说明变量 a 的值被读取之后又重新赋值了
```
典型应用：  
记录是否提示过：如果不使用localStorage 持久化存储，每次刷新页面都会弹出提示
```javascript
let already = localStorage.getItem('提示')
if(!already){
    alert("这是我们的提示内容")
    localStorage.setItem('提示'，true)
}
```

## 3.3 localStorage 的特点
1. localStorage 与 HTTP 没有任何关系。
2. HTTP 不会带上 localStorage 的值，因为两者没有一毛钱关系。
3. 只有相同域名的页面才能互相读取 localStorage，同源策略与 cookie 一致
4. 不同的浏览器，对每个域名 localStorage 的最大存储量的规定不一样，超出存储量会被拒绝。Chrome 10MB 左右
5. 常用场景：记录一些不敏感的信息（不涉及安全的信息）
6. localStorage 理论上永久有效，除非用户清理缓存。


# 4. sessionStorage（会话存储）
sessionStorage 的所有性质基本上与 localStorage 一致，唯一的不同区别在于：  
sessionStorage 的有效期是页面会话持续，如果页面会话（session）结束（关闭页面），sessionStorage 就会消失。而 localStorage 则会一直存在。

# 5. Cache-Control
## 5.1 Cache-Control 是什么？
> Cache-Control 通用消息头被用于在http 请求和响应中通过指定指令来实现缓存机制。缓存指令是单向的, 这意味着在请求设置的指令，在响应中不一定包含相同的指令。

理解：  
Cache-Control 第一次请求资源时，将资源缓存下来。告诉浏览器再次需要该资源时，不要向服务器请求资源，而是直接使用缓存的资源。Cache-Control 是控制缓存的 HTTP 内容（请求头/响应头）。

## 5.2 Cache-Control 怎么使用？
Cache-Control 有 2 种使用方式：
1. 以请求头形式使用
客户端可以在 HTTP 请求中使用 Cache-Control 指令
```javascript
request.setHeader('Cache-Control','max-age=99999999') // 将此次请求的资源缓存 99999999 秒
```
2. 以响应头形式使用
服务器(node版本)可以在响应请求时，设置 Cache-Control
```javascript
response.setHeader('Cache-Control','max-age=99999999')  // 将此次请求的资源缓存 99999999 秒
```

## 5.3 Cache-Control 的作用
Cache-Control 使用缓存机制，用来缩短二次访问的响应时间，提高页面响应性能，实现web性能优化。

## 5.4 Cache-Control 的实际使用
1. 首页不设置缓存
Cache-COntrol 的缓存时间设置一般都会是一个很长的时间，如果所有页面全部设置缓存，那么用户访问页面时，不会向服务器请求任何资源。那么，如果页面开发者在用户缓存的有效期内发布了新版本，由于用户不会请求资源，所以用户得不到新版本的资源，也就无法进行版本更新。首页不使用缓存，就是为了给更新留下入口。
2. 缓存更新
在 Cache-Control 的缓存机制是基于 URL 的，只有相同的 URL 才会使用缓存。那么，如果想要进行版本更新，让浏览器发起新的资源请求，就只需要改动资源的 URL，浏览器就会重新请求资源。
```html
<script src='./js/main.js?v=1.0'></script>  <!-- 第一个版本的js，可以被缓存 -->  
<script src='./js/main.js?v=1.1'></script>  <!-- 第二个版本的js，浏览器会再次请求资源 -->
```
在真正的开发中，资源版本号一般都是使用摘要算法生成的字符串。（md5算法转换的字符串）

# 6. Expires
Expires 是以前版本的缓存控制，如果你设置了 Cache-Control，那么 Expires 会失效。
> Expires 头指定了一个日期/时间， 在这个日期/时间之后，HTTP响应被认为是过时的；

Expires 工作原理与 Cache-Control 差不多。区别不同的是，Expires 设置的缓存时间是一个时间点，过了这个时间点，缓存就过期。

> Expires: <http-date>
Expires 使用的是本地时间，会受本地事件影响。
```javascript
response.setHeader('Expires: Wed', '21 Oct 2019 07:28:00 GMT')  // Expires 使用格林梅治事件，GMT
```

Cache-Control 和 Expires ，__优先使用 Cache-Control__

# 7. Etag
## 7.1 Etag 是什么？
> ETag HTTP响应头是资源的特定版本的标识符。
Etag 是 HTTP 的内容，通过匹配标识符来判断资源是否需要下载。
## 7.2 Etag 使用
1. 浏览器第一次访问服务器资源时，服务器端返回一个 Etag 响应头，Etag 的值为资源 MD5 摘要的值（告诉浏览器，你这次下载的资源是什么样子的）。
2. 当浏览器再次请求资源时，会将 Etag 响应头的值放在一个 if-None-Match 请求头之中，发送给服务器（将浏览器已经拥有的资源的样子告诉服务器）
3. 服务器获取 if-None-Match 的值，再将该值与请求文件的 md5 值进行匹配，若两者匹配，则返回 304，代表资源没有改变，不用再次下载。（服务器比对自己的资源的样子与浏览器发送过来的样子，如果两者一致，就让浏览器用自己的资源，不要再让服务器发送资源了）

# 8. last-Modified
## last-Modified 是什么？
> The Last-Modified  是一个响应首部，其中包含源头服务器认定的资源做出修改的日期及时间。

通俗地讲：last-Modified 是一个响应头，它的值是：资源最后一次被修改的时间。

## last-Modefied 的使用
1. 浏览器第一次访问服务器上的某个资源，服务器端返回一个 last-Modefied 响应头，值为浏览器请求的资源的最后一次修改时间（告诉浏览器，服务器最后一次修改资源是什么时候）
2. 浏览器再次访问服务器时，会有一个名称为 If-Modified-Since 的请求头，值为服务器返回的 last-Modified 的值（告诉服务器，浏览器得到的最后一次修改资源时间）
3. 服务器读取 If-Modified-Since 的值，将其与自身资源的最后一次修改时间进行比对，若两者一致，就返回 304，代表资源没有改变过，不用再次下载。（服务器比对双方的修改时间，若时间一致说明没有修改过，就让浏览器使用自己的资源，不用再下载资源。）


# 9. 彩蛋(不依赖 cookie 的 session)
## 9.1 原理
session 实现关键是 sessionID，只需要将 sessionID 传递给浏览器，浏览器在请求的时候再将 sessionID 传递给服务器，就可以实现 session。所以，可以使用在 URL 中插入查询参数的方式来实现 sessionID 的传递。
## 9.2 例子
第一步：服务端（node）直接将 sessionID 用 JSON 传给前端
```javascript
let sessionID = Math.random() * 10000000 
response.write(`{"sessionID"：${sessionID}}`)
```
第二步：前端处理：将获取的 JSON 解析出来，获取 sessionID，跳转页面的时候，将sessionID写到查询参数之中
```javascript
let object = JSON.parse(request.responseText)
// 将 sessionID 存到 localStorage 中备用
localStorage.setItem('sessionID',object.sessionID)
window.location.href = `/?sessionID=${}`
```
第三步：服务器端获取查询参数，使用查询参数之中的 sessionID 去使用 session
```javascript
ley sessionID = query.sessionID  // query 为查询参数
```



设置、获取、删除 cookie 的方法
```javascript
// 设置 cookie
function setCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }else{
        var expires = "";
    }
    document.cookie = name+"="+value+expires+"; path=/";
}
// 获取cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
// 删除cookie
function deleteCookie(name) {
    setCookie(name,"",-1);
}
```
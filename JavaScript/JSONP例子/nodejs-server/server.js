var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

// var server = http.createServer(function(request, response){
//   var parsedUrl = url.parse(request.url, true)
//   var path = request.url 
//   var query = ''
//   if(path.indexOf('?') >= 0){ query = path.substring(path.indexOf('?')) }
//   var pathNoQuery = parsedUrl.pathname
//   var queryObject = parsedUrl.query
//   var method = request.method

  var server = http.createServer(function(request, response){
    var parsedUrl = url.parse(request.url, true)
    var pathWithQuery = request.url 
    var queryString = ''
    if(pathWithQuery.indexOf('?') >= 0){ queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
    var path = parsedUrl.pathname
    var query = parsedUrl.query
    var method = request.method

  /******** 从这里开始看，上面不要看 ************/







  if(path === '/'){
    var string = fs.readFileSync('./index.html','utf8')
    var amount = fs.readFileSync('./db','utf8') - 0 
    string = string.replace('&&&amount&&&',amount)
    response.setHeader('Content-Type','text/html;charset=utf-8')
    response.write(string)
    response.end()
  } else if(path === '/get'){    
      var amount = fs.readFileSync('./db','utf8') - 0       // 读取文件的内容，并将字符串转为数字
      let callbackName = query.callback
      response.setHeader('Content-Type','application/javascript')  // 设置返回的响应类型
      response.write(`${callbackName}(${amount})`)                       // 写入响应信息
      response.end()                                         // 结束响应
  } else if(path === '/add'){
      let callbackName = query.callback   
      var amount = fs.readFileSync('./db','utf8') - 0
      amount += 1
      fs.writeFileSync('./db',amount)
      response.setHeader('Content-Type','application/javascript')
      response.write(`${callbackName}(${amount})`)
      response.end()
  } else if(path === '/reduce'){
      let callbackName = query.callback
      var amount = fs.readFileSync('./db','utf8') - 0
      amount -= 1
      fs.writeFileSync(' ./db',amount)
      response.setHeader('Content-Type','application/javascript')
      response.write(`${callbackName}(${amount})`)
      response.end()
  }



  









  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)
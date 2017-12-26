## jQuery 设计思想原理
jQuery实质上是一个构造函数，该构造函数接受一个参数，jQuery通过这个参数利用原生API找到节点，之后返回一个方法对象，该方法对象上的方法对节点进行操作(方法使用了闭包)。
```
function jQuery(parameter){
  let nodes = {}
  
  if( typeof parameter === 'string' ){
    let temp = document.querySelectorAll(parameter)
    for(let i = 0;i < temp.length;i++){
      nodes[i] = temp[i]
    }
    nodes.length = temp.length
  } else if(parameter instanceof Node) {
    nodes[i] = parameter
  } // 通过 parameter 参数获取节点，将节点添加进 nodes
  
  nodes.method1 = function(){}
  nodes.method2 = function(){}
  ...
  
  return nodes;
}
```
上面原理简单叙述 jQuery 的设计思想，并不是 jQuery 的实际实现。
## 模拟实现简易的 jQuery
1. 封装函数
```
function getSiblings(node){
  var allChildren = node.parentNode.children
  
  var array = {
    length : 0 
  }
  
  for(let i = 0;i < allChildren.length;i++){
    if(allChildren[i] !== node){
      array[length] = allChildren[i]
      array.length += 1
    }
  }
  
  return array
}
```
再封装一个函数
```
function addClass(node,classes){
  classes.forEach((value) => {node.classList.add(value)})
}
```
这个时候，可以使用封装的函数来对传入的节点进行操作。  

2. 封装命名空间
```
var dom = {}
dom.getSiblings = function(node){
  var allChildren = node.parentNode.children
  
  var array = {
    length : 0 
  }
  
  for(let i = 0;i < allChildren.length;i++){
    if(allChildren[i] !== node){
      array[length] = allChildren[i]
      array.length += 1
    }
  }
  
  return array
}

dom.addClass = function(node,classes){
  classes.forEach((value) => {node.classList.add(value)})
}
```
封装命名空间就是把所有封装的函数放入一个对象之中，通过调用对象的方法来调用封装的函数。  
这样做有一个好处：__不会污染全局变量__

3. 将参数 node 放到最前面（通过原型链调用封装函数）  

i. 扩展 Node 对象接口  
  直接在 Node 对象上添加封装函数，修改Node.protorype对象，在Node.prototype对象上新增方法。
  缺点： 修改 Node 对象的原型，可能无意识覆盖原生API
 
ii.  创建一个新的接口  
```
function jQuery(nodeOrString){
  let nodes = {}
  
  // 通过类型检测，获得正确的节点，添加进 nodes 对象
  if( typeof nodeOrString === 'string' ){
    let temp = document.querySelectorAll(nodeOrString)
    for(let i = 0;i < temp.length;i++){
      nodes[i] = temp[i]
    }
    nodes.length = temp.length
  } else if(nodeOrString instanceof Node) {
    nodes[i] = nodeOrString
  }

  return {
    getSiblings : function(){
      // 操作 nodes（闭包）
    },
    addClass : function(){
      // 操作 nodes（闭包）
    },
    ...
  }
}
```
  这种方法的优点是「无侵入」。jQuery构造函数生成一个新的对象，并给对象封装方法，不会修改节点上的原生Node对象。 
  
 4. 缩写
 window.$ = jQuery
  缩写之后，就可以使用 $() 代替 jQuery() 了。
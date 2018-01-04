## DOM 0级事件（DOM Level 0）
DOM 0级事件两个写法：
- HTML属性中写 `oncilck = "function()"`,点击时，执行`""`之中的代码，相当于`eval("function()")`
- JavaScript中写 `onclick = function`，点击时，调用`function`这个函数，相当于`call`这个函数。

## DOM 1级事件（DOM Level 1）
DOM Level 1 只是将 DOM Level 1 规范了一下，并没有内容上的实质变化。  

## DOM 2级事件（DOM Level 2）
addEventListener('事件名称',function(){})  
与 onclick 区别：
- onclick 是一个属性，只能绑定一个 click 事件，重复绑定会覆盖前面的 click 事件。所以，不要轻易 onclick，很可能会覆盖其他人绑定的 onclick事件。而 addEventListener 可以多次绑定同一个事件类型的事件
- addEventListener 是事件监听队列。eventListeners，依次触发队列中的函数。先进先出。  

removeEventListener('事件名称',函数名)  
remove 一个事件需要明确提供 事件所执行的函数名，所以在添加事件绑定时就应该指定函数名。

## 事件模型
W3C 事件模型：
- 事件捕获
- 事件冒泡

addEventListener的第三个参数决定了事件是 '捕获' 还是 '冒泡'。默认为 false，冒泡模型。false 阻止捕获事件。

#### 事件捕获
元素绑定同一个类型的事件，执行顺序从最顶层的祖先元素到触发事件的元素依次执行，称为捕获。

#### 事件冒泡
元素绑定同一个类型的时间，执行顺序从触发时间的元素到最顶层的祖先元素依次执行，称为冒泡。

#### 事件模型
浏览器中，触发一个事件时，引擎会从 `document` 到 `<html>` 再到 `<body>` 触发事件的元素中寻找同一类型的事件，根据 addEventListener 的第三个参数决定是否执行。事件捕获阶段。  
到达触发事件的元素时，不区分冒泡还是捕获，事件处于目标阶段。  
事件处于目标阶段之后，又会从触发事件的元素往上直到`document`寻找同意类型的事件，根据addEventListener 的第三个参数决定是否执行。事件冒泡阶段。

#### 事件传播  
捕获 =》 目标=》 冒泡   
在IE中，事件是从捕获阶段开始执行的，而在其他浏览器中，默认从冒泡阶段开始。  
一般情况下，默认的监听事件都是从冒泡阶段执行。

#### 点击关闭浮层
1. 直接设置 document 监听事件来关闭浮层  
[浮层方案一](http://js.jirengu.com/jehobunege/1/edit?html,css,js,output)  
```javascript
$('#clickMe').on('click',function(e){
  $('#popover').css({
    display: 'block',
  })
})

$('#wrapper').on('click',function(e){
  e.stopPropagation()
})   // 必须阻止事件的冒泡。否则，在点击目标时，点击事件会一直往上冒泡，知道文档顶端，触发 document 上的点击事件，导致，浮层无法弹出。若没有这段代码，事实上是按钮的点击事件和 document 的点击事件都被触发，所以浮层的 display 还是 'none'

$(document).on('click',function(e){
  $('#popover').css({
    display: 'none',
  })
})
```
方案一的缺点：
- 每一个浮层都需要对文档进行一次监听，当页面中浮层很多的时候，内存消耗会很大。
- 必须阻止触发浮层事件的冒泡，否则就会出现浮层无法弹出的bug

2. 使用 setTimeout 设置冒泡完成之后再监听 document
[浮层方案二](http://js.jirengu.com/melizizovo/1/edit)  
```JavaScript
let active = false  // 变量 active 记录浮层是否开启
$('#clickMe').on('click',function(e){
  active = !active
  $('#popover').css({
    display: 'block',
  })
  
  if(active === true){  // 判断浮层是否开启，若开启则绑定document事件
    setTimeout(function(){
      $(document).one('click',function(){
        $('#popover').css({
          display: 'none',
        })
        active = false  // 关闭浮层之后，将active设置为false
      })
    },0)
  }
})

$('#popover').on('click',function(e){
  e.stopPropagation()
})
// 本方案在点击时浮层弹出，同时开始监听 document 的点击事件。即在浮层出现的情况下才监听取消浮层事件，且事件只执行一次，执行之后就被回收，不会消耗太多内存。
// setTimeout(function(){},0) 的作用是告诉JS引擎，完成当前的任务后立即开始执行function().所以，在点击按钮之后，首先执行冒泡过程，冒泡完成之后，执行setTimeout的回调函数，添加document事件监听，此时添加的事件因为冒泡已经完成，不会在冒泡阶段被执行。
// 重复开关按钮控制浮层
```
方案二的优点：
- 在浮层出现时再监听事件，关闭浮层时关闭事件监听。节约内存。
- 无需阻止事件冒泡。
- 可以通过重复点击按钮控制浮层
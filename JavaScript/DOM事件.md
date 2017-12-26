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

addEventListener的第三个参数决定了事件是 '捕获' 还是 '冒泡'。默认为 false，冒泡模型。

#### 事件捕获
元素绑定同一个类型的事件，执行顺序从最顶层的祖先元素到触发事件的元素依次执行，称为捕获。

#### 事件冒泡
元素绑定同一个类型的时间，执行顺序从触发时间的元素到最顶层的祖先元素依次执行，称为冒泡。

#### 事件模型
浏览器中，触发一个事件时，引擎会从 `document` 到 `<html>` 再到 `<body>` 触发事件的元素中寻找同一类型的事件，根据 addEventListener 的第三个参数决定是否执行。事件捕获阶段。  
到达触发事件的元素时，不区分冒泡还是捕获，事件处于目标阶段。  
事件处于目标阶段之后，又会从触发事件的元素往上直到`document`寻找同意类型的事件，根据addEventListener 的第三个参数决定是否执行。事件冒泡阶段。  


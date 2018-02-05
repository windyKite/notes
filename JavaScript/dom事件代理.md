## 事件模型
[事件传播模型](https://i.loli.net/2018/02/05/5a7852dee36fa.png)
在说事件代理之前，先来说一下事件模型。  
在浏览器开发的早期，面对事件触发模型的问题，所有的程序员都认为事件触发不应该是直接触发的，而应该在文档中有一个传播的过程，然而事件传播的顺序应该是什么样的？  
当时的程序员分为两个派别：
- 以微软程序员为主的事件捕获派
- 以其他公司程序员主导的事件冒泡派

于是，微软代表的事件捕获派制作出了支持dom事件捕获的 IE 浏览器。而事件冒泡派则制作出了如 Firefox 这样支持事件冒泡的浏览器。  
双方意见相左，标准不一。后来，W3C横空出世，收编两方意见，给了一个统一的标准，就是现在的事件模型。  
在 W3C 的标准中，事件捕获和事件冒泡都是合乎规范的，开发者可以自己指定事件的传播模型。  
那么，什么是事件捕获，什么是事件冒泡，有必要争论吗？

事件捕获：触发一个事件时，从DOM树的最顶层开始寻找事件监听函数，若找到相对应事件的监听函数，则立即执行该函数，然后继续向下寻找, 直到寻找到触发事件的那个元素为止。  
事件冒泡：与事件捕获相反，事件冒泡认为事件触发之后，应该从触发事件的元素往DOM树的上层传播，向上寻找相对应事件监听函数，同样是找到执行，之后继续寻找，直到DOM树的顶端。  
由于事件冒泡更符合人的理解，现代浏览器（如Chrome）默认支持事件冒泡，只有远古时代的IE支持事件捕获。当然，在绑定事件时，可以指定事件传播模型。

关于事件模型的演示：
```html
<body>
<div class="red">
  <div class="blue">
    <div class="green">
      <div class="yellow">
        <div class="orange">
          <div class="purple">
            
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</body>
```
```css
*{margin:0;padding:0;box-sizing:border-box;}
.red.active {
  background: red;
}
.blue.active {
  background: blue;
}
.green.active {
  background: green;
}
.yellow.active {
  background: yellow;
}
.orange.active {
  background: orange;
}
.purple.active {
  background: purple;
}
div {
  border: 1px solid black;
  padding: 10px;
  transition: all 0.5s;
  display: flex;
  flex:1;
  border-radius: 50%;
  background: white;
}

.red{
  width: 100vw;
  height: 100vw;
}
```
```javascript
// 捕获模型，先捕获，后冒泡。
let divs = $('div').get()
let n = 0
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', () => {
    setTimeout(() => {
      divs[i].classList.add('active')
    }, n * 500)
    n += 1
  }, true)
}


for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', () => {
    setTimeout(() => {
      divs[i].classList.remove('active')
    }, n * 500)
    n += 1
  })
}
```
```javascript
// 冒泡模型，省略捕获，直接冒泡。
let divs = $('div').get()
let n = 0
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', () => {
    setTimeout(() => {
      divs[i].classList.add('active')
    }, n * 500)
    n += 1
  }, false)
}


for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', () => {
    setTimeout(() => {
      divs[i].classList.remove('active')
    }, n * 500)
    n += 1
  })
}
```

既然事件是具有传播性的，那么，能不能利用这个特性搞点事情呢？

## 事件代理
事件代理的原理：利用事件模型的传播性质，将子元素的监听函数绑定到父元素上，通过事件传播去执行监听函数。

####场景：
假设现在有一个 ul 元素，里面有 4 个 li 子元素，需要给4个子元素添加一个鼠标点击事件，log 出 li 内的文本
```html
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
</ul>
```
常规的方式是直接添加事件监听：
```javascript
let ul = document.querySelector('ul')
let lis = ul.querySelectorAll('ul li')

for(let i = 0; i < lis.length; i++){
  lis[i].addEventListener('click',(e)=>{
    console.log(e.currentTarget.textContent)
  })
}
// 获取 li 元素，遍历所有 li 并给 li 添加事件监听
```
在这种方法中，每一个元素都添加了1个事件监听，一共添加了4个事件监听，内存占用较大。

接下来，需求要求添加一个 li 元素，并同样添加事件监听。于是，这样解决
```javascript
let li = document.createElement('li')
li.textContent = 5
li.addEventListener('click',(e)=>{
    console.log(e.currentTarget.textContent)
  })
ul.appendChild(li)
// 创建一个新的 li 元素，并给该 li 元素添加事件监听
```
目前，一共有 5 个事件监听了，占用内存又大了一些。  
那么，你有没有考虑过，万一是给 10000 个 li 元素添加监听事件呢？那不就有 10000 个事件监听了？万一要新加 10000 个新元素呢？那不是要重新加 10000 个事件监听？  
怎么解决上面说的这种问题？  
使用事件代理：
```javascript
let ul = document.querySelector('ul')
let lis = ul.querySelectorAll('ul li')

ul.addEventListener('click',(e)=>{
  console.log(e.target.textContent)
}) // 将所有子元素的事件代理到父元素上

let li = document.createElement('li')
li.textContent = 5
ul.appendChild(li)
// 直接添加新元素，新元素的事件同样会被代理
```
使用事件代理之后，无论有多少个子元素，都只有一个事件监听，同时，效果也是一样的，节约了内存。在增加新元素时，也不用再修改事件绑定。

优点：
- 提高JavaScript性能。将子元素同一类型的事件监听绑定到父元素上，只声明了一个监听函数，减少了内存的占用，提高响应速度。
- 方便动态添加DOM元素。使用事件代理之后，用JS动态添加子元素时，不需要因为元素改动而修改事件绑定。

## target 和 currentTarget
使用事件代理的一个问题是需要分清楚 target 和 currentTarget 两个属性，在适当的时候选择适当的属性。  
> 一个触发事件的对象的引用。它与event.currentTarget不同， 当事件处理程序在事件的冒泡或捕获阶段被调用时。————MDN

> 当事件遍历DOM时，标识事件的当前目标。它总是引用事件处理程序附加到的元素，而不是event.target，它标识事件发生的元素。————MDN

MDN上对于 target 和 currentTarget 的描述有点难以理解。  
实际上，target 就是触发事件的元素本身，不一定是绑定事件监听的元素。而 currentTarget 则一定是绑定事件监听的元素，不一定是触发事件的元素。
代码演示：
```html
  <ul>dsfasdf
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
  </ul>
```

```javascript
let ul = document.querySelector('ul')

ul.addEventListener('click',(e)=>{
  console.log('我打印出的是target的值:' + e.target.textContent)
  console.log(e.target.textContent)
  console.log('我打印出的是currentTarget的值')
  console.log(e.currentTarget.textContent)
  if(e.target === e.currentTarget){
    console.log(1)
  }
},false)

// 点击第4个li
// 控制台将会打印出: 
// 我打印出的是target的值:4
// 我打印出的是currentTarget的值:dsfasdf
//     1
//     2
//     3
//  4

```
看起来控制台打印出了 6 行,那么是不是所以的 li 都会被冒泡到呢?其实不是。  
实际上,控制台只打印了 2 行,1 行是点击的 4,另一行是整个 ul ,所以所有元素都被打印出来了。  

__当绑定事件监听的元素和触发事件的元素是同一个时,target === currentTarget。__  
在上面的例子中，就是点击 ul 时，target 才等于 currentTarget。  
所以使用事件代理，必须使用 target，不能使用 currentTarget。

__当一个事件处理函数绑定到多个元素上时，由于冒泡和捕获机制的存在，使用target可能会错误触发不想触发的元素，所以使用 currentTarget 属性更加保险。__
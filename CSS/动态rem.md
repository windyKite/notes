## 单位
px：像素  
em：一个 M 的宽度（面试：一个字的宽度）  
rem：root em 根元素（`<html>`）的 font-size   
vh：view height，视口高度  100vh === 视口高度
vw：view width，视口宽度  100vw === 视口宽度 
## 十二像素法则
浏览器默认 font-size:16px;
Chrome浏览器默认最小字号为12px：font-size:12px;
所以一般情况下，rem 的font-size不要小于12px;
## rem
rem 就是 `<html>`元素的 font-size，默认为 16px;(浏览器默认font-size)  
rem和em 的区别：
- rem 和 em 没有任何联系
- rem 是根元素的 font-size
- em 是字体中 M 的宽度

## 手机端布局方案
1. 百分比
2. 整体缩放

百分比布局问题：高度无法确定，宽度与高度没办法关联到一起。
## 动态rem
一切单位以屏幕宽度为标准，就能完美还原设计稿。
动态REM思路：动态rem 采用整体缩放的思想，在页面渲染之前，使用JS获取设备宽度并设置rem(1rem == html font-size == viewport width)，之后的布局单位全部使用rem来实现整体缩放。
#### 使用JS动态调整rem(写在页面头部)
```
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
 <script>
     var pageWidth = window.innerWidth
     document.write('<style>html{font-size:'+pageWidth+'px;}</style>')
 </script>
```
在使用动态 rem 布局的移动端页面中，很小的宽度如border-width 依然使用px，因为即使使用rem，当rem小于1px 时，依然会被浏览器当做1px 使用。

## CSS学习方法
1. 开干。遇到问题解决它。
2. 遇到不会的效果，搜索做个demo记下来。
3. 遇到更好的写法，做个demo记下来。
4. demo 链接记在这篇文章。

## 写页面的经验
1. 先写好HTML结构，再往结构上添加CSS（可以使用网页自带的样式添加器，确定效果之后复制代码到CSS文件）
2. 做好布局，具体元素从内往外添加样式。

## CSS reset文件
重置默认样式
```
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
```

## 清除浮动
只要设置了 float 属性，就必须在设置 float 属性元素的父元素上清除浮动(加类 clearfix)。
```
.clearfix::after{
    content:"";
    display:block;
    clear:both;
}
```

## 元素高度
1. div（块级元素）高度由其内部文档流高度总和决定。
2. span（行内元素）高度由 字体高度（font-size）和浏览器给的边线共同决定。
3. 文档流：
    - 块级元素：从上到下，一个块级元素占据一行。
    - 行内元素：由左往右，宽度不够时自动换行。（英文单词视为一个整体，不会自动换行，word-break:break-all;手动换行）

## 盒模型
盒模型：将元素比喻成一个盒子的模型。  

盒模型分两种:  
1. content-box(默认)
    - content-box中 width 和 height 只包括内容的宽高，不包括 padding、border 的宽高。
    - 尺寸计算公式：width = 内容的宽度，height = 内容的高度。宽度和高度都不包含内容的边框（border）和内边距（padding）
2. border-box
    -  width 和 height 属性包括内容，内边距和边框，但不包括外边距。
    -  width = border + padding + 内容的  width，  
    height = border + padding + 内容的 height。

可以使用 box-sizing 属性改变盒模型的类型。  
![盒模型](https://i.loli.net/2017/12/18/5a3766eaca5c7.png)
## 清除 li 之类元素后的 空格文本节点
- 使用 flex 排列 `li` 元素
- 父元素加 font-size:0; 若是子元素有文字，需要手动给子元素加font-size
- HTML注释：在`</li>`之后加一个空的注释符 `<!-- -->`
- 使用负 margin，最差的方法，不建议使用。
- 换行写完`</li>`携程`</li换行>`

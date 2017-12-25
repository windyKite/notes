简书[icon的5种用法](http://www.jianshu.com/p/3287a3060443)
# icon 的5种用法
icon有5种常用的用法：
1. img 用法
2. background 用法
3. background 一张图（CSS sprite 雪碧图）
4. font 字体
5. SVG

# 切图
制作 icon ，首先需要素材，这时候就要用到 Photoshop 了。
素材一般有两种：
1. PSD格式
2. PNG格式
## PSD格式切图
这里我已经准备好了 PSD格式的素材，直接用 Photoshop 打开就可以了。
![PSD格式.png](http://upload-images.jianshu.io/upload_images/7574134-d4dc5c7a65689a64.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
现在我们的任务就是要把图中的4个 icon 切出来。
步骤：
1. 选中图层
![image.png](http://upload-images.jianshu.io/upload_images/7574134-2a89610999d2fe87.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
点击上图中箭头指向的按钮，选择移动工具。
然后将鼠标移至要切出来的图像，点击左键。
![image.png](http://upload-images.jianshu.io/upload_images/7574134-d7ce320bde7d3e95.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
可以看到图片右边箭头指向了一个图层，现在将该图层的锁定按钮关掉。
![](http://upload-images.jianshu.io/upload_images/7574134-7cae6722b6d9f335.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
可以看到，QQ 图标不见了，说明这个图层就是我们想要切出来的图层。
这时候就已经选中了这个图层了。
2. 复制图层
鼠标右键点击选中的图层，选择复制图层
![image.png](http://upload-images.jianshu.io/upload_images/7574134-f24d28f8f14b6028.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
将弹出的选框中目标文档改为新建
![image.png](http://upload-images.jianshu.io/upload_images/7574134-b05299329a9a0619.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
在新生成的文件中选择图像，再点击图片下方的裁切，在弹框中选确定
![image.png](http://upload-images.jianshu.io/upload_images/7574134-2cad4cc58fef34d4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
在这里可以选择图像=》画布大小调整图片大小
![](http://upload-images.jianshu.io/upload_images/7574134-19610d7886c9a292.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
这时候就可以看到切出来的图片了，由于是白色的图片，所以有点模糊，加个黑色背景填充吧
  ![image.png](http://upload-images.jianshu.io/upload_images/7574134-dbc3ca1d333a9cdf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
3. 保存图片
点击文件，再点击导出，选择右侧导出为PNG，存储起来就可以了
![导出](http://upload-images.jianshu.io/upload_images/7574134-de9966baee4e4ad0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

接下来按照同样的方式将4个 icon 都切下来。
![icon](http://upload-images.jianshu.io/upload_images/7574134-9cb53626345688e0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
这就是切下来的4个icon素材了。
## PNG格式切图
我已经提前将图标转为 PNG 格式了
![image.png](http://upload-images.jianshu.io/upload_images/7574134-72272595c2b81523.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
步骤：
1. 新建一个文档，用来存放切出来的 icon
![新的文档](http://upload-images.jianshu.io/upload_images/7574134-0ea178eec5be6e86.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
2. 将内容切出来
使用选框工具选中要切出来的内容
![image.png](http://upload-images.jianshu.io/upload_images/7574134-7fefcc54709313d8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
再切换魔棒工具
![image.png](http://upload-images.jianshu.io/upload_images/7574134-dc1b8fae40182a8b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
右键减去不要的内容
![减去](http://upload-images.jianshu.io/upload_images/7574134-16224e14974693f6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
选择移动工具
![image.png](http://upload-images.jianshu.io/upload_images/7574134-ea27a34ee385aff9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
使用移动工具将切出来的内容拉到新建的文档
![image.png](http://upload-images.jianshu.io/upload_images/7574134-be14415f4871e024.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
裁切一下，图片就切完了。
3. 按照PSD格式切图的保存方式将图片保存下来。

切图收工。
# 1. img 用法
img 用法就是指直接将 icon 作为图片插入到页面中。
#### HTML
```
<div class="icons">
	<img src="./net.png">
	<img src="./qq.png">
	<img src="./twitter.png">
	<img src="./weibo.png">
</div>
```
#### 显示效果
![显示效果](http://upload-images.jianshu.io/upload_images/7574134-c8314909bf83bac8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
img用法的好处：
- 图片可以适应 img 的大小调整
- 简单

img用法的坏处：
- 图片过多，影响性能
- img 标签不利于语义化
- img 的大小设置可能使图片适应而变形，不好看。
# 2. background 用法
background用法就是将图片作为元素的background来插入。
#### HTML
```
<div class="icons">
	<div class="icon qq"></div>
	<div class="icon weibo"></div>
	<div class="icon twitter"></div>
	<div class="icon net"></div>	
</div>
```
#### CSS
```
.icon{border: 1px solid red;display: inline-block;width: 24px;height: 25px;}
.qq{background: transparent url(./qq.png) no-repeat 0 0;}
.weibo{background: transparent url(./weibo.png) no-repeat 0 0;}
.twitter{background: transparent url(./twitter.png) no-repeat 0 0;}
.net{background: transparent url(./net.png) no-repeat 0 0;}
```
#### 显示效果
![显示效果](http://upload-images.jianshu.io/upload_images/7574134-bddddcf65c7584e5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
# 3.  background 一张图（CSS sprite 雪碧图）
Sprite图原理：使用 background-position 属性调整背景图的位置，使想要呈现的图像呈现出来，其余的隐藏。 
通过[Sprite生成器](http://css.spritegen.com/)可以将多张图片合成一张，并且生成所需代码。
![生成器页面](http://upload-images.jianshu.io/upload_images/7574134-269074a8c6aca664.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
步骤： 
1. 上传图片
![](http://upload-images.jianshu.io/upload_images/7574134-3d21af1ed43675d2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
2. 选择生成图片格式
![](http://upload-images.jianshu.io/upload_images/7574134-0b959890b8b36e65.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
3. 填写 CSS 前缀
![](http://upload-images.jianshu.io/upload_images/7574134-c2e3cfbe5557f4fe.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
4. 选择图片间距
![](http://upload-images.jianshu.io/upload_images/7574134-9ea42f00db934af2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
5. 点击生成
![生成的Sprite图](http://upload-images.jianshu.io/upload_images/7574134-5fae3ef5e2af60b4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
6. 保存
右键点击图片，将图片保存下来
![保存](http://upload-images.jianshu.io/upload_images/7574134-659790bc6be6505b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
### Sprite 图使用
#### HTML
```
<div class="icons">
	<div class="icon qq"></div>
	<div class="icon weibo"></div>
	<div class="icon twitter"></div>
	<div class="icon net"></div>	
</div>	
```
#### CSS 
```
.icon{ display: inline-block; width:30px; height: 30px; background: url('./sprite.png') no-repeat; overflow: hidden; text-indent: -9999px; text-align: left; }
.net { background-position: -0px -0px; width: 30px; height: 30px; }
.qq { background-position: -30px -0px; width: 30px; height: 30px; }
.twitter { background-position: -0px -30px; width: 30px; height: 30px; }
.weibo { background-position: -30px -30px; width: 30px; height: 30px; }
```
#### 显示效果
![显示效果](http://upload-images.jianshu.io/upload_images/7574134-0861852402472906.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
# 4. font字体
font字体使用分为两种情况：
- 作为字体直接在HTML中使用
- 在CSS中使用
font字体需要用到[一个神器的网站，点击它](http://iconfont.cn/).
由于阿里巴巴矢量图库上传图标需要SVG格式，避免麻烦就不用自己的图标了。我们直接从图标库中添加图标，步骤如下：
1. 在搜索框中搜索图标，点击添加进购物车
![添加图标](http://upload-images.jianshu.io/upload_images/7574134-11166d893ee5026c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
2. 点击页面右上角购物车图标，将购物车中的图标添加进一个项目
![新增项目](http://upload-images.jianshu.io/upload_images/7574134-29696ceaa6aabb88.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
3. 项目生成完成
![完成](http://upload-images.jianshu.io/upload_images/7574134-f1c85fc782c319ad.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### 字体使用
1. 选中Unicode，点击生成代码
![生成代码](http://upload-images.jianshu.io/upload_images/7574134-d3f68cfcd5fa7f7a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![生成的代码](http://upload-images.jianshu.io/upload_images/7574134-d41f8dda24ef4f59.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
2. 复制代码，将代码粘贴至样式表最前面
这时候，图标就已经变成了一个字体了。我们可以像正常使用字体那样使用它。
3. 示例
##### HTML
```
<body>
	<span class="iconfont">
			&#xe65c;
			&#xe619;
			&#xe643;
	</span>
</body>
```
##### CSS
```
<style>
	@font-face {
		font-family: 'iconfont';  /* project id 505367 */
		src: url('//at.alicdn.com/t/font_505367_1xd09i3l98xs9k9.eot');
		src: url('//at.alicdn.com/t/font_505367_1xd09i3l98xs9k9.eot?#iefix') format('embedded-opentype'),
		url('//at.alicdn.com/t/font_505367_1xd09i3l98xs9k9.woff') format('woff'),
		url('//at.alicdn.com/t/font_505367_1xd09i3l98xs9k9.ttf') format('truetype'),
		url('//at.alicdn.com/t/font_505367_1xd09i3l98xs9k9.svg#iconfont') format('svg');
	}
	.iconfont{
		font-family:"iconfont" !important;
		font-size: 100px;
	}
</style>
```
##### 显示效果
![image.png](http://upload-images.jianshu.io/upload_images/7574134-56e6f1c54aec99ae.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
[阿里巴巴矢量图标库使用说明](http://iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8cf4382a&helptype=code)
#### CSS使用
1. 将生成代码的链接作为CSS外部样式表的链接插入文档
`	<link rel="stylesheet" href="//at.alicdn.com/t/font_505367_1xd09i3l98xs9k9.css">
`
2. 挑选相应图标并获取类名，应用于页面
`	<span class="iconfont icon-QQ"></span>
`
3. 效果
![效果](http://upload-images.jianshu.io/upload_images/7574134-75660747820e21a0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
因为本质上还是使用字体，所以依然可以通过操作`.iconfont`类来对字体样式进行修改。
# 5. SVG使用
SVG使用依然是使用[阿里巴巴矢量图标库](http://iconfont.cn/home/index?spm=a313x.7781069.1998910419.2)
步骤：
1. 第一步依然是复制代码，不过这回是 JavaScript 链接
`/	<script src="//at.alicdn.com/t/font_505367_1xd09i3l98xs9k9.js"></script>
`
2. 加入通用css代码（引入一次就行）
```
<style type="text/css">
    .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
</style>
```
3. 挑选相应图标并获取类名，应用于页面
```
<svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-QQ"></use>
</svg>
```
4. 示例
#### HTML
```
<svg class="icon" aria-hidden="true">
	<use xlink:href="#icon-QQ"></use>
</svg>
```
#### JS
`	<script src="//at.alicdn.com/t/font_505367_1xd09i3l98xs9k9.js"></script>
`
#### 显示效果
![显示效果](http://upload-images.jianshu.io/upload_images/7574134-cc4766a256ca4de8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

SVG使用的好处：
- 可以使用彩色图标
- 调整SVG的`width`和`height`调整大小
- 目前推荐使用的方法。



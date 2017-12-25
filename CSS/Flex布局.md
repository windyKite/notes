Flex布局用法很简单，记住几点就可以了。
## 容器属性
1. flex-direction：主轴方向
2. flex-wrap：超出是否换行
3.  flex-flow：flex-direction flex-wrap
4.  justify-content:主轴对齐方式
5.  align-items：交叉轴对齐方式
6.  align-content：多根轴线对齐方式
## 项目属性
1. order:项目排列顺序，越小越靠前，默认0，可为负值。
2. flex-grow：项目放大比例，默认0
    - 计算方式：order / 所有 order 总和 = 所占比例
3. flex-shrink：项目缩小比例，默认为1，无负值。
4. flex-basis：分配多余空间前，项目所占主轴空间。
5. flex：flex-grow flex-shrink flex-basis；默认值 0 1 auto;
6. align-self：单个项目自身对齐方式。

## 训练方法
[Flex训练游戏](http://flexboxfroggy.com/#zh-cn)  
[Flex训练游戏](http://www.flexboxdefense.com/)
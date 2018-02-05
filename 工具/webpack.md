## 安装
安装 webpack，需要使用到软件包管理器 npm，而 node.js 自带 npm，所以需要先安装 node.js
1. 安装 node.js
node.js 可以到 [nodej.s](https://nodejs.org/zh-cn/) 官网下载安装包下载。
2. 安装 webpack
安装 webpack 有一点需要注意：尽量使用管理员模式安装（sudo）。
全局安装 webpack:
> `sudo npm install webpack -g`  
此时，webpack 已经被安装到全局环境下面。  
使用`webpack -v`查看是否安装完成和 webpack 版本。  

全局环境下的 webpack 的弊端：
- 版本固定，版本会固定为全局环境下的版本
- 当项目本地安装 webpack 版本与全局环境版本不一致时，默认使用全局版本，可能使构建失败。


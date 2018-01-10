1. 初始化
cd 进要初始化成本地仓库的目录
> `git init`
完成初始化
2. 配置信息
```
git config --global user.name 你的英文名          // 设置姓名
git config --global user.email 你的邮箱           // 邮箱
git config --global push.default matching       // push 所有分支到对象远程仓库
git config --global core.quotepath false        // 引用路径 false
git config --global core.editor "vim"           // 默认编辑器为vim
```
3. 添加进暂存区
将工作区中的修改添加进暂存区
> `git add .`  添加当前目录
> `git add -A` 添加所有修改
4. 提交进本地仓库
将暂存区中的所有修改提交进本地仓库
> `git commit -m ''` 提交修改进本地仓库，-m 后的字符串提示提交信息
> `git commit -v`   显示本次提交与仓库的差异。输入本次提交提示信息。
5. 克隆一个远程仓库到当前目录
从 github 上面克隆一个远程仓库到当前目录
> `git clone ssh/https`  克隆一个远程仓库到当前目录
6. 克隆一个远程仓库到指定目录
从 github 上面克隆一个远程仓库到指定目录
> `git clone ssh/https 目录路径`  克隆一个远程仓库到指定的路径的目录下
7. 忽略文件
文本编辑器 vim 会对当前打开的文件创建以`.swp`为后缀的临时交换文件，我们不需要这些文件提交进仓库。  
可以将这些不需要提交的文件忽略掉。
> `vim .gitignore` 进入 .gitignore 文件
> 写入`*.swp`，将所有后缀为`.swp`的文件忽略  
```
# 忽略文件名为 xxx 的文件
xxx

# 忽略所有 log 文件
*.log

# 忽悠所有 log 文件，但 importtant.log 例外
！important.log
```
8. 查看仓库状态
git 仓库管理有多种状态，需要查看状态决定下一步做什么。
> `git status`  详细格式查看状态
> `git status -s` 紧凑格式查看状态
9. 删除仓库中的文件
在命令行中，删除文件一般使用`rm`命令，但是`rm`只是删除了工作区中的文件，git仓库不知道有删除。  
使用下面这个命令，通知 git 仓库删除。
> `git rm`     git 仓库删除
10. 将修改文件移出暂存区
有时候，可能会不小心将还不需要提交的文件提交进暂存区，这时候就需要将它从暂存区移出，不影响修改重新放入工作区。
> `git rm --cached 文件名`
11. 保存和回复工作进度
> `git stash`  保存当前工作进度，会分别对暂存区和工作区状态保存。
> `git stash save '提示信息'` 保存当前工作进度，并添加具体提示信息
> `git stash list` 列出保存的工作进度
> `git stash pop` 恢复最新的工作进度
12. 重命名文件
与 `rm` 一样，git 不直接使用 `mv` 重命名文件。而是使用 `git mv`
> `git mv 旧文件路径 新文件路径
13. 查看提交记录
需要版本回滚的时候，就需要查看一下有多少个版本提交
> `git log`
14. 给提交打`tag`标签
commit 是细粒度的，面向程序员。tag 是粗粒度的，面向用户。  
给提交打标签一般是在增加或有优化一个用户可感知的功能，或者新的版本等等。
> `git tag tag-name`  给最新一次提交打标签
> `git tag tag-name commit-hash` 给某次提交打标签
> `git tag`  列出所有标签
> `git tag -d tag-name`  删除特定标签
15. 推送标签
本地打的标签，默认情况下是不会 push 到远程仓库的，需要推送可以手动推送。
> `git push --tags`  手动推送 tag 到远程仓库
16. 追加提交
在日常使用中，有时候会忘记提交某一些文件，不想要再多一个提交，就可以使用追加提交，将忘记提交的文件追加到上一次提交中。  
要注意的是，追加提交之前，需要把想追加的文件添加进暂存区`git add file-path`  
> `git commit --amend` 弹出编辑器，编辑追加提交说明
> `git commit --amend -m "new message"`   编辑新的说明信息覆盖原有的说明信息
> `git commit --amend -C HEAD` 使用最近一次的提交说明
17. 设定提交时间
git 支持手动设定提交时间，需要注意的是事件不能是未来。
> `git commit`  
> `git commit --date="2018-01-01T12:01:01"`
> `git commit --date="10 minutes ago"`
> `git commit --date="noon yesterday"`
> `git commit --date="last friday"`
18. 把一个已修改过的文件移出暂存区
`git rm --cached 文件名`将新增的文件移出暂存区去 
> `git reset file-name`  将已经修改过的文件移出暂存区
19. 撤销最后一次提交，同时保持暂存区不变
有时候，提交得太过仓促，想要撤销提交，同时还要保持暂存区
> `git reset --soft HEAD^`
20. 撤销工作区中的修改
对文件做出的修改不要了，想要文件回到最后一次提交的状态。  
本撤销操作不可逆，需要慎重。
> `git checkout file-name`
## 远程仓库相关
21. 查看连接的仓库
每一个开发者都可以连接多个远程仓库，下面命令可以查看所有连接的仓库
> `git remote`
22. 查询远程仓库地址
> `git remote -v`
23. 从远程仓库拉取更新
> `git pull remote-name branch-name`  使用 pull 拉取更新
拉取之前，最好先使用 `git remote`看一下仓库名
24. 手工添加一个远程仓库
git clone 的远程仓库会记录 clone 的仓库地址，还可以手工添加远程仓库
> `git remote add remote-name remote-url`


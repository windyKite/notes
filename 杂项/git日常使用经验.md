## git使用前配置
```
git config --global user.name 你的英文名
git config --global user.email 你的邮箱
git config --global push.default matching
git config --global core.quotepath false
git config --global core.editor "vim"
```
1. 配置提交者姓名
2. 配置提交者邮箱
3. 配置push默认行为，matching 参数是 Git 1.x 的默认行为，其意是如果你执行 git push 但没有指定分支，它将 push 所有你本地的分支到远程仓库中对应匹配的分支。
4. 配置引用路径为 false
5. 设置编辑器为 vim
## git修改部分提交
在一次提交中发现，git 支持单提交某一个目录下的文件，而不是一次性提交所有修改的文件。
## 追加提交（解决方式未知）
在某一次的 commit 中使用 git commit --amend 追加提交。  
不能在 push 之后再提交，否则会出现冲突。目前不知道怎么解决。
测试一下追加提交。
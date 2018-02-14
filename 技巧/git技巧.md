1. git .gitignore 不生效怎么办？
git .gitignore 不生效时解决办法：
- 查看 .gitignore 中路径或文件名是否出错
- 若路径或文件名未出错，则是路径或文件已经被 track（跟踪），这时候需要删除本地缓存（改变成未 track 状态），然后再提交：
```
git rm -r --cached
git add .
git commit -m 'update .gitignore'
```

2. 
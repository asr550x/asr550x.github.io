# Git 分支管理规范

## 分支说明

### 长期分支(稳定分支)

* master
* develop

### 临时分支

* issue/{issue-id}
* feature/{issue-id}
* bugfix/{issue-id}
* hotfix/{issue-id}
* release/{milestone-title}

### 开发规范

1. 认领自己准备要做的 issue 假设 issue 编号是 #99
2. 更新自己本地 develop 分支代码: `git pull`
3. 创建一个名字叫 issue/99 的分支: `git checkout -b issue/99 develop`
4. 开始功能开发，每一个 commit 都要带上自己的 issue id，如 `git commit -m '#99 实现了非常牛拜的功能点'`
5. 提交自己的分支到 [代码仓库](https://git.huitong-tech.com) 上，`git push -u origin issue/99`
6. 如果自己的分支开发完毕，本地测试过了，向 milestone 对应的分支发起 pull request(PR), 假设 milestone 名字是 20181028, base 分支则是 releases/20181028
7. 等 milestone 中所有的 issue 的开发都完成了(开发不完则移动到下一个 milestone)，则都合并到 releases/20181028, 这样 releases/20181028 这个分支就是最新开发的所有功能的代码，master 是上一个最新的，后面我们流程规范了，还会对 releases/20181028 分支进行各种测试，这个分支没有问题了
8. 将 releases/20181028 分支与 master 分支合并, 打个 tag，名字是 20181028, `git tag 20181028`，进行发布
9. 进入下一个迭代和功能开发

## 标签说明

使用 Label 和 Issue 进行项目管理

### 标签分组和颜色设置

| 分组   | 前缀 |      Label      |  背景颜色 RGB 值 |
|----------|----|:-------------|------|
| 项目排期 | 项目: | 已确认，已排期，延后，开发中(WIP)，测试中，已上线，待讨论 | c5def5 |
| 功能分类 | 分类: | BUG，新功能，功能增强，功能完善，文档修改    |   d4c5f9 |
| 优先级 | 优先级: | P0(紧急)：当日处理，P1(高)：2日内处理，P2(中)：一周内处理，P3(低)：一月内处理 |  e99695 |

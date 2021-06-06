(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{46:function(t,e,s){"use strict";s.r(e);var a=s(0),i=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"git-分支管理规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-分支管理规范","aria-hidden":"true"}},[t._v("#")]),t._v(" Git 分支管理规范")]),t._v(" "),s("h2",{attrs:{id:"分支说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分支说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 分支说明")]),t._v(" "),s("h3",{attrs:{id:"长期分支-稳定分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#长期分支-稳定分支","aria-hidden":"true"}},[t._v("#")]),t._v(" 长期分支(稳定分支)")]),t._v(" "),s("ul",[s("li",[t._v("master")]),t._v(" "),s("li",[t._v("develop")])]),t._v(" "),s("h3",{attrs:{id:"临时分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#临时分支","aria-hidden":"true"}},[t._v("#")]),t._v(" 临时分支")]),t._v(" "),s("ul",[s("li",[t._v("issue/{issue-id}")]),t._v(" "),s("li",[t._v("feature/{issue-id}")]),t._v(" "),s("li",[t._v("bugfix/{issue-id}")]),t._v(" "),s("li",[t._v("hotfix/{issue-id}")]),t._v(" "),s("li",[t._v("release/{milestone-title}")])]),t._v(" "),s("h3",{attrs:{id:"开发规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发规范","aria-hidden":"true"}},[t._v("#")]),t._v(" 开发规范")]),t._v(" "),s("ol",[s("li",[t._v("认领自己准备要做的 issue 假设 issue 编号是 #99")]),t._v(" "),s("li",[t._v("更新自己本地 develop 分支代码: "),s("code",[t._v("git pull")])]),t._v(" "),s("li",[t._v("创建一个名字叫 issue/99 的分支: "),s("code",[t._v("git checkout -b issue/99 develop")])]),t._v(" "),s("li",[t._v("开始功能开发，每一个 commit 都要带上自己的 issue id，如 "),s("code",[t._v("git commit -m '#99 实现了非常牛拜的功能点'")])]),t._v(" "),s("li",[t._v("提交自己的分支到 "),s("a",{attrs:{href:"https://git.huitong-tech.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("代码仓库"),s("OutboundLink")],1),t._v(" 上，"),s("code",[t._v("git push -u origin issue/99")])]),t._v(" "),s("li",[t._v("如果自己的分支开发完毕，本地测试过了，向 milestone 对应的分支发起 pull request(PR), 假设 milestone 名字是 20181028, base 分支则是 releases/20181028")]),t._v(" "),s("li",[t._v("等 milestone 中所有的 issue 的开发都完成了(开发不完则移动到下一个 milestone)，则都合并到 releases/20181028, 这样 releases/20181028 这个分支就是最新开发的所有功能的代码，master 是上一个最新的，后面我们流程规范了，还会对 releases/20181028 分支进行各种测试，这个分支没有问题了")]),t._v(" "),s("li",[t._v("将 releases/20181028 分支与 master 分支合并, 打个 tag，名字是 20181028, "),s("code",[t._v("git tag 20181028")]),t._v("，进行发布")]),t._v(" "),s("li",[t._v("进入下一个迭代和功能开发")])]),t._v(" "),s("h2",{attrs:{id:"标签说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标签说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 标签说明")]),t._v(" "),s("p",[t._v("使用 Label 和 Issue 进行项目管理")]),t._v(" "),s("h3",{attrs:{id:"标签分组和颜色设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标签分组和颜色设置","aria-hidden":"true"}},[t._v("#")]),t._v(" 标签分组和颜色设置")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("分组")]),t._v(" "),s("th",[t._v("前缀")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Label")]),t._v(" "),s("th",[t._v("背景颜色 RGB 值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("项目排期")]),t._v(" "),s("td",[t._v("项目:")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("已确认，已排期，延后，开发中(WIP)，测试中，已上线，待讨论")]),t._v(" "),s("td",[t._v("c5def5")])]),t._v(" "),s("tr",[s("td",[t._v("功能分类")]),t._v(" "),s("td",[t._v("分类:")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("BUG，新功能，功能增强，功能完善，文档修改")]),t._v(" "),s("td",[t._v("d4c5f9")])]),t._v(" "),s("tr",[s("td",[t._v("优先级")]),t._v(" "),s("td",[t._v("优先级:")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("P0(紧急)：当日处理，P1(高)：2日内处理，P2(中)：一周内处理，P3(低)：一月内处理")]),t._v(" "),s("td",[t._v("e99695")])])])])])},[],!1,null,null,null);e.default=i.exports}}]);
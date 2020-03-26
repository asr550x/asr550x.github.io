# Git ant-vue开发规范

- #### 模板规范
- 表格采用左对齐，（除特殊情况）
- 列表页日期表头需要排序，在columns中添加sorter:true即可
- 对话框宽度默认600px
- 通知默认采用右上角通知提醒
- 删除，发布，激活等，默认采用弹出式提醒提交框
- 状态：
  - 未运行：#d9d9d9
  - 运行中：如下
  - 启动中：#faad14
  - 关闭中：#f5222d
```bash
  运行中颜色需要修改成绿色
  <div class="status">
    <a-badge status="processing" />
  </div>
  .status >>> .ant-badge-status-processing{
    background-color: #52c41a !important;
  }
  .status >>> .ant-badge-status-processing::after{
    border: 1px solid #52c41a !important
  }
``` 
  - 已发布：如上
  - 未发布：#d9d9d9
  - 开发中：#faad14
- 删除函数统一写进公共函数中
```bash
    deleteFunction (val, fn, fn1, arg='') {
      const $this = this
      this.$confirm({
        title: '确认删除',
        okText: '确认',
        okType: 'danger',
        buttonProps: {
          props: { disabled: true }
        },
        cancelText: '取消',
        onOk () {
          console.log('OK')
          let params = $this.selectedRowKeys.length > 0 ? $this.selectedRowKeys : val.realId ? [val.realId] : [val.id]
          if (fn) {
            fn(params).then(res => {
              $this.$notification.success({
                message: '删除成功'
              })
              $this.clickUser = true
              $this.selectedRowKeys = []
              fn1(arg ? arg : null)
            }).catch(err => {
              $this.$notification['error']({
                message: '错误',
                description: ((err.response || {}).data || {}).message || '请求出现错误，请稍后再试',
                duration: 4
              })
            })
          }
        },
        onCancel () {
          console.log('Cancel')
        }
      })
    }

    调用方法：  deleteFunction(删除文件id, 删除接口, 删除成功后回调用函数, 回调函数参数(可以为空))
    该方法只适用于列表删除
```
- 按钮文字默认无间隙，实现方法：
```bash
  src/App.vue
  <a-config-provider :autoInsertSpaceInButton="false">
    <div id="app">
      <router-view/>
    </div>
  </a-config-provider>
```
- 批量删除按钮默认为红色
```bash
 <a-button type="danger"></a-button>
```
- 有多个按钮时，只选择一个高亮，一般放在最右边
``` bash
  <a-button></a-button>
  <a-button style="margin-left:8px"></a-button> 
  <a-button type="primiry" style="margin-left:8px"></a-button>
```
- 同个元素之间距离空隙为8px，不同元素之间为16px
- 输入框默认添加placeholder提示
- 日期选择框和单选框在弹出框时，会出现偏移bug，解决办法：
```bash
  getPopupContainer (trigger) {
      return trigger.parentNode
  },
  getCalendarContainer (trigger) {
      return trigger.parentNode
  }
  <a-select :getPopupContainer="getPopupContainer">
  </a-select>
  <a-date-picker :getCalendarContainer="getCalendarContainer">
  </a-date-picker>
```
- 对话框在提交成功或失败后，都默认关闭对话框,且清空数据
- 对话框中默认一行一个输入框，当内容过多时，可调成一行显示两个输入框
- 对话框只要有关闭行为，默认清空输入内容
- 列表页，详情页都默认添加loading
- mounted时需要用到参数的，默认都将参数写进url（通过修改路由的方式），例：
```bash
  {
    path: '/describe/:id',
    name: 'Describe',
    component: Describe
  }
  组件中获取id方式： this.$route.params.id
```
- 同一父菜单下的子菜单若不显示在菜单列表中，父菜单默认保持点击状态，设置方法：
```bash
  文件路径： src/components/Menu/menu.js， updateMenu函数
```
- ant-design-vue 输入框双向绑定数据时，只有数据为undefined时，placeholder才会显示
- 树形控件在选择时，应该把‘半选择的父级’（子项没有全部被选中）也加入到选择数组中
```bash
  <a-tree
    checkable
    :treeData="menuTree"
    v-model="menuIds"
    @check="menuCheck"
  />
  data() {
    unEditedMenuIds: [],
    menuIds: [],
    halfCheckedMenuIds: [],
    editedMenuIds: []
  },
  methods: {
    menuCheck (val, event) {
        this.halfCheckedMenuIds = event.halfCheckedKeys
    }
    //从服务器中拉取menuIds（选中的项）数据时，要去掉‘半选择的父级‘（子项没有全部被选中）
      获取menuTree数据().then(res => {
        //menuTree数据
        this.menuTree = res.data
        获取已选中项数据(id).then(res => {
            //menuIds数据（包含选中和半选中）
            this.unEditedMenuIds = res.data.menuIds
            //去除半选中项目
            this.editedMenuIds = []
            this.getAllChildrenMenu(this.menuTree)
            //必须把id改为字符串
            this.menuIds = this.editedMenuIds.map(item => item.toString())
        }).catch(err => {
          this.$notification['error']({
            message: '错误',
            description: ((err.response || {}).data || {}).message || '请求出现错误，请稍后再试',
            duration: 4
          })
        })
      }).catch(err => {
        this.loadingTabs = false
        this.$notification['error']({
          message: '错误',
          description: ((err.response || {}).data || {}).message || '请求出现错误，请稍后再试',
          duration: 4
      })
    }),
    getAllChildrenMenu (item) {
      item.forEach(item => {
        if (item.children) {
          this.getAllChildrenMenu(item.children)
        } else {
          if (this.unEditedMenuIds.includes(parseInt(item.key))) {
            this.editedMenuIds.push(item.key)
          }
        }
      })
    }
  }
  //在提交数据时，应把menuIds和halfCheckedMenuIds合并后，再提交给服务器
```
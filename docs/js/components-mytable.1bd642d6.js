(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{194:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("my-title",{attrs:{text:"MyTable组件",desc:"快速生成数据列表的组件，封装了基础的curd、搜索过滤和分页效果操作。"}}),e._v(" "),a("div",{staticClass:"content-block"},[e._m(0),e._v(" "),a("my-data-table",{attrs:{data:e.propsData}})],1),e._v(" "),a("div",{staticClass:"content-block"},[e._m(1),e._v(" "),a("my-data-table",{attrs:{data:e.eventsData,mode:"events"}})],1),e._v(" "),a("div",{staticClass:"content-block"},[e._m(2),e._v(" "),a("my-data-table",{attrs:{data:e.slotsData,mode:"events"}})],1)],1)};n._withStripped=!0;var o={name:"MyTablePage",components:{},props:{},data:function(){return{propsData:[{name:"url",desc:"请求列表数据的远程地址",type:"String",default:"",options:"",require:"否"},{name:"border",desc:"表格的四周是否有边框",type:"Boolean",default:"false",options:"",require:"否"},{name:"searchable",desc:"是否启用搜索功能",type:"Boolean",default:"true",options:"",require:"否"},{name:"filter",desc:"列表查询过滤条件",type:"Object",default:"{}",options:"",require:"否"},{name:"params",desc:"列表地址额外请求参数",type:"Object",default:"{}",options:"",require:"否"},{name:"data",desc:"列表数据",type:"Array",default:"[]",options:"",require:"否"},{name:"unique",desc:"行记录主键id",type:"String",default:"id",options:"",require:"否"},{name:"getUrl",desc:"列表加载路径。如果提供了该值，在列表初始化请求、刷新列表、跳转分页和搜索列表时会优先使用该地址进行请求，而不是url",type:"String",default:"",options:"",require:"否"},{name:"addUrl",desc:"新增记录接口地址。如果提供了该值，在添加数据时会优先使用该地址进行请求，而不是url",type:"String",default:"",options:"",require:"否"},{name:"checkUrl",desc:"查找记录接口地址。如果提供了该值，在查看数据详情时会优先使用该地址进行请求，而不是url",type:"String",default:"",options:"",require:"否"},{name:"deleteUrl",desc:"删除记录接口地址。如果提供了该值，在删除数据时会优先使用该地址进行请求，而不是url",type:"String",default:"",options:"",require:"否"},{name:"useQueryParams",desc:"使用query形式传参",type:"String",default:"",options:"",require:"否"},{name:"orderby",desc:"默认排序字段",type:"String",default:"",options:"",require:"否"},{name:"ordertype",desc:"排序方式",type:"String",default:"",options:"asc,desc",require:"否"},{name:"toolbar",desc:"是否显示工具栏",type:"Boolean",default:"true",options:"",require:"否"},{name:"orderNum",desc:"是否显示序号",type:"Boolean",default:"true",options:"",require:"否"},{name:"checkbox",desc:"是否显示复选框",type:"Boolean",default:"true",options:"",require:"否"},{name:"readonly",desc:"是否只读",type:"Boolean",default:"false",options:"",require:"否"},{name:"beforeSave",desc:"提交数据前触发的事件",type:"Function",default:"null",options:"",require:"否"},{name:"addBtn",desc:"是否显示默认的新增按钮",type:"Boolean",default:"true",options:"",require:"否"},{name:"batchDeleteBtn",desc:"是否显示默认的批量删除按钮",type:"Boolean",default:"true",options:"",require:"否"},{name:"refreshBtn",desc:"是否显示默认的刷新按钮",type:"Boolean",default:"true",options:"",require:"否"},{name:"deleteBtn",desc:"是否显示默认的行删除按钮",type:"Boolean",default:"true",options:"",require:"否"},{name:"editBtn",desc:"是否显示默认的行编辑按钮",type:"Boolean",default:"true",options:"",require:"否"},{name:"checkBtn",desc:"是否显示默认的行查看按钮",type:"Boolean",default:"true",options:"",require:"否"},{name:"optColumn",desc:"是否显示操作栏",type:"Boolean",default:"true",options:"",require:"否"},{name:"expandColumn",desc:"是否显示折叠",type:"Boolean",default:"false",options:"",require:"否"},{name:"expandColumnLabel",desc:"需要折叠的列名称",type:"String",default:"",options:"",require:"否"},{name:"expandColumnWidth",desc:"折叠列的宽度",type:"String",default:"",options:"",require:"否"},{name:"pagination",desc:"是否显示页码",type:"Boolean",default:"true",options:"",require:"否"},{name:"searchLabelWidth",desc:"查询栏表单标题宽度",type:"String",default:"80px",options:"",require:"否"},{name:"optColWidth",desc:"行操作列宽度",type:"String",default:"120px",options:"",require:"否"},{name:"page",desc:"页码",type:"Number",default:"1",options:"",require:"否"},{name:"pageSize",desc:"一页显示条数",type:"Number",default:"10",options:"",require:"否"},{name:"showDialogTitle",desc:"是否显示弹框标题",type:"Boolean",default:"true",options:"",require:"否"},{name:"dialogTitle",desc:"默认新增/编辑弹框标题",type:"String",default:"标题",options:"",require:"否"},{name:"dialogClose",desc:"是否显示弹窗右上角关闭按钮",type:"Boolean",default:"true",options:"",require:"否"},{name:"dialogTop",desc:"默认新增/编辑弹框离顶部的距离",type:"String",default:"15vh",options:"",require:"否"},{name:"dialogWidth",desc:"默认新增/编辑弹框宽度",type:"String",default:"50%",options:"",require:"否"},{name:"dialogClass",desc:"弹框class属性",type:"String",default:"",options:"",require:"否"},{name:"dialogData",desc:"默认新增/编辑弹框form绑定的数据",type:"Object",default:"{}",options:"",require:"否"},{name:"dialogLabelWidth",desc:"默认新增/编辑弹框form表单标题宽度",type:"String",default:"100px",options:"",require:"否"},{name:"dialogFormLabelPosition",desc:"默认新增/编辑弹框form表单标题排列位置",type:"String",default:"left",options:"",require:"否"},{name:"dialogFormRules",desc:"默认新增/编辑弹框form验证规则",type:"Object",default:"{}",options:"",require:"否"},{name:"dialogBtn",desc:"是否需要默认弹框按钮",type:"Boolean",default:"true",options:"",require:"否"},{name:"dialogAppendToBody",desc:"弹窗是否内嵌到body",type:"Boolean",default:"false",options:"",require:"否"},{name:"closeToClearAll",desc:"关闭弹框时清空绑定的数据对象",type:"Boolean",default:"false",options:"",require:"否"},{name:"fixedLeft",desc:"是否冻结左侧",type:"Boolean",default:"false",options:"",require:"否"},{name:"fixedRight",desc:"是否冻结右侧",type:"Boolean",default:"false",options:"",require:"否"},{name:"batchDeleteOptionKey",desc:"批量删除时附加返回的key",type:"String、Array",default:"",options:"",require:"否"},{name:"showDialogTitlePrefix",desc:"显示/隐藏弹窗标题默认前缀",type:"Boolean",default:"true",options:"",require:"否"},{name:"dialogSaveBtnText",desc:"弹窗底部保存按钮显示文字",type:"String",default:"保存",options:"",require:"否"},{name:"dialogCancelBtnText",desc:"弹窗底部取消按钮显示文字",type:"String",default:"取消",options:"",require:"否"}],eventsData:[{name:"onLoaded",desc:"列表数据加载完毕触发的事件"},{name:"onSortChange",desc:"改变排序方式时触发的事件"},{name:"onRefresh",desc:"刷新列表时触发的事件"},{name:"onBeforeSave",desc:"提交数据前触发的事件"},{name:"onEdit",desc:"编辑数据成功时触发的事件"},{name:"onEdit",desc:"编辑数据成功时触发的事件"},{name:"onAdd",desc:"添加数据成功时触发的事件"},{name:"onChangeList",desc:"添加或编辑后更新列表时触发的事件"},{name:"onSave",desc:"提交数据成功时触发的事件"},{name:"onCheck",desc:"获取数据详情时触发的事件"},{name:"onBatchDelete",desc:"批量删除数据成功时触发的事件"},{name:"onDelete",desc:"删除单条数据成功时触发的事件"},{name:"onSizeChange",desc:"每页数据条数改变时触发的事件"},{name:"onPageChange",desc:"页码发生改变时触发的事件"},{name:"onSearch",desc:"搜索过滤数据时触发的事件"},{name:"onDialogClose",desc:"弹窗关闭时触发的事件"},{name:"onDialogClosed",desc:"弹窗关闭后触发的事件"},{name:"onDialogOpen",desc:"弹窗打开时触发的事件"},{name:"onDialogOpened",desc:"弹窗打开后触发的事件"}],slotsData:[{name:"toolbar",desc:"自定义工具栏的内容"},{name:"pre_toolbar",desc:"按钮栏的前置内容"},{name:"mid_toolbar",desc:"按钮栏的中间内容"},{name:"sub_toolbar",desc:"按钮栏的尾部内容"},{name:"toolbar_tail",desc:"工具栏尾部的自定义内容"},{name:"pre_searchbar",desc:"搜索栏的前置内容"},{name:"sub_searchbar",desc:"搜索栏的中间内容，位于搜索输入控件和搜索按钮之间"},{name:"search_bar",desc:"自定义搜索栏的内容"},{name:"expandColumn",desc:"折叠栏的内容"},{name:"column",desc:"列表的自定义栏目"},{name:"optBtn",desc:"自定义行按钮，位于增删改查按钮之后"},{name:"dialog",desc:"弹窗的自定义内容"},{name:"dialogBtnsBefore",desc:"弹窗底部按钮栏的前置内容"},{name:"dialogBtnsBetween",desc:"弹窗底部按钮栏的中间内容"},{name:"dialogBtnsAfter",desc:"弹窗底部按钮栏的尾部内容"}]}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},s=a(9),i=Object(s.a)(o,n,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("span",[this._v("props")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("span",[this._v("events")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("span",[this._v("slots")])])}],!1,null,"42d34500",null);i.options.__file="src/pages/components/my_table.vue";t.default=i.exports},195:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("my-title",{attrs:{text:"MyTableRowBtn组件",desc:"自定义按钮组件，可配置显示确认提示窗，不限于MyTable组件内使用。"}}),e._v(" "),a("div",{staticClass:"content-block"},[e._m(0),e._v(" "),a("my-data-table",{attrs:{data:e.propsData}})],1),e._v(" "),a("div",{staticClass:"content-block"},[e._m(1),e._v(" "),a("my-data-table",{attrs:{data:e.eventsData,mode:"events"}})],1)],1)};n._withStripped=!0;var o={name:"MyTableRowBtn",components:{},props:{},data:function(){return{propsData:[{name:"size",desc:"按钮尺寸",type:"String",default:"mini",options:"medium,small,mini",require:"否"},{name:"type",desc:"按钮类型，与element-ui保持一致",type:"String",default:"primary",options:"primary,success,warning,danger,info,text",require:"否"},{name:"icon",desc:"按钮的icon",type:"String",default:"",options:"",require:"否"},{name:"text",desc:"按钮显示的文字",type:"String",default:"",options:"",require:"否"},{name:"isRound",desc:"是否圆角按钮",type:"Boolean",default:"false",options:"",require:"否"},{name:"isCircle",desc:"是否圆形按钮",type:"Boolean",default:"false",options:"",require:"否"},{name:"isPlain",desc:"是否朴素按钮",type:"Boolean",default:"false",options:"",require:"否"},{name:"disabled",desc:"是否禁用",type:"Boolean",default:"false",options:"",require:"否"},{name:"showConfirm",desc:"是否需要确认弹窗",type:"Boolean",default:"false",options:"",require:"否"},{name:"confirmTips",desc:"确认弹窗显示内容",type:"String",default:"确定删除该内容吗？",options:"",require:"否"},{name:"confirmPlacement",desc:"确认弹窗的显示位置",type:"String",default:"top",options:"",require:"否"}],eventsData:[{name:"handleClick",desc:"普通按钮点击事件"},{name:"clickConfirm",desc:"点击确认弹窗的确认按钮"}]}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},s=a(9),i=Object(s.a)(o,n,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("span",[this._v("props")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("span",[this._v("events")])])}],!1,null,"586f2ab8",null);i.options.__file="src/pages/components/my_table_row_btn.vue";t.default=i.exports},196:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("my-title",{attrs:{text:"MyPagination组件",desc:"自定义分页组件，常用与MyTable组件配合实现分页列表。"}}),e._v(" "),a("div",{staticClass:"content-block"},[e._m(0),e._v(" "),a("my-data-table",{attrs:{data:e.propsData}})],1),e._v(" "),a("div",{staticClass:"content-block"},[e._m(1),e._v(" "),a("my-data-table",{attrs:{data:e.eventsData,mode:"events"}})],1)],1)};n._withStripped=!0;var o={name:"MyPagination",components:{},props:{},data:function(){return{propsData:[{name:"total",desc:"数据总条数",type:"Number",default:"",options:"",require:"是"},{name:"size",desc:"每页数据量",type:"Number",default:"10",options:"",require:"否"}],eventsData:[{name:"sizeChange",desc:"每页数据量发生改变时触发，带一个参数size（最新的每页数据量值）"},{name:"currentChange",desc:"当前页码发生改变时触发，带一个参数page（最新的页码值）"}]}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},s=a(9),i=Object(s.a)(o,n,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("span",[this._v("props")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("span",[this._v("events")])])}],!1,null,"297a4758",null);i.options.__file="src/pages/components/my_pagination.vue";t.default=i.exports}}]);
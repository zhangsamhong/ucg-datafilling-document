(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{199:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("my-title",{attrs:{text:"MyContentGrid组件",desc:"内容输入/展示表格组件。"}}),e._v(" "),a("div",{staticClass:"content-block"},[e._m(0),e._v(" "),a("my-data-table",{attrs:{data:e.propsData}})],1),e._v(" "),a("div",{staticClass:"content-block"},[e._m(1),e._v(" "),a("my-data-table",{attrs:{data:e.eventsData,mode:"events"}})],1)],1)};n._withStripped=!0;var s={name:"MyContentGrid",components:{},props:{},data:function(){return{propsData:[{name:"topDis",desc:"顶部距离",type:"Number",default:"0",options:"",require:"否"},{name:"title",desc:"标题文字",type:"String",default:"",options:"",require:"否"},{name:"showToolbar",desc:"是否展示工具栏",type:"Boolean",default:"true",options:"",require:"否"},{name:"disabled",desc:"是否禁用表单",type:"Boolean",default:"false",options:"",require:"否"},{name:"formData",desc:"表单数据模型",type:"Object",default:"{}",options:"",require:"否"},{name:"formRules",desc:"表单验证规则",type:"Object",default:"{}",options:"",require:"否"}],eventsData:[{name:"handleAdd",desc:"点击顶部按钮栏添加按钮时触发的事件"},{name:"handleDel",desc:"点击顶部按钮栏批量删除按钮时触发的事件"}]}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},o=a(9),i=Object(o.a)(s,n,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("span",[this._v("props")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("span",[this._v("events")])])}],!1,null,"0e20e88a",null);i.options.__file="src/pages/components/my_content_grid.vue";t.default=i.exports},200:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("my-title",{attrs:{text:"MyContentGridRow组件",desc:"MyContentGrid组件的项目组件，嵌套到MyContentGrid组件内部使用。"}}),e._v(" "),a("div",{staticClass:"content-block"},[e._m(0),e._v(" "),a("my-data-table",{attrs:{data:e.propsData}})],1),e._v(" "),a("div",{staticClass:"content-block"},[e._m(1),e._v(" "),a("my-data-table",{attrs:{data:e.eventsData,mode:"events"}})],1),e._v(" "),a("div",{staticClass:"content-block"},[e._m(2),e._v(" "),a("my-data-table",{attrs:{data:e.slotsData,mode:"events"}})],1)],1)};n._withStripped=!0;var s={name:"MyContentGridRow",components:{},props:{},data:function(){return{propsData:[{name:"v-model",desc:"表单项内部输入控件绑定的值",type:"Any",default:"",options:"",require:"是"},{name:"prop",desc:"FormItem组件的prop",type:"String",default:"",options:"",require:"否"},{name:"labelWidth",desc:"label的宽度，最大值不能超过24，最小值不能低于0",type:"Number",default:"3",options:"",require:"否"},{name:"label",desc:"label的内容",type:"String",default:"",options:"",require:"否"},{name:"required",desc:"是否必填字段，设置为true时label会显示红色的“*”",type:"Boolean",default:"false",options:"",require:"否"},{name:"defaultInputType",desc:"默认的输入框类型",type:"String",default:"text",options:"text,number,textarea,checkbox,radio,select,date,datetime",require:"否"},{name:"inputPlaceholder",desc:"输入控件的placeholder",type:"String",default:"",options:"",require:"否"},{name:"optionData",desc:"选项数据，当defaultInputType为checkbox、radio或select时有效",type:"Array",default:"[]",options:"",require:"否"},{name:"multiple",desc:"是否多选",type:"Boolean",default:"false",options:"",require:"否"},{name:"dateFormat",desc:"时间格式，当defaultInputType为date或datetime时有效",type:"String",default:"yyyy年M月d日",options:"",require:"否"},{name:"dateValueFormat",desc:"时间值的格式，当defaultInputType为date或datetime时有效",type:"String",default:"yyyy-MM-dd",options:"",require:"否"},{name:"columnCount",desc:"表格每一行的列数目",type:"Number",default:"1",options:"1,2,3,4",require:"否"},{name:"isHidden",desc:"是否隐藏",type:"Boolean",default:"false",options:"",require:"否"},{name:"checkItemStyle2",desc:"checkbox和radio特别（互换）样式，当defaultInputType为checkbox或radio时有效",type:"Boolean",default:"false",options:"",require:"否"}],eventsData:[{name:"input",desc:"输入控件输入内容时触发的事件"}],slotsData:[{name:"default",desc:"自定义内容，当需要使用其他输入控件或不需要输入控件时可提供自定义内容"}]}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},o=a(9),i=Object(o.a)(s,n,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("span",[this._v("props")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("span",[this._v("events")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("span",[this._v("slots")])])}],!1,null,"5f44f9b6",null);i.options.__file="src/pages/components/my_content_grid_row.vue";t.default=i.exports},201:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("my-title",{attrs:{text:"MyToolbar组件",desc:"顶部栏组件，默认展示添加和批量删除按钮，可自定义展示内容。"}}),e._v(" "),a("div",{staticClass:"content-block"},[e._m(0),e._v(" "),a("my-data-table",{attrs:{data:e.propsData}})],1),e._v(" "),a("div",{staticClass:"content-block"},[e._m(1),e._v(" "),a("my-data-table",{attrs:{data:e.eventsData,mode:"events"}})],1),e._v(" "),a("div",{staticClass:"content-block"},[e._m(2),e._v(" "),a("my-data-table",{attrs:{data:e.slotsData,mode:"events"}})],1)],1)};n._withStripped=!0;var s={name:"MyToolbar",components:{},props:{},data:function(){return{propsData:[{name:"title",desc:"标题文字，如果提供该值，则不会显示按钮栏的内容",type:"String",default:"",options:"",require:"否"},{name:"addBtn",desc:"是否显示添加按钮",type:"Boolean",default:"true",options:"",require:"否"},{name:"delBtn",desc:"是否显示删除按钮",type:"Boolean",default:"true",options:"",require:"否"},{name:"cancelBtn",desc:"是否显示取消按钮",type:"Boolean",default:"false",options:"",require:"否"},{name:"border",desc:"是否有边框",type:"Boolean",default:"false",options:"",require:"否"}],eventsData:[{name:"handleAdd",desc:"点击添加按钮时触发的事件"},{name:"handleDel",desc:"点击批量删除按钮时触发的事件"},{name:"handleCancel",desc:"点击取消按钮时触发的事件"}],slotsData:[{name:"customToolbar",desc:"自定义Toolbar的内容"}]}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},o=a(9),i=Object(o.a)(s,n,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("span",[this._v("props")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("span",[this._v("events")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("span",[this._v("slots")])])}],!1,null,"2deef02d",null);i.options.__file="src/pages/components/my_toolbar.vue";t.default=i.exports}}]);
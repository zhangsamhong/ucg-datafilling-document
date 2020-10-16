(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{187:function(t,e,s){},188:function(t,e,s){"use strict";var a=s(187);s.n(a).a},189:function(t,e,s){t.exports=s.p+"images/frame_setting_attention_1.2923c8c9.png"},190:function(t,e,s){t.exports=s.p+"images/frame_setting_attention_3.f0cbbc90.png"},191:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("my-title",{attrs:{text:"目录结构",desc:"项目根目录结构情况。"}}),t._v(" "),s("div",{staticClass:"tree-box show-area"},[s("el-tree",{attrs:{data:t.dirList,props:t.propName},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.node,n=e.data;return s("span",{staticClass:"custom-tree-node"},[s("span",[t._v(t._s(a.label))]),t._v(" "),s("span",{staticClass:"desc"},[t._v("\n                    "+t._s(n.desc||"")+"\n                ")])])}}])})],1)],1)};a._withStripped=!0;var n={name:"DirectoryStructure1",components:{},props:{},data:function(){return{dirList:[{label:"build",desc:"// webpack打包的配置文件",children:[{label:"webpack.config.js",desc:"// 基础公用打包配置"},{label:"webpack.dev.js",desc:"// 开发环境打包配置，会打开dev-server"},{label:"webpack.prod.js",desc:"// 生产环境打包配置"},{label:"webpack.test.js",desc:"// 测试环境打包配置，跟dev的配置接近，但不打开dev-server"},{label:"webpack.utils.js",desc:"// 公用的loader和plugin定义配置，方便复用"}]},{label:"dist",desc:"// 打包后生成文件的所在目录"},{label:"src",desc:"// 项目核心代码所在目录",children:[{label:"components",desc:"// 项目公用组件目录"},{label:"entries",desc:"// 打包入口文件目录"},{label:"modules",desc:"// 公用js模块和类库目录"},{label:"pages",desc:"// vue页面文件目录"},{label:"routes",desc:"// 路由配置目录"},{label:"styles",desc:"// 样式文件目录"},{label:"templates",desc:"// 打包生成html文件模板目录"},{label:"app.vue",desc:"// 项目根组件"}]},{label:".babelrc",desc:"// babel配置文件"},{label:".eslintignore",desc:"// eslint忽略配置文件"},{label:".eslintrc.js",desc:"// eslint检查规则配置文件"},{label:".gitignore",desc:"// git仓库忽略配置文件"},{label:"package.json"},{label:"postcss.config.js",desc:"// postcss配置文件，主要用到autoprefixer插件"},{label:"web-config.js",desc:"// 网络请求配置文件，定义不同环境的请求配置"}],propName:{label:"label",children:"children"}}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},c=(s(188),s(9)),i=Object(c.a)(n,a,[],!1,null,"945565aa",null);i.options.__file="src/pages/frame/directory_structure.vue";e.default=i.exports},192:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("my-title",{attrs:{text:"依赖安装",desc:"项目开发需要使用到的包和插件的安装。"}}),t._v(" "),s("div",{staticClass:"content-block"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("my-code",{attrs:{"code-str":"// 在项目根目录下执行命令\nnpm i\n或者\ncnpm i"}})],1),t._v(" "),t._m(2),t._v(" "),s("div",{staticClass:"content-block"},[t._m(3),t._v(" "),t._m(4),t._v(" "),s("my-code",{attrs:{"code-str":"// 打开devServer运行项目并进行开发\nnpm run devServer\n\n// 以开发环境的配置对项目进行打包，会生成sourcemap，方便在开发环境调试问题\nnpm run dev\n\n// 以生产环境的配置对项目进行打包，会生成sourcemap，方便在准生产环境调试问题\nnpm run test\n\n// 以生产环境的配置进行打包，不会生成sourcemap，最终放到生产环境时的打包命令\nnpm run build"}})],1)],1)};a._withStripped=!0;var n={name:"RelationInstallation",components:{},props:{},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},c=s(9),i=Object(c.a)(n,a,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("span",[this._v("安装npm包")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"desc"},[e("span",[this._v("推荐使用npm进行安装，不过，也可以使用cnpm进行安装")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content-block"},[s("div",{staticClass:"title"},[s("span",[t._v("安装ESlint插件")])]),t._v(" "),s("div",{staticClass:"desc"},[s("span",[t._v("项目采用ESlint对代码进行检查和规范。如果想全局安装ESlint，请自行手动安装全局的npm包。")]),t._v(" "),s("br"),t._v(" "),s("span",[t._v("为了提高开发效率和养成良好的编码习惯，建议在IDE安装相应的ESlint插件，插件一般能提供友好的错误提示、快速批量修复的功能，非常方便。")]),t._v(" "),s("br"),t._v(" "),s("span",[t._v("VScode建议安装"),s("a",{staticClass:"important",attrs:{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",target:"_blank"}},[t._v("ESlint")]),t._v("插件和"),s("a",{staticClass:"important",attrs:{href:"https://marketplace.visualstudio.com/items?itemName=octref.vetur",target:"_blank"}},[t._v("Vetur")]),t._v("插件（帮助检查vue文件代码），如果是使用其他IDE进行开发，请自行查找相应的插件进行安装。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("span",[this._v("运行或打包项目")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"desc"},[e("span",[this._v("依赖安装完毕后，可以运行以下4条命令进行开发或打包：")])])}],!1,null,"2d8cc027",null);i.options.__file="src/pages/frame/relation_installation.vue";e.default=i.exports},193:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("my-title",{attrs:{text:"打包配置",desc:"webpack的打包配置文件统一放在根目录的build文件夹中，根据环境不同，打包的配置分别有4种，分别是："}}),t._v(" "),a("my-code",{attrs:{"code-str":"// 公用的基础打包配置\nwebpack.config.js\n\n// 开发时使用到的打包配置\nwebpack.dev.js\n\n// 测试时使用到的打包配置\nwebpack.test.js\n\n// 部署生产环境时的打包配置\nwebpack.prod.js\n\n// 抽离的loader和plugin配置，方便复用\nwebpack.utils.js"}}),t._v(" "),a("div",{staticClass:"content-block"},[t._m(0),t._v(" "),a("div",{staticClass:"desc"},[a("span",[t._v("需要注意的地方有以下几点：")]),t._v(" "),a("br"),t._v(" "),t._m(1),t._v(" "),a("br"),t._v(" "),a("img",{staticClass:"show-img",staticStyle:{width:"60%"},attrs:{src:s(189),alt:"目录别名配置"}}),t._v(" "),a("br"),t._v(" "),a("my-code",{attrs:{"code-str":"// import时直接使用别名\nimport Comp from '@components/Comp.vue';"}}),t._v(" "),a("br"),t._v(" "),t._m(2),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("span",[t._v("3. 路由配置时，注意分包的名称；默认每个页面组件都是通过import()按需引入，且每一个功能模块作为一个单独的分包；")]),t._v(" "),a("br"),t._v(" "),a("img",{staticClass:"show-img",staticStyle:{width:"100%"},attrs:{src:s(190),alt:"路由配置"}}),t._v(" "),a("br"),t._v(" "),a("span",[t._v("   具体开发可以根据需要分割成不同的包，尤其是功能模块的页面比较多的时候，适当拆分成几个小包可以提高加载速度。")]),t._v(" "),a("br"),t._v(" "),a("my-code",{attrs:{"code-str":"// 页面1、2拆分成一个包\nconst Page1 = () => import(/* webpackChunkName: 'bundle1' */ '@pages/page1.vue');\nconst Page2 = () => import(/* webpackChunkName: 'bundle1' */ '@pages/page2.vue');\n\n// 页面3、4拆分成另一个包\nconst Page3 = () => import(/* webpackChunkName: 'bundle2' */ '@pages/page3.vue');\nconst Page4 = () => import(/* webpackChunkName: 'bundle2' */ '@pages/page4.vue');"}})],1)])],1)};a._withStripped=!0;var n={name:"FrameSetting",components:{},props:{},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},c=s(9),i=Object(c.a)(n,a,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("span",[this._v("注意事项")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[this._v("1. 部分目录配置有别名，在"),e("span",{staticClass:"important"},[this._v("import")]),this._v("的时候可以直接使用；")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[this._v("2. "),e("span",{staticClass:"important"},[this._v("dev")]),this._v("和"),e("span",{staticClass:"important"},[this._v("test")]),this._v("命令会生成大量的sourcemap代码到对应css和js文件中，导致打包出来的文件体积巨大；而"),e("span",{staticClass:"important"},[this._v("build")]),this._v("命令则不会，打包到生产环境时请注意使用正确的打包命令；")])}],!1,null,"733998f0",null);i.options.__file="src/pages/frame/frame_setting.vue";e.default=i.exports}}]);
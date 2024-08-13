(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{371:function(s,t,n){"use strict";n.r(t);var a=n(8),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"一、源码基本结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、源码基本结构"}},[s._v("#")]),s._v(" 一、源码基本结构")]),s._v(" "),n("p",[n("code",[s._v("Vuex")]),s._v("源码结构如下：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("vuex\n  ├── helpers.js  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#辅助函数")]),s._v("\n  ├── index.esm.js "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#esm版本入口文件")]),s._v("\n  ├── index.js "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#cjs版本入口文件")]),s._v("\n  ├── mixin.js "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#install函数使用的mixin")]),s._v("\n  ├── module "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#模块相关")]),s._v("\n  │   ├── module-collection.js "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#模块集合")]),s._v("\n  │   └── module.js "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#模块")]),s._v("\n  ├── plugins "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#插件相关")]),s._v("\n  │   ├── devtool.js "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#devtool插件")]),s._v("\n  │   └── logger.js "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#内置的logger插件")]),s._v("\n  ├── store.js "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Store类")]),s._v("\n  └── util.js "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#工具函数")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("ul",[n("li",[n("code",[s._v("helpers.js")]),s._v("：辅助函数的定义，如"),n("code",[s._v("mapState")]),s._v("、"),n("code",[s._v("mapGetters")]),s._v("等辅助函数都是定义在该文件内")]),s._v(" "),n("li",[n("code",[s._v("index.esm.js")]),s._v("：esm版本入口文件，导出"),n("code",[s._v("Store")]),s._v("类和"),n("code",[s._v("install")]),s._v("函数等内容")]),s._v(" "),n("li",[n("code",[s._v("index.js")]),s._v("：cjs版本入口文件，导出"),n("code",[s._v("Store")]),s._v("类和"),n("code",[s._v("install")]),s._v("函数等内容")]),s._v(" "),n("li",[n("code",[s._v("mixin.js")]),s._v("："),n("code",[s._v("install")]),s._v("函数使用的mixin，执行"),n("code",[s._v("install")]),s._v("函数时，会给Vue实例混入mixin，其内容就定义在该文件")]),s._v(" "),n("li",[n("code",[s._v("module")]),s._v("：模块相关的内容，Vuex模块的安装、定义、操作等等都定义在该目录下\n"),n("ul",[n("li",[n("code",[s._v("module-collection.js")]),s._v("：模块集合，管理模块，管理模块的嵌套关系，管理模块的初始化，管理模块的注册，管理模块的更新等等")]),s._v(" "),n("li",[n("code",[s._v("module.js")]),s._v("：模块，管理单个模块的属性、方法、状态等等")])])]),s._v(" "),n("li",[n("code",[s._v("plugins")]),s._v("：插件相关的内容，Vuex内置提供了"),n("code",[s._v("devtool")]),s._v("插件和"),n("code",[s._v("logger")]),s._v("插件")]),s._v(" "),n("li",[n("code",[s._v("store.js")]),s._v("：Store类，Vuex的核心类，用于store的实例化、操作、访问等")]),s._v(" "),n("li",[n("code",[s._v("util.js")]),s._v("：工具函数，如参数规范化、断言等等")])]),s._v(" "),n("h2",{attrs:{id:"二、install函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、install函数"}},[s._v("#")]),s._v(" 二、install函数")]),s._v(" "),n("p",[s._v("在使用"),n("code",[s._v("Vuex")]),s._v("时，我们通常会在项目的入口文件里写如下的代码：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Vue "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Vuex "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vuex'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" store "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./store'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 一个使用Vuex.Store实例化的store实例")]),s._v("\n\nVue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Vuex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 安装Vuex插件")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用store")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("el")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#app'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  store\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("由使用代码可知，"),n("code",[s._v("Vuex")]),s._v("本身是一个Vue插件。而我们都知道，Vue插件要么是一个具有"),n("code",[s._v("install")]),s._v("方法的对象，要么是一个函数，"),n("code",[s._v("Vue.use")]),s._v("方法会调用该函数或者对象的"),n("code",[s._v("install")]),s._v("方法进行安装。我们打开"),n("code",[s._v("index.js")]),s._v("文件`，内容如下：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// index.js")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Store"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" install "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./store'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" mapState"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" mapMutations"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" mapGetters"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" mapActions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" createNamespacedHelpers "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./helpers'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  Store"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  install"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("version")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'__VERSION__'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  mapState"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  mapMutations"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  mapGetters"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  mapActions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  createNamespacedHelpers\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[s._v("入口文件非常简单，主要做了以下几件事：")]),s._v(" "),n("ol",[n("li",[s._v("导入"),n("code",[s._v("Store")]),s._v("类和"),n("code",[s._v("install")]),s._v("函数")]),s._v(" "),n("li",[s._v("导入辅助函数，如"),n("code",[s._v("mapState")]),s._v("、"),n("code",[s._v("mapGetters")]),s._v("等辅助函数")]),s._v(" "),n("li",[s._v("将"),n("code",[s._v("Store")]),s._v("类和"),n("code",[s._v("install")]),s._v("函数以及各种辅助函数导出，供外部使用")])]),s._v(" "),n("p",[s._v("执行"),n("code",[s._v("Vue.use(Vuex)")]),s._v("时会执行导出的"),n("code",[s._v("install")]),s._v("方法，其定义在"),n("code",[s._v("./store.js")]),s._v("文件内，接下来，我们来看看"),n("code",[s._v("install")]),s._v("函数的实现。")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// store.js")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" applyMixin "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./mixin'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 此处省略了其它import导入")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 存放用户安装插件时的Vue构造函数，与Vuex关联")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" Vue\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("_Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Vue "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" _Vue "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 已安装")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果不在生产环境中，输出错误信息到控制台")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_ENV")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'production'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[vuex] already installed. Vue.use(Vuex) should be called only once.'")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果已经安装，则直接返回，避免重复安装")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将传入的_Vue实例赋值给全局的Vue变量，完成Vuex和Vue的关联")]),s._v("\n  Vue "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" _Vue\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 应用混合（mixin）到Vue实例中，以集成Vuex的功能")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("applyMixin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("p",[s._v("代码解析：")]),s._v(" "),n("ul",[n("li",[s._v("首先全局定义了一个"),n("code",[s._v("Vue")]),s._v("变量，该变量由三个作用：\n"),n("ol",[n("li",[s._v("作为Vuex和Vue的关联，在"),n("code",[s._v("install")]),s._v("函数中，将传入的"),n("code",[s._v("_Vue")]),s._v("构造函数赋值给全局的"),n("code",[s._v("Vue")]),s._v("变量，完成Vuex和Vue的关联；")]),s._v(" "),n("li",[s._v("作为Vuex的安装状态，在"),n("code",[s._v("install")]),s._v("函数中，判断是否已经安装，如果已经安装，则直接返回，避免重复安装。")])])]),s._v(" "),n("li",[s._v("接着定义"),n("code",[s._v("install")]),s._v("函数并导出，在"),n("code",[s._v("install")]),s._v("函数中\n"),n("ul",[n("li",[s._v("如果"),n("code",[s._v("Vue")]),s._v("变量已经存在，并且传入的"),n("code",[s._v("_Vue")]),s._v("实例与"),n("code",[s._v("Vue")]),s._v("变量相等，则说明已经安装，则直接返回，避免重复安装。此处需要满足两个条件才会认为已经安装，换句话说，"),n("code",[s._v("Vuex")]),s._v("可以在项目中被安装多次，但是同一个Vue构造函数只能安装一次。")]),s._v(" "),n("li",[s._v("将构造函数Vue赋值给全局的"),n("code",[s._v("Vue")]),s._v("变量，完成Vuex和Vue的关联。")]),s._v(" "),n("li",[s._v("执行"),n("code",[s._v("applyMixin(Vue)")]),s._v("函数，将"),n("code",[s._v("Vuex")]),s._v("混入到Vue实例中，以集成Vuex的功能。")])])])]),s._v(" "),n("p",[n("code",[s._v("applyMixin")]),s._v("函数定义在"),n("code",[s._v("mixin.js")]),s._v("文件中，其内容如下：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" version "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("version"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("split")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取当前Vue的版本号")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// vue2.0以上则混入beforeCreate钩子函数")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("version "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mixin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("beforeCreate")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" vuexInit "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// vue1.x")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// override init and inject vuex init procedure")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// for 1.x backwards compatibility.")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 重写Vue.prototype._init方法")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" _init "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_init\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("_init")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("options "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("init "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("init\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("vuexInit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("concat")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("init"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" vuexInit\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("_init")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("call")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vuexInit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//...")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("p",[n("code",[s._v("applyMixin")]),s._v("会根据"),n("code",[s._v("Vuex")]),s._v("安装时传入的"),n("code",[s._v("Vue")]),s._v("构造函数获取当前使用的"),n("code",[s._v("Vue")]),s._v("的版本，并且根据不同的版本做不同的操作：在Vue2.0以上版本中，通过混入指向"),n("code",[s._v("vuexInit")]),s._v("函数的"),n("code",[s._v("beforeCreate")]),s._v("钩子函数，这样在Vue实例化时，所有的组件都会执行"),n("code",[s._v("vuexInit")]),s._v("函数，从而完成Vuex的安装；而在Vue2.0以下版本中，则是通过重写"),n("code",[s._v("Vue.prototype._init")]),s._v("方法的方式来实现Vuex的安装，其处理的步骤是首先保存原有的"),n("code",[s._v("_init")]),s._v("的方法，重写的方法中将"),n("code",[s._v("vuexInit")]),s._v("函数添加到"),n("code",[s._v("options.init")]),s._v("数组中，然后调用原有的"),n("code",[s._v("_init")]),s._v("方法，完成Vuex的安装。")]),s._v(" "),n("p",[s._v("接下来看看"),n("code",[s._v("vuexInit")]),s._v("函数的实现：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vuexInit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取当前实例的$options")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" options "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$options\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// store injection")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("store"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果有store属性，则注入")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$store "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("store "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'function'")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("store")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("store\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("parent "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("parent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$store"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$store "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("parent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$store\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[n("code",[s._v("vuexInit")]),s._v("函数做的事情就是将store实例注入到每一个vue实例中，其基本的思路是当前vue实例如果有store则直接注入，否则则从父级实例中获取store实例：")]),s._v(" "),n("ol",[n("li",[s._v("首先获取当前实例的store属性配置， "),n("code",[s._v("store = this.$options.store")])]),s._v(" "),n("li",[s._v("如果"),n("code",[s._v("store")]),s._v("存在:")])]),s._v(" "),n("ul",[n("li",[s._v("2.1 如果"),n("code",[s._v("store")]),s._v("是一个函数，则将"),n("code",[s._v("store()")]),s._v("的执行返回值赋值给"),n("code",[s._v("this.$store")])]),s._v(" "),n("li",[s._v("2.2 否则，将"),n("code",[s._v("this.$store = store")]),s._v("\n如果不存在，则从父级实例中获取"),n("code",[s._v("$store")]),s._v("属性，如果存在，则赋值给"),n("code",[s._v("this.$store")]),s._v("，这确保所有的子组件都能够读取到store实例")])]),s._v(" "),n("p",[s._v("之所以子组件可以通过父组件来获取"),n("code",[s._v("$store")]),s._v("是因为在Vue中，创建阶段是先父后子，而挂在阶段是先子后父，所以子组件在"),n("code",[s._v("beforeCreate")]),s._v("钩子中能够读取到父组件的"),n("code",[s._v("$store")]),s._v("属性。如下代码，如果打印出各个组件的生命周期，其结果为："),n("strong",[s._v("App beforeCreated->App created->App beforeMount->Outer beforeCreated->Outer created->Outer beforeMount->Inner beforeCreated->Inner created->Inner beforeMount->Inner mounted->Outer mounted->App mounted")])]),s._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("APP")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("Outer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("Inner")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("Outer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("App")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"三、总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、总结"}},[s._v("#")]),s._v(" 三、总结")]),s._v(" "),n("p",[s._v("Vuex对外导出了"),n("code",[s._v("Store")]),s._v("类、"),n("code",[s._v("install")]),s._v("函数，以及"),n("code",[s._v("mapState")]),s._v("、"),n("code",[s._v("mapMutations")]),s._v("等辅助辅助函数。以下列代码为例：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Vue "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Vuex "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vuex'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" store "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./store'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 一个使用Vuex.Store实例化的store实例")]),s._v("\n\nVue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Vuex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 安装Vuex插件")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用store")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("el")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#app'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  store\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("当执行以上代码时，Vue和Vuex做了以下几件事：")]),s._v(" "),n("ol",[n("li",[n("strong",[s._v("Vue")]),s._v("执行"),n("strong",[s._v("Vuex")]),s._v("提供的"),n("code",[s._v("install")]),s._v("函数，并将Vue构造函数传入，完成"),n("strong",[s._v("Vuex")]),s._v("和"),n("strong",[s._v("Vue")]),s._v("的关联。\n"),n("ol",[n("li",[s._v("已安装，则直接返回，避免重复安装。")]),s._v(" "),n("li",[s._v("将构造函数Vue赋值给全局的"),n("code",[s._v("Vue")]),s._v("变量，完成Vuex和Vue的关联。")]),s._v(" "),n("li",[s._v("执行"),n("code",[s._v("applyMixin(Vue)")]),s._v("函数，在Vue2.x版本中混入"),n("code",[s._v("beforeCreate")]),s._v("钩子，在"),n("code",[s._v("Vue2.0")]),s._v("以下使用重写原型的方式修改"),n("code",[s._v("init")]),s._v("钩子，以集成Vuex的功能。")])])]),s._v(" "),n("li",[s._v("通过"),n("code",[s._v("new Store")]),s._v("创建了一个store实例，并将store实例注入到Vue实例中。\n"),n("ol",[n("li",[n("strong",[s._v("Vue")]),s._v("执行"),n("code",[s._v("beforeCreate")]),s._v("钩子或者"),n("code",[s._v("_init")]),s._v("方法")]),s._v(" "),n("li",[s._v("当前组件实例有"),n("code",[s._v("store")]),s._v("属性，则注入"),n("code",[s._v("$store")]),s._v("属性，否则从父级实例中获取"),n("code",[s._v("$store")]),s._v("实例属性。")])])])]),s._v(" "),n("p",[n("code",[s._v("Vuex")]),s._v("整体的结构如下图：")]),s._v(" "),n("p",[n("img",{attrs:{src:"/images/vuex-struct.png",alt:"vuex结构"}})]),s._v(" "),n("p",[s._v("接下来，我们逐步解读下"),n("code",[s._v("new Store(options)")]),s._v("时，Vuex是如何处理的。")])])}),[],!1,null,null,null);t.default=e.exports}}]);
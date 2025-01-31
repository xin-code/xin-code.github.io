// import vue from 'vue/dist/vue.esm.browser'
import ElementUI from "element-ui"
import Clipboard from 'v-clipboard'
import VueKatex from 'vue-katex';
import "element-ui/lib/theme-chalk/index.css"
import 'katex/dist/katex.min.css';

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
}) => {
  Vue.use(ElementUI)
  Vue.use(Clipboard)
  Vue.use(VueKatex)
  // window.Vue = vue; // 使页面中可以使用Vue构造函数 （使页面中的vue demo生效）
}
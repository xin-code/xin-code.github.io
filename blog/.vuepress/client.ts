import { defineClientConfig } from "@vuepress/client";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'  // 引入 ElementPlus 的图标
import ElementPlus from 'element-plus' // 引入 element-plus
import 'element-plus/dist/index.css' // 导入 element-plus 的 css

// 自用组件
import Eat_What from './components/Eat_What/index.vue'  // 吃什么
import Input_Select from './components/Input_Select/Main.vue' // 组合Input&Select

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    // 全局导入ElementPlus
    app.use(ElementPlus)
    // 注册ElementPlus图标
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }

    // 全局导入自定义组件
    app.component('Eat_What', Eat_What)
    app.component('Input_Select', Input_Select)
  },
});

import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search"; // 搜索插件
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "前端札记",
  description: "个人的前端笔记",

  base: "/",

  theme,


  // 插件
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },
      },
    }),
  ],
});

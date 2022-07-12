import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "前端札记",
  description: "个人的前端笔记",

  base: "/",

  theme,

  // 插件
  plugins: [
    docsearchPlugin({
      appId: "WJYGS4BTI6",
      apiKey: "9faae5485c99db9f3560dec613cff0f9",
      indexName: "xin-codeio",
    }),
  ],
});

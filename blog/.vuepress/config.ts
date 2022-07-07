import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "前端札记",
  description: "个人的前端笔记",

  base: "/",

  theme,
});

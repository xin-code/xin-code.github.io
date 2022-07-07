import { navbar } from "vuepress-theme-hope";

export default navbar([
  // 首页
  "/",
  // 组件库
  "/components",
  // 笔记
  {
    text: "笔记",
    icon: "note",
    link: "/notes/Vue/Vue2.md"
  },

  // 快速文章列表
  // {
  //   text: "常见问题",
  //   icon: "edit",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "Vue",
  //       icon: "edit",
  //       prefix: "Vue/",
  //       children: [
  //         { text: "Vue基础知识", icon: "edit", link: "Vue基础知识" },
  //       ],
  //     },
  //   ],
  // },
]);

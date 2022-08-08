import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  "/",
  "/components",
  {
    text: "笔记",
    icon: "note",
    prefix: "/notes/",
    children: [
      {
        text: "Vue",
        collapsable: true,
        prefix: "Vue/",
        children: ["Vue2"],
      },
      {
        text: "JavaScript",
        collapsable: true,
        prefix: "JavaScript/",
        children: ["JavaScript算法", "JavaScript知识点"],
      },
      {
        text: "Css",
        collapsable: true,
        prefix: "Css/",
        children: ["Css知识点"],
      },
      {
        text: "Html",
        collapsable: true,
        prefix: "Html/",
        children: ["Html知识点"],
      },
      {
        text: "Git",
        collapsable: true,
        prefix: "Git/",
        children: ["git知识点"],
      },
      {
        text: "Hexo",
        collapsable: true,
        prefix: "Hexo/",
        children: ["搭建Hexo"],
      },
      {
        text: "其他",
        collapsable: true,
        prefix: "Other/",
        children: ["青龙面板", "服务器命令", "阿里云验证码", "一些地址", "Chrome多版本共存"],
      },
      {
        text: "面试",
        collapsable: true,
        prefix: "Interview/",
        children: ["面试题"],
      },
    ],
  },
]);

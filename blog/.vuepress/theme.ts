import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  // hostname: "https://vuepress-theme-hope-v2-demo.mrhope.site",

  author: {
    name: "Xin",
    url: "https://github.com/xin-code",
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "https://github.com/xin-code",

  docsDir: "blog/src",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "努力并奋斗着",

  // displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "ReadingTime"],

  blog: {
    description: "打工人",
    intro: "https://xin-code.github.io/",
    medias: {
      Github: "https://github.com/xin-code",
      Gitee: "https://gitee.com/xin-code",
      Email: "mailto:975203723@qq.com",
    },
  },

  // 加密文章
  // encrypt: {
  //   config: {
  //     "/guide/encrypt.html": ["1234"],
  //   },
  // },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    // comment: {
    //   /**
    //    * Using Giscus
    //    */
    //   provider: "Giscus",
    //   repo: "vuepress-theme-hope/giscus-discussions",
    //   repoId: "R_kgDOG_Pt2A",
    //   category: "Announcements",
    //   categoryId: "DIC_kwDOG_Pt2M4COD69",

    //   /**
    //    * Using Twikoo
    //    */
    //   // provider: "Twikoo",
    //   // envId: "https://twikoo.ccknbc.vercel.app",

    //   /**
    //    * Using Waline
    //    */
    //   // provider: "Waline",
    //   // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    // },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});

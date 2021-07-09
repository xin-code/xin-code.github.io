module.exports = {
  title: 'Xin', 
  description: '个人博客',
  themeConfig: {
      search: true,//搜索
      searchMaxSuggestions: 10,
      // 导航栏
      nav: [
        { text: '首页', link: '/' },
        { text: '前端技术', link: 'index/' },
        { text: '个人文章', items: [
          { text: '掘金', link: 'https://juejin.cn/user/405039088151837' },
          { text: 'GitHub', link: 'https://github.com/xin-code' },
        ]}
      ],
      // 侧边栏
      sidebar: [
        {
          title: 'HTML',
          collapsable: true,
          children: [
            'index/',
            'index/第一个',
          ]
        }
      ],
    }
  }

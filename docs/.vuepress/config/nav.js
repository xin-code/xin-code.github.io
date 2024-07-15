module.exports = [
  { text: '首页', link: '/' },
  {
    text: '笔记',
    link: '/pages/JavaScript/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
      {
        text: '',
        items: [{ text: '前端', link: '/pages/JavaScript/' }],
      },
      {
        text: '',
        items: [{ text: '服务器', link: '/pages/Ubuntu/' }],
      },
      {
        text: '',
        items: [{ text: '其他', link: '/pages/Others/' }],
      },
    ],
  },
  {
    text: '索引',
    link: '/categories/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '归档', link: '/archives/' },
      { text: '标签', link: '/tags/' },
    ],
  },
]

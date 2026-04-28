export default {
  // 网站 logo 和标题（显示在左上角）
  logo: <span style={{ fontWeight: 700 }}>Wangjugle's Blog</span>,

  // 网站 <head> 里的标题
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Wangjungle</title>
    </>
  ),

  // 右上角导航链接
  navbar: {
    extraContent: null,
  },

  // 项目链接（右上角 GitHub 图标），不需要可以删掉
  project: {
    link: 'https://github.com',
  },

  // 页脚文字
  footer: {
    text: '© 2025 我的数学笔记',
  },

  // 搜索
  search: {
    placeholder: '搜索笔记...',
  },

  // 目录（右侧 On This Page）
  toc: {
    title: '本页目录',
  },

  // 上一页/下一页按钮文字
  navigation: {
    prev: true,
    next: true,
  },

  // 编辑链接（不需要可以设为 false）
  editLink: {
    text: null,
  },

  // 反馈链接
  feedback: {
    content: null,
  },

  // 默认语言
  i18n: [],
}

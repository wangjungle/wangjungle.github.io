const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  latex: true,
  defaultShowCopyCode: true,
  mdxOptions:{
	remarkPlugins: [[require('remark-github-alerts'), {
	  markers: ["TIP", "NOTE", "IMPORTANT", "WARNING", "CAUTION", "INFO"],
	  icons: {
		info: '<svg class="octicon octicon-info mr-2" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>'
	  }
	}]]
  }
})

// 仓库名，比如你的仓库叫 my-nextra，就填 '/my-nextra'
// 如果用自定义域名（如 notes.example.com），就填空字符串 ''
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

module.exports = withNextra({
  output: 'export',      // 关键：开启静态导出，生成 /out 目录
  basePath,
  images: {
    unoptimized: true,   // 静态导出时图片优化不可用，必须加这个
  },
})

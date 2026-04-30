const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  latex: true,
  defaultShowCopyCode: true,
  mdxOptions:{
	remarkPlugins: [require('remark-github-alerts')]
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

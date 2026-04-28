const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  latex: true,         // 开启 KaTeX 数学公式支持
  defaultShowCopyCode: true,
})

module.exports = withNextra()

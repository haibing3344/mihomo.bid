import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mihomo Party",
  description: "基于Mihomo(Clash Meta)核心的新一代网络代理工具，界面简介清晰，功能强大。Mihomo Party 支持 Windows、macOS 以及 Linux 等所有主要桌面操作系统",
  head: [
    ['link', { rel: 'icon', href: '/assets/favicon.ico' }],
    ['script', { 
      async: true, 
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2394457707130437',
      crossorigin: 'anonymous'
    }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      src: '/logo.png',
      alt: ' Mihomo Party'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '下载', link: '/download.md' },
      { text: '使用教程', link: '/guide.md' },
      { text: '🎉机场推荐', link: 'https://jichangtuijian.uk' },
    ],

    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '使用教程', link: '/guide.md' },
          { text: '常见问题', link: '/faq.md' },
          { text: '🎉机场推荐', link: 'https://jichangtuijian.uk' },
        ],
      },
      {
        items: [
          { text: '常见问题', 
            collapsed: false,
            items: [
              { text: '首次运行注意', link: '/faq.md#首次运行-mihomo-party-的注意事项' },
              { text: '如何获取订阅地址', link: '/faq.md#获取订阅地址' },
              { text: '下载或更新订阅出错怎么办', link: '/faq.md#下载或更新订阅出错怎么办' },
              { text: '如何设置代理模式', link: '/faq.md#设置代理模式' },
              { text: '我已选择可用节点，但 Chrome 无法访问境外网站怎么办？', link: '/faq.md#我已选择可用节点-但-chrome-无法访问境外网站怎么办' },
              { text: '360 / QQ / 搜狗等国产浏览器无法访问境外网站怎么办？', link: '/faq.md#_360-qq-搜狗等国产浏览器无法访问境外网站怎么办' },
              { text: 'LINE 无法连接服务器怎么办？', link: '/faq.md#line-无法连接服务器怎么办' },
              { text: 'Telegram 无法连接服务器怎么办？', link: '/faq.md#telegram-无法连接服务器怎么办' }, 
            ]
            },
        ],
      },
    ],

    //socialLinks: [
    //  { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    //]
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
     },
 
       // 移动端 - 外观
     darkModeSwitchLabel: '外观',
 
       // 移动端 - 返回顶部
     returnToTopLabel: '返回顶部',
 
       // 移动端 - menu
     sidebarMenuLabel: '菜单',
 
     outlineTitle: '本页导航',

      // 站点页脚配置
     // footer: {
     //   message: "Mihomo Party,Mihomo Party怎么配置,Mihomo Party官网,Mihomo Party下载",
     //   copyright: 'Copyright © 2024  <a href="/"> Mihomo Party </a>'
     // },     
  },
  cleanUrls: false, // 禁用干净URL，保留.html后缀
    // 站点地图
    sitemap: {
      hostname: 'https://mihomo.bid'
    }
})

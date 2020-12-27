module.exports = {
  title: 'Manuel Abascal',
  description: 'Manuel Abascal\'s personal blog powered by VuePress',
  theme: '@vuepress/theme-blog', 
  themeConfig: {
    base: '/manuel-abascal-official-blog/',
    dateFormat: 'YYYY-MM',
    smoothScroll: true,
    summary: true,
    summaryLength: 250,
    globalPagination: {
      lengthPerPage:'10',
      layout:'Pagination',
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: 'Blog',
        link: '/',
      },
      {
        text: 'About',
        link: '/about/',
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/Manuel-Suarez-Abascal?tab=repositories',
        },
        {
          type: 'linkedin',
          link: 'https://www.linkedin.com/in/manuel-suarez-abascal/',
        },
      ],
      copyright: [
        {
          text: 'Copyright © 2020-present by Manuel Abascal ',
          link: 'https://www.linkedin.com/in/manuel-suarez-abascal/',
        },
      ],
    },
  },
}

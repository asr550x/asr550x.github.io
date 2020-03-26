module.exports = {
  title: '慧通科技手册',
  base: '/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '慧通科技手册'
    }
  },
  head: [
    ['meta', { name: 'keywords', content: 'huitong handbook' }],
    ['link', { rel: 'shortcut icon', href: '/images/logo.png' }],
  ],
  themeConfig: {
    logo: '/images/logo.png',
    repoLabel: '项目仓库',
    repo: 'https://git.huitong-tech.com/huitong/handbook',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '在 GitLab 上编辑此页面',
    sideBar: 'auto',
    sidebarDepth: 3,
    smoothScroll: true,
    lastUpdated: '上次更新',
    locales: {
      '/': {
        selectText: '选择语言',
        label: '简体中文',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        nav: [
          { text: '开始探索', link: '/company/' }
        ],
        sidebar: {
          '/': genSidebarConfig(),
        }
      }
    }
  },
  serviceWorker: true,
  evergreen: true
}

function genSidebarConfig() {
  return [
    {
      title: '慧通科技手册',
      path: '/'
    },
    {
      title: '公司简介',
      collapsable: true,
      path: '/company/',
      children: [
        '/company/intro',
      ]
    },
    {
      title: '人员',
      collapsable: true,
      path: '/people/',
      children: [
        'people/onboarding',
      ]
    },
    {
      title: '技术',
      collapsable: true,
      path: '/engineering/',
      children: [
        {
          title: '研发',
          path: '/engineering/development/',
          children: [
            'engineering/development/git-branch-spec',
            'engineering/development/java-spec',
            'engineering/development/python-spec',
            'engineering/development/restful-spec',
            'engineering/development/mysql-spec',
            'engineering/development/ant-vue-spec',
            'engineering/development/front-spec'
          ]
        },
      ]
    },
    {
      title: '财务',
      collapsable: true,
      path: '/finance/',
      children: [
        'finance/salary',
        'finance/reimbursement',
      ]
    },
  ]
}
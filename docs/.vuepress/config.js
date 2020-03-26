module.exports = {
  title: 'ASR550x 文档',
  base: '/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'ASR550x Documents',
      description: 'description'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'ASR550x 文档',
      description: ''
    }
  },
  head: [
    ['meta', { name: 'keywords', content: 'huitong handbook' }],
    ['link', { rel: 'shortcut icon', href: '/images/logo.png' }],
  ],
  themeConfig: {
    logo: '/images/logo.png',
    repo: 'https://github.com/asr550x/asr550x.github.io',
    docsDir: 'docs',
    editLinks: true,
    sideBar: 'auto',
    sidebarDepth: 3,
    smoothScroll: true,
    locales: {
      '/': {
        selectText: 'Languages',
        editLinkText: "Edit this page on GitHub",
        repoLabel: "GitHub",
        label: 'English',
        lastUpdated: "Last Updated",
        serviceWorker: {
          updatePopup: {
            message: "Update Found.",
            buttonText: "Refresh"
          }
        },
        nav: [
          { text: 'Get started', link: '/company/' }
        ],
        sidebar: {
          '/': genEnSidebarConfig(),
        }

      },
      '/zh/': {
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
          '/': genZhSidebarConfig(),
        }
      }
    }
  },
  serviceWorker: true,
  evergreen: true
}

function genEnSidebarConfig() {
  return [
    {
      title: 'ASR550x Documents',
      path: '/'
    },
    {
      title: 'Intro',
      collapsable: true,
      path: '/company/',
      children: [
        '/company/intro',
      ]
    },
    {
      title: 'People',
      collapsable: true,
      path: '/people/',
      children: [
        'people/onboarding',
      ]
    },
    {
      title: 'Tech',
      collapsable: true,
      path: '/engineering/',
      children: [
        {
          title: 'Development',
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
      title: 'Finance',
      collapsable: true,
      path: '/finance/',
      children: [
        'finance/salary',
        'finance/reimbursement',
      ]
    },
  ]
}


function genZhSidebarConfig() {
  return [
    {
      title: 'ASR550x 文档',
      path: '/zh/'
    },
    {
      title: '简介',
      collapsable: true,
      path: '/zh/company/',
      children: [
        '/zh/company/intro',
      ]
    },
    {
      title: '人员',
      collapsable: true,
      path: '/zh/people/',
      children: [
        'people/onboarding',
      ]
    },
    {
      title: '技术',
      collapsable: true,
      path: '/zh/engineering/',
      children: [
        {
          title: '研发',
          path: '/zh/engineering/development/',
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
      path: '/zh/finance/',
      children: [
        'finance/salary',
        'finance/reimbursement',
      ]
    },
  ]
}
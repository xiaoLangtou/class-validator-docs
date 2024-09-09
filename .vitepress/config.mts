import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "class-validator中文文档",
  description: "class-validator中文文档",
  themeConfig: {
    outline:{
      label: '大纲',
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '目录', link: '/Table-Contents' }
    ],

    sidebar: [
      {
        text: '简介',
        collapsed: false,
        items: [
          { text: '快速开始', link: '/Installation' },
          { text: '传递选项', link: '/Passing-options' },
          { text: '验证错误', link: '/Validation-errors' },
          { text: '验证消息', link: '/Validation-messages' },
          { text: '验证数组、集合、映射、嵌套对象', link: '/Validate-collections' },
          { text: '验证Promise', link: '/Validating-promises' },
          { text: '继承验证装饰器', link: '/Inheriting-Validation-decorator' },
          { text: '条件验证', link: '/Conditional-validation' },
          { text: '白名单', link: '/Whitelisting' },
          { text: '向装饰器传递上下文', link: '/Passing-context-decorators' },
          { text: '跳过缺失属性', link: '/Skipping-missing-properties' },
          { text: '验证组', link: '/Validation-groups' },
          { text: '自定义验证类', link: '/Custom-validation-classes' },
          { text: '自定义验证装饰器', link: '/Custom-validation-decorators' },
          { text: '使用服务容器', link: '/Using-service-containe' },
          { text: '其他验证', link: '/Other-validation' },
          { text: '扩展', link: '/Extensions' },
        ]
      },
      {
        text: '验证装饰器',
        collapsed: false,
        items: [
          { text: '常见验证', link: '/Common-validation-decorators' },
          { text: '类型验证', link: '/Type-validation-decorators' },
          { text: '数字验证', link: '/Number-validation-decorators' },
          { text: '日期验证', link: '/Date-validation-decorators' },
          { text: '字符串类型验证', link: '/String-type-validation-decorators' },
          { text: '字符串验证', link: '/String-validation-decorators' },
          { text: '数组验证', link: '/Array-validation-decorators' },
          { text: '对象验证', link: '/Object-validation-decorators' },
          { text: '其他装饰器', link: '/Other-decorators' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Employee Handbook",
  description: "Skybase Innovations Employee Handbook",
  outDir: '../site',
  themeConfig: {
    siteTitle: false,
    logo: { light: '/light.svg', dark: '/dark.svg' },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Core', link: '/welcome' },
      { text: 'Development', link: '/git-conventions' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        link: '/'
      },
      {
        text: 'Core',
        items: [
          {
            text: 'Employment',
            collapsed: false,
            items: [
              { text: 'Welcome', link: '/welcome' },
              { text: 'About Your Employment', link: '/about' },
              { text: 'Calendar and Leave Policy', link: '/leave' },
              { text: 'Payments and Benefits', link: '/payment' },
              { text: 'Accidents, Misconduct and Disputes', link: '/accident' }
            ]
          }
        ]
      },
      {
        text: 'Development',
        items: [
          {
            text: 'Conventions',
            collapsed: false,
            items: [
              { text: 'Git Conventions', link: '/git-conventions' },
              { text: 'Version Conventions', link: '/conventions' }
            ]
          },
          { text: 'Git Multi Accounts', link: '/git-multi-accounts' },
          { text: 'Daily Work Updates', link: '/daily-updates' }
        ]
      },
      {
        text: 'Tutorials',
        items: [
          {
            text: 'Sign in with Apple | Flutter',
            collapsed: false,
            items: [
              { text: 'Introduction', link: '/signin-with-apple/' },
              { text: 'Configure Apple Developer Account', link: '/signin-with-apple/step-1' },
              { text: 'Set up Apple Service ID', link: '/signin-with-apple/step-2-set-up-apple-service-id' },
              { text: 'Configure in Xcode', link: '/signin-with-apple/step-3-configure-in-xcode' },
              { text: 'Implement in App', link: '/signin-with-apple/step-4-implement-apple-sign-in-in-app-using-flutter' }
            ]
          }
        ]
      }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 Skybase Innovations Pvt. Ltd.'
    },

    socialLinks: [
      { icon: 'instagram', link: 'https://instagram.com/skybase.innovations' }
    ]
  }
})

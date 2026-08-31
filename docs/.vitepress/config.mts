import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Employee Handbook",
  description: "Skybase Innovations Employee Handbook",
  lang: 'en-GB',
  outDir: '../site',
  appearance: true,
  lastUpdated: true,
  // Prefer file mtime when newer than last git commit (so edits show before commit)
  async transformPageData(pageData) {
    const { statSync } = await import('node:fs')
    const { join, dirname } = await import('node:path')
    const { fileURLToPath } = await import('node:url')
    const docsRoot = dirname(fileURLToPath(import.meta.url))
    try {
      const filePath = join(docsRoot, '..', pageData.relativePath)
      const mtime = Math.floor(statSync(filePath).mtimeMs)
      if (!pageData.lastUpdated || mtime > pageData.lastUpdated) {
        pageData.lastUpdated = mtime
      }
    } catch {
      // keep git lastUpdated
    }
  },
  themeConfig: {
    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        forceLocale: true,
        day: 'numeric',
        month: 'long',
        year: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }
    },
    siteTitle: false,
    logo: { light: '/light.svg', dark: '/dark.svg' },
    search: {
      provider: 'local'
    },
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
              { text: 'Policies and Procedures', link: '/policies-and-procedures' },
              { text: 'Attendance', link: '/attendance' },
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
      message: 'Built with ☕ and curiosity at Skybase.',
      copyright: 'Copyright © 2024–2026 Skybase Innovations Pvt. Ltd.'
    },

    editLink: {
      pattern: 'https://github.com/skybaseinnovations/employee-handbook/edit/main/docs/:path',
      text: 'Suggest an edit'
    },

    socialLinks: [
      { icon: 'instagram', link: 'https://instagram.com/skybase.innovations' },
      { icon: 'github', link: 'https://github.com/skybaseinnovations/employee-handbook' }
    ],

    outline: {
      label: 'On this page'
    },

    docFooter: {
      prev: 'Previous',
      next: 'Next up'
    },

    returnToTopLabel: 'Back to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Theme',
    lightModeSwitchTitle: 'Switch to light sky',
    darkModeSwitchTitle: 'Switch to night sky'
  }
})

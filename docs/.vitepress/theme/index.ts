import { h, nextTick, provide } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import './style.css'
import WelcomeHero from './components/WelcomeHero.vue'
import QuickFacts from './components/QuickFacts.vue'
import OnboardingStep from './components/OnboardingStep.vue'
import ContactPanel from './components/ContactPanel.vue'
import ChecklistProgress from './components/ChecklistProgress.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    const { isDark } = useData()

    provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      )

      // @ts-expect-error View Transitions API
      if (!document.startViewTransition) {
        isDark.value = !isDark.value
        return
      }

      // @ts-expect-error View Transitions API
      const transition = document.startViewTransition(async () => {
        isDark.value = !isDark.value
        await nextTick()
      })

      await transition.ready

      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`
          ]
        },
        {
          duration: 420,
          easing: 'ease-in-out',
          pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`
        }
      )
    })

    return h(DefaultTheme.Layout)
  },
  enhanceApp({ app }) {
    app.component('WelcomeHero', WelcomeHero)
    app.component('QuickFacts', QuickFacts)
    app.component('OnboardingStep', OnboardingStep)
    app.component('ContactPanel', ContactPanel)
    app.component('ChecklistProgress', ChecklistProgress)
  }
} satisfies Theme

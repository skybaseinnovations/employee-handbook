<script setup lang="ts">
const contacts = [
  {
    title: 'Management',
    detail: 'Raise a ticket on Karyabase — tracked, answered, no lost DMs.',
    href: 'https://karyabase.com',
    cta: 'Open Karyabase'
  },
  {
    title: 'Operations',
    detail: 'info@skybase.com.np',
    href: 'mailto:info@skybase.com.np',
    cta: 'Email ops'
  },
  {
    title: 'Phone',
    detail: '+977-9845533797',
    href: 'tel:+9779845533797',
    cta: 'Call'
  }
]
</script>

<template>
  <section class="contact-panel">
    <div class="contact-panel__intro">
      <h2 class="contact-panel__heading">Stuck? Talk to us.</h2>
      <p class="contact-panel__sub">
        Finish the steps above, then tap whoever can unblock you fastest.
      </p>
    </div>
    <div class="contact-panel__grid">
      <a
        v-for="item in contacts"
        :key="item.title"
        class="contact-card"
        :href="item.href"
        :target="item.href.startsWith('http') ? '_blank' : undefined"
        :rel="item.href.startsWith('http') ? 'noopener noreferrer' : undefined"
      >
        <p class="contact-card__title">{{ item.title }}</p>
        <p class="contact-card__detail">{{ item.detail }}</p>
        <span class="contact-card__cta">{{ item.cta }} →</span>
      </a>
    </div>
  </section>
</template>

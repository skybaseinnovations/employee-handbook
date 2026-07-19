<script setup lang="ts">
const facts = [
  {
    label: 'Office hours',
    value: '10:00 AM – 6:00 PM',
    hint: 'Your agreement may set a different schedule.'
  },
  {
    label: 'Kitchen fuel',
    value: 'Coffee · Tea · Water',
    hint: 'Breaks are part of the job. Use them.'
  },
  {
    label: 'Need a hand?',
    value: 'Ask your supervisor',
    hint: 'Especially if you are an intern — we expect questions.'
  }
]
</script>

<template>
  <div class="quick-facts" role="list">
    <article v-for="fact in facts" :key="fact.label" class="quick-fact" role="listitem">
      <p class="quick-fact__label">{{ fact.label }}</p>
      <p class="quick-fact__value">{{ fact.value }}</p>
      <p class="quick-fact__hint">{{ fact.hint }}</p>
    </article>
  </div>
</template>

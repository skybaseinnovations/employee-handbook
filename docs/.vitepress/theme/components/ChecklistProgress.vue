<script setup lang="ts">
const steps = [
  'Citizenship',
  'Company email',
  'Discord',
  'Karyabase',
  'GitHub',
  'Handbook tour'
]
</script>

<template>
  <nav class="checklist-progress" aria-label="Onboarding checklist">
    <p class="checklist-progress__label">Your launch sequence</p>
    <ol class="checklist-progress__list">
      <li v-for="(step, i) in steps" :key="step" class="checklist-progress__item">
        <span class="checklist-progress__index">{{ i + 1 }}</span>
        <span class="checklist-progress__text">{{ step }}</span>
      </li>
    </ol>
  </nav>
</template>

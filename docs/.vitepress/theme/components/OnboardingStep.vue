<script setup lang="ts">
defineProps<{
  step: number | string
  title: string
  tag?: string
}>()
</script>

<template>
  <article class="onboard-step">
    <header class="onboard-step__header">
      <span class="onboard-step__num" aria-hidden="true">{{ step }}</span>
      <div class="onboard-step__titles">
        <h3 class="onboard-step__title">{{ title }}</h3>
        <span v-if="tag" class="onboard-step__tag">{{ tag }}</span>
      </div>
    </header>
    <div class="onboard-step__body">
      <slot />
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  banner: string
}>()
</script>

<template>
  <section class="welcome-hero">
    <div class="welcome-hero__media">
      <img :src="banner" alt="Welcome to Skybase Innovations" />
    </div>
    <div class="welcome-hero__copy">
      <p class="welcome-hero__eyebrow">Day one · Skybase Innovations</p>
      <h1 class="welcome-hero__title">You're in. Let's build.</h1>
      <p class="welcome-hero__lead">
        Coding is our craft and curiosity is the default setting. This page is your
        launch checklist — everything you need before the real fun starts.
      </p>
    </div>
  </section>
</template>

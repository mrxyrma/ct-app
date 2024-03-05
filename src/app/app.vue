<script setup lang="ts">
  import { AppHeader, AppFooter } from 'src/shared/ui';
  import { RouterView } from 'vue-router';
</script>

<template>
  <div class="flex flex-col justify-between">
    <app-header />
    <router-view class="flex-grow w-full min-h-screen max-w-screen-xl p-5 mx-auto" />
    <app-footer />
  </div>
</template>

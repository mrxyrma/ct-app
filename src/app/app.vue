<script setup lang="ts">
  import { AppHeader, AppFooter } from 'src/shared/ui';
  import { RouterView } from 'vue-router';
</script>

<template>
  <div class="flex flex-col justify-between h-screen">
    <app-header />
    <router-view class="w-full flex-grow max-w-screen-2xl p-5 mx-auto" />
    <app-footer />
  </div>
</template>

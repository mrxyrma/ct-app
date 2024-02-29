<script setup lang="ts">
  import {
 AppHeader,
AppFooter,
} from 'src/shared/ui';
  import { RouterView } from 'vue-router';
</script>

<template>
  <app-header />
  <router-view />
  <app-footer />
</template>

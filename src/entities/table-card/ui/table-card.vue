<script setup lang="ts">
  import { RouterLink } from 'vue-router';

  type Props = {
    title: string;
    src: string;
    link: string;
  };
  defineProps<Props>();
</script>

<template>
  <li class="border border-slate-100 rounded-2xl transition hover:-translate-y-2 hover:shadow-xl">
    <router-link
      :to="link"
      class="h-full p-3 grid"
    >
      <img
        :src="src"
        :alt="title"
        class="h-32 mx-auto mb-2 object-scale-down"
      >
      <p class="text-center text-lg">
        {{ title }}
      </p>
    </router-link>
  </li>
</template>

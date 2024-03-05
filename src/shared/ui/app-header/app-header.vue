<script setup lang="ts">
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';

  const route = ref(useRoute());
</script>

<template>
  <header class="bg-sky-700 font-bold text-lg text-gray-50 sticky top-0 z-10">
    <div class="max-w-screen-xl px-5 mx-auto min-h-10 flex justify-center items-center sm:justify-start">
      <h1 v-if="route.fullPath === '/'">Подбор оборудования</h1>

      <router-link
        v-else
        to="/"
      >
        Главная
      </router-link>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { TableCard } from 'src/entities/table-card';
  import {
 onMounted,
ref,
} from 'vue';

  type Card = {
    _id: number;
    title: string;
    link: string;
    src: string;
  };

  const cards = ref<Card[]>([]);

  onMounted(() => {
    import('src/shared/data/category-сards.json').then(res => cards.value.push(...res.default));
  });
</script>

<template>
  <main>
    <ul class="grid gap-5 p-5 cards max-w-screen-xl mx-auto">
      <table-card
        v-for="card in cards"
        :key="card._id"
        :title="card.title"
        :src="card.src"
        :link="card.link"
      />
    </ul>
  </main>
</template>

<style scoped>
  .cards {
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  }
</style>

<script setup lang="ts">
  import { TableCard } from 'src/entities/table-card';
  import { useCategoryCardsStore } from 'src/shared/stores/category-cards-store.ts';
  import { computed } from 'vue';

  const store = useCategoryCardsStore();
  const cards = computed(() => store.cards);
  document.title = 'Подбор оборудования';
</script>

<template>
  <main>
    <ul class="grid gap-5 cards">
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

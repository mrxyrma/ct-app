<script setup lang="ts">
  import { TableCard } from 'src/entities/table-card';
  import { useCategoryCardsStore } from 'src/shared/stores/category-cards-store.ts';

  const categoryCardsStore = useCategoryCardsStore();
  document.title = 'Подбор оборудования';
</script>

<template>
  <main>
    <ul class="grid gap-5 cards">
      <table-card
        v-for="card in categoryCardsStore.cards"
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

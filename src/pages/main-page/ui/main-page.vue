<script setup lang="ts">
  import { TableCard } from 'src/entities/table-card';
  import { useCategoryCardsStore } from 'src/shared/stores/category-cards-store.ts';
  import { AppSpinner } from 'src/shared/ui';
  import { onMounted } from 'vue';

  const categoryCardsStore = useCategoryCardsStore();

  document.title = 'Подбор оборудования';

  onMounted(() => categoryCardsStore.fetchCards());
</script>

<template>
  <main>
    <app-spinner v-if="categoryCardsStore.loading" />
    <ul
      v-else
      class="grid gap-5 cards"
    >
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

import { defineStore } from 'pinia';
import type { Card } from 'src/shared/types';
import { ref } from 'vue';

export const useCategoryCardsStore = defineStore('categoryCards', () => {
  import('../data/category-сards.json').then(res => (cards.value = res.default));

  const cards = ref<Card[]>([]);

  return { cards };
});

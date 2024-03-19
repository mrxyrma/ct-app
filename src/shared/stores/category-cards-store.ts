import { defineStore } from 'pinia';
import { ref } from 'vue';

type Card = {
  _id: number;
  title: string;
  link: string;
  src: string;
};

export const useCategoryCardsStore = defineStore('categoryCards', () => {
  import('../data/category-сards.json').then(res => (cards.value = res.default));

  const cards = ref<Card[]>([]);

  return { cards };
});

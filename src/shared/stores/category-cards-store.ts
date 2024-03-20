import { defineStore } from 'pinia';
import { ref } from 'vue';

type Card = {
  _id: number;
  title: string;
  link: string;
  src: string;
};

export const useCategoryCardsStore = defineStore('categoryCards', () => {
  const cards = ref<Card[]>([]);
  const loading = ref(false);

  async function fetchCards() {
    loading.value = true;

    await import('../data/category-сards.json').then(res => (cards.value = res.default)).catch(e => console.log(e));

    loading.value = false;
  }

  return { cards, loading, fetchCards };
});

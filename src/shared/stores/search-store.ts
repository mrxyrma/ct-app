import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSearchStore = defineStore('searchStore', () => {
  const searchValue = ref('');

  function setSearchValue(value: string) {
    searchValue.value = value;
  }

  return { searchValue, setSearchValue };
});

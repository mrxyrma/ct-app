<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useProductsStore } from 'src/shared/stores/products-store.ts';
  import { useRouter } from 'vue-router';

  const productsStore = useProductsStore();
  const { searchValue } = storeToRefs(productsStore);
  const { searchItems } = productsStore;
  const router = useRouter();

  function searchHandler() {
    searchItems();
    router.replace({ name: 'categoryPage' });
  }
</script>

<template>
  <div class="flex justify-center">
    <input
      v-model="searchValue"
      type="search"
      name="search"
      autocomplete="off"
      placeholder="Поиск по артикулу или наименованию"
      class="bg-white border border-slate-300 rounded-md p-2 w-full text-xs shadow-md text-center focus:outline-none focus:shadow-lg sm:w-3/5 sm:text-base"
      @input="searchHandler"
    />
  </div>
</template>

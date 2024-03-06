<script setup lang="ts">
  import { useProductsStore } from 'src/shared/stores/products-store.ts';
  import { useSearchStore } from 'src/shared/stores/search-store.ts';

  const productsStore = useProductsStore();
  const searchStore = useSearchStore();

  function onProductsSearch() {
    const checkedInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input:checked');
    checkedInputs.forEach(item => (item.checked = false));

    const foundProducts = productsStore.products.filter(
      item =>
        String(item['Артикул']).toUpperCase().includes(searchStore.searchValue.toUpperCase()) ||
        String(item['Наименование']).toUpperCase().includes(searchStore.searchValue.toUpperCase())
    );
    productsStore.setVisibleProducts(foundProducts);
  }
</script>

<template>
  <div class="flex justify-center">
    <input
      v-model="searchStore.searchValue"
      type="search"
      placeholder="Поиск по артикулу или наименованию"
      class="border border-slate-300 rounded-md p-2 w-full text-xs shadow-md text-center focus:outline-offset-0 focus:outline-none focus:shadow-lg sm:w-3/5 sm:text-base"
      @input="onProductsSearch"
    />
  </div>
</template>

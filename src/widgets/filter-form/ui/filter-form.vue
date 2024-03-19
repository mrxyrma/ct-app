<script setup lang="ts">
  import { FilterFieldset } from 'src/features/filter-fieldset';
  import { useProductsStore } from 'src/shared/stores/products-store.ts';
  import { storeToRefs } from 'pinia';

  const productsStore = useProductsStore();
  const { fieldsetTitles } = storeToRefs(productsStore);
  const { filterItems } = productsStore;
</script>

<template>
  <aside class="w-full sm:w-2/6">
    <h3 class="text-xl font-semibold">Фильтры:</h3>
    <form
      class="pl-2 pt-2 flex flex-col gap-1.5"
      @change.prevent="filterItems"
    >
      <filter-fieldset
        v-for="title in fieldsetTitles"
        :key="title"
        :fieldset-title="title"
      />
    </form>
  </aside>
</template>

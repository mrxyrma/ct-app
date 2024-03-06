<script setup lang="ts">
  import { FilterFieldset } from 'src/features/filter-fieldset';
  import { useProductsStore } from 'src/shared/stores/products-store.ts';

  //Список полей таблицы, которые игнорируются в филдсетах
  const ignoreTitles = ['_id', 'Артикул', 'Наименование', 'src', 'Серия', 'Примечание'];

  const productsStore = useProductsStore();

  //Массив с заголовками филдсетов (шапка таблицы)
  const fieldsetTitles = productsStore.products.reduce((acc: any[], curr) => {
    Object.keys(curr)
      .filter(key => !ignoreTitles.includes(key))
      .filter(key => !acc.includes(key))
      .forEach(key => acc.push(key));

    return acc;
  }, []);
</script>

<template>
  <aside class="max-w-full sm:max-w-64 md:max-w-80 lg:max-w-96">
    <h3 class="text-xl font-semibold">Фильтры:</h3>
    <form
      class="pl-2 pt-2 flex flex-col content-start gap-2"
      @change.prevent
    >
      <filter-fieldset
        v-for="title in fieldsetTitles"
        :key="title"
        :fieldset-title="title"
      />
    </form>
  </aside>
</template>

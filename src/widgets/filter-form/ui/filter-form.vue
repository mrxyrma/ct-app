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
    <form class="pl-2 pt-2 flex flex-col gap-2">
      <filter-fieldset
        v-for="title in fieldsetTitles"
        :key="title"
        :fieldset-title="title"
      />
      <button class="w-full self-center max-w-80 rounded-md p-2 text-gray-50 text-lg bg-sky-700 sm:max-w-full">
        Подобрать
      </button>
    </form>
  </aside>
</template>

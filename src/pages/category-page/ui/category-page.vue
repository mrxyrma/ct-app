<script setup lang="ts">
  import {
 FilterForm,
SearchItems,
} from 'src/features';
  import ProductItem from 'src/features/product-item/product-item.vue';
</script>

<template>
  <main class="max-w-screen-2xl mx-auto p-5">
    <search-items />
    <h1 class="text-center mt-5 text-2xl font-bold">
      Title of table
    </h1>
    <div class="flex flex-col gap-5 sm:flex-row mt-3">
      <filter-form />
      <ul>
        <h3 class="text-xl font-semibold">
          Возможные варианты:
        </h3>
        <product-item />
        <product-item />
        <product-item />
      </ul>
    </div>
  </main>
</template>

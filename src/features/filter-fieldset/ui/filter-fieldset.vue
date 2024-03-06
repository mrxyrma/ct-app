<script setup lang="ts">
  import { FilterButton } from 'src/entities/filter-button';
  import { useProductsStore } from 'src/shared/stores/products-store.ts';
  import { isNumber, isUndefined } from 'lodash';
  import type { Product } from 'src/shared/types';

  type Props = {
    fieldsetTitle: keyof Product;
  };

  const { fieldsetTitle } = defineProps<Props>();

  const productsStore = useProductsStore();

  const fieldsetButtons = productsStore.products.reduce((acc: (string | number)[], curr) => {
    const value = curr[fieldsetTitle];
    if (!acc.includes(value) && !isUndefined(value)) acc.push(value);
    return acc;
  }, []);

  let sortedFieldsetButtons: (string | number)[];

  if (fieldsetButtons.every(item => isNumber(item))) {
    sortedFieldsetButtons = fieldsetButtons.sort((a, b) => Number(a) - Number(b));
  } else sortedFieldsetButtons = fieldsetButtons.sort();
</script>

<template>
  <fieldset class="flex gap-1 flex-wrap">
    <legend class="font-semibold">
      {{ fieldsetTitle }}
    </legend>
    <filter-button
      v-for="button in sortedFieldsetButtons"
      :key="button"
      :label="button"
    />
  </fieldset>
</template>

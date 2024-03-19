<script setup lang="ts">
  import { FilterButton } from 'src/entities/filter-button';
  import { useProductsStore } from 'src/shared/stores/products-store.ts';
  import { isNumber, isUndefined } from 'lodash';
  import { computed } from 'vue';

  type Props = {
    fieldsetTitle: string;
  };

  const { fieldsetTitle } = defineProps<Props>();

  const productsStore = useProductsStore();

  const fieldsetButtons = computed(() =>
    productsStore.products.reduce((acc: (string | number)[], curr) => {
      const value = curr[fieldsetTitle];
      if (!acc.includes(value) && !isUndefined(value)) acc.push(value);
      return acc;
    }, [])
  );

  let sortedFieldsetButtons: (string | number)[];

  if (fieldsetButtons.value.every(item => isNumber(item))) {
    sortedFieldsetButtons = fieldsetButtons.value.sort((a, b) => Number(a) - Number(b));
  } else sortedFieldsetButtons = fieldsetButtons.value.sort();

  productsStore.filters[fieldsetTitle] = sortedFieldsetButtons;

  function takeSelectedBtns(e: Event) {
    const makeCorrectFormat = (item: HTMLInputElement) => {
      let correctFormatValue: number | string = Number(item.value);
      if (String(correctFormatValue) === 'NaN') correctFormatValue = item.value;
      return correctFormatValue;
    };

    let selectedBtns: (string | number)[] = [];

    if (e.currentTarget) {
      selectedBtns = Array.from((e.currentTarget as HTMLFormElement).elements)
        .filter(item => (item as HTMLInputElement).checked)
        .map(item => makeCorrectFormat(item as HTMLInputElement));
    }

    if (!selectedBtns.length) {
      selectedBtns = sortedFieldsetButtons;
    }

    productsStore.filters[fieldsetTitle] = selectedBtns;
  }
</script>

<template>
  <fieldset
    class="flex gap-1 flex-wrap place-content-start"
    @change="takeSelectedBtns"
  >
    <legend class="font-semibold">
      {{ fieldsetTitle }}
    </legend>
    <filter-button
      v-for="button in sortedFieldsetButtons"
      :key="button"
      :label="button"
      :fieldset-title="fieldsetTitle"
    />
  </fieldset>
</template>

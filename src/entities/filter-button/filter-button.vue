<script setup lang="ts">
  import { useProductsStore } from 'src/shared/stores/products-store.ts';
  import { computed, onMounted } from 'vue';
  import { useRoute } from 'vue-router';

  type Props = {
    label: string | number;
    fieldsetTitle: string;
  };

  const { label, fieldsetTitle } = defineProps<Props>();

  const productsStore = useProductsStore();

  const route = useRoute();

  const isDisabled = computed(() => !productsStore.visibleProducts.find(product => product[fieldsetTitle] === label));
  const isChecked = computed(() => route.query[fieldsetTitle] == label);

  onMounted(() => {
    if (isChecked.value) {
      const arr = []; //для объекта filters требуется массив
      arr.push(label);
      productsStore.filters[fieldsetTitle] = arr;
      productsStore.filterItems();
    }
  });
</script>

<template>
  <label
    class="p-1.5 leading-none rounded-md"
    :class="{
      'text-slate-300': isDisabled,
      'cursor-pointer has-[:checked]:bg-sky-600 has-[:checked]:text-gray-50': !isDisabled,
    }"
  >
    <input
      type="checkbox"
      :name="String(label)"
      :value="String(label)"
      class="appearance-none absolute"
      :checked="isChecked"
      :disabled="isDisabled"
    />
    {{ label }}
  </label>
</template>

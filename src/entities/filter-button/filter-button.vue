<script setup lang="ts">
  import { useProductsStore } from 'src/shared/stores/products-store.ts';
  import type { Product } from 'src/shared/types';
  import { computed } from 'vue';

  type Props = {
    label: string | number;
    fieldsetTitle: keyof Product;
  };

  const { label, fieldsetTitle } = defineProps<Props>();

  const productsStore = useProductsStore();
  const isDisabled = computed(() => !productsStore.visibleProducts.find(product => product[fieldsetTitle] === label));
</script>

<template>
  <label
    class="p-1.5 rounded-md has-[:checked]:bg-blue-500 has-[:checked]:text-gray-50"
    :class="{ 'text-slate-300': isDisabled, 'cursor-pointer': !isDisabled }"
  >
    <input
      type="checkbox"
      :value="String(label)"
      class="appearance-none absolute"
      :disabled="isDisabled"
    />
    {{ label }}
  </label>
</template>

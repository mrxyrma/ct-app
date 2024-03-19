<script setup lang="ts">
  import { useProductsStore } from 'src/shared/stores/products-store.ts';
  import { computed } from 'vue';

  type Props = {
    label: string | number;
    fieldsetTitle: string;
  };

  const { label, fieldsetTitle } = defineProps<Props>();

  const productsStore = useProductsStore();
  const isDisabled = computed(() => !productsStore.visibleProducts.find(product => product[fieldsetTitle] === label));
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
      :name="fieldsetTitle"
      :value="String(label)"
      class="appearance-none absolute"
      :disabled="isDisabled"
    />
    {{ label }}
  </label>
</template>

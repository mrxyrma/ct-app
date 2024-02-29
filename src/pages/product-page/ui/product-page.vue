<script setup lang="ts">
  import {
 AccessoryItem,
ProductInfo,
} from 'src/entities/product';
</script>

<template>
  <div class="max-w-screen-xl mx-auto p-6 md:pt-12">
    <product-info />
    <div class="mt-10">
      <h3 class="text-2xl font-semibold">
        Аксессуары:
      </h3>
      <ul class="grid gap-1 mt-2">
        <accessory-item />
        <accessory-item />
        <accessory-item />
      </ul>
    </div>
  </div>
</template>

<style scoped></style>

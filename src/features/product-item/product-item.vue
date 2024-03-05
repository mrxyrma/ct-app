<script setup lang="ts">
  type Props = {
    orderNum: string | number;
    name: string;
  };

  defineProps<Props>();
</script>

<template>
  <li class="py-1.5">
    <router-link
      :to="{ name: 'productPage', params: { product: String(orderNum) } }"
      target="_blank"
      class="h-full"
    >
      {{ orderNum }} - {{ name }}
    </router-link>
  </li>
</template>

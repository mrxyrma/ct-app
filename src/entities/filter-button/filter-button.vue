<script setup lang="ts">
  type Props = {
    label: string | number;
  };

  defineProps<Props>();
</script>

<template>
  <label class="p-1 rounded-md has-[:checked]:bg-blue-400 has-[:checked]:text-gray-50 cursor-pointer">
    <input
      type="checkbox"
      :value="String(label)"
      class="appearance-none absolute"
    />
    {{ label }}
  </label>
</template>

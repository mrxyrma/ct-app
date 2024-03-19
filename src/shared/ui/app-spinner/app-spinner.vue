<script setup lang="ts">
  import Spinner from 'src/shared/images/spinner.gif';
</script>

<template>
  <div class="flex h-full justify-center items-center">
    <img
      :src="Spinner"
      alt="Идёт загрузка"
    />
  </div>
</template>

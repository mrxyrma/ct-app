<script setup lang="ts">
  import Spinner from 'src/shared/images/spinner.gif';
</script>

<template>
  <div class="flex h-screen justify-center items-center fixed top-0 left-0 right-0">
    <img
      :src="Spinner"
      alt="Идёт загрузка"
    />
  </div>
</template>

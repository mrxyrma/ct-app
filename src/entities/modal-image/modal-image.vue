<script setup lang="ts">
  type Props = {
    src: string;
  };

  defineProps<Props>();

  type Emits = {
    (event: 'toggleModal'): void;
  };

  const emit = defineEmits<Emits>();

  document.addEventListener('keydown', closeModal);

  function closeModal(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      emit('toggleModal');
    }
    document.removeEventListener('keydown', closeModal);
  }
</script>

<template>
  <div
    class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center"
    @click="$emit('toggleModal')"
  >
    <img
      :src="src"
      alt="Фото изделия"
      class="my-20"
    />
  </div>
</template>

<style scoped>
  img {
    max-height: 80%;
    animation-name: Appearance;
    animation-duration: 0.3s;
    animation-timing-function: ease-in-out;
  }

  @keyframes Appearance {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>

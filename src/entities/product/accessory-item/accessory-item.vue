<script setup lang="ts">
  import AppPlaceholder from 'src/shared/images/placeholder.svg';
  import { AppModal } from 'src/shared/ui';
  import { ref } from 'vue';

  type Props = {
    order_num: string | number;
    name: string;
    src: string;
  };

  const props = defineProps<Props>();

  const isModal = ref(false);
  const src = ref(props.src || AppPlaceholder);

  function toggleModal() {
    isModal.value = !isModal.value;
  }

  function copyInMemory(text: string) {
    navigator.clipboard.writeText(text);
  }
</script>

<template>
  <li class="flex items-center gap-2">
    <img
      :src="src"
      alt="Фото аксессуара"
      class="w-32 h-32 object-scale-down cursor-pointer"
      @error="src = AppPlaceholder"
      @click="toggleModal"
    />
    <p>
      <b
        class="cursor-alias"
        @click="() => copyInMemory(String(order_num))"
      >
        {{ order_num }}
      </b>
      -
      <span
        class="cursor-alias"
        @click="() => copyInMemory(name)"
      >
        {{ name }}
      </span>
    </p>
  </li>
  <app-modal
    v-if="isModal"
    :src="src"
    @toggle-modal="toggleModal"
  />
</template>

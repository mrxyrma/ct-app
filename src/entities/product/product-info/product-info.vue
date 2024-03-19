<script setup lang="ts">
  import { computed, ref } from 'vue';
  import AppPlaceholder from 'src/shared/images/placeholder.svg';
  import { ModalImage } from 'src/entities/modal-image';

  type Props = {
    productData: { [p: string]: string | number };
  };

  const props = defineProps<Props>();

  const isModal = ref(false);

  const src = computed(() => props.productData['src'] || AppPlaceholder);
  const paramsArr = computed(() => {
    const paramsArr = [];

    for (let key in props.productData) {
      if (!['_id', 'Артикул', 'Наименование', 'Серия', 'src'].includes(key)) {
        paramsArr.push(`${key}: ${props.productData[key]}`);
      }
    }

    return paramsArr;
  });

  function copyInMemory(text: string) {
    navigator.clipboard.writeText(text);
  }

  function toggleModal() {
    isModal.value = !isModal.value;
  }
</script>

<template>
  <div class="flex flex-col items-center gap-5 md:flex-row md:items-start">
    <img
      class="w-80 h-80 object-scale-down cursor-pointer"
      :src="src as string"
      alt="Фото изделия"
      @click="toggleModal"
    />
    <div class="flex flex-col">
      <h1
        class="text-3xl font-semibold cursor-alias"
        @click="() => copyInMemory(String(productData['Наименование']))"
      >
        {{ productData['Наименование'] }}
      </h1>
      <h2
        class="text-3xl text-stone-600 mt-2.5 cursor-alias"
        @click="() => copyInMemory(String(productData['Артикул']))"
      >
        {{ productData['Артикул'] }}
      </h2>
      <p class="mt-2.5 text-xl font-semibold">Технические характеристики:</p>
      <p
        v-for="param in paramsArr"
        class="mt-2.5"
      >
        {{ param }}
      </p>
    </div>
  </div>
  <modal-image
    v-if="isModal"
    :src="src as string"
    @toggle-modal="toggleModal"
  />
</template>

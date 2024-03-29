<script setup lang="ts">
  import { isUndefined } from 'lodash';
  import AppPlaceholder from 'src/shared/images/placeholder.svg';
  import { AppModal } from 'src/shared/ui';
  import { computed, ref, watchEffect } from 'vue';

  type Props = {
    productData: { [p: string]: string | number };
  };

  const props = defineProps<Props>();

  const isModal = ref(false);
  const src = ref(AppPlaceholder);

  const paramsArr = computed(() => {
    const paramsArr = [];

    for (const key in props.productData) {
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

  watchEffect(() => {
    if (!isUndefined(props.productData['src'])) src.value = props.productData['src'] as string;
  });
</script>

<template>
  <div class="flex flex-col items-center gap-5 md:flex-row md:items-start">
    <img
      class="w-80 h-80 object-scale-down cursor-pointer"
      :src="src as string"
      alt="Фото изделия"
      @error="src = AppPlaceholder"
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
  <app-modal
    v-if="isModal"
    :src="src as string"
    @toggle-modal="toggleModal"
  />
</template>

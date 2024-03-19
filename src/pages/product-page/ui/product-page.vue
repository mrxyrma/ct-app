<script setup lang="ts">
  import { AccessoryItem, ProductInfo } from 'src/entities/product';
  import { useRoute } from 'vue-router';
  import { computed, ref, watchEffect } from 'vue';
  import { useProductsStore } from 'src/shared/stores/products-store.ts';
  import { AppSpinner } from 'src/shared/ui';

  const route = useRoute();
  const productStore = useProductsStore();
  const { fetchProducts } = productStore;

  const allAccessories = ref([]);
  const loading = ref(false);

  const category = computed(() => route.params.category as string);
  const product = computed(() => route.params.product as string);
  const productData = computed(() => productStore.products.find(item => item['Артикул'] == product.value) || {});
  const accessoriesData = computed(() =>
    allAccessories.value.filter(item => {
      if (typeof productData.value['Серия'] === 'string') {
        return productData.value['Серия'].split(', ').includes(item['Серия']);
      }
    })
  );
  const isAccessoryExist = computed(() => Boolean(allAccessories.value.length));

  if (!productStore.products.length) {
    fetchProducts(category.value);
    fetchAccessories(category.value);
  }

  watchEffect(() => fetchAccessories(category.value));

  async function fetchAccessories(value: string) {
    loading.value = true;

    if (productData.value['Серия']) {
      await import(`../../../shared/data/accessories/${value}.json`)
        .then(res => {
          allAccessories.value = res.default;
        })
        .catch(e => console.log(e));
    }

    loading.value = false;
  }
</script>

<template>
  <app-spinner v-if="loading" />
  <div
    v-else
    class="max-w-screen-xl"
  >
    <product-info :product-data="productData" />
    <div class="mt-7">
      <h3 class="text-2xl font-semibold mb-2">Аксессуары:</h3>
      <ul
        v-if="isAccessoryExist"
        class="grid gap-1 mt-2"
      >
        <accessory-item
          v-for="accessory in accessoriesData"
          :key="accessory['_id']"
          :name="accessory['Наименование']"
          :order_num="accessory['Артикул']"
          :src="accessory['src']"
        />
      </ul>
      <p v-else>Аксессуары пока не добавлены, либо отсутствуют</p>
    </div>
  </div>
</template>

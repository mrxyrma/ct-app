import { defineStore } from 'pinia';
import type { Product } from 'src/shared/types';
import { ref } from 'vue';

export const useProductsStore = defineStore('productsStore', () => {
  const products = ref<Product[]>([]);
  const loading = ref(false);

  async function fetchProducts(value) {
    loading.value = true;
    products.value = [];

    await import(`../data/products/${value}.json`)
      .then(res => products.value.push(...res.default))
      .catch(e => console.log(e));

    loading.value = false;
  }

  return { products, loading, fetchProducts };
});

import { defineStore } from 'pinia';
import type { Product } from 'src/shared/types';
import { ref } from 'vue';

export const useProductsStore = defineStore('productsStore', () => {
  const products = ref<Product[]>([]);
  const visibleProducts = ref<Product[]>([]);
  const loading = ref(false);

  async function fetchProducts(value: string) {
    loading.value = true;

    await import(`../data/products/${value}.json`)
      .then(res => {
        products.value = res.default;
        visibleProducts.value = res.default;
      })
      .catch(e => console.log(e));

    loading.value = false;
  }

  return {
    products,
    visibleProducts,
    loading,
    fetchProducts,
  };
});

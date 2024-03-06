<script setup lang="ts">
  import { SearchItems } from 'src/features';
  import { FilterForm } from 'src/widgets/filter-form';
  import ProductItem from 'src/features/product-item/product-item.vue';
  import { useCategoryCardsStore } from 'src/shared/stores/category-cards-store.ts';
  import { useProductsStore } from 'src/shared/stores/products-store.ts';
  import { AppSpinner } from 'src/shared/ui';
  import { computed, onMounted, watch } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();
  const category = computed(() => route.params.category as string);

  const categoryStore = useCategoryCardsStore();
  const categoryTitle = computed(() => {
    const title = categoryStore.cards.find(item => item.link === category.value)?.title;
    if (typeof title === 'string') document.title = title;
    return title;
  });

  const productsStore = useProductsStore();

  watch(category, () => productsStore.fetchProducts(category.value));
  onMounted(() => {
    if (!productsStore.products.length) {
      productsStore.fetchProducts(category.value);
    }
  });
</script>

<template>
  <main class="max-w-screen-2xl mx-auto p-5">
    <app-spinner v-if="productsStore.loading" />

    <div v-else>
      <search-items />
      <h1 class="text-center mt-5 text-2xl font-bold">
        {{ categoryTitle }}
      </h1>
      <div class="flex flex-col gap-5 mt-3 sm:flex-row">
        <filter-form />

        <ul>
          <h3 class="text-xl font-semibold">Возможные варианты:</h3>
          <product-item
            v-for="product in productsStore.visibleProducts"
            :key="product['_id']"
            :order-num="product['Артикул']"
            :name="product['Наименование']"
          />
        </ul>
      </div>
    </div>
  </main>
</template>

import { defineStore } from 'pinia';
import { computed, reactive, ref } from 'vue';

export const useProductsStore = defineStore('productsStore', () => {
  const products = ref<{ [key: string]: string | number }[]>([]);
  const visibleProducts = ref<{ [key: string]: string | number }[]>([]);
  const filters = reactive<{ [key: string]: (number | string)[] }>({});
  const loading = ref(false);
  const searchValue = ref('');

  const fieldsetTitles = computed<string[]>(() => {
    //Список полей таблицы, которые игнорируются в филдсетах
    const ignoreTitles = ['_id', 'Артикул', 'Наименование', 'src', 'Серия', 'Примечание'];

    //Массив с заголовками филдсетов (шапка таблицы)
    const titles = products.value.reduce((acc: any[], curr) => {
      Object.keys(curr)
        .filter(key => !ignoreTitles.includes(key))
        .filter(key => !acc.includes(key))
        .forEach(key => acc.push(key));

      return acc;
    }, []);

    titles.forEach(item => (filters[item] = []));

    return titles;
  });

  function filterItems() {
    searchValue.value = '';

    visibleProducts.value = products.value.filter(item =>
      fieldsetTitles.value.every(title => {
        if (item[title] !== undefined) return filters[title].includes(item[title]);
        else return true;
      })
    );
  }

  function searchItems() {
    const checkedInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input:checked');
    checkedInputs.forEach(item => (item.checked = false));

    visibleProducts.value = products.value.filter(
      item =>
        String(item['Артикул']).toUpperCase().includes(searchValue.value.toUpperCase()) ||
        String(item['Наименование']).toUpperCase().includes(searchValue.value.toUpperCase())
    );
  }

  async function fetchProducts(value: string) {
    loading.value = true;
    searchValue.value = '';

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
    searchValue,
    filters,
    fieldsetTitles,
    loading,
    fetchProducts,
    filterItems,
    searchItems,
  };
});

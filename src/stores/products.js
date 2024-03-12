// myStore.js
import { defineStore } from 'pinia';

export const useMyStore = defineStore('myStore', {
  state: () => ({
    products: [],
    categories: [],
    filteredProducts: [],
  }),
  actions: {
    async fetchData() {
      try {
        const [productsResponse, categoriesResponse] = await Promise.all([
          fetch('http://localhost:3000/products'),
          fetch('http://localhost:3000/categories'),
        ]);

        const [productsData, categoriesData] = await Promise.all([
          productsResponse.json(),
          categoriesResponse.json(),
        ]);
        this.products = productsData;
        this.categories = categoriesData;
        this.filteredProducts = [...this.products]; // Khởi tạo filteredProducts với tất cả các sản phẩm
      } catch (error) {
        console.error('Lỗi khi tải dữ liệu:', error);
      }
    },  

    filterProductsByCategory(categoryId) {
      if (categoryId === 0) {
        this.filteredProducts = [...this.products];
      } else {
        this.filteredProducts = this.products.filter(
          (product) => product.category_id == categoryId
        );
      }
      console.log([...this.products]);
    },
  },
});

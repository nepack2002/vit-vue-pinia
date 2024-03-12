<!-- MyComponent.vue -->
<template>
  <div class="py-10 bg-slate-100">
    <div class="mug w-[75%] mx-auto mb-28">
      <div
        class="w-full h-[150px] md:h-[300px] bg-cover bg-no-repeat bg-center bg-[url('./img/bannerproductmobile.webp')] md:bg-[url('./img/bannerproduct900.webp')] lg:bg-[url('./img/bannerproduct.webp')]"
      ></div>
      <div>
        <!-- Category filter buttons -->
        <div class="py-10 flex flex-wrap gap-6">
          <button
            @click="selectCategory(0)"
            :class="{ active: selectedCategory === 0 }"
            class="bg-white py-2 px-4 rounded-xl hover:bg-black hover:text-white"
          >
            All Categories
          </button>
          <button
            v-for="category in myStore.categories"
            :key="category.id"
            @click="selectCategory(category.id)"
            :class="{ active: selectedCategory === category.id }"
            class="bg-white py-2 px-4 rounded-xl hover:bg-black hover:text-white"
          >
            {{ category.name }}
          </button>
        </div>

        <div
          v-if="myStore.filteredProducts && myStore.filteredProducts.length"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <!-- Display your data here -->
          <div v-for="product in myStore.filteredProducts" :key="product.id">
            <div class="product-card p-3 pb-5 bg-white">
              <div
                class="h-[330px] sm:h-[370px] bg-cover bg-center mb-7"
                :style="{ backgroundImage: 'url(' + product.image + ')' }"
              >
                <router-link
                  :to="{ name: 'detail', params: { id: product.id } }"
                  ><div
                    class="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-500 relative group"
                  >
                    <div
                      class="absolute bg-white text-gray-900 w-11/12 text-center tracking-wider py-4 px-8 font-semibold hover:bg-opacity-80 left-1/2 hidden group-hover:block group-hover:animate-fadeIn -translate-x-1/2 bottom-4"
                    >
                      EXPLORE
                    </div>
                  </div>
                </router-link>
              </div>
              <div class="text-center font-semibold text-lg">
                <a href=""> {{ product.name }} </a>
              </div>
              <div class="text-red-600 text-center">${{ product.price }}</div>
            </div>
          </div>
        </div>
        <div v-else>không có gì</div>
      </div>
    </div>
  </div>
</template>



<script>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useMyStore } from "../stores/products";

export default {
  setup() {
    const myStore = useMyStore();
    const selectedCategory = ref(null);
    const router = useRouter();

    onMounted(() => {
      myStore.fetchData();
      if (
        window.performance &&
        window.performance.navigation.type === 1 &&
        window.location.hash === ""
      ) {
        // Chuyển hướng đến trang /product
        window.location.href = "/product";
      }
    });

    const selectCategory = (categoryId) => {
      selectedCategory.value = categoryId;

      if (categoryId === 0) {
        router.push({ name: "Product" });
        myStore.filterProductsByCategory(0);
        return;
      }

      myStore.filterProductsByCategory(categoryId); //thực hiện hàm trong store sẽ duyệt categoryID và trả về filteredProducts rồi thực hiện vòng for ở template để trả về các sản phẩm
      console.log(categoryId);
      //lay id cua category
      const selectedCategoryObject = myStore.categories.find(
        (category) => category.id === categoryId
      );
      //bo khoang trong va cho lowerCase
      if (selectedCategoryObject) {
        const formattedCategoryName = selectedCategoryObject.name
          .replace(/\s+/g, "-")
          .toLowerCase();
        //doi ten router
        router.push({
          name: "ProductCategory",
          params: { category: formattedCategoryName },
        });
      }
    };

    return {
      myStore,
      selectedCategory,
      selectCategory,
    };
  },
};
</script>

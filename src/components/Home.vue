<template>
  <main>
    <div
      class="w-full h-[600px] bg-cover bg-no-repeat bg-center flex items-end md:items-center justify-center md:justify-start text-center md:text-left md:bg-right ssm:bg-right bg-[url('./img/banner.webp')]"
    >
      <div class="text-white mx-32 w-[410px]">
        <h1 class="text-4xl md:text-5xl">WELCOME TO OUR WEBSITE</h1>
        <h2 class="text-base md:text-xl py-3">
          Discover the secret to effortless, head-turning hairstyles with
          Nepack's premium grooming essentials
        </h2>
        <button
          class="bg-white hover:bg-slate-300 mb-10 md:mb-0 p-2 px-20 text-black text-xl"
        >
          SHOP NOW
        </button>
      </div>
    </div>
    <div class="w-full overflow-hidden bg-best-product">
      <h1
        class="text-center text-4xl font-semibold p-10 py-5 sm:p-10 tracking-widest"
      >
        FEATURE PRODUCTS
      </h1>
      <div
        class="grid grid-cols-1 ssm:grid-cols-2 md:grid-cols-4 mx-20 md:mx-16 xl:mx-40 2xl:mx-56 justify-between max-h-[250px] ssm:max-h-full overflow-y-auto"
      >
        <div class="best p-10">
          <img
            class="hover:animate-moveUpDown"
            src="//blumaan.com/cdn/shop/files/HHSv2.png?v=1700260673"
            alt="Banner 1"
          />
        </div>
        <div class="best p-10">
          <img
            class="hover:animate-moveUpDown"
            src="//blumaan.com/cdn/shop/files/HVTSv2.png?v=1700260673"
            alt="Banner 1"
          />
        </div>
        <div class="best p-10">
          <img
            class="hover:animate-moveUpDown"
            src="//blumaan.com/cdn/shop/files/THCSv2.png?v=1700260672"
            alt="Banner 2"
          />
        </div>
        <div class="best p-10">
          <img
            class="hover:animate-moveUpDown"
            src="//blumaan.com/cdn/shop/files/DSKv2.png?v=1700260673"
            alt="Banner 3"
          />
        </div>
      </div>
    </div>
    <div
      class="runningbanner bg-black text-white flex items-center h-10 overflow-hidden"
    >
      <div class="running-text animate-slideRight whitespace-nowrap">
        NOURISHES HAIR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GENTLE
        FORMULA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CRUELTY
        FREE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PARABEN
        FREE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NOURISHES
        HAIR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GENTLE
        FORMULA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CRUELTY
        FREE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PARABEN
        FREE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NOURISHES
        HAIR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GENTLE
        FORMULA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CRUELTY
        FREE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PARABEN
        FREE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NOURISHES
        HAIR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GENTLE
        FORMULA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CRUELTY
        FREE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PARABEN
        FREE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </div>
    <div class="new-product"></div>
    <div class="story">
      <div class="flex justify-center items-center">
        <div class="px-16 md:px-32 lg:px-64 xl:px-96 py-20 text-center">
          <div class="text-3xl mb-6 font-semibold tracking-widest">
            OUR BEGINNINGS
          </div>
          <div class="text-gray-500 leading-7 mb-6">
            When BluMaan started, our mission has always been to help you find
            your personal style through the power of hair styling. We also
            believe that in order to achieve the best hairstyle possible your
            hair needs to be at optimum health. All our products are made in the
            USA with ingredients that will nourish your hair and are safe to use
            on a daily basis.
          </div>
          <div class="text-gray-500 leading-7 mb-6">
            We are here to help and guide you to achieve a look that is unique
            to you - through information and products that are catered for you.
          </div>
          <div>
            <a
              class="text-blue-500 font-medium relative after:absolute after:bottom-0 after:left-0 after:bg-blue-600 after:h-[1.5px] after:w-full"
              href=""
              >READ FULL STORY</a
            >
          </div>
        </div>
      </div>
    </div>

    <!-- feature  -->
    <div class="subheadline flex justify-center items-center mb-24">
      <div class="subheadline-deco-line w-8 h-px bg-gray-400"></div>
      <div class="subheadline-lable text-xl font-medium px-3 tracking-widest">
        FEATURE PRODUCTS
      </div>
      <div class="subheadline-deco-line w-8 h-px bg-gray-400"></div>
    </div>
    <div class="mug w-[65%] mx-auto mb-24">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div
          v-for="product in featureProducts"
          :key="product"
          class="product-card"
        >
          <div class="product-card p-3 pb-5 bg-white">
            <div
              class="h-[330px] sm:h-[450px] bg-cover bg-center mb-7"
              :style="{ backgroundImage: 'url(' + product.image + ')' }"
            >
              <a href=""
                ><div
                  class="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-500 relative group"
                >
                  <div
                    class="absolute bg-white text-gray-900 w-11/12 text-center tracking-wider py-4 px-8 font-semibold hover:bg-opacity-80 left-1/2 hidden group-hover:block group-hover:animate-fadeIn -translate-x-1/2 bottom-4"
                  >
                    EXPLORE
                  </div>
                </div>
              </a>
            </div>
            <div class="text-center font-semibold text-lg">
              <a href=""> {{ product.name }} </a>
            </div>
            <div class="text-red-600 text-center">${{ product.price }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- more product  -->
    <div class="subheadline flex justify-center items-center mb-24">
      <div class="subheadline-deco-line w-8 h-px bg-gray-400"></div>
      <div class="subheadline-lable text-xl font-medium px-3 tracking-widest">
        MORE PRODUCTS
      </div>
      <div class="subheadline-deco-line w-8 h-px bg-gray-400"></div>
    </div>
    <div class="mug w-[85%] mx-auto mb-24 text-center">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <div
          v-for="product in moreProducts"
          :key="product"
          class="product-card"
        >
          <div class="product-card p-3 pb-5 bg-white">
            <div
              class="h-[330px] sm:h-[370px] bg-cover bg-center mb-7"
              :style="{ backgroundImage: 'url(' + product.image + ')' }"
            >
              <a href=""
                ><div
                  class="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-500 relative group"
                >
                  <div
                    class="absolute bg-white text-gray-900 w-11/12 text-center tracking-wider py-4 px-8 font-semibold hover:bg-opacity-80 left-1/2 hidden group-hover:block group-hover:animate-fadeIn -translate-x-1/2 bottom-4"
                  >
                    EXPLORE
                  </div>
                </div>
              </a>
            </div>
            <div class="text-center font-semibold text-lg">
              <a href=""> {{ product.name }} </a>
            </div>
            <div class="text-red-600 text-center">${{ product.price }}</div>
          </div>
        </div>
      </div>
      <a class="font-extrabold tracking-widest text-2xl" href="/product"
        >. . .</a
      >
    </div>
    <!-- subscribe to -->
    <div
      class="subscribe h-[350px] w-[90%] mx-auto bg-[#1d1f2e] my-24 flex items-center justify-center text-white flex-col gap-6"
    >
      <div class="uppercase text-gray-500">
        sign up and get free hair control
      </div>
      <div class="uppercase text-4xl">grooming shop</div>
      <div class="flex items-center space-x-3">
        <input
          type="text"
          placeholder="ENTER YOUR EMAIL"
          class="px-1 py-1 sm:px-4 sm:py-2 border border-slate-500 bg-[#1d1f2e]"
        />
        <button
          type="button"
          class="px-1 py-1 sm:px-2 sm:py-2 font-semibold bg-white text-black uppercase"
        >
          subscribe
        </button>
      </div>
    </div>
  </main>
</template>
<script>
import { onMounted, computed } from "vue";
import { useMyStore } from "../stores/products";

export default {
  setup() {
    const myStore = useMyStore();

    onMounted(async () => {
      await myStore.fetchData();
    });

    const featureProducts = computed(() => {
      return myStore.products.filter((c) => c.id == 1 || c.id == 8);
    });

    const moreProducts = computed(() => {
      return myStore.products.filter(
        (c) => c.id == 6 || c.id == 7 || c.id == 5
      );
    });

    return {
      myStore,
      featureProducts,
      moreProducts,
    };
  },
};
</script>


<style scoped>
.best:hover {
  background-image: url("../assets/img/anhnen.webp");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top;
}
.new-product {
  background-image: url("../assets/img/bm-curlcream-launch-homepage-banner-desktop_1944x.webp");
  position: relative;
  background-size: cover;
  background-position: bottom center;
  height: 600px;
}
@media screen and (max-width: 768px) {
  .new-product {
    background-image: url("../assets/img/anhdt.webp");
    height: 900px;
  }
}
@media screen and (max-width: 500px) {
  .new-product {
    height: 500px;
  }
}
</style> 
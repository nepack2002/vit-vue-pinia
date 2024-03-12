<template>
  <div class="px-32 py-20">
    <div v-if="product">
      <div class="flex">
        <div class="basis-1/3">
          <h1 class="text-3xl font-extrabold tracking-wide mb-10">
            {{ product.name }}
          </h1>
          <h2 class="text-gray-500 leading-7 mb-10">
            {{ product.description }}
          </h2>
          <span class="flex mb-5 gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
              />
            </svg>
            Cash on delivery also available</span
          >
          <span class="flex gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>
            We deliver it to you
          </span>
        </div>
        <div class="basis-1/3"><img :src="product.image" alt="" /></div>

        <div class="basis-1/3 flex flex-col py-12 px-5">
          <div class="flex justify-around basis-1/2">
            <div class="text-3xl font-semibold">$ {{ product.price }}</div>
            <div class="rating text-2xl flex gap-2">
              <span class="star" data-value="1">&#9733;</span>
              <span class="star" data-value="2">&#9733;</span>
              <span class="star" data-value="3">&#9733;</span>
              <span class="star" data-value="4">&#9733;</span>
              <span class="star" data-value="5">&#9733;</span>
            </div>
          </div>
          <div class="flex flex-col items-center basis-1/2">
            <div class="flex flex-row items-center w-full">
              <button class="bg-gray-200 py-2 w-full text-3xl">-</button>
              <span class="py-4 w-full rounded-lg text-center">1</span>
              <button class="bg-gray-200 py-2 w-full text-2xl">+</button>
            </div>
            <button class="bg-gray-200 font-semibold w-full py-3 m-3">
              Add to wish list
            </button>

            <button class="bg-black text-white font-semibold w-full py-3 m-3">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>Loading product {{ $route.params.id }}...</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      product: null,
    };
  },
  created() {
    fetch("http://localhost:3000/products/" + this.$route.params.id)
      .then((response) => response.json())
      .then((data) => (this.product = data));
  },
};
</script>
<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
  created() {
    // console.log(document.querySelector("h1"));
  },
  mounted() {
    // console.log(document.querySelector("h1"));
  },
};
</script>

<template>
  <div id="root">
    <div class="container max-w-screen-2xl text-base mx-auto font-pop-pin">
      <Header />
      <router-view></router-view>
      <Footer />
    </div>
  </div>
</template>


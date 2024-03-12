<template>
  <div>
    <button @click="navigateToNewRoute">Go to New Route</button>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToNewRoute() {
      // Use $router.push to navigate to a new route
      this.$router.push("/new-route");
    },
  },
};
</script>
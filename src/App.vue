<template>
  <router-view />
</template>

<script>
let brand = " | Durain Online";

export default {
  name: "App",

  watch: {
    $route(to) {
      document.title = to.meta.title + brand;
    }
  }
};
</script>
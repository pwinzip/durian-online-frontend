<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>-->
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
<template>
  <a v-bind:href="aHref" class="logo">
    <img src="../assets/image/logo.png">
  </a>
</template>

<script>
import Vue from "vue"
export default {
  data() {
    return {
      aHref: "http://localhost:" + location.port,
    };
  },
  methods: {}
};
// var vm = new Vue({
//   el:'.logo',
//   data:{
//     aHref : "http://localhost:8081/"+location,
//     imgSrc : "../assets/image/logo.png"
//   }
// });
</script>
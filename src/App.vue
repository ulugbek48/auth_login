<template>
  <div class="container">
    <div class="row">
      <div class="col-8 offset-2">
      <appTablet></appTablet>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>
<script setup>
import { ref } from 'vue';
import appTablet from "./components/ui/app-table.vue";

const headers = ref([
  {title: "Name", value: "name"},
  {title: "Year", value: "year"},
  {title: "Color", value: "color"},
  {title: "Price", value: "price"},
])
const cars = ref([
  {id: 1, name: "Cobalt", year: 2020, color: "white", price: 15000}
])
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: sans-serif;
  list-style: none;
}

</style>

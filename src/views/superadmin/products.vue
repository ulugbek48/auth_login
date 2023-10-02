<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-3 my-3" v-for="(item, index) in showData" :key="index">
          <div class="card">
            <div class="card-body text-center">
              <img :src="item.image" class="img" alt="">
            </div>
            <div class="card-header">
              <h4 class="text-center">{{ item.title }}</h4>
            </div>
            <div class="card-body text-center">
              <button @click="viewDetails(item.id)" class="btn btn-success">View detail</button>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <button class="btn btn-info mb-3" @click="bos" v-if="hasMoreProducts">
          Show more {{ products.length - showData.length }}
        </button>
      </div>
    </div>
</template>
  

<script setup>
import { useRouter } from 'vue-router';
import { ref, computed } from 'vue';
import axios from 'axios';

let count = ref(0);
count = 8;
let showData = ref([]);

const router = useRouter()
const products = ref([])
const viewDetails = (id) => {
    router.push({name: 'single_product', params:{id: id}})
}
const addProduct = () => {
    axios.get("https://fakestoreapi.com/products").then(res=>{
        products.value = res.data;
        showData.value = res.data.slice(0, count);
    }).catch(err=>{
        console.log(err);
    })
}
addProduct()


const bos = () => {
  showData.value = products.value.slice(0, count);
  count += 4;
};

const hasMoreProducts = computed(() => {
  return showData.value.length < products.value.length;
});

</script>

<style lang="scss" scoped>
.img{
    width: 100%;
    height: 250px;
}
</style>
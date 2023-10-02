<template>
    <div class="container-fluid">
        <create_product ref="createProduct"/>
        <h2>Products</h2>
        <!-- <button @click="openCreateModal">create Product</button> -->
        <!-- <button @click="openDialog">Open Dialog</button> -->
        <button class="btn btn-success" @click="addProduct">add product</button>
        <div class="table">
            <AppTable :headers="header" :body="products">
                <template #body_action="{item}">
                    <button class="btn btn-warning" @click="editProduct(item)">edit</button>
                    <button class="btn btn-danger" @click="deleteProduct(item)">delete</button>
                </template>
            </AppTable>
        </div>
    </div>
</template>

<script setup>
import create_product from '@/components/pages/create_product.vue';
import { ref } from 'vue';
import AppTable from '@/components/ui/app-table.vue';

const createProduct = ref()

const header = ref([
    {title: 'T/R', value: 'id'},
    {title: 'Name', value: 'name'},
    {title: 'Price', value: 'price'},
    {title: 'Brand', value: 'brand'},
    {title: 'Group', value: 'group'},
    {title: 'Description', value: 'desc'},
    {title: 'Actions', value: 'action'},
])

const products = ref([
    {id: 1, name: 'Iphone 15 pro', price: '1100$', brand: 'Apple', group: 'phone', desc: 'Expensive'},
    {id: 2, name: 'Sony Xperia 5 mark 2', price: '500$', brand: 'Sony', group: 'phone', desc: 'Good'},
    {id: 3, name: 'Samsung Note 10', price: '700$', brand: 'Samsung', group: 'phone', desc: 'Expensive'},
    {id: 4, name: 'Iphone 15', price: '900$', brand: 'Apple', group: 'phone', desc: 'Expensive'},
])

const addProduct = () => {
    createProduct.value.openModal(products.value, 'array')
}

const editProduct = (item) => {
    createProduct.value.openModal(item, 'object')
}

const deleteProduct = (item) => {
    const index = products.value.indexOf(item);
    if (index !== -1) {
        products.value.splice(index, 1);
    }
}


// const openDialog = () => {
//     createProduct.value.openDialog()
// }
</script>

<style lang="scss" scoped>
.table{
    width: 80vw;
}
</style>
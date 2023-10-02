<template>
    <section class="sidebar">
        <div class="sidebar_left">
            <Sidebar :items="sidebar_items" />
        </div>
        <div class="sidebar_right">
            <router-view></router-view>
        </div>
    </section>
</template>

<script setup>
import Sidebar from '../../components/layout/Sidebar.vue';
import { ref } from 'vue';

const sidebar_items =ref([
    {id: 1, title: "Brands", path: "/brands", meta: "brands" },
    {id: 1, title: "Texno", path: "/tovar" },
    {id: 1, title: "Groups", path: "/grou", meta: "grou" },
    {id: 1, title: "Products", path: "/products" },

])
</script>

<style lang="scss" scoped>
.sidebar{
    width: 100%;
    display: flex;
}

.sidebar_left{
    width: 300px;
    height: 100vh;
}

.sidebar_right{
    width: calc(100% - 300px);
    height: 100vh;
    overflow: auto;
}
</style>
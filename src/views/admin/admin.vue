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
import Sidebar from '@/components/layout/Sidebar.vue';
import { ref } from 'vue';

const sidebar_items =ref([
    {id: 1, title: 'Students', path: '/students' },
    {id: 1, title: 'Teachers', path: '/teachers' },
    {id: 1, title: 'Groups', path: '/groups' },
    {id: 1, title: 'Users', path: '/users' },
    {id: 1, title: 'People', path: '/people' },
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
<template>
    <div class="sidebar">
        <router-link class="sidebar_link" :to="items.path" v-for="(items, index) in items" :key="index">
            {{ items.title }}
        </router-link>
    </div>
</template>

<script setup>
const props = defineProps({
    items: {
        type: Array,
    }
})

</script>

<style lang="scss" scoped>
$color1: #000016;
$color2: #fff;
.sidebar{
    width: 100%;
    height: 100%;
    background-color: $color1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    .sidebar_link {
        width: 100%;
        padding: 10px 15px;
        text-decoration: none;
        border-radius: 5px;
        background-color: $color2;
        color: $color1;                                 
    }
}
</style>
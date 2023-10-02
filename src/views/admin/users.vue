<template>
    <div class="user">
        <div class="user_item">
            <div class="user_item-table">
                <AppTable :headers="headers" :body="users">
                    <template #body_company="{item}">
                        <span>{{ item.company.name }}</span>
                    </template>
                    <template #body_address="{item}">
                        <span>{{ item.address.city }}</span>
                    </template>
                </AppTable>
            </div>
        </div>
    </div>
</template>

<script setup>
import AppTable from '../../components/ui/app-table.vue';
import { ref } from 'vue';
import axios from 'axios';

const users = ref([])

const headers = ref([
    {title: "Name", value: 'name'},
    {title: "Username", value: 'username'},
    {title: "Phone number", value: 'phone'},
    {title: "Website", value: 'website'},
    {title: "Email", value: 'email'},
    {title: "Company", value: 'company'},
    {title: "Address", value: 'address'},
])
const getUsers = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      users.value = res.data;
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
getUsers();
</script>

<style lang="scss" scoped>
.user {
    width: 100%;
    min-height: 100vh;
    background-color: rgb(229, 231, 231);
}

/* Добавьте стили для таблицы здесь */
</style>

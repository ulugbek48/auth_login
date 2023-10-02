<template>
    <AppModal v-model="dialog">
        <h1>Modal</h1>
        <form action="">
            <input type="text" v-model="forms.name" class="form-control my-2" placeholder="Name" name="" id="">
            <input type="text" v-model="forms.price"  class="form-control my-2" placeholder="Price" name="" id="">
            <select name="" id="" class="form-control my-2" v-model="forms.brand">
                <option value="apple">Apple</option>
                <option value="samsung">Samsung</option>
                <option value="sony">Sony</option>
            </select>
            <select name="" id="" class="form-control my-2" v-model="forms.group">
                <option value="laptop">Laptop</option>
                <option value="phone">Phone</option>
            </select>
            <textarea name="" class="form-control my-2" placeholder="description" id="" cols="30" rows="10" v-model="forms.desc"></textarea>
            <button class="btn btn-info" @click="saveForm">save</button>
        </form>
    </AppModal>
</template>

<script setup>
import AppModal from '../ui/app-modal.vue';
import { ref, watch } from 'vue';
import Notification from '@/plugins/Notification';
const dialog = ref(false)
const products = ref([])
const forms = ref({
    name: "",
    price: null,
    brand: "",
    group: "",
    desc: "",
})
watch(dialog, (value)=>{
    if(!value){
        forms.value = {}
    }
})
const openModal = (value, title) => {
    // if(value) products.value = value
    if(title == 'array') {
        products.value = value
    } else if(title == 'object')
    {
        forms.value = {...value}
    }
    dialog.value = true
}

const openDialog = () => {
    console.log('dialog')
}
const saveForm = (e) => {
    e.preventDefault();
    if (!forms.value.id) {
        products.value.push({ id: products.value.length + 1, ...forms.value });
        Notification("Product created", "success");
    } else if (forms.value.id !== undefined) {
        products.value[forms.value.id - 1] = { ...forms.value };
        Notification("Product edited", "warning");
    } else {
        console.log("forms.value.id:", forms.value.id);
        products.value.splice(forms.value.id - 1, 1);
        Notification("Product deleted", "danger");
    }
    dialog.value = false;
    forms.value = {};
};


defineExpose({openModal, openDialog})
</script>

<style lang="scss" scoped>

</style>

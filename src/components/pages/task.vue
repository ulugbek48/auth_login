<template>
  <AppModal v-model="dialog">
    <h1 v-if="!forms._id">Add User</h1>
    <h1 v-else>Edit User</h1>
    <Form @submit="save">

      <Field rules="required" :modelValue="forms.first_name" v-slot="{ errors }" name="FirstName">
        <input
        type="text"
        v-model="forms.first_name"
        class="form-control my-2"
        placeholder="FirstName"
      />
      <p class="text-danger" v-if="errors && errors.length">
        {{ errors[0] }}
      </p>
      </Field>
      
      <Field rules="required" :modelValue="forms.last_name" v-slot="{ errors }" name="LastName">
        <input
        type="text"
        v-model="forms.last_name"
        class="form-control my-2"
        placeholder="LastName"
      />
      <p class="text-danger" v-if="errors && errors.length">
        {{ errors[0] }}
      </p>
      </Field>
      
      <Field rules="required" :modelValue="forms.username" v-slot="{ errors }" name="UserName">
        <input
        type="text"
        v-model="forms.username"
        class="form-control my-2"
        placeholder="UserName"
        />
        <p class="text-danger" v-if="errors && errors.length">
          {{ errors[0] }}
        </p>
      </Field>
      
      <Field rules="required" :modelValue="forms.email" v-slot="{ errors }" name="Email">
        <input
        type="email"
        v-model="forms.email"
        class="form-control my-2"
        placeholder="Email"
        />
        <p class="text-danger" v-if="errors && errors.length">
          {{ errors[0] }}
        </p>
      </Field>
      
      <Field rules="required" :modelValue="forms.password" v-slot="{ errors }" name="Password">
        <input
        type="password"
        v-model="forms.password"
        class="form-control my-2"
        placeholder="Password"
        />
        <p class="text-danger" v-if="errors && errors.length">
          {{ errors[0] }}
        </p>
      </Field>
      
      <Field rules="required" :modelValue="forms.confirm_password" v-slot="{ errors }" name="Confirm_password">
        <input
        type="password"
        v-model="forms.confirm_password"
        class="form-control my-2"
        placeholder="Confirm_password"
        />
        <p class="text-danger" v-if="errors && errors.length">
          {{ errors[0] }}
        </p>
      </Field>
      <button class="btn btn-success">save</button>
    </Form>
  </AppModal>
</template>

<script setup>
import AppModal from "../ui/app-modal.vue";
import { ref, watch } from "vue";
import http from "../../plugins/axios.js";
import Notification from "@/plugins/Notification.js";
import { Form, Field } from 'vee-validate';
const dialog = ref(false);


const forms = ref({
  first_name: "",
  last_name: "",
  username: "",
  email: "",
  password: "",
  confirm_password: "",
});

watch(dialog, (value) => {
  if (!value) {
    forms.value = {};
  }
});
const openModal = (value) => {
  if (value) forms.value = { ...value };
  dialog.value = true;
};

const save = (e) => {
  e.preventDefault();
  try {
    if (!forms.value._id) {
      http
        .post("/user/registration", {
          first_name: forms.value.first_name,
          last_name: forms.value.last_name,
          username: forms.value.username,
          email: forms.value.email,
          password: forms.value.password,
          confirm_password: forms.value.confirm_password,
        })
        .then((res) => {
          console.log(res);
          Notification("user created", "success");
          setTimeout(() => {
            location.reload();
          }, 3000);
        });
    } else {
      http
        .put(`/user/update/${forms.value._id}`, {
          first_name: forms.value.first_name,
          last_name: forms.value.last_name,
          username: forms.value.username,
          email: forms.value.email,
          password: forms.value.password,
        })
        .then((res) => {
          console.log(res);
          Notification("user edited", "warning");
          setTimeout(() => {
            location.reload();
          }, 3000);
        });
    }
  } catch (err) {
    console.log(err);
  }
};
defineExpose({ openModal });
</script>

<style lang="scss" scoped></style>
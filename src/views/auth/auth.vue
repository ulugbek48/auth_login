<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3">
        <div class="card">
          <div class="card-header">
            <h2 class="text-center">Login</h2>
          </div>
          <div class="card-body">
            <Form @submit="save" id="auth">
              <Field rules="required" :modelValue="info.email" v-slot="{ errors }" name="Email">
                <input
                type="text" v-model="info.email"
                placeholder="Name"
                class="form-control my-2"/>
                <p class="text-danger" v-if="errors && errors.length">
                {{ errors[0] }}
                </p>
              </Field>
              <Field rules="required" :modelValue="info.password" v-slot="{ errors }" name="Password">
                <input
                  type="password" v-model="info.password"
                  placeholder="Password"
                  class="form-control my-2"/>
                  <p class="text-danger" v-if="errors && errors.length">
                    {{ errors[0] }}
                  </p>
              </Field>
              <div class="card-footer">
                <Button :title="'success'">save</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from "vue-router";
  import Button from '@/components/ui/button.vue'
  import { Form, Field} from "vee-validate"
  import http from '@/plugins/axios'
  
  const info = ref({
    email: "",
    password: null,
  });
  const router = useRouter();
  
  const save = () => {
    http.post("/user/login", {
      email: info.value.email,
      password: info.value.password,
    })
    .then((res) => {
      if (res.data.accessToken) {
        localStorage.setItem("token", res.data.accessToken);
        router.push({ name: "people" });
      }
    })
    .catch((err) => {
      console.log(err);
    });

    // if (info.value.username == "admin" && info.value.password == 1234) {
    //   // Navigate to the admin page
    //   router.push({ name: "admin" });
    // } else if (info.value.username == "superadmin" && info.value.password == 5678) {
    //   // Navigate to the superadmin page
    //   router.push({ name: "superadmin" });
    // } else {
    //   alert("Wrong Name or Password");
    // }
  }
  </script>
  
  <style lang="scss" scoped>
  .input-field {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
  
  .login-link {
    display: inline-block;
    padding: 12px 24px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    font-size: 18px;
    transition: background-color 0.3s ease;
  }
  
  .login-link:hover {
    background-color: #0056b3;
    cursor: pointer;
  }
  </style>
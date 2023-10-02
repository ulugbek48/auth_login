import { createRouter, createWebHistory } from "vue-router";
import auth from "./auth.js"
import admin from './admin.js';
import superadmin from './superadmin.js';
import not_found from './not_found.js';
const routes = [
  auth,
  admin,
  superadmin,
  not_found,
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  const name = to.name === "auth";
  if (!token && !name) {
    return next({ name: "auth" });
  } else {
    if (token && name) {
      return next({ name: "admin" });
    } else {
      next();
    }
  }
});

export default router
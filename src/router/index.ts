import { createRouter, createWebHistory } from "vue-router";
import IndexPage from "../view/IndexPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        name: "首页",
        path: "/",
        component: IndexPage,
      }
    ],
  });
  
  export default router;
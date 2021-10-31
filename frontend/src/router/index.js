import { createRouter, createWebHistory } from "vue-router";
import WhatTodos from "../views/WhatTodos.vue";

const routes = [
  {
    path: "/",
    name: "WhatTodos",
    component: WhatTodos,
  },
  {
    path: "/addwhattodo",
    name: "AddWhatTodo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AddWhatTodo.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

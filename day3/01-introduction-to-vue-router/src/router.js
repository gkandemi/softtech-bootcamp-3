import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About";
import Contact from "@/views/Contact";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home
  },
  {
    name: "About",
    path: "/about",
    component: About
  },
  {
    name: "Contact",
    path: "/contact",
    component: Contact
  },
  {
    name: "TaskDetail",
    path: "/task/:id/:content",
    meta: {
      permissionKey: "task_p_view_update_delete"
    },
    component: () => import("@/views/TaskDetail")
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});

router.beforeEach((to, from, next) => {
  console.log("EACH", to, from);
  next();
});

export default router;

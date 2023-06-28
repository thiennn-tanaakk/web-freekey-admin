import { createRouter, createWebHistory } from "vue-router";
import { useRootStore } from "@/store/root";
import { storeToRefs } from "pinia";

// 1. Define route components.
// These can be imported from other files
const Home = () => import("@/pages/index.vue");
const About = () => import("@/pages/about.vue");
const NotFound = () => import("@/pages/_404.vue");

const Login = () => import("@/pages/login.vue");

export enum RouteName {
  "LOGIN" = "LOGIN",
  "HOME" = "HOME",
  "ABOUT" = "ABOUT",
  "NOT_FOUND" = "NOT_FOUND",
}

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  // Non-Auth Routes
  {
    path: "/login",
    name: RouteName.LOGIN,
    component: Login,
    meta: {
      requiresAuth: false,
    },
  },

  {
    path: "/",
    name: RouteName.HOME,
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/about",
    name: RouteName.ABOUT,
    component: About,
    meta: { requiresAuth: true },
  },
  { path: "/:catchAll(.*)", name: RouteName.NOT_FOUND, component: NotFound },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
  strict: true,
});

router.beforeEach(async (to, _from, next) => {
  const rootStore = useRootStore();
  await rootStore.getUser();
  const { user } = storeToRefs(rootStore);

  if (to.name === RouteName.LOGIN && user.value && user.value.username) {
    next({ name: RouteName.HOME });
    return false;
  }

  if (!to.meta.requiresAuth) {
    next();
    return true;
  }

  if (!user.value || !user.value.username) {
    next({ name: RouteName.LOGIN });
    return false;
  }
  next();
  return true;
});

export default router;

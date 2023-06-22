import { createRouter, createWebHistory } from "vue-router";

// 1. Define route components.
// These can be imported from other files
const Home = () => import("@/pages/index.vue");
const About = () => import("@/pages/about.vue");
const NotFound = () => import("@/pages/_404.vue");

const Login = () => import("@/pages/login.vue");

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  // Non-Auth Routes
  { path: "/login", name: "Login", component: Login },

  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/:catchAll(.*)", name: "NotFound", component: NotFound },
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

export default router;

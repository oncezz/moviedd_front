const routes = [
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue"),
  },
  {
    path: "/",
    component: () => import("pages/main.vue"),
  },
  {
    path: "/signup",
    component: () => import("pages/signup.vue"),
  },
  {
    path: "/login",
    component: () => import("pages/login.vue"),
  },
  {
    path: "/otprequest",
    component: () => import("pages/otprequest.vue"),
  },
];

export default routes;

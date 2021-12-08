const routes = [
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue"),
  },
  {
    path: "/home",
    component: () => import("src/pages/home.vue"),
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
  {
    path: "/forgetpassword1",
    component: () => import("pages/forgetpasswordstep1.vue"),
  },
  {
    path: "/forgetpassword2",
    component: () => import("pages/forgetpasswordstep2.vue"),
  },
  {
    path: "/forgetpassword3",
    component: () => import("pages/forgetpasswordstep3.vue"),
  },
  {
    path: "/",
    component: () => import("pages/landing.vue"),
  },
  {
    path: "/profile",
    component: () => import("pages/profile.vue"),
  },
  {
    path: "/profile2",
    component: () => import("pages/profile2.vue"),
  },
  {
    path: "/profile3",
    component: () => import("pages/profile3.vue"),
  },
  {
    path: "/profile4",
    component: () => import("pages/profile4.vue"),
  },
  {
    path: "/favorite",
    component: () => import("pages/favorite.vue"),
  },
  {
    path: "/movielist",
    component: () => import("pages/movielist.vue"),
  },
  {
    path: "/search",
    component: () => import("pages/search.vue"),
  },
];

export default routes;

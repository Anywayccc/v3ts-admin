export default [
  {
    path: "/",
    component: () => import("@/iview/index.vue"),
    name: "layout",
    meta: {
      title: "layout",
      hidden: true, // 是否显示菜单 true:不显示 false:显示
      icon: "House",
    },
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: () => import("@/page/home.vue"),
        name: "home",
        meta: {
          title: "首页", // 菜单名称
          hidden: true, // 是否显示菜单 false:不显示 true:显示
          icon: "House", // 菜单的图标
        },
      },
      // {
      //   path: "/screen",
      //   component: () => import("@/page/screen/index.vue"),
      //   name: "screen",
      //   meta: {
      //     title: "数据大屏",
      //     hidden: true, // 是否显示菜单 true:不显示 false:显示
      //     icon: "Monitor",
      //   },
      // },
    ],
  },
  {
    path: "/404",
    component: () => import("@/page/404.vue"),
    name: "404",
    meta: {
      title: "404",
      hidden: false, // 是否显示菜单 true:不显示 false:显示
    },
  },
  {
    path: "/login",
    component: () => import("@/page/login.vue"),
    name: "login",
    meta: {
      title: "登录",
      hidden: false, // 是否显示菜单 true:不显示 false:显示
    },
  },
  {
    path: "/:pathMatch(.*)",
    redirect: "/404",
    name: "NotFound",
    meta: {
      title: "404",
      hidden: false, // 是否显示菜单 true:不显示 false:显示
    },
  },
];

export default [
  {
    path: "/screen",
    component: () => import("@/page/screen/index.vue"),
    name: "screen",
    meta: {
      title: "数据大屏",
      hidden: true,
      icon: "Monitor",
    },
  },
  {
    path: "/management",
    component: () => import("@/iview/index.vue"),
    name: "management",
    meta: {
      title: "权限管理",
      hidden: true,
      icon: "User",
    },
    redirect: "/management/user",
    children: [
      {
        path: "/management/user",
        component: () => import("@/page/management/user.vue"),
        name: "user",
        meta: {
          title: "用户权限",
          hidden: true,
          icon: "Avatar",
        },
      },

      {
        path: "/management/roles",
        component: () => import("@/page/management/roles.vue"),
        name: "roles",
        meta: {
          title: "人员权限",
          hidden: true,
          icon: "Key",
        },
      },
      {
        path: "/management/menu",
        component: () => import("@/page/management/menu.vue"),
        name: "menu",
        meta: {
          title: "菜单权限",
          hidden: true,
          icon: "Money",
        },
      },
    ],
  },
  {
    path: "/goodsManagement",
    component: () => import("@/iview/index.vue"),
    name: "goodsManagement",
    meta: {
      title: "商品管理",
      hidden: true,
      icon: "Goods",
    },
    redirect: "/goodsManagement/attributes",
    children: [
      {
        path: "/goodsManagement/attributes",
        component: () => import("@/page/goodsManagement/attribute.vue"),
        name: "attributes",
        meta: {
          title: "属性管理",
          hidden: true,
          icon: "Magnet",
        },
      },

      {
        path: "/goodsManagement/brand",
        component: () => import("@/page/goodsManagement/brand.vue"),
        name: "brand",
        meta: {
          title: "品牌管理",
          hidden: true,
          icon: "ShoppingBag",
        },
      },
      {
        path: "/goodsManagement/sku",
        component: () => import("@/page/goodsManagement/sku.vue"),
        name: "sku",
        meta: {
          title: "SKU",
          hidden: true,
          icon: "Tickets",
        },
      },
      {
        path: "/goodsManagement/spu",
        component: () => import("@/page/management/roles.vue"),
        // component: () => import("@/page/goodsManagement/spu.vue"),
        name: "spu",
        meta: {
          title: "SPU",
          hidden: true,
          icon: "Operation",
        },
      },
    ],
  },
];

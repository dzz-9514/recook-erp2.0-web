import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

export const Layout = () => import("@/layout/index.vue");

// 静态路由
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/redirect",
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/views/redirect/index.vue"),
      },
    ],
  },
  //注册流程
  {
    path: "/bank",
    component: () => import("@/views/login/bank/index.vue"),
    meta: { hidden: true },
    children: [
      {
        path: "bankCreate",
        name: "bankCreate",
        component: () => import("@/views/login/bank/bankCreate.vue"),
        meta: { hidden: true },
      },
      {
        path: "bankInfo",
        name: "bankInfo",
        component: () => import("@/views/login/bank/bankInfo.vue"),
        meta: { hidden: true },
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    meta: { hidden: true },
  },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
        name: "Dashboard",
        meta: {
          title: "dashboard",
          icon: "homepage",
          affix: true,
          hidden: true,
        },
      },
      {
        path: "401",
        component: () => import("@/views/error-page/401.vue"),
        meta: { hidden: true },
      },
      {
        path: "404",
        component: () => import("@/views/error-page/404.vue"),
        meta: { hidden: true },
      },
    ],
  },
  {
    path: "/orderManagement",
    component: Layout,
    name: "orderManagement",
    // redirect: "/orderManagement/index",
    meta: {
      title: "订单管理",
      icon: "menuOrder",
      hidden: false,
      keepAlive: true,
    },
    children: [
      {
        path: "/bizSaleContract",
        component: () => import("@/views/orderManagement/bizSaleContract/index.vue"),
        name: "bizSaleContract",
        meta: {
          title: "销售管理",
          icon: "bizSaleContract",
          hidden: false,
        },
      },
      {
        path: "/bizPurchaseContract",
        component: () => import("@/views/orderManagement/bizPurchaseContract/index.vue"),
        name: "bizPurchaseContract",
        meta: {
          title: "采购管理",
          icon: "bizPurchaseContract",
          hidden: false,
          keepAlive: true,
        },
      },
      {
        path: "/bizPurchaseContractDocumentary",
        component: () => import("@/views/orderManagement/bizPurchaseContractDocumentary/index.vue"),
        name: "bizPurchaseContractDocumentary",
        meta: {
          title: "跟单信息",
          icon: "bizPurchaseContractDocumentary",
          hidden: false,
          keepAlive: true,
        },
      },
      {
        path: "/bizInspectionApplication",
        component: () => import("@/views/orderManagement/bizInspectionApplication/index.vue"),
        name: "bizInspectionApplication",
        meta: {
          title: "验货申请",
          icon: "bizInspectionApplication",
          hidden: false,
          keepAlive: true,
        },
      },
      {
        path: "/bizShipping",
        component: () => import("@/views/orderManagement/bizShipping/index.vue"),
        name: "bizShipping",
        meta: {
          title: "订舱管理",
          icon: "bizShipping",
          hidden: false,
          keepAlive: true,
        },
      },
      {
        path: "/bizShippingModification",
        component: () => import("@/views/orderManagement/bizShippingModification/index.vue"),
        name: "bizShippingModification",
        meta: {
          title: "出运修改单",
          icon: "bizShippingModification",
          hidden: false,
          keepAlive: true,
        },
      },
      {
        path: "/bizAccounting",
        component: () => import("@/views/orderManagement/bizAccounting/index.vue"),
        name: "bizAccounting",
        meta: {
          title: "做账管理",
          icon: "bizAccounting",
          hidden: false,
          keepAlive: true,
        },
      },
      {
        path: "/bizPaymentApplication",
        component: () => import("@/views/orderManagement/bizPaymentApplication/index.vue"),
        name: "bizPaymentApplication",
        meta: {
          title: "付款申请",
          icon: "bizPaymentApplication",
          hidden: false,
          keepAlive: true,
        },
      },
      {
        path: "/bizFinancePaymentApplication",
        component: () => import("@/views/orderManagement/bizFinancePaymentApplication/index.vue"),
        name: "bizFinancePaymentApplication",
        meta: {
          title: "费用付款申请",
          icon: "bizFinancePaymentApplication",
          hidden: false,
          keepAlive: true,
        },
      },
      {
        path: "/bizPayFollow",
        component: () => import("@/views/orderManagement/bizPayFollow/index.vue"),
        name: "bizPayFollow",
        meta: {
          title: "货款催缴",
          icon: "bizPayFollow",
          hidden: false,
          keepAlive: true,
        },
      },
      {
        path: "/bizCustomerCollectionClaim",
        component: () => import("@/views/orderManagement/bizCustomerCollectionClaim/index.vue"),
        name: "bizCustomerCollectionClaim",
        meta: {
          title: "收汇认领",
          icon: "bizCustomerCollectionClaim",
          hidden: false,
          keepAlive: true,
        },
      },
    ],
  },
  {
    path: "/dataCenter",
    component: Layout,
    name: "dataCenter",
    meta: {
      title: "资料中心",
      icon: "menuDataCenter",
      hidden: false,
      keepAlive: true,
    },
    children: [
      {
        path: "/bizClient",
        component: () => import("@/views/dataCenter/bizClient/index.vue"),
        name: "bizClient",
        meta: {
          title: "客户资料",
          icon: "bizClient",
          hidden: false,
        },
      },
      {
        path: "/bizFactory",
        component: () => import("@/views/dataCenter/bizFactory/index.vue"),
        name: "bizFactory",
        meta: {
          title: "工厂资料",
          icon: "bizFactory",
          hidden: false,
        },
      },
      {
        path: "/bizShipCompany",
        component: () => import("@/views/dataCenter/bizShipCompany/index.vue"),
        name: "bizShipCompany",
        meta: {
          title: "物流公司",
          icon: "bizShipCompany",
          hidden: false,
        },
      },
      {
        path: "/bizProduct",
        component: () => import("@/views/dataCenter/bizProduct/index.vue"),
        name: "bizProduct",
        meta: {
          title: "产品资料",
          icon: "bizProduct",
          hidden: false,
        },
      },
      {
        path: "/bizExpoProduct",
        component: () => import("@/views/dataCenter/bizExpoProduct/index.vue"),
        name: "bizExpoProduct",
        meta: {
          title: "公域产品",
          icon: "bizExpoProduct",
          hidden: false,
        },
      },
    ],
  },
  {
    path: "/system",
    component: Layout,
    name: "system",
    meta: {
      title: "系统管理",
      icon: "menuSystem",
      hidden: false,
      keepAlive: true,
    },
    children: [
      {
        path: "user",
        component: () => import("@/views/system/user/index.vue"),
        name: "user",
        meta: {
          title: "用户管理",
          icon: "user",
          hidden: false,
        },
      },
      {
        path: "dept",
        component: () => import("@/views/system/dept/index.vue"),
        name: "dept",
        meta: {
          title: "部门管理",
          icon: "dept",
          hidden: false,
        },
      },
      {
        path: "role",
        component: () => import("@/views/system/role/index.vue"),
        name: "role",
        meta: {
          title: "角色功能",
          icon: "role",
          hidden: false,
        },
      },
      {
        path: "/bizDict",
        component: () => import("@/views/system/bizDict/index.vue"),
        name: "bizDict",
        meta: {
          title: "业务字典",
          icon: "bizDict",
          hidden: false,
        },
      },
      {
        path: "printManage",
        component: () => import("@/views/system/printManage/index.vue"),
        name: "printManage",
        meta: {
          title: "打印模版",
          icon: "printManage",
          hidden: false,
        },
      },
    ],
  },
  // {
  //   path: "/cost",
  //   component: Layout,
  //   redirect: "/cost",
  //   meta: {
  //     title: "费用管理",
  //     icon: "cost",
  //     hidden: false,
  //     keepAlive: true
  //   },
  //   children: [
  //     {
  //       path: "",
  //       component: () => import("@/views/cost/account/index.vue"),
  //       name: "account",
  //       meta: {
  //         title: "账户信息",
  //         icon: "account",
  //         hidden: false,
  //         keepAlive: true
  //       }
  //     },
  //     {
  //       path: "accountDetails",
  //       component: () => import("@/views/cost/accountDetails/index.vue"),
  //       name: "accountDetails",
  //       meta: {
  //         title: "账户明细",
  //         icon: "accountDetails",
  //         hidden: false,
  //         keepAlive: true
  //       }
  //     },
  //     {
  //       path: "withdraw",
  //       component: () => import("@/views/cost/withdraw/index.vue"),
  //       name: "withdraw",
  //       meta: {
  //         title: "提现记录",
  //         icon: "withdraw",
  //         hidden: false,
  //         keepAlive: true
  //       }
  //     },
  //   ]
  // },
  // 外部链接
  /*{
        path: '/external-link',
        component: Layout,
        children: [
            {
                path: 'https://www.cnblogs.com/haoxianrui/',
                meta: { title: '外部链接', icon: 'link' }
            }
        ]
    }*/
  // 多级嵌套路由
  /* {
         path: '/nested',
         component: Layout,
         redirect: '/nested/level1/level2',
         name: 'Nested',
         meta: {title: '多级菜单', icon: 'nested'},
         children: [
             {
                 path: 'level1',
                 component: () => import('@/views/nested/level1/index.vue'),
                 name: 'Level1',
                 meta: {title: '菜单一级'},
                 redirect: '/nested/level1/level2',
                 children: [
                     {
                         path: 'level2',
                         component: () => import('@/views/nested/level1/level2/index.vue'),
                         name: 'Level2',
                         meta: {title: '菜单二级'},
                         redirect: '/nested/level1/level2/level3',
                         children: [
                             {
                                 path: 'level3-1',
                                 component: () => import('@/views/nested/level1/level2/level3/index1.vue'),
                                 name: 'Level3-1',
                                 meta: {title: '菜单三级-1'}
                             },
                             {
                                 path: 'level3-2',
                                 component: () => import('@/views/nested/level1/level2/level3/index2.vue'),
                                 name: 'Level3-2',
                                 meta: {title: '菜单三级-2'}
                             }
                         ]
                     }
                 ]
             },
         ]
     }*/
];

/**
 * 创建路由
 */
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes as RouteRecordRaw[],
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

/**
 * 重置路由
 */
export function resetRouter() {
  router.replace({ path: "/login" });
}
/**
 * 跳转路由
 */
export function nextRouter(ruoterPath: any, type: any = "push") {
  router[type]({ path: ruoterPath });
}
export default router;

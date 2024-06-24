[
  {
    "path": "/payCommission",
    "component": "Layout",
    "name": "payCommission",
    "meta": {
      "title": "发佣管理",
      "icon": "payCommission",
      "hidden": false,
      "keepAlive": true
    },
    'children': [
      {
        "path": "makingOrders",
        "component": "payCommission/makingOrders",
        "name": "makingOrders",
        "meta": {
          "title": "制单管理",
          "icon": "makingOrders",
          "hidden": false,
          "keepAlive": true
        },
      },
      {
        "path": "settlementOrders",
        "component": "payCommission/settlementOrders",
        "name": "settlementOrders",
        "meta": {
          "title": "结算单管理",
          "icon": "settlementOrders",
          "hidden": false,
          "keepAlive": true
        },
      },
      {
        "path": "reviewCommission",
        "component": "payCommission/reviewCommission",
        "name": "reviewCommission",
        "meta": {
          "title": "发佣审核",
          "icon": "reviewCommission",
          "hidden": false,
          "keepAlive": true
        },
      },
      {
        "path": "issueCommission",
        "component": "payCommission/issueCommission",
        "name": "issueCommission",
        "meta": {
          "title": "发放佣金",
          "icon": "issueCommission",
          "hidden": false,
          "keepAlive": true
        },
      },
    ]
  },
  {
    "path": "/plan",
    "component": "Layout",
    "meta": {
      "title": "项目管理",
      "icon": "plan",
      "hidden": false,
      "keepAlive": true
    },
    "children": [
      {
        "path": "type",
        "component": "plan/type/index",
        "name": "planType",
        "meta": {
          "title": "项目配置",
          "icon": "planType",
          "hidden": false,
          "keepAlive": true
        }
      },
      {
        "path": "info",
        "component": "plan/info/index",
        "name": "planInfo",
        "meta": {
          "title": "接包管理",
          "icon": "planInfo",
          "hidden": false,
          "keepAlive": true
        }
      },
    ]
  },
  {
    "path": "/user",
    "component": "Layout",
    "meta": {
      "title": "用户管理",
      "icon": "user",
      "hidden": false,
      "keepAlive": true
    },
    "children": [
      {
        "path": "",
        "component": "user/index",
        "name": "user",
        "meta": {
          "title": "接包用户",
          "icon": "user",
          "hidden": false,
          "keepAlive": true
        }
      }
    ]
  },
  {
    "path": "/sign",
    "component": "Layout",
    "meta": {
      "title": "结算管理",
      "icon": "sign",
      "hidden": false,
      "keepAlive": true
    },
    "children": [
      {
        "path": "product",
        "component": "sign/Product/index",
        "name": "signProduct",
        "meta": {
          "title": "发佣记录查询",
          "icon": "signProduct",
          "hidden": false,
          "keepAlive": true
        }
      },
      {
        "path": "combo",
        "component": "sign/combo/index",
        "name": "signCombo",
        "meta": {
          "title": "服务费退费查询",
          "icon": "signCombo",
          "hidden": false,
          "keepAlive": true
        }
      },
      {
        "path": "content",
        "component": "sign/content/index",
        "name": "signContent",
        "meta": {
          "title": "退票记录查询",
          "icon": "signContent",
          "hidden": false,
          "keepAlive": true
        }
      },
      {
        "path": "banner",
        "component": "sign/banner/index",
        "name": "signBanner",
        "meta": {
          "title": "财务对账详情",
          "icon": "signBanner",
          "hidden": false,
          "keepAlive": true
        }
      },
      {
        "path": "banner",
        "component": "sign/banner/index",
        "name": "signBanner",
        "meta": {
          "title": "ATO发佣账单",
          "icon": "signBanner",
          "hidden": false,
          "keepAlive": true
        }
      },
      {
        "path": "banner",
        "component": "sign/banner/index",
        "name": "signBanner",
        "meta": {
          "title": "ATO发佣记录查询",
          "icon": "signBanner",
          "hidden": false,
          "keepAlive": true
        }
      },
      {
        "path": "banner",
        "component": "sign/banner/index",
        "name": "signBanner",
        "meta": {
          "title": "灵工发佣详情",
          "icon": "signBanner",
          "hidden": false,
          "keepAlive": true
        }
      },
    ]
  },
  
  {
    "path": "/order",
    "component": "Layout",
    "meta": {
      "title": "账户管理",
      "icon": "order",
      "hidden": false,
      "keepAlive": true
    },
    "children": [
      {
        "path": "invoice",
        "component": "order/invoice/index",
        "name": "orderInvoice",
        "meta": {
          "title": "流动人员配置",
          "icon": "orderInvoice",
          "hidden": false,
          "keepAlive": true
        }
      },
      {
        "path": "info",
        "component": "order/info/index",
        "name": "orderInfo",
        "meta": {
          "title": "账户支付密码",
          "icon": "orderInfo",
          "hidden": false,
          "keepAlive": true
        }
      },
      {
        "path": "info",
        "component": "order/info/index",
        "name": "orderInfo",
        "meta": {
          "title": "员工管理",
          "icon": "orderInfo",
          "hidden": false,
          "keepAlive": true
        }
      },
      {
        "path": "info",
        "component": "order/info/index",
        "name": "orderInfo",
        "meta": {
          "title": "角色列表",
          "icon": "orderInfo",
          "hidden": false,
          "keepAlive": true
        }
      },
    ]
  },
  {
    "path": "/cases",
    "component": "Layout",
    "name": "cases",
    "meta": {
      "title": "费用管理",
      "icon": "cases",
      "hidden": false,
      "keepAlive": true
    },
    'children': [
      {
        "path": "",
        "component": "cases/index",
        "name": "cases",
        "meta": {
          "title": "账户充值信息",
          "icon": "cases",
          "hidden": false,
          "keepAlive": true
        },
      },
      {
        "path": "",
        "component": "cases/index",
        "name": "cases",
        "meta": {
          "title": "账户费用明细",
          "icon": "cases",
          "hidden": false,
          "keepAlive": true
        },
      },
    ]
  },
  {
    "path": "/explore",
    "component": "Layout",
    "name": "explore",
    "meta": {
      "title": "报表管理",
      "icon": "explore",
      "hidden": false,
      "keepAlive": true
    },
    'children': [
      {
        "path": "",
        "component": "explore/index",
        "name": "explore",
        "meta": {
          "title": "导入列表",
          "icon": "explore",
          "hidden": false,
          "keepAlive": true
        },
      },
      {
        "path": "",
        "component": "explore/index",
        "name": "explore",
        "meta": {
          "title": "导出列表",
          "icon": "explore",
          "hidden": false,
          "keepAlive": true
        },
      }
    ]
  },


  
  {
    "path": "/information",
    "component": "Layout",
    "name": "information",
    "meta": {
      "title": "",
      "icon": "information",
      "hidden": false,
      "keepAlive": true
    },
    'children': [
      {
        "path": "",
        "component": "information/index",
        "name": "information",
        "meta": {
          "title": "资讯管理",
          "icon": "information",
          "hidden": false,
          "keepAlive": true
        },
      }
    ]
  },
  {
    "path": "/address",
    "component": "Layout",
    "name": "address",
    "meta": {
      "title": "",
      "icon": "address",
      "hidden": false,
      "keepAlive": true
    },
    'children': [
      {
        "path": "",
        "component": "address/index",
        "name": "address",
        "meta": {
          "title": "地址管理",
          "icon": "address",
          "hidden": false,
          "keepAlive": true
        },
      }
    ]
  },
  {
    "path": "/system",
    "component": "Layout",
    "meta": {
      "title": "系统管理",
      "icon": "system",
      "hidden": true,
      "keepAlive": true
    },
    "children": [
      {
        "path": "dictionary",
        "component": "system/dictionary/index",
        "name": "systemDictionary",
        "meta": {
          "title": "字典配置",
          "icon": "systemDictionary",
          "hidden": false,
          "keepAlive": true
        }
      },
      {
        "path": "menu",
        "component": "system/menu/index",
        "name": "systemMenu",
        "meta": {
          "title": "菜单权限",
          "icon": "systemMenu",
          "hidden": false,
          "keepAlive": true
        }
      },
      {
        "path": "personnel",
        "component": "system/personnel/index",
        "name": "systemPersonnel",
        "meta": {
          "title": "人员配置",
          "icon": "systemPersonnel",
          "hidden": false,
          "keepAlive": true
        }
      },
      {
        "path": "role",
        "component": "system/role/index",
        "name": "systemRole",
        "meta": {
          "title": "角色配置",
          "icon": "systemRole",
          "hidden": false,
          "keepAlive": true
        }
      },
      {
        "path": "company",
        "component": "system/company/index",
        "name": "systemCompany",
        "meta": {
          "title": "公司管理",
          "icon": "systemCompany",
          "hidden": false,
          "keepAlive": true
        },
      }
    ]
  },
  {
    "path": "/customer",
    "component": "Layout",
    "name": "customer",
    "meta": {
      "title": "",
      "icon": "customer",
      "hidden": false,
      "keepAlive": true
    },
    'children': [
      {
        "path": "",
        "component": "customer/index",
        "name": "customer",
        "meta": {
          "title": "客户管理",
          "icon": "customer",
          "hidden": false,
          "keepAlive": true
        },
      }
    ]
  },
]
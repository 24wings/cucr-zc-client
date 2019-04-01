export const navigation = [
  {
    text: "博客",
    icon: "home",
    items: [
      { text: "文章", path: "/admin/blog/post" },
      { text: "分类", path: "/admin/blog/post-cate" },
      { text: "标签", path: "/admin/blog/post-tag" }
    ]
  },
  {
    text: "SQL注入",
    icon: "home",
    items: [
      { text: "主机管理", path: "/admin/sql-inject/host" },
      { text: "sqlmap", path: "/admin/sql-inject/sqlmap" }
    ]
  },
  {
    text: "机构与权限",
    //path: '/admin/rbac',
    icon: "home",
    items: [
      { text: "组织管理", path: "/admin/rbac/org" },
      { text: "菜单管理", path: "/admin/rbac/menu" },
      { text: "角色管理", path: "/admin/rbac/role" },
      { text: "用户管理", path: "/admin/rbac/user" }
    ]
  },
  {
    text: "集群",
    icon: "computer",
    items: [
      { text: "Wokers", path: "/admin/worker/worker" },
      {
        text: "基础",
        items: [{ path: "/admin/worker/basic/position", text: "地点" }]
      }
    ]
  },
  {
    text: "渗透测试",
    icon: "floder",
    items: [{ text: "xss-test", path: "/admin/xss/xss-test" }]
  },
  {
    text: "Examples",
    icon: "folder",
    items: [
      {
        text: "Profile",
        path: "/profile"
      },
      {
        text: "Display Data",
        path: "/display-data"
      }
    ]
  }
];

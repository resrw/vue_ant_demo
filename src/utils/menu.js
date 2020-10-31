// 获取路由
export const getRouters = () => {
  // return new Promise((resolve, reject) => {
  return new Promise((resolve) => {
    resolve([
      {
        name: "system",
        path: "/system",
        hidden: false,
        component: "Layout",
        alwaysShow: true,
        meta: { title: "系统管理", icon: "setting", noCache: false },
        children: [
          {
            name: "user",
            path: "user",
            hidden: false,
            component: "system/User",
            meta: { title: "用户管理", icon: "user", noCache: false },
          },
          {
            name: "logs",
            path: "logs",
            hidden: false,
            component: "system/logs/Index",
            redirect: 'index',
            meta: { title: "日志管理", icon: "unordered-list", noCache: false },
            children: [
              {
                name: "login",
                path: "login",
                hidden: false,
                component: "system/logs/LoginLog",
                meta: { title: "登录日志", icon: "login", noCache: false },
              },
            ],
          },
        ],
      },
    ])
  })
}
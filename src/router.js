import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 公共路由
export const constantRoutes = [
    {
        name: "login",
        path: '/login',
        component: () => import('@/views/Login'),
        hidden: true
    },
    {
        name: "404",
        path: '/404',
        component: () => import('@/views/error/404'),
        hidden: true
    },
    {
        name: "Layout",
        path: '',
        hidden: false,
        component: () => import('@/layout/App'),
        alwaysShow: true,
        redirect: 'index',
        meta: { title: "首页", icon: "home", noCache: false },
        children: [
            {
                name: "index",
                path: "index",
                hidden: false,
                component: () => import('@/views/Index'),
                meta: { title: "首页", icon: "home", noCache: false },
            }
        ]
    },
    {
        path: "*",
        redirect: "/404",
        component: () => import("@/views/error/404"),
        hidden: true,
    }
]

export default new Router({
    // mode: 'history', // 去掉url中的#
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

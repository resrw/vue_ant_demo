import Layout from "@/layout/App";

export function routesUtil(routerList) {
    for (var key in routerList) {
        var router = routerList[key];
        if (router.component === "Layout") router.component = Layout;
        else router.component = loadView(router.component);
        if ((router.children || []).length) {
            routesUtil(router.children);
        }
    }
}

const loadView = (component) => {
    return () => import(`@/views/${component}.vue`);
};
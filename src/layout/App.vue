<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <div class="logo" />
      <app-menu :menu-list="menuList" mode="inline" theme="dark" />
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }">
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import AppMenu from "@/components/AppMenu";
import { routesUtil } from "../utils/router";
import { getRouters } from "../utils/menu";
import router from "@/router";

export default {
  components: {
    AppMenu,
  },
  created: function () {
    getRouters().then((res) => {
      routesUtil(res);
      this.menuList.push(...res);

      router.addRoutes(res); // 注册路由
    });
  },
  data() {
    return {
      menuList: [
        {
          key: "首页",
          title: "首页",
          name: "home",
          path: "/index",
          hidden: false,
          meta: { title: "首页", icon: "home", noCache: false },
        },
      ],
    };
  },
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
  },
};
</script>

<style>
#components-layout-demo-responsive {
  min-height: 100vh;
}
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>

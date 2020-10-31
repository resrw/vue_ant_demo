<template>
  <a-menu
    :default-selected-keys="['1']"
    :default-open-keys="['2']"
    :mode="mode"
    :theme="theme"
    :inline-collapsed="collapsed"
  >
    <template v-for="item in menuList">
      <sub-menu
        v-if="item.children"
        :key="item.path"
        :menu-info="item"
        :prefix="item.path + '/'"
        @click="routerLink"
      />
      <a-menu-item
        v-else-if="!item.hidden"
        :key="item.path"
        @click="routerLink"
      >
        <a-icon :type="item.meta.icon || ''" />
        <span v-html="item.meta.title" />
      </a-menu-item>
    </template>
  </a-menu>
</template>

<script>
import SubMenu from "./SubMenu";

export default {
  props: {
    menuList: {
      type: Array,
      required: true,
    },
    mode: {
      type: String,
      default: "vertical",
    },
    theme: {
      type: String,
      default: "light",
    },
  },
  components: {
    "sub-menu": SubMenu,
  },
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    routerLink: function (e) {
      if (this.$router.history.current.fullPath !== e.key)
        this.$router.push({ path: e.key });
    },
  },
};
</script>
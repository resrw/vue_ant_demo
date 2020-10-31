<template functional>
  <a-sub-menu :key="props.prefix + props.menuInfo.path">
    <span slot="title">
      <a-icon :type="props.menuInfo.meta.icon || ''" />
      <span v-html="props.menuInfo.meta.title" />
    </span>
    <template v-for="item in props.menuInfo.children">
      <a-menu-item
        v-if="!item.children"
        :key="props.prefix + item.path"
        v-on="listeners"
      >
        <!-- <a-icon :type="item.meta.icon || ''" /> -->
        <span v-html="item.meta.title" />
      </a-menu-item>
      <sub-menu
        v-else
        :key="props.prefix + item.path"
        :menu-info="item"
        :prefix="props.prefix + item.path + '/'"
        v-on="listeners"
      />
    </template>
  </a-sub-menu>
</template>

export default {
  props: ['menuInfo','prefix'],
};
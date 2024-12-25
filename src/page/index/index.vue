<template>
  <div class="trio-page">
    <!-- 默认布局 -->
    <div class="mixin-layout">
      <!-- 顶部菜单 -->
      <Header isNeedOption isNeedExit />
      <div class="trio-layout">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive" />
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" />
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/header/Header.vue";
export default {
  name: "PageIndex",
  components: {
    Header,
  },
};
</script>

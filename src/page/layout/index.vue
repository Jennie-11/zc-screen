<template>
  <div class="page-container">
    <keep-alive>
      <router-view class="avue-view" v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view class="avue-view" v-if="!$route.meta.keepAlive" />
  </div>
</template>
<script>
export default {
  name: "LayoutBox",
};
</script>

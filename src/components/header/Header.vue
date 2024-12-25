<template>
  <div class="ht-68 fx-bt-ct fx-sk wd-fl bg-e2a bd-ff-bt">
    <img class="head-bg" src="@/assets/login/head_name.png" />
    <Options v-if="isNeedOption" />
    <Exit v-bind="$attrs" />
  </div>
</template>
<script>
import Exit from "./Exit.vue";
import Options from "./Options.vue";
export default {
  name: "HeaderBox",
  props: {
    isNeedOption: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Exit,
    Options,
  },
};
</script>
<style lang="scss" scoped>
.head-bg {
  width: 510px;
  height: 76px;
  object-fit: contain;
}
</style>

<template>
  <div class="topic-box fx-ag-ct ht-48 pd-lf-16 pd-rt-16">
    <img src="@/assets/icons/arrow_1.png" class="ic-28 fx-sk" />
    <div class="title ft-24 cr-3ba ff-pz fx-sk mg-lt-12 mg-rt-12">
      {{ title }}
    </div>
    <!-- <div class="address">广州</div> -->
  </div>
</template>
<script>
export default {
  name: "TopicBox",
  props: {
    title: {
      type: String,
      default: "设备稼动率",
    },
  },
};
</script>
<style lang="scss" scoped>
.topic-box {
  background: linear-gradient(
    90deg,
    rgba(26, 126, 250, 0.25) 0%,
    rgba(26, 126, 250, 0) 100%
  );
  border-radius: 2px;
}
</style>

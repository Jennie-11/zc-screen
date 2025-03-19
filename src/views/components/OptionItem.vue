<template>
  <div
    class="option-item ps-rl ht-88 fx-fl fx-sk fx fx-ag-ct bd-rd-4 bd-fff-1 bg-ffc mg-rt-24 cs-pt of-hd ts-al"
    :class="[
      { 'bd-17a-1 cheeked': optionData.hardwareType == activeId },
      { abnormal: optionData.abnormalNum > 0 },
    ]"
    @click="changeOptionHandle"
  >
    <img class="ic-56 mg-rt-24" :src="getMenuImage()" />
    <div>
      <p class="ft-20 lh-20 cr-3ba mg-bt-12">
        {{ optionData.hardwareTypeStr }}
      </p>
      <p
        class="ft-24 lh-24 cr-bf0 fw-600"
        :class="{ 'cr-f3d': optionData.abnormalNum > 0 }"
      >
        {{
          optionData.abnormalNum > 0
            ? optionData.abnormalNum + "个异常"
            : "全部正常"
        }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "OptionItemBox",
  props: {
    optionData: {
      type: Object,
      default: () => {},
    },
    activeId: {
      type: Number,
      default: 0,
    },
  },
  data: () => ({}),
  methods: {
    getMenuImage() {
      let classname = "temperature";
      switch (this.optionData.hardwareType) {
        case 0:
          classname = "temperature";
          break;
        case 1:
          classname = "oxygen";
          break;
        case 2:
          classname = "humidity";
          break;
        case 3:
          classname = "dust";
          break;
        case 4:
          classname = "hydrogen";
          break;
        case 5:
          classname = "flame";
          break;
        default:
          classname = "temperature";
          break;
      }
      let srcUrl = require(`@/assets/icons/${classname}.png`);
      return srcUrl;
    },
    changeOptionHandle() {
      this.$emit("change-option", this.optionData);
    },
  },
};
</script>
<style lang="scss" scoped>
.option-item {
  padding: 16px 24px;

  &:last-child {
    margin-right: 0;
  }
  &::after {
    position: absolute;
    content: "";
    right: -43px;
    bottom: -43px;
    height: 86px;
    width: 86px;
    background: radial-gradient(
      circle at center,
      rgba(0, 191, 96, 0.15) 0%,
      rgba(255, 255, 255, 0) 80%
    );
  }
}
.cheeked {
  box-shadow: 0px 0px 16px 0px rgba(69, 128, 232, 0.25);
}
.abnormal {
  &::after {
    background: radial-gradient(
      circle at center,
      rgba(255, 56, 61, 0.15) 0%,
      rgba(255, 255, 255, 0) 80%
    );
  }
}
</style>

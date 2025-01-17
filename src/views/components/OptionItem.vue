<template>
  <div
    class="option-item ps-rl ht-88 fx-fl fx-sk fx fx-ag-ct bd-rd-4 bd-fff-1 bg-ffc mg-rt-24 cs-pt of-hd ts-al"
    :class="[
      { 'bd-17a-1': optionData.id == activeId },
      { abnormal: optionData.status == 2 },
    ]"
    @click="changeOptionHandle"
  >
    <img class="ic-56 mg-rt-24" :src="getMenuImage()" />
    <div>
      <p class="ft-20 lh-20 cr-3ba mg-bt-12">{{ optionData.label }}</p>
      <p
        class="ft-24 lh-24 cr-bf0 fw-600"
        :class="{ 'cr-f3d': optionData.status == 2 }"
      >
        {{ optionData.statusName }}
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
      type: String,
      default: "temperature",
    },
  },
  data: () => ({}),
  methods: {
    getMenuImage() {
      let srcUrl = require(`@/assets/icons/${this.optionData.id}.png`);
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

<template>
  <div class="options-box">
    <div
      class="option-item fx-ct-ct ft-18 mg-rt-16 bd-rd-4 cs-pt ts-al"
      :class="{ active: activeId == item.id }"
      v-for="item in optionList"
      :key="item.id"
      @click="changeOptionHandle(item)"
    >
      {{ item.label }}
    </div>
  </div>
</template>
<script>
export default {
  name: "OptionsBox",
  data: () => ({
    optionList: [
      {
        id: 1,
        label: "生产车间环境安全监测",
      },
      {
        id: 2,
        label: "3D打印设备统计分析",
      },
      {
        id: 3,
        label: "生产车间稼动率监测",
      },
      {
        id: 4,
        label: "机台运行状态监测",
      },
    ],
    activeId: 1,
  }),
  methods: {
    changeOptionHandle(item) {
      if (this.activeId == item.id) return;
      this.activeId = item.id;
    },
  },
};
</script>
<style lang="scss" scoped>
.options-box {
  flex: 1;
  width: 0;
  display: flex;
  align-items: center;
}
.option-item {
  font-family: "PanMen";
  width: 210px;
  height: 40px;
  transform: skew(-10deg);
  color: rgba(#030b1a, 0.2);
  background: linear-gradient(
    180deg,
    rgba(26, 126, 250, 0.06) 0%,
    rgba(26, 126, 250, 0.2) 100%
  );
  &:last-child {
    margin-right: 0;
  }
  &.active {
    color: #fff;
    background: linear-gradient(
      180deg,
      rgba(26, 126, 250, 0.3) 0%,
      rgba(26, 126, 250, 1) 100%
    );
  }
}
</style>

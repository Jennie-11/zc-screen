<template>
  <div class="tabs-box pd-24 bd-dd5-bt fx-sk">
    <el-tabs
      v-model="activeName"
      @tab-click="tabsChange"
      type="card"
      :class="{ 'un-scroll': tagProps.tagList.length < 8 }"
    >
      <el-tab-pane
        :key="item.name"
        v-for="item in tagProps.tagList"
        :name="item.name"
      >
        <div slot="label">
          <div class="ft-20 lh-20 cr-3ba mg-bt-8">{{ item.label }}</div>
          <div class="tab-text lh-20 ft-20 cr-bf0">
            {{ item.value }}{{ tagProps.unit }}
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: "TabsBox",
  props: ["tagProps"],
  data: () => ({
    activeName: "",
  }),
  computed: {},
  mounted() {},
  watch: {
    "tagProps.tagList": {
      handler(val) {
        this.activeName = val[0].name;
      },
      immediate: true,
    },
  },

  methods: {
    tabsChange(val) {
      this.$emit("tabsChange", val.name);
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep .el-tabs {
  .el-tabs__nav-wrap {
    padding: 0 64px;
  }
  .tab-text {
    font-family: "TenXun";
  }
  .el-tabs__item {
    padding: 16px;
    width: 221px;
    height: 88px;
    transition: all 0.3s;
    border: 1px solid #ebf1fc;
    background-color: #ebf1fc;
    border-radius: 4px;
    margin-right: 24px;
    &:last-child {
      padding-right: 0;
      margin-right: 0;
    }
    &:first-child {
      border-left: 1px solid #ebf1fc;
    }
    &.is-active {
      border: 1px solid #1a7efa;
    }
  }
  .el-tabs__nav-next,
  .el-tabs__nav-prev {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .el-icon-arrow-left,
  .el-icon-arrow-right {
    padding: 4px;
    font-weight: 600;
    border: 2px solid #1a7efa;
    border-radius: 50%;
    font-size: 20px;
    color: #1a7efa;
  }
  &.un-scroll {
    .el-tabs__nav-wrap {
      padding: 0 !important;
    }
  }
}
</style>

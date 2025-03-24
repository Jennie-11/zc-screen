<template>
  <div class="tabs-box pd-24 bd-dd5-bt fx-sk">
    <el-tabs
      v-if="tagProps.monitorInfoList"
      v-model="activeName"
      @tab-click="tabsChange"
      type="card"
      :class="{ 'un-scroll': tagProps.monitorInfoList.length < 8 }"
    >
      <el-tab-pane
        :key="item.monitorId"
        v-for="item in tagProps.monitorInfoList"
        :name="item.monitorId.toString()"
      >
        <div slot="label">
          <div class="ft-20 lh-20 cr-3ba mg-bt-8">
            {{ item.monitorName }}
          </div>
          <div
            class="tab-text lh-20 ft-20 cr-bf0"
            :class="item.measuringState > 0 ? 'cr-f3d' : ''"
          >
            <template v-if="tagProps.hardwareType != 5">
              {{ item.monitorValue || "-" }}{{ tagProps.monitorUnitStr }}
            </template>
            <template v-else>
              {{ item.measuringState > 0 ? "异常" : "正常" }}
            </template>
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
    "tagProps.monitorInfoList": {
      handler(val) {
        if (!val) {
          return;
        }
        this.activeName = val[0].monitorId.toString();
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
    min-width: 221px;
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

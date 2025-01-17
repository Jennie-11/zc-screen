<template>
  <div class="tabs-box pd-24 bd-dd5-bt fx-sk">
    <el-tabs
      v-model="activeMenu"
      type="card"
      :class="{ 'un-scroll': tagList.length < 8 }"
    >
      <el-tab-pane :key="item.value" v-for="item in tagList" :name="item.name">
        <div slot="label">
          <div class="ft-20 lh-20 cr-3ba mg-bt-8">{{ item.label }}</div>
          <div class="tab-text lh-20 ft-20 cr-bf0">{{ item.text }}</div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: "TabsBox",
  data: () => ({
    tagList: [
      {
        name: "1",
        label: "温度传感器-01",
        text: "25.48℃",
      },
      {
        name: "2",
        label: "温度传感器-02",
        text: "51.99℃",
      },
      {
        name: "3",
        label: "温度传感器-03",
        text: "51.99℃",
      },
      {
        name: "4",
        label: "温度传感器-04",
        text: "51.99℃",
      },
      {
        name: "5",
        label: "温度传感器-05",
        text: "51.99℃",
      },
      {
        name: "6",
        label: "温度传感器-06",
        text: "51.99℃",
      },
      {
        name: "7",
        label: "温度传感器-07",
        text: "51.99℃",
      },
      {
        name: "8",
        label: "温度传感器-08",
        text: "51.99℃",
      },
      {
        name: "9",
        label: "温度传感器-09",
        text: "51.99℃",
      },
      {
        name: "10",
        label: "温度传感器-10",
        text: "51.99℃",
      },
      {
        name: "11",
        label: "温度传感器-11",
        text: "51.99℃",
      },
    ],
    activeMenu: "1",
  }),
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

<template>
  <div class="option-card-box fx pd-24 fx-fl">
    <div class="fx-fl wd-0 fx fx-cl">
      <Topic :title="dataProps.monitorName + ' 瞬时值'" />
      <div class="flex-box fx-cl fx fx-ag-ct mg-tp-48 of-hd">
        <div
          class="normal-icon fx-fl"
          :class="dataProps.measuringState > 0 ? 'abnormal-icon' : ''"
        ></div>
        <div
          class="ft-48 lh-48 ff-tx mg-tp-40 mg-bt-28 cr-bf0"
          :class="dataProps.measuringState > 0 ? 'cr-f3d' : ''"
        >
          数值{{ dataProps.measuringState > 0 ? "异常" : "正常" }}
        </div>
        <div class="fw-600 cr-3ba ft-24 pd-bt-16">
          {{ dataProps.monitorName }}
        </div>
      </div>
    </div>
    <div class="fx-fl wd-0 fx fx-cl">
      <Topic :title="dataProps.monitorName + ' 历史数据'" />
      <div class="flex-box mg-tp-32 of-hd">
        <LineEchart />
      </div>
    </div>
  </div>
</template>
<script>
import Topic from "@/components/topic/Topic.vue";
import LineEchart from "@/components/echatrs/LineEchart.vue";
export default {
  props: ["dataProps"],
  name: "OptionCardBox",
  components: {
    Topic,
    // GaugeEchart,
    LineEchart,
  },
};
</script>
<style lang="scss" scoped>
.flex-box {
  flex: 1 0 auto;
  height: 0;
}
.normal-icon {
  width: 364px;
  background: url("~@/assets/home/normal.png") no-repeat;
  background-size: contain;
  background-position: center center;
  margin-left: 80px;
}
.abnormal-icon {
  background: url("~@/assets/home/abnormal.png") no-repeat;
  background-size: contain;
  background-position: center center;
  // margin-left: 80px;
}
</style>

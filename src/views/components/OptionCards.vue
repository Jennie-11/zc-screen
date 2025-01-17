<template>
  <div class="option-card-box fx pd-24 fx-fl">
    <div class="fx-fl wd-0 fx fx-cl">
      <Topic title="温度传感器-01 瞬时值" />
      <div class="flex-box mg-tp-32 mg-lt-32 mg-rt-32 of-hd">
        <GaugeEchart />
      </div>
    </div>
    <div class="fx-fl wd-0 fx fx-cl">
      <Topic title="温度传感器-01 历史数据" />
      <div class="flex-box mg-tp-32 of-hd">
        <BrokenLineEchart />
      </div>
    </div>
  </div>
</template>
<script>
import Topic from "@/components/topic/Topic.vue";
import GaugeEchart from "@/components/echatrs/GaugeEchart.vue";
import BrokenLineEchart from "@/components/echatrs/BrokenLineEchart.vue";
export default {
  name: "OptionCardBox",
  components: {
    Topic,
    GaugeEchart,
    BrokenLineEchart,
  },
};
</script>
<style lang="scss" scoped>
.flex-box {
  flex: 1 0 auto;
  height: 0;
}
</style>

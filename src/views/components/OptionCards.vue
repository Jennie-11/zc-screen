<template>
  <div class="option-card-box fx pd-24 fx-fl">
    <div class="fx-fl wd-0 fx fx-cl">
      <Topic :title="dataProps.label + ' 瞬时值'" />
      <div class="flex-box mg-tp-32 mg-lt-32 mg-rt-32 of-hd">
        <GaugeEchart
          v-bind="$attrs"
          :dataProps="dataProps"
          :unit="tagProps.unit"
        />
      </div>
    </div>
    <div class="fx-fl wd-0 fx fx-cl">
      <Topic :title="dataProps.label + ' 历史数据'">
        <template v-slot:titleSolt>
          <div class="editor">
            <el-date-picker
              v-model="selectTime"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              @change="selectTimeChange"
              align="right"
            >
            </el-date-picker>
            <el-radio-group v-model="radio">
              <el-radio label="白班">白班</el-radio>
              <el-radio label="晚班">晚班</el-radio>
            </el-radio-group>
          </div>
        </template>
      </Topic>
      <div class="flex-box mg-tp-32 of-hd">
        <BrokenLineEchart
          v-on="$listeners"
          v-bind="$attrs"
          :dataProps="dataProps"
          :unit="tagProps.unit"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Topic from "@/components/topic/Topic.vue";
import GaugeEchart from "@/components/echatrs/GaugeEchart.vue";
import BrokenLineEchart from "@/components/echatrs/BrokenLineEchart.vue";
export default {
  props: ["dataProps", "tagProps"],
  name: "OptionCardBox",
  inheritAttrs: false,
  components: {
    Topic,
    GaugeEchart,
    BrokenLineEchart,
  },
  data() {
    return {
      selectTime: [
        new Date().format("yy-MM-dd ") + "08:00:00",
        new Date().format("yy-MM-dd ") + "20:00:00",
      ],
      radio: "白班",
    };
  },
  mounted() {
    this.defultTime();
    // console.log(this.selectTime);
  },
  methods: {
    selectTimeChange() {},
    defultTime() {
      let date = new Date();
      console.log(date.getHours());
      if (8 < date.getHours() > 10) {
        this.selectTime = [
          new Date().format("yy-MM-dd ") + "20:00:00",
          new Date().setDate(date.getDate() + 1).format("yy-MM-dd ") +
            "8:00:00",
        ];
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.flex-box {
  flex: 1 0 auto;
  height: 0;
}
.editor {
  display: flex;
  align-items: center;
  position: absolute;
  right: 8px;
}
::v-deep .el-date-editor {
  width: 370px;
  display: flex;
  justify-content: space-between;
}
</style>

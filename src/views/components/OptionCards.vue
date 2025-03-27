<template>
  <div class="option-card-box fx pd-24 fx-fl">
    <div class="fx-fl wd-0 fx fx-cl">
      <Topic :title="dataProps.monitorName + ' 瞬时值'" />
      <div class="flex-box mg-tp-32 mg-lt-32 mg-rt-32 of-hd">
        <GaugeEchart
          :dataProps="dataProps"
          v-bind="$attrs"
          v-on="$listeners"
          :unit="tagProps.monitorUnitStr"
          v-if="hardwareType != 5"
        />
        <div v-else class="fx-ag-ct fx-cl ht-fl">
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
    </div>
    <div class="fx-fl wd-0 fx fx-cl">
      <Topic :title="dataProps.monitorName + ' 历史数据'">
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
              value-format="yyyy-MM-dd HH:mm:ss"
            >
            </el-date-picker>
            <el-radio-group v-model="radio" @change="radioChange">
              <el-radio label="白班">白班</el-radio>
              <el-radio label="晚班">晚班</el-radio>
            </el-radio-group>
          </div>
        </template>
      </Topic>
      <div class="flex-box mg-tp-32 of-hd">
        <BrokenLineEchart :echatrsData="echatrsData" v-if="hardwareType != 5" />
        <LineEchart :echatrsData="echatrsData" v-else />
      </div>
    </div>
  </div>
</template>
<script>
import LineEchart from "@/components/echatrs/LineEchart.vue";
import Topic from "@/components/topic/Topic.vue";
import { screenData } from "@/api/workshop";
import GaugeEchart from "@/components/echatrs/GaugeEchart.vue";
import BrokenLineEchart from "@/components/echatrs/BrokenLineEchart.vue";
export default {
  props: ["dataProps", "tagProps", "hardwareType"],
  name: "OptionCardBox",
  inheritAttrs: false,
  components: {
    Topic,
    GaugeEchart,
    BrokenLineEchart,
    LineEchart,
  },
  data() {
    return {
      selectTime: [
        this.$dateformat("yy-MM-dd ") + "08:00:00",
        this.$dateformat("yy-MM-dd ") + "20:00:00",
      ],
      radio: "白班",

      selectParams: {
        monitorId: "",
        hardwareType: "",
        startTime: "",
        endTime: "",
      },
      echatrsData: {
        dfmMaximumValue: 0,
        dfmMinimumValue: 0,
        maximumValue: 0,
        minimumValue: 0,
        unit: "",
        name: "",
        xData: [],
        yData: [],
      },
    };
  },
  mounted() {
    this.defultTime();
  },
  methods: {
    async getScreenData() {
      this.selectParams.startTime = this.selectTime[0];
      this.selectParams.endTime = this.selectTime[1];
      try {
        let { data } = await screenData(this.selectParams);

        if (this.tagProps.hardwareType == 5) {
          this.echatrsData.xData = [];
          this.echatrsData.yData = [];
          data.data.dataList.forEach((item) => {
            this.echatrsData.xData.push(item.collectTime);
            if (item.measuringState == 0) {
              this.echatrsData.yData.push(8);
            } else {
              this.echatrsData.yData.push(5);
            }
          });
          return;
        }
        this.echatrsData = {
          ...this.echatrsData,
          ...data.data,
          dataList: undefined,
        };
        data.data.dataList.forEach((item) => {
          this.echatrsData.xData.push(item.collectTime);
          this.echatrsData.yData.push(item.monitorValue);
        });
        console.log(this.echatrsData);
      } catch (err) {
        this.echatrsData.xData = [];
        this.echatrsData.yData = [];
      }
    },
    selectTimeChange() {
      this.getScreenData();
      this.$emit("selectTimeChange", this.selectTime[0], this.selectTime[1]);
    },
    defultTime() {
      let date = new Date();
      if (8 < date.getHours() > 20) {
        this.selectTime = [
          this.$dateformat("yy-MM-dd ") + "20:00:00",
          new Date().setDate(date.getDate() + 1).format("yy-MM-dd ") +
            "8:00:00",
        ];
      }
    },
    radioChange(val) {
      let date = new Date();
      if (val == "白班") {
        this.selectTime = [
          this.$dateformat("yy-MM-dd ") + "08:00:00",
          this.$dateformat("yy-MM-dd ") + "20:00:00",
        ];
      } else {
        date.setDate(new Date().getDate() + 1);
        this.selectTime = [
          this.$dateformat("yy-MM-dd ") + "20:00:00",
          this.$dateformat("yy-MM-dd ", date) + "08:00:00",
        ];
      }
      this.getScreenData();
      this.$emit("selectTimeChange", this.selectTime[0], this.selectTime[1]);
    },
  },
  watch: {
    dataProps: {
      handler(val) {
        this.selectParams.monitorId = val.monitorId;
        this.selectParams.hardwareType = this.hardwareType;
        this.echatrsData.unit = this.tagProps.monitorUnitStr;
        this.echatrsData.name = this.tagProps.hardwareTypeStr;
        this.getScreenData();
      },
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
.el-radio-group {
  position: absolute;
  top: 60px;
  right: 0;
}
::v-deep .el-radio {
  input[aria-disabled="true"] {
    display: none !important;
  }
  &:focus:not(.is-focus):not(:active):not(.is-disabled) .el-radio__inner {
    box-shadow: none !important;
  }
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

<template>
  <div class="echart-box">
    <div id="gaugeChart"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";

export default {
  name: "EchartBox",
  props: ["unit", "dataProps"],
  inheritAttrs: false,
  data: () => ({
    echartObject: null,

    chartDom: null,
    containerHeight: 1,
    baseHeight: 612,
    option: {},
  }),

  methods: {
    initChartHandle() {
      this.echartObject = echarts.init(this.chartDom);
      const containerHeight = this.containerHeight;

      let that = this;
      this.option = {
        series: [
          {
            type: "gauge",
            center: ["50%", "54%"],
            radius: "70%",
            startAngle: 240,
            endAngle: -60,
            min: 0,
            max: 100,
            splitNumber: 10,
            data: [
              {
                value: this.dataProps.value * 1,
              },
            ],
            progress: {
              show: true,
              width: 30 * containerHeight,
              itemStyle: {
                color: "#00BF60",
              },
            },
            pointer: {
              show: false,
            },
            axisLine: {
              color: "#dfebfb",
              lineStyle: {
                width: 30 * containerHeight,
                color: [[1, "#dfebfb"]],
              },
            },
            axisTick: {
              distance: -45 * containerHeight,
              splitNumber: 5,
              lineStyle: {
                color: "#dcdfe5",
                width: 2 * containerHeight,
              },
            },
            splitLine: {
              distance: -52 * containerHeight,
              length: 14 * containerHeight,
              lineStyle: {
                width: 3 * containerHeight,
                color: "#dce0e5",
              },
            },
            axisLabel: {
              distance: -32 * containerHeight,
              color: "#9498a1",
              fontSize: 32 * containerHeight,
              fontFamily: "TenXun",
            },
            anchor: {
              show: false,
            },
            title: {
              show: false,
            },
            detail: {
              valueAnimation: true,
              width: "100%",
              borderRadius: 8,
              offsetCenter: [0, 0],
              fontSize: 48 * containerHeight,
              lineHeight: 48 * containerHeight,
              fontFamily: "TenXun",
              formatter: function (value) {
                return `{value|${value}${that.unit}}\n{stateName|数值正常}\n{tip|温度传感器-01}`;
              },
              rich: {
                value: {
                  color: "#00bf60",
                  fontSize: 48 * containerHeight,
                  fontFamily: "TenXun",
                  lineHeight: 60 * containerHeight,
                },
                stateName: {
                  color: "#00bf60",
                  fontSize: 32 * containerHeight,
                  fontFamily: "TenXun",
                },
                tip: {
                  color: "#030B1A",
                  fontSize: 23 * containerHeight,
                },
              },
            },
          },
          {
            type: "gauge",
            radius: "58%",
            center: ["50%", "54%"],
            min: 0,
            max: 100,
            startAngle: 360,
            endAngle: 0,
            splitNumber: 10,
            axisLine: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              distance: 0,
              length: 12 * containerHeight,
              lineStyle: {
                color: "#dcdfe5",
                width: 8 * containerHeight,
              },
            },
            axisLabel: {
              show: false,
            },
            pointer: {
              show: false,
            },
            title: {
              show: false,
            },
            anchor: {
              show: false,
            },
          },
        ],
      };
      this.echartObject.setOption(this.option);
    },
    clientHeightFun() {
      this.containerHeight = this.chartDom.offsetHeight / this.baseHeight;
    },
  },
  mounted() {
    this.chartDom = document.getElementById("gaugeChart");

    window.addEventListener("resize", () => {
      this.clientHeightFun();
      this.initChartHandle();
      this.echartObject && this.echartObject.resize();
    });
    this.$nextTick(() => {
      this.clientHeightFun();
      this.initChartHandle();
    });
  },
  watch: {
    dataProps: {
      handler(val) {
        this.option.series[0].data[0].value = val.value;
        // this.option.
        this.echartObject.setOption(this.option);
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.echart-box {
  width: 100%;
  height: 100%;
}
#gaugeChart {
  width: 100%;
  height: 100%;
}
</style>

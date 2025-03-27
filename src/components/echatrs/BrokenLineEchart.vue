<template>
  <div class="echart-box">
    <div id="brokenLineChart"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "BrokenLine",
  props: ["echatrsData"],
  inheritAttrs: false,
  data: () => ({
    myEcharts: null,
    chartDom: null,
    containerHeight: 1,
    baseHeight: 612,
  }),
  methods: {
    initChartHandle() {
      var option;
      let that = this;
      option = {
        grid: {
          left: "1%",
          right: "4%",
          bottom: "3%",
          top: "8%",
          containLabel: true,
        },
        title: {
          subtext: `单位：${that.echatrsData.unit}`,

          subtextStyle: {
            fontSize: 18 * this.containerHeight,
          },
        },
        legend: {
          // data: [""],
          type: "plain",
          itemHeight: 0,
          itemWidth: 12,
          padding: [10, 20],
          itemGap: 24,
          selectedMode: false,
          textStyle: {
            fontSize: 16 * this.containerHeight,
          },
          itemStyle: {
            color: "#e0e6f1",
          },
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(26, 126, 250, 0.1)",
            },
            {
              offset: 1,
              color: "rgba(26, 126, 250, 0)",
            },
          ]),
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.echatrsData.xData,
          axisLabel: {
            type: "time",
            onZero: false,
            fontSize: 18 * this.containerHeight, // 全局字号
          },
          axisTick: { show: false },
          offset: 9,
        },
        yAxis: {
          type: "value",
          axisLabel: {
            fontSize: 18 * this.containerHeight, // 全局字号
          },
          max: that.echatrsData.ymaximumValue * 1,
          min: that.echatrsData.yminimumValue * 1,
          splitLine: {
            show: false,
          },
        },
        tooltip: {
          trigger: "axis",
        },
        dataZoom: [
          {
            type: "inside",
            show: false,
            realtime: true,
            startValue: 0,
            endValue: 100,
            xAxisIndex: [0, 1],
          },
        ],
        series: [
          {
            name: this.echatrsData.name,
            data: this.echatrsData.yData,
            type: "line",
            symbol: "none",
            areaStyle: {},
            color: "#1A7EFA",
            markLine: {
              emphasis: {
                disabled: true,
              },
              data: [
                {
                  // name: "温度上线",
                  yAxis:
                    that.echatrsData.dfmMaximumValue * 1 != -1
                      ? that.echatrsData.dfmMaximumValue * 1
                      : "",
                  label: {
                    formatter: "{b}",
                    position: "insideMiddle",
                  },
                  lineStyle: {
                    color: "#FF383D",
                    width: 2,
                  },
                },
                {
                  // name: "温度下线",
                  yAxis:
                    that.echatrsData.dfmMinimumValue * 1 != -1
                      ? that.echatrsData.dfmMinimumValue * 1
                      : "",
                  label: {
                    formatter: "{b}",
                    position: "insideMiddle",
                  },
                  lineStyle: {
                    color: "#FF383D",
                    width: 2,
                  },
                },
                {
                  // name: "温度下线",

                  yAxis:
                    that.echatrsData.minimumValue * 1 != -1
                      ? that.echatrsData.minimumValue * 1
                      : "",
                  label: {
                    formatter: "{b}",
                    position: "insideMiddle",
                  },
                  lineStyle: {
                    color: "#FFAB00",
                    width: 2,
                  },
                },
                {
                  // name: "温度下线",
                  yAxis:
                    that.echatrsData.maximumValue != -1
                      ? that.echatrsData.maximumValue
                      : "",

                  label: {
                    formatter: "{b}",
                    position: "insideMiddle",
                  },
                  lineStyle: {
                    color: "#ff8b39",
                    width: 2,
                  },
                },
              ],

              symbol: "none",
              label: {
                distance: [20, 8],
              },
            },
          },
          {
            name: that.echatrsData.minimumValue * 1 != -1 ? "预警下限" : "",
            type: "line",
            color: "#FFAB00",
            opacity: 1,
          },

          {
            name: that.echatrsData.dfmMaximumValue * 1 != -1 ? "DFM上限" : "",
            type: "line",
            show: false,
            color: "#E34D59",
            opacity: 1,
            lineStyle: {
              fontSize: 15,
            },
          },
          {
            name: that.echatrsData.dfmMinimumValue * 1 != -1 ? "DFM下限" : "",
            type: "line",
            color: "#E34D59",
            opacity: 1,
            lineStyle: {
              fontSize: 15,
            },
          },
        ],
      };
      this.myEcharts.setOption(option);
    },
    clientHeightFun() {
      this.containerHeight = this.chartDom.offsetHeight / this.baseHeight;
    },
  },
  watch: {
    echatrsData: {
      handler() {
        this.initChartHandle();
      },
      deep: true,
    },
  },
  mounted() {
    this.chartDom = document.getElementById("brokenLineChart");
    this.myEcharts = echarts.init(this.chartDom);

    window.addEventListener("resize", (event) => {
      console.log(event, "event");

      this.clientHeightFun();
      this.initChartHandle();
      this.myEcharts && this.myEcharts.resize();
    });

    this.$nextTick(() => {
      this.clientHeightFun();
      this.initChartHandle();
    });
  },
};
</script>
<style lang="scss" scoped>
.echart-box {
  width: 100%;
  height: 100%;
}
::v-deep #brokenLineChart {
  width: 100%;
  height: 100%;
  & > div:first-child {
    height: 100% !important;
  }
  canvas {
    height: 100% !important;
  }
}
// #brokenLineChart > div:first-child {
//   // height: 100% !important;

// }
</style>

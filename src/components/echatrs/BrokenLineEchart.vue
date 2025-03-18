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
      option = {
        grid: {
          left: "1%",
          right: "1%",
          bottom: "3%",
          containLabel: true,
        },
        title: {
          subtext: "单位：%RH",
        },
        legend: {
          data: ["Test"],
          type: "plain",
          itemHeight: 0,
          itemWidth: 12,
          padding: [0, 20],
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
            startValue: 2,
            endValue: 100,
            xAxisIndex: [0, 1],
          },
        ],
        series: [
          {
            name: "Test",
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
                  yAxis: 800,
                  label: {
                    formatter: "{b}",
                    position: "insideMiddle",
                  },
                },
                {
                  // name: "温度下线",
                  yAxis: 600,
                  label: {
                    formatter: "{b}",
                    position: "insideMiddle",
                  },
                },
              ],
              lineStyle: {
                color: "#FF383D",
                width: 2,
              },
              symbol: "none",
              label: {
                distance: [20, 8],
              },
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
        console.log("echartData");

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

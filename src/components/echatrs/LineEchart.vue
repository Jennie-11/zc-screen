<template>
  <div class="echart-box">
    <div id="brokenLineChart"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";

export default {
  name: "LineEcharts",
  data: () => ({
    echartObject: null,
    chartDom: null,
    containerHeight: 1,
    baseHeight: 612,
  }),
  methods: {
    initChartHandle() {
      this.echartObject = echarts.init(this.chartDom);
      var option;
      option = {
        grid: {
          left: "5%",
          right: "3%",
          bottom: "3%",
          containLabel: true,
        },

        legend: {
          data: ["火焰传感器"],
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
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun",
          ],
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
          max: 8,
          // name: "y",
          axisLabel: {
            show: false,
            fontSize: 18 * this.containerHeight, // 全局字号
          },
          splitLine: {
            show: false,
          },
          // data: [1, 8, 6, 8],
        },
        tooltip: {
          trigger: "axis",
        },

        series: [
          {
            name: "火焰传感器",
            data: [5, 5, 8, 8, 5, 5, 8, 5, 5, 8, 8, 5, 5, 8],
            markLine: {
              emphasis: {
                disabled: true,
              },
              data: [
                {
                  name: "异常",
                  yAxis: 5,
                  label: {
                    formatter: "{b}",
                    position: "start",
                    color: "#FF383D",
                    fontSize: 16 * this.containerHeight,
                  },
                  z: 1,
                  lineStyle: {
                    color: "#FF383D",
                    width: 2,
                  },
                },
                {
                  name: "正常",
                  yAxis: 8,
                  label: {
                    formatter: "{b}",
                    position: "start",
                    color: "#00BF60",
                    fontSize: 16 * this.containerHeight,
                  },
                  z: 1,
                  lineStyle: {
                    color: "#00BF60",
                    width: 2,
                  },
                },
              ],

              symbol: "none",
            },
            type: "line",
            symbol: "none",
            z: 5,
            color: "#1A7EFA",
          },
        ],
      };
      this.echartObject.setOption(option);
    },
    clientHeightFun() {
      this.containerHeight = this.chartDom.offsetHeight / this.baseHeight;
    },
  },
  mounted() {
    this.chartDom = document.getElementById("brokenLineChart");
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
};
</script>
<style lang="scss" scoped>
.echart-box {
  width: 100%;
  height: 100%;
}
#brokenLineChart {
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div class="echart-box">
    <div id="brokenLineChart"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "BrokenLine",
  data: () => ({
    echartObject: null,
  }),
  methods: {
    initChartHandle() {
      var chartDom = document.getElementById("brokenLineChart");
      this.echartObject = echarts.init(chartDom);
      var option;
      option = {
        legend: {
          data: ["Test"],
        },
        grid: {
          left: "4%",
          right: "2%",
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(26, 126, 250, 0.6)",
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
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "Test",
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            symbol: "circle",
            areaStyle: {},
            color: "#1A7EFA",
            markLine: {
              emphasis: {
                disabled: true,
              },
              data: [
                {
                  name: "温度上线",
                  yAxis: 800,
                  label: {
                    formatter: "{b}",
                    position: "insideMiddle",
                  },
                },
                {
                  name: "温度下线",
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
      this.echartObject.setOption(option);
    },
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.echartObject && this.echartObject.resize();
    });
    this.$nextTick(() => {
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

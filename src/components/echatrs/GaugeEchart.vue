<template>
  <div class="echart-box">
    <div id="gaugeChart"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "EchartBox",
  data: () => ({
    echartObject: null,
  }),
  methods: {
    initChartHandle() {
      var chartDom = document.getElementById("gaugeChart");
      this.echartObject = echarts.init(chartDom);
      var option;
      option = {
        series: [
          {
            type: "gauge",
            center: ["50%", "50%"],
            radius: "70%",
            startAngle: 240,
            endAngle: -60,
            min: 0,
            max: 100,
            splitNumber: 10,
            progress: {
              show: true,
              width: 30,
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
                width: 30,
                color: [[1, "#dfebfb"]],
              },
            },
            axisTick: {
              distance: -45,
              splitNumber: 5,
              lineStyle: {
                color: "#dcdfe5",
                width: 2,
              },
            },
            splitLine: {
              distance: -52,
              length: 14,
              lineStyle: {
                width: 3,
                color: "#dce0e5",
              },
            },
            axisLabel: {
              distance: -32,
              color: "#9498a1",
              fontSize: 32,
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
              fontSize: 48,
              lineHeight: 48,
              fontFamily: "TenXun",
              formatter: function (value) {
                return `{value|${value}°C}\n{stateName|数值正常}\n{tip|温度传感器-01}`;
              },
              rich: {
                value: {
                  color: "#00bf60",
                  fontSize: 48,
                  fontFamily: "TenXun",
                  lineHeight: 60,
                },
                stateName: {
                  color: "#00bf60",
                  fontSize: 32,
                  fontFamily: "TenXun",
                },
                tip: {
                  color: "#030B1A",
                  fontSize: 23,
                },
              },
            },

            data: [
              {
                value: 26,
              },
            ],
          },
          {
            type: "gauge",
            radius: "55%",
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
              length: 10,
              lineStyle: {
                color: "#dcdfe5",
                width: 4,
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
#gaugeChart {
  width: 100%;
  height: 100%;
}
</style>

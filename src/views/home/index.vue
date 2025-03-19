<template>
  <div class="page-container">
    <WorkShopOption
      :activeId="currentActiveId"
      @change-option="changeOptionHandle"
      :optionList="optionList"
    />
    <OptionInfo
      :type="tagProps.type"
      :tagProps="tagProps"
      :dataProps="dataProps"
      @tabsChange="tabsChange"
      :echatrsData="echatrsData"
    />
  </div>
</template>
<script>
import WorkShopOption from "../components/WorkShopOption.vue";
import OptionInfo from "../components/OptionInfo.vue";
import { getShopList } from "@/api/workshop";
export default {
  name: "HomePage",
  components: {
    WorkShopOption,
    OptionInfo,
  },
  data() {
    return {
      currentActiveId: 0,

      optionList: [
        {
          id: "temperature",
          hardwareTypeStr: "车间温度",
          status: 1,
          abnormalNum: "0",
          type: "temp",
          unit: "°C",
          tagList: [
            {
              name: "temp1",
              hardwareTypeStr: "温度传感器-01",
              value: "25.48",
              type: "temp",
              status: 1,
            },
            {
              name: "temp2",
              hardwareTypeStr: "温度传感器-02",
              value: "51.99",
              type: "temp",
              status: 1,
            },

            {
              name: "5",
              hardwareTypeStr: "温度传感器-05",
              value: "51.99",
              type: "temp",
              status: 2,
            },
            {
              name: "6",
              hardwareTypeStr: "温度传感器-06",
              value: "51.99",
              type: "temp",
              status: 1,
            },
            {
              name: "7",
              hardwareTypeStr: "温度传感器-07",
              value: "51.99",
              type: "temp",
              status: 2,
            },
            {
              name: "8",
              hardwareTypeStr: "温度传感器-08",
              value: "51.99",
              type: "temp",
              status: 1,
            },
            {
              name: "9",
              hardwareTypeStr: "温度传感器-09",
              value: "51.99",
              type: "temp",
              status: 1,
            },
            {
              name: "10",
              hardwareTypeStr: "温度传感器-10",
              value: "51.99",
              type: "temp",
              status: 1,
            },
            {
              name: "11",
              hardwareTypeStr: "温度传感器-11",
              value: "51.99",
              type: "temp",
              status: 2,
            },
          ],
        },
        {
          id: "humidity",
          hardwareTypeStr: "车间湿度",
          status: 1,
          abnormalNum: "0",
          unit: "%RH",
          type: "humidity",
          tagList: [
            {
              name: "humidity1",
              hardwareTypeStr: "湿度传感器-01",
              value: "65.48",
              type: "humidity",
              status: 1,
            },
            {
              name: "humidity2",
              hardwareTypeStr: "湿度传感器-02",
              value: "51.99",
              type: "humidity",
              status: 1,
            },
          ],
        },
        {
          id: "oxygen",
          hardwareTypeStr: "车间含氧量",
          status: 2,
          abnormalNum: "3",
          unit: "%",
          type: "oxygen",
          tagList: [
            {
              name: "oxygen1",
              hardwareTypeStr: "氧气传感器-01",
              value: "65.48",
              type: "oxygen",
              status: 1,
            },
            {
              name: "oxygen2",
              hardwareTypeStr: "氧气传感器-02",
              value: "51.99",
              type: "oxygen",
              status: 1,
            },
          ],
        },
        {
          id: "hydrogen",
          hardwareTypeStr: "车间氢气",
          status: 2,
          abnormalNum: "3",
          unit: "%",
          type: "hydrogen",
          tagList: [
            {
              name: "hydrogen1",
              hardwareTypeStr: "氢气传感器-01",
              value: "65.48",
              type: "hydrogen",
              status: 1,
            },
            {
              name: "hydrogen2",
              hardwareTypeStr: "氢气传感器-02",
              value: "51.99",
              type: "hydrogen",
              status: 1,
            },
          ],
        },
        {
          id: "flame",
          hardwareTypeStr: "车间火焰",
          status: 2,
          abnormalNum: "1",
          unit: undefined,
          type: "flame",
          tagList: [
            {
              name: "flame1",
              hardwareTypeStr: "火焰传感器-01",
              value: "正常",
              type: "flame",
              status: 1,
            },
            {
              name: "4",
              hardwareTypeStr: "火焰传感器-02",
              value: "异常",
              type: "flame",
              status: 2,
            },
          ],
        },
        {
          id: "dust",
          hardwareTypeStr: "车间粉尘",
          status: 1,
          abnormalNum: "0",
          unit: "mg/m³",
          type: "dust",
          tagList: [
            {
              name: "dust1",
              hardwareTypeStr: "氢气传感器-01",
              value: "65.48",
              type: "dust",
              status: 1,
            },
            {
              name: "dust2",
              hardwareTypeStr: "氢气传感器-02",
              value: "51.99",
              type: "dust",
              status: 1,
            },
          ],
        },
      ],
      tagList: [],
      dataProps: {},
      tagProps: {},
      defaultProps: {},
      echatrsData: {
        xData: [
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
        yData: [
          820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330,
          1320, 820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290,
          1330, 1320,
        ],
      },
    };
  },
  created() {
    this.tagProps = this.optionList[0];
    this.tabsChange("temp1");
  },
  mounted() {
    this.getShopListHandle();
  },
  methods: {
    tabsChange(val) {
      this.dataProps = this.$findByProperty(this.tagProps.tagList, "name", val);
    },
    changeOptionHandle(val) {
      if (this.currentActiveId == val.hardwareType) return;
      this.currentActiveId = val.hardwareType;
      this.tagProps = this.$findByProperty(
        this.optionList,
        "hardwareType",
        val.hardwareType
      );
      this.tabsChange(this.tagProps.tagList[0].name);
    },
    async getShopListHandle() {
      const { data } = await getShopList("4D5F");
      this.optionList = data.data;
      console.log(data, ">>>>>>>>>>>>>>>>>");
    },
  },
};
</script>

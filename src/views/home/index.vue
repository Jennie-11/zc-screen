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
export default {
  name: "HomePage",
  components: {
    WorkShopOption,
    OptionInfo,
  },
  data() {
    return {
      currentActiveId: "temperature",
      optionList1: [
        {
          id: "123",
          label: "车间温度",
          status: 1,
          statusName: "全部正常",
          type: "temp",
          unit: "°C",
          tagList: [
            {
              id: "345",
              name: "temp1",
              label: "温度传感器-01",
              value: "25.48",
              status: 1,
            },
          ],
        },
      ],
      optionList: [
        {
          id: "temperature",
          label: "车间温度",
          status: 1,
          statusName: "全部正常",
          type: "temp",
          unit: "°C",
          tagList: [
            {
              name: "temp1",
              label: "温度传感器-01",
              value: "25.48",
              type: "temp",
              status: 1,
            },
            {
              name: "temp2",
              label: "温度传感器-02",
              value: "51.99",
              type: "temp",
              status: 1,
            },

            {
              name: "5",
              label: "温度传感器-05",
              value: "51.99",
              type: "temp",
              status: 2,
            },
            {
              name: "6",
              label: "温度传感器-06",
              value: "51.99",
              type: "temp",
              status: 1,
            },
            {
              name: "7",
              label: "温度传感器-07",
              value: "51.99",
              type: "temp",
              status: 2,
            },
            {
              name: "8",
              label: "温度传感器-08",
              value: "51.99",
              type: "temp",
              status: 1,
            },
            {
              name: "9",
              label: "温度传感器-09",
              value: "51.99",
              type: "temp",
              status: 1,
            },
            {
              name: "10",
              label: "温度传感器-10",
              value: "51.99",
              type: "temp",
              status: 1,
            },
            {
              name: "11",
              label: "温度传感器-11",
              value: "51.99",
              type: "temp",
              status: 2,
            },
          ],
        },
        {
          id: "humidity",
          label: "车间湿度",
          status: 1,
          statusName: "全部正常",
          unit: "%RH",
          type: "humidity",
          tagList: [
            {
              name: "humidity1",
              label: "湿度传感器-01",
              value: "65.48",
              type: "humidity",
              status: 1,
            },
            {
              name: "humidity2",
              label: "湿度传感器-02",
              value: "51.99",
              type: "humidity",
              status: 1,
            },
          ],
        },
        {
          id: "oxygen",
          label: "车间含氧量",
          status: 2,
          statusName: "3个异常",
          unit: "%",
          type: "oxygen",
          tagList: [
            {
              name: "oxygen1",
              label: "氧气传感器-01",
              value: "65.48",
              type: "oxygen",
              status: 1,
            },
            {
              name: "oxygen2",
              label: "氧气传感器-02",
              value: "51.99",
              type: "oxygen",
              status: 1,
            },
          ],
        },
        {
          id: "hydrogen",
          label: "车间氢气",
          status: 2,
          statusName: "3个异常",
          unit: "%",
          type: "hydrogen",
          tagList: [
            {
              name: "hydrogen1",
              label: "氢气传感器-01",
              value: "65.48",
              type: "hydrogen",
              status: 1,
            },
            {
              name: "hydrogen2",
              label: "氢气传感器-02",
              value: "51.99",
              type: "hydrogen",
              status: 1,
            },
          ],
        },
        {
          id: "flame",
          label: "车间火焰",
          status: 2,
          statusName: "1个异常",
          unit: undefined,
          type: "flame",
          tagList: [
            {
              name: "flame1",
              label: "火焰传感器-01",
              value: "正常",
              type: "flame",
              status: 1,
            },
            {
              name: "4",
              label: "火焰传感器-02",
              value: "异常",
              type: "flame",
              status: 2,
            },
          ],
        },
        {
          id: "dust",
          label: "车间粉尘",
          status: 1,
          statusName: "全部正常",
          unit: "mg/m³",
          type: "dust",
          tagList: [
            {
              name: "dust1",
              label: "氢气传感器-01",
              value: "65.48",
              type: "dust",
              status: 1,
            },
            {
              name: "dust2",
              label: "氢气传感器-02",
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
  mounted() {},
  methods: {
    tabsChange(val) {
      this.dataProps = this.$findByProperty(this.tagProps.tagList, "name", val);
    },
    changeOptionHandle(val) {
      if (this.currentActiveId == val.id) return;
      this.currentActiveId = val.id;
      this.tagProps = this.$findByProperty(this.optionList, "id", val.id);
      this.tabsChange(this.tagProps.tagList[0].name);
    },
  },
};
</script>

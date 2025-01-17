<template>
  <div class="work-shop-option fx fx-bt-ct">
    <OptionItem
      v-for="item in optionList"
      :key="item.id"
      :optionData="item"
      :activeId="currentActiveId"
      @change-option="changeOptionHandle"
    />
  </div>
</template>
<script>
import OptionItem from "./OptionItem.vue";
export default {
  name: "WorkShopOptionBox",
  components: {
    OptionItem,
  },
  data: () => ({
    optionList: [
      {
        id: "temperature",
        label: "车间温度",
        status: 1,
        statusName: "全部正常",
      },
      {
        id: "humidity",
        label: "车间湿度",
        status: 1,
        statusName: "全部正常",
      },
      {
        id: "oxygen",
        label: "车间含氧量",
        status: 2,
        statusName: "3个异常",
      },
      {
        id: "hydrogen",
        label: "车间氢气",
        status: 2,
        statusName: "3个异常",
      },
      {
        id: "flame",
        label: "车间火焰",
        status: 2,
        statusName: "1个异常",
      },
      {
        id: "dust",
        label: "车间粉尘",
        status: 1,
        statusName: "全部正常",
      },
    ],
    currentActiveId: "temperature",
  }),
  methods: {
    changeOptionHandle(val) {
      if (this.currentActiveId == val.id) return;
      this.currentActiveId = val.id;
    },
  },
};
</script>

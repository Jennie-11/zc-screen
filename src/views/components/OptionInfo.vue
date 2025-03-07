<template>
  <div class="option-info-box fx fx-fl bg-fff bd-rd-8 mg-tp-24 fx-cl">
    <Tabs @tabsChange="tabsChange" :tagList="tagList" />
    <OptionCards :dataProps="dataProps" v-if="dataProps.type == 'temp'" />
    <OptionCardsFlame
      :dataProps="dataProps"
      v-else-if="dataProps.type == 'flame'"
    />
  </div>
</template>
<script>
import Tabs from "./Tabs.vue";
import OptionCards from "./OptionCards.vue";
import OptionCardsFlame from "./OptionCardsFlame.vue";

export default {
  name: "OptionInfoBox",
  components: {
    Tabs,
    OptionCards,
    OptionCardsFlame,
  },
  data: () => ({
    typeTab: "flame1",
    optionCardsShow: true,
    tagList: [
      {
        name: "temp1",
        label: "温度传感器-01",
        text: "25.48℃",
        type: "temp",
        status: 1,
      },
      {
        name: "temp2",
        label: "温度传感器-02",
        text: "51.99℃",
        type: "temp",
        status: 1,
      },
      {
        name: "flame1",
        label: "火焰传感器-01",
        text: "正常",
        type: "flame",
        status: 1,
      },
      {
        name: "4",
        label: "火焰传感器-02",
        text: "异常",
        type: "flame",
        status: 2,
      },
      {
        name: "5",
        label: "温度传感器-05",
        text: "51.99℃",
        type: "temp",
        status: 2,
      },
      {
        name: "6",
        label: "温度传感器-06",
        text: "51.99℃",
        type: "temp",
        status: 1,
      },
      {
        name: "7",
        label: "温度传感器-07",
        text: "51.99℃",
        type: "temp",
        status: 2,
      },
      {
        name: "8",
        label: "温度传感器-08",
        text: "51.99℃",
        type: "temp",
        status: 1,
      },
      {
        name: "9",
        label: "温度传感器-09",
        text: "51.99℃",
        type: "temp",
        status: 1,
      },
      {
        name: "10",
        label: "温度传感器-10",
        text: "51.99℃",
        type: "temp",
        status: 1,
      },
      {
        name: "11",
        label: "温度传感器-11",
        text: "51.99℃",
        type: "temp",
        status: 2,
      },
    ],
    dataProps: {
      name: "temp1",
      label: "温度传感器-01",
      text: "25.48℃",
      type: "temp",
      status: 1,
    },
  }),
  methods: {
    tabsChange(val) {
      this.dataProps = this.$findByProperty(this.tagList, "name", val.name);

      console.log(this.dataProps);
      this.optionCardsShow = false;
      this.typeTab = val.name;
    },
  },
};
</script>

<template>
  <div class="work-shop-option fx fx-bt-ct">
    <OptionItem
      v-for="item in optionList"
      :key="item.id"
      :optionData="item"
      v-on="$listeners"
      v-bind="$attrs"
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
  props: {
    optionList: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({}),
  methods: {},
};
</script>

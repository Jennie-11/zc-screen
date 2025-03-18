<template>
  <div class="option-info-box fx fx-fl bg-fff bd-rd-8 mg-tp-24 fx-cl">
    <Tabs v-on="$listeners" v-bind="$attrs" />
    <OptionCards v-on="$listeners" v-bind="$attrs" v-if="type != 'flame'" />
    <OptionCardsFlame v-on="$listeners" v-bind="$attrs" v-else />
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
  props: ["type"],
  data: () => ({
    dataProps: {},
  }),
  created() {},

  mounted() {},
  methods: {},
};
</script>

<template>
  <div class="option-info-box fx fx-fl bg-fff bd-rd-8 mg-tp-24 fx-cl">
    <Tabs />
    <OptionCards />
  </div>
</template>
<script>
import Tabs from "./Tabs.vue";
import OptionCards from "./OptionCards.vue";
export default {
  name: "OptionInfoBox",
  components: {
    Tabs,
    OptionCards,
  },
  data: () => ({}),
};
</script>

<template>
  <div class="page-container">
    <WorkShopOption />
    <OptionInfo />
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
};
</script>

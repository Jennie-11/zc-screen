<template>
  <div class="exit-box fx-ct-ct pd-rt-24">
    <div class="time ft-40 lh-40 pd-bt-8 min-wd-164px">{{ time }}</div>
    <div class="mg-lt-24 min-wd-86px">
      <div class="date">{{ date }}</div>
      <div class="week">{{ week }}</div>
    </div>
    <img
      v-if="isNeedExit"
      class="ic-40 mg-lt-40 cs-pt"
      src="@/assets/icons/close_1.png"
      @click="logoutHandle"
    />
  </div>
</template>
<script>
export default {
  name: "ExitBox",

  props: {
    isNeedExit: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    time: null,
    date: null,
    week: null,
  }),
  mounted() {
    this.newTimer = setInterval(this.getNowTime, 1000);
  },
  methods: {
    getNowTime() {
      const now = new Date();
      this.date = now.toLocaleString().split(" ")[0];
      this.time = now.toLocaleString().split(" ")[1];
      this.week = now.toLocaleDateString(undefined, { weekday: "short" });
    },
    logoutHandle() {
      this.$store.dispatch("FedLogOut").then(() => {
        this.$message({
          message: this.$t("login.logout"),
          type: "info",
          duration: 1500,
        });
        this.$router.push("/login");
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.date,
.time,
.week {
  font-family: "TenXun";
  color: #030b1a;
}
</style>

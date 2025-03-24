<template>
  <div class="exit-box fx-ct-ct pd-rt-24">
    <div class="time ft-40 lh-40 pd-bt-8 min-wd-164px">{{ time }}</div>
    <div class="mg-lt-24 min-wd-86px">
      <div class="date">{{ date }}</div>
      <div class="week">{{ week }}</div>
    </div>
    <span class="fullbutton" @click="fullScreen"></span>
    <img
      v-if="isNeedExit"
      class="ic-40 mg-lt-24 cs-pt"
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
    window.addEventListener("resize", (event) => {
      event.preventDefault();
      this.isFull =
        Math.abs(
          window.screen.height - window.document.documentElement.clientHeight
        ) <= 17;
    });
    window.addEventListener("keydown", (event) => {
      // console.log(event, 'event.key == "F11"');
      if (event.key == "F11") {
        //
        event.preventDefault();
        this.fullScreen();
      }
    });
  },
  methods: {
    fullScreen() {
      // 退出全屏后要执行的动作

      if (!this.isFull) {
        this.requestFullScreen();
      } else {
        this.ExitFullscreen();
      }
      this.isFull = !this.isFull;
      // 为了兼容要写两套
    },
    requestFullScreen() {
      let de = document.body;
      console.log(de.requestFullscreen, "de.requestFullscreen");
      if (de.requestFullscreen) {
        de.requestFullscreen();
      } else if (de.mozRequestFullScreen) {
        de.mozRequestFullScreen();
      } else if (de.webkitRequestFullScreen) {
        de.webkitRequestFullScreen();
      }
    },
    ExitFullscreen() {
      let de = document;
      // console.log(de.exitFullscreen, "de.exitFullscreen");

      if (de.exitFullscreen) {
        de.exitFullscreen();
      } else if (de.mozCancelFullScreen) {
        de.mozCancelFullScreen();
      } else if (de.webkitCancelFullScreen) {
        de.webkitCancelFullScreen();
      }
    },
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
.fullbutton {
  margin-top: 2px;
  margin-left: 24px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  background: url(~@/assets/icons/full.png) no-repeat;
  background-size: contain;
  position: relative;
  z-index: 2;
}
</style>

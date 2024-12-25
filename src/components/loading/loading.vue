<template>
  <div class="laodingBox" @click.stop v-show="show">
    <div class="gLoading">
      <img class="gLoading_icon" :src="loadingImg" />
      <p class="tips">loading...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingBox",
  data() {
    return {
      show: false,
      loadingImg: require("./images/loading-blue.png"),
    };
  },
};
</script>

<style scoped>
.laodingBox {
  position: fixed;
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255, 0.3);
  z-index: 10002;
  top: 0;
  left: 0;
}
.gLoading {
  top: 50%;
  left: 50%;
  width: 112px;
  padding: 16px 16px 14px 16px;
  height: 112px;
  z-index: 1000;
  display: flex;
  border-radius: 6px;
  position: fixed;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform: translate(-50%, -50%);
  /* background: rgba(0, 0, 0, 0); */
  /* box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15); */
  font-size: 16px;
  box-sizing: border-box;
}
.gLoading_icon {
  width: 36px;
  height: 36px;
  animation: turn 1.5s linear infinite;
}
.tips {
  margin-top: 8px;
  font-size: 16px;
  font-weight: 400;
  color: #1a7efa;
}

@keyframes turn {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  75% {
    -webkit-transform: rotate(270deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
</style>

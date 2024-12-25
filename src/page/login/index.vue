<template>
  <div class="login-box fx fx-cl ht-fl wd-fl of-hd">
    <Header />
    <div class="home-bg fx-fl fx-ct-ct">
      <div class="login-content fx">
        <Account />
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/header/Header.vue";
import Account from "./account.vue";
export default {
  name: "LoginPage",
  components: {
    Header,
    Account,
  },
};
</script>
<style lang="scss" scoped>
.home-bg {
  height: calc(100% - 68px);
}
.home-bg {
  background-image: url("~@/assets/login/home_bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.login-content {
  width: 568px;
  height: 562px;
}
</style>

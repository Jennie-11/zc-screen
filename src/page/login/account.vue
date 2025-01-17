<template>
  <div class="account-box pd-lf-112 fx-fl wd-0 bd-fff-4 bd-rd-8">
    <div class="login-title cr-bk-9 ft-40 lh-40 tx-ct">账号密码登录</div>
    <div class="ht-1 bg-b3e mg-tp-44 mg-bt-52"></div>
    <el-form :model="loginForm" :rules="rules" ref="ruleForm">
      <el-form-item prop="username" class="mg-bt-48">
        <el-input
          :placeholder="$t('login.placeUsername')"
          autocomplete="new-password"
          v-model="loginForm.username"
          @keyup.enter.native="loginHandle"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          :placeholder="$t('login.placePassword')"
          autocomplete="new-password"
          v-model="loginForm.password"
          :show-password="isShowPassWord"
          @keyup.enter.native="loginHandle"
        >
          <i
            slot="suffix"
            class="el-input__icon custom-icon ht-28 mg-rt-10 cs-pt"
            :class="isShowPassWord ? 'isHide' : 'isShow'"
            @click="isShowPassWord = !isShowPassWord"
          ></i>
        </el-input>
      </el-form-item>
    </el-form>
    <div
      class="blue-btn fx-ct-ct ft-24 cr-wt-10 bg-17a bd-49b-1 bd-rd-8 ht-64 mg-tp-72 cs-pt"
      @click="loginHandle"
    >
      登录
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountBox",
  data() {
    return {
      isShowPassWord: true,
      loginForm: {
        username: "",
        password: "",
        tenantId: "000000",
      },
      rules: {
        username: [
          {
            required: true,
            message: this.$t("login.placeUsername"),
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: this.$t("login.placePassword"),
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {},
  methods: {
    loginHandle() {
      this.$refs["ruleForm"].validate((valid) => {
        if (!valid) return;
        this.$store
          .dispatch("LoginByUsername", { ...this.loginForm })
          .then(() => {
            this.$message({
              message: this.$t("login.success"),
              type: "success",
              duration: 1500,
            });
            this.$router.push("/home");
          });
      });
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
::v-deep .el-input {
  .el-input__inner {
    height: 60px;
    padding-left: 24px;
    font-size: 20px;
    &::placeholder {
      font-size: 20px;
    }
  }
  .el-input__suffix {
    right: 4px !important;
    font-size: 24px;
    right: 12px;
  }
}
::v-deep .el-icon-view {
  display: none !important;
}

::v-deep .custom-icon {
  width: 28px !important;
  &.isHide {
    background: url("~@/assets/common/unview.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
  &.isShow {
    background: url("~@/assets/common/view.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
}

.account-box {
  padding: 52px 60px 60px 60px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.5) 100%
  );
  .login-title {
    font-family: "PanMen";
    letter-spacing: 8px;
  }
}
</style>

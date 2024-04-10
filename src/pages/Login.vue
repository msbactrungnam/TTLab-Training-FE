<template>
  <v-app class="login-main">
    <div>
      <v-img
        class="logo mx-auto my-6"
        src="../assets/images/ttlab-logo.png"
      ></v-img>
      <h1 class="title">Đăng nhập</h1>
    </div>
    <v-form max-width="426px" class="mx-auto pa-8">
      <div class="mb-2">Email</div>
      <v-text-field
        density="compact"
        placeholder="Nhập Email"
        variant="text"
        autocomplete="email"
        hide-details
      ></v-text-field>
      <div class="mt-6 mb-2">Mật khẩu</div>
      <v-text-field
        :append-inner-icon="
          visible ? 'mdi:mdi-eye-off-outline pb-3' : 'mdi:mdi-eye-outline pb-3'
        "
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Nhập mật khẩu"
        variant="text"
        autocomplete="current-password"
        hide-details
        @click:append-inner="visible = !visible"
      ></v-text-field>
      <div
        style="height: 20px"
        class="my-6 d-flex align-center justify-space-between"
      >
        <v-checkbox
          center-affix
          style="font-size: 14px"
          base-color="#BFC4EA"
          color="#BFC4EA"
          hide-details
          false-icon="mdi:mdi-checkbox-blank-outline "
          true-icon="mdi:mdi-checkbox-marked "
          label="Ghi nhớ mật khẩu"
        ></v-checkbox>
        <a href="#"> Quên mật khẩu?</a>
      </div>
      <v-btn block flat height="48" class="login-submit mb-8">Đăng nhập</v-btn>
      <v-card-text style="font-weight: 400" class="text-center pa-0">
        <p>Bạn chưa có tài khoản?<a href="#"> &nbsp;Đăng ký</a></p>
      </v-card-text>
    </v-form>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    visible: false,
  }),
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap");
a {
  text-decoration: none;
  color: #0f60ff;
}
.v-text-field {
  height: 32px;
  padding: 0;
  border-radius: 6px;
  border: solid 1px #868fa029;
  box-shadow: 0px 1px 2px 0px #0000000f;
  :deep(input) {
    padding: 0px 12px 8px 12px;
  }
}

.logo {
  width: 108px;
  height: 60px;
}
.title {
  font-family: "Public Sans", sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
  text-align: center;
}
.login-main {
  font-family: "Public Sans", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.02em;
}

.login-submit {
  width: 426px;
  font-size: 16px;
  line-height: 20px;
  background-color: #0f60ff;
  color: white;
  padding: 14px 32px 14px 32px;
  border-radius: 6px;
}
:deep(.v-selection-control__input) {
  width: 16px;
  height: 16px;
}
:deep(.v-selection-control__wrapper) {
  width: 16px;
  height: 16px;
}
:deep(.v-label) {
  padding-left: 8px;
}
</style>

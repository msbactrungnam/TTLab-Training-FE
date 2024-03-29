<template>
  <v-app-bar flat app class="headbar-main">
    <v-container fluid class="headBar">
      <v-container fluid class="d-flex align-center justify-center pa-0">
        <span>
          Sign up and get 20% off to your first order.
          <a href="/login">Sign Up Now</a>
        </span>
      </v-container>
      <span class="icon-close hidden-xs"><v-icon icon="mdi:mdi-close" /></span>
    </v-container>
  </v-app-bar>
</template>
<style lang="scss" scoped>
.headbar-main {
  width: 100vw !important;
  position: fixed !important;
}
.headBar {
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-family: "Satoshi-Variable";
    font-size: 14px;
    font-weight: 400;
    line-height: 18.9px;
    display: inline;
    a {
      font-family: "Satoshi-Bold";
      font-weight: 500;
      color: white;
    }
  }
  .icon-close {
    cursor: pointer;
  }
}
@media only screen and (max-width: 600px) {
  .headBar {
    span {
      font-family: "Satoshi-Variable";
      font-size: 12px;
      font-weight: 400;
      line-height: 16.2px;
      display: inline;
      a {
        font-family: "Satoshi-Bold";
        font-weight: 500;
        color: white;
      }
    }
  }
}
</style>

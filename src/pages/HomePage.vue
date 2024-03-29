<template>
  <v-app>
    <HeadBar class="headbar" />
    <NavBar class="navbar" />
    <HomeTitle />
    <NewArrivals class="new-arrivals" />
    <TopSelling />
    <DressStyle />
    <CustomerReview />
    <AppFooter />
  </v-app>
</template>

<script lang="ts" setup>
//
</script>
<style lang="scss">
.headbar {
  .v-toolbar__content {
    height: 38px !important;
  }
}

.new-arrivals {
  padding-bottom: 64px;
  border-bottom: 1px solid #0000001a;
}
@media screen and (max-width: 600px) {
  .headbar {
    position: fixed !important;
    .v-toolbar__content {
      height: 34px !important;
    }
  }
  .navbar {
    position: fixed !important;
    top: 36px !important;
    .v-toolbar__content {
      height: 64px !important;
    }
  }
}
</style>

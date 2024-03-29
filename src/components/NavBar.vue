<template>
  <v-navigation-drawer class="hidden-lg" v-model="drawer" temporary>
    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-app-bar class="nav-bar-main" :height="isMobile ? 64 : 96" flat>
    <template v-slot:prepend>
      <v-app-bar-nav-icon
        v-bind="props"
        icon="mdi:mdi-menu"
        class="hidden-lg"
        @click="drawer = !drawer"
      >
      </v-app-bar-nav-icon>
    </template>
    <v-container
      fluid
      class="nav-bar d-flex align-center justify-space-between"
    >
      <v-flex cols="1"><span class="logo-text">SHOP.CO</span></v-flex>
      <v-flex cols="5" class="nav-button hidden-xs">
        <v-menu location="bottom">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props"
              >Shop <v-icon icon="mdi:mdi-chevron-down"
            /></v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn>On Sale</v-btn>
        <v-btn>New Arrivals</v-btn>
        <v-btn>Brands</v-btn>
      </v-flex>
      <v-col cols="5" class="hidden-xs">
        <v-text-field
          class="nav-search"
          density="comfortable"
          rounded
          variant="solo-invert"
          hide-details
          placeholder="Search for products..."
          prepend-inner-icon="mdi:mdi-magnify"
        ></v-text-field
      ></v-col>
      <v-flex class="d-flex flex-row justify-space-between" cols="1">
        <v-icon
          size="24"
          class="cart-icon hidden-lg mr-2"
          icon="mdi:mdi-magnify"
        />
        <v-icon size="24" class="cart-icon mr-2" icon="mdi:mdi-cart-variant" />
        <v-icon
          size="24"
          class="account-icon"
          icon="mdi:mdi-account-circle-outline"
        />
      </v-flex>
    </v-container>
  </v-app-bar>
</template>
<style lang="scss" scoped>
.nav-bar-main {
  width: 100vw !important;
  position: fixed !important;
  top: 38px !important;

  .nav-bar {
    height: 48px;
    padding: 0 100px;

    .logo-text {
      cursor: pointer;
      font-family: "Integralcf-Extra-Bold";
      font-size: 32px;
      font-weight: 700;
      line-height: 38.4px;
      padding-right: 12px;
    }
    .nav-button {
      font-family: "Satoshi-Variable";
      font-size: 16px;
      font-weight: 400;
      line-height: 21.6px;
    }
    .nav-search {
      font-family: "Satoshi-Variable";
      font-size: 16px;
      font-weight: 400;
      line-height: 21.6px;
      text-align: left;
      background-color: #f0f0f0;
      border-radius: 62px;
    }
    .account-icon {
      cursor: pointer;
    }
    .cart-icon {
      cursor: pointer;
    }
  }
  .v-btn {
    text-transform: capitalize;
  }
}
@media only screen and (max-width: 600px) {
  .nav-bar-main {
    top: 34px !important;
    .nav-bar {
      height: 18px;
      padding: 0px 16px 0px 0px;

      .logo-text {
        cursor: pointer;
        font-family: "Integralcf-Extra-Bold";
        font-size: 25.2px;
        font-weight: 700;
        line-height: 30.24px;
      }
    }
  }
}
</style>
<script>
export default {
  data: () => ({
    drawer: false,
    items: [
      { title: "Shop 1" },
      { title: "Shop 2" },
      { title: "Shop 3" },
      { title: "Shop 4" },
    ],
  }),
  computed: {
    isMobile() {
      return window.innerWidth <= 600; // Điều kiện cho màn hình `xs`
    },
  },
};
</script>

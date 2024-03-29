<template>
  <v-app>
    <section class="home-main">
      <v-container fluid class="home-title">
        <v-row>
          <v-col cols="12" lg="6" class="title mr-3">
            <v-container class="home-page-container">
              <h1 class="slogan mb-4">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
              <p class="description">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <v-btn class="shop-now-btn mt-4" rounded outlined :elevation="0"
                >Shop Now</v-btn
              >
              <v-row class="homepage-info mt-4">
                <v-col class="pl-3">
                  <h1>200+</h1>
                  <p>International Brands</p>
                </v-col>
                <v-col>
                  <h1>2,000+</h1>
                  <p>High-Quality Products</p>
                </v-col>
                <v-col>
                  <h1>30,000+</h1>
                  <p>Happy Customers</p>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
          <v-col class="banner">
            <v-row no-gutters dense>
              <v-col cols="6"></v-col>
              <v-col cols="6"
                ><img class="star-top" src="../assets/images/star.png"
              /></v-col>
            </v-row>
            <v-row no-gutters dense>
              <v-col cols="6"
                ><img class="star-bottom" src="../assets/images/star.png"
              /></v-col>
              <v-col cols="6"></v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section>
      <v-container
        class="brand-logo mt-1 pa-0"
        fluid
        d-flex
        align-center
        justify-evenly
      >
        <v-row class="logo">
          <v-col cols="2"
            ><img height="33.16 px" src="../assets/images/brand/Versace.png"
          /></v-col>
          <v-col cols="2"
            ><img height="38 px" src="../assets/images/brand/Zara.png"
          /></v-col>
          <v-col cols="2"
            ><img height="36 px" src="../assets/images/brand/Gucci.png"
          /></v-col>
          <v-col cols="2"
            ><img height="32 px" src="../assets/images/brand/Pranda.png"
          /></v-col>
          <v-col cols="2"
            ><img
              height="33.35 px"
              src="../assets/images/brand/CalvinKlein.png"
          /></v-col>
        </v-row>
      </v-container>
    </section>
  </v-app>
</template>
<style lang="scss" scoped>
.home-main {
  margin-top: 134px;
}
.home-title {
  background-color: #f2f0f1;
  height: 663px;
  .home-page-container {
    padding: 0px 100px;
  }
  .title {
    .shop-now-btn {
      width: 210px;
      height: 52px;
      gap: 12px;
      background-color: black;
      color: white;
      font-family: "Satoshi-Variable";
      font-size: 16px;
      font-weight: 500;
      line-height: 21.6px;
    }
    .slogan {
      font-family: "Integralcf-Extra-Bold";
      font-size: 64px;
      font-weight: 700;
      line-height: 64px;
      text-align: left;
    }
    .description {
      font-family: "Satoshi-Variable";
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
      text-align: left;
    }

    .homepage-info {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      .v-col {
        padding-left: 40px;
        border-right: 1px solid #0000001a;
      }
      h1 {
        font-family: "Satoshi-Bold";
        font-size: 40px;
        font-weight: 700;
        line-height: 54px;
        text-align: left;
      }
      p {
        font-family: "Satoshi-Light";
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        text-align: left;
      }
    }
  }
  .banner {
    width: 100%;
    height: 663px;
    background-image: url("../assets/images/banner.jpg");
    background-size: 100% 150%;
    background-repeat: no-repeat;
    .v-row {
      height: 50%;
    }
    .star-top {
      height: 104px;
      width: 104px;
      position: relative;
      top: 10em;
      right: -15em;
    }
    .star-bottom {
      height: 56px;
      width: 56px;
      position: relative;
      top: 3em;
      right: -5em;
    }
  }
}
.brand-logo {
  background-color: black;
  height: 122px;
  display: flex;
  .logo {
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    margin: 0;
    padding: 0;
  }
}
.v-btn {
  text-transform: capitalize;
}
@media only screen and (max-width: 600px) {
  .home-main {
    margin-top: 98px;
  }
  .home-title {
    height: 853px;
    .home-page-container {
      padding: 0px 16px;
    }
  }
}
</style>

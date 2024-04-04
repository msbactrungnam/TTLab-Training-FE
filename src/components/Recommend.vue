<template>
  <div class="main-content">
    <h1 class="my-lg-12">YOU MIGHT ALSO LIKE</h1>
    <v-container fluid d-flex align-center justify-evenly>
      <v-row class="mb-2">
        <v-col>
          <ProductCard
            :rating="4.0"
            title="Polo with Contrast Trims"
            price="$212"
            originalPrice="$242"
            saleValue="-20%"
            image="../assets/images/recommend/PolowithContrastTrims.png"
          />
        </v-col>
        <v-col>
          <ProductCard
            :rating="3.5"
            title="Gradient Graphic T-shirt"
            price="$145"
            image="../assets/images/recommend/GradientGraphicT-shirt.png"
          />
        </v-col>
        <v-col class="hidden-sm-and-down">
          <ProductCard
            :rating="4.5"
            title="Polo with Tipping Details"
            price="$180"
            image="../assets/images/recommend/PolowithTippingDetails.png"
          />
        </v-col>
        <v-col class="hidden-sm-and-down">
          <ProductCard
            :rating="5.0"
            title="Black Striped T-shirt"
            price="$120"
            originalPrice="$150"
            saleValue="-30%"
            image="../assets/images/recommend/BlackStripedT-shirt.png"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style lang="scss" scoped>
.main-content {
  padding: 0 100px;
}
h1 {
  font-family: "Integralcf-Bold";
  font-size: 48px;
  font-weight: 700;
  line-height: 57.6px;
  text-align: center;
}

.view-all {
  width: 218px;
  height: 52px;
  padding: 16px 54px 16px 54px;
  color: #000000;
  span {
    font-family: "Satoshi-Variable";
    font-size: 16px;
    font-weight: 500;
    line-height: 21.6px;
    text-align: center;
  }
}
@media only screen and (max-width: 600px) {
  .main-content {
    padding: 0 4px;
    height: 513px;
  }
  h1 {
    margin: 32px 0;
    font-size: 32px;
    line-height: 38.4px;
  }
  .v-row {
    display: flex;
    flex-wrap: nowrap;
  }
  .view-all {
    width: 100%;
  }
}
</style>
<script>
import ProductCard from "./basic/ProductCard"; // Adjust the path accordingly

export default {
  components: {
    ProductCard,
  },
};
</script>

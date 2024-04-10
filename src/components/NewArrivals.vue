<template>
  <div class="main-content">
    <h1 class="my-lg-12">NEW ARRIVALS</h1>
    <v-container fluid d-flex align-center justify-evenly>
      <v-row class="mb-2">
        <v-col>
          <ProductCard
            :rating="4.5"
            title="T-shirt with Tape Details"
            price="$120"
            image="../assets/images/newarrivals/T-SHIRT.png"
          />
        </v-col>
        <v-col>
          <ProductCard
            :rating="3.5"
            title="Skinny Fit Jeans"
            price="$240"
            originalPrice="$260"
            saleValue="-20%"
            image="../assets/images/newarrivals/JEANS.png"
          />
        </v-col>
        <v-col class="hidden-sm-and-down">
          <ProductCard
            :rating="4.5"
            title="Checkered Shirt"
            price="$180"
            image="../assets/images/newarrivals/CHECKERED SHIRT.png"
          />
        </v-col>
        <v-col class="hidden-sm-and-down">
          <ProductCard
            :rating="4.5"
            title="Sleeve Striped T-shirt"
            price="$130"
            originalPrice="$160"
            saleValue="-30%"
            image="../assets/images/newarrivals/SLEEVE_STRIPED T-SHIRT.png"
          />
        </v-col>
      </v-row>
      <v-sheet class="d-flex justify-lg-center mb-12">
        <v-btn
          class="view-all text-capitalize d-flex align-content-center"
          rounded
          variant="outlined"
          :elevation="0"
          >View All</v-btn
        >
      </v-sheet>
    </v-container>
    <v-divider></v-divider>
  </div>
</template>
<style lang="scss" scoped>
.main-content {
  padding: 0 100px;
  height: 745px;
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
    overflow: hidden;
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

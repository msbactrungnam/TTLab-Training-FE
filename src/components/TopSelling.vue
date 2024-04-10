<template>
  <div class="main-content">
    <h1 class="my-lg-12">TOP SELLING</h1>
    <v-container fluid d-flex align-center justify-evenly>
      <v-row class="mb-2">
        <v-col>
          <ProductCard
            :rating="5.0"
            title="Vertical Striped Shirt"
            price="$212"
            originalPrice="$232"
            saleValue="-20%"
            image="../assets/images/topselling/VERTICAL_STRIPED_SHIRT.png"
          />
        </v-col>
        <v-col>
          <ProductCard
            :rating="4.0"
            title="Courage Graphic T-shirt"
            price="$145"
            image="../assets/images/topselling/COURAGE_GRAPHIC_T-SHIRT.png"
          />
        </v-col>
        <v-col class="hidden-sm-and-down">
          <ProductCard
            :rating="3.0"
            title="Loose Fit Bermuda Shorts"
            price="$80"
            image="../assets/images/topselling/LOOSE_FIT_BERMUDA_SHORTS.png"
          />
        </v-col>
        <v-col class="hidden-sm-and-down">
          <ProductCard
            :rating="4.5"
            title="Loose Fit Bermuda Shorts"
            price="$210"
            image="../assets/images/topselling/FADED_SKINNY_JEANS.png"
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

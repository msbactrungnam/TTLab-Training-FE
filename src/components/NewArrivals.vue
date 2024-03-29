<template>
  <v-container>
    <h1 class="mt-12">NEW ARRIVALS</h1>
    <v-container d-flex align-center justify-evenly>
      <v-row>
        <v-col cols="3">
          <v-card
            :loading="loading"
            class="my-12"
            max-width="295px"
            :elevation="0"
          >
            <template v-slot:loader="{ isActive }">
              <v-progress-linear
                :active="isActive"
                height="4"
                indeterminate
              ></v-progress-linear>
            </template>
            <v-img
              class="rounded-xl"
              width="295px"
              height="295px"
              src="../assets/images/newarrivals/T-SHIRT.png"
              cover
            ></v-img>
            <v-card-item class="pl-0">
              <v-card-title
                ><p class="title">T-shirt with Tape Details</p></v-card-title
              >
            </v-card-item>
            <v-card-text class="pl-0">
              <v-row align="center" class="mx-0">
                <v-rating
                  :model-value="4.5"
                  color="amber"
                  density="compact"
                  size="small"
                  half-increments
                  readonly
                  emptyIcon=""
                  fullIcon="mdi:mdi-star"
                  halfIcon="mdi:mdi-star-half"
                ></v-rating>
                <div class="rate text-grey ms-4"><span>4.5/</span>5</div>
              </v-row>
              <v-row align="center" class="mx-0">
                <div class="text-subtitle-1 d-flex align-center">
                  <span class="price mr-2">$120</span>
                  <!-- <span class="original-price mr-2 text-decoration-line-through"
                    >$260</span
                  >
                  <span class="sale-value d-flex align-center justify-center">-20%</span> -->
                </div>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card
            :loading="loading"
            class="my-12"
            max-width="295px"
            :elevation="0"
          >
            <template v-slot:loader="{ isActive }">
              <v-progress-linear
                :active="isActive"
                height="4"
                indeterminate
              ></v-progress-linear>
            </template>
            <v-img
              class="rounded-xl"
              width="295px"
              height="295px"
              src="../assets/images/newarrivals/JEANS.png"
              cover
            ></v-img>
            <v-card-item class="pl-0">
              <v-card-title><p class="title">Skinny Fit Jeans</p></v-card-title>
            </v-card-item>
            <v-card-text class="pl-0">
              <v-row align="center" class="mx-0">
                <v-rating
                  :model-value="3.5"
                  color="amber"
                  density="compact"
                  size="small"
                  half-increments
                  readonly
                  emptyIcon=""
                  fullIcon="mdi:mdi-star"
                  halfIcon="mdi:mdi-star-half"
                ></v-rating>
                <div class="rate text-grey ms-4"><span>3.5/</span>5</div>
              </v-row>
              <v-row align="center" class="mx-0">
                <div class="text-subtitle-1 d-flex align-center">
                  <span class="price mr-2">$240</span>
                  <span class="original-price mr-2 text-decoration-line-through"
                    >$260</span
                  >
                  <span class="sale-value d-flex align-center justify-center"
                    >-20%</span
                  >
                </div>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card
            :loading="loading"
            class="my-12"
            max-width="295px"
            :elevation="0"
          >
            <template v-slot:loader="{ isActive }">
              <v-progress-linear
                :active="isActive"
                height="4"
                indeterminate
              ></v-progress-linear>
            </template>
            <v-img
              class="rounded-xl"
              width="295px"
              height="295px"
              src="../assets/images/newarrivals/CHECKERED SHIRT.png"
              cover
            ></v-img>
            <v-card-item class="pl-0">
              <v-card-title><p class="title">Checkered Shirt</p></v-card-title>
            </v-card-item>
            <v-card-text class="pl-0">
              <v-row align="center" class="mx-0">
                <v-rating
                  :model-value="4.5"
                  color="amber"
                  density="compact"
                  size="small"
                  half-increments
                  readonly
                  emptyIcon=""
                  fullIcon="mdi:mdi-star"
                  halfIcon="mdi:mdi-star-half"
                ></v-rating>
                <div class="rate text-grey ms-4"><span>4.5/</span>5</div>
              </v-row>
              <v-row align="center" class="mx-0">
                <div class="text-subtitle-1 d-flex align-center">
                  <span class="price mr-2">$180</span>
                  <!-- <span class="original-price mr-2 text-decoration-line-through"
                    >$260</span
                  >
                  <span class="sale-value d-flex align-center justify-center">-20%</span> -->
                </div>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card
            :loading="loading"
            class="my-12"
            max-width="295px"
            :elevation="0"
          >
            <template v-slot:loader="{ isActive }">
              <v-progress-linear
                :active="isActive"
                height="4"
                indeterminate
              ></v-progress-linear>
            </template>
            <v-img
              class="rounded-xl"
              width="295px"
              height="295px"
              src="../assets/images/newarrivals/SLEEVE_STRIPED T-SHIRT.png"
              cover
            ></v-img>
            <v-card-item class="pl-0">
              <v-card-title
                ><p class="title">Sleeve Striped T-shirt</p></v-card-title
              >
            </v-card-item>
            <v-card-text class="pl-0">
              <v-row align="center" class="mx-0">
                <v-rating
                  :model-value="4.5"
                  color="amber"
                  density="compact"
                  size="small"
                  half-increments
                  readonly
                  emptyIcon=""
                  fullIcon="mdi:mdi-star"
                  halfIcon="mdi:mdi-star-half"
                ></v-rating>
                <div class="rate text-grey ms-4"><span>4.5/</span>5</div>
              </v-row>
              <v-row align="center" class="mx-0">
                <div class="text-subtitle-1 d-flex align-center">
                  <span class="price mr-2">$130</span>
                  <span class="original-price mr-2 text-decoration-line-through"
                    >$160</span
                  >
                  <span class="sale-value d-flex align-center justify-center"
                    >-30%</span
                  >
                </div>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-sheet class="d-flex justify-center">
      <v-btn
        class="view-all text-capitalize d-flex align-content-center"
        rounded
        variant="outlined"
        :elevation="0"
        >View All</v-btn
      >
    </v-sheet>
  </v-container>
</template>
<style lang="scss" scoped>
h1 {
  font-family: "Integralcf-Bold";
  font-size: 48px;
  font-weight: 700;
  line-height: 57.6px;
  text-align: center;
}
.title {
  font-family: "Satoshi-Bold";
  font-size: 20px;
  font-weight: 700;
  line-height: 27px;
}
.price {
  font-family: "Satoshi-Bold";
  font-size: 24px;
  font-weight: 700;
  line-height: 32.4px;
}
.rate {
  font-family: "Satoshi-Variable";
  font-size: 14px;
  font-weight: 400;
  line-height: 18.9px;
  text-align: left;
  color: #00000099;
  span {
    color: #000000;
  }
}
.original-price {
  font-family: "Satoshi-Variable";
  color: #00000066;
  font-size: 24px;
  font-weight: 700;
  line-height: 32.4px;
  text-align: left;
}
.sale-value {
  width: 58px;
  height: 28px;
  padding: 6px 14px 6px 14px;
  gap: 12px;
  border-radius: 62px;
  opacity: 0px;
  background-color: #ff33331a;
  color: #ff3333;

  span {
    font-family: "Satoshi-Variable";
    font-size: 12px;
    font-weight: 500;
    line-height: 16.2px;
  }
}
.view-all {
  width: 218px;
  height: 52px;
  padding: 16px 54px 16px 54px;
  color: #000000;
  border: 1px solid #0000001a !important;
  span {
    font-family: "Satoshi-Variable";
    font-size: 16px;
    font-weight: 500;
    line-height: 21.6px;
    text-align: center;
  }
}
</style>

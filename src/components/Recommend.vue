<template>
  <v-container>
    <h1 class="mt-12">You might also like</h1>
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
              src="../assets/images/recommend/PolowithContrastTrims.png"
              cover
            ></v-img>
            <v-card-item class="pl-0">
              <v-card-title
                ><p class="title">Polo with Contrast Trims</p></v-card-title
              >
            </v-card-item>
            <v-card-text class="pl-0">
              <v-row align="center" class="mx-0">
                <v-rating
                  :model-value="4"
                  color="amber"
                  density="compact"
                  size="small"
                  half-increments
                  readonly
                  emptyIcon=""
                  fullIcon="mdi:mdi-star"
                  halfIcon="mdi:mdi-star-half"
                ></v-rating>
                <div class="rate text-grey ms-4"><span>4.0/</span>5</div>
              </v-row>
              <v-row align="center" class="mx-0">
                <div class="text-subtitle-1 d-flex align-center">
                  <span class="price mr-2">$212</span>
                  <span class="original-price mr-2 text-decoration-line-through"
                    >$242</span
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
              src="../assets/images/recommend/GradientGraphicT-shirt.png"
              cover
            ></v-img>
            <v-card-item class="pl-0">
              <v-card-title
                ><p class="title">Gradient Graphic T-shirt</p></v-card-title
              >
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
                  <span class="price mr-2">$145</span>
                  <!-- <span class="original-price mr-2 text-decoration-line-through"
                    >$260</span
                  >
                  <span class="sale-value d-flex align-center justify-center"
                    >-20%</span
                  > -->
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
              src="../assets/images/recommend/PolowithTippingDetails.png"
              cover
            ></v-img>
            <v-card-item class="pl-0">
              <v-card-title
                ><p class="title">Polo with Tipping Details</p></v-card-title
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
              src="../assets/images/recommend/BlackStripedT-shirt.png"
              cover
            ></v-img>
            <v-card-item class="pl-0">
              <v-card-title
                ><p class="title">Black Striped T-shirt</p></v-card-title
              >
            </v-card-item>
            <v-card-text class="pl-0">
              <v-row align="center" class="mx-0">
                <v-rating
                  :model-value="5"
                  color="amber"
                  density="compact"
                  size="small"
                  half-increments
                  readonly
                  emptyIcon=""
                  fullIcon="mdi:mdi-star"
                  halfIcon="mdi:mdi-star-half"
                ></v-rating>
                <div class="rate text-grey ms-4"><span>5.0/</span>5</div>
              </v-row>
              <v-row align="center" class="mx-0">
                <div class="text-subtitle-1 d-flex align-center">
                  <span class="price mr-2">$130</span>
                  <!-- <span class="original-price mr-2 text-decoration-line-through"
                    >$160</span
                  >
                  <span class="sale-value d-flex align-center justify-center"
                    >-30%</span
                  > -->
                </div>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
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
</style>

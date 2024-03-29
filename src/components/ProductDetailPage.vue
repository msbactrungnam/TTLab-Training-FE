<template>
  <v-app>
    <div class="section-border pa-0"></div>
    <v-container
      fluid
      style="padding: 0 100px"
      class="product-content"
      height="200px"
    >
      <v-breadcrumbs class="breadcrumbs-text my-2 pl-0" :items="breadcrumbs">
        <template v-slot:divider>
          <v-icon color="#00000099" icon="mdi:mdi-chevron-right"></v-icon>
        </template>
      </v-breadcrumbs>
      <v-container fluid>
        <v-row>
          <v-col cols="6" class="d-flex">
            <div class="d-flex flex-column">
              <div class="small-product-image mb-4">
                <v-img
                  class="rounded-xl"
                  cover
                  height="167px"
                  src="../assets/images/productdetail/t-shirt-1.png"
                ></v-img>
              </div>
              <div class="small-product-image mb-4">
                <v-img
                  class="rounded-xl"
                  cover
                  height="167px"
                  src="../assets/images/productdetail/t-shirt-2.png"
                ></v-img>
              </div>
              <div class="small-product-image">
                <v-img
                  class="rounded-xl"
                  cover
                  height="167px"
                  src="../assets/images/productdetail/t-shirt-3.png"
                ></v-img>
              </div>
            </div>
            <div class="large-product-image ml-4">
              <v-img
                class="rounded-xl"
                cover
                height="532px"
                src="../assets/images/productdetail/t-shirt-1.png"
              ></v-img>
            </div>
          </v-col>
          <v-col cols="6" class="d-flex flex-column justify-space-between">
            <h1 class="product-title">ONE LIFE GRAPHIC T-SHIRT</h1>
            <v-rating
              :model-value="5"
              style="height: 24.71px"
              color="amber"
              density="compact"
              size="small"
              half-increments
              readonly
              emptyIcon=""
              fullIcon="mdi:mdi-star"
              halfIcon="mdi:mdi-star-half"
            ></v-rating>
            <div class="text-subtitle-1 d-flex align-center">
              <span class="price mr-2">$260</span>
              <span class="original-price mr-2 text-decoration-line-through"
                >$300</span
              >
              <span class="sale-value d-flex align-center justify-center"
                >-40%</span
              >
            </div>
            <p class="product-description">
              This graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and breathable fabric, it offers superior comfort and
              style.
            </p>
            <div class="select-color py-4">
              <p class="pb-4">Select Colors</p>
              <div class="d-flex justify-start align-center">
                <v-chip-group filter class="color-select-btn" mandatory="force">
                  <v-chip
                    class="d-flex justify-center"
                    filter-icon="mdi:mdi-check ml-3"
                    color="white"
                    style="background-color: #4f4631"
                  ></v-chip>
                  <v-chip
                    class="d-flex justify-center"
                    filter-icon="mdi:mdi-check ml-3"
                    color="white"
                    style="background-color: #314f4a"
                  ></v-chip>
                  <v-chip
                    class="d-flex justify-center"
                    filter-icon="mdi:mdi-check ml-3"
                    color="white"
                    style="background-color: #31344f"
                  ></v-chip>
                </v-chip-group>
              </div>
            </div>
            <div class="choose-size py-4">
              <p class="pb-4">Choose size</p>
              <div class="d-flex justify-start align-center">
                <v-chip-group class="size-select" mandatory="force">
                  <v-chip class="px-6">Small</v-chip>
                  <v-chip class="px-6">Medium</v-chip>
                  <v-chip class="px-6">Large</v-chip>
                  <v-chip class="px-6">X-Large</v-chip>
                </v-chip-group>
              </div>
            </div>
            <div class="d-flex justify-space-between align-center mt-4">
              <div
                class="product-number-btn d-flex justify-space-between align-center"
              >
                <v-icon size="24" icon="mdi:mdi-minus" />
                <span class="mx-3">1</span>
                <v-icon size="24" icon="mdi:mdi-plus" />
              </div>
              <v-btn :elevation="0" theme="dark" class="add-to-cart-btn"
                >Add to Cart</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-app>
</template>

<style lang="scss" scoped>
.section-border {
  margin: 150px 100px 0 100px;
  border-top: 1px solid #0000001a;
  height: 1px;
}
.product-content {
  .breadcrumbs-text {
    font-family: "Satoshi-Variable";
    font-size: 16px;
    font-weight: 400;
    line-height: 21.6px;
    text-align: left;
    color: #00000099;
  }

  .small-product-image {
    width: 152px;
    height: 167px;
    cursor: pointer;
  }
  .small-product-image:hover {
    border: 1px solid #000000;
    border-radius: 24px;
  }
  .large-product-image {
    width: 444px;
    height: 532px;
  }
  .product-title {
    font-family: "Integralcf-Regular", sans-serif;
    font-size: 40px;
    font-weight: 1000;
    line-height: 48px;
    text-align: left;
  }
  .price {
    font-family: "Satoshi-Bold";
    font-size: 32px;
    font-weight: 700;
    line-height: 43.2px;
  }

  .original-price {
    font-family: "Satoshi-Variable";
    color: #00000066;
    font-size: 32px;
    font-weight: 700;
    line-height: 43.2px;
    text-align: left;
  }
  .sale-value {
    width: 72px;
    height: 32px;
    padding: 6px 14px 6px 14px;
    gap: 12px;
    border-radius: 62px;
    opacity: 0px;
    background-color: #ff33331a;
    color: #ff3333;

    span {
      font-family: "Satoshi-Variable";
      font-size: 16px;
      font-weight: 500;
      line-height: 21.6px;
    }
  }
  .product-description {
    font-family: "Satoshi-Light";
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
    padding: 10px 0 24px 0;
    border-bottom: 1px solid #0000001a;
  }
  .select-color {
    border-bottom: 1px solid #0000001a;
    p {
      font-family: "Satoshi-Light";
      font-size: 16px;
      font-weight: 400;
      line-height: 21.6px;
      text-align: left;
    }
    .color-select-btn {
      .v-chip {
        width: 37px;
        height: 37px;
      }
    }
  }
  .choose-size {
    border-bottom: 1px solid #0000001a;
    p {
      font-family: "Satoshi-Light";
      font-size: 16px;
      font-weight: 400;
      line-height: 21.6px;
      text-align: left;
    }
    .size-select {
      .v-chip {
        height: 46px;
        font-family: "Satoshi-Light";
        font-size: 16px;
        font-weight: 400;
        line-height: 21.6px;
      }
      .v-chip--selected {
        background-color: #000000;
        color: #ffffff;
      }
    }
  }
  .product-number-btn {
    width: 170px;
    height: 52px;
    padding: 16px 20px 16px 20px;
    border-radius: 62px;
    background-color: #f0f0f0;
    span {
      font-family: "Satoshi-Variable";
      font-size: 16px;
      font-weight: 500;
      line-height: 21.6px;
    }
    i {
      cursor: pointer;
    }
  }
  .add-to-cart-btn {
    width: 400px;
    height: 52px;
    padding: 16px 54px 16px 54px;
    border-radius: 62px;
  }
}
</style>
<script setup>
import { useAppStore } from "../stores/app";
const breadcrumbs = useAppStore().breadcrumbsProduct;
</script>

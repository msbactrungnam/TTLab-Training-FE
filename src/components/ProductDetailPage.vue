<template>
  <v-app>
    <div class="section-border pa-0"></div>
    <v-container fluid class="product-content">
      <v-breadcrumbs class="breadcrumbs-text" :items="breadcrumbs">
        <template v-slot:divider>
          <v-icon color="#00000099" icon="mdi:mdi-chevron-right"></v-icon>
        </template>
      </v-breadcrumbs>
      <v-container fluid>
        <v-row>
          <v-col cols="12" lg="6" class="product-detail d-flex pa-0">
            <div class="small-product d-flex flex-lg-column">
              <div class="small-product-image mb-4">
                <v-img
                  class="rounded-xl"
                  cover
                  src="../assets/images/productdetail/t-shirt-1.png"
                ></v-img>
              </div>
              <div class="small-product-image mb-4">
                <v-img
                  class="rounded-xl"
                  cover
                  src="../assets/images/productdetail/t-shirt-2.png"
                ></v-img>
              </div>
              <div class="small-product-image">
                <v-img
                  class="rounded-xl"
                  cover
                  src="../assets/images/productdetail/t-shirt-3.png"
                ></v-img>
              </div>
            </div>
            <div class="large-product-image ml-lg-4">
              <v-img
                class="rounded-xl"
                cover
                src="../assets/images/productdetail/t-shirt-1.png"
              ></v-img>
            </div>
          </v-col>
          <v-col
            cols="12"
            lg="6"
            class="d-flex flex-column justify-space-between pa-0"
          >
            <h1 class="product-title">ONE LIFE GRAPHIC T-SHIRT</h1>
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
            <div class="select-color py-6">
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
            <div class="choose-size py-6">
              <p class="pb-4">Choose size</p>
              <div class="d-flex justify-start align-center">
                <v-chip-group class="size-select" mandatory="force">
                  <v-chip class="px-lg-6 px-5">Small</v-chip>
                  <v-chip class="px-lg-6 px-5">Medium</v-chip>
                  <v-chip class="px-lg-6 px-5">Large</v-chip>
                  <v-chip class="px-lg-6 px-5">X-Large</v-chip>
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
}

.product-content {
  padding: 0 100px;
  .breadcrumbs-text {
    padding: 36px 0;
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
@media only screen and (max-width: 600px) {
  .section-border {
    margin: 100px 16px 0 16px;
  }
  .product-detail {
    flex-direction: column-reverse;
    .small-product {
      justify-content: space-between;
    }
    .small-product-image {
      margin-top: 12px;
      width: 112px;
      height: 106px;
    }
    .large-product-image {
      width: 358px;
      height: 290px;
    }
  }
  .product-content {
    padding: 0 16px;
    .breadcrumbs-text {
      padding: 20px 0;
      font-size: 14px;
      line-height: 18.9px;
    }
    .product-title {
      font-size: 24px;
      line-height: 28px;
      width: 80%;
    }
    .price,
    .original-price {
      font-size: 32px;
      line-height: 43.2px;
    }
    .sale-value {
      width: 62px;
      height: 31px;

      span {
        font-size: 14px;
        line-height: 18.9px;
      }
    }
    .product-description {
      font-size: 14px;
      line-height: 20px;
    }
    .select-color {
      p {
        font-size: 14px;
        line-height: 18.9px;
      }
    }
    .choose-size {
      p {
        font-size: 14px;
        line-height: 18.9px;
      }
      .size-select {
        .v-chip {
          height: 39px;
          font-size: 14px;
          line-height: 18.9px;
        }
      }
    }
    .product-number-btn {
      width: 110px;
      height: 44px;
      span {
        font-size: 14px;
        line-height: 18.9px;
      }
    }
    .add-to-cart-btn {
      width: 236px;
      height: 44px;
    }
  }
}
</style>
<script setup>
import { useAppStore } from "../stores/app";
const breadcrumbs = useAppStore().breadcrumbsProduct;
</script>

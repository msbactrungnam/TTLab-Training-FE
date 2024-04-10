<template lang="">
  <v-app>
    <div class="section-border pa-0"></div>
    <v-container fluid class="cart-content">
      <v-breadcrumbs class="breadcrumbs-text my-2 pl-0" :items="breadcrumbs">
        <template v-slot:divider>
          <v-icon color="#00000099" icon="mdi:mdi-chevron-right"></v-icon>
        </template>
      </v-breadcrumbs>
      <h1 class="title mb-6">Your cart</h1>
      <v-container fluid>
        <v-row class="d-flex">
          <v-col class="cart-product" cols="12" lg="8">
            <v-container class="pa-0" fluid>
              <v-row class="py-4">
                <v-col class="product-image py-0">
                  <v-img
                    cover
                    class="rounded-xl"
                    src="../../public/category/GradientGraphicT-shirt.png"
                  ></v-img>
                </v-col>
                <v-col
                  class="product-name d-flex flex-column justify-space-between pa-0"
                >
                  <div class="d-flex flex-row justify-space-between">
                    <h3>Gradient Graphic T-shirt</h3>
                    <div>
                      <v-icon size="24" color="red" icon="mdi:mdi-trash-can" />
                    </div>
                  </div>
                  <div>
                    <p>Size:<span> Large</span></p>
                    <p class="mt-2">Color:<span> White</span></p>
                  </div>
                  <div class="d-flex flex-row align-end justify-space-between">
                    <h2>$145</h2>
                    <div
                      class="product-number-btn d-flex justify-space-between align-center"
                    >
                      <v-icon icon="mdi:mdi-minus" />
                      <span class="mx-3">1</span>
                      <v-icon icon="mdi:mdi-plus" />
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-container>
            <v-divider class="my-4"></v-divider>
            <v-container class="pa-0" fluid>
              <v-row class="py-4">
                <v-col class="product-image py-0">
                  <v-img
                    cover
                    class="rounded-xl"
                    src="../../public/category/CHECKERED_SHIRT.png"
                  ></v-img>
                </v-col>
                <v-col
                  class="product-name d-flex flex-column justify-space-between pa-0"
                >
                  <div class="d-flex flex-row justify-space-between">
                    <h3>Checkered Shirt</h3>
                    <div>
                      <v-icon size="24" color="red" icon="mdi:mdi-trash-can" />
                    </div>
                  </div>
                  <div>
                    <p>Size:<span> Medium</span></p>
                    <p class="mt-2">Color:<span> Red</span></p>
                  </div>
                  <div class="d-flex flex-row align-end justify-space-between">
                    <h2>$180</h2>
                    <div
                      class="product-number-btn d-flex justify-space-between align-center"
                    >
                      <v-icon icon="mdi:mdi-minus" />
                      <span class="mx-3">1</span>
                      <v-icon icon="mdi:mdi-plus" />
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-container>
            <v-divider class="my-4"></v-divider>
            <v-container class="pa-0" fluid>
              <v-row class="py-4">
                <v-col class="product-image py-0">
                  <v-img
                    cover
                    class="rounded-xl"
                    src="../../public/category/JEANS.png"
                  ></v-img>
                </v-col>
                <v-col
                  class="product-name d-flex flex-column justify-space-between pa-0"
                >
                  <div class="d-flex flex-row justify-space-between">
                    <h3>Skinny Fit Jeans</h3>
                    <div>
                      <v-icon size="24" color="red" icon="mdi:mdi-trash-can" />
                    </div>
                  </div>
                  <div>
                    <p>Size:<span> Large</span></p>
                    <p class="mt-2">Color:<span> Blue</span></p>
                  </div>
                  <div class="d-flex flex-row align-end justify-space-between">
                    <h2>$240</h2>
                    <div
                      class="product-number-btn d-flex justify-space-between align-center"
                    >
                      <v-icon icon="mdi:mdi-minus" />
                      <span class="mx-3">1</span>
                      <v-icon icon="mdi:mdi-plus" />
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
          <v-col class="pa-0" cols="12" lg="4">
            <v-container class="oder-summary" fluid>
              <h1>Order Summary</h1>
              <div
                class="oder-details d-flex flex-column justify-space-evenly mt-4"
              >
                <div class="d-flex mb-4 justify-space-between">
                  <span>Subtotal</span><span class="second-span">$565</span>
                </div>
                <div class="d-flex mb-4 justify-space-between">
                  <span>Discount (-20%)</span
                  ><span class="second-span" style="color: red">-$113</span>
                </div>
                <div class="d-flex mb-4 justify-space-between">
                  <span>Delivery Fee</span><span class="second-span">$15</span>
                </div>
                <v-divider class="my-5"></v-divider>
                <div class="d-flex mb-4 justify-space-between">
                  <span style="color: black">Total</span
                  ><span class="total-span">$467</span>
                </div>
              </div>
              <div class="d-flex align-center" height="48px">
                <v-text-field
                  width="547px"
                  class="promo-code"
                  density="comfortable"
                  rounded
                  variant="solo-invert"
                  hide-details
                  placeholder="Add promo code"
                  prepend-inner-icon="mdi:mdi-tag-outline"
                ></v-text-field>
                <v-btn class="apply-btn ml-2 pa-0" variant="text">Apply</v-btn>
              </div>
              <v-btn variant="text" class="checkout-btn my-6"
                >Go to Checkout <v-icon class="ml-2" icon="mdi:mdi-arrow-right"
              /></v-btn>
            </v-container>
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
.cart-content {
  padding: 0 100px;
  .breadcrumbs-text {
    font-family: "Satoshi-Variable";
    font-size: 16px;
    font-weight: 400;
    line-height: 21.6px;
    text-align: left;
    color: #00000099;
  }
  .title {
    font-family: "Integralcf-Extra-Bold";
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
    text-align: left;
  }
  .cart-product {
    padding: 20px 24px 20px 24px;
    border-radius: 20px;
    border: 1px solid #0000001a;
    .product-image {
      max-width: 164px;
      height: 124px;
      .v-img {
        width: 124px;
        height: 124px;
      }
    }
    .product-name {
      h2 {
        font-family: "Satoshi-Bold";
        font-size: 20px;
        font-weight: 700;
        line-height: 27px;
        text-align: left;
      }
      p {
        font-family: "Satoshi-Variable";
        font-size: 14px;
        font-weight: 400;
        line-height: 18.9px;
        text-align: left;
        span {
          color: #00000099;
        }
      }
      h3 {
        font-family: "Satoshi-Bold";
        font-size: 24px;
        font-weight: 700;
        line-height: 32.4px;
        text-align: left;
      }
    }
    .product-number-btn {
      font-size: 20px;
      width: 126px;
      height: 44px;
      padding: 12px 20px 12px 20px;
      border-radius: 62px;
      background-color: #f0f0f0;
      span {
        font-family: "Satoshi-Variable";
        font-size: 14px;
        font-weight: 500;
        line-height: 18.9px;
      }
      i {
        cursor: pointer;
      }
    }
  }
  .oder-summary {
    padding: 20px 24px 20px 24px;
    border-radius: 20px;
    border: 1px solid #0000001a;
    h1 {
      font-family: "Satoshi-Bold";
      font-size: 24px;
      font-weight: 700;
      line-height: 32.4px;
      text-align: left;
    }
    .oder-details {
      font-family: "Satoshi-Variable";
      font-size: 20px;
      font-weight: 400;
      line-height: 27px;
      text-align: left;
      color: #00000099;
      .second-span {
        font-weight: 700;
        color: #000000;
      }
      .total-span {
        font-family: "Satoshi-Variable";
        font-size: 24px;
        font-weight: 700;
        line-height: 32.4px;
        text-align: right;
        color: #000000;
      }
    }
    .promo-code {
      font-family: "Satoshi-Variable";
      font-size: 16px;
      font-weight: 400;
      line-height: 21.6px;
      text-align: left;
      background-color: #f0f0f0;
      border-radius: 62px;
    }
    .apply-btn {
      width: 119px;
      height: 48px;
      padding: 12px 16px 12px 16px;
      border-radius: 62px;
      background-color: black;
      color: white;
      font-family: "Satoshi-Variable";
      font-size: 16px;
      font-weight: 500;
      line-height: 21.6px;
    }
    .checkout-btn {
      width: 318px;
      height: 54px;
      font-family: "Satoshi-Variable";
      font-size: 16px;
      font-weight: 500;
      line-height: 21.6px;
      background-color: black;
      color: white;
      padding: 16px 54px 16px 54px;
      border-radius: 62px;
    }
  }
}
@media only screen and (max-width: 600px) {
  .section-border {
    margin: 100px 16px 0 16px;
  }
  .cart-content {
    padding: 0 16px;
    .breadcrumbs-text {
      padding: 20px 0;
      font-size: 14px;
      line-height: 18.9px;
    }
    .title {
      font-size: 32px;
      line-height: 38.4px;
    }
    .cart-product {
      padding: 14px;
      margin-bottom: 20px;
      .product-image {
        max-width: 139px;
        height: 99px;
        .v-img {
          width: 99px;
          height: 99px;
        }
      }
      .product-name {
        h2 {
          font-size: 16px;
          line-height: 21.6px;
        }
        p {
          font-size: 12px;
          line-height: 16.2px;
        }
        h3 {
          font-size: 16px;
          line-height: 21.6px;
        }
      }
      .product-number-btn {
        font-size: 16px;
        width: 105px;
        height: 31px;
        span {
          font-size: 14px;
          line-height: 18.9px;
        }
      }
    }
    .oder-summary {
      h1 {
        font-size: 20px;
        line-height: 27px;
      }
      .oder-details {
        font-size: 16px;
        line-height: 21.6px;
        .total-span {
          font-size: 20px;
          line-height: 27px;
        }
      }
      .promo-code {
        font-size: 14px;
        line-height: 18.9px;
      }
      .apply-btn {
        width: 88px;
        height: 48px;
        font-size: 14px;
        line-height: 18.9px;
      }
      .checkout-btn {
        width: 318px;
        height: 54px;
        font-size: 14px;
        line-height: 18.9px;
      }
    }
  }
}
</style>

<script>
import { useAppStore } from "../stores/app";
const breadcrumbs = useAppStore().breadcrumbsCart;
export default {
  data() {
    return {
      breadcrumbs,
    };
  },
};
</script>

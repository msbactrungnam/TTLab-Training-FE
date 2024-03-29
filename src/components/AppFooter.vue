<template>
  <v-footer class="footer-page d-flex justify-center" height="499px">
    <v-container class="contact rounded-xl d-flex align-center justify-center">
      <v-row>
        <v-col class="contact-title ml-12" cols="6"
          >STAY UPTO DATE ABOUT OUR LATEST OFFERS</v-col
        >
        <v-col cols="4">
          <v-text-field
            class="email-submit rounded-pill"
            hide-details
            placeholder="Enter your email address"
            prepend-inner-icon="mdi:mdi-email-outline"
          ></v-text-field>
          <div>
            <v-btn class="contact-btn rounded-pill mt-4"
              >Subscribe to Newsletter</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="contact-link mt-13">
      <v-row class="link-page d-flex justify-space-between">
        <v-col class="link-page-main" cols="3">
          <div class="logo-text">SHOP.CO</div>
          <div class="description">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </div>
          <div class="link-icons">
            <v-avatar class="link-icon mr-1" size="24" color="white"
              ><v-icon size="12" icon="mdi:mdi-twitter"
            /></v-avatar>
            <v-avatar class="link-icon mr-1" size="24" color="black"
              ><span class="facebook-icon">f</span>
            </v-avatar>
            <v-avatar class="link-icon mr-1" size="24" color="white"
              ><v-icon size="14" icon="mdi:mdi-instagram"
            /></v-avatar>
            <v-avatar class="link-icon" size="24" color="white"
              ><v-icon size="14" icon="mdi:mdi-github"
            /></v-avatar>
          </div>
        </v-col>
        <v-col cols="2">
          <div class="link-title"><a href="">COMPANY</a></div>
          <div class="link-list">
            <div class="link-list-item"><a href="">About</a></div>
            <div class="link-list-item"><a href="">Features</a></div>
            <div class="link-list-item"><a href="">Works</a></div>
            <div class="link-list-item"><a href="">Career</a></div>
          </div>
        </v-col>
        <v-col cols="2">
          <div class="link-title"><a href="">HELP</a></div>
          <div class="link-list">
            <div class="link-list-item"><a href="">Customer Support</a></div>
            <div class="link-list-item"><a href="">Delivery Details</a></div>
            <div class="link-list-item"><a href="">Terms & Conditions</a></div>
            <div class="link-list-item"><a href="">Privacy Policy</a></div>
          </div>
        </v-col>
        <v-col cols="2">
          <div class="link-title"><a href="">FAQ</a></div>
          <div class="link-list">
            <div class="link-list-item"><a href="">Account</a></div>
            <div class="link-list-item"><a href="">Manage Deliveries</a></div>
            <div class="link-list-item"><a href="">Orders</a></div>
            <div class="link-list-item"><a href="">Payments</a></div>
          </div>
        </v-col>
        <v-col cols="2">
          <div class="link-title"><a href="">RESOURCES</a></div>
          <div class="link-list">
            <div class="link-list-item"><a href="">Free eBooks</a></div>
            <div class="link-list-item">
              <a href="">Development Tutorial</a>
            </div>
            <div class="link-list-item"><a href="">How to - Blog</a></div>
            <div class="link-list-item"><a href="">Youtube Playlist</a></div>
          </div>
        </v-col>
      </v-row>
      <v-row class="copyright">
        <v-col cols="11" class="copyright-text pl-0 d-flex justify-start">
          Shop.co © 2000-2023, All Rights Reserved
        </v-col>
        <v-col cols="1" class="pr-0 d-flex justify-end">
          <v-img
            class="credit-image"
            contain
            src="../assets/images/creditcard/visa.png"
          ></v-img>
          <v-img
            class="credit-image"
            contain
            src="../assets/images/creditcard/mastercard.png"
          ></v-img>
          <v-img
            class="credit-image"
            contain
            src="../assets/images/creditcard/paypal.png"
          ></v-img>
          <v-img
            class="credit-image"
            contain
            src="../assets/images/creditcard/ipay.png"
          ></v-img>
          <v-img
            class="credit-image"
            contain
            src="../assets/images/creditcard/gpay.png"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<style lang="scss" scoped>
.footer-page {
  background-color: #f0f0f0;
  margin-top: 170px;
}
.contact {
  background-color: black;
  height: 180px;
  position: absolute;
  bottom: 409px;
  border: 1px solid #0000001a;
  .contact-title {
    color: white;
    font-family: "Integralcf-Extra-Bold";
    font-size: 40px;
    font-weight: 700;
    line-height: 45px;
    text-align: left;
  }
  .email-submit {
    align-content: center;
    background: #ffffff;
    font-family: "Satoshi-Variable";
    font-size: 16px;
    font-weight: 400;
    line-height: 21.6px;
    text-align: left;
    width: 349px;
    height: 48px;

    input {
      background: #ffffff;
    }
  }
  .contact-btn {
    width: 349px;
    height: 46px;
    background: #ffffff;
  }
}
.contact-link {
  padding: 0;
  .link-page {
    border-bottom: 1px solid #0000001a;
    a {
      text-decoration: none;
      color: #000000;
    }
    .logo-text {
      cursor: pointer;
      font-family: "Integralcf-Extra-Bold";
      font-size: 32px;
      font-weight: 700;
      line-height: 38.4px;
      padding-right: 12px;
    }
    .description {
      font-family: "Satoshi-Light";
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      text-align: left;
      margin: 24px 0;
    }
    .link-icons {
      margin-bottom: 24px;
      .facebook-icon {
        font-family: "Satoshi-Bold";
        font-size: 13px;
      }
      .link-icon {
        cursor: pointer;
      }
    }
    .link-title {
      font-family: "Satoshi-Bold";
      font-size: 16px;
      font-weight: 500;
      line-height: 18px;
      letter-spacing: 3px;
      text-align: left;
    }
    .link-list {
      font-family: "Satoshi-Light";
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      text-align: left;
      .link-list-item {
        margin: 24px 0;
      }
    }
  }
}
.copyright {
  margin-top: 25px !important;
  .copyright-text {
    font-family: "Satoshi-Light";
    font-size: 14px;
    font-weight: 400;
    line-height: 18.9px;
    text-align: right;
  }
  .credit-image {
    width: 46.61px;
    height: 30.03px;
  }
}
.v-btn {
  text-transform: capitalize;
}
</style>

<template>
  <v-container fluid style="padding: 0 100px">
    <v-card flat class="tabs-item mt-12">
      <v-tabs v-model="tab" align-tabs="center" grow>
        <v-tab style="width: 33%" :value="1">Product Details</v-tab>
        <v-tab style="width: 34%" :value="2">Rating & Reviews</v-tab>
        <v-tab style="width: 33%" :value="3">FAQs</v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item :value="2">
          <div class="d-flex align-center justify-space-between mt-6">
            <div class="tab-title">All Reviews <span>(451)</span></div>
            <div class="tab-btn">
              <v-btn icon="mdi:mdi-tune-vertical" variant="tonal"></v-btn>
              <v-menu :location="bottom">
                <template v-slot:activator="{ props }">
                  <v-btn
                    v-bind="props"
                    class="mx-3 rounded-xl"
                    style="width: 120px"
                    variant="tonal"
                    height="48"
                    >Latest <v-icon icon="mdi:mdi-chevron-down"
                  /></v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
              <v-btn
                class="write-review-btn rounded-xl"
                :elevation="0"
                style="width: 166px"
                theme="dark"
                height="48"
                >Write a Review</v-btn
              >
            </div>
          </div>
          <v-container fluid class="mt-2 px-0">
            <v-row>
              <v-col cols="6" class="d-flex flex-column align-start">
                <v-card
                  variant="outlined"
                  class="review-card rounded-xl"
                  :elevation="0"
                >
                  <v-container>
                    <v-card-item>
                      <div class="d-flex align-center justify-space-between">
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
                        <v-btn
                          variant="text"
                          icon="mdi:mdi-dots-horizontal"
                          size="24"
                          color="#00000066"
                          class="pa-0 mr-2"
                        >
                        </v-btn>
                      </div>
                      <v-card-title class="mt-2">
                        <p class="customer-name d-flex align-center">
                          Samantha D.
                          <v-avatar class="ml-2" size="24" color="green"
                            ><v-icon size="16" icon="mdi:mdi-check"
                          /></v-avatar>
                        </p>
                      </v-card-title>
                    </v-card-item>
                    <v-card-text class="description"
                      >"I absolutely love this t-shirt! The design is unique and
                      the fabric feels so comfortable. As a fellow designer, I
                      appreciate the attention to detail. It's become my
                      favorite go-to shirt."</v-card-text
                    >
                    <v-card-text class="comment-time"
                      >Posted on August 14, 2023</v-card-text
                    >
                  </v-container>
                </v-card>
                <v-card
                  variant="outlined"
                  class="review-card rounded-xl my-5"
                  :elevation="0"
                >
                  <v-container>
                    <v-card-item>
                      <div class="d-flex align-center justify-space-between">
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
                        <v-btn
                          variant="text"
                          icon="mdi:mdi-dots-horizontal"
                          size="24"
                          color="#00000066"
                          class="pa-0 mr-2"
                        >
                        </v-btn>
                      </div>
                      <v-card-title class="mt-2">
                        <p class="customer-name d-flex align-center">
                          Ethan R.
                          <v-avatar class="ml-2" size="24" color="green"
                            ><v-icon size="16" icon="mdi:mdi-check"
                          /></v-avatar>
                        </p>
                      </v-card-title>
                    </v-card-item>
                    <v-card-text class="description"
                      >"This t-shirt is a must-have for anyone who appreciates
                      good design. The minimalistic yet stylish pattern caught
                      my eye, and the fit is perfect. I can see the designer's
                      touch in every aspect of this shirt."</v-card-text
                    >
                    <v-card-text class="comment-time"
                      >Posted on August 16, 2023</v-card-text
                    >
                  </v-container>
                </v-card>
                <v-card
                  variant="outlined"
                  class="review-card rounded-xl"
                  :elevation="0"
                >
                  <v-container>
                    <v-card-item>
                      <div class="d-flex align-center justify-space-between">
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
                        <v-btn
                          variant="text"
                          icon="mdi:mdi-dots-horizontal"
                          size="24"
                          color="#00000066"
                          class="pa-0 mr-2"
                        >
                        </v-btn>
                      </div>
                      <v-card-title class="mt-2">
                        <p class="customer-name d-flex align-center">
                          Liam K.
                          <v-avatar class="ml-2" size="24" color="green"
                            ><v-icon size="16" icon="mdi:mdi-check"
                          /></v-avatar>
                        </p>
                      </v-card-title>
                    </v-card-item>
                    <v-card-text class="description"
                      >"This t-shirt is a fusion of comfort and creativity. The
                      fabric is soft, and the design speaks volumes about the
                      designer's skill. It's like wearing a piece of art that
                      reflects my passion for both design and
                      fashion."</v-card-text
                    >
                    <v-card-text class="comment-time"
                      >Posted on August 18, 2023</v-card-text
                    >
                  </v-container>
                </v-card>
              </v-col>
              <v-col cols="6" class="d-flex flex-column align-end">
                <v-card
                  variant="outlined"
                  class="review-card rounded-xl"
                  :elevation="0"
                >
                  <v-container>
                    <v-card-item>
                      <div class="d-flex align-center justify-space-between">
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
                        <v-btn
                          variant="text"
                          icon="mdi:mdi-dots-horizontal"
                          size="24"
                          color="#00000066"
                          class="pa-0 mr-2"
                        >
                        </v-btn>
                      </div>
                      <v-card-title class="mt-2">
                        <p class="customer-name d-flex align-center">
                          Alex M.
                          <v-avatar class="ml-2" size="24" color="green"
                            ><v-icon size="16" icon="mdi:mdi-check"
                          /></v-avatar>
                        </p>
                      </v-card-title>
                    </v-card-item>
                    <v-card-text class="description"
                      >"The t-shirt exceeded my expectations! The colors are
                      vibrant and the print quality is top-notch. Being a UI/UX
                      designer myself, I'm quite picky about aesthetics, and
                      this t-shirt definitely gets a thumbs up from
                      me."</v-card-text
                    >
                    <v-card-text class="comment-time"
                      >Posted on August 15, 2023</v-card-text
                    >
                  </v-container>
                </v-card>
                <v-card
                  variant="outlined"
                  class="review-card rounded-xl my-5"
                  :elevation="0"
                >
                  <v-container>
                    <v-card-item>
                      <div class="d-flex align-center justify-space-between">
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
                        <v-btn
                          variant="text"
                          icon="mdi:mdi-dots-horizontal"
                          size="24"
                          color="#00000066"
                          class="pa-0 mr-2"
                        >
                        </v-btn>
                      </div>
                      <v-card-title class="mt-2">
                        <p class="customer-name d-flex align-center">
                          Olivia P.
                          <v-avatar class="ml-2" size="24" color="green"
                            ><v-icon size="16" icon="mdi:mdi-check"
                          /></v-avatar>
                        </p>
                      </v-card-title>
                    </v-card-item>
                    <v-card-text class="description"
                      >"As a UI/UX enthusiast, I value simplicity and
                      functionality. This t-shirt not only represents those
                      principles but also feels great to wear. It's evident that
                      the designer poured their creativity into making this
                      t-shirt stand out."</v-card-text
                    >
                    <v-card-text class="comment-time"
                      >Posted on August 17, 2023</v-card-text
                    >
                  </v-container>
                </v-card>
                <v-card
                  variant="outlined"
                  class="review-card rounded-xl"
                  :elevation="0"
                >
                  <v-container>
                    <v-card-item>
                      <div class="d-flex align-center justify-space-between">
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
                        <v-btn
                          variant="text"
                          icon="mdi:mdi-dots-horizontal"
                          size="24"
                          color="#00000066"
                          class="pa-0 mr-2"
                        >
                        </v-btn>
                      </div>
                      <v-card-title class="mt-2">
                        <p class="customer-name d-flex align-center">
                          Ava H.
                          <v-avatar class="ml-2" size="24" color="green"
                            ><v-icon size="16" icon="mdi:mdi-check"
                          /></v-avatar>
                        </p>
                      </v-card-title>
                    </v-card-item>
                    <v-card-text class="description"
                      >"I'm not just wearing a t-shirt; I'm wearing a piece of
                      design philosophy. The intricate details and thoughtful
                      layout of the design make this shirt a conversation
                      starter."</v-card-text
                    >
                    <v-card-text class="comment-time"
                      >Posted on August 19, 2023</v-card-text
                    >
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
            <v-row class="d-flex align-center justify-center"
              ><v-btn variant="text" class="load-more-btn"
                >Load More Reviews</v-btn
              >
            </v-row>
          </v-container>
        </v-window-item>
      </v-window>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    tab: null,
    drawer: null,
    items: [{ title: "Newest" }, { title: "Most rated" }],
  }),
};
</script>
<style lang="scss" scoped>
.tabs-item {
  margin-top: 80px;
  .v-tabs {
    border-bottom: 1px solid #0000001a;
    .v-tab {
      font-family: "Satoshi-Variable";
      font-size: 20px;
      font-weight: 400;
      line-height: 22px;
      text-align: center;
      color: #00000099;
    }

    .v-slide-group-item--active {
      font-family: "Satoshi-Bold";
      font-size: 20px;
      font-weight: 500;
      line-height: 22px;
      text-align: center;
      color: #000000;
      border-bottom: 1px solid #000000;
    }
  }
}
.tab-title {
  font-family: "Satoshi-Bold";
  font-size: 24px;
  font-weight: 700;
  line-height: 32.4px;
  text-align: left;
  span {
    font-family: "Satoshi-Light";
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
  }
}
.tab-btn {
  font-family: "Satoshi-Variable";
  font-size: 16px;
  font-weight: 500;
  line-height: 21.6px;
  text-align: left;
}
.review-card {
  height: 241.58px;
  width: 610px;
  border: 1px solid #0000001a;
  font-family: "Satoshi-Variable";
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  .description {
    width: 522px;
    font-family: "Satoshi-Light";
  }
  .customer-name {
    font-size: 20px;
    font-weight: 700;
    line-height: 22px;
  }
  .comment-time {
    font-weight: 500;
    margin-bottom: 28px;
    font-family: "Satoshi-Variable";
    padding: 0 16px;
    color: #00000099;
  }
}
.load-more-btn {
  width: 230px;
  height: 52px;
  padding: 16px 54px 16px 54px;
  border-radius: 62px;
  border: 1px solid #0000001a;
  margin-top: 36px;
  font-family: "Satoshi-Variable";
  font-size: 16px;
  font-weight: 500;
  line-height: 21.6px;
}
</style>

<template>
  <section>
    <v-container>
      <h1>OUR HAPPY CUSTOMERS</h1>

      <swiper
        ref="swiperRef"
        @swiper="onSwiper"
        :slidesPerView="3"
        :spaceBetween="92"
        :loop="true"
        :grabCursor="true"
        :modules="modules"
        class="review-swiper"
      >
        <template v-slot:container-start>
          <div class="slider-navigation d-flex justify-end mb-2">
            <div class="nav-indicator slideNext">
              <v-icon @click="swiperPrevSlide" icon="mdi:mdi-arrow-left" />
            </div>
            <div class="nav-indicator slidePrev">
              <v-icon @click="swiperNextSlide" icon="mdi:mdi-arrow-right" />
            </div>
          </div>
        </template>
        <swiper-slide>
          <v-card
            variant="outlined"
            class="review-card rounded-xl"
            max-width="400"
            :elevation="0"
          >
            <v-container>
              <v-card-item>
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
                <v-card-title class="mt-2">
                  <p class="customer-name d-flex align-center">
                    Sarah M.
                    <v-avatar class="ml-2" size="24" color="green"
                      ><v-icon size="16" icon="mdi:mdi-check"
                    /></v-avatar>
                  </p>
                </v-card-title>
              </v-card-item>
              <v-card-text class="description"
                >"I'm blown away by the quality and style of the clothes I
                received from Shop.co. From casual wear to elegant dresses,
                every piece I've bought has exceeded my
                expectations.”</v-card-text
              >
            </v-container>
          </v-card>
        </swiper-slide>
        <swiper-slide>
          <v-card
            variant="outlined"
            class="review-card rounded-xl"
            max-width="400"
            :elevation="0"
          >
            <v-container>
              <v-card-item>
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
                <v-card-title class="mt-2">
                  <p class="customer-name d-flex align-center">
                    Alex K.
                    <v-avatar class="ml-2" size="24" color="green"
                      ><v-icon size="16" icon="mdi:mdi-check"
                    /></v-avatar>
                  </p>
                </v-card-title>
              </v-card-item>
              <v-card-text class="description"
                >"Finding clothes that align with my personal style used to be a
                challenge until I discovered Shop.co. The range of options they
                offer is truly remarkable, catering to a variety of tastes and
                occasions.”</v-card-text
              >
            </v-container>
          </v-card> </swiper-slide
        ><swiper-slide>
          <v-card
            variant="outlined"
            class="review-card rounded-xl"
            max-width="400"
            :elevation="0"
          >
            <v-container>
              <v-card-item>
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
                <v-card-title class="mt-2">
                  <p class="customer-name d-flex align-center">
                    Jeams L.
                    <v-avatar class="ml-2" size="24" color="green"
                      ><v-icon size="16" icon="mdi:mdi-check"
                    /></v-avatar>
                  </p>
                </v-card-title>
              </v-card-item>
              <v-card-text class="description"
                >"As someone who's always on the lookout for unique fashion
                pieces, I'm thrilled to have stumbled upon Shop.co. The
                selection of clothes is not only diverse but also on-point with
                the latest trends.”</v-card-text
              >
            </v-container>
          </v-card>
        </swiper-slide>
        <swiper-slide>
          <v-card
            variant="outlined"
            class="review-card rounded-xl"
            max-width="400"
            :elevation="0"
          >
            <v-container>
              <v-card-item>
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
                <v-card-title class="mt-2">
                  <p class="customer-name d-flex align-center">
                    Mooen
                    <v-avatar class="ml-2" size="24" color="green"
                      ><v-icon size="16" icon="mdi:mdi-check"
                    /></v-avatar>
                  </p>
                </v-card-title>
              </v-card-item>
              <v-card-text class="description"
                >"As someone who's always on the lookout for unique fashion
                pieces, I'm thrilled to have stumbled upon Shop.co. The
                selection of clothes is not only diverse but also on-point with
                the latest trends.”</v-card-text
              >
            </v-container>
          </v-card>
        </swiper-slide>
        <swiper-slide>
          <v-card
            variant="outlined"
            class="review-card rounded-xl"
            :elevation="0"
          >
            <v-container>
              <v-card-item>
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
                <v-card-title class="mt-2">
                  <p class="customer-name d-flex align-center">
                    Sarah M.
                    <v-avatar class="ml-2" size="24" color="green"
                      ><v-icon size="16" icon="mdi:mdi-check"
                    /></v-avatar>
                  </p>
                </v-card-title>
              </v-card-item>
              <v-card-text class="description"
                >"I'm blown away by the quality and style of the clothes I
                received from Shop.co. From casual wear to elegant dresses,
                every piece I've bought has exceeded my
                expectations.”</v-card-text
              >
            </v-container>
          </v-card>
        </swiper-slide>
      </swiper>
    </v-container>
  </section>
</template>
<style lang="scss" scoped>
h1 {
  font-family: "Integralcf-Bold";
  font-size: 48px;
  font-weight: 700;
  line-height: 57.6px;
  text-align: left;
}
.slideNext:hover {
  cursor: pointer;
}
.slidePrev:hover {
  cursor: pointer;
}
.review-card {
  width: 400px;
  height: 240px;
  border: 1px solid #0000001a;
  font-family: "Satoshi-Variable";
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  .description {
    width: 336px;
    font-family: "Satoshi-Light";
  }
  .customer-name {
    font-size: 20px;
    font-weight: 700;
    line-height: 22px;
  }
}
</style>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const swiperInstance = ref();

    function onSwiper(swiper) {
      swiperInstance.value = swiper;
    }
    const swiperNextSlide = () => {
      swiperInstance.value.slideNext();
    };
    const swiperPrevSlide = () => {
      swiperInstance.value.slidePrev();
    };
    return {
      swiperPrevSlide,
      swiperNextSlide,
      onSwiper,
      modules: [Navigation, Pagination],
    };
  },
};
</script>

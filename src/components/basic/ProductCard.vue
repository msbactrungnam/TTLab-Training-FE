<template>
  <div>
    <v-card :elevation="0">
      <v-img class="rounded-xl" :src="getImgUrl()" cover></v-img>
      <v-card-item class="pl-0">
        <v-card-title
          ><p class="title">{{ title }}</p></v-card-title
        >
      </v-card-item>
      <v-card-text class="pl-0">
        <v-row align="center" class="mx-0">
          <v-rating
            :model-value="rating"
            color="amber"
            density="compact"
            size="small"
            half-increments
            :length="computedRating"
            readonly
            emptyIcon=""
            fullIcon="mdi:mdi-star"
            halfIcon="mdi:mdi-star-half"
          ></v-rating>
          <div class="rate text-grey ms-4">
            <span>{{ rating }}/</span>5
          </div>
        </v-row>
        <v-row align="center" class="mx-0">
          <div class="text-subtitle-1 d-flex align-center">
            <span class="price mr-2">{{ price }}</span>
            <span
              v-if="originalPrice"
              class="original-price mr-2 text-decoration-line-through"
              >{{ originalPrice }}</span
            >
            <span
              v-if="saleValue"
              class="sale-value d-flex align-center justify-center"
              >{{ saleValue }}</span
            >
          </div>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    rating: {
      type: [Number, String],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    originalPrice: {
      type: String,
    },
    saleValue: {
      type: String,
    },
    image: {
      type: String,
      required: true,
    },
  },
  methods: {
    getImgUrl() {
      return this.image;
    },
  },
  setup(props) {
    const computedRating = computed(() => {
      let rating = parseFloat(props.rating);
      if (!isNaN(rating) && rating % 1 !== 0) {
        rating = Math.floor(rating) + 1;
      }
      return rating;
    });

    return {
      computedRating,
    };
  },
};
</script>

<style lang="scss" scoped>
.v-card {
  width: 295px;
}
.v-img {
  background-color: #ff3333;
  width: 295px;
  height: 298px;
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
  border-radius: 62px;
  background-color: #ff33331a;
  color: #ff3333;

  span {
    font-family: "Satoshi-Variable";
    font-size: 12px;
    font-weight: 500;
    line-height: 16.2px;
  }
}
@media only screen and (max-width: 600px) {
  h1 {
    margin: 32px 0;
    font-size: 32px;
    line-height: 38.4px;
  }
  .title {
    font-size: 16px;
    line-height: 21.6px;
  }
  .v-card {
    width: 200px;
  }
  .v-img {
    width: 200px;
    height: 200px;
  }
  .rate {
    font-size: 12px;
    font-weight: 400;
    line-height: 16.2px;
  }
  .price {
    font-size: 20px;
    line-height: 27px;
  }
  .original-price {
    font-size: 20px;
    line-height: 27px;
  }
  .sale-value {
    width: 42px;
    height: 20px;
    span {
      font-size: 10px;
      line-height: 13.5px;
    }
  }
}
</style>

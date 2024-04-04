<template>
  <section>
    <v-container fluid>
      <v-card class="dress-card my-8 rounded-xl" :elevation="0">
        <v-card-title class="title text-wrap my-8">
          BROWSE BY DRESS STYLE
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" lg="4">
              <v-card
                variant="flat"
                class="rounded-xl"
                height="289px"
                image="../assets/images/dressstyle/casual.png"
                max-width="407px"
                title=""
              >
                <span class="card-title">Casual</span>
              </v-card>
            </v-col>
            <v-col cols="12" lg="8">
              <v-card
                variant="flat"
                class="rounded-xl"
                height="289px"
                image="../assets/images/dressstyle/formal.png"
                max-width="866px"
                title=""
              >
                <span class="card-title">Formal</span>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="8">
              <v-card
                variant="flat"
                class="rounded-xl"
                height="289px"
                image="../assets/images/dressstyle/party.png"
                max-width="866px"
                title=""
              >
                <span class="card-title">Party</span>
              </v-card>
            </v-col>
            <v-col cols="12" lg="4">
              <v-card
                variant="flat"
                class="rounded-xl"
                height="289px"
                image="../assets/images/dressstyle/gym.png"
                max-width="407px"
                title=""
              >
                <span class="card-title">Gym</span>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
  </section>
</template>
<style lang="scss" scoped>
.v-container {
  padding: 0 100px;
}
.dress-card {
  background-color: #f0f0f0;
  .title {
    font-family: "Integralcf-Extra-Bold";
    font-size: 48px;
    font-weight: 700;
    line-height: 57.6px;
    text-align: center;
  }
  .v-card-text {
    padding: 0 64px 76px 64px;
  }
  .card-title {
    padding: 24px 0 0 36px;
    font-family: "Satoshi-Bold";
    font-size: 36px;
    font-weight: 700;
    line-height: 48.6px;
  }
}
@media screen and (max-width: 600px) {
  .v-container {
    padding: 0 16px;
  }
  .dress-card {
    .title {
      font-size: 32px;
      line-height: 36px;
    }
    .v-card-text {
      padding: 0 24px 27px 24px;
    }
    .card-title {
      font-size: 24px;
      line-height: 32.4px;
    }
    .v-card {
      width: 310px !important;
      height: 190px !important;
    }
  }
}
</style>

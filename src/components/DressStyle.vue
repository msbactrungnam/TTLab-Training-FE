<template>
  <section>
    <v-container>
      <v-card
        :loading="loading"
        class="dress-card my-8 rounded-xl"
        :elevation="0"
      >
        <template v-slot:loader="{ isActive }">
          <v-progress-linear
            :active="isActive"
            height="4"
            indeterminate
          ></v-progress-linear>
        </template>
        <v-card-title class="title my-8"> BROWSE BY DRESS STYLE </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="4">
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
              <v-col cols="8">
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
              <v-col cols="8">
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
              <v-col cols="4">
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
          </v-container>
        </v-card-text>
      </v-card>
    </v-container>
  </section>
</template>
<style lang="scss" scoped>
.dress-card {
  background-color: #f0f0f0;
  height: 866px;
  .title {
    font-family: "Integralcf-Extra-Bold";
    font-size: 48px;
    font-weight: 700;
    line-height: 57.6px;
    text-align: center;
  }
  .card-title {
    padding: 24px 0 0 36px;
    font-family: "Satoshi-Bold";
    font-size: 36px;
    font-weight: 700;
    line-height: 48.6px;
  }
}
</style>

<template>
  <v-app>
    <div class="section-border pa-0"></div>
    <v-container fluid class="category-content">
      <v-breadcrumbs class="breadcrumbs-text my-2 pl-0" :items="breadcrumbs">
        <template v-slot:divider>
          <v-icon color="#00000099" icon="mdi:mdi-chevron-right"></v-icon>
        </template>
      </v-breadcrumbs>
      <v-row>
        <v-col class="category-filter hidden-xs" cols="3">
          <v-card flat>
            <v-card-title class="filter-title pb-7">
              <v-row class="d-flex align-center justify-space-between">
                <div>Filters</div>
                <div>
                  <v-btn flat icon
                    ><v-icon color="#00000066" icon="mdi:mdi-tune-vertical"
                  /></v-btn>
                </div>
              </v-row>
            </v-card-title>
            <v-card-item class="pa-0">
              <v-expansion-panels multiple class="filter-product pb-6" flat>
                <v-expansion-panel>
                  <v-expansion-panel-title class="pl-0 pr-4">
                    T-shirts
                    <template v-slot:actions="{ expanded }">
                      <v-icon
                        color="#00000099"
                        :icon="
                          expanded
                            ? 'mdi:mdi-chevron-down'
                            : 'mdi:mdi-chevron-right'
                        "
                      ></v-icon>
                    </template>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>Lorem</v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-title class="pl-0 pr-4">
                    Shorts
                    <template v-slot:actions="{ expanded }">
                      <v-icon
                        color="#00000099"
                        :icon="
                          expanded
                            ? 'mdi:mdi-chevron-down'
                            : 'mdi:mdi-chevron-right'
                        "
                      ></v-icon>
                    </template>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>Lorem</v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-title class="pl-0 pr-4">
                    Shirts
                    <template v-slot:actions="{ expanded }">
                      <v-icon
                        color="#00000099"
                        :icon="
                          expanded
                            ? 'mdi:mdi-chevron-down'
                            : 'mdi:mdi-chevron-right'
                        "
                      ></v-icon>
                    </template>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>Lorem</v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-title class="pl-0 pr-4">
                    Hoodie
                    <template v-slot:actions="{ expanded }">
                      <v-icon
                        color="#00000099"
                        :icon="
                          expanded
                            ? 'mdi:mdi-chevron-down'
                            : 'mdi:mdi-chevron-right'
                        "
                      ></v-icon>
                    </template>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>Lorem</v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-title class="pl-0 pr-4">
                    Jeans
                    <template v-slot:actions="{ expanded }">
                      <v-icon
                        color="#00000099"
                        :icon="
                          expanded
                            ? 'mdi:mdi-chevron-down'
                            : 'mdi:mdi-chevron-right'
                        "
                      ></v-icon>
                    </template>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>Lorem</v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-item>
            <v-card-item class="pa-0">
              <v-expansion-panels class="filter-field pb-6" flat>
                <v-expansion-panel>
                  <v-expansion-panel-title class="pl-0 pr-4">
                    Price
                    <template v-slot:actions="{ expanded }">
                      <v-icon
                        color="#00000099"
                        :icon="
                          expanded
                            ? 'mdi:mdi-chevron-up'
                            : 'mdi:mdi-chevron-down'
                        "
                      ></v-icon>
                    </template>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <v-range-slider
                      v-model="value"
                      min="0"
                      max="250"
                      step="50"
                      show-ticks="always"
                      :ticks="computedTickValue"
                      tick-size="0"
                      strict
                      center-affix
                    >
                    </v-range-slider>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-item>
            <v-card-item class="pa-0">
              <v-expansion-panels class="filter-field pb-6" flat>
                <v-expansion-panel>
                  <v-expansion-panel-title class="pl-0 pr-4"
                    >Color
                    <template v-slot:actions="{ expanded }">
                      <v-icon
                        color="#00000099"
                        :icon="
                          expanded
                            ? 'mdi:mdi-chevron-up'
                            : 'mdi:mdi-chevron-down'
                        "
                      ></v-icon>
                    </template>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <v-container fluid class="color-filter pa-0">
                      <div class="d-flex justify-start align-center">
                        <v-chip-group
                          filter
                          column
                          class="color-select-btn d-flex justify-space-between"
                          mandatory="force"
                        >
                          <v-chip
                            class="d-flex justify-center mr-5"
                            filter-icon="mdi:mdi-check ml-3"
                            v-for="color in colors"
                            :key="color"
                            :color="color === '#FFFFFF' ? '#000000' : '#FFFFFF'"
                            :style="{ backgroundColor: color }"
                          ></v-chip>
                        </v-chip-group>
                      </div>
                    </v-container>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-item>
            <v-card-item class="pa-0">
              <v-expansion-panels class="filter-field pb-6" flat>
                <v-expansion-panel>
                  <v-expansion-panel-title class="pl-0 pr-4"
                    >Size
                    <template v-slot:actions="{ expanded }">
                      <v-icon
                        color="#00000099"
                        :icon="
                          expanded
                            ? 'mdi:mdi-chevron-up'
                            : 'mdi:mdi-chevron-down'
                        "
                      ></v-icon>
                    </template>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <div class="d-flex justify-start align-center">
                      <v-chip-group
                        class="size-select"
                        mandatory="force"
                        column
                      >
                        <v-chip
                          class="px-6"
                          v-for="size in sizes"
                          :key="size"
                          >{{ size }}</v-chip
                        >
                      </v-chip-group>
                    </div>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-item>
            <v-card-item class="last-filter-field pa-0">
              <v-expansion-panels flat>
                <v-expansion-panel>
                  <v-expansion-panel-title class="pl-0 pr-4"
                    >Dress Style
                    <template v-slot:actions="{ expanded }">
                      <v-icon
                        color="#00000099"
                        :icon="
                          expanded
                            ? 'mdi:mdi-chevron-up'
                            : 'mdi:mdi-chevron-down'
                        "
                      ></v-icon>
                    </template>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <v-card-item class="dress-style-filter pa-0">
                      <v-expansion-panels flat>
                        <v-expansion-panel>
                          <v-expansion-panel-title class="pl-0 pr-4">
                            Casual
                            <template v-slot:actions="{ expanded }">
                              <v-icon
                                color="#00000099"
                                :icon="
                                  expanded
                                    ? 'mdi:mdi-chevron-down'
                                    : 'mdi:mdi-chevron-right'
                                "
                              ></v-icon>
                            </template>
                          </v-expansion-panel-title>
                          <v-expansion-panel-text>Lorem</v-expansion-panel-text>
                        </v-expansion-panel>
                        <v-expansion-panel>
                          <v-expansion-panel-title class="pl-0 pr-4">
                            Formal
                            <template v-slot:actions="{ expanded }">
                              <v-icon
                                color="#00000099"
                                :icon="
                                  expanded
                                    ? 'mdi:mdi-chevron-down'
                                    : 'mdi:mdi-chevron-right'
                                "
                              ></v-icon>
                            </template>
                          </v-expansion-panel-title>
                          <v-expansion-panel-text>Lorem</v-expansion-panel-text>
                        </v-expansion-panel>
                        <v-expansion-panel>
                          <v-expansion-panel-title class="pl-0 pr-4">
                            Party
                            <template v-slot:actions="{ expanded }">
                              <v-icon
                                color="#00000099"
                                :icon="
                                  expanded
                                    ? 'mdi:mdi-chevron-down'
                                    : 'mdi:mdi-chevron-right'
                                "
                              ></v-icon>
                            </template>
                          </v-expansion-panel-title>
                          <v-expansion-panel-text>Lorem</v-expansion-panel-text>
                        </v-expansion-panel>
                        <v-expansion-panel>
                          <v-expansion-panel-title class="pl-0 pr-4">
                            Gym
                            <template v-slot:actions="{ expanded }">
                              <v-icon
                                color="#00000099"
                                :icon="
                                  expanded
                                    ? 'mdi:mdi-chevron-down'
                                    : 'mdi:mdi-chevron-right'
                                "
                              ></v-icon>
                            </template>
                          </v-expansion-panel-title>
                          <v-expansion-panel-text>Lorem</v-expansion-panel-text>
                        </v-expansion-panel>
                      </v-expansion-panels>
                    </v-card-item>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-item>
            <v-card-item class="apply-filter-btn mt-2">
              <v-btn> Apply Filter </v-btn>
            </v-card-item>
          </v-card>
        </v-col>
        <v-col cols="12" lg="9" class="category-main pl-lg-8">
          <div class="d-flex align-lg-center align-end mb-4">
            <span class="main-title">Casual </span>
            <v-spacer class="hidden-xs"></v-spacer>
            <span class="main-filter ml-2 mb-1 mb-lg-0"
              >Showing 1-10 of 100 Products</span
            >
            <span class="main-filter hidden-xs ml-2 d-lg-flex align-lg-center">
              Sort by:&nbsp;
              <v-menu :location="bottom">
                <template v-slot:activator="{ props }">
                  <v-btn
                    class="sort-btn d-flex align-center"
                    append-icon="mdi:mdi-chevron-down"
                    variant="text"
                    v-bind="props"
                  >
                    {{ select }}
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, i) in items" :key="i">
                    <v-list-item-title
                      style="cursor: pointer"
                      @click="getSelection(item.title)"
                      >{{ item.title }}</v-list-item-title
                    >
                  </v-list-item>
                </v-list>
              </v-menu>
            </span>
            <v-spacer class="hidden-lg"></v-spacer>
            <v-dialog
              v-model="dialog"
              transition="dialog-bottom-transition"
              scrollable
              fullscreen
            >
              <template v-slot:activator="{ props: activatorProps }">
                <v-btn
                  size="32"
                  bg-color="#F0F0F0"
                  class="hidden-lg pa-0 mr-2"
                  icon="mdi:mdi-tune-vertical"
                  variant="text"
                  v-bind="activatorProps"
                ></v-btn>
              </template>
              <v-card class="category-filter" flat>
                <v-card-title class="filter-title pb-7">
                  <v-row class="d-flex align-center justify-space-between">
                    <div>Filters</div>
                    <div>
                      <v-btn flat icon
                        ><v-icon @click="dialog = false" icon="mdi:mdi-close"
                      /></v-btn>
                    </div>
                  </v-row>
                </v-card-title>
                <v-card-item class="pa-0">
                  <v-expansion-panels multiple class="filter-product pb-6" flat>
                    <v-expansion-panel>
                      <v-expansion-panel-title class="pl-0 pr-4">
                        T-shirts
                        <template v-slot:actions="{ expanded }">
                          <v-icon
                            color="#00000099"
                            :icon="
                              expanded
                                ? 'mdi:mdi-chevron-down'
                                : 'mdi:mdi-chevron-right'
                            "
                          ></v-icon>
                        </template>
                      </v-expansion-panel-title>
                      <v-expansion-panel-text>Lorem</v-expansion-panel-text>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-title class="pl-0 pr-4">
                        Shorts
                        <template v-slot:actions="{ expanded }">
                          <v-icon
                            color="#00000099"
                            :icon="
                              expanded
                                ? 'mdi:mdi-chevron-down'
                                : 'mdi:mdi-chevron-right'
                            "
                          ></v-icon>
                        </template>
                      </v-expansion-panel-title>
                      <v-expansion-panel-text>Lorem</v-expansion-panel-text>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-title class="pl-0 pr-4">
                        Shirts
                        <template v-slot:actions="{ expanded }">
                          <v-icon
                            color="#00000099"
                            :icon="
                              expanded
                                ? 'mdi:mdi-chevron-down'
                                : 'mdi:mdi-chevron-right'
                            "
                          ></v-icon>
                        </template>
                      </v-expansion-panel-title>
                      <v-expansion-panel-text>Lorem</v-expansion-panel-text>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-title class="pl-0 pr-4">
                        Hoodie
                        <template v-slot:actions="{ expanded }">
                          <v-icon
                            color="#00000099"
                            :icon="
                              expanded
                                ? 'mdi:mdi-chevron-down'
                                : 'mdi:mdi-chevron-right'
                            "
                          ></v-icon>
                        </template>
                      </v-expansion-panel-title>
                      <v-expansion-panel-text>Lorem</v-expansion-panel-text>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-title class="pl-0 pr-4">
                        Jeans
                        <template v-slot:actions="{ expanded }">
                          <v-icon
                            color="#00000099"
                            :icon="
                              expanded
                                ? 'mdi:mdi-chevron-down'
                                : 'mdi:mdi-chevron-right'
                            "
                          ></v-icon>
                        </template>
                      </v-expansion-panel-title>
                      <v-expansion-panel-text>Lorem</v-expansion-panel-text>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-card-item>
                <v-card-item class="pa-0">
                  <v-expansion-panels class="filter-field pb-6" flat>
                    <v-expansion-panel>
                      <v-expansion-panel-title class="pl-0 pr-4">
                        Price
                        <template v-slot:actions="{ expanded }">
                          <v-icon
                            color="#00000099"
                            :icon="
                              expanded
                                ? 'mdi:mdi-chevron-up'
                                : 'mdi:mdi-chevron-down'
                            "
                          ></v-icon>
                        </template>
                      </v-expansion-panel-title>
                      <v-expansion-panel-text>
                        <v-range-slider
                          v-model="value"
                          min="0"
                          max="250"
                          step="50"
                          show-ticks="always"
                          :ticks="computedTickValue"
                          tick-size="0"
                          strict
                          center-affix
                        >
                        </v-range-slider>
                      </v-expansion-panel-text>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-card-item>
                <v-card-item class="pa-0">
                  <v-expansion-panels class="filter-field pb-6" flat>
                    <v-expansion-panel>
                      <v-expansion-panel-title class="pl-0 pr-4"
                        >Color
                        <template v-slot:actions="{ expanded }">
                          <v-icon
                            color="#00000099"
                            :icon="
                              expanded
                                ? 'mdi:mdi-chevron-up'
                                : 'mdi:mdi-chevron-down'
                            "
                          ></v-icon>
                        </template>
                      </v-expansion-panel-title>
                      <v-expansion-panel-text>
                        <v-container fluid class="color-filter pa-0">
                          <div class="d-flex justify-start align-center">
                            <v-chip-group
                              filter
                              column
                              class="color-select-btn d-flex justify-space-between"
                              mandatory="force"
                            >
                              <v-chip
                                class="d-flex justify-center mr-5"
                                filter-icon="mdi:mdi-check ml-3"
                                v-for="color in colors"
                                :key="color"
                                :color="
                                  color === '#FFFFFF' ? '#000000' : '#FFFFFF'
                                "
                                :style="{ backgroundColor: color }"
                              ></v-chip>
                            </v-chip-group>
                          </div>
                        </v-container>
                      </v-expansion-panel-text>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-card-item>
                <v-card-item class="pa-0">
                  <v-expansion-panels class="filter-field pb-6" flat>
                    <v-expansion-panel>
                      <v-expansion-panel-title class="pl-0 pr-4"
                        >Size
                        <template v-slot:actions="{ expanded }">
                          <v-icon
                            color="#00000099"
                            :icon="
                              expanded
                                ? 'mdi:mdi-chevron-up'
                                : 'mdi:mdi-chevron-down'
                            "
                          ></v-icon>
                        </template>
                      </v-expansion-panel-title>
                      <v-expansion-panel-text>
                        <div class="d-flex justify-start align-center">
                          <v-chip-group
                            class="size-select"
                            mandatory="force"
                            column
                          >
                            <v-chip
                              class="px-lg-6 px-4"
                              v-for="size in sizes"
                              :key="size"
                              >{{ size }}</v-chip
                            >
                          </v-chip-group>
                        </div>
                      </v-expansion-panel-text>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-card-item>
                <v-card-item class="last-filter-field pa-0">
                  <v-expansion-panels flat>
                    <v-expansion-panel>
                      <v-expansion-panel-title class="pl-0 pr-4"
                        >Dress Style
                        <template v-slot:actions="{ expanded }">
                          <v-icon
                            color="#00000099"
                            :icon="
                              expanded
                                ? 'mdi:mdi-chevron-up'
                                : 'mdi:mdi-chevron-down'
                            "
                          ></v-icon>
                        </template>
                      </v-expansion-panel-title>
                      <v-expansion-panel-text>
                        <v-card-item class="dress-style-filter pa-0">
                          <v-expansion-panels flat>
                            <v-expansion-panel>
                              <v-expansion-panel-title class="pl-0 pr-4">
                                Casual
                                <template v-slot:actions="{ expanded }">
                                  <v-icon
                                    color="#00000099"
                                    :icon="
                                      expanded
                                        ? 'mdi:mdi-chevron-down'
                                        : 'mdi:mdi-chevron-right'
                                    "
                                  ></v-icon>
                                </template>
                              </v-expansion-panel-title>
                              <v-expansion-panel-text
                                >Lorem</v-expansion-panel-text
                              >
                            </v-expansion-panel>
                            <v-expansion-panel>
                              <v-expansion-panel-title class="pl-0 pr-4">
                                Formal
                                <template v-slot:actions="{ expanded }">
                                  <v-icon
                                    color="#00000099"
                                    :icon="
                                      expanded
                                        ? 'mdi:mdi-chevron-down'
                                        : 'mdi:mdi-chevron-right'
                                    "
                                  ></v-icon>
                                </template>
                              </v-expansion-panel-title>
                              <v-expansion-panel-text
                                >Lorem</v-expansion-panel-text
                              >
                            </v-expansion-panel>
                            <v-expansion-panel>
                              <v-expansion-panel-title class="pl-0 pr-4">
                                Party
                                <template v-slot:actions="{ expanded }">
                                  <v-icon
                                    color="#00000099"
                                    :icon="
                                      expanded
                                        ? 'mdi:mdi-chevron-down'
                                        : 'mdi:mdi-chevron-right'
                                    "
                                  ></v-icon>
                                </template>
                              </v-expansion-panel-title>
                              <v-expansion-panel-text
                                >Lorem</v-expansion-panel-text
                              >
                            </v-expansion-panel>
                            <v-expansion-panel>
                              <v-expansion-panel-title class="pl-0 pr-4">
                                Gym
                                <template v-slot:actions="{ expanded }">
                                  <v-icon
                                    color="#00000099"
                                    :icon="
                                      expanded
                                        ? 'mdi:mdi-chevron-down'
                                        : 'mdi:mdi-chevron-right'
                                    "
                                  ></v-icon>
                                </template>
                              </v-expansion-panel-title>
                              <v-expansion-panel-text
                                >Lorem</v-expansion-panel-text
                              >
                            </v-expansion-panel>
                          </v-expansion-panels>
                        </v-card-item>
                      </v-expansion-panel-text>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-card-item>
                <v-card-item class="apply-filter-btn mt-2">
                  <v-expansion-panels>
                    <expansion-panel>
                      <expansion-panel-title>
                        <v-btn @click="dialog = false"> Apply Filter </v-btn>
                      </expansion-panel-title>
                    </expansion-panel>
                  </v-expansion-panels>
                </v-card-item>
              </v-card>
            </v-dialog>
          </div>
          <v-container
            fluid
            class="pa-0 d-flex justify-space-between flex-wrap mb-9"
          >
            <div
              class="product-items mb-4"
              v-for="(product, index) in filteredProductList"
              :key="index"
            >
              <ProductCard
                :rating="product.rating"
                :title="product.title"
                :price="product.price"
                :originalPrice="product.originalPrice"
                :saleValue="product.saleValue"
                :image="product.image"
                class="custom-product-card"
              />
            </div>
          </v-container>
          <v-divider class="my-5"></v-divider>
          <div class="pagination">
            <v-pagination
              ellipsis="..."
              model="page"
              :length="10"
              :total-visible="isMobile ? 4 : 6"
            >
              <template
                v-slot:prev="{
                  onClick,
                  disabled,
                  'aria-label': ariaLabel,
                  'aria-disabled': ariaDisabled,
                }"
              >
                <v-btn
                  class="pag-prev-btn"
                  variant="text"
                  :disabled="disabled"
                  @click="onClick"
                  :aria-label="ariaLabel"
                  :aria-disabled="ariaDisabled"
                  ><v-icon class="mr-2" icon="mdi:mdi-arrow-left" />
                  Previous
                </v-btn>
              </template>
              <template
                v-slot:next="{
                  onClick,
                  disabled,
                  'aria-label': ariaLabel,
                  'aria-disabled': ariaDisabled,
                }"
              >
                <v-btn
                  class="pag-next-btn"
                  variant="text"
                  :disabled="disabled"
                  @click="onClick"
                  :aria-label="ariaLabel"
                  :aria-disabled="ariaDisabled"
                  >Next <v-icon class="ml-2" icon="mdi:mdi-arrow-right" />
                </v-btn>
              </template>
              <template v-slot:item="{ isActive, page, props }">
                {{ console.log(page) }}
                <v-btn
                  class="pag-item pa-0"
                  v-if="!props.disabled"
                  @click="props.onClick"
                  variant="solo-invert"
                  :color="isActive ? 'black' : '#00000080'"
                >
                  {{ page }}
                </v-btn>
                <div class="color-item pt-3" v-else>{{ page }}</div>
              </template>
            </v-pagination>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style lang="scss" scoped>
.section-border {
  margin: 150px 100px 0 100px;
  border-top: 1px solid #0000001a;
}
.category-content {
  padding: 0 100px;
  .breadcrumbs-text {
    font-family: "Satoshi-Variable";
    font-size: 16px;
    font-weight: 400;
    line-height: 21.6px;
    text-align: left;
    color: #00000099;
  }
}
.category-filter {
  height: fit-content;
  padding: 20px 24px 20px 24px;
  border-radius: 20px;
  border: 1px solid #0000001a;
  .filter-title {
    font-family: "Satoshi-Variable";
    font-size: 20px;
    font-weight: 700;
    line-height: 27px;
    text-align: left;
    border-bottom: 1px solid #0000001a;
  }
  .v-card-item {
    border-bottom: 1px solid #0000001a;
    .filter-product {
      .v-expansion-panel-title {
        font-family: "Satoshi-Light";
        font-size: 16px;
        font-weight: 400;
        line-height: 21.6px;
        text-align: left;
        color: #00000099;
      }
      .v-expansion-panel-text {
        font-family: "Satoshi-Variable";
        font-size: 14px;
        font-weight: 500;
        line-height: 18.9px;
      }
    }
    .filter-field {
      .v-expansion-panel-title {
        font-family: "Satoshi-Bold";
        font-size: 20px;
        font-weight: 700;
        line-height: 27px;
        text-align: left;
      }
      .v-expansion-panel-text {
        font-family: "Satoshi-Variable";
        font-size: 14px;
        font-weight: 500;
        line-height: 18.9px;
      }
      .color-filter {
        .v-chip {
          width: 37px;
          height: 37px;
          border: 1px solid #00000033;
        }
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
  }

  .last-filter-field {
    border-style: none;
    .v-expansion-panel-title {
      font-family: "Satoshi-Bold";
      font-size: 20px;
      font-weight: 700;
      line-height: 27px;
      text-align: left;
    }
    .dress-style-filter {
      border-style: none;
      .v-expansion-panel-title {
        font-family: "Satoshi-Light";
        font-size: 16px;
        font-weight: 400;
        line-height: 21.6px;
        text-align: left;
      }
    }
  }
  .apply-filter-btn {
    border-style: none;
    .v-btn {
      width: 247px;
      height: 48px;
      padding: 16px 54px 16px 54px;
      border-radius: 62px;
      background: #000000;
      font-family: "Satoshi-Variable";
      font-size: 14px;
      font-weight: 500;
      line-height: 18.9px;
      color: white;
    }
  }
}
.category-main {
  .main-title {
    font-family: "Satoshi-Bold";
    font-size: 32px;
    font-weight: 700;
    line-height: 43.2px;
    text-align: left;
  }
  .main-filter {
    font-family: "Satoshi-Light";
    font-size: 16px;
    font-weight: 400;
    line-height: 21.6px;
    text-align: left;
    color: #00000099;
    .sort-btn {
      padding: 0px;
      font-family: "Satoshi-Bold";
      font-size: 16px;
      font-weight: 500;
      line-height: 21.6px;
      text-align: left;
      color: #000000;
    }
    :deep(.custom-product-card) {
      .v-card {
        width: 295px;
      }
      .v-img {
        background-color: white;
        width: 295px;
        height: 298px;
      }
    }
  }

  .pagination {
    font-family: "Satoshi-Variable";
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    text-align: center;
    position: relative;
    .pag-next-btn,
    .pag-prev-btn {
      position: absolute;
      width: 110px;
      height: 36px;
      padding: 8px 14px 8px 14px;
      border-radius: 8px;
      border: 1px solid #0000001a;
    }
    .pag-next-btn {
      right: 0;
    }
    .pag-prev-btn {
      left: 0;
    }
    .pag-item {
      min-width: 40px;
      height: 40px;
      border-radius: 8px;
    }
    .color-item {
      color: #00000090;
    }
  }
}

@media only screen and (max-width: 600px) {
  .v-dialog--fullscreen {
    border-radius: 0;
    margin: 0;
    height: 88.5%;
    position: fixed;
    overflow-y: auto;
    top: 100px; //Depending on the header height you want to show.
    left: 0;
  }
  .section-border {
    margin: 100px 16px 0 16px;
  }
  .category-content {
    padding: 0 16px;
    .breadcrumbs-text {
      font-size: 14px;
      line-height: 18.9px;
      padding: 20px 0;
    }
  }
  .category-filter {
    padding: 20px 18px;
  }
  .category-main {
    .main-title {
      font-size: 24px;
      line-height: 32.4px;
    }
    :deep(.custom-product-card) {
      .v-card {
        width: 172px;
      }
      .v-img {
        background-color: white;
        width: 172px;
        height: 174px;
      }
    }
    .main-filter {
      font-size: 16px;
      line-height: 21.6px;
    }
    .pagination {
      .pag-next-btn,
      .pag-prev-btn {
        width: 86px;
        height: 36px;
        font-size: 12px;
        line-height: 20px;
      }
      .pag-item {
        min-width: 36px;
        height: 36px;
        font-size: 12px;
        line-height: 20px;
      }
    }
  }
}
</style>
<script>
import { computed } from "vue";
import { useAppStore } from "../stores/app";
const breadcrumbs = useAppStore().breadcrumbsCategory;
const colors = useAppStore().colos;
const sizes = useAppStore().sizeFilter;
import ProductCard from "./basic/ProductCard.vue";
export default {
  setup() {
    const appStore = useAppStore();

    // Sử dụng getter để lấy danh sách sản phẩm từ store
    const getProductList = computed(() => appStore.getProductList);

    return {
      getProductList,
    };
  },
  data() {
    return {
      breadcrumbs,
      dialog: false,
      colors,
      sizes,
      page: 1,
      value: [50, 200],
      items: [
        { title: "Most Popular" },
        { title: "Most Rate" },
        { title: "Nearest" },
      ],
      select: "Most Popular",
    };
  },
  computed: {
    computedTickValue() {
      const [min, max] = this.value;
      const tickValue = {};

      tickValue[min] = `$${min}`;
      tickValue[max] = `$${max}`;
      return tickValue;
    },
    isMobile() {
      return window.innerWidth <= 600; // Điều kiện cho màn hình `xs`
    },
    filteredProductList() {
      if (window.innerWidth > 600) {
        // Kiểm tra kích thước màn hình
        return this.getProductList.slice(0, 9); // Trả về 9 sản phẩm đầu tiên cho màn hình lớn
      } else {
        return this.getProductList.slice(0, 6); // Trả về 6 sản phẩm đầu tiên cho màn hình nhỏ
      }
    },
  },
  methods: {
    getSelection(title) {
      this.select = title;
    },
  },
  components: {
    ProductCard,
  },
};
</script>

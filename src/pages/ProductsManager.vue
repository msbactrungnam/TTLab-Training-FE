<template>
  <v-app>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        rail-width="56"
        @click="rail = false"
      >
        <v-list-item class="pl-3" nav>
          <v-img
            height="48"
            v-if="rail"
            src="../assets/images/ttlab-logo-icon.png"
          ></v-img>
          <v-img
            class="d-flex justify-space-between"
            height="28"
            max-width="150px"
            v-else
            src="../assets/images/ttlab-logo-ngang.png"
          ></v-img>
          <template v-slot:append>
            <v-btn
              v-if="!rail"
              color="#8B909A"
              icon="mdi mdi-menu-open"
              variant="text"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-list density="compact" nav mandatory>
          <v-list-subheader class="sub-header" v-if="!rail"
            >QUẢN LÝ SẢN PHẨM</v-list-subheader
          >
          <v-divider v-else></v-divider>
          <v-list-item
            prepend-icon="mdi:mdi-cube-outline"
            active-color="black"
            base-color="#8B909A"
            title="Sản phẩm"
            value="products"
            @click="selectedItem = 'products'"
            :active="selectedItem === 'products'"
          ></v-list-item>

          <v-list-item
            prepend-icon="mdi:mdi-account-multiple-outline"
            active-color="black"
            base-color="#8B909A"
            title="Users"
            value="users"
            @click="selectedItem = 'users'"
            :active="selectedItem === 'users'"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main v-if="selectedItem === 'products'">
        <ProductTable />
      </v-main>
      <v-main v-else>
        <UserTable />
      </v-main>
    </v-layout>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      drawer: true,
      rail: false,
      dialog: false,
      dialogDelete: false,
      editedIndex: -1,
      selectedItem: "products",
      search: "",
      page: 1,
      itemsPerPage: 5,
      itemsShowing: [
        { value: 1, title: "1" },
        { value: 5, title: "5" },
        { value: 10, title: "10" },
        { value: 25, title: "25" },
        { value: 50, title: "50" },
        { value: 100, title: "100" },
        { value: -1, title: "All" },
      ],
      headers: [
        {
          align: "start",
          key: "name",
          sortable: false,
          title: "TÊN SẢN PHẨM",
        },
        { key: "price", title: "GIÁ" },
        { key: "number", title: "SỐ LƯỢNG" },
        { key: "description", title: "MÔ TẢ" },
        { key: "image", title: "ẢNH", sortable: false },
        { key: "actions", title: "HÀNH ĐỘNG", sortable: false },
      ],
      items: [],
      editedItem: [
        {
          name: "",
          price: "",
          number: 0,
          description: "",
          image: "",
        },
      ],
      defaultItem: [
        {
          name: "",
          price: "",
          number: 0,
          description: "",
          image: "",
        },
      ],
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Tạo mới sản phẩm" : "Chỉnh sửa";
    },
    btnFormTitle() {
      return this.editedIndex === -1 ? "Tạo mới" : "Lưu";
    },
    pageCount() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    getSelection(value) {
      this.itemsPerPage = value;
    },
    initialize() {
      this.items = [
        {
          name: "Sản phẩm 1",
          price: "$6,000",
          number: 1.0,
          description: "Lorem ipsum dolor sit amet",
          image: "image1.png",
        },
        {
          name: "Sản phẩm 2",
          price: "$5,000",
          number: 3.0,
          description: "Lorem ipsum dolor sit amet",
          image: "image2.png",
        },
        {
          name: "Sản phẩm 2",
          price: "$5,000",
          number: 3.0,
          description: "Lorem ipsum dolor sit amet",
          image: "image2.png",
        },
        {
          name: "Sản phẩm 2",
          price: "$5,000",
          number: 3.0,
          description: "Lorem ipsum dolor sit amet",
          image: "image2.png",
        },
        {
          name: "Sản phẩm 2",
          price: "$5,000",
          number: 3.0,
          description: "Lorem ipsum dolor sit amet",
          image: "image2.png",
        },
        {
          name: "Sản phẩm 2",
          price: "$5,000",
          number: 3.0,
          description: "Lorem ipsum dolor sit amet",
          image: "image2.png",
        },
        {
          name: "Sản phẩm 2",
          price: "$5,000",
          number: 3.0,
          description: "Lorem ipsum dolor sit amet",
          image: "image2.png",
        },
        {
          name: "Sản phẩm 2",
          price: "$5,000",
          number: 3.0,
          description: "Lorem ipsum dolor sit amet",
          image: "image2.png",
        },
        {
          name: "Sản phẩm 2",
          price: "$5,000",
          number: 3.0,
          description: "Lorem ipsum dolor sit amet",
          image: "image2.png",
        },
        {
          name: "Sản phẩm 2",
          price: "$5,000",
          number: 3.0,
          description: "Lorem ipsum dolor sit amet",
          image: "image2.png",
        },
      ];
    },
    editItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.items.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.items[this.editedIndex], this.editedItem);
      } else {
        this.items.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap");
* {
  font-family: "Public Sans", sans-serif;
}
.v-list-item {
  font-size: 15px;
  font-weight: 600;
  line-height: 22px;
  text-align: left;
  &::v-deep {
    .v-list-item__prepend {
      .v-list-item__spacer {
        width: 8px;
      }
    }
  }
}
.sub-header {
  font-size: 11px;
  font-weight: 400;
  line-height: 14px;
}
</style>

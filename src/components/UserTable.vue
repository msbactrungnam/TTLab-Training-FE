<template>
  <v-container fluid class="main-products">
    <div class="d-flex align-center justify-space-between">
      <h1 class="main-title">Danh sách người dùng</h1>
      <div class="d-flex align-center">
        <v-badge class="mr-7" color="#EA5455" content="4" max="99">
          <v-icon size="26" color="#8B909A">mdi:mdi-bell-outline</v-icon>
        </v-badge>
        <v-badge color="#28C76F" dot bordered location="bottom end">
          <v-avatar size="38"
            ><v-img src="../assets/images/avatar-user.png"></v-img
          ></v-avatar>
        </v-badge>
      </div>
    </div>
    <v-card class="mt-6" elevation="0">
      <v-toolbar flat color="#FFFFFF">
        <v-toolbar-title class="search-bar ma-0">
          <v-text-field
            v-model="search"
            density="compact"
            label="Tìm kiếm"
            variant="solo-invert"
            flat
            hide-details
            single-line
          >
            <template v-slot:append-inner>
              <v-icon style="cursor: pointer">mdi:mdi-magnify</v-icon>
            </template>
          </v-text-field>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" height="614" max-width="440px">
          <template v-slot:activator="{ props }">
            <v-btn elevation="0" class="add-btn" v-bind="props"
              ><v-icon icon="mdi:mdi-plus" />Tạo mới
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="form-title pl-1">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text
              style="background-color: #f7f8fa; border: 1px solid #ebeefa"
            >
              <v-form class="form-info">
                <div class="mb-2" height="54">
                  Tên người dùng <span style="color: blue">*</span>
                </div>
                <v-text-field
                  class="mb-4"
                  style="border: 1px solid #868fa029; border-radius: 6px"
                  v-model="editedItem.name"
                  flat
                  density="compact"
                  placeholder="Nhập tên người dùng"
                  variant="solo"
                  hide-details
                ></v-text-field>
                <div class="mb-2">Email <span style="color: blue">*</span></div>
                <v-text-field
                  class="mb-4"
                  style="border: 1px solid #868fa029; border-radius: 6px"
                  v-model="editedItem.email"
                  density="compact"
                  placeholder="Nhập email"
                  variant="solo"
                  hide-details
                  flat
                ></v-text-field>
                <div class="mb-2">
                  Ngày sinh <span style="color: blue">*</span>
                </div>
                <v-text-field
                  class="mb-4"
                  style="border: 1px solid #868fa029; border-radius: 6px"
                  v-model="editedItem.dob"
                  density="compact"
                  placeholder="YYYY/MM/DD"
                  variant="solo"
                  hide-details
                  flat
                >
                  <template #append-inner>
                    <v-btn style="height: 16px; width: 16px" icon flat
                      ><v-icon color="#868FA0" size="16"
                        >mdi:mdi-calendar-blank</v-icon
                      >
                      <v-menu
                        :close-on-content-click="false"
                        activator="parent"
                      >
                        <v-date-picker
                          mode-icon="mdi:mdi-chevron-down"
                          next-icon="mdi:mdi-chevron-right"
                          prev-icon="mdi:mdi-chevron-left"
                          v-model="birthDate"
                          show-adjacent-months
                          @update:modelValue="updateDate"
                          color="primary"
                        >
                        </v-date-picker>
                      </v-menu>
                    </v-btn>
                  </template>
                </v-text-field>
                <div class="mb-2">
                  Số điện thoại<span style="color: blue">*</span>
                </div>
                <v-text-field
                  class="mb-4"
                  style="border: 1px solid #868fa029; border-radius: 6px"
                  v-model="editedItem.phonenumber"
                  density="compact"
                  placeholder="Nhập số điện thoại"
                  variant="solo"
                  hide-details
                  flat
                ></v-text-field>
                <div class="mb-2">
                  Avatar <span style="color: blue">*</span>
                </div>
                <v-text-field
                  class="mb-4"
                  style="border: 1px solid #868fa029; border-radius: 6px"
                  v-model="editedItem.image"
                  density="compact"
                  placeholder="Nhập link ảnh avatar"
                  variant="solo"
                  hide-details
                  flat
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions style="height: 64px">
              <v-spacer></v-spacer>
              <v-btn class="cancel-btn" variant="text" @click="close">
                Hủy
              </v-btn>
              <v-btn class="success-btn" variant="text" @click="save">
                {{ btnFormTitle }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5 text-center"
              >Bạn có chắc là muốn xóa không?
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="deleteItemConfirm"
                >Có
              </v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="closeDelete"
                >Không
              </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
      <v-data-table
        class="manager-table"
        :headers="headers"
        :items="items"
        :items-per-page="itemsPerPage"
        v-model:page="page"
        v-model:search="search"
      >
        <template v-slot:item.name="{ item }">
          <div class="product-col">{{ item.name }}</div>
        </template>
        <template v-slot:item.image="{ item }">
          <v-card height="36" style="width: 36px" class="my-2" elevation="0">
            <v-img
              src="../assets/images/product-manager/image1.png"
              height="36"
              cover
            ></v-img>
          </v-card>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon
            color="#8B909A"
            @click="editItem(item)"
            icon="mdi:mdi-square-edit-outline"
          />
          <v-icon
            color="#8B909A"
            @click="deleteItem(item)"
            icon="mdi:mdi-trash-can-outline"
          />
        </template>
        <template v-slot:bottom>
          <div class="bottom-table d-flex align-center">
            <div class="items-per-page d-flex align-center pl-4">
              Showing
              <v-menu :location="bottom">
                <template v-slot:activator="{ props }">
                  <v-btn
                    :model-value="itemsPerPage"
                    @update:model-value="itemsPerPage = parseInt($event, 10)"
                    class="select-btn mx-2 d-flex align-center"
                    append-icon="mdi:mdi-chevron-down"
                    variant="text"
                    v-bind="props"
                  >
                    {{ itemsPerPage === -1 ? "All" : `${itemsPerPage}` }}
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, i) in itemsShowing" :key="i">
                    <v-list-item-title
                      style="cursor: pointer"
                      @click="getSelection(item.value)"
                      >{{ item.title }}</v-list-item-title
                    >
                  </v-list-item>
                </v-list>
              </v-menu>
              <span :items="items">of {{ items.length }}</span>
            </div>
            <v-spacer></v-spacer>
            <v-pagination
              class="pagination d-flex align-center"
              v-model="page"
              :length="pageCount"
              ellipsis="..."
            >
              <template v-slot:next="{ disabled, onClick }">
                <v-btn
                  class="pag-next-btn"
                  variant="text"
                  :disabled="disabled"
                  @click="onClick"
                  color="#8B909A"
                  style="background-color: #f1f2f6"
                >
                  <v-icon icon="mdi:mdi-chevron-right" />
                </v-btn>
              </template>
              <template v-slot:prev="{ disabled, onClick }">
                <v-btn
                  class="pag-prev-btn"
                  variant="text"
                  :disabled="disabled"
                  @click="onClick"
                  color="#8B909A"
                  style="background-color: #f1f2f6"
                >
                  <v-icon icon="mdi:mdi-chevron-left" />
                </v-btn>
              </template>
              <template v-slot:item="{ isActive, page, props }">
                <v-btn
                  class="pag-item pa-0"
                  @click="props.onClick"
                  variant="text"
                  :color="isActive ? 'white' : '#8B909A'"
                  :style="{
                    backgroundColor: isActive ? '#0F60FF' : '#F1F2F6',
                  }"
                >
                  {{ page }}
                </v-btn>
              </template>
            </v-pagination>
          </div>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      birthDate: null,
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
        { key: "image", title: "AVATAR", sortable: false },
        {
          align: "start",
          key: "name",
          sortable: false,
          title: "TÊN NGƯỜI DÙNG",
        },
        { key: "email", title: "EMAIL" },
        { key: "dob", title: "NGÀY SINH" },
        { key: "phonenumber", title: "SỐ ĐIỆN THOẠI" },
        { key: "actions", title: "HÀNH ĐỘNG", sortable: false },
      ],
      items: [],
      editedItem: [
        {
          name: "",
          email: "",
          dob: "",
          phonenumber: "",
          image: "",
        },
      ],
      defaultItem: [
        {
          name: "",
          email: "",
          dob: "",
          phonenumber: "",
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
    updateDate(value) {
      this.birthDate = value;
      this.editedItem.dob = value ? this.formatDate(value) : "";
    },
    formatDate(date) {
      const d = new Date(date);
      const year = d.getFullYear();
      let month = "" + (d.getMonth() + 1);
      let day = "" + d.getDate();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("/");
    },
    getSelection(value) {
      this.itemsPerPage = value;
    },
    initialize() {
      this.items = [
        {
          name: "Dianne Russell",
          email: "nevaeh.simmons@example.com",
          dob: "1989/04/06",
          phonenumber: "063-222-1125",
          image: "image1.png",
        },
        {
          name: "Leslie Alexander",
          email: "curtis.weaver@example.com",
          dob: "1976/09/12",
          phonenumber: "088-124-1555",
          image: "image1.png",
        },
        {
          name: "Leslie Alexander",
          email: "curtis.weaver@example.com",
          dob: "1976/09/12",
          phonenumber: "088-124-1555",
          image: "image1.png",
        },
        {
          name: "Leslie Alexander",
          email: "curtis.weaver@example.com",
          dob: "1976/09/12",
          phonenumber: "088-124-1555",
          image: "image1.png",
        },
        {
          name: "Leslie Alexander",
          email: "curtis.weaver@example.com",
          dob: "1976/09/12",
          phonenumber: "088-124-1555",
          image: "image1.png",
        },
        {
          name: "Leslie Alexander",
          email: "curtis.weaver@example.com",
          dob: "1976/09/12",
          phonenumber: "088-124-1555",
          image: "image1.png",
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
<style lang="scss"></style>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap");
* {
  font-family: "Public Sans", sans-serif;
}

.main-products {
  .main-title {
    font-size: 24px;
    font-weight: 600;
    line-height: 22px;
    .badge-bell {
      .v-badge__wrapper {
        .v-badge__badge {
          font-size: 13px;
          font-weight: 600 !important;
          line-height: 14px;
        }
      }
    }
  }
  .search-bar {
    max-width: 316px;
    height: 40px;
    border-radius: 4px;
    box-shadow: 0px 4px 16px 0px #00000014;
    font-size: 15px;
    font-weight: 400;
    line-height: 21px;
  }
  .add-btn {
    width: 122px;
    height: 40px;
    background-color: #0f60ff;
    color: white;
    padding: 12px 24px 12px 24px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
    text-align: center;
  }
  .form-title {
    font-size: 18px;
    font-weight: 500;
    line-height: 21.15px;
  }

  .manager-table {
    border-radius: 16px;
    box-shadow: 0px 4px 10px 0px #00000014;
    border: 1px solid #e9e7fd;
    :deep(th) {
      font-size: 13px;
      font-weight: 500;
      line-height: 15.28px;
      color: #8b909a;
    }
    :deep(td) {
      font-size: 15px;
      font-weight: 400;
      line-height: 22px;
    }
    .product-col {
      font-size: 15px;
      font-weight: 600;
      line-height: 22px;
    }
    .bottom-table {
      border-top: 1px solid #e9e7fd;
      height: 70px;
      margin-bottom: 21px;
      .items-per-page {
        color: #8b909a;
        max-height: 38px;
        margin: 26px 0;
        .select-btn {
          color: black;
          border-radius: 6px;
          padding: 10px 20px 10px 20px;
          font-size: 15px;
          font-weight: 500;
          line-height: 17.63px;
          letter-spacing: 0.4300000071525574px;
          border: 1px solid #e9e7fd;
        }
      }
      .pagination {
        min-width: 310px;
        color: #8b909a;
        :deep(.v-pagination__item) {
          margin: 4px 1px !important;
          text-align: center;
        }
        .pag-item,
        .pag-next-btn,
        .pag-prev-btn {
          min-width: 28px !important;
          height: 28px;
          padding: 4px 0;
          border-radius: 4px;
        }
      }
    }
  }
}
.form-info {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.02em;
  :deep(input, .v-textarea) {
    font-size: 14px;
    font-family: "Public Sans", sans-serif;
    line-height: 20px;
    letter-spacing: 0em;
    font-weight: 400;
  }
}
.cancel-btn {
  border: 1px solid #868fa029;
  width: 70px;
  height: 32px;
  padding: 6px 12px 6px 12px;
  gap: 8px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.02em;
}
.success-btn {
  border: 1px solid #868fa029;
  border-radius: 6px;
  background-color: #0f60ff;
  color: white;
  width: 105px;
  height: 32px;
  padding: 6px 12px 6px 12px;
  gap: 8px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.02em;
}
</style>

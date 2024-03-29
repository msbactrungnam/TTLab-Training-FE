// Utilities
import { defineStore } from 'pinia'
export const useAppStore = defineStore('app', {
  state: () => ({
    breadcrumbsProduct: [
      {
        title: "Home",
        disabled: false,
        href: "breadcrumbs_dashboard",
      },
      {
        title: "Shop",
        disabled: false,
        href: "breadcrumbs_link_1",
      },
      {
        title: "Men",
        disabled: false,
        href: "breadcrumbs_link_2",
      },
      {
        title: "T-shirts",
        disabled: false,
        href: "breadcrumbs_link_3",
        color: "black",
      },
    ],
    breadcrumbsCategory: [
      {
        title: "Home",
        disabled: false,
        href: "breadcrumbs_dashboard",
      },
      {
        title: "Casual",
        disabled: false,
        href: "breadcrumbs_link_1",
        color: "black",
      },
    ],
    breadcrumbsCart: [
      {
        title: "Home",
        disabled: false,
        href: "breadcrumbs_dashboard",
      },
      {
        title: "Cart",
        disabled: false,
        href: "breadcrumbs_link_1",
        color: "black",
      },
    ],
    colos: [
      "#00C12B",
      "#F50606",
      "#F5DD06",
      "#F57906",
      "#06CAF5",
      "#063AF5",
      "#7D06F5",
      "#F506A4",
      "#FFFFFF",
      "#000000",
    ],
    sizeFilter: [
      'XX-Small',
      'X-Small',
      'Small',
      'Medium',
      'Large',
      'X-Large',
      'XX-Large',
      '3X-Large',
      '4X-Large',
    ],
    products: [
      {
        rating: "3.5",
        title: "Gradient Graphic T-shirt",
        price: "$145",
        image: "../../public/category/GradientGraphicT-shirt.png"
      },
      {
        rating: "4.5",
        title: "Polo with Tipping Details",
        price: "$180",
        image: "../../public/category/PolowithTippingDetails.png"
      },
      {
        rating: "5.0",
        title: "Black Striped T-shirt",
        price: "$180",
        image: "../../public/category/BlackStripedT-shirt.png",
        originalPrice: "$150",
        saleValue: "-30%"
      },
      {
        rating: "3.5",
        title: "Skinny Fit Jeans",
        price: "$240",
        image: "../../public/category/JEANS.png",
        originalPrice: "$260",
        saleValue: "-20%"
      },
      {
        rating: "4.5",
        title: "Checkered Shirt",
        price: "$180",
        image: "../../public/category/CHECKERED_SHIRT.png"
      },
      {
        rating: "4.5",
        title: "Sleeve Striped T-shirt",
        price: "$130",
        image: "../../public/category/SLEEVE_STRIPED_T-SHIRT.png",
        originalPrice: "$160",
        saleValue: "-30%"
      },
      {
        rating: "5.0",
        title: "VERTICAL STRIPED SHIRT",
        price: "$212",
        image: "../../public/category/VERTICAL_STRIPED_SHIRT.png",
        originalPrice: "$232",
        saleValue: "-20%"
      },
      {
        rating: "4.0",
        title: "Courage Graphic T-shirt",
        price: "$145",
        image: "../../public/category/COURAGE_GRAPHIC_T-SHIRT.png"
      },
      {
        rating: "3.0",
        title: "Loose Fit Bermuda Shorts",
        price: "$80",
        image: "../../public/category/LOOSE_FIT_BERMUDA_SHORTS.png"
      },
    ]
  }),
  getters: {
    // Getter để lấy danh sách sản phẩm
    getProductList() {
      return this.products;
    }
  }
})

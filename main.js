var vueInstance = new Vue({
  el: '#app',
  data: {
      title: 'Áo thun nam thể thao hàng VNXK vải dày mịn - Vải Đốm',
      url: 'https://www.lazada.vn/products/ao-thun-nam-the-thao-hang-vnxk-vai-day-min-vai-dom-i265780948-s382816279.html',
      target: '_blank',
      price: 20000,
      sale: 0.1,
      selectedProduct: 2,
      cardNumber: 1,
      listProductDetail: [
          {
              image: 'https://product.hstatic.net/1000357687/product/12_cg_den_sau_45f0d5f655cc412aa653e3d96fa1c9c9_master.jpeg',
              quantity: 10,
              textColor: 'Màu Đỏ'
          }, {
              image: 'https://xachtayonline-vn.s3.ap-southeast-1.amazonaws.com/product_images/15639005611xomn-ao-thun-nam-uniqlo-co-tron-xanh-duong-413485.jpg',
              quantity: 28,
              textColor: 'Màu Xanh'
          }, {
              image: 'https://dongphucline.com/wp-content/uploads/2019/04/duanhauditron.jpg',
              quantity: 22,
              textColor: 'Màu đen'
          }
      ],
      listDesc: [
          'Chất liệu: polyester và thun',
          'Thoát mồ hôi tốt',
          'Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu nilon thoáng mát',
          'Kết hợp thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải mái khi mặc',
          'Chất liệu: polyester và thun'
      ],
      description: '<p>M&ocirc; tả: &Aacute;o thun cổ tr&ograve;n thể thao Hiye chuy&ecirc;n được may từ chất liệu nilon tho&aacute;ng m&aacute;t v&agrave; tho&aacute;t mồ h&ocirc;i tốt, kết hợp th&ecirc;m sợi thun tạo độ co gi&atilde;n gi&uacute;p người ti&ecirc;u d&ugrave;ng thoải m&aacute;i khi mặc</p> ',
  },
  methods: {
      handleClickColor(e, index) {
          this.selectedProduct = index;
          // console.log(e, index, this);
      },
      classActive(index) {
          return {
              active: this.selectedProduct === index
          }
      },
      handleAddToCart(e) {
          if(this.cardNumber + 1 > this.getProduct.quantity) {
              alert('So luong khong du');
          } else {
            this.cardNumber = this.cardNumber + 1;
              
          }
          console.log(e.target)
      },
      
  },
  computed: {
      formatOriginalPrice() {
          var number = this.price;
          return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
      },
      formatFinalPrice() {
          var number = this.price - this.sale * this.price;
          return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
      },
      getProduct() {
        let index = this.selectedProduct;
        return this.listProductDetail[index];
    }
  }
});
<template>
  <div class="partner">
    <p class="title">Partner</p>
    <div class="underline-container">
      <div class="underline" style="background-color: #00dbf4"></div>
      <i class="pi pi-arrow-down-left" style="color: black"></i>
    </div>
    <p class="subtitle"></p>
    <div class="partner-images">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image.src"
        :alt="image.alt"
        class="partner-image"
      />
    </div>
  </div>
</template>

<script setup>
// Danh sách ảnh
const images = [
  { src: "/images/partner/amazon.png", alt: "Amazon" },
  { src: "/images/partner/walmart.png", alt: "Walmart" },
  { src: "/images/partner/shopify.png", alt: "Shopify" },
  { src: "/images/partner/lianlianglobal.png", alt: "LianLianGlobal" },
  { src: "/images/partner/worldfirst.png", alt: "WORLDFIRST" },
];
</script>

<style scoped>
.partner {
  padding: 129px 119px;
}

.title {
  font-size: 53.91px;
  font-family: "Inter", sans-serif;
}

.subtitle {
  font-size: 25.78px;
  color: #343434;
  margin-bottom: 100px;
  font-family: "Inter", sans-serif;
}

.underline-container {
  display: flex;
  align-items: center;
  margin-top: 7px;
}

.underline {
  flex: 1;
  height: 2px;
  background-color: #00dbf4;
}

.pi-arrow-down-left {
  margin-left: 0.5rem;
  font-size: 1.5rem;
}

.partner-images {
  display: flex;
  flex-wrap: wrap; /* Cho phép các ảnh xuống dòng */
  justify-content: center; /* Căn giữa các ảnh */
  gap: 20px; /* Khoảng cách giữa các ảnh */
  margin: 0 auto;
  background-color: #000000;
  border-radius: 10px;
  padding: 20px; /* Thêm padding để tránh bị sát viền */
  box-sizing: border-box; /* Đảm bảo padding không làm tăng kích thước tổng */
}

.partner-image {
  height: auto;
  max-width: 100%; /* Đảm bảo ảnh không vượt quá kích thước của container */
  border-radius: 8px;
  object-fit: contain; /* Giữ tỷ lệ ảnh và không bị méo */
}

/* Responsive Styles */
@media (max-width: 1366px) {
  .partner {
    padding: 60px;
  }

  .title {
    font-size: 40px;
  }

  .subtitle {
    font-size: 20px;
    margin-bottom: 80px;
  }

  .partner-images {
    padding: 15px;
  }
}

@media (max-width: 1024px) {
  .partner-images {
    gap: 15px; /* Giảm khoảng cách giữa các ảnh */
  }

  .partner-image {
    max-width: 150px; /* Giới hạn kích thước ảnh */
  }
}

@media (max-width: 768px) {
  .partner {
    padding: 40px;
  }

  .title {
    font-size: 30px;
  }

  .subtitle {
    font-size: 16px;
    margin-bottom: 60px;
  }

  .partner-images {
    padding: 10px;
  }

  .partner-image {
    max-width: 120px; /* Giảm kích thước ảnh */
  }
}

@media (max-width: 480px) {
  .partner {
    padding: 20px;
  }

  .title {
    font-size: 24px;
  }

  .subtitle {
    font-size: 14px;
    margin-bottom: 40px;
  }

  .partner-images {
    gap: 10px; /* Giảm khoảng cách giữa các ảnh */
    padding: 10px;
  }

  .partner-image {
    max-width: 100px; /* Giảm kích thước ảnh */
  }
}
</style>

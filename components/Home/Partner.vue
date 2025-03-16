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
  padding: 89.5px;
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
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  background-color: #000000;
  border-radius: 10px;
  height: 140px;
}

.partner-image {
  height: auto;
  border-radius: 8px;
  padding: 0 20px;
}
</style>

<template>
  <div class="image-gallery">
    <img src="~/public/images/work/6.png" alt="Big Image" class="big-image" />
    <img
      v-for="(image, index) in smallImages"
      :key="index"
      :src="image"
      alt="Small Image"
      class="small-image"
    />
  </div>
</template>

<script>
export default {
  name: "ImageGallery",
  data() {
    return {
      smallImages: [
        "/images/work/2.png",
        "/images/work/3.png",
        "/images/work/4.png",
        "/images/work/5.png",
        "/images/work/6.png",
      ],
    };
  },
};
</script>

<style scoped>
.image-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  max-width: 1260px;
  margin: 0 auto 150px auto;
}

.big-image {
  grid-column: span 2;
  grid-row: span 2;
  width: 100%;
  height: auto;
  border-radius: 13.33px;
}

.small-image {
  width: 100%;
  height: auto;
  border-radius: 13.33px;
}
</style>

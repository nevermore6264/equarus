<template>
  <div class="gallery">
    <Galleria
      v-model:activeIndex="activeIndex"
      :value="images"
      :numVisible="1"
      :showThumbnails="false"
      :showIndicators="false"
      containerStyle="max-width: 1252px; margin: auto;"
    >
      <template #item="slotProps">
        <img
          :src="slotProps.item.itemImageSrc"
          :alt="slotProps.item.alt"
          style="width: 100%; height: auto"
        />
      </template>
    </Galleria>

    <div class="thumbnail-container">
      <div
        v-for="(image, index) in filteredThumbnails"
        :key="index"
        class="thumbnail"
        @click="activeIndex = getOriginalIndex(index)"
      >
        <img
          :src="image.thumbnailImageSrc"
          :alt="image.alt"
          style="width: 100%; height: auto"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      images: [
        {
          itemImageSrc: "/images/galleria1.png",
          thumbnailImageSrc: "/images/galleria1.png",
          alt: "Image 1",
        },
        {
          itemImageSrc: "/images/galleria2.png",
          thumbnailImageSrc: "/images/galleria2.png",
          alt: "Image 2",
        },
        {
          itemImageSrc: "/images/galleria3.png",
          thumbnailImageSrc: "/images/galleria3.png",
          alt: "Image 3",
        },
        {
          itemImageSrc: "/images/galleria4.png",
          thumbnailImageSrc: "/images/galleria4.png",
          alt: "Image 4",
        },
      ],
    };
  },
  computed: {
    // Lọc ra các thumbnail không phải là ảnh đang được chọn
    filteredThumbnails() {
      return this.images.filter((_, index) => index !== this.activeIndex);
    },
  },
  methods: {
    // Lấy index gốc của ảnh trong mảng `images`
    getOriginalIndex(filteredIndex) {
      let count = 0;
      for (let i = 0; i < this.images.length; i++) {
        if (i !== this.activeIndex) {
          if (count === filteredIndex) return i;
          count++;
        }
      }
      return 0;
    },
  },
};
</script>

<style scoped>
.gallery {
  text-align: center;
  padding: 89.5px;
}

.thumbnail-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.thumbnail {
  margin: 0 10px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 0.3s ease;
  width: 408px; /* Cố định chiều rộng */
  height: 256px; /* Cố định chiều cao */
  overflow: hidden; /* Ẩn phần thừa của ảnh */
  display: flex;
  justify-content: center;
  border-radius: 13.33px;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

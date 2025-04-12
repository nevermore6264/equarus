<template>
  <div class="gallery">
    <Galleria
      v-model:activeIndex="activeIndex"
      :value="images"
      :numVisible="1"
      :showThumbnails="false"
      :showIndicators="false"
    >
      <template #item="slotProps">
        <img
          :src="slotProps.item.itemImageSrc"
          :alt="slotProps.item.alt"
          class="main-image fade-in-up"
        />
      </template>
    </Galleria>

    <div class="divider fade-in-left"></div>

    <div class="thumbnail-container">
      <div
        v-for="(image, index) in filteredThumbnails"
        :key="index"
        class="thumbnail fade-in-up"
        @click="activeIndex = getOriginalIndex(index)"
      >
        <img
          :src="image.thumbnailImageSrc"
          :alt="image.alt"
          style="width: 100%; height: auto"
        />
      </div>
    </div>

    <div class="divider end fade-in-right"></div>
  </div>
</template>

<script>
export default {
  name: "Galleria",
  data() {
    return {
      activeIndex: 0,
      images: [
        {
          itemImageSrc: "/images/galleria1.jpg",
          thumbnailImageSrc: "/images/galleria1.jpg",
          alt: "Image 1",
        },
        {
          itemImageSrc: "/images/galleria2.jpg",
          thumbnailImageSrc: "/images/galleria2.jpg",
          alt: "Image 2",
        },
        {
          itemImageSrc: "/images/galleria3.png",
          thumbnailImageSrc: "/images/galleria3.png",
          alt: "Image 3",
        },
        {
          itemImageSrc: "/images/galleria4.jpg",
          thumbnailImageSrc: "/images/galleria4.jpg",
          alt: "Image 4",
        },
      ],
    };
  },
  computed: {
    filteredThumbnails() {
      return this.images.filter((_, index) => index !== this.activeIndex);
    },
  },
  methods: {
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
  setup() {
    return {};
  },
};
</script>

<style scoped>
.gallery {
  text-align: center;
  padding: 0 119px 283px 119px;
}

.thumbnail-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
}

.thumbnail {
  margin: 0 10px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 0.3s ease;
  width: 408px;
  height: 256px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  border-radius: 13.33px;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.main-image {
  border-radius: 13.33px;
  width: 100%;
  max-width: 1253.44px;
  height: 787.5px; /* Chiều cao cố định */
  margin: 0 auto;
  object-fit: cover; /* Đảm bảo hình ảnh không bị méo */
}

.divider {
  width: 100%;
  max-width: 1260px;
  height: 1.33px;
  background-color: #000000;
  margin: 44px auto;
}

.end {
  margin-bottom: 0;
}

/* Responsive styles */
@media (max-width: 1366px) {
  .gallery {
    padding: 60px;
  }

  .thumbnail {
    width: 300px;
    height: 180px;
  }

  .main-image {
    height: 600px; /* Giảm chiều cao */
  }

  .divider {
    max-width: 1000px;
  }
}

@media (max-width: 768px) {
  .gallery {
    padding: 40px;
  }

  .thumbnail {
    width: 200px;
    height: 120px;
    margin: 5px;
  }

  .main-image {
    height: 400px; /* Giảm chiều cao */
  }

  .divider {
    max-width: 800px;
  }
}

@media (max-width: 480px) {
  .gallery {
    padding: 20px;
  }

  .thumbnail {
    width: 150px;
    height: 90px;
    margin: 5px;
  }

  .main-image {
    height: 300px; /* Giảm chiều cao */
  }

  .divider {
    max-width: 90%;
  }
}
</style>

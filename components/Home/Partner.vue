<template>
  <div class="partner">
    <p class="title fade-in-up">Partner</p>
    <div class="underline-container fade-in-left">
      <div class="underline" style="background-color: #00dbf4"></div>
      <i
        class="pi pi-arrow-down-left"
        style="
          color: black;
          font-size: 40px;
          margin-left: 57px;
          margin-right: 17px;
        "
      ></i>
    </div>
    <p class="subtitle fade-in-up"></p>

    <!-- Desktop View (grid layout) -->
    <div class="partner-images fade-in-up" v-if="!isMobile">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image.src"
        :alt="image.alt"
        class="partner-image fade-in-up"
      />
    </div>

    <!-- Mobile View (carousel) -->
    <div class="carousel-container fade-in-up" v-else>
      <button class="carousel-button prev fade-in-left" @click="prevSlide">
        &lt;
      </button>
      <div class="carousel">
        <div
          class="carousel-inner"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <div
            class="carousel-item fade-in-up"
            v-for="(image, index) in images"
            :key="index"
          >
            <img :src="image.src" :alt="image.alt" class="partner-image" />
          </div>
        </div>
      </div>
      <button class="carousel-button next fade-in-right" @click="nextSlide">
        &gt;
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Partner",
  setup() {
    const currentSlide = ref(0);
    const isMobile = ref(false);

    const prevSlide = () => {
      currentSlide.value =
        (currentSlide.value - 1 + images.length) % images.length;
    };

    const nextSlide = () => {
      currentSlide.value = (currentSlide.value + 1) % images.length;
    };

    // Auto-rotate carousel
    let intervalId = null;

    const startAutoRotate = () => {
      intervalId = setInterval(nextSlide, 3000);
    };

    const stopAutoRotate = () => {
      clearInterval(intervalId);
    };

    // Check screen size
    const checkScreenSize = () => {
      isMobile.value = window.innerWidth <= 768;
    };

    onMounted(() => {
      checkScreenSize();
      window.addEventListener("resize", checkScreenSize);
      if (isMobile.value) {
        startAutoRotate();
      }
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", checkScreenSize);
      stopAutoRotate();
    });

    return {
      currentSlide,
      isMobile,
      prevSlide,
      nextSlide,
      images,
    };
  },
};
</script>

<style scoped>
.partner {
  padding: 117px 108px 202px 108px;
}

.title {
  font-size: 53.91px;
  font-family: "Inter", sans-serif;
}

.subtitle {
  font-size: 25.78px;
  color: #343434;
  margin-bottom: 181px;
  font-family: "Inter", sans-serif;
}

.underline-container {
  display: flex;
  align-items: end;
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

/* Desktop Styles */
.partner-images {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  margin: 0 auto;
  background-color: #000000;
  border-radius: 10px;
  padding: 56px;
  box-sizing: border-box;
}

.partner-image {
  height: auto;
  max-width: 100%;
  border-radius: 8px;
  object-fit: contain;
}

/* Carousel Styles */
.carousel-container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  border-radius: 10px;
  padding: 20px 0;
  position: relative;
}

.carousel {
  width: 80%;
  overflow: hidden;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-item {
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
}

.carousel-item img {
  max-width: 80%;
  max-height: 100px;
  object-fit: contain;
}

.carousel-button {
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 20px;
  border-radius: 50%;
  z-index: 1;
}

.carousel-button:hover {
  background: rgba(0, 0, 0, 0.8);
}

/* Responsive Styles */
@media (min-width: 1367px) and (max-width: 1920px) {
  .partner-images {
    gap: 30px;
    padding: 30px;
  }

  .partner-image {
    max-width: 15%;
  }
}

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
    gap: 20px;
  }

  .partner-image {
    max-width: 15%;
  }
}

@media (max-width: 1024px) {
  .partner-images {
    gap: 15px;
  }

  .partner-image {
    max-width: 15%;
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
    display: none;
  }

  .carousel-container {
    display: flex;
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

  .carousel {
    width: 70%;
  }

  .carousel-item img {
    max-height: 80px;
  }
}
</style>

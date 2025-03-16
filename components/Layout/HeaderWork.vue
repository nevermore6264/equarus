<template>
  <header class="header-work">
    <div class="logo-container">
      <NuxtLink to="/">
        <img src="~/public/images/company-hoz.png" alt="Logo" class="logo" />
      </NuxtLink>
    </div>

    <div
      class="text-container"
      :style="{ opacity: textOpacity, visibility: textVisible }"
    >
      <p class="text-line">Wherever Vietnamese Goods Go,</p>
      <p class="text-line">The Border of Vietnam Follows.</p>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderWork",
  data() {
    return {
      textOpacity: 1,
      textVisible: "visible",
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY;
      const fadeStart = 150; // Bắt đầu làm mờ từ 150px
      const fadeEnd = 300; // Ẩn hoàn toàn khi cuộn đến 300px

      if (scrollPosition < fadeStart) {
        this.textOpacity = 1;
        this.textVisible = "visible";
      } else if (scrollPosition < fadeEnd) {
        // Tính toán độ mờ dần
        this.textOpacity =
          1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart);
      } else {
        this.textOpacity = 0;
        this.textVisible = "hidden";
      }
    },
  },
};
</script>

<style scoped>
.header-work {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: transparent;
  z-index: 1000;
  text-align: center;
  transition: all 0.3s ease;
}

.logo-container {
  margin-bottom: 20px;
  height: 100px;
  background-color: #ffffff;
}

.logo {
  width: 132.39px;
  height: 81.33px;
  margin-top: 20px;
}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  z-index: 999;
  height: 100%;
  transition: opacity 0.5s ease, visibility 0.5s ease;
}

.text-line {
  font-size: 53.33px;
  color: #1e1e1e;
  margin: 10px 0;
  font-family: "Gentium Book Basic", serif;
  text-align: center;
}
</style>

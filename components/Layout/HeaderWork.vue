<template>
  <header class="header-work" :class="{ scrolled: isScrolled }">
    <div class="logo-container">
      <img src="~/public/images/company-hoz.png" alt="Logo" class="logo" />
    </div>
    <div class="text-container" :class="{ hidden: isScrolled }">
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
      isScrolled: false,
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
      this.isScrolled = scrollPosition > 300;
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
  height: 100vh; /* Chiều cao 100% khung hình */
  background-color: transparent;
  z-index: 1000;
  padding: 20px;
  text-align: center;
  transition: all 0.3s ease;
}

.logo-container {
  margin-bottom: 20px;
}

.logo {
  width: 132.39px;
  height: 81.33px;
}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transition: opacity 0.5s ease;
  background-color: #ffffff;
  z-index: 999;
  height: 100%; /* Chiều cao 100% khung hình */
}

.text-container.hidden {
  opacity: 0;
}

.text-line {
  font-size: 53.33px;
  color: #1e1e1e;
  margin: 10px 0;
  font-family: "Gentium Book Basic", serif;
  text-align: center;
}

.header-work.scrolled {
  padding: 10px;
}

.header-work.scrolled .text-container {
  opacity: 0;
}
</style>

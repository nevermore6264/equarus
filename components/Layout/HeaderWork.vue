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
      if (scrollPosition > 100) {
        // Khi scroll xuống quá 100px
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
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
  background-color: #ffffff;
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
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transition: opacity 0.3s ease;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 999;
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
  background-color: rgba(255, 255, 255, 0.9);
}

.header-work.scrolled .text-container {
  opacity: 0;
}
</style>

<template>
  <header class="header-work">
    <!-- Logo luôn cố định trên cùng -->
    <div class="logo-container">
      <NuxtLink to="/">
        <img src="~/public/images/company-hoz.png" alt="Logo" class="logo" />
      </NuxtLink>
    </div>

    <!-- Text sẽ bị mờ dần khi cuộn -->
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
      const fadeEnd = 500; // Ẩn hoàn toàn khi cuộn đến 500px

      if (scrollPosition < fadeStart) {
        this.textOpacity = 1;
        this.textVisible = "visible";
      } else if (scrollPosition < fadeEnd) {
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
/* Header chiếm toàn bộ màn hình */
.header-work {
  width: 100%;
  height: 100vh;
  background-color: transparent;
  text-align: center;
  transition: all 0.3s ease;
}

/* Logo cố định khi cuộn */
.logo-container {
  position: fixed; /* Giữ cố định trên cùng */
  top: 0;
  left: 0;
  width: 100%;
  height: 80px; /* Chiều cao logo */
  background-color: white; /* Nền trắng để dễ nhìn */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001; /* Đảm bảo hiển thị trên tất cả */
}

.logo {
  width: 132px;
  height: auto;
}

/* Text container sẽ bị mờ dần */
.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  z-index: 999;
  height: 100%;
  transition: opacity 0.5s ease, visibility 0.5s ease;
  padding-top: 100px; /* Để tránh bị che bởi logo */
}

.text-line {
  font-size: 53.33px;
  color: #1e1e1e;
  margin: 10px 0;
  font-family: "Gentium Book Basic", serif;
  text-align: center;
}

/* Responsive Styles */
@media (max-width: 1366px) {
  .text-line {
    font-size: 40px; /* Giảm kích thước font */
  }

  .logo {
    width: 110px; /* Giảm kích thước logo */
  }

  .logo-container {
    height: 70px; /* Giảm chiều cao logo container */
  }

  .text-container {
    padding-top: 90px; /* Điều chỉnh padding-top */
  }
}

@media (max-width: 768px) {
  .text-line {
    font-size: 30px; /* Giảm kích thước font */
  }

  .logo {
    width: 90px; /* Giảm kích thước logo */
  }

  .logo-container {
    height: 60px; /* Giảm chiều cao logo container */
  }

  .text-container {
    padding-top: 80px; /* Điều chỉnh padding-top */
  }
}

@media (max-width: 480px) {
  .text-line {
    font-size: 20px; /* Giảm kích thước font */
  }

  .logo {
    width: 70px; /* Giảm kích thước logo */
  }

  .logo-container {
    height: 50px; /* Giảm chiều cao logo container */
  }

  .text-container {
    padding-top: 70px; /* Điều chỉnh padding-top */
  }
}
</style>

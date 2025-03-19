<template>
  <header class="header" id="header">
    <div class="header-content">
      <NuxtLink to="/">
        <img
          src="~/public/images/company.png"
          alt="Logo"
          class="logo header-title"
        />
      </NuxtLink>
      <p class="header-subtitle">Building Global Brands</p>
      <p class="header-owner">Owned By Vietnamese People.</p>

      <!-- Icon để hiển thị menu -->
      <i class="pi pi-align-justify menu-icon" @click="toggleMenu"></i>

      <!-- Menu dropdown -->
      <div v-if="isMenuVisible" class="menu-dropdown">
        <span class="menu-item" @click="scrollToHeader">About</span>
        <span class="menu-item" @click="scrollToCareers">Careers</span>
        <NuxtLink to="/work" class="menu-item">Work</NuxtLink>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isMenuVisible: false, // Trạng thái hiển thị menu
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible; // Đảo ngược trạng thái hiển thị menu
    },
    scrollToHeader() {
      const header = document.getElementById("header");
      if (header) {
        header.scrollIntoView({ behavior: "smooth" });
      }
    },
    scrollToCareers() {
      const careers = document.getElementById("careers");
      if (careers) {
        careers.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style scoped>
.header {
  background-image: url("/images/header/bg.gif");
  padding: 129px 119px;
  background-size: cover;
  width: 100%;
  position: relative; /* Để menu dropdown có thể định vị tương đối */
}

.header-content {
  margin: 0 auto;
  text-align: left;
  position: relative; /* Để menu dropdown có thể định vị tương đối */
}

.header-title {
  width: 192px;
  height: 39px;
  cursor: pointer;
}

.header-subtitle {
  font-size: 112px;
  color: #ffffff;
  margin-top: 455px;
  font-family: "Gentium Book Basic", serif;
}

.header-owner {
  font-size: 112px;
  color: #ffffff;
  margin-top: 20px;
  font-family: "Gentium Book Basic", serif;
}

/* Icon menu */
.menu-icon {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 24px;
  color: #ffffff;
  cursor: pointer;
  z-index: 1000; /* Đảm bảo icon hiển thị trên cùng */
}

/* Menu dropdown */
.menu-dropdown {
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 999; /* Đảm bảo menu hiển thị trên các phần tử khác */
}

.menu-item {
  display: block;
  padding: 10px 20px;
  color: #000000;
  text-decoration: none;
  font-family: "Inter", sans-serif;
  font-size: 16px;
}

.menu-item:hover {
  background-color: #f0f0f0;
  border-radius: 4px;
}

/* Responsive Styles */
@media (max-width: 1366px) {
  .header {
    padding: 60px;
  }

  .header-subtitle,
  .header-owner {
    font-size: 80px;
  }

  .header-subtitle {
    margin-top: 300px;
  }
}

@media (max-width: 768px) {
  .header {
    padding: 40px;
  }

  .header-subtitle,
  .header-owner {
    font-size: 50px;
  }

  .header-subtitle {
    margin-top: 200px;
  }

  .header-title {
    width: 150px;
    height: 30px;
  }

  .menu-icon {
    top: 15px;
    right: 15px;
    font-size: 20px;
  }

  .menu-dropdown {
    top: 50px;
    right: 15px;
  }
}

@media (max-width: 480px) {
  .header {
    padding: 20px;
  }

  .header-subtitle,
  .header-owner {
    font-size: 30px;
  }

  .header-subtitle {
    margin-top: 100px;
  }

  .header-title {
    width: 120px;
    height: 25px;
  }

  .header-content {
    text-align: center;
  }

  .menu-icon {
    top: 10px;
    right: 10px;
    font-size: 18px;
  }

  .menu-dropdown {
    top: 40px;
    right: 10px;
  }
}
</style>

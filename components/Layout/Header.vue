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
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  background-image: url("/images/header/bg.gif");
  padding: 89.5px;
  background-size: cover;
  width: 100%;
}

.header-content {
  margin: 0 auto;
  text-align: left;
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
}
</style>

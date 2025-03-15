<template>
  <header class="header">
    <div class="header-content">
      <img
        src="~/public/images/company.png"
        alt="Logo"
        class="logo header-title"
      />
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
}

.header-content {
  margin: 0 auto;
}

.header-title {
  width: 192px;
  height: 39px;
}

.header-subtitle {
  font-size: 112px;
  color: #ffffff;
  margin-top: 300px;
  font-family: "Gentium Book Basic", serif;
}

.header-owner {
  font-size: 112px;
  color: #ffffff;
  margin-top: 20px;
  font-family: "Gentium Book Basic", serif;
}
</style>

<template>
  <div class="header-content">
    <p class="title">Work</p>
  </div>
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
</style>

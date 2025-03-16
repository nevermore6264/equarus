<template>
  <div class="culture">
    <p class="title">Văn hoá</p>
    <div class="underline-container">
      <div class="underline" style="background-color: #00dbf4"></div>
      <i class="pi pi-arrow-down-left" style="color: #ffffff"></i>
    </div>
    <p class="subtitle">Tổ Chức Hiệu Suất Cao</p>
  </div>
</template>

<script>
export default {
  name: "Culture",
};
</script>

<style scoped>
.culture {
  padding: 89.5px;
  background-color: #0d0d0d;
}

.title {
  font-size: 48px;
  font-family: "Inter", sans-serif;
  color: #ffffff;
}

.subtitle {
  font-size: 24px;
  color: #00dbf4;
  margin-bottom: 100px;
  font-family: "Inter", sans-serif;
}

.underline-container {
  display: flex;
  align-items: center;
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
</style>

<template>
  <div class="careers">
    <p class="title">Careers</p>
    <div class="underline-container">
      <div class="underline" style="background-color: #00dbf4"></div>
      <i class="pi pi-arrow-down-left" style="color: black"></i>
    </div>
    <p class="subtitle">Chức năng, nhiệm vụ phòng ban</p>
  </div>
</template>

<script>
export default {
  name: "Careers",
};
</script>

<style scoped>
.careers {
  padding: 89.5px;
}

.title {
  font-size: 48px;
  font-family: "Inter", sans-serif;
}

.subtitle {
  font-size: 24px;
  color: #343434;
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

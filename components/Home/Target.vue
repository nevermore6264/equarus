<template>
  <div class="target">
    <p class="title">Mục tiêu</p>
    <div class="underline-container">
      <div class="underline" style="background-color: #00dbf4"></div>
      <i class="pi pi-arrow-down-left" style="color: black"></i>
    </div>
    <p class="subtitle"></p>
    <table class="target-table">
      <tbody>
        <tr>
          <td class="year">2025 - 2026</td>
          <td class="icon">
            <i
              class="pi pi-arrow-up"
              style="color: #00dbf4; font-size: 48px"
            ></i>
          </td>
          <td class="content">
            Hoàn thiện mô hình vận hành và quy trình xây dựng thương hiệu toàn
            diện
          </td>
        </tr>
        <tr>
          <td class="year">2027 - 2034</td>
          <td class="icon">
            <i
              class="pi pi-arrow-up"
              style="color: #00dbf4; font-size: 48px"
            ></i>
          </td>
          <td class="content">
            Phát triển thêm nhiều thương hiệu toàn cầu mới
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Target",
};
</script>

<style scoped>
.target {
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

.target-table {
  width: 100%;
  margin: 0 auto;
  border-collapse: collapse;
  color: #ffffff;
}

.target-table th,
.target-table td {
  text-align: left;
}

.target-table th {
  font-size: 18px;
  font-family: "Inter", sans-serif;
  color: #00dddf;
}

.target-table .content {
  font-size: 48px;
  font-family: "Gentium Book Basic", serif;
  color: #d9d9d9;
  padding-left: 20px; /* Thêm khoảng cách giữa icon và nội dung */
}

.target-table .year {
  font-size: 64px;
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  width: 33%;
}
</style>

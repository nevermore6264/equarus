<template>
  <div class="target">
    <p class="title">Mục tiêu</p>
    <div class="underline-container">
      <div class="underline" style="background-color: #00dbf4"></div>
      <i
        class="pi pi-arrow-down-left"
        style="
          color: #1e1e1e;
          font-size: 40px;
          margin-left: 57px;
          margin-right: 17px;
        "
      ></i>
    </div>
    <p class="subtitle"></p>
    <table class="target-table">
      <tbody>
        <tr>
          <td class="year">2025 - 2026</td>
          <td class="icon">
            <i
              class="pi pi-arrow-up"
              style="color: #00dbf4; font-size: 46px"
            ></i>
          </td>
          <td class="content">
            Hoàn thiện mô hình vận hành và quy trình xây dựng thương hiệu toàn
            diện
          </td>
        </tr>
        <tr class="two">
          <td class="year">2027 - 2034</td>
          <td class="icon">
            <i
              class="pi pi-arrow-up"
              style="color: #00dbf4; font-size: 46px"
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
  padding: 0 121px 48px 121px;
  background-color: #0d0d0d;
}

.title {
  font-size: 53.91px;
  font-family: "Inter", sans-serif;
  color: #ffffff;
}

.subtitle {
  font-size: 25.78px;
  color: #343434;
  margin-bottom: 50px;
  font-family: "Inter", sans-serif;
}

.underline-container {
  display: flex;
  align-items: center;
  margin-top: 7px;
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
  font-size: 51.56px;
  font-family: "Gentium Book Basic", serif;
  color: #d9d9d9;
  padding-left: 71px;
  font-weight: 300;
  line-height: 80px;
  padding-top: 63px;
  letter-spacing: -0.8px;
}

.target-table .two .content {
  padding-top: 0;
  vertical-align: top;
}

.target-table .year {
  font-size: 70.31px;
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  width: 31%;
  font-weight: 300;
}

.target-table td {
  padding-bottom: 133px;
}

/* Responsive Styles */
@media (max-width: 1366px) {
  .target {
    padding: 60px;
  }

  .title {
    font-size: 40px;
  }

  .target-table .content {
    font-size: 40px;
    padding-left: 80px;
    line-height: 60px;
  }

  .target-table .year {
    font-size: 50px;
  }

  .target-table td {
    padding-bottom: 80px;
  }
}

@media (max-width: 768px) {
  .target {
    padding: 40px;
  }

  .title {
    font-size: 30px;
  }

  .target-table .content {
    font-size: 30px;
    padding-left: 60px;
    line-height: 50px;
  }

  .target-table .year {
    font-size: 40px;
  }

  .target-table td {
    padding-bottom: 60px;
  }
}

@media (max-width: 480px) {
  .target {
    padding: 20px;
  }

  .title {
    font-size: 24px;
  }

  .target-table {
    display: block;
  }

  .target-table tbody,
  .target-table tr,
  .target-table td {
    display: block;
    width: 100%;
  }

  .target-table .content {
    font-size: 20px;
    padding-left: 0;
    line-height: 30px;
  }

  .target-table .year {
    font-size: 30px;
    width: 100%;
    margin-bottom: 20px;
  }

  .target-table td {
    padding-bottom: 40px;
  }

  .target-table .icon {
    display: none; /* Ẩn icon trên màn hình nhỏ */
  }
}
</style>

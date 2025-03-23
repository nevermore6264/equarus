<template>
  <div class="history">
    <p class="title">Lịch sử phát triển</p>
    <div class="underline-container">
      <div class="underline" style="background-color: #00dbf4"></div>
      <i class="pi pi-arrow-down-left arrow-icon" style="color: #1e1e1e"></i>
    </div>
    <p class="subtitle"></p>

    <div class="table">
      <div class="row">
        <div class="cell"></div>
        <div class="cell">
          <p class="date">28/05/2021</p>
          <p class="content">
            Công ty TNHH Equarus Decor chính thức được thành lập với định hướng
            phát triển thành Equarus Holding, đánh dấu bước ngoặt quan trọng
            trong chiến lược mở rộng của công ty.
          </p>
        </div>
        <div class="cell"></div>
      </div>
      <div class="row two">
        <div class="cell">
          <p class="date">13/10/2019</p>
          <p class="content">
            Equarus Team được thành lập với hai thành viên sáng lập, khởi đầu
            trong lĩnh vực MMO, đặt nền móng cho sự phát triển sau này.
          </p>
        </div>
        <div class="cell"></div>
        <div class="cell">
          <p class="date">11/01/2025</p>
          <p class="content">
            Mở rộng hoạt động kinh doanh ra thị trường quốc tế bao gồm Hoa
            Kỳ(US), Vương quốc Anh (UK), Liên minh châu Âu (EU), Úc (AU) và
            Canada. Phát triển đa kênh bán hàng ngoài thị trường Hoa Kỳ.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "History",
};
</script>

<style scoped>
.history {
  padding: 0px 128.5px 129px 128.5px;
  background-color: #0d0d0d;
  color: #ffffff;
}

.title {
  font-size: 53.91px;
  font-family: "Inter", sans-serif;
  color: #ffffff;
}

.subtitle {
  font-size: 25.78px;
  color: #343434;
  margin-bottom: 92px;
  font-family: "Inter", sans-serif;
}

.underline-container {
  display: flex;
  align-items: end;
}

.underline {
  flex: 1;
  height: 2px;
  background-color: #00dbf4;
}

.arrow-icon {
  font-size: 40px; /* Kích thước mặc định */
  margin-left: 57px; /* Khoảng cách mặc định */
  margin-right: 17px; /* Khoảng cách mặc định */
}

.table {
  display: flex;
  flex-direction: column;
  gap: 93px;
  margin: 0 auto;
  background-image: url("/images/timeline.svg");
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 500px;
  width: 100%;
  height: 1010px;
}

.two .date {
  margin-top: 0px;
  margin-left: 0px;
}

.two .content {
  margin-top: 0px;
  margin-left: 0px;
}

.row {
  display: flex;
}

.cell {
  flex: 1;
  padding: 20px;
}

.date {
  font-size: 26.67px;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  margin-bottom: 29px;
  margin-top: 30px;
  margin-left: 20px;
  letter-spacing: 5.2px;
}

.content {
  font-size: 30.47px;
  font-family: "Gentium Book Basic", serif;
  letter-spacing: 0.3px;
  line-height: 53px;
  color: #ffffff;
  margin-left: 20px;
  letter-spacing: 0.3px;
}

/* Responsive styles */
@media (max-width: 1366px) {
  .history {
    padding: 60px;
  }

  .underline-container {
    align-items: center;
  }

  .title {
    font-size: 40px;
  }

  .subtitle {
    font-size: 20px;
    margin-bottom: 80px;
  }

  .arrow-icon {
    font-size: 32px; /* Giảm kích thước icon */
    margin-left: 40px; /* Giảm khoảng cách */
    margin-right: 10px; /* Giảm khoảng cách */
  }

  .date {
    font-size: 20px;
  }

  .content {
    font-size: 24px;
    line-height: 1.6;
  }

  .table {
    gap: 60px;
    min-height: 400px;
    height: auto; /* Thay đổi height thành auto */
  }
}

@media (max-width: 768px) {
  .history {
    padding: 40px;
  }

  .title {
    font-size: 32px;
  }

  .subtitle {
    font-size: 18px;
    margin-bottom: 50px;
  }

  .arrow-icon {
    font-size: 24px; /* Giảm kích thước icon */
    margin-left: 20px; /* Giảm khoảng cách */
    margin-right: 5px; /* Giảm khoảng cách */
  }

  .date {
    font-size: 18px;
  }

  .content {
    font-size: 20px;
    line-height: 1.5;
  }

  .table {
    gap: 40px;
    min-height: 300px;
    height: auto; /* Thay đổi height thành auto */
  }

  .row {
    flex-direction: column;
  }

  .cell {
    padding: 10px;
  }
}

@media (max-width: 480px) {
  .history {
    padding: 20px;
  }

  .title {
    font-size: 24px;
  }

  .subtitle {
    font-size: 16px;
    margin-bottom: 30px;
  }

  .arrow-icon {
    font-size: 20px; /* Giảm kích thước icon */
    margin-left: 10px; /* Giảm khoảng cách */
    margin-right: 5px; /* Giảm khoảng cách */
  }

  .date {
    font-size: 16px;
  }

  .content {
    font-size: 18px;
    line-height: 1.4;
  }

  .table {
    gap: 20px;
    min-height: 200px;
    height: auto; /* Thay đổi height thành auto */
    background: none; /* Ẩn background trên màn hình nhỏ */
  }

  .row {
    flex-direction: column;
  }

  .cell {
    padding: 5px;
  }
}
</style>

<template>
  <div class="history">
    <p class="title">Lịch sử phát triển</p>
    <div class="underline-container">
      <div class="underline" style="background-color: #00dbf4"></div>
      <i class="pi pi-arrow-down-left" style="color: #ffffff"></i>
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
      <div class="row">
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
  padding: 129px 119px;
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
  margin-bottom: 20px;
}

.content {
  font-size: 30.47px;
  font-family: "Gentium Book Basic", serif;
  line-height: 1.6;
  color: #ffffff;
}

/* Responsive styles */
@media (max-width: 1366px) {
  .history {
    padding: 60px;
  }

  .title {
    font-size: 40px;
  }

  .subtitle {
    font-size: 20px;
    margin-bottom: 70px;
  }

  .date {
    font-size: 20px;
  }

  .content {
    font-size: 24px;
  }

  .table {
    gap: 60px;
    min-height: 400px;
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

  .date {
    font-size: 18px;
  }

  .content {
    font-size: 20px;
  }

  .table {
    gap: 40px;
    min-height: 300px;
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

  .date {
    font-size: 16px;
  }

  .content {
    font-size: 18px;
  }

  .table {
    gap: 20px;
    min-height: 200px;
    background: none;
  }

  .row {
    flex-direction: column;
  }

  .cell {
    padding: 5px;
  }
}
</style>

<template>
  <div class="culture">
    <p class="title">Văn hóa</p>
    <div class="underline-container">
      <div class="underline" style="background-color: #00dbf4"></div>
      <i class="pi pi-arrow-down-left" style="color: #ffffff"></i>
    </div>
    <p class="subtitle">Tổ Chức Hiệu Suất Cao</p>

    <!-- Phần nội dung chia thành 4 cột -->
    <div class="content">
      <div class="col">
        <p class="description">
          Equarus định hình là tổ chức hiệu suất cao, nơi mỗi cá nhân cùng hướng
          đến mục tiêu chung, chia sẻ giá trị và không ngừng phát triển.
        </p>
        <img src="~/public/images/culture1.jpg" alt="Culture" />
      </div>
      <div class="col">
        <p class="principle">
          Với hai giá trị cốt lõi: Trọn vẹn & Hoàn tất – Cam kết theo đuổi mục
          tiêu đến cùng, đảm bảo chất lượng và hiệu quả tối ưu trong mọi công
          việc. Better than Yesterday – Liên tục cải tiến, phát triển bản thân
          và nâng cao năng lực mỗi ngày.
        </p>
      </div>
      <div class="col">
        <p class="conclusion">
          Chúng tôi tin rằng thành công của tập thể đến từ việc đặt đúng người
          vào đúng vị trí, nhờ đó mỗi cá nhân phát huy tối đa khả năng và thế
          mạnh của mình. Equarus không ngừng tìm kiếm những nhân sự phù hợp với
          định hướng để cùng nhau góp phần đưa hàng Việt vươn xa toàn cầu.
        </p>
      </div>
      <div class="col">
        <img class="four" src="~/public/images/culture2.jpg" alt="Culture" />
      </div>
    </div>

    <img src="~/public/images/cul.png" alt="Văn hoá công ty" class="map" />
  </div>
</template>

<script>
export default {
  name: "Culture",
};
</script>

<style scoped>
.culture {
  padding: 93px 124.5px 181px 124.5px;
  background-color: #0d0d0d;
  color: #ffffff;
}

.title {
  font-size: 53.91px;
  font-family: "Inter", sans-serif;
  color: #ffffff;
  letter-spacing: -1.8px;
}

.subtitle {
  font-size: 25.78px;
  color: #00dbf4;
  margin-bottom: 120px;
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

/* Phần nội dung chia thành 4 cột */
.content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 67.5px;
  margin: 0 auto;
}

.col {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0;
}

.col .four {
  padding: 10px;
  margin-top: 0px;
  padding: 6px 10px;
}

.map {
  margin-top: 161px;
  width: 100%;
  height: 1044;
  max-width: 1661.33px;
}

.col img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 13.33px;
  margin-top: 108px;
}

.description,
.principle,
.conclusion {
  font-size: 30.47px;
  color: #d9d9d9;
  font-family: "Gentium Book Basic", serif;
  line-height: 52px;
}

.principle {
  letter-spacing: 1px;
}

/* Responsive styles */
@media (max-width: 1366px) {
  .culture {
    padding: 60px;
  }

  .title {
    font-size: 40px;
  }

  .subtitle {
    font-size: 20px;
    margin-bottom: 220px;
  }

  .content {
    grid-template-columns: repeat(2, 1fr);
    gap: 60px;
  }

  .description,
  .principle,
  .conclusion {
    font-size: 24px;
  }
}

@media (max-width: 768px) {
  .culture {
    padding: 40px;
  }

  .title {
    font-size: 32px;
  }

  .subtitle {
    font-size: 18px;
    margin-bottom: 50px;
  }

  .content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .description,
  .principle,
  .conclusion {
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .culture {
    padding: 20px;
  }

  .title {
    font-size: 24px;
  }

  .subtitle {
    font-size: 16px;
    margin-bottom: 30px;
  }

  .content {
    gap: 20px;
  }

  .description,
  .principle,
  .conclusion {
    font-size: 18px;
  }
}
</style>

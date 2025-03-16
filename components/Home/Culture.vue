<template>
  <div class="culture">
    <p class="title">Văn hoá</p>
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
        <img src="~/public/images/culture1.png" alt="Culture" />
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
        <img src="~/public/images/culture2.png" alt="Culture" />
      </div>
    </div>
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
  color: #ffffff;
}

.title {
  font-size: 53.91px;
  font-family: "Inter", sans-serif;
  color: #ffffff;
}

.subtitle {
  font-size: 25.78px;
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

/* Phần nội dung chia thành 4 cột */
.content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 92px;
  margin: 0 auto;
}

.col {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.col img {
  width: 100%;
  height: auto;
  border-radius: 13.33px;
}

.description,
.principle,
.conclusion {
  font-size: 30.47px;
  line-height: 1.6;
  color: #d9d9d9;
  font-family: "Gentium Book Basic", serif;
}
</style>

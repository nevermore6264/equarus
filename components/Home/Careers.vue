<template>
  <div class="careers" id="careers">
    <p class="title">Careers</p>
    <!-- Thêm thẻ div với gạch chân và icon -->
    <div class="underline-container">
      <div class="underline" style="background-color: #00dbf4"></div>
      <i class="pi pi-arrow-down-left" style="color: black"></i>
    </div>
    <p class="subtitle">Chức năng, nhiệm vụ phòng ban</p>
    <div class="departments">
      <div class="department">
        <p class="title">R&D</p class="title">
        <p class="desc">Nghiên cứu và phát triển sản phẩm mới</p>
      </div>
      <div class="department">
        <p class="title">Digital Marketing</p class="title">
        <p class="desc">Quản lý và triển khai các chiến dịch marketing trực tuyến</p>
      </div>
      <div class="department">
        <p class="title">Product Design</p class="title">
        <p class="desc">Thiết kế và phát triển sản phẩm</p>
      </div>
      <div class="department">
        <p class="title">Brand Marketing</p class="title">
        <p class="desc">Xây dựng và phát triển thương hiệu</p>
      </div>

      <div class="department">
        <p class="title">Supplychain</p class="title">
        <p class="desc">Quản lý chuỗi cung ứng và vận hành kho hàng</p>
      </div>
      <div class="department">
        <p class="title">Legal</p class="title">
        <p class="desc">Quản lý các vấn đề pháp lý sản phẩm và tuân thủ quy định của sàn</p>
      </div>
      <div class="department">
        <p class="title">HR</p class="title">
        <p class="desc">Quản lý nhân sự và phát triển đội ngũ</p>
      </div>
      <div class="department">
        <p class="title">Finance</p class="title">
        <p class="desc">Quản lý tài chính</p>
      </div>
    </div>

    <div class="join-us">
      <img src="~/public/images/join_us.png" alt="Join Us" class="join-us-image" />
      <button class="get-started-button">Get started</button>
    </div>
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
  font-size: 53.91px;
  font-family: 'Inter', sans-serif;
}

.subtitle {
  font-size: 25.78px;
  color: #343434;
  margin-bottom: 100px;
  font-family: 'Inter', sans-serif;
}

.departments {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1.5rem;
}

.department .title {
  font-size: 35px;
  margin-bottom: 30px;
  color: #000000;
  font-family: 'Gentium Book Basic', serif;
}

.department .desc {
  font-size: 25px;
  color: #616161;
  font-family: 'Gentium Book Basic', serif;
}

.underline-container {
  display: flex;
  align-items: center;
}

.underline {
  flex: 1;
  height: 2px;
  background-color: #00DBF4;
}

.pi-arrow-down-left {
  margin-left: 0.5rem;
  font-size: 1.5rem;
}

.join-us {
  position: relative;
  margin-top: 100px;
  text-align: center;
}

.join-us-image {
  max-width: 100%;
  height: auto;
}

.get-started-button {
  position: absolute;
  bottom: 100px;
  left: 45px;
  padding: 16px 44px;
  font-size: 15px;
  font-family: "Lexend Zetta", sans-serif;
  color: #000000;
  background-color: #D9D9D9;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  text-transform: uppercase;
}

</style>

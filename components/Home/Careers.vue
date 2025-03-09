<template>
  <div class="careers">
    <p class="title">Careers</p>
    <!-- Thêm thẻ div với gạch chân và icon -->
    <div class="underline-container">
      <div class="underline" style="background-color: #00dbf4"></div>
      <i class="pi pi-arrow-down-left" style="color: black"></i>
    </div>
    <p class="subtitle">Chức năng, nhiệm vụ phòng ban</p>
    <div class="departments">
      <div class="department">
        <h2>R&D</h2>
        <p>Nghiên cứu và phát triển sản phẩm mới</p>
      </div>
      <div class="department">
        <h2>Supplychain</h2>
        <p>Quản lý chuỗi cung ứng và vận hành kho hàng</p>
      </div>
      <div class="department">
        <h2>Digital Marketing</h2>
        <p>Quản lý và triển khai các chiến dịch marketing trực tuyến</p>
      </div>
      <div class="department">
        <h2>Legal</h2>
        <p>Quản lý các vấn đề pháp lý sản phẩm và tuân thủ quy định của sàn</p>
      </div>
      <div class="department">
        <h2>Product Design</h2>
        <p>Thiết kế và phát triển sản phẩm</p>
      </div>
      <div class="department">
        <h2>HR</h2>
        <p>Quản lý nhân sự và phát triển đội ngũ</p>
      </div>
      <div class="department">
        <h2>Brand Marketing</h2>
        <p>Xây dựng và phát triển thương hiệu</p>
      </div>
      <div class="department">
        <h2>Finance</h2>
        <p>Quản lý tài chính</p>
      </div>
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
  padding: 2rem;
}

.title {
  font-size: 48px;
  font-weight: bold;
}

.subtitle {
  font-size: 24px;
  color: #343434;
  margin-bottom: 100px;
}

.departments {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.department {
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.department h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.department p {
  font-size: 1rem;
  color: #444;
}

/* Style cho thẻ div chứa gạch chân và icon */
.underline-container {
  display: flex;
  align-items: center;
}

.underline {
  flex: 1; /* Chiếm phần lớn không gian */
  height: 2px; /* Độ dày của gạch chân */
  background-color: #00dbf4; /* Màu gạch chân */
}

.pi-arrow-down-left {
  margin-left: 0.5rem; /* Khoảng cách giữa gạch chân và icon */
  font-size: 1.5rem; /* Kích thước icon */
}
</style>

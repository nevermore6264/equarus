<template>
  <footer class="footer p-d-flex p-flex-wrap p-jc-between p-ai-center p-p-4">
    <!-- Phần bên trái -->
    <div class="left-content p-d-flex p-flex-column p-ai-start">
      <h2 class="p-mb-2">Building Global Brands Owned By Vietnamese People</h2>
      <!-- Thay thế đoạn <p> bằng Button -->
      <Button label="JOIN OUR TEAM" class="p-button-outlined p-mb-4" />
      <div class="company-info p-d-flex p-flex-column p-ai-start">
        <p>Công ty TNHH Equarus Solutions</p>
        <p>© 2025 Equarus Solutions, All Rights Reserved.</p>
      </div>
    </div>

    <!-- Phần bên phải -->
    <div class="right-content p-d-flex p-flex-column p-ai-end">
      <div class="address p-d-flex p-flex-column p-ai-end p-mb-2">
        <p>Hanoi</p>
        <p>Số Số, Lòuie 2, Phó đồ Hộ Luật, Chủ Đạt Mỗ,</p>
        <p>Phường Đại Mỗ, Quận Nam Tự Liêm, Thành phố Hồ Nội, Việt Nam.</p>
      </div>
      <div class="contact p-d-flex p-flex-column p-ai-end p-mb-2">
        <p>info@equarus.com</p>
        <p>+84 962 543 921</p>
      </div>
      <!-- Thay thế Button bằng hình ảnh -->
      <img src="~/images/company.png" alt="Logo" class="logo p-mt-2" />
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background-color: #000000;
  color: #ffffff;
  padding: 2rem;
}

.left-content,
.right-content {
  flex: 1;
}

.left-content {
  text-align: left;
}

.right-content {
  text-align: right;
}

.company-info,
.address,
.contact {
  margin: 1rem 0;
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
}

p {
  margin: 0.5rem 0;
}

.logo {
  width: 100px; /* Điều chỉnh kích thước logo */
  height: auto;
}
</style>

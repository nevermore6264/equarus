<template>
  <footer class="footer">
    <!-- Dòng 1: Navbar -->
    <div class="row navbar">
      <div class="left">
        <span>About</span>
        <span>Careers</span>
      </div>
      <div class="right">
        <span>Hà Nội</span>
      </div>
    </div>

    <!-- Dòng 2: Description và Địa chỉ -->
    <div class="row description">
      <div class="left">
        <h2>Building Global Brands Owned By Vietnamese People</h2>
      </div>
      <div class="right">
        <p>Số 36, Louis 2, Khu đô thị Louis City Đại Mỗ,</p>
        <p>Phường Đại Mỗ, Quận Nam Từ Liêm,</p>
        <p>Thành phố Hà Nội, Việt Nam.</p>
      </div>
    </div>

    <!-- Dòng 3: Button và Thông tin liên hệ -->
    <div class="row contact">
      <div class="left">
        <Button label="JOIN OUR TEAM" class="p-button-outlined btn-join-team" />
      </div>
      <div class="right">
        <p>info@equarus.com</p>
        <p>+84 962 543 921</p>
      </div>
    </div>

    <!-- Dòng 4: Thông tin công ty và Logo -->
    <div class="row company">
      <div class="left">
        <p>Công ty TNHH Equarus Solutions</p>
        <p>© 2025 Equarus Solutions, All Rights Reserved.</p>
      </div>
      <div class="right">
        <img src="~/public/images/company.png" alt="Logo" class="logo" />
      </div>
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
  padding: 50px;
}

.row:first-child {
  margin-bottom: 25px;
}

/* Style chung cho các dòng */
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
}

/* Style cho phần bên trái và bên phải */
.left,
.right {
  flex: 1;
}

.left {
  text-align: left;
}

.right {
  text-align: right;
}

/* Style cho navbar */
.navbar .left span {
  margin-right: 1rem;
}

/* Style cho description */
.description h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}

/* Style cho button */
.contact .left .p-button-outlined {
  margin: 0;
}

/* Style cho logo */
.logo {
  width: 100px; /* Điều chỉnh kích thước logo */
  height: auto;
}

/* Style cho thông tin công ty */
.company .left p {
  margin: 0.25rem 0;
}

.btn-join-team {
  color: #ffffff; /* Màu chữ */
  border: 2px solid #828282; /* Viền */
  border-radius: 25px; /* Bo góc */
  padding: 16px 44px; /* Khoảng cách bên trong */
  font-size: 15px; /* Độ đậm của chữ */
  transition: background-color 0.3s, color 0.3s; /* Hiệu ứng chuyển đổi */
  font-family: "Lexend Zetta", sans-serif;
}
</style>

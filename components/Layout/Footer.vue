<template>
  <footer class="footer">
    <!-- Dòng 1: Navbar -->
    <div class="row navbar">
      <div class="left">
        <span class="navbar-item">About</span>
        <span class="navbar-item">Careers</span>
      </div>
      <div class="right">
        <p class="city">Hanoi</p>
      </div>
    </div>

    <!-- Dòng 2: Description và Địa chỉ -->
    <div class="row description">
      <div class="left">
        <p class="content">Building Global Brands Owned</p>
        <p class="content">By Vietnamese People</p>
      </div>
      <div class="right">
        <p class="address">Số 36, Louis 2,</p>
        <p class="address">Khu đô thị Louis City Đại Mỗ,</p>
        <p class="address">Phường Đại Mỗ, Quận Nam Từ Liêm,</p>
        <p class="address">Thành phố Hà Nội, Việt Nam.</p>
      </div>
    </div>

    <!-- Dòng 3: Button và Thông tin liên hệ -->
    <div class="row contact">
      <div class="left">
        <Button label="JOIN OUR TEAM" class="p-button-outlined btn-join-team" />
      </div>
      <div class="right">
        <p class="email">info@equarus.com</p>
        <p class="phone">+84 962 543 921</p>
      </div>
    </div>

    <!-- Dòng 4: Thông tin công ty và Logo -->
    <div class="row company">
      <div class="left">
        <p class="company-name">Công ty TNHH Equarus Solutions</p>
        <p class="copyright">© 2025 Equarus Solutions, All Rights Reserved.</p>
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
.left {
  flex: 6; /* Chiếm 60% không gian */
}

.right {
  flex: 4; /* Chiếm 40% không gian */
}

.left {
  text-align: left;
}

.right {
  text-align: left;
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
  width: 318px; /* Điều chỉnh kích thước logo */
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
  font-family: "Lexend Zetta", sans-serif;
}

.company-name {
  font-size: 24px;
}

.copyright {
  font-size: 14px;
}

.email,
.phone,
.address {
  font-size: 17px;
}

.city {
  font-size: 35px;
}

.content {
  font-weight: bold;
  font-size: 34px;
}

.navbar-item {
  font-size: 25px;
}

.navbar .left span:last-child {
  margin-left: 30%; /* Đẩy "Careers" về phía bên phải */
}
</style>

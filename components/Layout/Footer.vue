<template>
  <footer class="footer">
    <!-- Dòng 1: Navbar -->
    <div class="row navbar">
      <div class="left">
        <span class="navbar-item" @click="scrollToHeader">About</span>
        <span class="navbar-item" @click="scrollToCareers">Careers</span>
        <NuxtLink to="/work" class="navbar-item">Work</NuxtLink>
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
  methods: {
    scrollToHeader() {
      const header = document.getElementById("header");
      if (header) {
        header.scrollIntoView({ behavior: "smooth" });
      }
    },
    scrollToCareers() {
      const careers = document.getElementById("careers");
      if (careers) {
        careers.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style scoped>
.footer {
  background-color: #000000;
  color: #ffffff;
  padding: 50px;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
}

.left {
  flex: 6;
}

.right {
  flex: 4;
}

.left {
  text-align: left;
}

.right {
  text-align: left;
}

.navbar .left span {
  margin-right: 1rem;
}

.description h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}

.contact .left .p-button-outlined {
  margin: 0;
}

.logo {
  width: 318px;
  height: auto;
}

.company .left p {
  margin: 0.25rem 0;
}

.btn-join-team {
  color: #ffffff;
  border: 2px solid #828282;
  border-radius: 40px;
  padding: 25.5px 97px;
  font-size: 20px;
  font-family: "Lexend Zetta", sans-serif;
}

.company-name {
  font-size: 25.78px;
}

.copyright {
  font-size: 11.72px;
  margin-top: 15px !important;
}

.email,
.phone,
.address {
  font-size: 16.41px;
}

.city {
  font-size: 30.47px;
}

.content {
  font-weight: bold;
  font-size: 37.5px;
}

.navbar-item {
  font-size: 30.47px;
  font-weight: 300;
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
}

.navbar-item:hover {
  text-decoration: underline;
}

.navbar .left span {
  margin-right: 15%;
}

/* Responsive Styles */
@media (max-width: 1366px) {
  .footer {
    padding: 40px;
  }

  .content {
    font-size: 30px;
  }

  .navbar-item {
    font-size: 25px;
  }

  .city {
    font-size: 25px;
  }

  .btn-join-team {
    padding: 20px 80px;
    font-size: 18px;
  }

  .company-name {
    font-size: 22px;
  }

  .copyright {
    font-size: 10px;
  }

  .email,
  .phone,
  .address {
    font-size: 14px;
  }

  .logo {
    width: 250px;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 30px;
    text-align: center;
  }

  .row {
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
  }

  .left,
  .right {
    text-align: center;
    flex: 1;
  }

  .navbar .left span {
    margin-right: 0;
    margin-bottom: 10px;
    display: block;
  }

  .content {
    font-size: 25px;
  }

  .navbar-item {
    font-size: 20px;
  }

  .city {
    font-size: 20px;
  }

  .btn-join-team {
    padding: 15px 60px;
    font-size: 16px;
  }

  .company-name {
    font-size: 18px;
  }

  .copyright {
    font-size: 9px;
  }

  .email,
  .phone,
  .address {
    font-size: 12px;
  }

  .logo {
    width: 200px;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 20px;
  }

  .content {
    font-size: 20px;
  }

  .navbar-item {
    font-size: 16px;
  }

  .city {
    font-size: 16px;
  }

  .btn-join-team {
    padding: 10px 40px;
    font-size: 14px;
  }

  .company-name {
    font-size: 16px;
  }

  .copyright {
    font-size: 8px;
  }

  .email,
  .phone,
  .address {
    font-size: 10px;
  }

  .logo {
    width: 150px;
  }
}
</style>

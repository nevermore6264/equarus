<template>
  <div class="careers" id="careers">
    <p class="title fade-in-up">Careers</p>
    <!-- Thêm thẻ div với gạch chân và icon -->
    <div class="underline-container fade-in-left">
      <div class="underline" style="background-color: #00dbf4"></div>
      <i
        class="pi pi-arrow-down-left"
        style="
          color: black;
          font-size: 40px;
          margin-left: 57px;
          margin-right: 17px;
        "
      ></i>
    </div>
    <p class="subtitle fade-in-up">Chức năng, nhiệm vụ phòng ban</p>
    <div class="departments">
      <div class="department fade-in-left">
        <p class="title">R&D</p>
        <p class="desc">Nghiên cứu và phát triển sản phẩm mới</p>
      </div>
      <div class="department fade-in-up">
        <p class="title">Digital Marketing</p>
        <p class="desc">
          Quản lý và triển khai các chiến dịch marketing trực tuyến
        </p>
      </div>
      <div class="department fade-in-up">
        <p class="title">Product Design</p>
        <p class="desc">Thiết kế và phát triển sản phẩm</p>
      </div>
      <div class="department fade-in-right">
        <p class="title">Brand Marketing</p>
        <p class="desc">Xây dựng và phát triển thương hiệu</p>
      </div>

      <div class="department fade-in-left">
        <p class="title">Supplychain</p>
        <p class="desc">Quản lý chuỗi cung ứng và vận hành kho hàng</p>
      </div>
      <div class="department fade-in-up">
        <p class="title">Legal</p>
        <p class="desc">
          Quản lý các vấn đề pháp lý sản phẩm và tuân thủ quy định của sàn
        </p>
      </div>
      <div class="department fade-in-up">
        <p class="title">HR</p>
        <p class="desc">Quản lý nhân sự và phát triển đội ngũ</p>
      </div>
      <div class="department fade-in-right">
        <p class="title">Finance</p>
        <p class="desc">Quản lý tài chính</p>
      </div>
    </div>

    <div class="join-us scale-in">
      <button class="get-started-button" @click="redirectToLark">
        JOIN OUR TEAM
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Careers",
  setup() {
    return {};
  },
  methods: {
    redirectToLark() {
      window.open(
        "https://applink.larksuite.com/client/message/link/open?token=AmeOKNSIQMAfZ%2FjXAa4BACY%3D",
        "_blank"
      );
    },
  },
};
</script>

<style scoped>
.careers {
  padding: 0 119px 129px 119px;
}

.title {
  font-size: 53.91px;
  font-family: "Inter", sans-serif;
}

.subtitle {
  font-size: 25.78px;
  color: #343434;
  margin-bottom: 220px;
  font-family: "Inter", sans-serif;
  margin-top: 25px;
}

.departments {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 72.6px;
}

.department .title {
  font-size: 46.67px;
  margin-bottom: 45px;
  color: #000000;
  font-family: "Gentium Book Basic", serif;
}

.department .desc {
  font-size: 25px;
  color: #616161;
  font-family: "Gentium Book Basic", serif;
  line-height: 48px;
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

.join-us {
  background-image: url("/images/join_us.png");
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;
  height: 841px;
  border-radius: 13.33px;
  position: relative;
}

.department {
  margin-bottom: 205px;
}

.get-started-button {
  position: absolute;
  bottom: 100px;
  left: 45px;
  padding: 24.5px 70px;
  font-size: 20px;
  font-family: "Lexend Zetta", sans-serif;
  color: #000000;
  background-color: #d9d9d9;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  text-transform: uppercase;
}

/* Responsive styles */
@media (max-width: 1366px) {
  .careers {
    padding: 60px;
  }

  .title {
    font-size: 40px;
  }

  .subtitle {
    font-size: 20px;
    margin-bottom: 80px;
  }

  .pi-arrow-down-left {
    font-size: 32px !important;
    margin-left: 40px !important;
    margin-right: 10px !important;
  }

  .departments {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  .department .title {
    font-size: 28px;
    margin-bottom: 20px;
  }

  .department .desc {
    font-size: 20px;
    line-height: 1.6;
  }

  .join-us {
    margin-top: 150px;
    height: 600px;
  }

  .get-started-button {
    bottom: 80px;
    left: 30px;
    padding: 20px 50px;
    font-size: 18px;
  }

  .department {
    margin-bottom: 10px;
  }
}

@media (max-width: 768px) {
  .careers {
    padding: 40px;
  }

  .department {
    margin-bottom: 10px;
  }

  .title {
    font-size: 32px;
  }

  .subtitle {
    font-size: 18px;
    margin-bottom: 50px;
  }

  .pi-arrow-down-left {
    font-size: 24px !important;
    margin-left: 20px !important;
    margin-right: 5px !important;
  }

  .departments {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .department .title {
    font-size: 24px;
    margin-bottom: 15px;
  }

  .department .desc {
    font-size: 18px;
    line-height: 1.5;
  }

  .join-us {
    margin-top: 100px;
    height: 400px;
  }

  .get-started-button {
    bottom: 60px;
    left: 20px;
    padding: 15px 40px;
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .careers {
    padding: 20px;
  }

  .title {
    font-size: 24px;
  }

  .subtitle {
    font-size: 16px;
    margin-bottom: 30px;
  }

  .pi-arrow-down-left {
    font-size: 20px !important;
    margin-left: 10px !important;
    margin-right: 5px !important;
  }

  .department {
    margin-bottom: 0px;
  }

  .departments {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .department .title {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .department .desc {
    font-size: 16px;
    line-height: 1.4;
  }

  .join-us {
    margin-top: 50px;
    height: 300px;
  }

  .get-started-button {
    bottom: 40px;
    left: 10px;
    padding: 10px 30px;
    font-size: 14px;
  }
}
</style>

<template>
  <div class="mission">
    <div class="mission-content">
      <div class="left-side fade-in-left">
        <h1>WHEREVER VIETNAMESE GOODS GO, THE BORDER OF VIETNAM FOLLOWS</h1>
      </div>
      <div class="right-side fade-in-right">
        <div class="text-content">
          <p class="fade-in-up">
            Equarus Solutions tập trung vào các thị trường thương mại điện tử
            quốc tế lớn, bao gồm Hoa Kỳ (US), Vương quốc Anh (UK), Liên minh
            châu Âu (EU), Úc (AU) và Canada.
          </p>
          <p class="fade-in-up">
            Trong đó Hoa Kỳ (US) chiếm từ trọng chính nhờ quy mô và tiềm năng
            tiêu dùng lớn.
          </p>
        </div>
        <button class="join-button fade-in-up" @click="redirectToLark">
          JOIN OUR TEAM
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mission",
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
.mission {
  padding: 0 123.25px 302px 123.25px;
  text-align: center;
}

.mission-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
}

.left-side {
  flex: 4;
  text-align: left;
}

.left-side h1 {
  font-size: 45.33px;
  color: #000000;
  line-height: 1.8;
  font-weight: 300;
  font-family: "Krona One", sans-serif;
  vertical-align: top;
  letter-spacing: -4.9px;
}

.right-side {
  flex: 6;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 46px;
}

.text-content {
  align-self: flex-start;
}

.right-side p {
  font-size: 29.33px;
  color: #000000;
  line-height: 1.6;
  font-family: "Inter", sans-serif;
  margin: 0;
  letter-spacing: -1.2px;
  padding-left: 20px;
}

.join-button {
  margin-top: 64px;
  margin-left: 23px;
  border: 1px solid #000000;
  padding: 24.5px 70px;
  font-size: 20px;
  font-family: "Lexend Zetta", sans-serif;
  color: #000000;
  background-color: #d9d9d9;
  border-radius: 40px;
  cursor: pointer;
  text-transform: uppercase;
  align-self: flex-start;
}

/* Responsive Styles */
@media (max-width: 1366px) {
  .mission {
    padding: 60px;
  }

  .left-side h1 {
    font-size: 35px;
    letter-spacing: -3px; /* Điều chỉnh letter-spacing */
  }

  .right-side p {
    font-size: 24px;
    letter-spacing: -1px; /* Điều chỉnh letter-spacing */
  }

  .join-button {
    padding: 20px 80px;
    font-size: 14px;
  }
}

@media (max-width: 768px) {
  .mission {
    padding: 40px;
  }

  .mission-content {
    flex-direction: column; /* Xếp các phần tử theo chiều dọc */
    align-items: center; /* Căn giữa các phần tử */
  }

  .left-side {
    padding-right: 0;
    margin-bottom: 40px; /* Khoảng cách giữa left-side và right-side */
    text-align: center; /* Căn giữa nội dung */
  }

  .left-side h1 {
    font-size: 30px;
    letter-spacing: -2px; /* Điều chỉnh letter-spacing */
  }

  .right-side {
    text-align: center; /* Căn giữa nội dung */
    margin-left: 0; /* Xóa margin-left */
  }

  .right-side p {
    font-size: 20px;
    letter-spacing: -0.8px; /* Điều chỉnh letter-spacing */
    padding-left: 0; /* Xóa padding-left */
  }

  .join-button {
    margin-top: 30px;
    padding: 15px 60px;
    font-size: 12px;
    align-self: center; /* Căn giữa nút */
    margin-left: 0; /* Xóa margin-left */
  }
}

@media (max-width: 480px) {
  .mission {
    padding: 20px;
  }

  .left-side h1 {
    font-size: 24px;
    letter-spacing: -1.5px; /* Điều chỉnh letter-spacing */
  }

  .right-side p {
    font-size: 16px;
    letter-spacing: -0.5px; /* Điều chỉnh letter-spacing */
  }

  .join-button {
    padding: 10px 40px;
    font-size: 10px;
  }
}
</style>

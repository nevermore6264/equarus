<template>
  <div class="mission">
    <div class="mission-content">
      <div class="left-side">
        <h1>WHEREVER VIETNAMESE GOODS GO, THE BORDER OF VIETNAM FOLLOWS</h1>
      </div>
      <div class="right-side">
        <div class="text-content">
          <p>
            Equarus Solutions tập trung vào các thị trường thương mại điện tử
            quốc tế lớn, bao gồm Hoa Kỳ (US), Vương quốc Anh (UK), Liên minh
            châu Âu (EU), Úc (AU) và Canada.
          </p>
          <p>
            Trong đó Hoa Kỳ (US) chiếm từ trọng chính nhờ quy mô và tiềm năng
            tiêu dùng lớn.
          </p>
        </div>
        <button class="join-button">JOIN OUR TEAM</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mission",
};
</script>

<style scoped>
.mission {
  padding: 0 119px 129px 119px;
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
  padding-right: 2rem;
}

.left-side h1 {
  font-size: 45.33px;
  color: #000000;
  line-height: 1.6;
  font-weight: 300;
  font-family: "Krona One", sans-serif;
  vertical-align: top;
  letter-spacing: -3.8px;
}

.right-side {
  flex: 6;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
}

.join-button {
  margin-top: 50px;
  padding: 27.5px 100px;
  font-size: 15px;
  font-family: "Lexend Zetta", sans-serif;
  color: #000000;
  background-color: #d9d9d9;
  border: none;
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
  }

  .right-side p {
    font-size: 24px;
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
  }

  .right-side {
    text-align: center; /* Căn giữa nội dung */
  }

  .right-side p {
    font-size: 20px;
  }

  .join-button {
    margin-top: 30px;
    padding: 15px 60px;
    font-size: 12px;
    align-self: center; /* Căn giữa nút */
  }
}

@media (max-width: 480px) {
  .mission {
    padding: 20px;
  }

  .left-side h1 {
    font-size: 24px;
  }

  .right-side p {
    font-size: 16px;
  }

  .join-button {
    padding: 10px 40px;
    font-size: 10px;
  }
}
</style>

<template>
  <div class="mission">
    <div class="mission-content">
      <div class="left-side">
        <h1>WHEREVER VIETNAMESE GOODS GO, THE BORDER OF VIETNAM FOLLOWS</h1>
      </div>
      <div class="right-side">
        <p>
          Equarus Solutions tập trung vào các thị trường thương mại điện tử quốc
          tế lớn, bao gồm Hoa Kỳ (US), Vương quốc Anh (UK), Liên minh châu Âu
          (EU), Úc (AU) và Canada.
        </p>
        <p>
          Trong đó Hoa Kỳ (US) chiếm từ trọng chính nhờ quy mô và tiềm năng tiêu
          dùng lớn.
        </p>
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
  padding: 89.5px;
  text-align: center;
}

.mission-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}

.left-side {
  flex: 1;
  text-align: left;
  padding-right: 2rem;
}

.left-side h1 {
  font-size: 45.33px;
  color: #000000;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-weight: 300;
  font-family: "Krona One", sans-serif;
  vertical-align: top;
}

.right-side {
  flex: 1;
  text-align: left;
}

.right-side p {
  font-size: 29.33px;
  color: #000000;
  line-height: 1.6;
  font-family: "Inter", sans-serif;
}

.join-button {
  margin-top: 30px;
  padding: 27.5px 100px;
  font-size: 15px;
  font-family: "Lexend Zetta", sans-serif;
  color: #000000;
  background-color: #d9d9d9;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  text-transform: uppercase;
}
</style>

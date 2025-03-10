<template>
  <div class="careers">
    <p class="title">Contact</p>
    <div class="underline-container">
      <div class="underline" style="background-color: #00dbf4"></div>
      <i class="pi pi-arrow-down-left" style="color: black"></i>
    </div>
    <p class="subtitle">Lets Work Together</p>

    <div class="join-us">
      <img
        src="~/public/images/join_us.png"
        alt="Join Us"
        class="join-us-image"
      />
      <button class="get-started-button">Get started</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
.careers {
  padding: 89.5px;
}

.title {
  font-size: 48px;
  font-family: "Inter", sans-serif;
}

.subtitle {
  font-size: 24px;
  color: #343434;
  margin-bottom: 100px;
  font-family: "Inter", sans-serif;
}

.underline-container {
  display: flex;
  align-items: center;
}

.underline {
  flex: 1;
  height: 2px;
  background-color: #00dbf4;
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
  left: 100px;
  padding: 16px 44px;
  font-size: 15px;
  font-family: "Lexend Zetta", sans-serif;
  color: #000000;
  background-color: #d9d9d9;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  text-transform: uppercase;
}
</style>

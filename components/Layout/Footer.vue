<template>
  <footer class="footer p-d-flex p-flex-column p-ai-center p-jc-center p-p-4">
    <div class="footer-content p-d-flex p-flex-column p-ai-center p-jc-center">
      <h2 class="p-mb-2">Building Global Brands Owned By Vietnamese People</h2>
      <p class="p-mb-4">JOIN OUR TEAM</p>
      <div class="company-info p-d-flex p-flex-column p-ai-center p-jc-center">
        <p>Công ty TNHH Equarus Solutions</p>
        <p>© 2025 Equarus Solutions, All Rights Reserved.</p>
      </div>
      <div class="address p-d-flex p-flex-column p-ai-center p-jc-center">
        <p>Hanoi</p>
        <p>Số Số, Lòuie 2, Phó đồ Hộ Luật, Chủ Đạt Mỗ,</p>
        <p>Phường Đại Mỗ, Quận Nam Tự Liêm, Thành phố Hồ Nội, Việt Nam.</p>
      </div>
      <div class="contact p-d-flex p-flex-column p-ai-center p-jc-center">
        <p>info@equarus.com</p>
        <p>+84 962 543 921</p>
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
  text-align: center;
  padding: 2rem;
}

.footer-content {
  max-width: 800px;
  margin: 0 auto;
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
</style>

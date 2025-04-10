<template>
  <div class="solutions">
    <div class="stats">
      <div class="stat">
        <h2>Brand</h2>
        <p>
          <i
            class="pi pi-arrow-up"
            style="
              color: #00dbf4;
              font-size: 46px;
              vertical-align: super;
              margin-right: 10px;
            "
          ></i>
          <span>4+</span>
          <span class="note">Brands</span>
        </p>
      </div>
      <div class="stat">
        <h2>Products</h2>
        <p>
          <i
            class="pi pi-arrow-up"
            style="
              color: #00dbf4;
              font-size: 46px;
              vertical-align: super;
              margin-right: 10px;
            "
          ></i>
          <span>1000+</span>
          <span class="note">Products</span>
        </p>
      </div>
      <div class="stat">
        <h2>Channel</h2>
        <p>
          <i
            class="pi pi-arrow-up"
            style="
              color: #00dbf4;
              font-size: 46px;
              vertical-align: super;
              margin-right: 10px;
            "
          ></i>
          <span>3+</span>
          <span class="note">Channel</span>
        </p>
      </div>
      <div class="stat">
        <h2>Order</h2>
        <p>
          <i
            class="pi pi-arrow-up"
            style="
              color: #00dbf4;
              font-size: 46px;
              vertical-align: super;
              margin-right: 10px;
            "
          ></i>
          <span>2M+</span>
          <span class="note">Orders</span>
        </p>
      </div>
    </div>
    <div class="description">
      <p>
        Equarus Solutions hoạt động trong lĩnh vực thương mại điện tử quốc tế,
        sở hữu, phát triển và quản lý một hệ thống các thương hiệu độc lập.
      </p>
      <p class="brand">
        Mỗi thương hiệu được định hướng phục vụ các danh mục sản phẩm đa dạng -
        <em
          >đáp ứng nhu cầu của nhiều phân khúc khách hàng và thị trường khác
          nhau.</em
        >
      </p>
    </div>
    <img src="~/public/images/map.png" alt="Join Us" class="map" />
  </div>
</template>

<script>
export default {
  name: "Solutions",
};
</script>

<style scoped>
.solutions {
  padding: 91px 101.5px 0 101.5px;
  text-align: center;
}

.stats {
  display: flex;
  gap: 87px;
  margin-bottom: 222px;
}

.stat {
  text-align: center;
  border-top: 1.33px solid #000000;
  min-width: 360px;
}

.stat h2 {
  font-size: 36px;
  color: #000000;
  font-family: "Poppins", sans-serif;
  text-align: left;
  font-weight: 400;
}

.stat p {
  text-align: left;
}

.stat span {
  font-size: 66.67px;
  color: #000000;
  font-weight: 500;
}

.stat span.note {
  font-size: 17.33px;
  color: #000000;
  display: inline-block;
  vertical-align: top;
  margin-top: 18px;
  margin-left: 11px;
}

.description {
  margin: 0 auto;
  text-align: left;
  padding: 0px 119px 197px 119px;
}

.description p {
  font-size: 68px;
  color: #1e1e1e;
  font-weight: 300;
  line-height: 1.65;
  font-family: "Gentium Book Basic", serif;
  letter-spacing: -2.8px;
}

.description .brand {
  letter-spacing: -3.8px;
}

.description em {
  font-style: italic;
  color: #1e1e1e;
}

.map {
  margin-bottom: 283px;
  width: 100%;
  height: auto; /* Thay đổi height thành auto */
  max-height: 880px; /* Giới hạn chiều cao tối đa */
  max-width: 1672px;
}

/* Responsive Styles */
@media (min-width: 1367px) and (max-width: 1920px) {
  .solutions {
    padding: 80px 120px 0 120px;
  }

  .stats {
    gap: 80px;
    margin-bottom: 180px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .stat {
    max-width: 50%;
    flex: 1 1 45%;
  }

  .stat h2 {
    font-size: 32px;
  }

  .stat span {
    font-size: 58px;
  }

  .stat span.note {
    font-size: 16px;
  }

  .description {
    padding: 0px 100px 150px 100px;
  }

  .description p {
    font-size: 60px;
    letter-spacing: -2.5px;
  }

  .description .brand {
    letter-spacing: -3.2px;
  }

  .map {
    margin-bottom: 200px;
    max-height: 800px;
  }
}

@media (max-width: 1366px) {
  .solutions {
    padding: 60px;
  }

  .stats {
    margin-bottom: 100px;
    flex-direction: column;
    gap: 10px;
  }

  .stat {
    min-width: 250px;
  }

  .stat h2 {
    font-size: 30px;
  }

  .stat span {
    font-size: 50px;
  }

  .stat span.note {
    font-size: 14px;
  }

  .description {
    padding: 60px;
  }

  .description p {
    font-size: 50px;
    letter-spacing: -2px; /* Điều chỉnh letter-spacing */
  }

  .description .brand {
    letter-spacing: -2.5px; /* Điều chỉnh letter-spacing */
  }

  .map {
    margin-top: 80px;
    margin-bottom: 100px;
    max-height: 600px; /* Giảm chiều cao tối đa */
  }
}

@media (max-width: 768px) {
  .solutions {
    padding: 40px;
  }

  .stats {
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 80px;
  }

  .stat {
    min-width: 200px;
    flex: 1 1 45%;
  }

  .stat h2 {
    font-size: 24px;
  }

  .stat span {
    font-size: 40px;
  }

  .stat span.note {
    font-size: 12px;
  }

  .description {
    padding: 40px;
  }

  .description p {
    font-size: 36px;
    letter-spacing: -1.5px; /* Điều chỉnh letter-spacing */
  }

  .description .brand {
    letter-spacing: -2px; /* Điều chỉnh letter-spacing */
  }

  .map {
    margin-top: 60px;
    margin-bottom: 80px;
    max-height: 400px; /* Giảm chiều cao tối đa */
  }
}

@media (max-width: 480px) {
  .solutions {
    padding: 20px;
  }

  .stats {
    flex-direction: column;
    gap: 10px;
    margin-bottom: 60px;
  }

  .stat {
    min-width: 100%;
    flex: 1 1 100%;
  }

  .stat h2 {
    font-size: 20px;
  }

  .stat span {
    font-size: 30px;
  }

  .stat span.note {
    font-size: 10px;
  }

  .description {
    padding: 20px;
  }

  .description p {
    font-size: 24px;
    letter-spacing: -1px; /* Điều chỉnh letter-spacing */
  }

  .description .brand {
    letter-spacing: -1.5px; /* Điều chỉnh letter-spacing */
  }

  .map {
    margin-top: 40px;
    margin-bottom: 60px;
    max-height: 300px; /* Giảm chiều cao tối đa */
  }
}
</style>

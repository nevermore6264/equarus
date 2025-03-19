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
              font-size: 37px;
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
              font-size: 37px;
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
              font-size: 37px;
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
              font-size: 37px;
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
      <p>
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
  padding: 129px 119px;
  text-align: center;
}

.stats {
  display: flex;
  justify-content: space-around;
  margin-bottom: 150px;
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
}

.stat p {
  text-align: left;
}

.stat span {
  font-size: 66.67px;
  color: #000000;
}

.stat span.note {
  font-size: 17.33px;
  color: #000000;
  vertical-align: top;
}

.description {
  margin: 0 auto;
  text-align: left;
  padding: 129px 119px;
}

.description p {
  font-size: 68px;
  color: #1e1e1e;
  font-weight: 300;
  line-height: 1.6;
  font-family: "Gentium Book Basic", serif;
}

.description em {
  font-style: italic;
  color: #1e1e1e;
}

.map {
  margin-top: 100px;
  margin-bottom: 150px;
  width: 100%;
  height: auto;
}

/* Responsive Styles */
@media (max-width: 1366px) {
  .solutions {
    padding: 60px;
  }

  .stats {
    margin-bottom: 100px;
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
  }

  .map {
    margin-top: 80px;
    margin-bottom: 100px;
  }
}

@media (max-width: 768px) {
  .solutions {
    padding: 40px;
  }

  .stats {
    flex-wrap: wrap; /* Cho phép các stat xuống dòng */
    gap: 20px; /* Khoảng cách giữa các stat */
    margin-bottom: 80px;
  }

  .stat {
    min-width: 200px;
    flex: 1 1 45%; /* Mỗi stat chiếm 45% chiều rộng */
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
  }

  .map {
    margin-top: 60px;
    margin-bottom: 80px;
  }
}

@media (max-width: 480px) {
  .solutions {
    padding: 20px;
  }

  .stats {
    flex-direction: column; /* Xếp các stat theo chiều dọc */
    gap: 10px;
    margin-bottom: 60px;
  }

  .stat {
    min-width: 100%;
    flex: 1 1 100%; /* Mỗi stat chiếm toàn bộ chiều rộng */
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
  }

  .map {
    margin-top: 40px;
    margin-bottom: 60px;
  }
}
</style>

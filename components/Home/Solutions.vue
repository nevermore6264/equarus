<template>
  <div class="solutions">
    <div class="stats">
      <div class="stat">
        <h2>Brand</h2>
        <p>↑ 4 +</p>
      </div>
      <div class="stat">
        <h2>Products</h2>
        <p>↑ 1000 +</p>
      </div>
      <div class="stat">
        <h2>Channel</h2>
        <p>↑ 3 +</p>
      </div>
      <div class="stat">
        <h2>Order</h2>
        <p>↑ 2M +</p>
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
  </div>
</template>

<script>
export default {
  name: "Solutions",
};
</script>

<style scoped>
.solutions {
  padding: 139.5px;
  text-align: center;
}

.stats {
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
}

.stat {
  text-align: center;
}

.stat h2 {
  font-size: 36px;
  color: #000000;
  font-family: "Poppins", sans-serif;
}

.stat p {
  font-size: 1.5rem;
  color: #4a5568;
}

.description {
  margin: 0 auto;
  text-align: left;
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
</style>

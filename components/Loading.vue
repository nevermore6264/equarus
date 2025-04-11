<template>
  <div class="loading" v-if="isLoading">
    <div class="loading-content">
      <div class="logo">
        <img src="~/public/images/company.png" alt="Equarus Logo" />
      </div>
      <div class="loading-bar">
        <div class="progress"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  data() {
    return {
      isLoading: true,
      progress: 0,
    };
  },
  mounted() {
    // Simulate loading progress
    const interval = setInterval(() => {
      this.progress += 5;
      if (this.progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          this.isLoading = false;
        }, 500);
      }
    }, 100);

    // Ensure loading screen shows for at least 1.5 seconds
    setTimeout(() => {
      if (this.isLoading) {
        this.isLoading = false;
      }
    }, 1500);
  },
};
</script>

<style scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0d0d0d;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.logo {
  width: 200px;
  height: 200px;
  animation: pulse 2s infinite;
}

.logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.loading-bar {
  width: 300px;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
}

.progress {
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, #00dbf4, #ffffff);
  transition: width 0.3s ease;
  animation: progress 1.5s ease-in-out;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes progress {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

/* Responsive styles */
@media (max-width: 768px) {
  .logo {
    width: 150px;
    height: 150px;
  }

  .loading-bar {
    width: 200px;
  }
}

@media (max-width: 480px) {
  .logo {
    width: 100px;
    height: 100px;
  }

  .loading-bar {
    width: 150px;
  }
}
</style>

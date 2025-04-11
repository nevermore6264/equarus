<template>
  <div class="cursor"></div>
</template>

<script>
export default {
  name: "CustomCursor",
  mounted() {
    // Track cursor movement
    document.addEventListener("mousemove", (e) => {
      const cursor = document.querySelector(".cursor");
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });

    // Add hover effect
    document.querySelectorAll("a, button, .cell").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        const cursor = document.querySelector(".cursor");
        cursor.classList.add("hover");
      });
      el.addEventListener("mouseleave", () => {
        const cursor = document.querySelector(".cursor");
        cursor.classList.remove("hover");
      });
    });

    // Add scroll effect
    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
      const cursor = document.querySelector(".cursor");
      cursor.classList.add("scroll");
      clearTimeout(this.scrollTimeout);
      this.scrollTimeout = setTimeout(() => {
        cursor.classList.remove("scroll");
      }, 200);
    });
  },
  beforeDestroy() {
    // Clean up
    const cursor = document.querySelector(".cursor");
    if (cursor) {
      cursor.remove();
    }
  },
};
</script>

<style scoped>
/* Custom cursor styles */
.cursor {
  width: 20px;
  height: 20px;
  border: 2px solid #00dbf4;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  transition: transform 0.2s ease;
  z-index: 9999;
}

.cursor::after {
  content: "";
  width: 4px;
  height: 4px;
  background: #00dbf4;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.2s ease;
}

.cursor.hover {
  transform: scale(1.5);
  border-color: #ffffff;
}

.cursor.hover::after {
  transform: translate(-50%, -50%) scale(0.5);
  background: #ffffff;
}

.cursor.scroll {
  transform: scale(0.8);
  border-color: #00dbf4;
  opacity: 0.8;
}

.cursor.scroll::after {
  transform: translate(-50%, -50%) scale(0.8);
}

/* Hide default cursor */
* {
  cursor: none;
}
</style>

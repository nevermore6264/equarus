<template>
  <div>
    <Nuxt />
    <HeaderWork />
    <Galleria />
    <Footer />
  </div>
</template>

<script>
import HeaderWork from "~/components/Layout/HeaderWork.vue";
import Galleria from "~/components/Home/Galleria.vue";
import Footer from "~/components/Layout/Footer.vue";

export default {
  components: {
    HeaderWork,
    Galleria,
    Footer,
  },
};
</script>

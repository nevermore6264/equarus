<template>
  <div>
    <Nuxt />
    <HeaderWork />
    <Galleria />
    <Image />
    <Footer />
  </div>
</template>

<script>
import HeaderWork from "~/components/Layout/HeaderWork.vue";
import Galleria from "~/components/Home/Galleria.vue";
import Image from "~/components/Home/Image.vue";
import Footer from "~/components/Layout/Footer.vue";

export default {
  components: {
    HeaderWork,
    Galleria,
    Image,
    Footer,
  },
};
</script>

<template>
  <div>
    <Nuxt />
    <HeaderWork />
    <Title />
    <Galleria />
    <Image />
    <Footer />
  </div>
</template>

<script>
import HeaderWork from "~/components/Layout/HeaderWork.vue";
import Galleria from "~/components/Home/Galleria.vue";
import Title from "~/components/Home/Title.vue";
import Image from "~/components/Home/Image.vue";
import Footer from "~/components/Layout/Footer.vue";

export default {
  components: {
    HeaderWork,
    Galleria,
    Title,
    Image,
    Footer,
  },
};
</script>

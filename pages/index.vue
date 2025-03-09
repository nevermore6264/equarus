<template>
  <div>
    <Nuxt />
    <Careers />
    <Footer />
  </div>
</template>

<script>
import Footer from "~/components/Layout/Footer.vue";
import Careers from "~/components/Home/Careers.vue";

export default {
  components: {
    Footer,
    Careers,
  },
};
</script>

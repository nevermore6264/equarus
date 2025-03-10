<template>
  <div>
    <Nuxt />
    <Content />
    <Careers />
    <Footer />
  </div>
</template>

<script>
import Content from "~/components/Home/Content.vue";
import Careers from "~/components/Home/Careers.vue";
import Footer from "~/components/Layout/Footer.vue";

export default {
  components: {
    Footer,
    Careers,
  },
};
</script>

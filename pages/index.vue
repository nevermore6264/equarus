<template>
  <div>
    <Nuxt />
    <Contact />
    <Careers />
    <Footer />
  </div>
</template>

<script>
import Contact from "~/components/Home/Contact.vue";
import Careers from "~/components/Home/Careers.vue";
import Footer from "~/components/Layout/Footer.vue";

export default {
  components: {
    Footer,
    Careers,
  },
};
</script>

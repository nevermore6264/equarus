<template>
  <div>
    <Nuxt />
    <Partner />
    <Contact />
    <Careers />
    <Footer />
  </div>
</template>

<script>
import Partner from "~/components/Home/Partner.vue";
import Contact from "~/components/Home/Contact.vue";
import Careers from "~/components/Home/Careers.vue";
import Footer from "~/components/Layout/Footer.vue";

export default {
  components: {
    Partner,
    Contact,
    Careers,
    Footer,
  },
};
</script>

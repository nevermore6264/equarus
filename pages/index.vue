<template>
  <div>
    <Nuxt />
    <Target />
    <Partner />
    <Contact />
    <Careers />
    <Footer />
  </div>
</template>

<script>
import Target from "~/components/Home/Target.vue";
import Partner from "~/components/Home/Partner.vue";
import Contact from "~/components/Home/Contact.vue";
import Careers from "~/components/Home/Careers.vue";
import Footer from "~/components/Layout/Footer.vue";

export default {
  components: {
    Target,
    Partner,
    Contact,
    Careers,
    Footer,
  },
};
</script>

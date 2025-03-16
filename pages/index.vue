<template>
  <div>
    <Nuxt />
    <Header />
    <Solutions />
    <Mission />
    <Galleria />
    <History />
    <Target />
    <Partner />
    <Contact />
    <Careers />
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Layout/Header.vue";
import Solutions from "~/components/Home/Solutions.vue";
import Mission from "~/components/Home/Mission.vue";
import Galleria from "~/components/Home/Galleria.vue";
import History from "~/components/Home/History.vue";
import Target from "~/components/Home/Target.vue";
import Partner from "~/components/Home/Partner.vue";
import Contact from "~/components/Home/Contact.vue";
import Careers from "~/components/Home/Careers.vue";
import Footer from "~/components/Layout/Footer.vue";

export default {
  components: {
    Header,
    Solutions,
    Mission,
    Galleria,
    History,
    Target,
    Partner,
    Contact,
    Careers,
    Footer,
  },
};
</script>

<template>
  <div>
    <Loading />
    <CustomCursor />
    <ScrollAnimation />
    <Nuxt />
    <Header />
    <Solutions />
    <Mission />
    <Gallerias />
    <Culture />
    <History />
    <Target />
    <Partner />
    <Contact />
    <Careers />
    <Footer />
  </div>
</template>

<script>
import Loading from "~/components/Loading.vue";
import CustomCursor from "~/components/CustomCursor.vue";
import ScrollAnimation from "~/components/ScrollAnimation.vue";
import Header from "~/components/Layout/Header.vue";
import Solutions from "~/components/Home/Solutions.vue";
import Mission from "~/components/Home/Mission.vue";
import Gallerias from "~/components/Home/Gallerias.vue";
import Culture from "~/components/Home/Culture.vue";
import History from "~/components/Home/History.vue";
import Target from "~/components/Home/Target.vue";
import Partner from "~/components/Home/Partner.vue";
import Contact from "~/components/Home/Contact.vue";
import Careers from "~/components/Home/Careers.vue";
import Footer from "~/components/Layout/Footer.vue";

export default {
  components: {
    Loading,
    CustomCursor,
    ScrollAnimation,
    Header,
    Solutions,
    Mission,
    Gallerias,
    Culture,
    History,
    Target,
    Partner,
    Contact,
    Careers,
    Footer,
  },
};
</script>

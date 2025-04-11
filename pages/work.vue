<template>
  <div>
    <Loading />
    <CustomCursor />
    <Nuxt />
    <HeaderWork />
    <Title />
    <Galleria />
    <Image />
    <Footer />
  </div>
</template>

<script>
import Loading from "~/components/Loading.vue";
import CustomCursor from "~/components/CustomCursor.vue";
import HeaderWork from "~/components/Layout/HeaderWork.vue";
import Galleria from "~/components/Home/Galleria.vue";
import Title from "~/components/Home/Title.vue";
import Image from "~/components/Home/Image.vue";
import Footer from "~/components/Layout/Footer.vue";

export default {
  head() {
    return {
      title:
        "Equarus Solutions - Building Global Brands Owned By Vietnamese People.",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Equarus Solutions is a global brand owned by Vietnamese people.",
        },
      ],
    };
  },
  components: {
    Loading,
    CustomCursor,
    HeaderWork,
    Galleria,
    Title,
    Image,
    Footer,
  },
};
</script>

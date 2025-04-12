<template>
  <div></div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  name: "ScrollAnimation",
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    // Smooth scroll animation
    gsap.to(window, {
      scrollTo: {
        y: 0,
        autoKill: false,
      },
      duration: 1,
    });

    // Fade in elements with different directions
    gsap.utils.toArray(".fade-in-up").forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
      });
    });

    gsap.utils.toArray(".fade-in-down").forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power2.out",
      });
    });

    gsap.utils.toArray(".fade-in-left").forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power2.out",
      });
    });

    gsap.utils.toArray(".fade-in-right").forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: 50,
        duration: 1,
        ease: "power2.out",
      });
    });

    // Scale elements with different effects
    gsap.utils.toArray(".scale-in").forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    });

    gsap.utils.toArray(".scale-in-bounce").forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: "bounce.out",
      });
    });

    // Stagger effects for lists
    gsap.utils.toArray(".stagger-fade-in").forEach((element) => {
      const items = element.querySelectorAll("li, div, p");
      gsap.from(items, {
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.2,
        ease: "power2.out",
      });
    });

    // Parallax effect with different speeds
    gsap.utils.toArray(".parallax-slow").forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: 100,
        ease: "none",
      });
    });

    gsap.utils.toArray(".parallax-fast").forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: 200,
        ease: "none",
      });
    });
  },
};
</script>

<style scoped>
/* No styles needed as we removed the scroll indicator */
</style>

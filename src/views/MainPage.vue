<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

import TheHeader from "../components/TheHeader.vue";
import HeroSection from "../components/HeroSection.vue";
import AboutSection from "../components/AboutSection.vue";
import ProductSection from "../components/ProductSection.vue";
import PartnerSection from "../components/PartnerSection.vue";
import TheFooter from "../components/TheFooter.vue";
import ToTopButton from "../components/Icons/ToTopButton.vue";

const lastScrollTop = ref(0);
const rotateUp = ref(true);
const heroRef = ref(null);
const heroIsVisible = ref(false);

const { stop } = useIntersectionObserver(heroRef, ([{ isIntersecting }]) => {
  heroIsVisible.value = isIntersecting;
});

const handleScroll = () => {
  const currentScrollTop = window.scrollY;
  rotateUp.value = currentScrollTop < lastScrollTop.value;
  lastScrollTop.value = currentScrollTop;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div>
    <TheHeader :class="{ 'bg-gradient-to-r from-sky-500 to-indigo-500': !heroIsVisible }" />
    <HeroSection ref="heroRef" />
    <AboutSection />
    <ProductSection />
    <PartnerSection />
    <TheFooter />
    <ToTopButton
      @click="scrollToTop"
      class="cursor-pointer fixed top-[738px] right-[80px] z-30 transition ease delay-75"
      :class="{ 'rotate-180': rotateUp, 'rotate-0': !rotateUp }"
    />
  </div>
</template>

<style scoped></style>

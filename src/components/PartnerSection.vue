<template>
  <div class="mt-12 py-10 bg-[#F6F6F6] xl:mt-[128px] xl:py-[120px]">
    <h1 class="text-[40px] font-black text-center font-fairy mb-8 xl:mb-[80px]">{{ $t("ourPartners") }}</h1>
    <carousel
      ref="mySlides"
      :items-to-show="logosToShow"
      class="relative xl:w-[1120px] mx-auto"
    >
      <slide v-for="logo in logos" :key="logo">
        <img :src="logo" alt="" />
      </slide>
      <template #addons>
        <div
          class="flex w-full items-center justify-between absolute top-1/2 translate-y-[-50%] xl:w-[1162px]"
        >
          <VectorLeft
            class="cursor-pointer"
            @click="handleNavigation('previous')"
          />
          <VectorRight
            class="cursor-pointer"
            @click="handleNavigation('next')"
          />
        </div>
      </template>
    </carousel>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import EA from "../assets/images/EA.png";
import Games from "../assets/images/Games.png";
import PowerUp from "../assets/images/PowerUp.png";
import WD from "../assets/images/WD.png";
import BP from "../assets/images/BP.png";
import Sega from "../assets/images/Sega.png";
import TwoK from "../assets/images/2K.png";
import VectorRight from "./Icons/VectorRight.vue";
import VectorLeft from "./Icons/VectorLeft.vue";

const logos = [EA, Games, PowerUp, WD, BP, Sega, TwoK];
const mySlides = ref(null);
const logosToShow = ref(5);

const handleNavigation = (direction) => {
  if (!mySlides.value) return;
  if (direction === "previous") {
    mySlides.value.prev();
  } else {
    mySlides.value.next();
  }
};

onMounted(() => {
  if (window.innerWidth <= 400) {
    logosToShow.value = 1.8;
  }
});
</script>

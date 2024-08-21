<template>
  <div
    class="w-full h-[608px] 2xl:h-[988px] bg-hero-pattern bg-cover bg-bottom"
  >
    <div
      class="mx-auto px-4 pt-[112px] 2xl:pt-[244px] w-full md:w-[39%] flex flex-col items-center"
    >
      <h1
        class="font-black text-white text-[40px] 2xl:w-[850px] 2xl:text-[80px] leading-[50px] xl:leading-[120px] text-center whitespace-break-spaces sm:whitespace-normal font-fairy"
      >
        {{ $t("gettingReady") }}
      </h1>
      <div
        class="bg-white h-[118px] 2xl:h-[150px] my-[38px] 2xl:mb-[96px] w-full flex items-center justify-center rounded-[21px] shadow-[0_4px_10px_0_#00000040]"
      >
        <div v-for="(time, index) in timers" :key="index" class="flex">
          <div class="flex flex-col">
            <span
              class="text-[36px] 2xl:text-[60px] font-black leading-[45px] 2xl:leading-[64px] font-fairy"
            >
              {{ time.value }}
            </span>
            <span class="text-[12px] 2xl:text-[16px] mt-3 font-bold">{{time.unit}}</span>
          </div>
          <span
            class="text-[40px] 2xl:text-[65px] leading-[48px] mx-4 2xl:mx-[44px]"
            :class="{ hidden: index === timers.length - 1 }"
          >
            :
          </span>
        </div>
      </div>
      <p
        class="text-[12px] xl:text-[18px] text-white text-center mb-4 2xl:mb-8 2xl:w-[560px]"
      >
        {{ $t("stayTune") }}
      </p>
      <div class="w-full 2xl:w-[560px] relative">
        <input
          class="rounded-lg py-[17px] px-[14px] w-full"
          type="text"
          :placeholder="$t('enterEmail')"
        />
        <Arrow class="absolute top-[17px] right-[14px]" />
      </div>
      <img
        class="m-auto w-[350px] xl:w-[638px] 2xl:w-[850px] h-[350px] xl:h-[638px] 2xl:h-[850px] relative xl:absolute xl:left-0 xl:top-[370px] bottom-[54px] left-[28%] translate-x-[-24%] xl:translate-x-0"
        src="../assets/images/fairy.png"
        alt="Fairy"
      />
    </div>
  </div>
</template>

<script setup>
import Arrow from "../components/Icons/Arrow.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const timers = [
  {
    value: 30,
    unit: t("days"),
  },
  {
    value: 18,
    unit: t("hours"),
  },
  {
    value: 20,
    unit: t("minutes"),
  },
  {
    value: 11,
    unit: t("seconds"),
  },
];
</script>

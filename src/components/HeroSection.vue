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
        <div v-for="(time, index) in countdown" :key="index" class="flex">
          <div class="flex flex-col">
            <span
              class="text-[36px] 2xl:text-[60px] font-black leading-[45px] 2xl:leading-[64px] font-fairy"
            >
              {{ time.value }}
            </span>
            <span class="text-[12px] 2xl:text-[16px] mt-3 font-bold">{{
              time.unit
            }}</span>
          </div>
          <span
            class="text-[40px] 2xl:text-[65px] leading-[48px] mx-4 2xl:mx-[44px]"
            :class="{ hidden: index === countdown.length - 1 }"
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
import { ref, onMounted, onUnmounted, computed } from "vue";

const { t } = useI18n();
const endDate = ref(new Date("2024-12-31T23:59:59"));
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
let timer = null;

const updateCountdown = () => {
  const now = new Date();
  const timeDiff = endDate.value - now;

  if (timeDiff <= 0) {
    clearInterval(timer);
    days.value = 0;
    hours.value = 0;
    minutes.value = 0;
    seconds.value = 0;
    return;
  }

  days.value = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  hours.value = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  minutes.value = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((timeDiff % (1000 * 60)) / 1000);
};

onMounted(() => {
  updateCountdown();
  timer = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});

const countdown = computed(() => {
  return [
    {
      value: days.value,
      unit: t("days"),
    },
    {
      value: hours.value,
      unit: t("hours"),
    },
    {
      value: minutes.value,
      unit: t("minutes"),
    },
    {
      value: seconds.value,
      unit: t("seconds"),
    },
  ];
});
</script>

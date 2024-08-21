<template>
  <div>
    <div
      class="mt-[230px] xl:mt-[180px] xl:flex xl:mx-auto xl:max-w-[1160px] xl:gap-x-[36px]"
    >
      <div class="px-4 xl:w-1/2">
        <h1 class="text-[40px] font-black font-fairy">{{ $t("about") }}</h1>
        <p class="text-[#757575] text-justify mt-4">{{ $t("aboutUs") }}</p>
        <div class="flex xl:flex-col xl:gap-y-5 gap-x-[55px] my-10">
          <p class="font-bold text-[#079BEE] relative flex flex-col">
            <span>
              <span class="text-[44px] xl:text-[80px]">600</span>
              <span>
                <span class="text-[20px] xl:text-[40px]">M</span>
                <span class="text-[36px] xl:text-[70px]">+</span>
              </span>
            </span>
            <span class="text-[24px] text-black">Users</span>
          </p>
          <p class="font-bold text-[#079BEE] relative flex flex-col">
            <span>
              <span class="text-[44px] xl:text-[80px]">135</span>
              <span class="text-[36px] xl:text-[70px]">+</span>
            </span>
            <span class="text-[24px] text-black">Games</span>
          </p>
        </div>
      </div>
      <div class="bg-[#EEEEEE] py-10 px-4 xl:w-1/2">
        <div v-for="(info, index) in infos" :key="index">
          <div class="flex items-center text-[24px] font-bold gap-x-4">
            <div
              class="w-10 h-10 rounded-full bg-[#E3FCFF] flex items-center justify-center"
            >
              <component :is="info.icon" />
            </div>
            <h2>{{ info.title }}</h2>
          </div>
          <p
            class="mt-3 mb-12 text-[14px] text-[#757575] font-normal pl-[48px]"
          >
            {{ info.desc }}
          </p>
        </div>
      </div>
    </div>
    <div class="mt-10 xl:mt-[68px] xl:flex xl:flex-col justify-center items-center">
      <img
        class="animate-float w-[300px] h-[243px] xl:w-[533px] xl:h-[437px] mx-auto"
        src="../assets/images/Illustrator.png"
        alt=""
      />
      <img class="xl:max-w-[1160px]" src="../assets/images/Pin-map.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const infos = [
  {
    icon: "Calendar",
    title: `24 - ${t("access")}`,
    desc: t("accessDesc"),
  },
  {
    icon: "PenTool",
    title: `Design - ${t("design")}`,
    desc: t("designDesc"),
  },
  {
    icon: "People",
    title: `Team - ${t("team")}`,
    desc: t("teamDesc"),
  },
];
</script>

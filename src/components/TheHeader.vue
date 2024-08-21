<template>
  <div
    class="fixed z-10 w-full h-[112px] sm:h-[162px] bg-transparent flex justify-between items-center sm:items-start p-4 sm:px-[78px] sm:py-[20px]"
  >
    <Logo />
    <div class="hidden sm:flex">
      <nav class="flex gap-x-[82px] font-bold text-white uppercase">
        <a href="#!">{{ $t("about") }}</a>
        <a href="#!">{{ $t("games") }}</a>
        <a href="#!">{{ $t("partners") }}</a>
        <a href="#!">{{ $t("contact") }}</a>
      </nav>
      <div class="relative group h-[40px] ml-[82px]">
        <div class="flex h-full">
          <img
            v-if="selectedLang === 'en'"
            class="w-[34px] h-[34px]"
            src="../assets/images/US.png"
            alt="US"
          />
          <img
            v-else-if="selectedLang === 'vi'"
            class="w-[34px] h-[34px]"
            src="../assets/images/VN.png"
            alt="VN"
          />
          <Chevron />
        </div>
        <ul
          class="font-bold text-[10px] hidden group-hover:flex flex-col absolute top-full right-0 w-[156px] h-[81px] border border-[#EEEEEE] rounded-lg bg-white p-2"
        >
          <li
            @click="setLang('vi')"
            class="cursor-pointer flex items-center gap-x-2 border-b border-b-[#C4C4C4]"
          >
            <Check :class="{ 'opacity-0': selectedLang === 'en' }" />
            <img
              class="w-[34px] h-[34px]"
              src="../assets/images/VN.png"
              alt="VN"
            />
            <p>{{ $t("vietnamese") }}</p>
          </li>
          <li
            @click="setLang('en')"
            class="cursor-pointer flex items-center gap-x-2"
          >
            <Check :class="{ 'opacity-0': selectedLang === 'vi' }" />
            <img
              class="w-[34px] h-[34px]"
              src="../assets/images/US.png"
              alt="US"
            />
            <p>{{ $t("english") }}</p>
          </li>
        </ul>
      </div>
    </div>

    <!-- Mobile -->
    <Menu
      @click="isShowMobileNav = true"
      class="cursor-pointer block sm:hidden"
    />
    <div
      class="translate-x-[-100%] transition ease delay-75 flex flex-col bg-white p-4 fixed top-0 left-0 right-0 bottom-0"
      :class="{ ['!translate-x-0']: isShowMobileNav }"
    >
      <div class="flex justify-between w-full">
        <div
          class="group cursor-pointer relative flex justify-center items-center h-10 w-20 bg-[#F6F6F6] border border-[#AFAFAF] rounded-lg py-2 px-3"
        >
          <img
            v-if="selectedLang === 'en'"
            class="w-[26px] h-[26px]"
            src="../assets/images/US.png"
            alt="US"
          />
          <img
            v-else-if="selectedLang === 'vi'"
            class="w-[26px] h-[26px]"
            src="../assets/images/VN.png"
            alt="US"
          />
          <Chevron fillColor="black" />
          <ul
            class="font-bold text-[10px] hidden group-hover:flex flex-col absolute top-full left-0 w-full h-[81px] border border-[#EEEEEE] rounded-lg bg-white p-2"
          >
            <li
              class="flex justify-center items-center gap-x-2 border-b border-b-[#C4C4C4]"
              @click="setLang('vi')"
            >
              <img
                class="w-[34px] h-[34px]"
                src="../assets/images/VN.png"
                alt="VN"
              />
            </li>
            <li
              @click="setLang('en')"
              class="flex justify-center items-center gap-x-2"
            >
              <img
                class="w-[34px] h-[34px]"
                src="../assets/images/US.png"
                alt="US"
              />
            </li>
          </ul>
        </div>
        <Close
          @click="isShowMobileNav = false"
          :width="30"
          :height="30"
          class="cursor-pointer"
        />
      </div>
      <nav class="mt-4 flex flex-col font-bold uppercase">
        <a class="text-center py-6 border-b border-b-[#EEEEEE]" href="#!">{{
          $t("about")
        }}</a>
        <a class="text-center py-6 border-b border-b-[#EEEEEE]" href="#!">{{
          $t("games")
        }}</a>
        <a class="text-center py-6 border-b border-b-[#EEEEEE]" href="#!">{{
          $t("partners")
        }}</a>
        <a class="text-center py-6 border-b" href="#!">{{ $t("contact") }}</a>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import Logo from "./Icons/Logo.vue";
import Chevron from "./Icons/Chevron.vue";
import Check from "./Icons/Check.vue";
import Menu from "./Icons/Menu.vue";
import Close from "./Icons/Close.vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const isShowMobileNav = ref(false);
const selectedLang = ref("en");
const headerRef = ref(null);

const setLang = (lang) => {
  selectedLang.value = lang;
  locale.value = lang;
};
</script>

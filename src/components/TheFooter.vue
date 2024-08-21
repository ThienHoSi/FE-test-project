<template>
  <div>
    <div
      class="bg-footer-pattern bg-no-repeat bg-cover bg-center pt-10 2xl:py-[100px] 2xl:px-[230px] px-4 flex flex-col 2xl:flex-row text-white"
    >
      <div class="flex flex-col items-center 2xl:mr-[436px]">
        <Logo class="w-[163px] h-auto" />
        <div class="flex gap-x-7 mt-11">
          <img src="../assets/images/Twitter.svg" alt="Twitter" />
          <img src="../assets/images/Facebook.svg" alt="Facebook" />
          <img src="../assets/images/Linkedin.svg" alt="Linkedin" />
        </div>
      </div>
      <div class="2xl:flex gap-x-10">
        <div class="mt-[68px] 2xl:mt-0 2xl:w-1/2">
          <h2 class="text-[24px] font-bold mb-[10px] 2xl:mb-10">{{ $t("address") }}</h2>
          <div class="flex gap-x-2 items-start">
            <img src="../assets/images/location.svg" alt="" />
            <div>
              <p class="mb-3">{{ $t("addressUS") }}</p>
              <p>{{ $t("addressVN") }}</p>
            </div>
          </div>
          <div class="flex gap-x-2 items-center mt-5 2xl:mt-10">
            <img src="../assets/images/Mobile.svg" alt="" />
            <p>
              <span>(+1) 555-0108-000</span>
              <span>or</span>
              <span>(+236) 555-0108</span>
            </p>
          </div>
        </div>
        <div class="mt-[68px] 2xl:mt-0 2xl:w-1/2 pb-[62px]">
          <h2 class="text-[24px] font-bold mb-[10px] 2xl:mb-10">{{ $t("subscribe") }}</h2>
          <p>{{ $t("subscribeDesc") }}</p>
          <div class="w-full 2xl:w-[560px] relative bg-transparent mt-4">
            <input
              class="rounded-lg border border-white py-[17px] px-[14px] w-full bg-transparent"
              type="text"
              :placeholder="$t('enterEmail')"
            />
            <Arrow class="absolute top-[17px] right-[14px]" fillColor="white" />
          </div>
        </div>
      </div>
    </div>
    <div class="bg-black py-8 text-center text-[18px] text-white">
      <p>2017 Copyright. Policy.</p>
    </div>
  </div>
</template>

<script setup>
import Logo from "./Icons/Logo.vue";
import Arrow from "./Icons/Arrow.vue";
</script>

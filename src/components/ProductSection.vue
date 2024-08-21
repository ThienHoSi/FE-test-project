<template>
  <div class="mt-[48px] px-4">
    <div>
      <h1
        class="font-fairy font-black text-[40px] xl:text-[60px] xl:text-center mb-4"
      >
        {{ $t("ourGames") }}
      </h1>
      <p class="text-[#757575] text-center max-w-full xl:w-[860px] xl:mx-auto">
        {{ $t("ourGamesDesc") }}
      </p>
    </div>

    <div class="flex mt-10 xl:mt-[80px]">
      <div class="m-auto grid grid-cols-2 xl:grid-cols-4 gap-x-[15px] gap-y-5">
        <div
          v-for="(item, index) in products"
          :key="index"
          class="relative w-[164px] xl:w-[410px] h-[268px] xl:h-[560px] rounded-[20px] text-white"
          :class="{ 'top-7 xl:top-16': index % 2 !== 0 }"
        >
          <img
            class="rounded-[20px] w-full h-full object-cover"
            :src="item.image"
            alt=""
          />
          <div class="absolute bottom-4 pl-2 xl:px-8">
            <h1 class="font-bold text-2xl xl:text-[48px] xl:leading-[60px]">{{ item.title }}</h1>
            <p class="text-[12px] xl:text-[14px]">
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ESpace from "../assets/images/ESpace.png";
import Pirates from "../assets/images/Pirates.png";
import MagicTree from "../assets/images/MagicTree.png";
import Kingland from "../assets/images/Kingland.png";
import Witch from "../assets/images/Witch.png";
import Aborigines from "../assets/images/Aborigines.png";

import TheLastGame from "../assets/images/TheLastGame.png";
import Rocky from "../assets/images/Rocky.png";
import Cinderella from "../assets/images/Cinderella.png";
import GDragon from "../assets/images/GDragon.png";
import BlueFire from "../assets/images/BlueFire.png";
import EgyptGame from "../assets/images/EgyptGame.png";

const products = [
  {
    image: ESpace,
    title: "E-Space",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: TheLastGame,
    title: "The Last Game",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: Pirates,
    title: "Pirates",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: Rocky,
    title: "Rocky",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: MagicTree,
    title: "Magic tree",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: Cinderella,
    title: "Cinderella",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: Kingland,
    title: "Kingland",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: GDragon,
    title: "G-Dragon",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: Witch,
    title: "Witch Party",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: BlueFire,
    title: "Blue Fire",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: Aborigines,
    title: "Aborigines",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: EgyptGame,
    title: "EgyptGame",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
</script>

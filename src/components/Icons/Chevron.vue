<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <g clip-path="url(#clip0_2_9273)">
    <path d="M7 10L12 15L17 10H7Z" :fill="fillColor"/>
    </g>
    <defs>
    <clipPath id="clip0_2_9273">
    <rect width="24" height="24" :fill="fillColor"/>
    </clipPath>
    </defs>
    </svg>
</template>

<script setup>
defineProps({
  fillColor: {
    type: String,
    default: 'white'
  }
})
</script>
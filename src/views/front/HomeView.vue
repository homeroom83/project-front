<template>
  <v-carousel hide-delimiter-background cycle show-arrows="hover" interval="3000">
    <v-carousel-item v-for="image in imagesNike" :key="image.src">
      <v-img :src="image.src"></v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
import { computed } from 'vue'

const imagesNike = computed(() => {
  return [
    { title: 'dunk-green', to: '/products/nike', src: 'https://raw.githubusercontent.com/homeroom83/project-front/main/src/assets/nike/dunk-green.jpg' },
    { title: 'dunk-pink', to: '/products/nike', src: 'https://raw.githubusercontent.com/homeroom83/project-front/main/src/assets/nike/dunk-pink.jpg' },
    { title: 'zoom-vomero5', to: '/products/nike', src: 'https://raw.githubusercontent.com/homeroom83/project-front/main/src/assets/nike/zoom-vomero-5.jpg' }
  ]
})
</script>

<template>
  <v-carousel hide-delimiter-background cycle show-arrows="hover" interval="3000">
    <v-carousel-item v-for="image in imagesNike" :key="image.src">
      <v-img :src="image.src"></v-img>
    </v-carousel-item>
  </v-carousel>
  <v-carousel hide-delimiter-background cycle show-arrows="hover" interval="3000">
    <v-carousel-item v-for="image in imagesNb" :key="image.src">
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

const imagesNb = computed(() => {
  return [
    { title: '990nb3', to: '/products/newBalance', src: 'https://raw.githubusercontent.com/homeroom83/project-front/main/src/assets/nb/990nb3.webp' },
    { title: '990nv6', to: '/products/newBalance', src: 'https://raw.githubusercontent.com/homeroom83/project-front/main/src/assets/nb/990nv6.webp' },
    { title: '990tg4', to: '/products/newBalance', src: 'https://raw.githubusercontent.com/homeroom83/project-front/main/src/assets/nb/990tg4.webp' }
  ]
})
</script>

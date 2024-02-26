<template>
  <v-carousel hide-delimiters>
    <v-carousel-item src="src\assets\dunk-green.jpg">
    </v-carousel-item>

    <v-carousel-item src="src\assets\dunk-pink.jpg">
    </v-carousel-item>

    <v-carousel-item src="src\assets\zoom-vomero-5.jpg">
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
import { computed } from 'vue'

const images = computed(() => {
  return [
    { title: 'dunk-green', to: '/products/nike' src: 'https://github.com/homeroom83/project-front/blob/main/src/assets/dunk-green.jpg' }

  ]
})
</script>

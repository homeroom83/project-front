<template>
  <v-card width="200" density="compact" elevation='0'>
    <v-img :src="image" height="144" cover></v-img>
    <v-card-title>{{ name }}</v-card-title>
    <v-card-subtitle>NTD {{ price }}</v-card-subtitle>
  </v-card>
</template>

<script setup>
const props = defineProps(['_id', 'category', 'description', 'image', 'name', 'price', 'sell'])
</script>

<template>
  <v-container>
    <v-navigation-drawer width="200" permanent="true">
      <v-list>
        <v-list-item to="/products/new" class="text-center font-weight-black" :active="false">商品總覽</v-list-item>
        <v-list-item v-for="item in list" :key="item" :to="item.to">{{ item.text }}</v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-row>
      <v-col>
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from 'vue'

const list = computed(() => {
  return [
    { to: '/products/nike', text: 'Nike' },
    { to: '/products/newbalance', text: 'New Balance' }
  ]
})

</script>

<template>
  <v-app-bar color="orange-lighten-4">
    <v-container class="d-flex align-center">
      <router-link to="/admin/products" class="sneaker">
        <v-app-bar-title>
          管理者介面
        </v-app-bar-title>
      </router-link>
      <v-spacer></v-spacer>
        <!-- 選項列表 -->
        <v-menu v-for="item in menu" :key="item">
          <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" :to="item.to" :active="false">{{ item.text }}</v-list-item>
          </template>
        </v-menu>
        <v-list-item class="logout" @click="logout">登出</v-list-item>
    </v-container>
  </v-app-bar>
  <!-- 頁面內容 -->
  <v-main>
    <router-view></router-view>
  </v-main>
</template>

<script setup>
import { computed } from 'vue'
import { useUserStore } from '@/store/user'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRouter } from 'vue-router'

const { apiAuth } = useApi()
const router = useRouter()
const createSnackbar = useSnackbar()
const user = useUserStore()

const menu = computed(() => {
  return [
    { to: '/admin/products', text: '商品管理' },
    { to: '/admin/members', text: '會員管理' },
    { to: '/', text: '回首頁' }
  ]
})

const logout = async () => {
  try {
    await apiAuth.delete('/users/logout')
    user.logout()
    createSnackbar({
      text: '登出成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
    router.push('/')
  } catch (error) {
    const text = error?.response?.data?.message || '發生錯誤，請稍後再試'
    createSnackbar({
      text,
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
  }
}
</script>

<style>
.sneaker {
  text-decoration: none;
  color: black
}
</style>

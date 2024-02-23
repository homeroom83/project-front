<template>
  <!-- 手機側欄 -->
  <v-navigation-drawer v-model="drawer" v-if="isXs || isSm" color="orange-lighten-5">
    <v-list v-model="list" >
      <v-list-group v-for="item in  menu " :key="item">
        <template v-slot:activator="{ props }" >
          <v-list-item v-bind="props" :title="item.title" class="text-center"></v-list-item>
        </template>
        <template v-for=" page in item.pages " :key="page.to">
          <v-list-item class="bg-white" :to="page.to" v-if="page.show" >
            <v-list-item>{{ page.text }}</v-list-item>
          </v-list-item>
        </template>
      </v-list-group>
    </v-list>
    <v-list-item v-if="user.isLogin" @click="logout" class="text-center">登出</v-list-item>
  </v-navigation-drawer>

  <!-- 導覽列 -->
  <v-app-bar color="orange-lighten-4">
    <v-container class="d-flex align-center">
      <!-- Logo -->
      <router-link to="/" class="sneaker">
        <v-app-bar-title>
          sneaker
        </v-app-bar-title>
      </router-link>
      <v-spacer></v-spacer>
      <!-- 手機版 -->
      <template v-if="isXs || isSm">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      </template>
      <!-- 電腦版 -->
      <template v-else>
        <!-- 選項列表 -->
        <v-menu open-on-hover v-for="item in menu" :key="item">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" :title="item.title" style="cursor: pointer;"></v-list-item>
          </template>
          <v-list>
            <template v-for="page in item.pages " :key="page">
              <v-list-item :to="page.to" :active="false" v-if="page.show">
                <v-list-item>{{ page.text }}</v-list-item>
              </v-list-item>
            </template>
          </v-list>
        </v-menu>
        <v-list-item v-if="user.isLogin && user.isAdmin" to="/admin/products">管理員</v-list-item>
        <v-list-item v-if="user.isLogin" @click="logout">登出</v-list-item>
      </template>
    </v-container>
  </v-app-bar>
  <!-- 頁面內容 -->
  <v-main>
    <router-view></router-view>
  </v-main>
</template>

<script setup>
import { useDisplay } from 'vuetify'
import { ref, computed } from 'vue'
import { useUserStore } from '@/store/user'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRouter } from 'vue-router'

const { apiAuth } = useApi()
const router = useRouter()
const createSnackbar = useSnackbar()

const user = useUserStore()

// 手機版判斷
const { sm, xs } = useDisplay()
const isSm = computed(() => sm.value)
const isXs = computed(() => xs.value)

// 手機版側欄開關
const drawer = ref(false)
const list = ref(false)

const menu = computed(() => {
  return [
    {
      title: '商品總覽',
      pages: [
        { to: '/register', text: 'Nike', show: true },
        { to: '/login', text: 'New Balance', show: true }
      ]
    },
    {
      title: '交流專區',
      pages: [
        { to: '/register', text: 'Nike', show: true },
        { to: '/login', text: 'New Balance', show: true }
      ]
    },
    {
      title: '會員專區',
      pages: [
        { to: '/register', text: '註冊', show: !user.isLogin },
        { to: '/login', text: '登入', show: !user.isLogin },
        { to: '/like', text: '我的收藏', show: user.isLogin }
      ]
    }
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

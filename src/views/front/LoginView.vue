<template>
  <v-navigation-drawer permanent="true" v-if="!isXs && !isSm" width="224">
    <v-container>
      <v-list class="text-center">
        <v-list-item v-for="item in list" :key="item" :to="item.to">{{ item.text }}</v-list-item>
      </v-list>
    </v-container>
  </v-navigation-drawer>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>登入</h1>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="6" style="min-width: 500px;">
        <v-form :disabled="isSubmitting" @submit.prevent="submit">
          <v-text-field label="帳號" minlength="6" maxlength="20" counter v-model="account.value.value"
            :error-messages="account.errorMessage.value">
          </v-text-field>
          <v-text-field label="密碼" minlength="6" maxlength="20" counter type="password" v-model="password.value.value"
            :error-messages="password.errorMessage.value">
          </v-text-field>
          <v-btn type="submit" color="green">登入</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useRouter } from 'vue-router'
import { useSnackbar } from 'vuetify-use-dialog'
import { useApi } from '@/composables/axios'
import { useUserStore } from '@/store/user'

const { api } = useApi()

const router = useRouter()
const createSnackbar = useSnackbar()

const user = useUserStore()

const { sm, xs } = useDisplay()
const isSm = computed(() => sm.value)
const isXs = computed(() => xs.value)

const list = computed(() => {
  return [
    { text: '會員專區' },
    { to: '/register', text: '註冊' },
    { to: '/login', text: '登入' }
  ]
})

const schema = yup.object({
  account: yup
    .string()
    .required('帳號為必填欄位')
    .min(6, '使用者帳號長度不符')
    .max(20, '使用者帳號長度不符'),
  password: yup
    .string()
    .required('密碼為必填欄位')
    .min(6, '使用者密碼長度不符')
    .max(20, '使用者密碼長度不符')
})

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema
})

const account = useField('account')
const password = useField('password')

const submit = handleSubmit(async (values) => {
  try {
    const { data } = await api.post('/users/login', {
      account: values.account,
      password: values.password
    })
    user.login(data.result)
    createSnackbar({
      text: '登入成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
    router.push('/')
  } catch (error) {
    console.log(error)
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
})
</script>

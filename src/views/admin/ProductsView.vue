<template>
  <v-navigation-drawer permanent>
    <v-container>
      <v-col class="text-center title">商品管理</v-col>
      <v-btn color="success" @click="openDialog">新增商品</v-btn>
      <v-list>
        <v-list-item v-for="item in list" :key="item">{{ item.text }}</v-list-item>
      </v-list>
    </v-container>
  </v-navigation-drawer>
  <v-dialog v-model="dialog" persistent width="600px">
    <v-form :disabled="isSubmitting" @submit.prevent="submit">
      <v-card>
        <v-card-title> {{ dialogId === '' ? '新增商品' : '編輯商品' }}</v-card-title>
        <v-card-text>
          <v-text-field label="名稱" v-model="name.value.value" :error-messages="name.errorMessage.value"></v-text-field>
          <v-select label="分類" :items="categories" v-model="category.value.value"
            :error-messages="category.errorMessage.value">
          </v-select>
          <v-text-field label="連結" v-model="link.value.value" :error-messages="link.errorMessage.value">
          </v-text-field>
          <v-text-field label="價錢" type="number" min="0" v-model="price.value.value"
            :error-messages="price.errorMessage.value">
          </v-text-field>
          <v-checkbox label="上架" v-model="sell.value.value" :error-messages="sell.errorMessage.value">
          </v-checkbox>
          <vue-file-agent v-model="fileRecords" v-model:rawModelValue="rawFileRecords" accept="image/jpeg,image/png"
            deletable :error-text="{ type: '檔案格式不支援', size: '檔案超過 5MB 大小限制' }" help-text="選擇圖片或拖曳到這裡" :max-files="10"
            max-size="5MB" ref="fileAgent">
          </vue-file-agent>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" :disabled="isSubmitting" @click="closeDialog">取消</v-btn>
          <v-btn color="success" type="submit" :loading="isSubmitting">送出</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script setup>
import { computed, ref } from 'vue'
import * as yup from 'yup'
import { useForm, useField } from 'vee-validate'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'

const { apiAuth } = useApi()
const createSnackbar = useSnackbar()

const fileAgent = ref(null)

const list = computed(() => {
  return [
    { text: 'Nike' },
    { text: 'New Balance' }
  ]
})

const dialog = ref(false)
const dialogId = ref('')

const openDialog = () => {
  dialogId.value = ''
  dialog.value = true
}

const closeDialog = () => {
  dialog.value = false
  resetForm()
  fileAgent.value.deleteFileRecord()
}

const categories = ['Nike', 'New Balance']

const schema = yup.object({
  name: yup
    .string()
    .required('缺少商品名稱'),
  category: yup
    .string()
    .required('缺少商品分類')
    .test('isCategory', '商品分類錯誤', value => categories.includes(value)),
  link: yup
    .string()
    .required('缺少商品連結'),
  price: yup
    .number()
    .required('缺少商品價錢'),
  sell: yup
    .boolean()
})
const { handleSubmit, isSubmitting, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    name: '',
    category: '',
    link: '',
    price: 0,
    sell: false
  }
})
const name = useField('name')
const category = useField('category')
const link = useField('link')
const price = useField('price')
const sell = useField('sell')

const fileRecords = ref([])
const rawFileRecords = ref([])

const submit = handleSubmit(async (values) => {
  if (fileRecords.value.length === 0 || fileRecords.value[0].error) return
  try {
    const fd = new FormData()
    for (const key in values) {
      fd.append(key, values[key])
    }
    fd.append('image', fileRecords.value[0].file)

    await apiAuth.post('/products', fd)

    createSnackbar({
      text: '新增成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'success',
        location: 'bottom'
      }
    })
    closeDialog()
  } catch (error) {
    console.log(error)
    const text = error?.response?.data?.message || '發生錯誤，請稍後再試'
    createSnackbar({
      text,
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'error',
        location: 'bottom'
      }
    })
  }
})
</script>

<style>
.title {
  font-weight: bolder;
  font-size: 20px;
}
</style>

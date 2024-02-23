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
          <v-select label="分類" :items="categories" v-model="category.value.value" :error-messages="category.errorMessage.value"></v-select>
          <v-checkbox label="上架" v-model="sell.value.value" :error-messages="sell.errorMessage.value"></v-checkbox>
          <vue-file-agent
            v-model="fileRecords" v-model:rawModelValue="rawFileRecords" accept="image/jpeg,image/png" deletable
            :error-text="{type: '檔案格式不支援', size: '檔案超過 5MB 大小限制'}" help-text="選擇檔案或拖曳到這裡" :max-files="10" max-size="5MB">
          </vue-file-agent>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error">取消</v-btn>
          <v-btn color="success">送出</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script setup>
import { computed, ref } from 'vue'
import * as yup from 'yup'
import { useForm, useField } from 'vee-validate'

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

const categories = ['Nike', 'New Balance']

const schema = yup.object({
  name: yup
    .string()
    .required('缺少商品名稱'),
  category: yup
    .string()
    .required('缺少商品分類')
    .test('isCategory', '商品分類錯誤', value => categories.includes(value)),
  sell: yup
    .boolean()
})
const { handleSubmit, isSubmitting, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    name: '',
    category: '',
    sell: false
  }
})
const name = useField('name')
const category = useField('category')
const sell = useField('sell')

const fileRecords = ref([])
const rawFileRecords = ref([])

const submit = handleSubmit(async () => {

})
</script>

<style>
.title {
  font-weight: bolder;
  font-size: 20px;
}
</style>

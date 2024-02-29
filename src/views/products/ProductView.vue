<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>{{ product.name }}</h1>
      </v-col>
      <v-col>
        <v-img :src="product.image"></v-img>
      </v-col>
      <v-col>
        <p>${{ product.price }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useApi } from '@/composables/axios'

const route = useRoute()
const { api } = useApi()

const product = ref({
  _id: '',
  name: '',
  price: 0,
  image: '',
  sell: true,
  category: ''
})

onMounted(async () => {
  try {
    const { data } = await api.get('/products/' + route.params.id)
    product.value._id = data.result._id
    product.value.name = data.result.name
    product.value.price = data.result.price
    product.value.image = data.result.image
    product.value.sell = data.result.sell
    product.value.category = data.result.category
  } catch (error) {
    console.log(error)
  }
})
</script>

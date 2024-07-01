<template>
  <div class="container bg-dark">
    <div class="row">
      <div class="col-12 col-md-6 mb-4" v-for="(image, index) in images" :key="index">
        <img :src="image" :alt="'Image ' + (index + 1)" class="img-fluid">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchUsers } from '@/apiService';

const posts = ref([]);
// 使用 require.context 動態導入圖片
const images = ref([]);
// 使用 import.meta.glob 動態加載圖片
const importImages = import.meta.glob('@/assets/indexPage/*.jpg');

onMounted(async () => {
  for (const path in importImages) {
    const imageModule = await importImages[path]();
    images.value.push(imageModule.default);
  }
});

</script>

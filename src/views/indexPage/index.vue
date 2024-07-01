<template>
  <div class="container bg-dark">
    <div class="row">
      <div class="col-12 col-md-6 mb-4" v-for="(image, index) in images" :key="index">
        <img :src="image" :alt="'Image ' + (index + 1)" class="img-fluid">
      </div>
      <div class="col-12 col-md-6 my-4">
        <div class="container form-block text-white p-3">
          <b-form @submit.prevent="onSubmit">
            <div class="row">
              <div class="col-12 col-md-6 col-lg-4 ">
                <b-form-group label="姓名" label-for="name">
                  <b-form-input
                      id="name"
                      v-model="form.name"
                      :state="isValid(form.name)"
                      required
                      placeholder="請輸入姓名"
                  ></b-form-input>
                  <b-form-invalid-feedback>姓名為必填項</b-form-invalid-feedback>
                </b-form-group>
              </div>
              <div class="col-12 col-md-6 col-lg-4 ">
                <b-form-group label="電話" label-for="phone">
                  <b-form-input
                      id="phone"
                      v-model="form.phone"
                      :state="isValid(form.phone)"
                      required
                      placeholder="請輸入電話"
                  ></b-form-input>
                  <b-form-invalid-feedback>電話為必填項</b-form-invalid-feedback>
                </b-form-group>
              </div>
              <div class="col-12 col-md-6 col-lg-4 ">
                <b-form-group label="Email" label-for="email">
                  <b-form-input
                      id="email"
                      type="email"
                      v-model="form.email"
                      :state="isValid(form.email)"
                      required
                      placeholder="請輸入電子郵件"
                  ></b-form-input>
                  <b-form-invalid-feedback>Email為必填項</b-form-invalid-feedback>
                </b-form-group>
              </div>
              <div class="col-12 col-md-6 col-lg-4 mb-3">
                <b-form-group label="金額" label-for="amount">
                  <b-form-input
                      id="amount"
                      type="number"
                      v-model="form.amount"
                      :state="isValid(form.amount)"
                      required
                      placeholder="請輸入金額"
                  ></b-form-input>
                  <b-form-invalid-feedback>金額為必填項</b-form-invalid-feedback>
                </b-form-group>
              </div>
            </div>
            <b-button type="submit" variant="primary">提交</b-button>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchUsers } from '@/apiService';

// 表單
const form = ref({
  name: '',
  phone: '',
  email: '',
  amount: ''
});
const posts = ref([]);
// 使用 require.context 動態導入圖片
const images = ref([]);
// 使用 import.meta.glob 動態加載圖片
const importImages = import.meta.glob('@/assets/indexPage/*.jpg');

const isValid = (value) => value.trim() !== '';

const onSubmit = () => {
  if (
      isValid(form.value.name) &&
      isValid(form.value.phone) &&
      isValid(form.value.email) &&
      isValid(form.value.amount)
  ) {
    alert('表單提交成功');
  } else {
    alert('請填寫所有必填項');
  }
};

onMounted(async () => {
  for (const path in importImages) {
    const imageModule = await importImages[path]();
    images.value.push(imageModule.default);
  }
 const cc = await fetchUsers();
  console.log(cc)
});

</script>

<style lang="scss" scoped>
  .form-block {
    border-radius: 16px;
    background-color: #283593;
  }
</style>

<template>
  <div>
    <router-view>
      <template #default="{ Component, route }">
        <transition
            enter-active-class="animate__animated animate__fadeIn"
            mode="out-in"
        >
          <keep-alive>
            <component :is="Component" :key="route.path" />
          </keep-alive>
        </transition>
      </template>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'AppMain',
};
</script>

<style>
/* 添加任何需要的樣式 */
</style>

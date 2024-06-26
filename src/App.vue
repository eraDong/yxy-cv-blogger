<template>
  <div>
    <div class="loading-overlay" :class="{ 'is-loading': loading }"></div>
    <transition name="ease" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const loading = ref(true);
const router = useRouter();
const route = useRoute();

const hideLoading = () => {
  loading.value = false;
};

const showLoading = () => {
  loading.value = true;
};

// Watch route changes and trigger loading
watchEffect(() => {
  showLoading();
  setTimeout(hideLoading, 500); // Simulate loading time
});
</script>

<style scoped>
/* Loading overlay styles */
.loading-overlay {
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 1);
  z-index: 9999;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.loading-overlay.is-loading {
  opacity: 1;
}

/* Transition styles */
.ease-enter-active, .ease-leave-active {
  transition: all 0.5s ease;
}

.ease-enter-from, .ease-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.ease-leave-from, .ease-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>

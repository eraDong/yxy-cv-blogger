<template>
  <div class="main">
    <div class="jmp">
      <router-link to="/" class="preview-link" >Back 2 Heaven</router-link>
      <router-link
        to="/collection"
        class="preview-link"
        exact-active-class="active-link"
      >
        Collection
      </router-link>
      <router-link
        to="/product"
        class="preview-link"
        exact-active-class="active-link"
      >
        Product
      </router-link>
      <router-link
        to="/community"
        class="preview-link"
        exact-active-class="active-link"
      >
        Community
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {})
</script>

<style scoped>
.main {
  background-color: #fff9f9;
  font-size: 20px;
  overflow: hidden;
  padding: 45px;
  position: relative;
}

.jmp {
  width: 150px;
  display: flex;
  flex-direction: column;
}

.jmp a {
  position: relative;
  text-decoration: none; /* Remove default underline */
  color: inherit; /* Inherit color */
}

/* Active link style */
.active-link {
  font-weight: bold;
  transform: scale(1.1);
  transition: 0.5s;
}
</style>

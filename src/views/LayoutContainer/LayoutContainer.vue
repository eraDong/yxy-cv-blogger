<template>
  <div class="main">
    <div class="header">
      <div class="content">
        <img src="@/assets/nav-header.png" alt="">
        <img src="@/assets/nav-header.png" alt="">
        <img src="@/assets/nav-header.png" alt="">
        <img src="@/assets/nav-header.png" alt="">
        <img src="@/assets/nav-header.png" alt="">
        <img src="@/assets/nav-header.png" alt="">
        <img src="@/assets/nav-header.png" alt="">
        <img src="@/assets/nav-header.png" alt="">
        <img src="@/assets/nav-header.png" alt="">
      </div>
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
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {})
</script>

<style scoped lang="less">
.main {
  
  background-color: #fff9f9;
  font-size: 20px;
  overflow: hidden;
  
  

  .header {
    
    padding: 45px;
    padding-bottom: 0px;
    display: flex;
    .content {
      display: flex;
      width:100%;
      img {
        width: 20%;
      }


    }

    .jmp {
    
    text-align: right;
    font-size: 22px;
    width: 100%;
    display: flex;
    flex-direction: column;
      a {
      
      position: relative;
      text-decoration: none; /* Remove default underline */
      color: inherit; /* Inherit color */
    }
  }

/* Active link style */
.active-link {
  font-weight: bold;
  transform: scale(0.99);
  transition: 0.5s;
}
}


}


</style>

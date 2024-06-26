<template>
  <div class="main">
    <div class="jmp">
      <router-link 
        to="/" 
        class="preview-link"
      >
        Back 2 Heaven
      </router-link>
      <router-link 
        to="/collection" 
        class=" preview-link " 
        id="collectionLink"
        @mouseover="showPreview('collection')" 
        @mouseleave="hidePreview" 
      >
        Collection
        <transition name="fade">
          <div v-if="showingPreview === 'collection'" class="preview">
            <img src="@/assets/angel_wings.png" alt="Collection Preview">
          </div>
        </transition>
      </router-link>
      <router-link 
        to="/product" 
        class="preview-link" 
        id="productLink"
        @mouseover="showPreview('product')" 
        @mouseleave="hidePreview"
      >
        Product
        <transition name="fade">
          <div v-if="showingPreview === 'product'" class="preview" id="ProductPreview">
            <img src="@/assets/angel_wings_black.png" alt="Product Preview">
          </div>
        </transition>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

  
  
  
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const showingPreview = ref(null);
  
  const showPreview = (type) => {
    showingPreview.value = type;
  };
  
  const hidePreview = () => {
    showingPreview.value = null;
  };
  
  onMounted(() => {
    
  });
  </script>
  
  
  
  
  
  
  
  
  <style scoped>
  .main {
    background-color: #fff9f9;
    font-size: 18px;
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
  
  .preview {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px; /* Adjust as needed */
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    z-index: 1000;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 10px;
    border-radius: 5px;
  }
  
  .preview-link:hover .preview {
    opacity: 1;
  }
  
  .preview img {
    width: 100%;
    border: 1px solid #ddd;
  }
  </style>
  
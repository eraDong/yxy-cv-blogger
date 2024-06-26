<template>
    <div class="main">
      <el-row justify="center">
        <el-col>
          <div class="card-stack" v-if="!isCarousel" @click="spreadCards">
            <transition-group name="card" tag="div" class="cards">
              <div
                v-for="(card, index) in cards"
                :key="card.id"
                class="card"
                :style="getCardStyle(index)"
              >
                <img :src="card.image" alt="Card Image" />
              </div>
            </transition-group>
          </div>
          <div v-else class="carousel">
            <div
              class="carousel-container"
              @mousedown="startDrag"
              @mousemove="onDrag"
              @mouseup="endDrag"
              @mouseleave="endDrag"
              @touchstart="startDrag"
              @touchmove="onDrag"
              @touchend="endDrag"
            >
              <div
                v-for="(card, index) in cards"
                :key="card.id"
                class="carousel-card"
                :style="getCardTransform(index)"
              >
                <img :src="card.image" alt="Card Image" />
                <div class="card-description">{{ card.description }}</div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </template>
  
  
  
  
  
  <script setup>
  import { ref } from 'vue';
  
  const cards = ref([
    { id: 1, image: 'src/assets/collection/collection_01.png', description: 'Description 1' },
    { id: 2, image: 'src/assets/collection/collection_02.png', description: 'Description 2' },
    { id: 3, image: 'src/assets/collection/collection_03.png', description: 'Description 3' },
    { id: 4, image: 'src/assets/collection/collection_04.png', description: 'Description 4' },
    { id: 5, image: 'src/assets/collection/collection_05.png', description: 'Description 5' },
  ]);
  
  const isCarousel = ref(false);
  const currentX = ref(0);
  const startX = ref(0);
  const dragging = ref(false);
  
  const getCardStyle = (index) => {
    const totalCards = cards.value.length;
    const angle = (index - totalCards / 2) * 10; // 调整展开角度
    const translation = (index - totalCards / 2) * 45; // 调整展开距离
    return {
      transform: `translate(${translation}px, 0) rotate(${angle}deg)`,
      zIndex: totalCards - index,
    };
  };
  
  const spreadCards = () => {
    isCarousel.value = true;
  };
  
  const getCardTransform = (index) => {
    return {
      transform: `translateX(${currentX.value + index * 100}%)`
    };
  };
  
  const startDrag = (event) => {
    startX.value = event.clientX || event.touches[0].clientX;
    dragging.value = true;
    document.body.classList.add('no-pointer-events'); // 添加样式类
  };
  
  const onDrag = (event) => {
    if (dragging.value) {
      const clientX = event.clientX || event.touches[0].clientX;
      const diffX = clientX - startX.value;
      currentX.value += diffX / window.innerWidth * 100; // 将拖动的距离转换为百分比
      startX.value = clientX;
    }
  };
  
  const endDrag = () => {
    dragging.value = false;
    document.body.classList.remove('no-pointer-events'); // 移除样式类
  };
  
  // 阻止图片元素的默认行为
  document.addEventListener('dragstart', function(event) {
    event.preventDefault();
  });
  </script>
  
  
  

  <style scoped>
  .main {
    background-color: #fff9f9;
    background-size: cover;
    min-height: 100vh;
    padding: 45px;
    overflow: hidden;
    font-size: 18px;
  }
  
  .card-stack {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0 auto;
    height: 450px; /* 根据需要调整 */
  }
  
  .cards {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .card {
    position: absolute;
    width: 100px; /* 根据需要调整 */
    height: 190px; /* 根据需要调整 */
    transition: transform 0.5s ease, z-index 0.5s ease;
  }
  
  .card:hover {
    transform: scale(1.2) !important; /* 放大比例 */
    z-index: 10 !important; /* 提高层级 */
    cursor: pointer;
  }
  
  .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px; /* 根据需要调整 */
    box-shadow: 0 4px 8px rgba(26, 23, 23, 0.418);
  }
  
  .carousel {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
    height: 100vh;
  }
  
  .carousel-container {
    display: flex;
    justify-content: space-around;
    height: 100%;
    cursor: grab;
    user-select: none;
    padding: 0 10px; /* If necessary, adjust padding */
    box-sizing: border-box; /* Ensures padding and margin are included in the element's total width and height */

    &:active {
    cursor: grabbing;
    }

    .carousel-card {
      margin-right: -150px;
      min-width: 25%;
      height: 550px;
      text-align: center;
      transition: transform 0.1s ease;

      img {
        width: 100%; /* 根据需要调整 */
        height: auto;
        object-fit: cover;
        margin: 0 auto;
        border-radius: 15px; /* 根据需要调整 */
        box-shadow: 0 4px 8px rgba(26, 23, 23, 0.418);
      }
    }

    .card-description {
      margin-top: 20px;
      font-size: 16px; /* 根据需要调整 */
    }

  }



  

  </style>
  
  


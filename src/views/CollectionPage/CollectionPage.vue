<template>
    <div class="main">
      <el-row justify="center">
        <el-col>
          <div class="header">
          <h1>Collections</h1>
          <p>All my works are selected here</p>
          <!-- <p>total: {{ cards.length }}</p> -->
        </div>
          <div class="card-stack" v-if="!isCarousel" @click="spreadCards">
            <transition-group name="card" tag="div" class="cards">
              <div
                v-for="(card, index) in cards.slice(cards.length<4?0:cards.length-4, cards.length)"
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
    { id: 1, image: 'https://wdcdn.qpic.cn/MTMxMDI2NjIyMDkzMDk0ODQ_45012_GOEPRMNf7he6pGX9_1719457374', description: 'This is my first T-shirt design.' },
    { id: 2, image: 'https://wdcdn.qpic.cn/MTMxMDI2NjIyMDkzMDk0ODQ_249830_gs2ylAQWYnOA3mZI_1719457404', description: 'I was trying to draw something-1' },
    { id: 3, image: 'https://wdcdn.qpic.cn/MTMxMDI2NjIyMDkzMDk0ODQ_490844_LrdSACva4jGpcxq9_1719457411', description: 'I was trying to draw something-2' },

  ]);
  
  const isCarousel = ref(false);
  const currentX = ref(0);
  const startX = ref(0);
  const dragging = ref(false);
  
  const getCardStyle = (index) => {
    const totalCards = cards.value.length<4?cards.value.length:4;
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
  
  
  

  <style scoped lang="less">
  .main {
    touch-action: pan-y;
    background: linear-gradient(rgba(78, 62, 62, 0.5), rgba(255, 255, 255, 0.5)),url(@/assets/collection_bg.jpg) ;
    
    background-color: #fff9f9;
    background-size: cover;
    min-height: 100vh;
    padding: 45px;
    overflow: hidden;
    font-size: 20px;
    box-shadow: 0 4px 10px rgba(3, 3, 3, 0.719);



    .header {
      
      text-align:center;
      margin-bottom: 30px;
      h1 {
        color: #13ff26 !important;
        text-shadow: 2px 2px 1px #333
      }
      p {
        color: #13ff26 !important;
        text-shadow: 2px 2px 1px #333
      }
    }
  }
  
  .card-stack {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0 auto;
    height: 230px; /* 根据需要调整 */
    width: 280px;
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
    box-shadow: 0 4px 10px rgba(3, 3, 3, 0.719);
  }
  
  .carousel {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
    height: auto;
  }
  
  .carousel-container {
    display: flex;
    justify-content: space-around;
    height: auto;
    cursor: grab;
    user-select: none;
    padding: 0 10px; /* If necessary, adjust padding */
    box-sizing: border-box; /* Ensures padding and margin are included in the element's total width and height */

    &:active {
    cursor: grabbing;
    }

    .carousel-card {
      margin-right: -150px;
      max-width: 100%;
      max-height: 550px;
      text-align: center;
      transition: transform 0.01s ease;

      img {
        width: 100%; /* 根据需要调整 */
        height: 250px;
        object-fit: cover;
        margin: 0 auto;
        border-radius: 15px; /* 根据需要调整 */
        box-shadow: 0 4px 8px rgba(26, 23, 23, 0.418);
      }
    }

    .card-description {
      margin-top: 20px;
      font-size: 16px; /* 根据需要调整 */
      color: #13ff26 !important;
      text-shadow: 2px 2px 1px #333
    }

  }



  

  </style>
  
  


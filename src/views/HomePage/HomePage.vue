<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const showModal = ref(false)
const modalText = ref('')
const fullText = 'There is no way...'

const goToCollection = () => {
  router.push('/collection')
}

const showExitModal = async () => {
  showModal.value = true
  modalText.value = ''
  await typeText()
  setTimeout(() => {
    showModal.value = false
  }, 800) // Adjust the delay before hiding the modal
}

const typeText = () => {
  return new Promise((resolve) => {
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        modalText.value += fullText[index]
        index++
      } else {
        clearInterval(interval)
        resolve()
      }
    }, 100) // Adjust typing speed here
  })
}
</script>


<template>
  <div class="main">
    <el-row>
      <el-col :span="20" :xs="16">
        <el-row class="content" justify="start">
          <el-col :span="10" class="head">
            <p>LumineCommunity</p>
            <p>EraDong.Soilder</p>
            <p>Appreciate</p>
          </el-col>
          <el-col :span="12" class="bottom">
            <p>Pixel Angel</p>
            <p>Blur Wings</p>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="4" :xs="8">
        <div class="poem">
          <p>Kennst du das Land, wo die Zitronen blühn,</p>
          <p>Im dunkeln Laub die Goldorangen glühn,</p>
          <p>Ein sanfter Wind vom blauen Himmel weht,</p>
          <p>Die Myrte still und hoch der Lorbeer steht,</p>
          <p>Kennst du es wohl?</p>
          <p>Dahin! Dahin</p>
          <p>Möcht ich mit dir, o mein Geliebter, ziehn.</p>
        </div>
      </el-col>
    </el-row>

    <el-row class="logo" justify="center">
      <el-col :span="12" xs="20" sm="16" md="12" lg="10" xl="8">
        <img src="@/assets/angel_wings.png" alt="" />
        <img src="@/assets/angel_wings_black.png" alt="" />
        <div class="enter">
          <el-button type="text" @click="goToCollection()">Enter</el-button>
          <el-button type="text">Settings</el-button>
          <el-button type="text" @click="showExitModal">Exit</el-button>
        </div>
      </el-col>
    </el-row>

    <el-row class="bottom-content">
      <el-col :span="12" class="head">
        <p>Tags</p>
        <p>#Fairy #8bit</p>
      </el-col>
      <el-col :span="12" class="bottom">
        <p>Contact</p>
        <p><b>Email:</b>Eradonng@gmail.com</p>
        <p><b>IG:</b>xiaoyangyu_</p>
        <p><b>BiliBili:</b>LumineCommunity</p>
      </el-col>
    </el-row>

    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <p>{{ modalText }}</p>
      </div>
    </div>
  </div>
</template>


<style lang="less" scoped>
.main {
  background-color: #fff9f9;
  background-size: cover;
  min-height: 100vh;
  padding: 45px;
  overflow: hidden;
  font-size: 18px;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .head {
      margin-bottom: 20px;
    }
    .bottom {
      margin-top: 20px;
    }
  }

  .poem {
    font-weight: 600;
    font-size: 10px;
    text-align: left;
    p {
      text-align: left;
      white-space: normal;
      overflow-wrap: break-word;
      word-wrap: break-word;
    }
  }

  .bottom-content {
    margin-top: 45px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .head {
      margin-bottom: 20px;
    }
    .bottom {
      margin-top: 20px;
    }
  }

  .logo {
    margin-top: 135px;
    text-align: center;

    img {
      margin: 10px;
      width: 100%;
      max-width: 125px;
      height: auto;
      background: linear-gradient(to bottom right, #ffffff, #929090f6);
      box-shadow: 0 4px 10px rgba(48, 65, 52, 0.425);
      transform: scale(1.1);
      &:hover {
        display: inline-block;
        transform: translateZ(0);
        backface-visibility: hidden;
        -moz-osx-font-smoothing: grayscale;
        transition-duration: 0.5s;
        transition-property: transform;
      }
    }
  }

  .enter {
    margin-top: 20px;
    color: #6d6d6d;
    display: flex;
    flex-direction: column;
    align-items: center;

    .el-button {
      width: 100%;
      max-width: 150px;
      font-size: 32px;
      margin-bottom: 15px;
      cursor: pointer;
      position: relative;

      &:hover::after {
        visibility: visible;
        transform: scaleX(1);
      }

      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        bottom: -2px;
        left: 0;
        background-color: #999;
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.3s ease-in-out;
      }
    }
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    

    .modal-content {
      margin: 0 auto;
      vertical-align:center;

      background: url(@/assets/pixel-chat.png) no-repeat center center;
      background-size: 250px;

      line-height: 50px;
      color: #000000;
      padding: 20px;
      border-radius: 8px;
      text-align: center;
      font-size: 20px;
      max-width: 500px;
      width: 100%;
      height: 100px;
    }
  }
}
</style>

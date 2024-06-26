<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToCollection = () => {
  router.push('/collection')
}
</script>

<template>
  <div class="main">
    <!-- 内容 -->
    <el-row class="content">
      <el-col :span="12" class="head">
        <p>LumineCommunity</p>
        <p>EraDong.Soilder</p>
        <p>Appreciate</p>
      </el-col>
      <el-col :span="12" class="bottom">
        <p>Pixel Angel</p>
        <p>Blur Wings</p>
      </el-col>
    </el-row>
    


    <!-- 个人logo -->
    <el-row class="logo" justify="center">
      <el-col :span="12" xs="20" sm="16" md="12" lg="10" xl="8">
        <img src="@/assets/angel_wings.png" alt="">
        <img src="@/assets/angel_wings_black.png" alt="">
        <!-- 进入按钮 -->
        <div class="enter">
          <el-button type="text" @click="goToCollection()">Enter</el-button>
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

    justify-content: space-around; /* 垂直居中 */

    .head {
      margin-bottom: 20px;
    }
    .bottom {
      margin-top: 20px;
    }
  }

  .bottom-content {
    margin-top: 45px;
    display: flex;
    flex-direction: column;

    justify-content: space-around; /* 垂直居中 */

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
    .el-button {
      width: 100%;
      max-width: 150px;
      font-size: 32px;
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

  .oc {
    position: relative;
    img {
      position: absolute;
      top: 0;
      left: 15%;
      width: 100%;
      height: auto;
      max-width: 600px; /* 设置图片的最大宽度 */
    }
  }
}
</style>

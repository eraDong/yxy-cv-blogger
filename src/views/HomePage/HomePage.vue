<script setup>
import {
  School,
  Message,
  Clock,
  Phone,
  Management,
  CaretRight
} from '@element-plus/icons-vue'
</script>

<template>
  <div class="resume">
    <div class="left-column">
      <div class="avatar">
        <img src="@/assets/avatar-test.jpg" alt="Your Avatar" />
      </div>

      <h1>余晓洋</h1>
      <div class="contact-info">
        <p>
          <el-icon class="icon"><School /></el-icon>:陕西科技大学
        </p>

        <p>
          <el-icon class="icon"><Clock /></el-icon>:2021-2025
        </p>

        <p>
          <el-icon class="icon"><Management /></el-icon>:计算机科学与技术
        </p>

        <p>
          <a href="mailto:eraDonng@gmail.com"
            ><el-icon class="icon"><Message /></el-icon>:eraDonng@gmail.com</a
          >
        </p>

        <p>
          <el-icon class="icon"><Phone /></el-icon>:136-6929-3662
        </p>

        <p>
          <a href="https://github.com/eraDong"
            ><img
              class="github-logo"
              src="@/assets/github-mark.svg"
              alt=""
            />:eraDong</a
          >
        </p>
      </div>
    </div>

    <div class="right-column">
      <div class="content">
        <h2>技能特长</h2>
        <p>
          <el-icon class="dot"><CaretRight /></el-icon>
          熟练掌握JavaScript、HTML5、CSS3等前端语言，。。。
        </p>
        <p>
          <el-icon class="dot"><CaretRight /></el-icon>
          熟悉Vue、React等前端主流开发框架，。。。
        </p>
        <p>
          <el-icon class="dot"><CaretRight /></el-icon>
          HTTP
        </p>
        <p>
          <el-icon class="dot"><CaretRight /></el-icon>
          熟练使用Webpack
        </p>
        <p>
          <el-icon class="dot"><CaretRight /></el-icon>
          熟悉并掌握数据结构，清楚理解并能够实现各算法，包括哈希表、优先队列、二叉树模型、栈、排序算法、最短路算法、最小生成树算法、差分、二分查找算法等。
        </p>
        <p>
          <el-icon class="dot"><CaretRight /></el-icon>
          熟练使用git代码管理工具进行项目开发。
        </p>
        <p>
          <el-icon class="dot"><CaretRight /></el-icon>
          了解node.js可以
        </p>
      </div>

      <div class="horizontal-line"></div>

      <div class="content">
        <h2>项目经验</h2>
        <p>
          <el-icon class="dot"><CaretRight /></el-icon>
          123
        </p>
      </div>

      <div class="horizontal-line"></div>

      <div class="content">
        <h2>校园经历</h2>
        <h3>教育经历 陕西科技大学 2021-2023</h3>
        <p>计算机科学与技术 本科</p>
        <p>
          <el-icon class="dot"><CaretRight /></el-icon>
          GPA：3.75/5
        </p>
        <p>
          <el-icon class="dot"><CaretRight /></el-icon>
          相关课程：数据结构与算法、计算机组成、数据库概论、面向对象程序设计
        </p>

        <div class="horizontal-line"></div>

        <h3>竞赛经历 2021-2023</h3>

        <p>
          <el-icon class="dot"><CaretRight /></el-icon>
          2021年初次接触程序竞赛，并且踊跃报名组建队伍，2022年经过数月练习后，多次校内联赛名列前茅，校内比赛出线，获取参加省赛的机会，在2022年末也参加了ICPC网络赛，2023也参与了多次校内联赛，以及ICPC网络赛。
        </p>
        <p>
          <el-icon class="dot"><CaretRight /></el-icon>
          通过这两年的学习，我的编程能力获得了极大的进步，不仅如此ICPC是一个三人小组的比赛，在此期间，我的团队协作配合能力也得到了极大的加强。
        </p>

        <div class="horizontal-line"></div>

        <h3>科研经历 2022-2023</h3>
        <p>
          <el-icon class="dot"><CaretRight /></el-icon>
          123
        </p>

        <div class="horizontal-line"></div>

        <h3>获奖荣誉</h3>
        <p>
          <el-icon class="dot"><CaretRight /></el-icon>
          2023团体程序设计天梯赛 全国总决赛 团队三等奖
        </p>
        <p>
          <el-icon class="dot"><CaretRight /></el-icon>
          123
        </p>
        <p>
          <el-icon class="dot"><CaretRight /></el-icon>
          123
        </p>
        <p>
          <el-icon class="dot"><CaretRight /></el-icon>
          123
        </p>
        <p>
          <el-icon class="dot"><CaretRight /></el-icon>
          123
        </p>

        <div class="horizontal-line"></div>

        <h3>技能/证书/活动</h3>
        <p>
          <el-icon class="dot"><CaretRight /></el-icon>
          CET4 609分、CET6 537分
        </p>
        <p>
          <el-icon class="dot"><CaretRight /></el-icon>
          大学生英语竞赛 校内二等奖
        </p>
        <p>
          <el-icon class="dot"><CaretRight /></el-icon>
          "创程杯"机器人大赛巡航小车赛道 校内特等奖
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@primary-color: #333;
@secondary-color: #666;

.horizontal-line {
  border-top: 1px solid #ccc; /* 选择你喜欢的颜色 */
  margin: 20px 0; /* 控制线的间距 */
}

.icon {
  vertical-align: middle;
  font-size: 16px;
}

.dot {
  vertical-align: middle;
  color: #333;
  font-size: 13px;
}

.resume {
  display: flex;
  margin: auto;
  margin-top: 50px;
  width: 1440px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.left-column {
  flex: 1;
  padding: 15px;
  margin: 50px;
  .github-logo {
    width: 16px;
    height: 16px;
  }

  .avatar {
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
  }

  h1 {
    color: @primary-color;
    font-size: 16px;
    margin: 10px 0;
  }

  .contact-info {
    p {
      color: @secondary-color;
      font-size: 14px;
      margin: 5px 0;
    }
  }
}

.right-column {
  flex: 7;
  padding: 15px;
  padding-top: 20px;
  .content {
    h2 {
      color: @primary-color;
      font-size: 18px;
    }

    h3 {
      padding-top: 5px;
      color: @secondary-color;
      font-size: 16px;
      margin-left: 15px;
    }

    p {
      color: @secondary-color;
      font-size: 14px;
      margin: 10px 0;
      margin-left: 40px;
    }
  }
}
</style>

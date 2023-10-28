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
          熟练掌握JavaScript、HTML5、CSS3等前端语言，熟悉Javascript核心基础，掌握ES6常用语法，熟练使用JSON，Axios进行数据交互，熟悉原生BOM、DOM对象，会使用CSS3实现Flex布局，熟悉掌握Boostrap样式库。
        </p>
        <p>
          <el-icon class="dot"><CaretRight /></el-icon>
          熟练Vue、React等前端主流开发框架进行单页面应用开发，熟练使用Vue周边生态插件如Pinia、Vuex进行数据管理，Router进行路由切换，vite脚手架工具的配置和搭建，以及Element-plus等组件库。
          熟练掌握 React 以及相关技术栈（React / React-Native / Redux /
          React-Router / React-Navigation / Antd Design 等）。
        </p>
        <p>
          <el-icon class="dot"><CaretRight /></el-icon>
          可以书写规范的代码，熟练使用ESlint+Prettier规范并美化代码以及Husky优化Git工作流。
        </p>
        <p>
          <el-icon class="dot"><CaretRight /></el-icon>
          熟练使用Webpack对项目进行模块打包并了解其原理，以及熟练掌握Webpack的打包优化。
        </p>
        <p>
          <el-icon class="dot"><CaretRight /></el-icon>
          熟悉并掌握数据结构，清楚理解并能够实现各算法，包括哈希表、优先队列、二叉树模型、栈、排序算法、最短路算法、最小生成树算法、差分、二分查找算法等。
        </p>
        <p>
          <el-icon class="dot"><CaretRight /></el-icon>
          熟练使用git代码管理工具，可以熟练使用git代码管理工具进行项目的版本控制，便于项目开发。
        </p>
        <p>
          <el-icon class="dot"><CaretRight /></el-icon>
          了解node.js，Java等后端语言，可以使用node.js简易开发增、删、改、查接口，可以使用node.js搭载服务端，应用apifox对项目进行测试。
        </p>
      </div>

      <div class="horizontal-line"></div>

      <div class="content">
        <h2>项目经验</h2>
        <p>
          <el-icon class="dot"><CaretRight /></el-icon>
          cv-blogger博客
          <br />
          项目介绍：项目基于vue3部署了简历静态页面。
        </p>
        <p>
          <el-icon class="dot"><CaretRight /></el-icon>
          RPG-like论坛
          项目介绍：该项目基于vue3+node.js+elementPlus+vite+pinia+axios+eslint+prettier实现了用户注册，版块分区，帖子发布、删除、编辑、搜索，帖子按热门度排序、推荐，论坛编年史百科等功能。
          <br />
          <br />
          核心功能：
          <br />

          1.使用node.js部署服务端配合axios通过JSON格式的数据交互，实现帖子的增删改查功能。
          <br />
          2.利用Vue的组件功能，分模块开发，以及通过eslint规范代码格式，代码简洁易于维护。
          <br />
          3.使用快速排序算法对帖子的推荐程度以及观看程度进行排序回显，达到推荐帖子的效果。
          <br />
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
          大一入学一个月后接触算法竞赛，并通过校赛代表学校参加acm陕西省赛，截止目前已获得过团体设计天梯赛国家三等奖等奖项，并有多次acm经历。目前跟随指导老师进行科研项目。
        </p>
        <!-- 
        <div class="horizontal-line"></div> -->

        <!-- <h3>科研经历 2022-2023</h3>
        <p>
          <el-icon class="dot"><CaretRight /></el-icon>
          [待填]
        </p> -->

        <div class="horizontal-line"></div>

        <h3>获奖荣誉</h3>
        <p>
          <el-icon class="dot"><CaretRight /></el-icon>
          2023团体程序设计天梯赛 全国总决赛 团队三等奖
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
  margin-bottom: 50px;
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

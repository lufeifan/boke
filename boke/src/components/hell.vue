<template>
  <div id="home">
    <el-container class="con">
      <el-header class="topheader">
        <Topheader></Topheader>
      </el-header>

      <el-container>
        <div class="aside_left"></div>

        <el-aside class="aside_left">
          <div class="left_flexd">
            <Asideleft></Asideleft>
            <!-- <button @click="back">
              <i class="el-icon-back back">测试</i>
            </button> -->
          </div>
        </el-aside>

        <el-main>
          <keep-alive v-if="$route.meta.keepAlive">
            <router-view></router-view>
          </keep-alive>
          <router-view v-if="!$route.meta.keepAlive"></router-view>
        </el-main>

        <el-aside class="aside_right" width="200px">
          <Asideright></Asideright>
          <link rel="stylesheet" href="//at.alicdn.com/t/font_1467101_j4hdn7rmux.css" />
          <div class="rocket" v-show="showBackTop">
            <a href="javascript: void(0)" @click="backTop">
              <i class="iconfont icon-fanhuidingbu1"></i>
            </a>
          </div>
        </el-aside>
      </el-container>

      <!-- <el-footer></el-footer> -->
    </el-container>
  </div>
</template>

<script>
import Asideright from "@/components/asideright";
import Asideleft from "@/components/asideleft";
import Topheader from "@/components/topheader";

export default {
  name: "Home",

  data() {
    return {
      showBackTop: true
    };
  },
  computed: {},
  components: {
    Asideleft,
    Topheader,
    Asideright
  },
  computed: {},
  methods: {
    back() {
      $(".back").click(function(e) {});
    },
    backTop: function() {
      console.log(document.documentElement.scrollTop + document.body.scrollTop);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.con {
  height: 100vh;
}
.el-header,
.el-footer {
  background-color: #909399;
  color: #eee;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: white;
  /* background-color: #d3e8d7; */
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  /* background-color: white; */
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.topheader {
  display: none;
}
.rocket {
  position: fixed;
  right: 30px;
  bottom: 80px;
  /* box-shadow: 0 0 5px rgb(189, 163, 163); */
  line-height: normal;
}
.rocket i {
  font-size: 50px;
  display: inline-block;
}
.left_flexd {
    width: 250px;
  position: fixed;
  top: 30px;
  z-index: 2;
  height: 600px;
  background: url("https://cdn.pixabay.com/photo/2018/02/12/23/55/hud-3149462__340.png");
  box-shadow: 0 3px 5px rgb(175, 175, 175);
}


@media only screen and (max-width: 1200px) {
  .aside_right {
    display: none;
  }
}
@media only screen and (max-width: 980px) {
  .aside_left {
    display: none;
  }
  .topheader {
    display: inline;
  }
}
</style>

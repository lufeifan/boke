<template>
  <div class="asideright">
    <link rel="stylesheet" href="//at.alicdn.com/t/font_1467097_kudnzbbytq.css" />
    <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
      <i class="iconfont icon-iconmore"></i>
    </el-button>

    <el-drawer :visible.sync="drawer" :direction="direction" size="20%">
      <div class="content">
        <router-link to="/login">管理员</router-link>
      </div>
    </el-drawer>
  </div>
</template>

<script>

export default {
  name: "asideright",
  data() {
    return {
      drawer: false,
      direction: "rtl"
    };
  },
  // components: {
  //   Aplayer
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  line-height: normal;
}
.el-button {
  position: relative;
  right: -40px;
  top: 10px;
  /* background-color: rgb(119, 209, 152); */
  
}
a {
  /* text-decoration: none; */
  margin-left: 20px;
}
.content {
  text-align: center;
}
</style>

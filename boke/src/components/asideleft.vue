<template>
  <div class="asideleft">
    <div>
      <!-- 头像 -->
      <el-avatar :size="100" :src="circleUrl"></el-avatar>
    </div>
    <!-- 主要功能 -->
    <el-col :span="24">
      <el-menu router :default-active="$route.path" class="el-menu-vertical-demo">
        <el-menu-item index="/home">首页</el-menu-item>
        <!-- <el-menu-item index="/home">分类</el-menu-item> -->
      </el-menu>
      
    </el-col>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: "asideleft",
  data() {
    return {
      // 头像
      circleUrl:
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3209370120,2008812818&fm=26&gp=0.jpg"
    };
  },
   methods: {
    
   }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-avatar {
  margin: 20px auto -30px auto;
}
.block {
  text-align: center;
}
.el-menu-item {
  background-color: rgb(45, 74, 105);
  color: white;
}
.el-menu-item:hover {
  background-color: bisque;
  /* animation:myfirst 2s; */
  transform: translateX(-10px)
}

</style>

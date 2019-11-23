<template>
  <div class="topheader">
    <link rel="stylesheet" href="//at.alicdn.com/t/font_1467097_kudnzbbytq.css" />
    <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
      <i class="iconfont icon-iconmore"></i>
    </el-button>

    <el-drawer :visible.sync="drawer" :direction="direction" :show-close="false">
      <el-menu default-active="1" class="el-menu-vertical-demo">
        <el-menu-item v-for="(item,index) in tabs" :key="index">
          <!-- <i class="el-icon-setting"></i> -->
          <router-link :to="{name: item.name}" tag="div">
            <!-- <span class="bg-box" @click.stop="goAnchor(item.name,index)"> -->
            <span class="span-box">
              <span class="r-t">{{ item.render }}</span>
            </span>
            <!-- </span> -->
          </router-link>
        </el-menu-item>
      </el-menu>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: "topheader",
  data() {
    return {
      drawer: false,
      tabs: [
        { name: "home", render: "首页", icon: "icon-home" },
        { name: "articles", render: "文章", icon: "icon-book" }
        // { name: "msgboard", render: "留言", icon: "icon-messages" },
        // { name: "life", render: "生活", icon: "icon-images" }
      ],
      direction: "ttb"
    };
  },
  methods: {},
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topheader {
  float: left;
}
</style>

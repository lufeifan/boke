<template>
  <div id="detail">
    <el-page-header @back="goBack" content="详情页面"></el-page-header>
    <div class="con">
      <h1 class="title">{{id.title}}</h1>
      <!-- <h1 v-html="id.name" class="title">{{id.name}}</h1> -->
      <div style="text-indent:2em">{{id.body}}</div>
      <!-- <div class="body" v-html="id.body" style="text-indent:2em">{{id.body}}</div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "detail",
  data() {
    return {
      id: 0
    };
  },
  props: ["tabs"],
  created() {
    this.id = this.$route.params.id;
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  },
  methods: {
    goBack() {
      this.$router.push({ path: "/home" });
    },
    showdatd() {
      console.log(this.tabs);
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  line-height: 30px;
}
#detail{
  border: 1px solid  rgb(175, 175, 175);
  background-color: #E2DBBE;
}
.con {
  margin: 10px 5px;
  text-align: left;
  line-height: 30px;
}
.title {
  text-align: center;
}

</style>

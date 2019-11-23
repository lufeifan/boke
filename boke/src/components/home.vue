<template>
  <div class="home">
    <!-- <el-row>
    <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">-->
    <el-card :body-style="{ padding: '0px' }" v-for="(blog,index) in showblogs" :key="index">
      <div class="im"  @mouseenter="hover(index)" @mouseleave="leave(index)">
        <img
          :src="imgurl[index]"
          class="image"
        />
        <div class="body">{{blog.body}}</div>
      </div>
      <div style="padding: 14px;">
        <router-link :to="{name:'detail', params:{id:blog}}">{{blog.title}}</router-link>
      </div>
    </el-card>
    <!-- </el-col>
    </el-row>-->
    <!-- <div class="art" v-for="(blog,index) in showblogs" :key="index">
        <router-link :to="{name:'detail', params:{id:blog}}">{{blog.title}}</router-link>
        <div class="body">{{blog.body}}</div>
    </div>-->
    <el-pagination
      @current-change="handleCurrentChange"
      background
      layout="prev, pager, next"
      :total="totalCount"
    ></el-pagination>
  </div>
</template> 

<script>
import $ from 'jquery'
import { async } from "q";
export default {
  name: "home",
  data() {
    return {
      imgurl:["https://cdn.pixabay.com/photo/2019/11/07/08/40/dog-4608266__340.jpg",
      "https://cdn.pixabay.com/photo/2019/09/16/17/28/cat-4481566__340.jpg",
      "https://image.shutterstock.com/image-photo/businessman-hand-working-on-laptop-260nw-336698507.jpg",
      "https://image.shutterstock.com/image-vector/touch-futureinterface-technology-future-user-260nw-503854255.jpg",
      "https://cdn.pixabay.com/photo/2017/12/28/04/15/hand-3044387__340.jpg",
      "https://cdn.pixabay.com/photo/2019/11/02/20/18/fog-4597348__340.jpg",
      "https://cdn.pixabay.com/photo/2019/11/12/21/12/new-york-4622056__340.jpg",
      "https://cdn.pixabay.com/photo/2019/11/12/07/52/dominican-republic-4620366__340.jpg",
      "https://cdn.pixabay.com/photo/2019/11/11/16/49/la-4618922__340.jpg",
      "https://cdn.pixabay.com/photo/2019/11/11/15/32/coffee-4618705__340.jpg"],
      msg: "传递给父组件的值",
      blogs: [],
      showblogs: [],
      totalCount: 1
    };
  },
  async created() {
    const data = await this.$http.get("http://jsonplaceholder.typicode.com/posts");
    // const data = await this.$http.get("/test");
    this.blogs = data.data;
    this.showblogs = data.data.slice(0, 10);
    this.totalCount = data.data.length;
    // console.log(data.data.length);
    //   });
  },
  methods: {
    hover:function(index){
      $('.body').eq(index).show();
      $('.image').eq(index).css({"filter": "blur(10px)"})
    },
    leave(index){
      $('.body').hide();
      $('.image').css({"filter": "blur(0px)"})
    },
    goto(item) {
      this.$router.push({ path: "/detail", query: { id: item.id } });
      console.log(item);
      
    },
    handleCurrentChange(val) {
      console.log(val);
      this.showblogs = this.blogs.slice((val - 1) * 10, val * 10);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

* {
  line-height: 30px;
}
.el-card {
  margin: 15px;
  position: relative;
}
.el-card:hover{
  transform: translateY(-10px);
}
.im {
  position: relative;
}
.image {
  width: 80%;
  height: 300px;
}

.body {
  display: none;
  color: white;
  font-size: 25px;
  height: 280px;
  position: absolute;
  top: 0;
  left: 100px;
  right: 100px;
  text-indent: 2em;
  margin: 10px;
  text-align: left;
  z-index: 2;
  overflow: hidden;
  /* border: 1px solid rebeccapurple; */
}
.art {
  margin-left: 2px;
  width: 99%;
  height: 250px;
  margin-top: 15px;
  overflow: hidden;
  background: url("/static/img/mainBg2.jpg") 0 0 no-repeat;
  background-size: 100% 100%;
}
.art:hover {
  transform: translate(-5px, -10px);
  transition: 0.25s;
  box-shadow: 10px 10px 5px #c4b1b1;
}
a {
  text-decoration: none;
  font-size: 20px;
}
.read {
  border: 1.5px solid black;
  padding: 5px;
  font-size: 16px;
  background-color: #eeeeee;
}
/* .router-link-active {
  text-decoration: none;
} */

.el-pagination {
  margin-top: 20px;
}
</style>

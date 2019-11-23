<template>
  <div class="login">
    <el-card header="欢迎使用" class="login-card">
      <el-form @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="model.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      model: {}
    };
  },
  methods: {
    async login() {
      alert("登录账号admin,登录密码123456")
      const res = await this.$http.post("login", this.model);
      sessionStorage.token = res.data.token;
      this.$message({
        type: "success",
        message: "登录成功!"
      });
      this.$router.push("/admin");
    }
  }
};
</script>

<style scoped>
.login{
  position:absolute;
  height: 100vh;
  width: 100%;
  background: url("https://cdn.pixabay.com/photo/2018/05/04/17/05/technology-3374447__340.jpg") no-repeat 0 0;
  background-size: 100% 100%;
}
.login-card {
  width: 25rem;
  margin: 10rem auto;
  /* background-color: blue;
  border: none; */
}
</style>
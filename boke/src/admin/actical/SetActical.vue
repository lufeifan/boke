<template>
  <div class="home">
    <el-main>
      <el-form :model="model" ref="model" :rules="rules" label-width="80px">
        <el-form-item label="文章标题" prop="name">
          <el-input v-model="model.name"></el-input>
        </el-form-item>

        <el-form-item label="文章内容" prop="body">
          <vue-editor v-model="model.body" useCustomImageHandler @image-added="handleImageAdded"></vue-editor>
        </el-form-item>

        <el-button
          type="primary"
          native-type="submit"
          @click.native.prevent="submitForm('model')"
        >保存</el-button>
      </el-form>
    </el-main>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  name: "home",
  data() {
    return {
      model: {},
      content: "<h6>Some initial content</h6>",
      rules: {
        name: [{ required: true, message: "请输入文章标题", trigger: "blur" }],
        body: [{ required: true, message: "请输入文章内容", trigger: "blur" }]
      }
    };
  },
  props: {
    id: {
      type: String
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.save();
        } else {
          window.console.log("error submit!!");
          return false;
        }
      });
    },
    async save() {
      if (this.id) {
        await this.$http.put(`/categories/${this.id}`, this.model);
        this.$router.push("/acticalist");
        this.$message({
          type: "success",
          message: "修改成功!"
        });
      } else {
        await this.$http.post("/categories", this.model);
        this.$router.push("/acticalist");
        this.$message({
          type: "success",
          message: "创建成功!"
        });
      }
    },
    async fetch() {
      const res = await this.$http.get(`/categories/${this.id}`);
      this.model = res.data;
    },
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      var formData = new FormData();
      window.console.log(file.size)
      formData.append("image", file);
      window.console.log(formData)
      const res = await this.$http.post("/uploads", formData);
      window.console.log(res);
      Editor.insertEmbed(cursorLocation, "image", res.data.url);
      resetUploader();
    }
  },
  created() {
    this.id && this.fetch();
  },
  components: {
    // HelloWorld
    VueEditor
  }
};
</script>

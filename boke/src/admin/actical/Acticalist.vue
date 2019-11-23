<template>
  <div class="about">
    <!-- <el-main> -->
      <el-table :data="items">
        <el-table-column prop="_id" label="ID" width="140"></el-table-column>
        <el-table-column prop="name" label="标题" width="120"></el-table-column>
        <el-table-column prop="body" label="内容"></el-table-column>
        <el-table-column fixed="right" label="操作" width="140">
          <template slot-scope="scope">
            <el-button @click="remove(scope.row)" type="text" size="small">删除</el-button>
            <el-button
              type="text"
              size="small"
              @click="$router.push(`setActical/${scope.row._id}`)"
            >编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    <!-- </el-main> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("/categories");
      this.items = res.data;
    },
    async remove(row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          await this.$http.delete(`/categories/${row._id}`);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.fetch();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },
  created() {
    this.fetch();
  }
};
</script>

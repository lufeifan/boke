<template>
  <div class="articles">
    12421
  </div>
</template>

<script>
export default {
  name: "articles",
  data() {
    return {
      msg: "page",
      tabs: [
        { name: "home", render: "首页"},
        { name: "article", render: "文章"},
        { name: "msgboard", render: "留言"},
        { name: "life", render: "生活"}
      ]
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

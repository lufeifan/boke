<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Asideright from "@/components/asideright";
import Asideleft from "@/components/asideleft";
import Topheader from "@/components/topheader";

export default {
  name: "App",

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
    // "v-aside": Aside,
    // "v-article": Article,
    // "v-detail": Detail
  },
  computed: {},
  methods: {
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
body,
html {
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

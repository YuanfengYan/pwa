<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  mounted() {
    console.log(213);
    this.getList()
  },
  methods: {
    getList() {
      this.$http.get("/api/facade/xxxx",{}).then(res=>{
        console.log("res")
      }).catch(err=>{
        console.log(err)
      })
    },
  }
};
</script>

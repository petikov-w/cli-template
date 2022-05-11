<template>
  <div class="wrapper">
    <Header></Header>
    <div class="wrapper-content">
        <div class="container">
           <router-view></router-view>
        </div>
      </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {contentHome} from "@/_config";

export default {
    components: { Header, Footer},
  data() {
    return {
      content: contentHome
    }
  },
  }
</script>

<style lang="scss">

</style>

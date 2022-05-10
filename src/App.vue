<template>
  <div class="wrapper">
    <Header></Header>
    <div class="wrapper-content">
        <div class="container">
          <h1 style="margin: 20px 0 20px 0; color: green;
                     font-size: 1.3rem; font-weight: 600">{{ content.article01.title }}</h1>
          <p>{{ content.article01.text }}</p>
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

<template>
  <h1 style="margin: 20px 0 20px 0; color: green;
                     font-size: 1.3rem; font-weight: 600">{{ content.article01.title }}</h1>
  <p>{{ content.article01.text }}</p>

</template>

<script>
import {contentAbout} from "@/_config";
export default {
  name: "AboutPage",
  // metaInfo: {
  //   title: 'My Example App',
  //   titleTemplate: '%s - Yay!',
  //   htmlAttrs: {
  //     lang: 'en',
  //     amp: true
  //   }
  // },
  data() {
    return {
      content: contentAbout
    }
  },
  content: contentAbout
}
</script>

<style scoped>

</style>
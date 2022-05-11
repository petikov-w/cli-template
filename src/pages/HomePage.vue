<template>
  <h1 style="margin: 20px 0 20px 0; color: green;
                     font-size: 1.3rem; font-weight: 600">{{ content.article01.title }}</h1>
  <p>{{ content.article01.text }}</p>
</template>

<script>
import {contentHome} from "@/_config";
export default {
  name: "HomePage",
  data() {
    return {
      content: contentHome
    }
  },

}
</script>

<style scoped>

</style>
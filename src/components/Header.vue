<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-content">
        <router-link class="navbar-logo" to="/">logo</router-link>
        <ul class="navbar-list">
          <li class="navbar-item" v-for="link in links" :key="link.alias" >
            <router-link class="navbar-link" :to="link.url">{{ link.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import {listNavMenu} from "@/_config"
export default {
  name: 'Header-m',
  data() {
    return {
      links: listNavMenu,
    }
  }
}

</script>

<style lang="scss" scoped>

</style>
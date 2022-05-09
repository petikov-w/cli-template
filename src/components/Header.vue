<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-content">
        <a class="navbar-logo" href="/">logo</a>
        <ul class="navbar-list">
          <li class="navbar-item" v-for="link in links" :key="link.alias" >
            <a class="navbar-link" :href="link.url">{{ link.title }}</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header-m',
  data() {
    return {
      links: [
        {
          title: "Home",
          alias: "home",
          url: "/"
        },
        {
          title: "About",
          alias: "about",
          url: "/about"
        }
        ]
    }
  }
}

</script>

<style lang="scss" scoped>

</style>
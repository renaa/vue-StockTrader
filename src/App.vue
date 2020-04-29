<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <div class="my-widget">fdf</div>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  components: {
    appHeader: Header
  }

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  body {
    padding: 8px
  }

  // Import Bootstrap and BootstrapVue source SCSS files
  @import '~bootstrap/scss/bootstrap.scss';
  @import '~bootstrap-vue/src/index.scss';

  // General style overrides and custom classes
  body {
    margin: 0;
  }

  .my-widget {
    color: var(--danger);
  }
</style>

<template>
  <div>
    <b-navbar class="custom noselect" toggleable="sm" type="dark" variant="info">
      <b-navbar-brand to="/">StockTrader</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/portfolio">Portfolio</b-nav-item>
          <b-nav-item to="/stocks">Stocks</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">End Day</b-nav-item>
          <b-nav-item-dropdown text="Save & Load" right>
            <b-dropdown-item href="#">Save</b-dropdown-item>
            <b-dropdown-item href="#">Load</b-dropdown-item>
          </b-nav-item-dropdown>

          <!-- <b-nav-item-dropdown right>
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>-->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped lang="scss">

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */
}
.custom {
  // https://www.gradient-animator.com/
  background: linear-gradient(270deg, #00eeb0, #ad00ee, #eeb400);
  background-size: 600% 600%;

  -webkit-animation: custom 30s ease infinite;
  -moz-animation: custom 30s ease infinite;
  animation: custom 30s ease infinite;

  @-webkit-keyframes custom {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @-moz-keyframes custom {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @keyframes custom {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
}
</style>

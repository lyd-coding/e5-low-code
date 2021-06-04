<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  watch: {
    "$store.state.theme": (val) => {
      if(val ==='dark') {
        document.body.setAttribute("theme-mode", val);
      } else {
        document.body.removeAttribute("theme-mode")
      }
    },
  },
  mounted() {
    if(this.$store.state.theme === 'dark') {
      document.body.setAttribute("theme-mode", this.$store.state.theme);
    } 
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

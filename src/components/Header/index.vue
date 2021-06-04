<template>
  <div class="e5-header-container">
    <div class="e5-header-logo">E5-Logo</div>
    <div class="e5-header-theme">
      <Theme :theme="theme" @change="handleChange"></Theme>
    </div>
  </div>
</template>
<script>
import Theme from "./Theme";
import { mapActions } from "vuex";
export default {
  components: {
    Theme,
  },
  data() {
    return {
      theme: this.$store.state.theme,
    };
  },
  watch: {
    "$store.state.theme"(val) {
      this.theme = val;
    },
  },
  methods: {
    handleChange() {
      this.changeTheme();
    },
    ...mapActions(["changeTheme"]),
  },
};
</script>
<style lang="scss" scoped>
$text-color: var(--text-color);
.e5-header-container {
  height: 80px;
  border-bottom: 1px solid var(--border-color);
  padding: 0 30px;
  box-sizing: border-box;
  position: relative;
  line-height: 80px;
  user-select: none;
  color: var(--text-color);
  .e5-header-logo {
    font-size: 24px;
    font-weight: 700;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    float: left;
  }
  .e5-header-theme {
    height: 100%;
    display: flex;
    align-items: center;
    float: right;
  }
}
</style>

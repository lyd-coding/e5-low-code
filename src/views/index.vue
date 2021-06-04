<template>
  <div class="e5-page">
    <Header></Header>
    <Container></Container>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Container from '@/components/Container'
export default {
  components: {
    Header,
    Container
  },
};
</script>
<style lang="scss" scoped>
.e5-container {
  height: 100vh;
  color: var(--text-color);
}
</style>

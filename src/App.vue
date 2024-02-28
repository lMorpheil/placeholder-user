<template>
  <the-header></the-header>
  <the-board></the-board>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheBoard from '@/components/TheBoard.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheBoard,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.row {
  max-width: 1466px;
  padding-right: 50px;
  padding-left: 50px;
  box-sizing: content-box;
}
</style>

<script>
import TheLogo from '@/components/TheLogo.vue';

export default {
  name: 'TheHeader',
  components: { TheLogo },
};
</script>

<template>
  <header :class="$style.header">
    <div class="row">
      <div :class="$style['header-grid']">
        <the-logo />
        <div :class="$style['header-title']">Пользователь</div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" module>
.header {
  padding-top: 50px;
  padding-bottom: 26px;

  &-grid {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  &-title {
    color: rgb(51, 51, 51);
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0;
    text-align: left;
  }
}
</style>

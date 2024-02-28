<script>
export default {
  name: 'ThePreviews',
  props: {
    user: Object,
    active: Boolean,
  },
  computed: {
    isActive() {
      return this.active;
    },
  },
};
</script>

<template>
  <div :class="[$style.previews, {[$style.active]: isActive }]">
    <img :class="$style['previews-avatar']" src="@/assets/images/avatar.png"
         alt="аватар пользователя"
    />
    <div :class="$style['previews-wrapper']">
      <div :class="$style['previews-name']">{{ user.username }}</div>
      <div :class="$style['previews-email']">{{ user.email }}</div>
    </div>
  </div>
</template>

<style lang="scss" module>
.previews {
  display: flex;
  align-items: flex-start;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  background-color: rgb(255, 255, 255);
  max-width: 240px;
  overflow: hidden;
  cursor: pointer;

  &.active {
    .previews-wrapper {
      background-color: rgb(224, 224, 224);
    }
  }

  &-avatar {
    flex: 0 0 70px;
  }

  &-wrapper {
    flex-grow: 1;
    padding: 15px;
    align-self: stretch;
  }

  &-name {
    color: rgb(51, 51, 51);
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
    letter-spacing: 0;
    text-align: left;
  }

  &-email {
    color: rgb(118, 120, 125);
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0;
    text-align: left;
    margin-top: 5px;
  }
}
</style>

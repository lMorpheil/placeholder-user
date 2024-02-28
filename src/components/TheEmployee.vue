<script>
export default {
  name: 'TheEmployee',
  props: {
    user: Object,
  },
};
</script>

<template>
  <div :class="$style.employee">
    <img src="@/assets/images/user.png" alt="user photo">
    <div :class="$style['employee-info']">
      <div :class="$style['employee-name']">
        {{ user.name }}
      </div>
      <div>
        <span>email:</span> {{ user.email }}
      </div>
      <div>
        <span>phone:</span> {{ user.phone }}
      </div>
      <div :class="$style['employee-self']">
        <span>О себе:</span>
        <div :class="$style['employee-description']">
          {{ user.website }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.employee {
  display: flex;
  align-items: flex-start;

  &-info {
    margin-left: 60px;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0;

    span {
      font-weight: 600;
      font-size: 14px;
      color: rgb(0, 0, 0);
    }

    > * {

      &:not(:first-child) {
        margin-top: 10px;
      }
    }
  }

  &-name {
    color: rgb(0, 0, 0);
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;
    letter-spacing: 0;
  }

  &-self {
    margin-top: 20px;
  }

  &-description {
    margin-top: 25px;
  }
}
</style>

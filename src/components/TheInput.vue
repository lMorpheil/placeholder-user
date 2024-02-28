<script>
export default {
  name: 'TheInput',
  props: {
    text: String,
  },
  emits: ['update:text'],
  methods: {
    onInput(ev) {
      this.$emit('update:text', ev.target.value);
    },
  },
};
</script>

<template>
  <label :class="$style.input" for="1">
    <span :class="$style['input-label']">
      <slot></slot>
    </span>
    <input
      id="1"
      :class="$style['input-field']"
      type="text"
      placeholder="Введите Id или имя"
      :value="text"
      @input="onInput"
    />
  </label>
</template>

<style lang="scss" module>
.input {
  &-label {
    color: rgb(51, 51, 51);
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;
    letter-spacing: 0;
    text-align: left;
  }

  &-field {
    display: block;
    margin-top: 22px;
    color: rgb(118, 120, 125);
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0;
    padding: 16px;
    border: 1.5px solid rgb(233, 236, 239);
    border-radius: 8px;
  }
}
</style>

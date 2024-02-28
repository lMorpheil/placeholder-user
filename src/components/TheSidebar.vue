<script>
import { mapGetters } from 'vuex';
import TheInput from '@/components/TheInput.vue';
import ThePreviews from '@/components/ThePreviews.vue';
import ThePreloader from '@/components/ThePreloader.vue';

export default {
  name: 'TheSidebar',
  components: {
    ThePreviews,
    TheInput,
    ThePreloader,
  },
  data() {
    return {
      search: '',
    };
  },
  computed: {
    ...mapGetters([
      'users',
      'countUsers',
      'activeId',
      'isFetching',
    ]),
  },
  watch: {
    search() {
      this.$store.dispatch('addUsers', this.search);
    },
  },
  methods: {
    activateUser(id) {
      this.$store.commit('activateUser', id);
    },
    active(index) {
      return index === this.activeId;
    },
  },
};
</script>

<template>
  <aside :class="$style.sidebar">
    <the-input v-model:text.trim="search">Поиск сотрудников</the-input>
    <div :class="$style['sidebar-title']">Результаты</div>
    <div :class="$style['sidebar-result']">
      <the-preloader v-if="isFetching"></the-preloader>
      <template v-else-if="countUsers">
        <the-previews
          v-for="user in users"
          v-bind:user="user"
          :active="active(user.id)"
          :key="user.id"
          @click="activateUser(user.id)"
        ></the-previews>
      </template>
      <span v-else>ничего не найдено</span>
    </div>
  </aside>
</template>

<style module lang="scss">
.sidebar {
  border-right: 1px solid rgb(222, 222, 221);
  padding: 27px 36px 27px 20px;

  &-title {
    color: rgb(51, 51, 51);
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;
    letter-spacing: 0;
    text-align: left;
    margin-top: 22px;
  }

  &-result {
    color: rgb(118, 120, 125);
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0;
    text-align: left;
    margin-top: 10px;
    > * {

      &:not(:first-child) {
        margin-top: 18px;
      }
    }
  }
}
</style>

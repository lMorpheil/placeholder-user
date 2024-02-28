<script>
import TheSidebar from '@/components/TheSidebar.vue';
import TheEmployee from '@/components/TheEmployee.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'TheBoard',
  components: {
    TheSidebar,
    TheEmployee,
  },
  computed: {
    ...mapGetters(['activeUser']),
  },
};
</script>

<template>
  <div :class="$style.board">
    <div class="row" :class="$style.row">
      <div :class="$style['board-body']">
        <the-sidebar></the-sidebar>
        <div :class="$style['board-employee']">
          <the-employee
            v-if="activeUser"
            :class="$style['board-top']"
            :user="activeUser"
          ></the-employee>
          <span v-else>Выберите сотрудника, чтобы посмотреть его профиль</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.board {
  height: 100%;
  padding-bottom: 50px;

  .row {
    height: 100%;
  }

  &-body {
    display: flex;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    background-color: rgb(253, 253, 253);
  }

  &-top {
    align-self: flex-start;
    width: 100%;
  }

  &-employee {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 0 auto;
    color: rgb(118, 120, 125);
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0;
    text-align: left;
    padding: 30px 20px;
  }
}
</style>

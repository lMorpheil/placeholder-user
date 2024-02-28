import { createStore } from 'vuex';

export default createStore({
  state: {
    users: [],
    id: null,
    preloader: false,
  },
  getters: {
    users: ({ users }) => users,
    countUsers: ({ users }) => users.length,
    isFetching: ({ preloader }) => preloader,
    activeId: ({ users, id }) => (id || users[0].id),
    activeUser: ({ users }, getters) => users.filter((el) => el.id === getters.activeId)[0],
  },
  mutations: {
    users(state, item) {
      state.users = item;
    },
    activateUser(state, id) {
      state.id = id;
    },
    setFetching(state, status) {
      state.preloader = status;
    },
  },
  actions: {
    addUsers({ commit }, payload) {
      function debounce(func, delay) {
        let timerId;
        commit('setFetching', true);
        return function (...args) {
          clearTimeout(timerId);

          timerId = setTimeout(() => {
            func(...args);
          }, delay);
        };
      }
      async function getUsers() {
        try {
          const queryId = payload.split(',')
            .filter((el) => parseInt(el, 10))
            .map((el, i) => (i === 0 ? `?id=${el.trim()}` : `&id=${el.trim()}`))
            .join('');
          let users = [];
          let responseDataId = [];
          let responseDataUsername = [];
          if (queryId.trim()) {
            const responseId = await fetch(
              `https://jsonplaceholder.typicode.com/users${queryId}`,
            );
            responseDataId = await responseId.json();

            users.push(...responseDataId);
          }
          const queryName = payload.split(',')
            .filter((el) => Number.isNaN(parseInt(el, 10)))
            .map((el, i) => (i === 0 ? `?username=${el.trim()}` : `&username=${el.trim()}`))
            .join('');
          if (queryName.trim()) {
            const responseUsername = await fetch(
              `https://jsonplaceholder.typicode.com/users${queryName}`,
            );
            responseDataUsername = await responseUsername.json();
            users = users.concat(responseDataUsername.filter((item) => !users.find(
              (el) => el.id === item.id,
            )));
          }
          commit('users', users);
          commit('setFetching', false);
        } catch (e) {
          console.error(e.message);
        }
      }

      const debouncedFunction = debounce(getUsers, 1000);
      debouncedFunction();
    },
  },
  modules: {},
  strict: process.env.MODE_ENV !== 'production',
});

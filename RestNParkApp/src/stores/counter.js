import { createStore } from 'vuex'
import authModule from './auth/index.js';
import userDataModule from './userData/index.js';
import createPersistedState from 'vuex-persistedstate'


const store = createStore({
  modules: {
     auth: authModule,
     userPreferences:userDataModule},

     plugins: [createPersistedState({
      storage: window.sessionStorage,
  })],
}
);


export default store;


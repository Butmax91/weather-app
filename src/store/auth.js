import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex);

export default {
  state: {
      error: null,
      loading: false,
      user: null,
  },
  getters : {
        getError : (state)=> state.error,
        getUser : (state)=>state.user,
        getLoading : (state) => state.loading,

  },
  mutations: {
      setUser: (state, data)=> state.user = data,
      setLoading: (state,arg) => state.loading = arg,
      setError : (state,arg )=> {state.error = arg; },
  },
  actions: {
      async registerUser({state,commit},data){
          commit('setError',null);
          commit('setLoading',true);
          commit('setUser', data);
          try {
              const user = await firebase.auth().createUserWithEmailAndPassword(state.user.mail, state.user.pass);
              commit('setUser', user);
              commit('setLoading',false);
          }catch (e) {
              commit('setUser', null);
              commit('setError',e.message);
              commit('setLoading',false);
          }
      },
      async authentificationUser({state,commit},data){
            commit('setError',null);
            commit('setLoading',true);
            commit('setUser', data);
            try {
                const user = await firebase.auth().signInWithEmailAndPassword(state.user.mail, state.user.pass);
                commit('setUser', user);
                commit('setLoading',false);
            }catch (e) {
                commit('setError',e.message);
                commit('setLoading',false);
            }
        },
      async googleLogin({commit}){
          const provider = new firebase.auth.GoogleAuthProvider();
          console.log(provider)
          commit('setError',null);
          commit('setLoading',true);
          try {
              const  user  = await firebase.auth().signInWithPopup(provider);
              commit('setUser', user);
              commit('setLoading', false);
          } catch (e) {
              commit('setError', e.message);
              commit('setLoading', false);
          }
      },
      async FBlogin({commit}){
          var provider = new firebase.auth.FacebookAuthProvider();
          console.log(provider)
          commit('setError',null);
          commit('setLoading',true);
          try {
              const user = await firebase.auth().signInWithPopup(provider);
              commit('setUser', user);
              commit('setLoading', false);
          }catch(e) {
              commit('setError', e.message);
              commit('setLoading', false);
              }

      },
      signOut: ({ commit,state }) => {
              firebase.auth().signOut();
              commit('setUser', null);

          },
  }
}

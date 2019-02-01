import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
import weather from './weather'
// import products from './products';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        weather
        // products
    },
});
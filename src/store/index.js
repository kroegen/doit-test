import Vue          from 'vue';
import Vuex         from 'vuex';
import modules      from './modules';
import actions      from './actions';
import mutations    from './mutations';
import getters      from './getters';
import state        from './state';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    strict : debug,
    actions,
    mutations,
    getters,
    state,
    modules : {
        ...modules
    },
});

import api          from '@/api';
import { logError } from '@/utils/errorUtils';
import { decode, isLogged } from '@/utils/sessionUtils';

// initial state
const state = {
    isLogged: isLogged(),
    profile: null,
};

// getters
const getters = {
};

// actions
const actions = {
    async login({ commit }, payload) {
        try {
            const data = await api.auth.login('sessions', payload);

            await commit('LOGIN_SUCCESS', data);
        } catch (error) {
            await logError(error);
        }
    },

    logout({ commit }) {
        commit('LOGOUT');
    },
};

// mutations
const mutations = {
    LOGIN_SUCCESS(state, data) {
        const profile = decode(data.token);

        localStorage.setItem('token', data.token);
        api.auth.setAuthToken(data.token);

        state.profile = { ...profile };
        state.isLogged = true;
    },

    LOGOUT(state) {
        state.isLogged = false;
        state.profile = null;
        api.auth.setAuthToken('');
        localStorage.removeItem('token');
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};

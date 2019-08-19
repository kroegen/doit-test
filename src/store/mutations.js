
const mutations = {
    SET_ERRORS(state, data) {
        state.errors = data.length ? [ ...data ] : [ data ];
    },

    CLEAR_ERRORS(state) {
        state.errors = null;
    },
};

export default mutations;


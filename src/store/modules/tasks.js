import api          from '@/api';
import { logError } from '@/utils/errorUtils';
import { merge }    from '@/utils/baseUtils';

// initial state
const state = {
    tasks: [],
};

// getters
const getters = {
    tasks    : state => state.tasks,
};

// actions
const actions = {
    async fetchTasks({ commit }) {
        try {
            const data = await api.tasks.fetchTasks('tasks');

            await commit('FETCH_TASKS_SUCCESS', data.tasks);
        } catch (error) {
            await logError(error);
        }
    },

    async createTask({ commit }, { payload }) {
        try {
            const data = await api.tasks.createTask('tasks', payload);

            await commit('CREATE_TASK_SUCCESS', data.task);
        } catch (error) {
            await logError(error);
        }
    },

    async updateTask({}, { payload, id }) { // eslint-disable-line
        try {
            await api.tasks.updateTask(`tasks/${id}`, payload);
        } catch (error) {
            await logError(error);
        }
    },

    async deleteTask({ commit }, id) {
        try {
            await api.tasks.deleteTask(`tasks/${id}`);

            await commit('DELETE_TASK_SUCCESS', id);
        } catch (error) {
            await logError(error);
        }
    },
};

// mutations
const mutations = {
    FETCH_TASKS_SUCCESS(state, tasks) {
        state.tasks = merge(state.tasks, tasks);
    },

    CREATE_TASK_SUCCESS(state, task) {
        state.tasks = [task, ...state.tasks];
    },

    DELETE_TASK_SUCCESS(state, id) {
        state.tasks = [...state.tasks.filter(task => task.id !== id)];
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};

<template>
    <div class="card-content box">
        <task-card
            :isInput="true"
            @input="handleSubmit"
        />
        <br>
        <div :class="[loading ? 'is-waiting' : '']">
            <h4 class="title is-4">List of tasks</h4>
            <task-card
                v-for="task in tasks"
                :key="task.id"
                @edit="handleSubmit"
                @remove="handleRemove(task.id)"
                :task="task"
            />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TaskCard       from './TaskCard.vue';

export default {
    name: 'tasks-list',

    components: {
        TaskCard,
    },

    data() {
        return {
            loading : true,
        }
    },

    async created() {
        try {
            await this.$store.dispatch('fetchTasks');

            this.toggleLoader();
        } catch (error) {
            this.toggleLoader();
        }
    },

    computed: {
        ...mapGetters(['tasks']),
    },

    methods: {
        toggleLoader() {
            this.loading = !this.loading;
        },

        async handleRemove(id) {
            this.toggleLoader();

            try {
                await this.$store.dispatch('deleteTask', id);

                this.toggleLoader();
            } catch (err) {
                this.toggleLoader();
                console.warn(err);
            }
        },

        async handleSubmit({ payload, id = null }) {
            this.toggleLoader();

            try {
                if (id) {
                    await this.$store.dispatch('updateTask', { payload, id });
                } else {
                    await this.$store.dispatch('createTask', { payload });
                }

                this.toggleLoader();
            } catch (err) {
                this.toggleLoader();
                console.warn(err);
            }
        },
    },
}
</script>

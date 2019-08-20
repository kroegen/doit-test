<template>
    <div class="landing">
        <user-info
            :profile="profile"
        />
        <br>
        <tasks-list />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserInfo      from '@/components/landing/UserInfo';
import TasksList     from '@/components/landing/TasksList';

export default {
    name: 'landing',

    components : {
        UserInfo,
        TasksList
    },

    computed: {
        ...mapGetters(['profile']),
    },
};
</script>

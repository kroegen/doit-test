<template>
    <div class="landing">
        <user-info
            :name="name"
            :email="email"
            :age="age"
            :info="info"
        />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserInfo      from '@/components/landing/UserInfo';

export default {
    name: 'landing',

    components : {
        UserInfo,
    },

    computed: {
        ...mapGetters(['profile']),

        name() {
            return this.profile && this.profile.name ? this.profile.name : '';
        },

        email() {
            return this.profile && this.profile.email ? this.profile.email : '';
        },

        info() {
            return this.profile && this.profile.info ? this.profile.info : '';
        },

        age() {
            return this.profile && this.profile.age ? this.profile.age : '';
        },
    },
};
</script>

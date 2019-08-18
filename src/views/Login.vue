<template>
    <div :class="['wrapper login' , loading ? 'is-waiting' : '']">
        <form class="box" @submit.prevent="handleSubmit()">
            <form-field
                label="Email"
                placeholder="Type Email"
                type="email"
                name="email"
                autocompleteType="username"
                :error="errors.first('email')"
                fieldIcon="envelope"
                v-model="email"
                v-validate="'required|email'"
            />
            <form-field
                label="Password"
                placeholder="Type Password"
                name="password"
                type="password"
                autocompleteType="current-password"
                :error="errors.first('password')"
                fieldIcon="key"
                v-model="password"
                v-validate="'required'"
            />
            <div class="field is-grouped is-grouped-right">
                <p class="control">
                    <button class="button is-light" disabled>
                        Sign-up
                    </button>
                </p>
                <p class="control">
                    <button class="button is-primary" type="submit">
                        Login
                    </button>
                </p>
            </div>
        </form>
    </div>
</template>

<script>
import FormField      from '@/components/common/FormField';

export default {
    name       : 'LoginPage',

    components : {
        FormField,
    },

    data() {
        return {
            loading  : false,
            email    : '',
            password : '',
        };
    },

    watch: {
    },

    computed: {
    },

    async created() {
        this.toggleLoader();

        try {

            this.toggleLoader();
        } catch (error) {
            this.toggleLoader();
        }
    },

    methods: {
        toggleLoader() {
            this.loading = !this.loading;
        },

        async handleSubmit() {
            this.toggleLoader();

            try {
                const result = await this.$validator.validate();

                if (!result) {
                    this.toggleLoader();
                    return;
                }

                this.toggleLoader();
                this.$router.push({ name: 'landing' });
            } catch (err) {
                this.toggleLoader();
                console.warn(err);
            }
        },
    }
};
</script>

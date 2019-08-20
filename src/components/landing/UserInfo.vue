<template>
    <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">{{name}}</p>
                    <p class="subtitle is-6">{{email}}</p>
                </div>
                <div class="media-right">
                    <p>
                        {{info}}, <span v-if="age">{{age}} years</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'user-info',

    props: {
        profile: {
            type    : Object,
        },
    },

    computed: {
        name() {
            return this.profile && this.profile.name ? this.profile.name : 'John Smith';
        },
        email() {
            return this.profile && this.profile.email ? this.profile.email : 'johnsmith@mail.com';
        },
        info() {
            return this.profile && this.profile.info ? this.profile.info : 'Junior Front-end Developer';
        },
        age() {
            return this.profile && this.profile.age ? this.profile.age : '21';
        },
    },
};
</script>

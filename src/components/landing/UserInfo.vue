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
                    <p v-if="name" class="title is-4">{{name}}</p>
                    <p v-else class="title is-4">John Smith</p>
                    <p v-if="email" class="subtitle is-6">@{{email}}</p>
                    <p v-else class="subtitle is-6">@johnsmith</p>
                </div>
                <div class="media-right">
                    <p v-if="info">
                        {{info}}, <span v-if="age">{{age}} years</span>
                    </p>
                    <p v-else>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'user-info',

    props: {
        name: {
            type    : String,
            default : '',
        },
        email: {
            type    : String,
            default : '',
        },
        info: {
            type    : String,
            default : '',
        },
        age: {
            type    : String,
            default : '',
        },
    },
};
</script>

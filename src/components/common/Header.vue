<template>
    <header class="header">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="container">
                <a
                    role="button"
                    :class="['navbar-burger', !showNavbar ? 'is-active' : '']"
                    data-target="navMenu"
                    aria-label="menu"
                    aria-expanded="false"
                    @click.prevent="handleToggleNav"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>

                <div :class="['navbar-menu', !showNavbar ? 'is-active' : '']" id="navMenu">
                    <div class="navbar-start">
                        <li class="navbar-item"><router-link to="/login">Login Page</router-link></li>
                        <li class="navbar-item"><router-link to="/">Landing Page</router-link></li>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'app-header',

    data() {
        return {
            showNavbar: true,
        };
    },

    computed: {
        isLogged: () => { return true },
    },

    methods: {
        handleToggleNav() {
            this.showNavbar = !this.showNavbar;
        },
    }
}

</script>

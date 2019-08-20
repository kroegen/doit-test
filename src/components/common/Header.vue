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
                    <div class="navbar-end">
                        <a class="navbar-item" @click.prevent="handleLogout">Logout</a>
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

    methods: {
        handleToggleNav() {
            this.showNavbar = !this.showNavbar;
        },

        handleLogout() {
            this.$store.dispatch('logout');
            this.$router.push({ name: 'login' });
        },
    }
}

</script>

<template>
    <div id="app">
        <app-header v-if="isHeader" />
        <section class="section" :class="{ 'with-header': isHeader }">
            <div class="container">
                <transition name="fade" mode="out-in">
                    <router-view :key="$route.path"></router-view>
                </transition>
            </div>
        </section>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Header       from '@/components/common/Header';

export default {
    name : 'app',

    components: {
        'app-header' : Header,
    },

    data() {
        return {
            isHeader: true,
            isLogged: true,
        }
    },

    computed: {
        ...mapState({
            // isHeader: state => state.route.meta.header,
            // isLogged: state => state.auth.isLogged,
        }),
    },
};

</script>

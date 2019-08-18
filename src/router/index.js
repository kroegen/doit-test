import Vue        from 'vue';
import Router     from 'vue-router';
import LoginPage     from '@/views/Login';
import LandingPage   from '@/views/Landing';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path      : '/',
            name      : 'landing',
            component : LandingPage,
        },
        {
            path      : '/login',
            name      : 'login',
            component : LoginPage,
        },
    ]
});

export default router;

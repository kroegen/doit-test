import Vue        from 'vue';
import Router     from 'vue-router';
import store      from '@/store';
import LoginPage     from '@/views/Login';
import LandingPage   from '@/views/Landing';
import NotFoundPage  from '@/views/NotFound';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path      : '/',
            name      : 'landing',
            component : LandingPage,
            meta      : { header: true, auth: true },
        },
        {
            path      : '/login',
            name      : 'login',
            component : LoginPage,
            meta      : { header: false, auth: false },
        },
        {
            path      : '*',
            component : NotFoundPage,
        },
    ]
});

router.beforeEach((to, from, next) => {
    const isLogged = store.state.auth.isLogged;

    if (to.meta.auth && !isLogged) {
        next({ path: '/login' });
    } else if (to.name === 'login' && isLogged) {
        next(false);
    } else {
        next();
    }
});

export default router;

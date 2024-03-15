import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage.vue'
import LoginPage from './views/LoginPage.vue'

Vue.useAttrs(Router);

const routes = 
[
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path:'/dashboard', component: Dashboard,meta: { requiresAuth: true }}
];

const router = new Router({
    mode: 'history',
    routes
});

// Route guard to check if the user is authenticated before accesing protected routes

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');
    if(to.matched.some((route) => route.meta.requiresAuth)) {
        if(token) {
            //user is authenticated
            next();
        } else {
            //user is not authenticated: redirect to login
            next('/login')
        }
    } else {
        //allow access to non-protected routes
        next();
    }
});

export default router;
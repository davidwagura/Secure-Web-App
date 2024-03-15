import { createRouter , createWebHistory} from 'vue-router'
import HomePage from './views/HomePage.vue'
import LoginPage from './views/LoginPage.vue'
import DashboardPage from './views/DashboardPage.vue'
import { ROLES } from './roles';



const routes = 
[
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { 
        path:'/dashboard', 
        component: DashboardPage,
        meta: { requiresAuth: true,allowedRoles: [ROLES.ADMIN] }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Route guard to check if the user is authenticated before accesing protected routes

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');
    if (to.matched.some((route) => route.meta.requiresAuth)) {
      if (token) {
        const decodedToken = jwt.decode(token);

        if (decodedToken.role === ROLES.ADMIN) {
          // User has the required role
          next();
        } else {
          // User doesn't have the required role; redirect to home
          next('/');
        }
      } else {
        // User is not authenticated; redirect to login
        next('/login');
      }
    } else {
      // Allow access to non-protected routes
      next();
    }
});

//Router guard to check if the user is allowed to access the route based on their role
router.beforeEach((to,from,next) => {
    const allowedRoles = to.meta.allowedRoles;

    if(allowedRoles) {
        const token = localStorage.getItem('token');

        if (allowedRoles.includes(decodedToken.role)) {
            //user has the required role
            next();
        } else {
            //user doesn't have the required role redirect to home
            next('/');
        }
    } else {
        //user is not authenticated; redirect to login
        next('/login');
    } else {
        //Allow access to routes without specified allowedRoles
        next();
    }
});
  
export default router;
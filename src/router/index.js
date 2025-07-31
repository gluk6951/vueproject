import {createRouter,createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import StudentView from '../views/students/List.vue';
import StudentCreate from '../views/students/Create.vue';
import StudentEdit from '../views/students/Edit.vue';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';

const routes = [
    {
        path : '/home',
        component : HomeView
    },
    {
        path : '/about',
        component : AboutView
    },
    {
        path : '/students',
        component : StudentView
    },
    {
        path : '/students/create',
        component : StudentCreate
    },
    {
        path : '/students/:id/edit',
        component : StudentEdit
    },
    {
        path : '/login',
        component : Login
    },
    {
        path : '/dashboard',
        component : Dashboard
    }
];

const router = createRouter({
      history: createWebHistory(import.meta.env.BASE_URL),
      routes,
});

export default router;
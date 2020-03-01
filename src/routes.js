import Home from './components/Home.vue';
import Employee from './components/employee/Employee.vue';

export const routes = [
    {path: '', component: Home},
    {path: '/employee', component: Employee},
];
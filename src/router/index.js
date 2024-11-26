import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import LoginPage from '@/views/LoginPage.vue';
import RegistroUsuario from '@/views/RegistroUsuario.vue'
import ConfirmacionUsuario from '@/components/ConfirmacionUsuario.vue';


const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/registrousuario',
    name: 'RegistroUsuario',
    component: RegistroUsuario
  },
  {
    path: '/confirmacionUsuario',
    name: 'ConfirmacionUsuario',
    component: ConfirmacionUsuario
  },

]

const router = createRouter({
    history: createWebHistory(),
    routes
  });

export default router


import { lazy } from 'react';

export default [
    {
        path: '/',
        label: 'Home',
        exact: true,
        component: lazy(() => import('./containers/home/Home')),
        private: false,
        restricted: false,
    },
    {
        path: '/register',
        label: 'Register',
        exact: true,
        component: lazy(() => import('./containers/register/Register')),
        private: false,
        restricted: true,
    },
    {
        path: '/login',
        label: 'Login',
        exact: true,
        component: lazy(() => import('./containers/login/Login')),
        private: false,
        restricted: true,
    },
    {
        path: '/contacts',
        label: 'Contacts',
        exact: true,
        component: lazy(() => import('./containers/contacts/Contacts')),
        private: true,
        restricted: false,
    },
];
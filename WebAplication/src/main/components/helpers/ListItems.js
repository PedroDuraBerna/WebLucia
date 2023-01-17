export const listItems = [
    {
        icon: 'AccountCircle',
        text: 'Perfil',
        badgeContent: 0, // Lo obtendríamos del store
        permission: 'authenticated',
        navLink: '/profile',
    },
    {
        icon: 'Notifications',
        text: 'Notificaciones',
        badgeContent: 14, // Lo obtendríamos del store
        permission: 'authenticated',
        navLink: '/profile/notifications',
    },
    {
        icon: 'Mail',
        text: 'Correo',
        badgeContent: 27, // Lo obtendríamos del store
        permission: 'authenticated',
        navLink: '/profile/mails',
    },
    {
        icon: 'Login',
        text: 'Inicia sesión',
        badgeContent: 0, // Lo obtendríamos del store
        permission: 'not-authenticated',
        navLink: '/auth/login',
    },
    {
        icon: '',
        text: 'Menú de Admin',
        badgeContent: 0, // Lo obtendríamos del store
        permission: 'authenticated-writter-admin',
        navLink: '/*',
    },
    {
        icon: '',
        text: 'Menú de redactor',
        badgeContent: 0, // Lo obtendríamos del store
        permission: 'authenticated-writter',
        navLink: '/*',
    },
    {
        icon: '',
        text: 'Icono nuevo',
        badgeContent: 0, // Lo obtendríamos del store
        permission: 'allways',
        navLink: '/*',
    },
    {
        icon: 'Logout',
        text: 'Cierra sesión',
        badgeContent: 0, // Lo obtendríamos del store
        permission: 'authenticated',
        navLink: '/auth/logout',
    },
    {
        icon: 'AppRegistration',
        text: 'Regístrate',
        badgeContent: 0, // Lo obtendríamos del store
        permission: 'not-authenticated',
        navLink: '/auth/register',
    },
    {
        icon: 'Info',
        text: 'Sobre nosotros',
        badgeContent: 0, // Lo obtendríamos del store
        permission: 'allways',
        navLink: '/about',
    },
];
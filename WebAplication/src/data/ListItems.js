
// Estos son los botonos inmutables de la WEB

export const listItems = [
    {
        icon: 'Home',
        text: 'Home',
        badgeContent: 0, // Lo obtendríamos del store
        permission: 'allways',
        navLink: '/home',
    },
    // {
    //     icon: 'Notifications',
    //     text: 'Notificaciones',
    //     badgeContent: 14, // Lo obtendríamos del store
    //     permission: 'authenticated',
    //     navLink: '/profile/notifications',
    // },
    // {
    //     icon: 'Mail',
    //     text: 'Correo',
    //     badgeContent: 27, // Lo obtendríamos del store
    //     permission: 'authenticated',
    //     navLink: '/profile/mail',
    // },
    // {
    //     icon: '',
    //     text: 'Menú de Admin',
    //     badgeContent: 0, // Lo obtendríamos del store
    //     permission: 'authenticated-editor-admin',
    //     navLink: '/profile/admin',
    // },
    // {
    //     icon: '',
    //     text: 'Menú de redactor',
    //     badgeContent: 0, // Lo obtendríamos del store
    //     permission: 'authenticated-editor',
    //     navLink: '/profile/editor',
    // },
    // {
    //     icon: '',
    //     text: 'Icono nuevo',
    //     badgeContent: 0, // Lo obtendríamos del store
    //     permission: 'allways',
    //     navLink: '/*',
    // },
    {
        icon: 'Logout',
        text: 'Logout',
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
    {
        icon: 'Login',
        text: 'Login',
        badgeContent: 0, // Lo obtendríamos del store
        permission: 'not-authenticated',
        navLink: '/auth/login',
    },
    {
        icon: 'AccountCircle',
        text: 'Perfil',
        badgeContent: 0, // Lo obtendríamos del store
        permission: 'authenticated',
        navLink: '/profile',
    },
];
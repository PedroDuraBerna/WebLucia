
// Estos son los botonos MUTABLES de la WEB. Esto lo obtendríamos de la respuesta de la BBDD

export const subMenuListItems = [
    {
        category: 'noticias',
        icon: '',
        text: 'Noticias',
        badgeContent: 0,
        permission: 'allways',
        navLink: '/home/news',
        description: 'texto para describir la categoría',
        subcategories: [
            {
                subcategory: 'actualidad',
                icon: '',
                text: 'Acualidad',
                badgeContent: 0,
                permission: 'allways',
                navLink: '/news/topically',
                description: 'texto para describir la subcategoría',
            },
            {
                subcategory: 'deportes',
                icon: '',
                text: 'Deportes',
                badgeContent: 0,
                permission: 'allways',
                navLink: '/home/sports',
                description: 'texto para describir la subcategoría',
            },
        ]
    },
    {
        icon: '',
        text: 'Arte y Cultura',
        badgeContent: 0, // Lo obtendríamos del store
        permission: 'allways',
        navLink: '/home/art_and_culture',
        description: 'texto para describir la categoría',
        subcategories: [
            {
                subcategory: 'películas',
                icon: '',
                text: 'Películas',
                badgeContent: 0,
                permission: 'allways',
                navLink: '/home/art_and_culture/films',
                description: 'texto para describir la subcategoría',
            },
            {
                subcategory: 'fotografia',
                icon: '',
                text: 'Fotografía',
                badgeContent: 0,
                permission: 'allways',
                navLink: '/home/art_and_culture/photography',
                description: 'texto para describir la subcategoría',
            },
            {
                subcategory: 'esculturas',
                icon: '',
                text: 'Esculturas',
                badgeContent: 0,
                permission: 'allways',
                navLink: '/home/art_and_culture/sculpture',
                description: 'texto para describir la subcategoría',
            },
        ]
    },
    {
        icon: '',
        text: 'Tecnología',
        badgeContent: 0, // Lo obtendríamos del store
        permission: 'allways',
        navLink: '/home/technology',
        description: 'texto para describir la categoría',
        subcategories: [
            {
                subcategory: 'software',
                icon: '',
                text: 'Software',
                badgeContent: 0,
                permission: 'allways',
                navLink: '/home/technology/software',
                description: 'texto para describir la subcategoría',
            },
            {
                subcategory: 'hardware',
                description: 'texto para describir la subcategoría',
                icon: '',
                text: 'Hardware',
                badgeContent: 0,
                permission: 'allways',
                navLink: '/home/technology/hardware',
                description: 'texto para describir la subcategoría',
            },
            {
                subcategory: 'ordenadores',
                icon: '',
                text: 'Ordenadores',
                badgeContent: 0,
                permission: 'allways',
                navLink: '/home/technology/ordenadores',
                description: 'texto para describir la subcategoría',
            },
            {
                subcategory: 'moviles',
                icon: '',
                text: 'Móviles',
                badgeContent: 0,
                permission: 'allways',
                navLink: '/home/technology/moviles',
                description: 'texto para describir la subcategoría',
            },
        ]
    },
];
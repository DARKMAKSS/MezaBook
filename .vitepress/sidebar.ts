export default {

    '/ov': [{
        text: 'Основное',
        items: [{
            text: 'Информация',
            link: '/ov/about'
        },
            {
                text: 'Правила',
                link: '/ov/rules'
            },
            {
                text: 'Обновления',
                link: '/ov/updates'
            }
        ]
    },
        {
            text: 'Статьи',
            items: [{
                text: 'Паранормальщина',
                link: '/ov/pages/paranormal'
            },
                {
                    text: 'Особенности чата',
                    link: '/ov/pages/chat'
                },
                {
                    text: 'Статус души',
                    link: '/ov/pages/soul'
                },
                {
                    text: 'Мир пустоты',
                    link: '/ov/pages/void'
                },
                {
                    text: 'Кланы',
                    link: '/ov/pages/clans'
                }
            ]
        }
    ],


    '/community': [{
        text: 'Информация',
        items: [{
            text: "О сообществе",
            link: '/community/'
        }]
    },
        {
            text: 'Сервера',
            items: [{
                text: "Мониторинг",
                link: '/community/servers/'
            },
                {
                    text: "OminousVoid 🔗",
                    link: '/ov/'
                },
                {
                    text: "UnknownDead",
                    link: '/community/servers/UnknownDead'
                },
                {
                    text: "Мёртвые сервера",
                    link: '/community/servers/dead',
                    collapsed: true,
                    items: [{
                        text: 'SiimpAlone',
                        link: '/community/servers/SiimpAlone'
                    }]
                }
            ]
        },
    ],


    '/info': [{
        text: 'Информация',
        items: [{
            text: 'О MezaBook',
            link: '/info/'
        },
            {
                text: 'Правила',
                link: '/info/rules'
            },
            {
                text: 'Создание статей',
                link: '/info/creating-page'
            },
            {
                text: 'Создание своей вики',
                link: '/info/creating-wiki'
            }
        ]
    }]
}
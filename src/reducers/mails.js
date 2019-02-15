import { WRITE_LETTER, CHANGE_FOLDER, LETTER_FIELD_FILL, LETTER_LIST, LETTER_SHOWN, CURRENT_LETTER, SET_FETCHING,
    TEXT_SHOW, SET_UNREAD, DRAWER_OPEN, SET_DELAY, CHECKBOXES_HANDLE, SET_SEARCH, GROUP_CHECK, MENU_TOGGLE } from '../actions/mails'

const initialState = {
    active: 'received',
    mailList: {
        // received: [
        //     {
        //         id: 1513375200000,
        //         status: false,
        //         answered: false,
        //         checked: false,
        //         from: 'admin@reactjs.org',
        //         to: '',
        //         subject: 'Try React and send us reply!',
        //         text: 'React - JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.' +
        //             'React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций.' +
        //             ' React может использоваться для разработки одностраничных и мобильных приложений. Его цель — предоставить высокую ' +
        //             'скорость, простоту и масштабируемость. В качестве библиотеки для разработки пользовательских интерфейсов React ' +
        //             'часто используется с другими библиотеками, такими как Redux.'
        //     },
        //     {
        //         id: 1521324000000,
        //         status: false,
        //         answered: false,
        //         checked: false,
        //         from: 'admin@vuejs.org',
        //         to: '',
        //         subject: 'Try Vue!',
        //         text:'Vue.js — JavaScript-фреймворк с открытым исходным кодом для создания пользовательских интерфейсов. ' +
        //             'Легко интегрируется в проекты с использованием других JavaScript-библиотек. Может функционировать' +
        //             ' как веб-фреймворк для разработки одностраничных приложений в реактивном стиле.'
        //     },
        //     {
        //         id: 1469998800000,
        //         status: false,
        //         answered: false,
        //         checked: false,
        //         from: 'admin@angularjs.org',
        //         to: '',
        //         subject: 'Try Angular!',
        //         text: 'AngularJS — JavaScript-фреймворк с открытым исходным кодом. Предназначен для разработки ' +
        //             'одностраничных приложений. Его цель — расширение браузерных приложений на основе MVC-шаблона' +
        //             ' а также упрощение тестирования и разработки. Фреймворк работает с HTML, содержащим дополнительные' +
        //             ' пользовательские атрибуты, которые описываются директивами, и связывает ввод или вывод области' +
        //             ' страницы с моделью, представляющей собой обычные переменные JavaScript. Значения этих переменных' +
        //             ' задаются вручную или извлекаются из статических или динамических JSON-данных.'
        //
        //     },
        // ],
        received: [],
        sent: [
            {
                id: 1540850400000,
                status: true,
                answered: false,
                checked: false,
                from: '',
                to: 'friend@ukr.net',
                subject: 'Try React!',
                text: 'React - JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.' +
                            'React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций.' +
                            ' React может использоваться для разработки одностраничных и мобильных приложений. Его цель — предоставить высокую ' +
                            'скорость, простоту и масштабируемость. В качестве библиотеки для разработки пользовательских интерфейсов React ' +
                            'часто используется с другими библиотеками, такими как Redux.'
            },
            {
                id: 1544911200000,
                status: true,
                answered: false,
                checked: false,
                from: '',
                to: 'some@bigmir.net',
                subject: 'Try Vue!',
                text: 'Vue.js — JavaScript-фреймворк с открытым исходным кодом для создания пользовательских интерфейсов. ' +
                            'Легко интегрируется в проекты с использованием других JavaScript-библиотек. Может функционировать' +
                            ' как веб-фреймворк для разработки одностраничных приложений в реактивном стиле.'
            },
        ],
        deleted: []
    },
    writingLetter: false,
    folders: [
        {
            name: 'Inbox',
            id: 'received'
        },
        {
            name: 'Outbox',
            id: 'sent'
        },
        {
            name: 'Deleted',
            id: 'deleted'
        }
    ],
    newLetter: {
        to: '',
        subject: '',
        text: '',
        id: '',
        answered: false,
    },
    letterIsShown: false,
    drawerIsOpen: false,
    currentlyShown: {},
    textShow: 0,
    unRead: 0,
    delay: 0,
    checkboxesArray: {
        received: [],
        sent: [],
        deleted: [],
    },
    search: '',
    groupCheck: false,
    topMenuOpen: false,
    invalid: false,
    isFetching: false,
}

function mails (state = initialState, action) {
    switch (action.type){
        case WRITE_LETTER:
            return {...state, writingLetter: action.payload}
        case CHANGE_FOLDER:
            return {...state, active: action.payload}
        case LETTER_FIELD_FILL:
            return {...state, newLetter: action.payload}
        case DRAWER_OPEN:
            return {...state, drawerIsOpen: action.payload}
        case TEXT_SHOW:
            return {...state, textShow: action.payload}
        case SET_UNREAD:
            return {...state, unRead: action.payload}
        case LETTER_LIST:
            return {...state, mailList: action.payload}
        case LETTER_SHOWN:
            return {...state, letterIsShown: action.payload}
        case CURRENT_LETTER:
            return {...state, currentlyShown: action.payload}
        case SET_DELAY:
            return {...state, delay: action.payload}
        case CHECKBOXES_HANDLE:
            return {...state, checkboxesArray: action.payload}
        case SET_SEARCH:
            return {...state, search: action.payload}
        case GROUP_CHECK:
            return {...state, groupCheck: action.payload}
        case MENU_TOGGLE:
            return {...state, topMenuOpen: action.payload}
        case SET_FETCHING:
            return {...state, isFetching: action.payload}

        default:
            return {...state}
    }
}

export default mails
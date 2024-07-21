"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var services = [
    {
        logo: 'computer.png',
        logoName: 'computer',
        name: 'Ремонт компьютеров',
        typesServices: [
            'Замена блока питания',
            'Замена материнской платы',
            'Замена жёсткого диска',
            'Замена видеокарты',
            'Восстановление данных',
            'Чистка компьютера от пыли',
            'и другое...',
        ],
    },
    {
        logo: 'notebook.png',
        logoName: 'notebook',
        name: 'Ремонт ноутбуков',
        typesServices: [
            'Ремонт залитого ноутбука',
            'Замена клавиатуры',
            'Замена экрана',
            'Замена термопасты',
            'Чистка от пыли',
            'Замена жесткого диска',
            'и другое...',
        ],
    },
    {
        logo: 'monoblock.png',
        logoName: 'monoblock',
        name: 'Ремонт моноблоков',
        typesServices: [
            'Ремонт материнской платы',
            'Замена комплектующих',
            'Замена видеокарты',
            'Замена DVD-привода',
            'Замена комплектующих',
            'Чистка моноблока от пыли',
            'и другое...',
        ],
    },
    {
        logo: 'monoblock.png',
        logoName: 'monoblock',
        name: 'Ремонт техники Apple',
        typesServices: [
            'Ремонт MacPro',
            'Ремонт iMac',
            'Ремонт MacBook',
            'Ремонт MacMini',
            'Ремонт материнской платы',
            'Замена матрицы',
            'и другое...',
        ],
    },
    {
        logo: 'computer.png',
        logoName: 'computer',
        name: 'Ремонт компьютеров',
        typesServices: [
            'Замена блока питания',
            'Замена материнской платы',
            'Замена жёсткого диска',
            'Замена видеокарты',
            'Восстановление данных',
            'Чистка компьютера от пыли',
            'и другое...',
        ],
    },
    {
        logo: 'notebook.png',
        logoName: 'notebook',
        name: 'Ремонт ноутбуков',
        typesServices: [
            'Ремонт залитого ноутбука',
            'Замена клавиатуры',
            'Замена экрана',
            'Замена термопасты',
            'Чистка от пыли',
            'Замена жесткого диска',
            'и другое...',
        ],
    },
    {
        logo: 'monoblock.png',
        logoName: 'monoblock',
        name: 'Ремонт моноблоков',
        typesServices: [
            'Ремонт материнской платы',
            'Замена комплектующих',
            'Замена видеокарты',
            'Замена DVD-привода',
            'Замена комплектующих',
            'Чистка моноблока от пыли',
            'и другое...',
        ],
    },
    {
        logo: 'monoblock.png',
        logoName: 'monoblock',
        name: 'Ремонт техники Apple',
        typesServices: [
            'Ремонт MacPro',
            'Ремонт iMac',
            'Ремонт MacBook',
            'Ремонт MacMini',
            'Ремонт материнской платы',
            'Замена матрицы',
            'и другое...',
        ],
    },
    {
        logo: 'computer.png',
        logoName: 'computer',
        name: 'Ремонт компьютеров',
        typesServices: [
            'Замена блока питания',
            'Замена материнской платы',
            'Замена жёсткого диска',
            'Замена видеокарты',
            'Восстановление данных',
            'Чистка компьютера от пыли',
            'и другое...',
        ],
    },
    {
        logo: 'notebook.png',
        logoName: 'notebook',
        name: 'Ремонт ноутбуков',
        typesServices: [
            'Ремонт залитого ноутбука',
            'Замена клавиатуры',
            'Замена экрана',
            'Замена термопасты',
            'Чистка от пыли',
            'Замена жесткого диска',
            'и другое...',
        ],
    },
    {
        logo: 'monoblock.png',
        logoName: 'monoblock',
        name: 'Ремонт моноблоков',
        typesServices: [
            'Ремонт материнской платы',
            'Замена комплектующих',
            'Замена видеокарты',
            'Замена DVD-привода',
            'Замена комплектующих',
            'Чистка моноблока от пыли',
            'и другое...',
        ],
    },
    {
        logo: 'monoblock.png',
        logoName: 'monoblock',
        name: 'Ремонт техники Apple',
        typesServices: [
            'Ремонт MacPro',
            'Ремонт iMac',
            'Ремонт MacBook',
            'Ремонт MacMini',
            'Ремонт материнской платы',
            'Замена матрицы',
            'и другое...',
        ],
    },
    {
        logo: 'computer.png',
        logoName: 'computer',
        name: 'Ремонт компьютеров',
        typesServices: [
            'Замена блока питания',
            'Замена материнской платы',
            'Замена жёсткого диска',
            'Замена видеокарты',
            'Восстановление данных',
            'Чистка компьютера от пыли',
            'и другое...',
        ],
    },
    {
        logo: 'notebook.png',
        logoName: 'notebook',
        name: 'Ремонт ноутбуков',
        typesServices: [
            'Ремонт залитого ноутбука',
            'Замена клавиатуры',
            'Замена экрана',
            'Замена термопасты',
            'Чистка от пыли',
            'Замена жесткого диска',
            'и другое...',
        ],
    },
    {
        logo: 'monoblock.png',
        logoName: 'monoblock',
        name: 'Ремонт моноблоков',
        typesServices: [
            'Ремонт материнской платы',
            'Замена комплектующих',
            'Замена видеокарты',
            'Замена DVD-привода',
            'Замена комплектующих',
            'Чистка моноблока от пыли',
            'и другое...',
        ],
    },
    {
        logo: 'monoblock.png',
        logoName: 'monoblock',
        name: 'Ремонт техники Apple',
        typesServices: [
            'Ремонт MacPro',
            'Ремонт iMac',
            'Ремонт MacBook',
            'Ремонт MacMini',
            'Ремонт материнской платы',
            'Замена матрицы',
            'и другое...',
        ],
    },
];
var logos = services.map(function (service) { return service.logo; });
var typesServicesAll = services.map(function (service) { return service.typesServices; });
var gridContainer = document.querySelector('.services-container');
function renderServices(data, container) {
    var counter = 0;
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var service = data_1[_i];
        var logo = logos[counter++];
        var typesServices = typesServicesAll[counter];
        var newDiv = document.createElement('div');
        container.appendChild(newDiv);
        newDiv.innerHTML = "\n    <img src=\"./assets/".concat(logo, "\" alt=\"").concat(service.website, "\">\n    <h3>").concat(service.name, "</h3>\n    ").concat(typesServices.map(function (typeService) { return "\n    <div class=\"text-container flex\">\n        <img src=\"./assets/tick.png\" alt=\"\">\n        <p>".concat(typeService, "</p>\n    </div>\n    "); }).join(''), "\n    <a href=\"#price-section\" class=\"nav-button\">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0441\u0442\u0438 \u0438 \u0446\u0435\u043D\u044B</a>\n");
    }
}
if (gridContainer) {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(function (response) { return response.json(); })
        .then(function (users) { return renderServices(users, gridContainer); });
}

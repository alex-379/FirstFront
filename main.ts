import { NonNullChain } from "typescript";

type Service = {
    logo: string,
    logoName: string, 
    name: string,
    typesServices: string[]
}

interface Address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Geo,
}

interface Geo {
    lat: string,
    lng: string 
}

interface Company {
    name: string,
    catchPhrase: string,
    bs: string,
}

interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    company: Company,
}

const services: Service[] = [
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

const logos = services.map(service => service.logo)
const typesServicesAll = services.map(service => service.typesServices)

const gridContainer = document.querySelector('.services-container');
function renderServices(data: User[], container: Element) {
let counter = 0;
for (const service of data) {
const logo = logos[counter++];
const typesServices = typesServicesAll[counter];
const newDiv = document.createElement('div');
container.appendChild(newDiv);
newDiv.innerHTML = `
    <img src="./assets/${logo}" alt="${service.website}">
    <h3>${service.name}</h3>
    ${typesServices.map(typeService => `
    <div class="text-container flex">
        <img src="./assets/tick.png" alt="">
        <p>${typeService}</p>
    </div>
    `).join('')}
    <a href="#price-section" class="nav-button">Подробности и цены</a>
`;
}
}
if (gridContainer){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((users: User[]) => renderServices(users, gridContainer))

}
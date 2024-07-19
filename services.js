const services = [
    {
        logo: 'computer.png',
        logoName: 'computer',
        name: 'Ремонт компьютеров',
        servicesType: [
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
        servicesType: [
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
        servicesType: [
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
        servicesType: [
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

const gridContainer = document.querySelector('.services-container');
const navMenu = document.querySelector('.menu-container');

for (const service of services) {
  const newDiv = document.createElement('div');
  gridContainer.appendChild(newDiv);
  newDiv.innerHTML = `
    <img src="./assets/${service.logo}" alt="${service.logoName}">
    <h3>${service.name}</h3>
    ${service.servicesType.map(serviceType => `
      <div class="text-container flex">
        <img src="./assets/tick.png" alt="">
        <p>${serviceType}</p>
      </div>
    `).join('')}
    <a href="#price-section" class="nav-button">Подробности и цены</a>
  `;

  function toggleMenu() {
    navMenu.classList.toggle('opened');
  }
}
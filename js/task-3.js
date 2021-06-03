const images = [
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const ulGallery = document.querySelector('#gallery');
// Первый способ как добавить разметку используя метод перебора массивов MAP
// const liArr = images.map(({url, alt}) =>
//     `<li class="item">
//         <img src="${url}" alt="${alt}">
//     </li>`
// );
// ulGallery.insertAdjacentHTML('beforeend', liArr.join(""));
// ============================================================================
// Второй способ как добавить разметку используя метод перебора массивов REDUCE

const liString = images.reduce((acc, item) =>
  acc + `<li class="item"><img src="${item.url}" alt="${item.alt}"></li>`, "");
console.log(liString);
ulGallery.insertAdjacentHTML('beforeend', liString);



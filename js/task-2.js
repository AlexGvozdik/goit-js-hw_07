const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
const ul = document.getElementById('ingredients');
const liArr = ingredients.map((ingr) => {
    const liElem = document.createElement('li');
    liElem.textContent = ingr;
    return liElem;
});
ul.append(...liArr);
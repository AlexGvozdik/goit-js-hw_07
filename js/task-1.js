const refs = {
    ulCategor: document.getElementById('categories'),
    h2Arr: document.querySelectorAll('h2'),
    liItemArr: document.querySelectorAll('.item')
}
console.log(`В списке: ${refs.ulCategor.children.length} категории.`);
// --------------------------ANIMALS------------------------------------
console.log(`Категория: ${refs.h2Arr[0].textContent}`);
console.log(`Количество элементов: ${refs.liItemArr[0].children[1].children.length}`);
// --------------------------PRODUCTS------------------------------------
console.log(`Категория: ${refs.h2Arr[1].textContent}`);
console.log(`Количество элементов: ${refs.liItemArr[1].children[1].children.length}`);
// ---------------------------TECH------------------------------------
console.log(`Категория: ${refs.h2Arr[2].textContent}`);
console.log(`Количество элементов: ${refs.liItemArr[2].children[1].children.length}`);


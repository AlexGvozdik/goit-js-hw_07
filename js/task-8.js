const refs = {
    div: document.querySelector('#controls'),
    input: document.querySelector('input'),
    btnCreate: document.querySelector('button[data-action="render"]'),
    btnReset: document.querySelector('button[data-action="destroy"]'),
    divBoxes: document.querySelector('#boxes')
};
let amount = 0;
const inputAmount = function (event) {
    amount = event.currentTarget.value;
};
refs.input.addEventListener('input', inputAmount);
refs.btnCreate.addEventListener('click', () => {
    for (let i = 1, boxSize = 30; i <= amount; i++, boxSize += 10) {
        refs.divBoxes.innerHTML += `
        <div style= "width: ${boxSize}px; height: ${boxSize}px;  background-color: rgb(${Math.ceil(
            Math.random() * 255,
        )}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(
            Math.random() * 255,
        )}); margin: 10px"></div>
        `
    }
    refs.input.value = '';
} );
refs.btnReset.addEventListener('click', () => {
    refs.divBoxes.innerHTML = '';
    refs.input.value = '';
});

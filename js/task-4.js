const refs = {
    btnIncrem: document.querySelector('button[data-action="increment"]'),
    btnDecrem: document.querySelector('button[data-action="decrement"]'),
    span: document.getElementById('value')
};
let spanContentNum = +(refs.span.textContent);
refs.btnIncrem.addEventListener('click', () => {
    ++spanContentNum;
    return refs.span.textContent = spanContentNum;
});
refs.btnDecrem.addEventListener('click', () => {
    --spanContentNum;
    return refs.span.textContent = spanContentNum;
});
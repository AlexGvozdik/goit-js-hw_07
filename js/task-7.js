const refs = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text')
};
refs.input.addEventListener('input', (event) => {
    refs.span.style.fontSize = `${event.currentTarget.value}px`;
});
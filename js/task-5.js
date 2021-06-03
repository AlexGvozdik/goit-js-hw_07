const refs = {
    input: document.querySelector('input'),
    span: document.querySelector('span'),
};
const spanDefaultContent = refs.span.textContent;
refs.input.addEventListener('input', () =>
    refs.input.value.length === 0 ? refs.span.textContent = spanDefaultContent : refs.span.textContent = refs.input.value
);
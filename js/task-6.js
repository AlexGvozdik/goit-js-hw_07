const input = document.getElementById('validation-input');
input.addEventListener('blur', () => {
    if (input.value.length === +(input.dataset.length)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
});
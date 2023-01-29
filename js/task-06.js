const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', checkInput);
console.log(inputRef.dataset.length);

function checkInput(event) {
    console.dir(event.currentTarget);
    console.log(event.currentTarget.value.length);
    if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');

    } else {
        inputRef.classList.add('invalid');
    }
}
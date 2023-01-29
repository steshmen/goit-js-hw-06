const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', submitForm);

function submitForm(event) {
    const { email, password } = event.currentTarget.elements;
    event.preventDefault();

    if (email.value && password.value) {
        console.log({email: email.value, password: password.value});
    } else {
        alert('All fields of the form must be completed');
    }
    
    event.currentTarget.reset();
}

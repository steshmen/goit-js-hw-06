const spanRer = document.querySelector('#value');
const btnDecRef = document.querySelector('button[data-action="decrement"]');
const btnIncRef = document.querySelector('button[data-action="increment"]');
let counterValue = 0;

btnIncRef.addEventListener('click', onInc);

function onInc() {
    counterValue += 1;
    spanRer.textContent = counterValue;
};

btnDecRef.addEventListener('click', onDec);

function onDec() {
    counterValue -= 1;
    spanRer.textContent = counterValue;
}




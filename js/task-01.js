const allItemEl = document.querySelectorAll('.item');
console.log(allItemEl.length);

allItemEl.forEach(el => {
    console.log(el.firstElementChild.textContent);
    const allLiEl = el.querySelectorAll('li');
    console.log(allLiEl.length);
});


const placeholder = document.querySelector('.card-owner__placeholder')
const input = document.querySelector('.card-owner');

['change', 'input', 'blur', 'keyup', 'focus'].forEach(ev => {
    input.addEventListener(ev, () => {
        ev === 'focus' || input.value !== ""
        ? placeholder.style.display = "none"
        : placeholder.style.display = "block"
    })
});

placeholder.addEventListener('click', () => {
    input.focus()
})
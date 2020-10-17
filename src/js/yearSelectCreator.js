const select = document.querySelector(".card-year")
const currentYear = new Date().getFullYear()

let options = ''
for( let i of [0,1,2,3,4]) {
    const option = `<option value=${currentYear + i}>${currentYear + i}</option>`
    options += option
}
select.innerHTML = options
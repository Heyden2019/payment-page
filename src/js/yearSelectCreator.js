const currentYear = new Date().getFullYear()
const selector = document.querySelector(".year-selector")
selector.querySelector('span').innerHTML = currentYear
selector.querySelector('input').value = currentYear

let list = ''
for( let i of [0,1,2,3,4]) {
    list += `<li id=${currentYear + i}>${currentYear + i}</li>`
}
selector.querySelector('.year-list').innerHTML = list

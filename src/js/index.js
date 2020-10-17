import './../styles/style.scss'
import formatCardCode from './formatCardCode'
import checkValid from './checkValid'
import formSubmit from './formSubmit'
import './yearSelectCreator'
import './placeholderVisibility'
import cardInfo from './cardInfo'
import './dropdownHandler'

// CardCode formatter
['change', 'keyup', 'input'].forEach((e) => {
    for(let i of [0,1,2,3]){
        cardInfo[i].addEventListener(e, formatCardCode, false);
    }
})

// Add validators
// Object.values(cardInfo)
for(let i of Object.keys(cardInfo).map(itm => cardInfo[itm])) {
    i.addEventListener('blur', checkValid, false);
    i.addEventListener('change', checkValid, false);
    i.addEventListener('input', checkValid, false);
}

myform.onsubmit = formSubmit

// show/hide navbar on small screen
const navButton = document.querySelector('.nav-button');
navButton.addEventListener('click', (e) => {
    if ('true' === navButton.getAttribute('show')) {
        navButton.setAttribute('show', 'false');
      } else {
        navButton.setAttribute('show', 'true');
      }
})

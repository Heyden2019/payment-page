import checkValid from './checkValid'
import sumOfValues from './sumOfValues'
import cardInfo from './cardInfo'

const formSubmit = (e) => {
    e.preventDefault()
    let isValid = true
    for(let i of Object.keys(cardInfo).map(itm => cardInfo[itm])) {
        if(!checkValid(i) && isValid) {
            isValid = false
        }
    }
    if (!isValid) return;
    const res = {
        cardcode: sumOfValues(cardInfo),
        cvc: myform.cvc.value,
        cardOwner: myform['card-owner'].value,
        cardMonth: myform['valid-month'].value,
        cardYear: myform['valid-year'].value
    }
    console.log('res', res)
}

export default formSubmit
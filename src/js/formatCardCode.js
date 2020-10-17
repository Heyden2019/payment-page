import checkValid from './checkValid'
import sumOfValues from './sumOfValues'
import cardInfo from './cardInfo'

function formatCardCode() {
    // Observe for current data on cardcode inputs
    // and format it if needs
    const value = sumOfValues(cardInfo)
    let cardCode = value.replace(/[^\d]/g, '').substring(0,16);
    cardCode = cardCode != '' ? cardCode.match(/.{1,4}/g) : [];
    let hasFocus = false
    for (let i of [0,1,2,3]) {
        if((!cardCode[i] || cardCode[i].length < 4 || i === 3) && !hasFocus) {
            hasFocus = true
            cardInfo[i].focus()      
        }
        cardInfo[i].value = cardCode[i] || ""
        checkValid(cardInfo[i])
    }
}

export default formatCardCode
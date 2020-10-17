function checkValid (e) {
    const elem = e.target || e
    if(elem.value === "") {
        elem.classList.add("invalid")
        return false
    }
    const pattern = new RegExp(elem.getAttribute('myPattern'), 'm')
    if (elem.value.replace(pattern, '') === '') {
        elem.classList.remove("invalid")
        return true
    } else {
        elem.classList.add("invalid")
        return false
    }
}

export default checkValid
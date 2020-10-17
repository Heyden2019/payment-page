const dropdowns = Array.prototype.slice.call(document.querySelectorAll(".dropdown"))

dropdowns.forEach((dd) => {
    dd.addEventListener('click', (e) => {
        e.currentTarget.setAttribute('tabindex', 1)
        e.currentTarget.focus()
        e.currentTarget.classList.toggle('active')
    })

    dd.addEventListener('blur', (e) => {
        e.currentTarget.classList.remove('active')
    });

    Array.prototype.slice.call(dd.querySelectorAll(".dropdown-menu li")).forEach((ddm) => {
        ddm.addEventListener('click', (e) => {
            e.currentTarget.classList.remove('active')
            e.currentTarget.parentNode.parentNode.querySelector('span').innerHTML = e.currentTarget.id
            e.currentTarget.parentNode.parentNode.querySelector('input').value = e.currentTarget.id
        })  
    })
})

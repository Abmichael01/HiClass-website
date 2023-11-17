let menu = document.querySelector('.menu')
let menuBar = document.querySelector('ul')


menu.addEventListener('click', ()=>{
    if(menu.innerHTML == '='){
        menu.innerHTML = 'x'
    }else{
        menu.innerHTML = '='
    }
    menuBar.classList.toggle('menu-bar')
})
let popup   = document.querySelector('.popup')
let body    = document.querySelector('body')

body.addEventListener('click', function(event){

    if(event.srcElement.className == 'popup'){
        body.innerHTML += `<div class="box">
        <button class="close">Close</button>
        <img class="bodyImage" src="${event.target.dataset.url}" alt="">
        </div>`
        let close   = document.querySelector('.close')
        body.style.overflow= 'hidden'

    }

    if(event.srcElement.className == 'close' || event.srcElement.className == 'box'){
        let box = document.querySelector('.box')
        box.remove()
        body.style.overflow= 'visible'
    }

    
})
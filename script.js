const closeButton = document.querySelector('.img-bg span')

const split = document.querySelectorAll('.split')

// IMAGE BACKGROUND TOGGLE //

closeButton.addEventListener('click', () => {
    document.querySelector('.img-bg').style.display = 'none'
    document.querySelectorAll('.img-bg img').forEach((img) => {
        img.style.display = 'none'
    })
    document.querySelector('html').style.overflowY = 'visible'
})

split.forEach((split) => {
    split.addEventListener('click', () => {
        document.querySelector('.img-bg').style.display = 'block'
        document.querySelector('html').style.overflowY = 'hidden'
    })
})

// IMAGE DISPLAY TOGGLE //

document.querySelector('.split-website').onclick = () => {
    
    document.querySelector('#img-website').style.display = 'block'
}

document.querySelector('.split-landing').onclick = () => {
    
    document.querySelector('#img-landing').style.display = 'block'
}

document.querySelector('.split-email').onclick = () => {
    
    document.querySelector('#img-email').style.display = 'block'
}
/*const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight /5 * 4  //triggerBottom vale 80% da altura do viewport
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top // boxTop é a posição do topo de cada caixa

        if (boxTop < triggerBottom) {           // Se a posição do topo < 80% do viewport => Add 'show'
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}*/

const elemento1 = document.querySelector('.elemento1')
const elemento2 = document.querySelector('.elemento2')
const elemento3 = document.querySelector('.elemento3')
const elemento4 = document.querySelector('.elemento4')
const container = document.querySelector('.container')
const brilho = document.querySelector('.brilho')


container.addEventListener('mouseover', () => {
    elemento1.classList.add('active')
    elemento2.classList.add('active')
    elemento3.classList.add('active')
    elemento4.classList.add('active')
    brilho.classList.add('active')
})

container.addEventListener('mouseout', () => {
    elemento1.classList.remove('active')
    elemento2.classList.remove('active')
    elemento3.classList.remove('active')
    elemento4.classList.remove('active')
    brilho.classList.remove('active')
})


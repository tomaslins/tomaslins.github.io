const boxes = document.querySelectorAll('.box')

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
}

/*
Notas:
Se triggerBottom fosse uma porcentagem menor, as caixas seriam mostradas mais acima

A contagem do tamanho do viewport é de cima pra baixo

triggerBottom é uma linha horizontal imaginária que está a 80% do viewport, começando por cima

A posição do topo (boxTop) também é uma linha horizontal imaginária, que se move com cada caixa, mesmo que não as vejamos (pois estão translated em X para fora do viewport).

Quando a linha imaginária da posição da caixa passar a linha imaginária do triggerBottom, a caixa volta a sua posição no centro do viewport (translateX(0))

Peças chave para a produção deste efeito:
    1 - window.innerHeight
    2 - box.getBoundingClientRect().top
*/
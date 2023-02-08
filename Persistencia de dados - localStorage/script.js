//salvando
let cores = ['azul', 'preto', 'branco']

localStorage.setItem('idade', 38)
localStorage.nome = 'Thiago'
cores.push(localStorage.setItem('cores', cores))

//recuperando
let cor = localStorage.getItem('cores')
console.log(cor)
console.log(cores[0])

//removendo
localStorage.removeItem('cores')

//mudando cor dos elementos
let h2 = document.getElementsByTagName('h2')
console.log(h2)
h2[0].style.color = 'Blue'
h2[1].style.color = 'red'
const inNumero = document.querySelector('.inNumero')
const inAnos = document.querySelector('.inAnos')
let outPrevisao = document.querySelector('.outPrevisao')

function mostrarPrevisao() {
    let numero = Number(inNumero.value)
    let anos = Number(inAnos.value)
    let previsao = ''
     
    console.log(`1º Ano: ${numero}`)

    for(let i = 2; i <= anos; i++) {

        previsao = `${i}º Ano: ${numero *= 3}`

        console.log(previsao)
    }

}

const btnMostrar = document.querySelector('.btnMostrar')
btnMostrar.addEventListener('click', mostrarPrevisao)
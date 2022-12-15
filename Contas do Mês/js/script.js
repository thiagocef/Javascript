let inDescricao = document.querySelector('.inDescricao')
let inValor = document.querySelector('.inValor')
let outExibir = document.querySelector('.outExibir')
let outTotal = document.querySelector('.outTotal')

let numContas = 0
let valTotal = 0
let resposta = ''

function registrarContas() {
    let descricao = inDescricao.value
    let valor = Number(inValor.value)
    
    //incrementa + a cada valor que entra
    //resultando na quantidade de contas
    numContas++

    //recebe ele mesmo + o valor da conta
    //resultando na soma do valor das contas
    valTotal = valTotal + valor

    resposta = resposta + descricao + " - R$: " + valor + "\n"

    outExibir.textContent = resposta
    outTotal.textContent = `${numContas} Contas(s) - Total R$: ${valTotal}`

    inDescricao.value = ''
    inValor.value = ''

}

const btnRegistrar = document.querySelector('.btnRegistrar')
btnRegistrar.addEventListener('click', registrarContas)
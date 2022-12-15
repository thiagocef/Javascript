const inNumero = document.querySelector('.inNumero'),
      outResposta = document.querySelector('.outResposta'),
      outAnalisar = document.querySelector('.outAnalisar'),
      numeros = []
      
function adicionar() {

    let numero = Number(inNumero.value) //recebe o numero

    //verifica o preenchimento do campo
    if(isNaN(inNumero.value) || inNumero.value == '') {
        alert('Preencha o campo corretamente')
        inNumero.value = ''
        inNumero.focus()
        return
    }

    //verifica se o número já existe no array
    // index === -1 significa que não existe, então adiciona o numero
    numeros.indexOf(numero) === -1 ? numeros.push(numero) : alert('Numero já existe')

    inNumero.value = '' //limpa o campo
    inNumero.focus() //posiciona o cursor
    
    let resposta = "Números Cadastrados:\n"
    
    resposta += numeros
    
    //exibe cada número cadastrado
    outResposta.innerHTML = resposta
    
}

const btnAdicionar = document.querySelector('.btnAdicionar')
btnAdicionar.addEventListener('click', adicionar)

// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------

function verificar() {
    //verifica se existem números cadastrados
    if(numeros.length === 0) {
        alert('Não existem números cadastrados')
        inNumero.focus()
        return
    }

    //exibe os números cadastrados
    // outResposta.innerHTML = `Números Cadastrados: \n${numeros}`
    
    //transforma os elementos em string
    var checkNumeros = numeros.toString()

    //faz uma cópia de números em ordem crescente
    let copia = numeros.sort()
    
    //transforma os elementos em string
    var checkCopia = copia.toString()

    //verifica se as duas strings são iguais
    if(checkNumeros === checkCopia) {
        outAnalisar.innerHTML = `Números estão na ordem` 

    } else {
        outAnalisar.innerHTML = `Atenção!! \nNúmeros NÃO estão na ordem` 
    }
}

const btnVerificar = document.querySelector('.btnVerificar')
btnVerificar.addEventListener('click', verificar)
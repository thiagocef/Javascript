//gerando um número aleatório entre 1 e 50
let sorteado = Math.floor(Math.random()*50) + 1
console.log(sorteado)

//armazena os numeros já apostados
let erros = [] 

//definindo o numero máximo de chances
const chances = 6

function apostarNumero() {
    let inNumero = document.querySelector('.inNumero')
    let numero = Number(inNumero.value)

    let outDica = document.querySelector('.outDica')
    let outErros = document.querySelector('.outErros')
    let outChances = document.querySelector('.outChances')
    let outApostados = document.querySelector('.outApostados')

    //se a aposta for igual ao número sorteado
    if(numero === sorteado) {
        outDica.textContent = `Você acertou: ${numero}`

    } else {
        //se o numero já existe no vetor erros(se já foi apostado)
        //se o index no número for maior ou igual a 0
        //se o número não estiver no vetor, seu index retorna -1
        if(erros.indexOf(numero) >= 0) {
            //erros.includes(numero) 
            alert(`Você já apostou o número ${numero}`)

        } 
        //se não foi apostado, insere o numero no vetor erros
        else {
            erros.push(numero)
            let numErros = erros.length //obtem tamanho do vetor erros
            
            let numChances = chances - numErros //calcula o numero de chances (6 - o tamanho atual do vetor)

            //exibe os números já apostados
            outApostados.innerHTML =  erros.join(' - ')

            //exibe o numero de erros
            outErros.textContent = `${numErros}`

            //exibe o numero de chances 
            outChances.textContent = numChances

            if(numChances == 0) {
                alert('Suas chances acabaram')
                outDica.textContent = `Game Over!! O número sorteado era: ${sorteado}`
                
            } else {
                let dica = numero < sorteado ? 'Maior' : 'Menor'

                outDica.textContent = `Dica 2: Tente um número ${dica} que ${numero}`
            }
        }
    }

    //limpa o campo de entrada do número
    inNumero.value = ''
    //cursor volta ao input
    inNumero.focus()
}

let btnApostar = document.querySelector('.btnApostar')
btnApostar.addEventListener('click', apostarNumero)
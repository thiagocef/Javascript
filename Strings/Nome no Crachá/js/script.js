const inNome = document.querySelector('.inNome')
const outCracha = document.querySelector('.outCracha')

function gerarCracha() {
    const nome = inNome.value
    const tam = nome.length
    let ultimo  = nome.substring(nome.lastIndexOf(" "))
    let primeiro = ""
    
    for(let i = 0; i < tam; i++) {
        
        if(nome.charAt(i) == " ") {
            break
        }
        primeiro += nome[i]
        
    }

    let saida = ""
    saida += primeiro + " " + ultimo
    outCracha.innerHTML = "Crachá: " + saida
    
    console.log("Nome: ", nome)
    console.log("Tamanho: ", tam)
    console.log("Primeiro nome: ", primeiro)
    console.log("Último nome: ", ultimo)
}

document.querySelector('.btnGerar').addEventListener('click', gerarCracha)
/*
Thiago Cordeiro Espinola Freire
Ana Maria da Costa Santos
Luiza Souza Pinheiro
*/
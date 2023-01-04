const inMensagem = document.querySelector('.inMensagem'),
      outMensagem = document.querySelector('.outMensagem')

function criptografarMsg() {
    let mensagem = inMensagem.value,
        saida = "",
        par = "",
        impar = ""

    //percorre as letras da mensagem
    for(let i = 0; i < mensagem.length; i++) {
        
        //verifica se a lestra está no index par ou ímpar
        if(i % 2 == 0) {
            par += mensagem[i].charAt()
        } else {
            impar += mensagem[i].charAt()
        }

    }
    saida += impar + par
    
    outMensagem.innerHTML = saida
    
    // console.log(`Mensagem: ${mensagem}`)
    // console.log(`Ímpares: ${impar}`)
    // console.log(`Pares: ${par}`)
    // console.log(`Saída: ${saida}`)
}

document.querySelector('.btnCriptografar').addEventListener('click', criptografarMsg)

function descriptograrfarMsg() {
    let mensagem = inMensagem.value
    outMensagem.innerHTML = mensagem
}

document.querySelector('.btnDescriptografar').addEventListener('click', descriptograrfarMsg)
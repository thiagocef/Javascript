const inNome = document.querySelector('.inNome'),
      outSenha = document.querySelector('.outSenha')

function gerarSenha() {
    const nome = inNome.value,
          sobrenome = obterSobrenome(nome),
          nomeCompleto = validarNome(nome),
          numVogais = contarVogais(nome)

    let senhaInicial = `${sobrenome}`

    //se o numero de vogais for menor que 10
    //adiciona um 0 antes do número
    numVogais < 10 ? senhaInicial += `0${numVogais}`
                   : senhaInicial += numVogais

    //se o nomeCompleto for true
    nomeCompleto ? outSenha.innerHTML = `Senha Inicial: ${senhaInicial}`
                 : outSenha.innerHTML = `Senha Inicial: `
}
document.querySelector('.btnGerarSenha').addEventListener('click', gerarSenha)

function validarNome(nome) {
    let partes = nome.split(''),
        espaco = ' ',
        saida
    
    //verifica se há espaço em branco
    if(partes.indexOf(espaco) === -1) {
        saida = false
        alert('Nome Incompleto!')
    } else {
        saida = true
    }

    return saida
}

function obterSobrenome(nome) {
    let sobrenome = '',
          partes = nome.split(' ')

    sobrenome = partes[partes.length -1]

    return sobrenome.toLowerCase()
}

function contarVogais(nome) {
    //expressão regular para obter as vogais
    const vogais = nome.match(/[aeiou]/g),
          contVogais = `${vogais.length}`

    return contVogais
}
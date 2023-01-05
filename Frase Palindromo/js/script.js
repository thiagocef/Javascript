const inFrase = document.querySelector('.inFrase'),
      outResposta = document.querySelector('.outResposta')

//ame o poema
//thiago cordeiro
function verificarPalindromo() {
    const entrada = inFrase.value.toLocaleUpperCase(),//recebe a frase em caixa alta
          frase = entrada.replace(/ /g, ""), //remove os espaço da frase
          arrFrase = frase.split(""), //separa todas as letras em um novo array
          invertida = arrFrase.reverse().join('')//inverte a ordem do array e junta as letras

    frase === invertida ? outResposta.innerHTML = `${entrada} é um Palíndromo`
                        : outResposta.innerHTML = `${entrada} não é um Palíndromo`
}

document.querySelector('.btnVerificar').addEventListener('click', verificarPalindromo)
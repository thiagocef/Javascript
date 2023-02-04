const inNnome = document.querySelector('.inNome'),
      inIdade = document.querySelector('.inIdade'),
      outNome = document.querySelector('.outNome'),
      outTracos = document.querySelector('.outTracos'),
      outCategoria = document.querySelector('.outCategoria')

function lerDados() {
    const nome = inNnome.value,
          idade = Number(inIdade.value)

    retornarTracos(nome)
    categorizarAluno(idade)

    outNome.innerHTML = nome
}
document.querySelector('.btnCategorizar').addEventListener('click', lerDados)

//retorna traço de acordo com o caracter do nome
function retornarTracos(nome) {
    let saida = ''
    for(let i = 0; i < nome.length; i++) {
        //condição para manter o espaço em branco caso tenha
        nome[i] === ' ' ?  saida += nome[i] = ' '
                        : saida += nome[i] = '-'
    }
    return outTracos.innerHTML = saida
}

//infantil até 12
//juvenil entre 13 e 18
//adulto acima de 18
function categorizarAluno(idade) {
    let saida = `Categoria: ` 

    if(idade < 13) {
        saida += `Infantil`
    } else if(idade > 17) {
        saida += `Adulto`
    } else {
        saida += `Juvenil`
    }

    return outCategoria.innerHTML = saida
}
const inAutor = document.querySelector('.inAutor'),
      outCitacao = document.querySelector('.outCitacao')

function gerarCitacao() {
    const autor = inAutor.value
    let iniciais = ""
    
    let nomes = autor.split(' '), //separa os nomes em um array
    sobrenome = nomes[nomes.length -1]

    //percorre os nomes
    for(let i = 0; i < nomes.length -1; i ++) {
        iniciais += ` ${nomes[i].charAt(0)}.` //primeira letra de cada nome
    }
    
    outCitacao.innerHTML = `Citação Bibliográfica: ${sobrenome.toUpperCase()}, ${iniciais}`
}

document.querySelector('.btnGerarCitacao').addEventListener('click', gerarCitacao)
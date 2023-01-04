const inAutor = document.querySelector('.inAutor'),
      outCitacao = document.querySelector('.outCitacao')

//Thiago Cordeiro Espinola Freire
function gerarCitacao() {
    const autor = inAutor.value
    let iniciais = ""
    
    let nomes = autor.split(' '), //separa os nomes em um array
    sobrenome = nomes[nomes.length -1]

    console.log(autor)
    console.log(nomes)
    
    //percorre os nomes
    for(let i = 0; i < nomes.length -1; i ++) {
        console.log(nomes[i])
        iniciais += ` ${nomes[i].charAt(0)}.` //primeira letra de cada nome
    }
    
    console.log(`Partes: ${nomes}`)
    console.log(`Sobrenome: ${sobrenome}`)
    console.log(`Iniciais: ${iniciais}`)
    
    outCitacao.innerHTML = `Citação Bibliográfica: ${sobrenome.toUpperCase()}, ${iniciais}`
}

document.querySelector('.btnGerarCitacao').addEventListener('click', gerarCitacao)
//neste programa eu selecionei diretamente os elementos do document
//sem utilizar variáveis
//o código ficou bem menor e mais limpo

//PRETENDO MELHORÁ-LO E CRIAR UM JOGO DA FORCA COMPLETO

function montarDica() {
    const fruta = document.querySelector('.inFruta').value
    const outDica = document.querySelector('.outDica')
    
    //transforma as letras em maiusculas
    const maiuscula = fruta.toUpperCase()
    console.log(maiuscula)

    //pegar a primeira letra
    const primeira = maiuscula.charAt(0)
    console.log("Primeira letra: ", primeira)

    let saida = " " //variável para concatenar as letras e _

    //percorre a string 
    for(let i = 0; i < fruta.length; i++) {
        
        //se a letra na posição i for igual a primeira letra da string
        if(maiuscula.charAt(i) == primeira) {
            saida += " " + primeira + " "
            outDica.innerHTML = "Dica: " + saida

        } else {
            saida += " _ "
            outDica.innerHTML = "Dica: " +  saida
        }
        
    }
}

document.querySelector('.btnMontarDica').addEventListener('click', montarDica)
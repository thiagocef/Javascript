let anuncio = prompt("Anuncio: ")

let numPalavras = 0 //contador

for(let i = 0; i < anuncio.length; i++) { //percorre os caracteres do anuncio

    if(anuncio.charAt(i) == ' ') {  //se encontrou um espaço, incrementa o contador
        numPalavras++
    }
}

alert("Anuncio: " + anuncio + "\nNº Palavras: " + (numPalavras + 1))
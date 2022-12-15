let palavra = 'Thiago'
let tam = palavra.length //tamanho da string
let inverso = palavra.charAt(tam-1).toUpperCase() //utima letra "tam-1" da string em maiuscula

console.log('Palavra: ', palavra)
console.log('Tamanho: ', tam)
console.log('Ultima letra em Maiuscula: ', inverso)

//'i' inicia pela penultima letra, e decrementa
for(let i = tam-2; i >= 0; i--) {
    //inverso concatena com cada letra em minuscula
    inverso += palavra.charAt(i).toLocaleLowerCase()
}
console.log('Invertida: ', inverso)
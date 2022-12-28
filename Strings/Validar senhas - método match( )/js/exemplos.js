//com o método match() em uma string, vamos verificar a existência de:
//letras maiúsculas
//letrar minúsculas
//números
//símbolos

let palavra = "@Thiago_123"

//------------------------------------------------------------
//------------------- expressões regulares -------------------
//------------------------------------------------------------

let maiusculas = palavra.match(/[A-Z]/g) //retorna as letras maiusculas
console.log(maiusculas)

let minusculas = palavra.match(/[a-z]/g) //retorna as letras minúsculas
console.log(minusculas)

let numeros = palavra.match(/[0-9]/g) //retorna os números
console.log(numeros)

let simbolos = palavra.match(/\W|_/g) //retorna o simbolo analisado "_" 
console.log(simbolos)

let nulos = palavra.match(/[b-f]/g) //retorna nulo, pois não contem letras minustulas entre b e f
console.log(nulos)
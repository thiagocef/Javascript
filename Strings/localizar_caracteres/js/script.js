const palavra = 'Marilucia'

//SEMPRE VAI RETORNAR A OCORRÊNCIA DO PRIMEIRO CARACTER DA STRING

console.log(palavra.indexOf('b')) //retorna -1 quando o caracter não existe
console.log(palavra.indexOf('i')) //pesquisa a partir do inicio da string
console.log(palavra.lastIndexOf('i')) //pesquisa a partir do fim da string
console.log(palavra.indexOf('ril')) //o retorno começa a partir do index 2

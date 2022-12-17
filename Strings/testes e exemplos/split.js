let nomes = "Thiago, Cordeiro, Espinola, Freire"

//transforma a string em um vetor
let partes = nomes.split(",") //separa a cada ocorrencia de ","

console.log(nomes) //retorna a string
console.log(partes) //retorna um vetor

console.log(partes[0]) //Thiago
console.log(partes[1]) //Cordeiro
console.log(partes[2]) //Espinola 
console.log(partes[3]) //Freire

partes.forEach(item => {
    console.log(item)
});
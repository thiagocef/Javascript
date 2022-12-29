const hoje = new Date()
console.log("Hoje: ", hoje)

let dia = hoje.getDate() //retorna a data do mês
console.log(dia)

let mes = hoje.getMonth() //retorna o mês em número
console.log(mes)

let ano = hoje.getFullYear() //retorna o ano
console.log(ano)


const amanha = new Date() //data atual
let diaAmanha = amanha.getDate() //dia do mês atual

amanha.setDate(diaAmanha + 1) //altera o dia, adicionando 1 ao dia atual

console.log("Amanhã: " + amanha)


const hoje = new Date() //data atual completa
console.log("Hoje: ", hoje)

let dia = hoje.getDate() //retorna a data do mês
console.log("Dia: ", dia)

let mes = hoje.getMonth() + 1 //retorna o mês em número
console.log("Mês: ", mes)

let ano = hoje.getFullYear() //retorna o ano
console.log("Ano: ", ano)

let amanha = hoje.getDate() //dia do mês atual
hoje.setDate(amanha + 1) //altera o dia, adicionando 1 ao dia atual
console.log("Amanhã: " + hoje)

let nextMonth = hoje.getMonth() //mês atual
hoje.setMonth(nextMonth + 1) //altera o mês, adicionando 1 ao mês atual
console.log("Próximo mês: ", hoje)

let hora = hoje.getHours()
let minutos = hoje.getMinutes()
console.log(`Hora: ${hora}:${minutos}`)

hoje.setHours(hora + 1)
console.log("Hora mais 1: ", hoje + 1) //soma um à hora atual

//----------------------------------------------------
//----------------------------------------------------

const dataBr = new Date()
console.log('------------------------------')
console.log("Data no formato do idioma local: ", dataBr.toLocaleDateString())

console.log(dataBr.getMonth() + 1)

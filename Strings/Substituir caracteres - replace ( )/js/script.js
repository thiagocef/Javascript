const senha = "ABACAD"

let substituir = senha.replace("A", "X") //substitui a primeira ocrrência de "A" por "X"
console.log(substituir)

let substituir2 = senha.replace(/A/g, "X") //substitui TODAS as ocorrências de "A" por "X"
console.log(substituir2)

//----------------------------------------
//RETITNDO UM CARACTERE UTILIZANDO REPLACE
//----------------------------------------


const app = "App Controle Fincanceiro"

let app2 = app.replace(" ", "") //remove a primeira ocorrência de espaço
console.log(app2)

let app3 = app.replace(/ /g, "") //remove TODAS as ocorrências de espaço
console.log(app3)

let app4 = app.replace(/ /g, "").toLocaleLowerCase() //remove todos os espaços e converte tudo em minúsculo
console.log(app4)

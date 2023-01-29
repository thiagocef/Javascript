//salvando
localStorage.setItem("idade", 17)

//recuperando
let idade = Number(localStorage.getItem("idade")) //convertendo de sgtring para número
let soma = idade + 1

alert(soma)
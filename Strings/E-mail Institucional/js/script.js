function gerarEmail() {
/*
Maria José Cordeiro Silva
Thiago Cordeiro Espinola Freire
*/
    const funcionario = document.querySelector('.inFuncionario').value //recebe o nome do funcionário
    let partes = funcionario.split(" ") //separa os nomes a cada ocorrência de um espaço " "
                                        //e transforma em um array

    const sobrenome = partes[partes.length -1] //ultimo sobrenome
    
    const provedor = "@empresa.com.br" //irá concatenar com o resultado final

    let email = ""

    //percorre os elementos de "partes"
    for(let i = 0; i < partes.length -1; i++) {
        email += partes[i].charAt(0) //retorna a primeira letra de cada nome
        // console.log(partes[i]) //retorna cada parte (nome)
    }
    //mostra o email resultante
    document.querySelector('.outEmail').innerHTML = "E-mail: " + email.toLowerCase() + sobrenome.toLowerCase() + provedor
    
    console.log("String: ", funcionario)
    console.log("Virou Array: ", partes)
    console.log("Ultimo Sobrenome: ", sobrenome)
    console.log("email: ", email.toLowerCase() + sobrenome.toLowerCase() + provedor)
}

document.querySelector('.btnGerar').addEventListener('click', gerarEmail)
    
    
    
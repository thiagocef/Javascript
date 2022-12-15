console.log('Adicionando objetos a um Array')

let pessoa = [] //array quer vai receber os novos objetos

function adicionarObjeto() {
    let saida = ""

    let nome = 'Thiago',
        sobrenome = 'Cordeiro',
        idade = 37,
        cidade = 'João Pessoa'

    //adicionando objeto ao array pessoa
    pessoa.push({
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        cidade: cidade
    })

    //percorrendo o array para mostrar cada elemento
    for(let i = 0; i < pessoa.length; i ++) {
        console.log("Nome: " + pessoa[i].nome + " " + pessoa[i].sobrenome)
        console.log(pessoa[i].idade + " anos")
        console.log("Nascido em: " + pessoa[i].cidade)
    }

}

const btnTeste = document.querySelector('.btnTeste')
btnTeste.addEventListener('click', adicionarObjeto)
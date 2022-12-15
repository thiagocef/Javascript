const crianca = []

const inNome = document.querySelector('.inNome')
const inIdade = document.querySelector('.inIdade')


function adicionarCrianca() {
    const nome = inNome.value,
          idade = Number(inIdade.value)
    
          
    //adicionando o objeto ao array crianca
    crianca.push({
        nome: nome, //adicionando as variáveis 
        idade: idade
    })
    
    //limpa os campos e posiciona o cursor em inNome
    inNome.value = ""
    inIdade.value = ""
    inNome.focus()
    
    //lista irá concatenar os nomes
    let lista = ""

    //percorre o array e mostra cada elemento
    for(let i = 0; i < crianca.length; i ++) {
        lista += "Nome: " + crianca[i].nome + " - Idade: " + crianca[i].idade + "\n"
    }

    //exibe os nomes diretamente no elemento .outLista, sem precisar de variável
    document.querySelector('.outLista').textContent = lista
    // console.log(lista)

}

const btnAdicionar = document.querySelector('.btnAdicionar')
btnAdicionar.addEventListener('click', adicionarCrianca)

//---------------------------------------------------------------------
//------------------------- RESUMIR POR IDADE -------------------------
//---------------------------------------------------------------------
function resumirLista() {
    //verificando se há elementos no array
    if(crianca.length == 0) {
        alert('Não há criança na lista')
        return
    }

    //'copia' recebe uma cópia do array criança
    let copia = crianca.slice()

    //ordena por idade
    copia.sort(function(a, b) {
        return a.idade - b.idade
    })

    //concatenar a saida
    let resumo = ""

    let aux = copia[0].idade //pega a menor idade(primeiro elemento do array) de copia(depois de ordenado por idade)
    let nomes = [] //para inserir os nome de cada idade

    //percorre os elementos do array copia(depois de ordenado por idade)
    for(let i = 0; i < copia.length; i ++) {
        //se é da mesma idade auxiliar, adiciona ao array
        if(copia[i].idade === aux) {
            nomes.push(copia[i].nome)
        } else {
            //senão, adiciona ao resumo, dados e nomes inseridos em nomes[]
            resumo += aux + " ano(s): " + nomes.length + " criança(s) - "
            resumo += (nomes.length / copia.length * 100).toFixed(2) + "%'\n" //calculo de %
            resumo += "(" + nomes.join(", ") + ")\n\n"

            aux = copia[i].idade //obtem a nova idade na ordem
            nomes = [] //limpa o array dos nomes
            nomes.push(copia[i].nome) //add o primeiro nome da nova idade
        }
    }
        //adicionar os nomes da ultima idade ordenada
        resumo += aux + " ano(s): " + nomes.length + " criança(s) - "
        resumo += (nomes.length / copia.length * 100).toFixed(2) + "%\n"
        resumo += "(" + nomes.join(", ") + ")\n\n"

        //altera o conteúdo de outLista
        document.querySelector('.outLista').textContent = resumo
    
}
const btnResumir = document.querySelector('.btnResumir')
btnResumir.addEventListener('click', resumirLista)
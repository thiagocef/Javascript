const inNova = document.querySelector('.inNova')

//'a', 'b', 'c', 'd', 'e', 'f', 'g'
const noticias = []
//noticias em ordem reversa
const rev = noticias.reverse()

function adicionar() {
    const nova = inNova.value

    if(inNova.value == "") {
        alert('Insira Uma Nova Notícia')
        inNova.focus()
        return
    }

    noticias.push(nova)
    inNova.value = ""
    inNova.focus()

    console.log(noticias)

    //mostra o numero de noticias cadastradas, através de noticias.length
    document.querySelector('.outTotal').innerHTML = "Notícia Cadastradas: " + noticias.length

}

const btnAdicionar = document.querySelector('.btnAdicionar')
btnAdicionar.addEventListener('click', adicionar)

//-----------------------------------------------------------
//--------------------- Listar Últimas ----------------------
//-----------------------------------------------------------

function listarUltimas() {
    const num = prompt('Quantas Notícias Você Deseja Visualizar?')

    //mostra quantas das ultimas noticias o usuário deseja visualizar
    document.querySelector('.outUltimas').innerHTML = num + " Últimas Notícias"


    const ultimas = rev.slice(0, num)
    //vai da primeira[0] até o numero informado pelo usuário

    //transforma 'ultimas' em um array para ser percorrido
    const ultArr = Array.from(ultimas)

    //percorre o array 'ultArr' e mostra as notícias
    let saida = ""
    for(let i = 0; i < ultArr.length; i++) {
        saida += "- " + ultArr[i] + " \n"
        document.querySelector('.outNoticias').innerHTML = saida
    }
}

const btnListar = document.querySelector('.btnListar')
btnListar.addEventListener('click', listarUltimas)
const carros = []

function adicionar() {
    const inModelo = document.querySelector('.inModelo')
    const inPreco = document.querySelector('.inPreco')

    var modelo = inModelo.value
    var preco = Number(inPreco.value)

    //adiciona objetos ao array carros
    carros.push({
        modelo: modelo,
        preco: preco
    })

    // console.log(carros)

    listarCarros() //chama a função listar, e executa ao mesmo tempo da função adicionar
}

const btnAdicionar = document.querySelector('.btnAdicionar')
btnAdicionar.addEventListener('click', adicionar)


//----------------------------------------------------------------
//-------------------------- LISTAR ------------------------------
//----------------------------------------------------------------

function listarCarros() {
    let lista = "" //para concatenar a lista de carros

    for(let i = 0; i < carros.length; i++) {
        lista += carros[i].modelo + " - R$: " + carros[i].preco + "\n"
    }

    //referencia o elemento de saida e altera diretamente o conteudo
    //sem precisar de uma variável
    document.querySelector('.outListar').textContent = lista
}

const btnListar = document.querySelector('.btnListar')
btnListar.addEventListener('click', listarCarros)

//----------------------------------------------------------------
//-------------------------- FILTRAR -----------------------------
//----------------------------------------------------------------

function filtrarCarros() {
    const inFiltro = document.querySelector('.inFiltro')
    let filtro = Number(inFiltro.value)

    let lista = "" //para concatenar a lista de carros

    //percorre os elementos do array
    for(let i = 0; i < carros.length; i ++) {

        //verifica se o preço atende ao filtro
        if(carros[i].preco <= filtro) {
            lista += carros[i].modelo + " - R$: " + carros[i].preco + "\n"
        }
    }

    let outFiltrados = document.querySelector('.outFiltrados')
    outFiltrados.textContent = "Carros até " + filtro + "\n" + lista

}

const btnFiltrar = document.querySelector('.btnFiltrar')
btnFiltrar.addEventListener('click', filtrarCarros)
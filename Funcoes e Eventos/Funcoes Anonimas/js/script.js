const inPreco = document.querySelector('.inPreco'),
      outOpcoes = document.querySelector('.outOpcoes')

function exibirFormarPgt() {
    const preco = 900

    let saida = ""

    for(let i = 1; i <= 10; i ++) {
        saida += `${[i]}X de R$: ${Math.floor(preco / [i]).toFixed(2)}\n`
    }
    outOpcoes.innerHTML = saida
}

document.querySelector('.btnExibirPagamento').addEventListener('click', exibirFormarPgt)


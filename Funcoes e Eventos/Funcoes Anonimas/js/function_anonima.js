//ao clicar no botão, já chama a função anônima
document.querySelector('.btnExibirPagamento').addEventListener('click', function() {
    const inPreco = document.querySelector('.inPreco'),
          outOpcoes = document.querySelector('.outOpcoes'),

          preco = Number(inPreco.value)
        
    let lista = ""

    for(let i = 1; i <= 10; i ++) {
        lista += `${[i]}X de R$: ${Math.floor(preco / [i]).toFixed(2)}\n`
    }

    outOpcoes.innerHTML = lista
})
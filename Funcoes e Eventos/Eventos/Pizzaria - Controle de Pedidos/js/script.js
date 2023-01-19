let itens = []

const inPizza = document.querySelector('.inPizza'),
      inBebida = document.querySelector('.inBebida')

      
      function trocarItem() {
    //se o pedido pizza for marcado
    if (rbPizza.checked) {
        inPizza.classList.add('exibe')
        inBebida.classList.replace('exibe', 'oculta')
    } else {
        inBebida.classList.add('oculta', 'exibe')
        inPizza.classList.replace('exibe', 'oculta')
    }
}

//referencia aos botões radios e associa função ao evento change
let rbPizza = document.querySelector('.rbPizza'),
    rbBedida = document.querySelector('.rbBedida')
rbPizza.addEventListener('change', trocarItem)
rbBedida.addEventListener('change', trocarItem)

//detalhes do item
function mostrarNumSabores() {
    //se rbPizza estiver marcado
    if(rbPizza.checked) {
        let pizza = inPizza.value //obtem o valor do item pizza selecionado

        //if ternário
        let num = (pizza === 'media') ? 2 //se media -> 2
                : (pizza ==='grande') ? 3 //se grande -> 3
                : 4 //senao -> 4

        //exibe dica no atributo placeholder (campo do preenchimento dos items)
        inDetalhes.placeholder = `Até ${num} sabores`
    }
}
//chama a função sempre que o campo detalhes do pedido receber o foco
let inDetalhes = document.querySelector('.inDetalhes')
inDetalhes.addEventListener('focus', mostrarNumSabores)

//cria uma função anônima ao evento blur (quando o campo perde o foco/clicado fora do placeholder)
inDetalhes.addEventListener('blur', function() {
    inDetalhes.placeholder = '' //limpa o campo do preenchimento
})

//ainda no detalhe do item
//cria uma função anônima ao evento keypress(telcla pressionada)
inDetalhes.addEventListener('keypress', function(tecla) {
    //se pressionou a tecla de código 13(item)
    if(tecla.keyCode === 13) {
        adicionarItem() //chama a função adicionarItem
    }
})

//função para adicionar os items do pedido
function adicionarItem() {
    const inPizza = document.querySelector('.inPizza'),
          inBebida = document.querySelector('.inBebida'),
          outPedido = document.querySelector('.outPedido')

    if (rbPizza.checked) {
        let num = inPizza.selectedIndex //obtem o numero do item selecionado
        var produto = inPizza.options[num].text //recebe o texto do item selecionado
    
    } else {
        let num = inBebida.selectedIndex
        var produto = inBebida.options[num].text
    }
    
    let detalhes = inDetalhes.value //conteudo do itemDetalhes

    itens.push(produto + " (" + detalhes + ")") //adiciona o item ao array itens

    outPedido.innerHTML = itens.join(", ")
    
    // limparCampos()
}

const btnAdicionar = document.querySelector('.btnAdicionar')
btnAdicionar.addEventListener('click', adicionarItem)


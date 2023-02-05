const inValor = document.querySelector('.inValor'),
      rdSim = document.querySelector('.rdSim'),
      rdNao = document.querySelector('.rdNao'),
      selConvenio = document.querySelector('.selConvenio'),
      outDesconto = document.querySelector('.outDesconto'),
      outPagar = document.querySelector('.outPagar')
      
function trocarItem() {
    //verifica se a opção sim foi marcada
    if(rdSim.checked) {
        selConvenio.className = 'exibir'
        outDesconto.innerHTML = 'Desconto R$: '
        outPagar.innerHTML = 'A pagar R$: '
        inValor.value = ''

    //rdNao.checked
    } else {
        selConvenio.className = 'ocultar'
        outDesconto.innerHTML = 'Desconto R$: '
        outPagar.innerHTML = 'A pagar R$: '
        inValor.value = ''
    }
}
//add evendo aos input radio
rdSim.addEventListener('change', trocarItem)
rdNao.addEventListener('change', trocarItem)

function exibirDesconto() {
    const valor = Number(inValor.value)

    //verifica se o valor foi preenchido corretamente
    if(inValor.value == 0 || isNaN(inValor.value)) {
        alert('Preencha o valor da vacina corretamente')
        inValor.value = ''
        inValor.focus()
        return
    }

    //se possui convênio
    if(rdSim.checked) {
        //obtem o index do option selecionado (qual o convênio)
        let indexConvenio = selConvenio.selectedIndex
        
        calcularDesconto(valor, indexConvenio)

    } else {
        calcularDesconto(valor)
    }
}
document.querySelector('.btnCalcular').addEventListener('click', exibirDesconto)
//DESCONTOS
// Sem convenio - 10%
// Amigo dos Animais - 20%
// Saúde Mental - 50%
function calcularDesconto(valor, indexConvenio) {
    let totalDesconto,
        pagar

    //verifica o index do option selecionado (qual o convênio)
    if(indexConvenio == 0) {
        //0 - Amigo dos Animais - 20%
        totalDesconto = valor * 0.20
        pagar = valor - totalDesconto

        return outDesconto.innerHTML = `Desconto R$: ${totalDesconto.toFixed(2)}`,
               outPagar.innerHTML = `A pagar R$: ${pagar.toFixed(2)}`
    
    } else if (indexConvenio == 1) {
        //1 - Saúde Mental - 50%
        totalDesconto = valor * 0.50
        pagar = valor - totalDesconto

        return outDesconto.innerHTML = `Desconto R$: ${totalDesconto.toFixed(2)}`,
               outPagar.innerHTML = `A pagar R$: ${pagar.toFixed(2)}`

    } else {
        //Sem convenio - 10%
        totalDesconto = valor * 0.10
        pagar = valor - totalDesconto

        return outDesconto.innerHTML = `Desconto R$: ${totalDesconto.toFixed(2)}`,
               outPagar.innerHTML = `A pagar R$: ${pagar.toFixed(2)}`
    }
}
//definindo os valores da multa e juros
const taxaMulta = 2 /100,
      taxaJuros = 0.33 / 100

function calcularMultaJuros() {
    let inDataVenc = document.querySelector('.inDataVenc'),
        inValor = document.querySelector('.inValor'),
        outMulta = document.querySelector('.outMulta'),
        outJuros = document.querySelector('.outJuros'),
        outTotal = document.querySelector('.outTotal')


    let dataVenc = inDataVenc.value,
        valor = Number(inValor.value)

    if(dataVenc == "" || valor == 0 || isNaN(valor)) {
        alert('Informe os dados da conta corretamente')
        inDataVenc.focus()
        return   
    }

    //----- manipulando as datas -----

    //--------------------------
    //a data vem no formato aaaa-mm-dd
    console.log(dataVenc)

    let partes = dataVenc.split("-") //divide as partes da dataVenc a cada "-" encontrado (formando um array)
    console.log(partes)

    //criando variáveis(instancias/dois objetos) para manipular as datas
    let hoje = new Date(),
        vencimento = new Date()
    
    //obtem cada parte do array "partes" - ["ano", "mes", "dia"]
    vencimento.setDate(Number(partes[2])) //dia
    vencimento.setMonth(Number(partes[1]) -1) //mês
    vencimento.setFullYear(Number(partes[0])) //ano

    //calculando a diferença de dias entre as datas (em milissegundos)
    const atraso = hoje - vencimento

    let juros = 0,
        multa = 0

    //se a conta estiver em atraso
    //converte os milissegundos da diferença em dias
    //(1 dia = 24h x 60min x 60s x 1000ms: 86400000)
    if(atraso > 0) {
        let dias = Math.round(atraso / 86400000) //round() é necessário em caso de horário de verão
        console.log(dias)

        //calculando a multa e juros
        multa = valor * taxaMulta
        juros = (valor * taxaJuros) * dias
    }

    //calculando o total
    let total = valor + multa + juros

    //os campos text recebem mostram os valores
    outMulta.value = multa.toFixed(2)
    outJuros.value = juros.toFixed(2)
    outTotal.value = total.toFixed(2)
}

document.querySelector('.btnCalcular').addEventListener('click', calcularMultaJuros)

//-----------------------------------------------------------------------------------
//---- Limpar Campos ----
function limparCampos() {
    location.reload()
}
document.querySelector('.btnNovaConta').addEventListener('click', limparCampos)
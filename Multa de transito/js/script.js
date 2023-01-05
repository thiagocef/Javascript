const inData = document.querySelector('.inData'),
      inValor = document.querySelector('.inValor')

function calcularValor() {
    const dataInfracao = inData.value,
          valorMulta = Number(inValor.value) //195.23

    const data = new Date(),
          dia = data.getDate(dataInfracao),
          mes = data.getMonth(dataInfracao) + 1,
          ano = data.getFullYear(dataInfracao),
          dataBr = data.toLocaleDateString() //para carater de testes

    const desconto = 0.20,
          prazo = 90,
          totalDesconto = valorMulta * desconto //156.18
    
    //*******************************/




    //testes de saída
    console.log("Dia:", dia)
    console.log("Mês:", mes)
    console.log("Ano:", ano)
    console.log("Data formato BR:", dataBr)
    console.log(`Data limite para desconto: ${dia + prazo}`)
    console.log(`Multa com desconto: ${(valorMulta - totalDesconto).toFixed(2)}`)


}

document.querySelector('.btnCalcular').addEventListener('click', calcularValor)
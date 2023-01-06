const inData = document.querySelector('.inData'),
      inValor = document.querySelector('.inValor')

function calcularValor() {
      const dataInfracao = inData.value,
            valorMulta = Number(inValor.value) //195.23

      const desconto = 0.20,
            prazo = 90,
            totalDesconto = valorMulta * desconto //156.18
    
      //*******************************/
      //manipulando as datas

      console.log(dataInfracao)
      const partes = dataInfracao.split("-")
      console.log(partes)

      let data = new Date(),
          dia = Number(partes[2]),
          mes = Number(partes[1]),
          ano = Number(partes[0]),
          dataBr = data.toLocaleDateString()


      if((dia + prazo) > 28 || mes === 2) {
            mes += 1 //adiciona 1 ao mes, caso seja fevereiro
      }








      //testes de saída
      // console.log(`Data da Infração: ${data}`)
      console.log("Dia:", dia)
      console.log("Mês:", mes)
      console.log("Ano:", ano)
      console.log(`Data limite para desconto: ${dia + prazo}`)
      console.log("Data formato BR:", dataBr)
      // console.log(`Data limite para desconto: ${Math.round((dia + prazo)) / 86400000}`)
      // console.log(`Multa com desconto: ${(valorMulta - totalDesconto).toFixed(2)}`)


}

document.querySelector('.btnCalcular').addEventListener('click', calcularValor)
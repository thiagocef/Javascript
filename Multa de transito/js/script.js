const inData = document.querySelector('.inData'),
      inValor = document.querySelector('.inValor'),
      outData = document.querySelector('.outData'),
      outDesconto = document.querySelector('.outDesconto')
      
function calcularDesconto() {
      const valorMulta = Number(inValor.value),
            desconto = valorMulta - (valorMulta * 0.20)

      //recebe a data do input e divide em partes
      const dataInfracao = inData.value,
            partesDataInfracao = dataInfracao.split("-")

      //irá manipular a data de entrada
      const date = new Date(),
            hoje = new Date()
      
      // console.log(`Data da Infração: ${dataInfracao}`)
      // console.log(partesDataInfracao)

      //seta cada parte da data no objeto date
      date.setDate(Number(partesDataInfracao[2]))
      date.setMonth(Number(partesDataInfracao[1]))
      date.setFullYear(Number(partesDataInfracao[0]))
      
      //recebe cada parte do objeto date
      let dia = date.getDate(),
          mes = date.getMonth(),
          ano = date.getFullYear(),
          prazoDesconto = mes + 3

      // console.log(`Data Formatada: ${dia}/${mes}/${ano}`)

      if (prazoDesconto === 13) {
            mes = 1
            ano += 1
            outData.innerHTML = `Data Limite para Pagamento com Desconto: ${dia}/${mes}/${ano}`
            outDesconto.innerHTML = `Valor com Desconto R$: ${desconto.toFixed(2)}`

            // console.log(`Data Limite para Pagamento com Desconto: ${dia}/${mes}/${ano}`)
      } 

      else if(prazoDesconto === 14) {
            mes = 2
            ano += 1
            outData.innerHTML = `Data Limite para Pagamento com Desconto: ${dia}/${mes}/${ano}`
            outDesconto.innerHTML = `Valor com Desconto R$: ${desconto.toFixed(2)}`

            // console.log(`Data Limite para Pagamento com Desconto: ${dia}/${mes}/${ano}`)
      } 

      else if(prazoDesconto === 15) {
            mes = 3
            ano += 1
            outData.innerHTML = `Data Limite para Pagamento com Desconto: ${dia}/${mes}/${ano}`
            outDesconto.innerHTML = `Valor com Desconto R$: ${desconto.toFixed(2)}`

            // console.log(`Data Limite para Pagamento com Desconto: ${dia}/${mes}/${ano}`)
      } 

      else {
            mes += 3
            outData.innerHTML = `Data Limite para Pagamento com Desconto: ${dia}/${mes}/${ano}`
            outDesconto.innerHTML = `Valor com Desconto R$: ${desconto.toFixed(2)}`

            // console.log(`Data Limite para Pagamento com Desconto: ${dia}/${prazoDesconto}/${ano}`)
      }
}
      

document.querySelector('.btnCalcular').addEventListener('click', calcularDesconto)
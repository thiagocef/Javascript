const inVencimento = document.querySelector('.inVencimento'),
      outParcelas = document.querySelector('.outParcelas'),
      inNumParcelas = document.querySelector('.inNumParcelas')

function exibirParcelas() {
    const vencimento = Number(inVencimento.value),
          numParcelas = Number(inNumParcelas.value)

    //manipulando as datas
    const hoje = new Date(),
          dataBr = hoje.toLocaleDateString()

    console.log("Data formato BR:", dataBr)

    const partesData = dataBr.split("/")
    console.log(partesData)

    let dia = partesData[0],
        mes = Number(partesData[1]),
        ano = Number(partesData[2])

    console.log(dia, Number(mes), ano)

    let saida = ""
    for(let i = 1; i <= numParcelas; i++) {
        
        saida += `${i}ª Parcela: ${vencimento}/0${mes+i}/${ano}\n`
    }

    outParcelas.innerHTML = saida

}

document.querySelector('.btnExibirParcelas').addEventListener('click', exibirParcelas)
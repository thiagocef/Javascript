const inVencimento = document.querySelector('.inVencimento'),
      outParcelas = document.querySelector('.outParcelas'),
      inNumParcelas = document.querySelector('.inNumParcelas')


function exibirParcelas() {
    const numParcelas = Number(inNumParcelas.value),
          vencimento = Number(inVencimento.value)

    const data = new Date()
    
    let lista = "",
        mes,
        ano = data.getFullYear()
        
        for(let i = 1; i <= numParcelas; i++) {
            data.setMonth(data.getMonth() + 1) //aumenta um mês na data
            mes = data.getMonth() + 1 //mês começa com 1
            
            //if ternário
            vencimento < 10 ? "0" + vencimento : vencimento //acrescenta 0 se dia for menor que 10
            let mesZero = mes < 10 ? "0" + mes : mes //acrescenta 0 se mes for menor que 10
            
            
            lista += `${i}ª Parcela: ${vencimento}/${mesZero}/${ano}\n`
    }
    outParcelas.innerHTML = lista
    
}

document.querySelector('.btnExibirParcelas').addEventListener('click', exibirParcelas)
function exibirHora() {
    var inBrasil = document.getElementById("inBrasil")
    var outHora = document.getElementById("outHora")

    var brasil = Number(inBrasil.value)
    var hora = brasil+5 //hora recebe a hora do brasil + 5 (fuso da França)

    //verificando se o campo foi preenchido corretamente
    if (brasil == "" || isNaN(brasil)) {
        alert(`Preencha o campo corretamente`)
        inBrasil.focus() //cursor volta pro input inBrasil
        return //retorna para a página
    }

    //condição se a hora da frança passa de 24h
    if(hora > 24) {
        hora -= 24 //hora recebe ela mesma - 24
    }

    outHora.textContent = `Hora na França: ${hora.toFixed(2)}`
}

    var btFranca = document.getElementById("btFranca")
    btFranca.addEventListener("click", exibirHora)
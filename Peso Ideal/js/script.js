function calcular() {
    //referencia aos elementos HTML
    var inNome = document.getElementById("inNome")
    var inMasculino = document.getElementById("inMasculino")
    var inFeminino = document.getElementById("inFeminino")
    var inAltura = document.getElementById("inAltura")
    var outPeso = document.getElementById("outPeso")

    //variáveis para receber os valores digitados pelo usuário
    var nome = inNome.value
    var masculino = inMasculino.checked //recebe a opção escolhida no input radio
    var feminino = inFeminino.checked   //recebe a opção escolhida no input radio
    var altura = Number(inAltura.value)

    //verifica se o nome foi preenchido corretamente
    if (nome == "" || (masculino == false && feminino == false)) {
        alert(`Informe o nome corretamente e selecione o sexo...`)
        inNome.focus() //posiciona o cursor no campo NOME
        return
    }

    //verifica se altura for vazio ou não for um número
    if (altura == 0 || isNaN(altura)) {
        alert(`Informe a altura corretamente`)
        inAltura.focus()
        return
    }

    //CALCULOS
    //se masculino for == true
    if(masculino) {
        var peso = 22 * Math.pow(altura, 2)//eleva altura ao quadrado
    } else { //se masculino for false, ou seja, feminino
        var peso = 21 * Math.pow(altura, 2)
    }

    //apresenta o resultado em outPeso
    outPeso.textContent = `Olá, ${nome}! Seu peso ideal é ${peso.toFixed(2)}`

}
    //referencia ao botão Calcular Peso
    var btResultado = document.getElementById("btResultado")
    //adicionando evento ao clicar e chamando a função
    btResultado.addEventListener("click", calcular)

//função para o botão Limpar Campos
function Limpar() {
    //recarrega página
    location.reload()
    //após recarregar, posiciona o cursor no campo NOME
    document.getElementById("inNome").focus()
}
    //referencia ao botao limpar
    var btLimpar = document.getElementById("btLimpar")
    //adicionando um evendo ao clicar e chamando a função limpar
    btLimpar.addEventListener("click", Limpar)

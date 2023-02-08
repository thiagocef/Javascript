function trocarClube() {
    const imgClube = document.querySelector('.imgClube'),
          divTitulo = document.querySelector('divTitulo')

    let clube //irá receber o nome do clube

    //verifica qual radio está selecionado
    if(rbBrasil.checked) {
        clube = 'Brasil'
    } else if(rbPelotas.checked) {
        clube = 'Pelotas'
    } else {
        clube = 'Farroupilha'
    }

    //define as classes de divTitulo: row e cores do clube
    //muda os scr do img de acordo com o clube
    imgClube.src = "/Persistencia de dados - localStorage/Loja de Esportes/img/" + clube.toLowerCase() + ".png"
    imgClube.className = 'exibe' //exibe a imagem
    imgClube.alt = "Simbolo do " + clube //modifica o atributo alt

    //salva a escolha do usuário no navegador
    localStorage.setItem('clube', clube)
}

//captura os elementos do radiobutton
const rbBrasil = document.querySelector('.rbBrasil'),
      rbPelotas = document.querySelector('.rbPelotas'),
      rbFarroupilha = document.querySelector('.rbFarroupilha')

//associa a funcao trocarClube ao evendo change 
rbBrasil.addEventListener('change', trocarClube)
rbPelotas.addEventListener('change', trocarClube)
rbFarroupilha.addEventListener('change', trocarClube)

//verificar se o usuário já escolheu um clube em uma visita anterior ao site
function verificarClube() {
    //se já estiver salvo
    if(localStorage.getItem('clube')) {
        let clube = localStorage.getItem('clube') //obtem o nome do clube salvo

        //de acordo com o clube, mascar uns dos input radio
        if(clube == 'Brasil') {
            rbBrasil.checked = true
        } else if(clube == 'Pelotas') {
            rbPelotas.checked = true
        } else{
            rbFarroupilha.checked = true
        }

        trocarClube() //chama a função que troca a imagem e as cores
    }
}
//já chama a função que verificase se o usuário já
//escolheu um clube em uma visita anterior ao site
verificarClube()



//obter as tags
let inputsRadio = document.getElementsByTagName('input')
const clubes = ['Brasil', 'Pelotas', 'Farroupilha']

//percorre todos os inputs e associa o evento change a cada um
for(let i = 0; i < inputsRadio.length; i++) {
    inputsRadio[i].addEventListener('change', trocarClube) //chama a função trocar clube
}

function trocarClube() {
    const imgClube = document.querySelector('.imgClube'),
          divTitulo = document.querySelector('.divTitulo')


    let selecao
    //percorre os button radio para verificar qual foi selecionado
    for(let i = 0; i < 4; i++) {
        if(inputsRadio[i].checked) { //se selecionado
            selecao = i              //armazena o índice do radio selecionado
            break                    //e sai da repetição
        }
    }
    
    if(selecao <= 2) { //então torce pra algum time
        divTitulo.className = "row cores" + clubes[selecao] //modifica cores

        //troca a imagem
        imgClube.src = "/Persistencia de dados - localStorage/Loja de Esportes/img/" + clubes.toLowerCase() + ".png"

        imgClube.className = 'exibr' //exibe a imagem
        imgClube.alt = "Simbolo do " + clubes[selecao] //texto alternativo
        localStorage.setItem('clube', clubes[selecao])
    
    } else { //então selecionou nenhum
        divTitulo.className = 'row'
        imgClube.className = 'oculta'
        imgClube.alt = ''
        localStorage.removeItem('clube') //remove a variável do localStorage
    } 
}

function verificarClube() {
    //se já existe um clube salvo
    if(localStorage.getItem('clube')) {
        let clube = localStorage.getItem('clube') //obtem o nome do clube
    
        //de acordo com o clube, marca um dos elementos do input radio
        if(clube == 'Brasil') {
            inputsRadio[0].checked = true
        } else if(clube == 'Pelotas') {
            inputsRadio[1].checked = true
        } else {
            inputsRadio[2].checked = true
        }
    
        trocarClube()
    }
}

verificarClube()
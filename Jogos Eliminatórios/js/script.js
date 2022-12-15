
// ['Pelotas', 'Grêmio', 'Juventude', 'Brasil', 'Internacional', 'Novo Hamburgo', 'Caxias', 'Ipiranga']
const clubes = ['Pelotas', 'Grêmio', 'Juventude', 'Brasil', 'Internacional', 'Novo Hamburgo', 'Caxias', 'Ipiranga', 'Treze', 'Campinense']
const inClube = document.querySelector('.inClube')
const outExibir = document.querySelector('.outExibir')

inClube.focus()
//--------------------------------------------------------------
//--------------------- adicionar clubes -----------------------
//--------------------------------------------------------------
function adicionarClubes() {

    const clube = inClube.value

    //verifica se o campo foi preenchido corretamente
    if((inClube.value) === "" || Number(inClube.value)) {

        alert('Preencha o campo corretamente!!')

        inClube.value = "" //limpa o campo
        inClube.focus() //posiciona o cursor
            
        return
    }

    //verifica se o clube já existe no array
    //adiciona o 'clube' ao array clubes
    clubes.indexOf(clube) === -1 ? clubes.push(clube) : alert('Clube já está cadastrado')

    console.log(clubes)
    
    inClube.value = "" //limpa o campo
    inClube.focus() //posiciona o cursor
}

const btnAdicionar = document.querySelector('.btnAdicionar')
btnAdicionar.addEventListener('click', adicionarClubes)

//--------------------------------------------------------------
//----------------------- exibir clubes ------------------------
//--------------------------------------------------------------

function listarClubes() {

    let exibirClubes = ""

    //verifica se há clubes cadastrados
    if(clubes.length === 0) {

        alert('Não há clubes cadastrados!!')
        
    }

    //percorre o array clubes e exibe o conteúdo
    for(let i = 0; i < clubes.length; i ++) {

        exibirClubes += [i] + ". " + clubes[i] + "\n"

        outExibir.innerHTML = exibirClubes

    }

}

const btnListar = document.querySelector('.btnListar')
btnListar.addEventListener('click', listarClubes)

//--------------------------------------------------------------
//----------------------- Montar tabela ------------------------
//--------------------------------------------------------------

function montarTabela() {

    let exibirTabela = ""
        
    //verifica se a quanditade de itens é ímpar
    if(clubes.length % 2 == 1) {
        alert('Número de clubes inválido!')
        return
    }

    if(clubes.length === 0) {
        alert('Lista de Clubes Vazia')
        return
    }

    //repete enquanto existir elementos no array
    while (clubes.length > 0) {
        let c = 0

        //percorre o array e solicita dos clubes por vez
        for(let i = 0; i <= clubes.length; i ++) {

            let timeA = clubes.shift(), //remove e recebe o primeiro elemento
                timeB = clubes.pop() //remove e recebe o ultimo elemento

            exibirTabela += timeA + " X " + timeB + "\n" //forma o confronto

            outExibir.innerHTML = exibirTabela

        }

        c++
    }
    console.log(clubes)
    console.log(exibirTabela)

}

const btnMontar = document.querySelector('.btnMontar')
btnMontar.addEventListener('click', montarTabela)
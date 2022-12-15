const inCandidato = document.querySelector('.inCandidato')
const inAcertos = document.querySelector('.inAcertos')
const outResultado = document.querySelector('.outResultado')

const inscricao = []
 
function adicionar() {
    const candidato = inCandidato.value,
        acertos = Number(inAcertos.value)

    //verifica se o campo foi preenchido corretamente
    if(inCandidato.value == 0 || Number(inCandidato.value)) {
        alert('Nome Inválido!')
        inCandidato.value = ""
        inCandidato.focus()
        return
    }

    //verifica se o campo foi preenchido corretamente
    if(inAcertos.value == "" || isNaN(inAcertos.value)) {
        alert('Número de Acertos Inválido!')
        inAcertos.value = ""
        inAcertos.focus()
        return
    }

    //adiciona objetos ao array
    inscricao.push({
        candidato: candidato,
        acertos: acertos
    })

    //a cada inserção, limpa os campos e posiciona o cursor em inCandidato
    inCandidato.value = ""
    inAcertos.value = ""
    inCandidato.focus()

    //mostra o nome e acertos do candidato informado
    for(let i = 0; i < inscricao.length; i++) {
        outResultado.innerHTML = inscricao[i].candidato + " - " + inscricao[i].acertos + " acertos" + "\n"
    }
    // console.log(inscricao)
}

const btnAdicionar = document.querySelector('.btnAdicionar')
btnAdicionar.addEventListener('click', adicionar)

//--------------------------------------------------------------
//---------------------- Listar Todos --------------------------
//--------------------------------------------------------------

function listarTodos() {
    let resultado = ""

    if(inscricao.length == 0) {
        alert('Ainda Não Há Candidatos Inscritos!')
        inCandidato.focus()
        return
    }

    //percorre o array e lista todos os nomes e acertos dos candidatos
    for(let i = 0; i < inscricao.length; i++) {
        resultado += inscricao[i].candidato + " - " + inscricao[i].acertos + " acertos" + "\n"
    }
    outResultado.innerHTML = resultado
}

const btnListar = document.querySelector('.btnListar')
btnListar.addEventListener('click', listarTodos)

//--------------------------------------------------------------
//------------------------ Aprovados ---------------------------
//--------------------------------------------------------------

function aprovados() {
    //verifica se há candidatos inscritos
    if(inscricao.length == 0) {
        alert('Ainda Não Há Candidatos Inscritos!')
        inCandidato.focus()
        return
    }

    //faz uma copia de inscricao para exibir em ordem decrescente
    let copia = inscricao.slice()

    //ordena pelo numero de acertos. do maior para o menor
    copia.sort(function(a, b){
        return b.acertos - a.acertos
    })
    
    //recebe o número de acertos para aprovação
    const media = prompt('Número de acertos para aprovação: ')

    let resultado = ""

    //aqui os acertos já estão na ordem decrescente
    //percorre o array e mostra os candidatos com acertos >= media
    for (let i = 0; i < copia.length; i++) {
        if (copia[i].acertos >= media) {
            // console.log(inscricao[i])

            resultado += copia[i].candidato + " - " + copia[i].acertos + " acertos" + "\n"
        }
        outResultado.innerHTML = resultado
    }

   
}

const btnAprovados = document.querySelector('.btnAprovados')
btnAprovados.addEventListener('click', aprovados)
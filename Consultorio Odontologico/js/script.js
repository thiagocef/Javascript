let pacientes = []

function addPacientes() {
    let inPaciente = document.querySelector('.inPaciente')
    let outLista = document.querySelector('.outLista')

    let nome = inPaciente.value

    if(nome == '') {
        alert('Informe o nome do paciente')
        inPaciente.focus()
        return
    }

    //adiciona no final do array
    pacientes.push(nome)

    let lista = ''

    for(let i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n"
    }

    outLista.textContent = lista

    inPaciente.value = ''
    inPaciente.focus()
}

const btnAdicionar = document.querySelector('.btnAdicionar')
btnAdicionar.addEventListener('click', addPacientes)


function urgencia() {
    let inPaciente = document.querySelector('.inPaciente')
    let outLista = document.querySelector('.outLista')

    let nome = inPaciente.value

    if(nome == '') {
        alert('Informe o nome do paciente')
        inPaciente.focus()
        return
    }

    //unshift adiciona no início do array
    pacientes.unshift(nome)

    let lista = ''

    for(let i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n"
    }

    outLista.textContent = lista

    inPaciente.value = ''
    inPaciente.focus()
}

const btnUrgencia = document.querySelector('.btnUrgencia')
btnUrgencia.addEventListener('click', urgencia)

function atenderPaciente() {
    let outAtendimento = document.querySelector('.outAtendimento')
    let outLista = document.querySelector('.outLista')
    
    //se o array esiver vazio
    if(pacientes.length == 0) {
        alert('Não há pacientes na fila de espera')
        inPaciente.focus()
        return
    }


    //shift pega o primeiro item e remove do array
    let atender = pacientes.shift()
    let lista = ''

    outAtendimento.textContent = atender

    for(i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n"
    }

    outLista.textContent = lista
}

const btnAtender = document.querySelector('.btnAtender')
btnAtender.addEventListener('click', atenderPaciente)
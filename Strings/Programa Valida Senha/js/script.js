const inPassword = document.querySelector('.inPassword')
const outCheck = document.querySelector('.outCheck')

function validarSenha() {
    const senha = inPassword.value,
          tam = senha.length,
          num = senha.match(/[0-9]/g),
          minu = senha.match(/[a-z]/g),
          maiu = senha.match(/[A-Z]/g),
          simb = senha.match(/\W|_/g) 
    
    //saídas
    console.log('Tamanho da senha: ', tam)
    console.log('Números: ', num)
    console.log('Letras minúsculas: ', minu)
    console.log('Letras maiúsculas: ', maiu)
    console.log('Símbolos: ', simb)

    //verificar o tamanho da senha
    if((tam < 8) || (tam > 15)) {
        outCheck.innerHTML = '[ERRO] A senha deve ter entre 8 e 15 caracteres!!'
    } 
        //verificar se contém um numero
        else if(num == null) {
            outCheck.innerHTML = '[ERRO] A senha deve ter entre 8 e 15 caracteres, no mínimo 1 número!!'
        } 
            //verificar se contém letra minúscula (se for FALSO/null)
            else if (!minu) {
                outCheck.innerHTML = '[ERRO] A senha deve ter entre 8 e 15 caracteres, no mínimo 1 número, 1 letra minúscula!!'
            }
                //verificar se contém letra maiúscula
                else if ((maiu == null) || (maiu.length < 2)) {
                    outCheck.innerHTML = '[ERRO] A senha deve ter entre 8 e 15 caracteres, no mínimo 1 número, no mínimo 1 letra minúscula, pelo menos 2 letras maiúsculas!!'
                }
                    //verificar se contém símbolo
                    else if (simb == null) {
                        outCheck.innerHTML = '[ERRO] A senha deve ter entre 8 e 15 caracteres, no mínimo 1 número, 1 letra minúscula, pelo menos 2 letras maiúsculas e pelo menos 1 símbolo!!'
                    }
                        //se a senha atender a todos os requisitos...
                        else {
                            outCheck.innerHTML = 'OK! Senha Válida'
                        } 



}

document.querySelector('.btnValidar').addEventListener('click', validarSenha)
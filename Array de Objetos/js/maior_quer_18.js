const idades = [12, 16, 15, 17, 14]

let maiores = false

for(let i = 0; i < idades.length; i++) {
    if(idades[i] >= 18) {
        console.log(`Maior que 18 anos: ${idades[i]}`)
        maiores = true
    }
}

if(!maiores) {
    console.log('Não há idades maiores que 18 na lista')
}

// idades.forEach(idade => {
//     if(idade >= 18) {
//         console.log(`Maior que 18 anos: ${idade}`)
//         maiores = true
//     }

// });

// if(!maiores) {
//     console.log('Não há idades maiores que 18 na lista')
// }
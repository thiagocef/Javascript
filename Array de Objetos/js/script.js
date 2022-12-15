const carros = []

//inclui objetos dentro do array carros
carros.push({
    modelo: 'Fusca',
    preco: 6500
})

carros.push({
    modelo: 'Escort',
    preco: 7800
})

// for(let i = 0; i < carros.length; i++) {
//     console.log(`Modelo: ${carros[i].modelo} - R$${carros[i].preco}`)
// }

carros.forEach(carro => {
    console.log(`Modelo: ${carro.modelo} - R$${carro.preco}`)
});
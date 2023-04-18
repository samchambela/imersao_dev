// ÉPICO (um conjunto de histórias): Um jogo de palpite

// História: Mentalista


// 1-Sistema gera um número randômico entre 0 e 1000
var numeroSorteado = parseInt(Math.random() * 1001)
console.log(numeroSorteado); //faz verificação no console do navegador


// 5- Se o usuário errou o palpite,
//    o prompt aparece novamente para que o usuário tente denovo (recomeçando o fluxo)
while (numeroSorteado != palpite) {

    // 2- Prompt aparece pedindo ao usuário um palpite entre 0 e 1000
    var palpite = prompt('Insira um palpite de um número inteiro entre 0 e 1000.');

    // 3- Usuário clica "Ok" para enviar o palpite

    // 4- O sistema informa para o usuário é maior ou menor que o palpite dado
    //    ou se ele acertou o palpite. 
    if (numeroSorteado == palpite) {
        alert('Parabéns, você acertou!')
    } else if (numeroSorteado > palpite) {
        alert('Errooouu... estou pensando em um número maior.')
    } else {
        alert('Errooouu... estou pensando em um número menor.')
    }

}

// ÉPICO (um conjunto de histórias): Um jogo de palpite

// História: Mentalista

// Time-out para auxiliar o carregamento dos objetos da página
// (1000 = 1000ms ou 1s)
setTimeout(() => {
    alert('Boas-vindas ao Mentalista, o jogo da adivinhação!')
}, 1000)

// Time-out para começar a executar o jogo
setTimeout(() => {
    // 1- Sistema gera um número randômico entre 1 e 1000
    var numeroSorteado = parseInt(Math.random() * 1000) + 1
    console.log(numeroSorteado); //faz verificação no console do navegador

    // 6- Se o usuário errou o palpite,
    //    o prompt aparece novamente para que o usuário tente denovo (recomeçando o fluxo)
    while (numeroSorteado != palpite) {

        // 2- Prompt aparece pedindo ao usuário um palpite entre 0 e 1000
        var palpite = parseInt(prompt('Insira um palpite de um número inteiro entre 1 e 1000.'));
        // var palpite = prompt('Insira um palpite de um número inteiro entre 1 e 1000.');
        // palpite = parseInt(palpite)

        // 3- Se o palpite for diferente dos números inteiros entre 1 e 1000, 
        // mensagem de palpite inválido e volta para o prompt
        if (isNaN(palpite)) {
            alert('O palpite é inválido.')
        } else if (palpite < 1 || palpite > 1000) {
            alert('O palpite é inválido.')
        } else if (!Number.isInteger(palpite)) {
            alert('O palpite é inválido.')
        } else {

            // 4- Usuário clica "Ok" para enviar o palpite

            // 5- O sistema informa para o usuário é maior ou menor que o palpite dado
            //    ou se ele acertou o palpite. 

            if (numeroSorteado == palpite) {
                alert('Parabéns, você acertou!')
            } else if (numeroSorteado > palpite) {
                alert('Errooouu... estou pensando em um número maior.')
            } else {
                alert('Errooouu... estou pensando em um número menor.')
            }
        }
    }
}, 3000)

//desafios:
//colocar de 1 a 1000 ao invés de 0 a 1000
//contabilizar nº de tentativas
//qual o número máximo de tentativas alguém precisa dar para acertar
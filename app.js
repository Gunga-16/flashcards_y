console.log('Olá, Mundo');


function virarCartao(card){
    const answer = card.querySelector('.resposta');
    if (answer.style.display === 'none'){
        answer.style.display = 'block';
    } else {
        answer.style.display = 'none';
    }
}
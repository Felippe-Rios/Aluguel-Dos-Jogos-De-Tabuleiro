//primeiro preciso recuperar o id do jogo clicado, para isso vou criar uma função que vai receber o id do jogo clicado como parâmetro
function alterarStatus(gameId) {
    //agora preciso recuperar todos os elementos do html que representão a classe do botão, e outras informações do jogo clicado, para isso vou usar o document.getElementById() e passar o id do jogo clicado como parâmetro
    
    let JogoClicado = document.getElementById(`game-${gameId}`);
    //document.getElementById(puxa o id do jogo clicado)
    
    let botão = JogoClicado.querySelector('.dashboard__item__button');//o ponto e para dizer que é uma classe, e o querySelector vai puxar o elemento do html que tem a classe dashboard__item__button
    let imagemdojogoclicado = JogoClicado.querySelector('.dashboard__item__img');
    let nomeDoJogoClicado = JogoClicado.querySelector('.dashboard__item__name');
    
    //agora para testar vou criar um alert que vai mostrar o nome do jogo clicado
    alert(`O jogo clicado é: ${nomeDoJogoClicado.textContent}`);

    if (imagemdojogoclicado.classList.contains('dashboard__item__img--rented')) { 
        imagemdojogoclicado.classList.remove('dashboard__item__img--rented');      
        botão.classList.remove('dashboard__item__button--return');
        botão.textContent = 'Alugar'; 
} else {
        imagemdojogoclicado.classList.add('dashboard__item__img--rented');
        botão.textContent = 'Devolver';
        botão.classList.remove('dashboard__item__button--rent');
        botão.classList.add('dashboard__item__button--return');  
              
    }   
}

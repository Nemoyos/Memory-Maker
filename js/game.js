const grid = document.querySelector('.grid'); //Daqui//

const pokemons = [
    '001' ,  
    '002' , 
    '003' , 
    '004' ,      
    '005' ,   
    '006' ,
    '007' ,
    '008' ,
    '009' ,
    '010' ,
];  


const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;


}

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');

    if (disabledCards.length == 20 ) {

        alert ('Parabéns Treinador, Você capturou todos eles!');

    }


}

let firstCard='';
let secondCard='';

const checkCards = () =>  {
    const primeiroPokemon = firstCard.getAttribute('data-character');
    const segundoPokemon = secondCard.getAttribute('data-character');
   

    if (primeiroPokemon == segundoPokemon ) {

        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard='';
        secondCard='';

        checkEndGame();

    }else {

        setTimeout(() => {        
        
        firstCard.classList.remove('reveal-card');
        secondCard.classList.remove('reveal-card');   
        
        firstCard='';
        secondCard='';
        


        } ,500);        
    }
    

}
const revealCard = ({ target }) => { // + esse (A) gerão efeito de clicks nas cartas

    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }
    
    if (firstCard == '') {
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    } else if (secondCard == '') {
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();
    }


    

}

const creatCard = (pokemon) =>  {
    const card = createElement('div' , 'card');
    const front = createElement('div' , 'face front');
    const back = createElement('div' , 'face back');

    front.style.backgroundImage = `url('../imagens/${pokemon}.png')`;

    card.appendChild(front);
    card.appendChild(back);
    card.addEventListener('click', revealCard); // esse (A)

    card.setAttribute('data-character', pokemon);

return card;

}

const loadGame = () => { // essa função carrega o jogo

    const duplicatePokemon = [ ...pokemons, ... pokemons];
    
    const shuffledArray = duplicatePokemon.sort(() => Math.random() - 0.5);
    
    shuffledArray.forEach((pokemon) => {
        const card = creatCard(pokemon);
        grid.appendChild(card);
    });

 } // ate aqui é basicamente pra criar e mecanizar um deck de cartas//

loadGame();
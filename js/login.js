const input = document.querySelector('.nome');
const button = document.querySelector('.button');
const form = document.querySelector('.login-for');

const validateInput = ({ target }) => {
    if (target.value.length > 2) {
      button.removeAttribute('disabled');
       //so deus sabe como isso funcionou!
    return }
    else {
        button.setAttribute('disabled', '');
    }
}

const handleSubmit = (event) => {
    event.preventDefault();
   
    localStorage.setItem('player', input.value); // Salvar coisas no Browser
    window.location = 'pages/game.html'; // pra puxar outra pagina
    
}


input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);
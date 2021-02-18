import './index.scss';
import './navbar-burguer';

const typer = require('typer-js')

const ocupacaoSubtitle = document.getElementById('ocupacao-subtitle');

typer(ocupacaoSubtitle, {
    min: 70,
    max: 100
})  
    .cursor(true)
    .line('Desenvolvedor Fullstack')
    .pause(1500)
    .back('all')
    .repeat(Infinity);

document.addEventListener("DOMContentLoaded", function(event) {
    setTimeout(() => {
        document.getElementById('page-loader').classList.remove('is-active');
    }, 500);
});
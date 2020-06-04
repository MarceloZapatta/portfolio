import './index.scss';
import './navbar-burguer';

const typer = require('typer-js')

const ocupacaoSubtitle = document.getElementById('ocupacao-subtitle');

typer(ocupacaoSubtitle, {
    min: 70,
    max: 100
})  
    .cursor(true)
    .line('Desenvolvedor Fullsta')
    .back(3)
    .pause(500)
    .continue('stack')
    .pause(1000)
    .back('all')
    .repeat(Infinity);

document.addEventListener("DOMContentLoaded", function(event) {
    console.log(document.getElementById('page-loader'));
    document.getElementById('page-loader').classList.remove('is-active');
});
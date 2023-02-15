VMasker(document.querySelector('#altura')).maskPattern('9.99');
let btnCalcular = document.querySelector('#btn-calcular'); //Seleciona um objeto
let btnLimpar = document.querySelector('#btn-limpar'); //Seleciona um objeto

function calcular(event) {
    event.preventDefault();
    let resultado = document.querySelector('#resultado'); //Seleciona um objeto
    let tabela = document.querySelector('#tabela'); //Seleciona um objeto

    resultado.style.display = 'block'; // mostra o objeto
    tabela.style.display = 'table'; //mostra o objeto

    let altura = parseFloat(document.querySelector('#altura').value);
    let peso = parseFloat(document.querySelector('#peso').value);
    let imc = peso / (altura * altura) || 0; //as duras barras significam ou 

    resultado.innerHTML = 'O seu IMC é ' + imc.toFixed(2); //toFixed (seleciona a quantidade de casas decimais que vc deseja após a vírgula)

    const elements = document.querySelectorAll('table .bg-success');

    elements.forEach((element) => {
        element.classList.remove('bg-success');
        element.classList.remove('text-white');
    });

    if (imc < 18.5) {
        let linha = document.querySelector('#result_calc_0');
        linha.classList.add('bg-success');
        linha.classList.add('text-white');
    }

    if (imc >= 18.5 && imc <= 24.9) {
        let linha = document.querySelector('#result_calc_1');
        linha.classList.add('bg-success');
        linha.classList.add('text-white');
    }

    if (imc >= 25.0 && imc <= 29.9) {
        let linha = document.querySelector('#result_calc_2');
        linha.classList.add('bg-success');
        linha.classList.add('text-white');
    }

    if (imc >= 30.0 && imc <= 39.9) {
        let linha = document.querySelector('#result_calc_3');
        linha.classList.add('bg-success');
        linha.classList.add('text-white');
    }

    if (imc >= 40.0) {
        let linha = document.querySelector('#result_calc_4');
        linha.classList.add('bg-success');
        linha.classList.add('text-white');
    }



}

function limpar(event) {
    event.preventDefault();
    let resultado = document.querySelector('#resultado'); //Seleciona um objeto
    let tabela = document.querySelector('#tabela'); //Seleciona um objeto
    let altura = document.querySelector('#altura'); //Seleciona um objeto
    let peso = document.querySelector('#peso');//Seleciona um objeto

    resultado.style.display = 'none'; // esconde o objeto
    tabela.style.display = 'none'; //esconde o objeto
    altura.value = '';
    peso.value = '';
}

btnCalcular.addEventListener('click', calcular); //adiciona um evento
btnLimpar.addEventListener('click', limpar); //adiciona um evento


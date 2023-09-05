const button = document.getElementById('button');
const nome = document.getElementById('nome');
const Altura = document.getElementById('Altura');
const Resultado = document.getElementById('Resultado');



const getText = (imc) => {
    if(imc > 40) return 'Obesidade grau III';
    if(imc > 35) return 'Obesidade grau II';
    if(imc > 30) return 'Obesidade grau I';
    if(imc > 25) return 'Levemente acima do peso';
    if(imc > 18.5) return 'Peso ideal';
    return 'Abaixo do peso';
}


const imcCalc = () =>{
    if(!Peso.value || !Altura.value || !nome.value) return Resultado.textContent = 'Preencha todos os campos';
const valorImc = (+Peso.value / (Altura.value * Altura.value)).toFixed(1);
Resultado.textContent = `${nome.value} = ${getText(valorImc)}`;
}

button.addEventListener('click', imcCalc);


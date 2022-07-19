

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#Calculo1');
const input2 = document.querySelector('#Calculo2');
const btn = document.querySelector('#Calcular');
const p = document.querySelector('#Resultado');
const f = document.querySelector('#formulario');

btn.addEventListener('click',btnClick);
btn.setAttribute('type','bitton');

function btnClick(event){
  event.preventDefault();
  console.log(event);
  let mensaje ='';
  if (isNaN(input1.value) || isNaN(input2.value)){
      alert('Valores invalido');
  }
  else{
    console.log(parseInt(input1.value));
    p.innerHTML = 'Resultado: ' + (parseInt(input1.value) + parseInt(input2.value)).toString();
  }
}
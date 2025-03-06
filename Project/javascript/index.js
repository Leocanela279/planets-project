let entradaUsuario = document.getElementById('entradaPes');

let planeta = document.getElementById('seleccionaPlaneta');

let button = document.querySelector('button');

let resultado = document.querySelector('p');

let imagen = document.querySelector('img');

let pesos = [0.38,0.91,1.00,0.38,2.34,1.06,0.92,1.19,0.06];

let planetas = ['Mercuri','Venus','Terra','Mart','Júpiter','Saturn','Urà','Neptú','Plutó'];

button.addEventListener('click',() =>{

    let entrada = parseFloat(entradaUsuario.value);

    let select = planeta.value;

    console.log(entrada)
    console.log(select)

    for (let i = 0; i < pesos.length; i++) {

        let calculo;
        
        if(select === 'mercuri'){
            calculo = entrada * pesos[0];
            resultado.innerHTML = `El peso de este elemento es: ${calculo}kg`;
            imagen.setAttribute('src', './images/mercuri.png');
        }

        if(select === 'venus'){
            calculo = entrada * pesos[1];
            resultado.innerHTML = `El peso de este elemento es: ${calculo}kg`;
            imagen.setAttribute('src', './images/venus.png');
        }

        if(select === 'terra'){
            calculo = entrada * pesos[2]
            resultado.innerHTML = `El peso de este elemento es: ${calculo}kg`;
            imagen.setAttribute('src', './images/terra.png');
        }

        if(select === 'mart'){
            calculo = entrada * pesos[3]
            resultado.innerHTML = `El peso de este elemento es: ${calculo}kg`;
            imagen.setAttribute('src', './images/mart.png');
        }

        if(select === 'jupiter'){
            calculo = entrada * pesos[4]
            resultado.innerHTML = `El peso de este elemento es: ${calculo}kg`;
            imagen.setAttribute('src', './images/jupiter.png');

        }

        if(select === 'saturn'){
            calculo = entrada * pesos[5]
            resultado.innerHTML = `El peso de este elemento es: ${calculo}kg`;
            imagen.setAttribute('src', './images/saturn.png');
        }

        if(select === 'ura'){
            calculo = entrada * pesos[6]
            resultado.innerHTML = `El peso de este elemento es: ${calculo}kg`;
            imagen.setAttribute('src', './images/ura.png');
        }

        if(select === 'neptu'){
            calculo = entrada * pesos[6]
            resultado.innerHTML = `El peso de este elemento es: ${calculo}kg`;
            imagen.setAttribute('src', './images/neptu.png');
        }

        if(select === 'pluto'){
            calculo = entrada * pesos[7]
            resultado.innerHTML = `El peso de este elemento es: ${calculo}kg`;
            imagen.setAttribute('src', './images/pluto.png');
        }

        
    }



});
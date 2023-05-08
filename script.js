$(document).ready(function () {
    $("#cpf").mask("000.000.000-00");
});

document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
    
        var btn = document.querySelector("#botao");
      
      btn.click();
    
    }
  });

function gerar() {
    var numeros = Array(10);


        for(let i = 0; i<9; i++) {
            numeros[i] = parseInt(Math.random() * (9 - 0) + 0);
        }

        var comparador = numeros[0];
    
        var cpfSoma = eval(numeros[0] * 1 + numeros[1] * 2 + numeros[2] * 3 + numeros[3] * 4 + numeros[4] * 5 + numeros[5] * 6 + numeros[6] * 7 + numeros[7] * 8 + numeros[8] * 9);


        numeros[9] = cpfSoma%11;

        if(numeros[9] == 10) {
            numeros[9] = 0;
        }
    
        //Passo 2
    
        var cpfSoma2 = eval(numeros[0] * 0 + numeros[1] * 1 + numeros[2] * 2 + numeros[3] * 3 + numeros[4] * 4 + numeros[5] * 5 + numeros[6] * 6 + numeros[7] * 7 + numeros[8] * 8 + numeros[9] * 9);
    
        if(cpfSoma2%11 == 10) {
            numeros[10] = 0;
        } else {
            numeros[10] = cpfSoma2%11;
        }

    //console.log(cpfSoma);

    //console.log(cpfResto);

    //console.log(cpfResto2);

    const cpfinput = document.getElementById("cpf");

    let cpf = "";

    for(var i = 0; i<11; i++) {
        cpf += numeros[i].toString();
    }

    const checkinput = document.getElementById("pont");

    if(checkinput.checked) {
        cpf = cpf.replace(/\D/g, ''); // remove qualquer caractere não numérico
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // adiciona o primeiro ponto separador
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // adiciona o segundo ponto separador
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

        cpfinput.value = cpf;
    } else {
        cpfinput.value = cpf;
    }

    //if(cpfResto == numeros[9] && cpfResto2 == numeros[10] && !numeros.every(el =>(el === comparador))) {
        
    //} else if(!numeros.every(el =>(el === comparador))) {
        
    //}
}
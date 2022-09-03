//alert("Ok")
var N = document.getElementById('N');

var resposta = document.getElementById("resposta");

resposta.style.display = 'none';

function calc_log(){
  //alert(N.value);
	var valor = N.value;
	var resultado = 0;

	if(valor == 10){
		resultado = 1;
	} else{
		for (var i = 1; i <= 20; i++){

			if(valor <10){
				resultado = resultado + resultado * 1/2;
				valor = valor * valor; 
				console.log(resultado);
			} else{
				valor = valor / 10;
				resultado = resultado + resultado;
			}

        	
			
			//resultado = resultado * i;
    	}
	}
	

	//alert(resultado);
	resposta.innerHTML = "O logarítmo de "+N.value+" é: "+thousandsSeparator(resultado,'.');
	resposta.style.display = 'block';
}

function limpar(){
	resposta.innerHTML = "";
	resposta.style.display = 'none';
}

// obtido de: https://codigofonte.org/javascript-separador-de-milhar/
function thousandsSeparator(val,sep) {
    var sRegExp = new RegExp('(-?[0-9]+)([0-9]{3})'),
    sValue=val+'';

    if (sep === undefined) {sep=',';}
    while(sRegExp.test(sValue)) {
        sValue = sValue.replace(sRegExp, '$1'+sep+'$2');
    }
    return sValue;
}

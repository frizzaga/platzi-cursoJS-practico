const lista = [500,300,100,10000];

function esPar(numero){
    if (numero%2 === 0){
        return true;
    }else {
        return false;
    }
}


function calcularMediana(lista){

    const mitadLista = parseInt(lista.length/2);
    let mediana;

    var numerosOrdenados = lista.sort(function(a,b) {
        return a - b; 
    });
    
    if (esPar(numerosOrdenados.length)){
        const valor1 = numerosOrdenados[mitadLista];
        const valor2 = numerosOrdenados[mitadLista-1];
    
        mediana = (valor1 + valor2)/2;
    
    }else{
        mediana = numerosOrdenados[mitadLista];
    }
    return mediana;

}


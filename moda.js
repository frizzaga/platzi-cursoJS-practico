const lista1=[2,3,4,2,3,2,2,7,100,5];

const lista1Count={};

lista1.map(
    function(elemento){
        if(lista1Count[elemento]){
            lista1Count[elemento] += 1;
        }else {
            lista1Count[elemento] = 1;
        }
    }
);

const lista1Array = Object.entries(lista1Count).sort(
    function(valorAcumulado, nuevoValor){
        return valorAcumulado[1] - nuevoValor[1];
    }
);//objects.entries transforma un objeto en un array a

const moda = lista1Array[lista1Array.length - 1];




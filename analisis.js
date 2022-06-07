const salariosCol = colombia.map(
    function (persona){
        return persona.salary;
    }
);

const SalariosColOrdenado = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

function esPar(numero){
    return (numero % 2 === 0);
    }

function calcularPromedio(lista){

        // let sumaLista=0;
    
        // for(let i=0; i<lista.length;i++){
        //     sumaLista+=lista[i];
        
        // }
        
        const sumaLista = lista.reduce(
            function (valorAcumulado = 0, nuevoValor){
                return valorAcumulado + nuevoValor;
            }
        )
    
        const promedioLista = sumaLista/lista.length;
        
        return promedioLista;
}
    
function medianaSalarios(lista){

    const mitad = parseInt(lista.length/2);

    if(esPar(lista.length)){
        const persona1 = lista[mitad-1];
        const persona2 = lista[mitad];

        const mediana = calcularPromedio([persona1,persona2]);
        return mediana;

    } else {

        const personaMitad = lista[mitad];
        return personaMitad;

    }

}

const medianaGeneralCol = medianaSalarios(SalariosColOrdenado);

const spliceStart=(SalariosColOrdenado.length*90)/100;
const spliceCount=SalariosColOrdenado.length - spliceStart;

const SalariosColTop10=SalariosColOrdenado.splice(spliceStart,spliceCount);

const medianaTop10Col = medianaSalarios(SalariosColTop10);

console.log({medianaGeneralCol,medianaTop10Col});


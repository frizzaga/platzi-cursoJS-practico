//código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado){

    return lado * 4;
}
//console.log("El perimetro del cuadrado miden: " + perimetroCuadrado + " cm.");

function areaCuadrado(lado){

  return lado * lado;
}
// console.log("El área del cuadrado miden: " + areaCuadrado + " cm2");

console.groupEnd();

//código del triángulo

console.group("Triángulos")

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;


// console.log("Los lados del triángulo miden: " + ladoTriangulo1 + " cm, " + ladoTriangulo2 + " cm " + " la base mide:" + baseTriangulo + "cm");
// console.log("la Altura del triángulo mide:" + alturaTriangulo + " cm");

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base    
}
//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
//console.log("El perimetro del triángulo mide: " + perimetroTriangulo + " cm.");

function areaTriangulo(base, altura){
    return (base * altura) / 2;
} 
//console.log("El área del trinángulo miden: " + areaTriangulo + " cm2");


console.groupEnd();


//código del triángulo

console.group("Círculos")

//const radioCirculo=4;


function diametroCirculo(radio){
 return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio){ 
    
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}  

// console.log("Los datos del Círculo son: radio: " + radioCirculo + " diámetro: " + diametroCirculo + " PI: " + PI);
// console.log("El perimetro del círculo es: " + perimetroCirculo + " cm");
// console.log("El área del círculo es: " + areaCirculo );

console.groupEnd();

function calcularPerimetroCuadrado(){

    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}

function calcularAreaCuadrado(){

    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
    
}

function calcularAlturaTriangulo(){

    const lado1 = document.getElementById("inputLado1");
    const lado2 = document.getElementById("inputLado2");
    const base = document.getElementById("inputBase");

    if (lado1.value == lado2.value){
        const altura = Math.sqrt((lado1.value*lado1.value)-((base.value/2)*(base.value/2)));
        alert("La altura del triángulo isoceles es: " + altura);
    } else {
        alert("Los lados deben ser iguales");
    }

}

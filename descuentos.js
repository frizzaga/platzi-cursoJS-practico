

// const precioOriginal=120;
// const descuento = 18;

function calcularPrecioConDescuento(precio,descuento){

    const  porcentajePrecioConDescuento=100-descuento;

    const precioConDescuento=(precio * porcentajePrecioConDescuento) /100;
    
    return precioConDescuento;

}

function CalcularPrecio(){

    const precio = document.getElementById("inputPrecio");
    const descuento = document.getElementById("inputDescuento");

    const precioValor=precio.value;
    const descuentoValor=descuento.value;

    const precioConDescuento=calcularPrecioConDescuento(precioValor,descuentoValor);

    const resultP = document.getElementById("PrecioDescuento");

    resultP.innerText="El precio con descuento son: $ "+precioConDescuento;


}


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });



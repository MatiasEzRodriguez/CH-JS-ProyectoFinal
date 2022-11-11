/*const cliente = {
    nombre: prompt("ingrese su Nombre"),
    apellido: prompt("ingrese su apellido"),
    dni: prompt("ingrese su numero de dni"),
    mail: prompt("ingrese su direccion de correo"),
};
let anio = prompt("Ingresa el año del vehiculo");
let marca = prompt("ingresa la marca del vehiculo");
let modelo = prompt("ingresa el modelo del vehiculo");
let valor = prompt("ingresa el valor de venta de tu vehiculo");*/
const select = document.querySelector('#cobertura')
select.addEventListener('change', () => {
    console.log("cambio");
    let ncobertura = select.options[select.selectedIndex].value;
    console.log(ncobertura);
})

const formulario = document.querySelector('form')
console.log(formulario);

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    let form = e.target;

    const cliente = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        dni: document.getElementById("dni").value,
        mail: document.getElementById("mail").value

    };
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let anio = document.getElementById("anio").value;
    let valor = document.getElementById("valor").value;

    console.log(form);
    console.log(form.children[0].value);
    console.log(form.children[1].value);
    console.log(form.children[2].value);
    console.log(form.children[3].value);
    console.log(form.children[5].value);
    console.log(form.children[6].value);
    console.log(form.children[7].value);
    console.log(form.children[8].value);
})

let anioactual = 2022;
let antiguedad = anioactual - anio;
let municipalizado;
if (antiguedad > 10) {
    municipalizado = true;
} else {
    municipalizado = false;
}

let cotizacion;
let cotizacion2;
let cobertura;
/*let ncobertura = prompt(
    "ingrese el tipo de cobertura que desea \n 1-Contra Terceros \n 2-Todo Riesgo");
switch (ncobertura) {
    case "1":
        console.log("seleccionaste cobertura contra terceros");
        break;
    case "2":
        console.log("seleccionaste cobertura contra todo riesgo");
        break;
    default:
        console.log("opcion no valida");
        break;
}*/
const franquisia = [10, 8, 5, 0];
let montoFranquisia = [];
function valfranquisia(val1, val2) {
    return (val1 * val2) / 100;
}
function cotizar(num1, num2) {
    return num1 * num2;
}
function cotizar2(num1, num2) {
    return (num1 * num2) * 1.25;
}
if (ncobertura == 1) {
    cobertura = "Contra Terceros";
    if (municipalizado == true) {
        cotizacion = cotizar(valor, 0.005);
    } else {
        cotizacion = cotizar(valor, 0.008);
    }

    console.log(cliente);
    console.log("año: ", anio);
    console.log("marca: ", marca);
    console.log("modelo: ", modelo);
    console.log("valor: ", valor);
    console.log("cobertura: ", cobertura);
    console.log("antigüedad: ", antiguedad);
    console.log("La cotizacion mensual de la poliza es: ", cotizacion);

}
if (ncobertura == 2) {
    cobertura = "Contra Todo Riesgo";
    if (municipalizado == true) {
        cotizacion = cotizar(valor, 0.009);
        cotizacion2 = cotizar2(valor, 0.009);
        montoFranquisia[0] = valfranquisia(valor, franquisia[0]);
        montoFranquisia[1] = valfranquisia(valor, franquisia[1]);
    } else {
        cotizacion = cotizar(valor, 0.014);
        cotizacion2 = cotizar2(valor, 0.014);
        montoFranquisia[0] = valfranquisia(valor, franquisia[2]);
        montoFranquisia[1] = valfranquisia(valor, franquisia[3])

    }

    console.log(cliente);
    console.log("año: ", anio);
    console.log("marca: ", marca);
    console.log("modelo: ", modelo);
    console.log("valor: ", valor);
    console.log("cobertura: ", cobertura);
    console.log("antigüedad: ", antiguedad);
    console.log("La cotizacion mensual de la poliza es: ", cotizacion);
    console.log("Con franquisia de: ", montoFranquisia[0]);
    console.log("O tambien: ", cotizacion2);
    console.log("Con franquisia de: ", montoFranquisia[1]);
}









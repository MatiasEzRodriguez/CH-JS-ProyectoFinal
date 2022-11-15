
const select = document.querySelector('#cobertura')
let ncobertura;
select.addEventListener('change', () => {
    console.log("cambio");
    ncobertura = select.options[select.selectedIndex].value;
    console.log(ncobertura);
    
})

const formulario = document.querySelector('form')

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(ncobertura);
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

    console.log(form.nombre.value);
    console.log(form.apellido.value);
    console.log(form.dni.value);
    console.log(form.mail.value);
    console.log(form.marca.value);
    console.log(form.modelo.value);
    console.log(form.anio.value);
    console.log(form.valor.value);


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
})








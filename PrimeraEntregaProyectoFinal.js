//validacion de correo

let ussEmail = ''
let confUssEmail= ''
let volverPreguntar = true

do {
    ussEmail = prompt('ingrese su correo:')
    confUssEmail = prompt ('confirme su correo')

    if (ussEmail === confUssEmail) {
        alert('el correo ' + ussEmail + 'ha sido guardada con exito!')
        volverPreguntar = false
    }else{
        alert('los datos no coinciden, intente nuevamente.')
        
    }
} while (volverPreguntar);


//definimos funcion para calculo de electrodos

const ValorElectrodo = (a, b) =>{ //a=diametro del electrodo b= altura+2.5cm
    
    const VolumenElectrodo = 3.14*0.25*(a**a)*(b + 2.5);
    const ValorMatElectrodo = ((VolumenElectrodo*PesoCobreCromo)/1000)*valorMaterial; 
    const ValorMOElectrodo = ((a*b*ConstanteTiempoMO)/60)*ValorMO;
    const TotalElectrodo = (ValorMatElectrodo+ValorMOElectrodo)*1.4;

    return TotalElectrodo;
    
}

let valorMaterial ; //U$S
const ValorLaton= 14; //U$S
const ValorMO= 10; //U$S
const PesoCobreCromo=	9.8;	// g/cm3
const PesoLaton=	8.4;	// g/cm3
const ConstanteTiempoMO = 0.36; //contante de tienpo relacionada al diametro y largo del electrodo

//_________________________________________
//eleccion del material
let material =prompt ('elija el material (COBRECROMO O COBREBERIDIO)').toUpperCase()

    switch (material) {
        case 'COBRECROMO':
            valorMaterial = 100
             break;
        
        case 'COBREBERIDIO':
            valorMaterial = 200
            break;

        default:
            alert('defina un material')
            break;
    }


//_________________________________________

let DiametroElectrodo = prompt("Diametro del electrodo en cm ");
let AltoElectrodo = prompt("Largo del electrodo en cm (al largo de le suma 2.5cm de cono para posicionar)");



alert("el electrodo es de " + DiametroElectrodo + "cm y largo de " + AltoElectrodo + "cm");

alert( "Valor del electrodo " + ValorElectrodo (DiametroElectrodo, AltoElectrodo));


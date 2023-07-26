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


function cotizarMaterial(){
    let materialId=0
    let materialSelecionado = null
    
    
    while(!materialSelecionado){
        materialId = parseInt(prompt(
            'Que material desea su electrodo?: \n' +
            '1:Laton (U$S9)\n' +
            '2:Cobre(U$S4)\n' +
            '3:Cobrecromo (U$S140) \n' +
            '4:Cobreberidio (U$S150)'
        ))

        materialSelecionado = materiales.find(material => material.id === materialId)

    }

    let diametroMaterial = 0 
    while(!diametroMaterial || diametroMaterial === 0 ){
        diametroMaterial = parseInt(prompt("material elegido: " + materialSelecionado.nombre + 
        "\n introdusca el diametro deseado: " ))
        }
    
    
    let largoMaterial = 0 
    while(!largoMaterial || largoMaterial === 0 ){
        largoMaterial = parseInt(prompt("material elegido  " + materialSelecionado.nombre 
        +"\ndiamtero elegido:  "+ diametroMaterial + ' mm' + 
        "\n introdusca el largo deseado en mm" ))
        }

    let cantidadMaterial = 0 
    while(!cantidadMaterial || cantidadMaterial === 0 ){
        cantidadMaterial = parseInt(prompt("material elegido  " + materialSelecionado.nombre 
        +"\ndiamtero elegido:  "+ diametroMaterial + ' mm' + 
        "\nlargo elegido:" + largoMaterial +
        "\n introdusca la cantidad de electrodos" ))
     }

    const pedido = new Pedido (materialSelecionado.nombre, diametroMaterial, cantidadMaterial,
    largoMaterial, materialSelecionado.precioKilo, materialSelecionado.pesoEspecifico)

    return pedido
    
}

const pedido = cotizarMaterial()

pedido.calcularVolumen()

pedido.calcularManoObra()

pedido.calcularSubTotal()

pedido.calcularTotal()

console.log(pedido)

alert( `detalle del pedido:
-${pedido.material} es el material elegido
-${pedido.diametro} es el diametro elegido
-${pedido.largo} es el largo elegido mas 25mm
-${pedido.total} es el valor total`)


// //validacion de correo

// let ussEmail = ''
// let confUssEmail= ''
// let volverPreguntar = true

// do {
//     ussEmail = prompt('ingrese su correo:')
//     confUssEmail = prompt ('confirme su correo')

//     if (ussEmail === confUssEmail) {
//         alert('el correo ' + ussEmail + 'ha sido guardada con exito!')
//         volverPreguntar = false
//     }else{
//         alert('los datos no coinciden, intente nuevamente.')
        
//     }
// } while (volverPreguntar);

// function cotizarMaterial(){
//     let materialId=0
//     let materialSelecionado = null

//     while(!materialSelecionado){
//         materialId = parseInt(prompt(
//             'Que material desea su electrodo?: \n' +
//             '1:Laton (U$S9)\n' +
//             '2:Cobre(U$S4)\n' +
//             '3:Cobrecromo (U$S140) \n' +
//             '4:Cobreberidio (U$S150)'
//         ))

//         materialSelecionado = materiales.find(material => material.id === materialId)
//     }
    
//     diametroMateriales = 0 

//     while(!diametroMateriales || diametroMateriales === 0 ){
//         diametroMateriales = parent(prompt(materialSelecionado.nombre + 
//             '\n introdusca el diametro deseado' ))
//     }

//     largoMateriales = 0 

//     while(!largoMateriales || largoMateriales === 0 ){
//         largoMateriales = parent(prompt(materialSelecionado.nombre 
//             + diametroMateriales + ' cm' + 
//             '\n introdusca el largo deseado' ))
//     }

//     cantidadMateriales = 0

//     while (!cantidadMateriales || cantidadMateriales === 0 ){
//         cantidadMateriales = parseInt(prompt('producto elegido: '+ productoSeleccionado.nombre 
//         + diametroMateriales+ ' cm' + largoMateriales +' cm'+
//         '\nIntrudusca la cantidad deseada (solo numero)'))
//     }

//     const pedido = new Pedido (materialSelecionado.nombre, materialSelecionado.precio, 
//         diametroMateriales, largoMateriales, cantidadMateriales)

//     return pedido

// }

//definimos funcion para calculo de electrodos

// const ValorElectrodo = (a, b) =>{ //a=diametro del electrodo b= altura+2.5cm
    
//     const VolumenElectrodo = 3.14*0.25* Math.pow(a, 2)*(b + 2.5);
//     const ValorMatElectrodo = ((VolumenElectrodo*PesoCobreCromo)/1000)*valorMaterial; 
//     const ValorMOElectrodo = ((a*b*ConstanteTiempoMO)/60)*ValorMO;
//     const TotalElectrodo = (ValorMatElectrodo+ValorMOElectrodo)*1.4;

//     return TotalElectrodo;
    
// }

// let valorMaterial ; //U$S
// const ValorLaton= 14; //U$S
// const ValorMO= 10; //U$S
// const PesoCobreCromo=	9.8;	// g/cm3
// const PesoLaton=	8.4;	// g/cm3
// const ConstanteTiempoMO = 0.36; //contante de tienpo relacionada al diametro y largo del electrodo

// //_________________________________________
// //eleccion del material
// let material =prompt ('elija el material (COBRECROMO O COBREBERIDIO)').toUpperCase()

//     switch (material) {
//         case 'COBRECROMO':
//             valorMaterial = 100
//              break;
        
//         case 'COBREBERIDIO':
//             valorMaterial = 200
//             break;

//         default:
//             alert('defina un material')
//             break;
//     }


// //_________________________________________



// let DiametroElectrodo = prompt("Diametro del electrodo en cm ");
// let AltoElectrodo = prompt("Largo del electrodo en cm (al largo de le suma 2.5cm de cono para posicionar)");



// alert("el electrodo es de " + DiametroElectrodo + "cm y largo de " + AltoElectrodo + "cm");

// alert( "Valor del electrodo " + ValorElectrodo (DiametroElectrodo, AltoElectrodo));


class Pedido {
    constructor(material, diametro, cantidad, largo, precio, peso ){
        this.material = material;
        this.diametro = diametro;
        this.cantidad = cantidad;
        this.largo = largo;
        this.precio = precio;
        this.peso = peso;
        this.volumen = 0;
        this.subTotal = 0;
        this.manoObra = 0;
        this.constTiempo= 0.36
        this.valorManoObra = 15
        this.total = 0;
    }

    calcularVolumen(){
    this.volumen = 3.14*0.25* Math.pow(this.diametro, 2)*(this.largo + 25)
    }

    calcularManoObra(){
        this.manoObra = ((this.diametro*this.largo*this.constTiempo)/60)*this.valorManoObra
    }

    calcularSubTotal(){
        this.subTotal = (((this.volumen*this.peso)/1000)*this.precio*this.cantidad)+this.manoObra
    }

    calcularTotal (){
        this.total = this.subTotal*1.21
    }
    

    // const ValorElectrodo = (a, b) =>{ //a=diametro del electrodo b= altura+2.5cm
    
    //     const VolumenElectrodo = 3.14*0.25* Math.pow(a, 2)*(b + 2.5);

    //     const ValorMatElectrodo = ((VolumenElectrodo*PesoCobreCromo)/1000)*valorMaterial; 
    //     const ValorMOElectrodo = ((a*b*ConstanteTiempoMO)/60)*ValorMO;
}
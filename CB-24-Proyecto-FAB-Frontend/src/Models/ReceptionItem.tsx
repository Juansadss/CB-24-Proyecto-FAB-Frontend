class ReceptionItem{
    tipo: string;
    nroDeParte: string;
    cantidad: number;
    nroDeSerie: string;
    estante: string;
    fila: string;
    columna: string;
    constructor(tipo:string, nroDeParte:string, cantidad:number, nroDeSerie:string, estante:string, fila:string, columna:string){
        this.tipo = tipo;
        this.nroDeParte = nroDeParte;
        this.cantidad = cantidad;
        this.nroDeSerie = nroDeSerie;
        this.estante = estante;
        this.fila = fila;
        this.columna = columna;
    }

}

export {ReceptionItem};
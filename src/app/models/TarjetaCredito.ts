export class TarejetaCredito{
  id?:string;
  titular:string;
  numtarjeta:string;
  fechaexpiracion:string;
  cvv:number;
  fechacreacion:Date;
  fechaactualizacion:Date;


  constructor(titular:string,numtarjeta:string,fechaexp:string,cvv:number){
      this.titular = titular;
      this.numtarjeta = numtarjeta;
      this.fechaexpiracion = fechaexp;
      this.cvv = cvv;
      this.fechacreacion = new Date();
      this.fechaactualizacion = new Date();

  }
}
